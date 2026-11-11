import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const API_VERSION = "2026-09-16";

function authorized(request: NextRequest) {
  const secret = process.env.SQUARE_ADMIN_ACTION_KEY;
  const token = request.headers.get("authorization")?.replace(/^Bearer /i, "");
  if (!secret || !token) return false;
  const a = Buffer.from(secret, "utf8");
  const b = Buffer.from(token, "utf8");
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    return NextResponse.json({ error: "Square integration not configured" }, { status: 503 });
  }

  let body: { invoiceId?: string; version?: number; approvePublish?: boolean };
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  if (body.approvePublish !== true || typeof body.invoiceId !== "string" ||
      !/^inv:[A-Za-z0-9:._-]{4,180}$/.test(body.invoiceId) ||
      !Number.isInteger(body.version) || Number(body.version) < 0) {
    return NextResponse.json({ error: "Explicit approval, invoiceId and current version required" }, { status: 400 });
  }

  const environment = process.env.SQUARE_ENVIRONMENT === "production" ? "production" : "sandbox";
  const host = environment === "production" ? "https://connect.squareup.com" : "https://connect.squareupsandbox.com";
  const response = await fetch(`${host}/v2/invoices/${encodeURIComponent(body.invoiceId)}/publish`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
      "Square-Version": API_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idempotency_key: `ss-publish-${body.invoiceId}-v${body.version}`,
      version: body.version,
    }),
    cache: "no-store",
  });

  const data = await response.json();
  if (!response.ok) {
    return NextResponse.json({
      error: "Square rejected publish",
      codes: Array.isArray(data.errors) ? data.errors.map((e: { code?: string }) => e.code).filter(Boolean) : [],
    }, { status: response.status });
  }

  return NextResponse.json({
    invoiceId: data.invoice.id,
    status: data.invoice.status,
    publicUrl: data.invoice.public_url || null,
    deliveryMethod: data.invoice.delivery_method,
    environment,
    message: "Published to Square. SHARE_MANUALLY invoices are not automatically emailed.",
  });
}
