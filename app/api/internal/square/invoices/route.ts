import { createHash, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VERSION = "2026-09-16";

function isAuthorized(request: NextRequest) {
  const secret = process.env.SQUARE_ADMIN_ACTION_KEY;
  const given = request.headers.get("authorization")?.replace(/^Bearer /i, "");
  if (!secret || !given) return false;
  const a = Buffer.from(secret, "utf8");
  const b = Buffer.from(given, "utf8");
  return a.length === b.length && timingSafeEqual(a, b);
}

function squareBase() {
  // Fail closed: a missing environment selection never accesses production.
  return process.env.SQUARE_ENVIRONMENT === "production"
    ? "https://connect.squareup.com"
    : "https://connect.squareupsandbox.com";
}

async function square(path: string, options: RequestInit = {}) {
  const token = process.env.SQUARE_ACCESS_TOKEN;
  if (!token) throw new Error("Square access token not configured.");
  const response = await fetch(`${squareBase()}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Square-Version": VERSION,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });
  const data = await response.json();
  if (!response.ok) {
    const details = Array.isArray(data.errors)
      ? data.errors.map((error: { code?: string; detail?: string }) => error.code || error.detail).join(", ")
      : "Square request failed";
    throw new Error(`Square API ${response.status}: ${details}`);
  }
  return data;
}

function stableKey(prefix: string, projectKey: string, amountCents: number) {
  const digest = createHash("sha256").update(`${projectKey}:${amountCents}`).digest("hex");
  return `ss-${prefix}-${digest.slice(0, 55)}`;
}

type InvoiceDraftRequest = {
  projectKey: string;
  customerEmail: string;
  givenName: string;
  familyName: string;
  invoiceTitle: string;
  itemName: string;
  amountCents: number;
  dueDate: string;
  confirmDraftCreation?: boolean;
};

function validate(input: Partial<InvoiceDraftRequest>): input is InvoiceDraftRequest {
  return (
    typeof input.projectKey === "string" && /^[a-zA-Z0-9_-]{4,90}$/.test(input.projectKey) &&
    typeof input.customerEmail === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.customerEmail) &&
    typeof input.givenName === "string" && input.givenName.length >= 1 && input.givenName.length < 100 &&
    typeof input.familyName === "string" && input.familyName.length >= 1 && input.familyName.length < 100 &&
    typeof input.invoiceTitle === "string" && input.invoiceTitle.length >= 1 && input.invoiceTitle.length < 100 &&
    typeof input.itemName === "string" && input.itemName.length >= 1 && input.itemName.length < 250 &&
    Number.isInteger(input.amountCents) && Number(input.amountCents) > 0 && Number(input.amountCents) <= 5000000 &&
    typeof input.dueDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(input.dueDate) &&
    !Number.isNaN(Date.parse(input.dueDate + "T00:00:00Z"))
  );
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!process.env.SQUARE_ACCESS_TOKEN || !process.env.SQUARE_LOCATION_ID) {
    return NextResponse.json({ error: "Square integration not configured" }, { status: 503 });
  }

  let input: Partial<InvoiceDraftRequest>;
  try { input = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  if (!validate(input)) return NextResponse.json({ error: "Invalid invoice details" }, { status: 400 });

  // No Square write happens unless the owner separately confirms draft creation.
  if (input.confirmDraftCreation !== true) {
    return NextResponse.json({
      status: "PREVIEW_ONLY",
      customerEmail: input.customerEmail,
      itemName: input.itemName,
      amountCents: input.amountCents,
      dueDate: input.dueDate,
      deliveryMethod: "SHARE_MANUALLY",
      environment: process.env.SQUARE_ENVIRONMENT === "production" ? "production" : "sandbox",
    });
  }

  const locationId = process.env.SQUARE_LOCATION_ID;
  try {
    const match = await square("/v2/customers/search", {
      method: "POST",
      body: JSON.stringify({ query: { filter: { email_address: { exact: input.customerEmail } } } }),
    });
    if ((match.customers || []).length > 1) {
      return NextResponse.json({ error: "Multiple Square customers share this email; resolve manually before invoicing." }, { status: 409 });
    }

    let customerId: string = match.customers?.[0]?.id;
    if (!customerId) {
      const created = await square("/v2/customers", {
        method: "POST",
        body: JSON.stringify({
          idempotency_key: stableKey("customer", input.customerEmail.toLowerCase(), 0),
          given_name: input.givenName,
          family_name: input.familyName,
          email_address: input.customerEmail,
        }),
      });
      customerId = created.customer.id;
    }

    const orderResult = await square("/v2/orders", {
      method: "POST",
      body: JSON.stringify({
        idempotency_key: stableKey("order", input.projectKey, input.amountCents),
        order: {
          location_id: locationId,
          customer_id: customerId,
          reference_id: input.projectKey,
          line_items: [{
            quantity: "1",
            name: input.itemName,
            base_price_money: { amount: input.amountCents, currency: "USD" },
          }],
        },
      }),
    });

    const draft = await square("/v2/invoices", {
      method: "POST",
      body: JSON.stringify({
        idempotency_key: stableKey("invoice", input.projectKey, input.amountCents),
        invoice: {
          location_id: locationId,
          order_id: orderResult.order.id,
          primary_recipient: { customer_id: customerId },
          title: input.invoiceTitle,
          payment_requests: [{ request_type: "BALANCE", due_date: input.dueDate }],
          delivery_method: "SHARE_MANUALLY",
          accepted_payment_methods: { card: true },
        },
      }),
    });

    return NextResponse.json({
      status: draft.invoice.status,
      invoiceId: draft.invoice.id,
      invoiceVersion: draft.invoice.version,
      orderId: orderResult.order.id,
      amountCents: input.amountCents,
      customerEmail: input.customerEmail,
      environment: process.env.SQUARE_ENVIRONMENT === "production" ? "production" : "sandbox",
      publishStatus: "NOT_PUBLISHED",
      message: "Draft created. Square did not email the customer and no payment link was published.",
    });
  } catch (error) {
    // Never include tokens or raw authorization headers in responses or logs.
    return NextResponse.json({ error: error instanceof Error ? error.message : "Square request failed" }, { status: 502 });
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const invoiceId = request.nextUrl.searchParams.get("invoice_id");
  if (!invoiceId || invoiceId.length > 200) {
    return NextResponse.json({ error: "invoice_id required" }, { status: 400 });
  }
  try {
    const result = await square(`/v2/invoices/${encodeURIComponent(invoiceId)}`);
    const invoice = result.invoice;
    return NextResponse.json({
      invoiceId: invoice.id,
      status: invoice.status,
      publicUrl: invoice.public_url || null,
      collectedCents: (invoice.payment_requests || []).reduce(
        (total: number, p: { total_completed_amount_money?: { amount?: number } }) =>
          total + (p.total_completed_amount_money?.amount || 0), 0),
      currency: "USD",
      updatedAt: invoice.updated_at,
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Square request failed" }, { status: 502 });
  }
}
