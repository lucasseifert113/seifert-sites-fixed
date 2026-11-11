# Square API integration — Seifert Sites LLC

Status: **staged only**. The code is not a connected Square account or a native ChatGPT plugin. No invoice is issued or sent just by deploying these routes.

## Configuration

Set these as encrypted Vercel project environment variables (do not paste tokens in chat or commit them):

- `SQUARE_ENVIRONMENT=sandbox` (switch to `production` only after testing)
- `SQUARE_ACCESS_TOKEN` — Square application access token, with customer/order/invoice permissions
- `SQUARE_LOCATION_ID` — the corresponding Square location ID
- `SQUARE_ADMIN_ACTION_KEY` — a long random secret used to authorize these private endpoints; never expose it to the browser

The routes return 401 without the admin key; invoice drafts return 503 if Square credentials are absent. They use Square API version 2026-09-16. The default environment is Sandbox.

## Protected routes

- `POST /api/internal/square/invoices` accepts a customer, a quoted line item and due date. Returns preview-only JSON unless `confirmDraftCreation: true`. If explicitly confirmed, searches/creates a customer, creates an order and a **draft** invoice using stable idempotency keys. `delivery_method=SHARE_MANUALLY` prevents Square from emailing a customer. The draft is not published.
- `POST /api/internal/square/publish` requires the exact invoice ID, current Square invoice version, and `approvePublish: true`. Publishing creates Square's hosted payment link but does **not** send a customer email when delivery is SHARE_MANUALLY. Share the returned link only after Lucas authorizes client contact.
- `GET /api/internal/square/invoices?invoice_id=...` reads Square invoice status and the sum of recorded completed payments. It is read-only.

Call these only from an authenticated internal server or trusted local client. Supply `Authorization: Bearer <SQUARE_ADMIN_ACTION_KEY>`; never put that key in a publicly visible frontend.

## First invoice candidate (not created)

Client: Derrick Pomranky, Petey George, `pomrankyderrick@yahoo.com`.
Accepted agreement: $750 total for one-page website + bottle label with two revision rounds; proposed initial invoice $375 (37,500 cents), remaining $375 after final preview and label-proof approval.

Draft payload example (choose and confirm the real due date before running):
```json
{
  "projectKey": "petey-george-2026-deposit",
  "customerEmail": "pomrankyderrick@yahoo.com",
  "givenName": "Derrick",
  "familyName": "Pomranky",
  "invoiceTitle": "Petey George - Website and Bottle Label Deposit",
  "itemName": "50% deposit: One-page website and bottle label, two revisions",
  "amountCents": 37500,
  "dueDate": "YYYY-MM-DD",
  "confirmDraftCreation": false
}
```

Set `confirmDraftCreation=true` only after confirming the invoice details. Then review the Square draft before separately approving publication. Square tax configuration/requirements must be checked against the final invoice; this example does not decide taxability.

## Airtable reconciliation

Existing project: Airtable Seifert Sites LLC Sales Pipeline, Petey George record `recIHpT3IjDgLnemm`.

Current staged integration **does not automatically update Airtable or subscribe to Square webhooks**. When a Square draft, published invoice or payment is actually verified, reconcile the applicable Airtable fields (Invoiced Amount only after issue; Collected Cash only after Square verifies payment) with source IDs and times. Webhook signing and write automation need a separate secured configuration.

## Required test before production

1. Configure Square Sandbox access token, location ID, and admin secret.
2. Verify unauthenticated calls return 401 and invalid payloads are rejected.
3. Run preview-only request and confirm no Square side effects.
4. Explicitly create a Sandbox draft, review it, then publish manually and open Sandbox payment URL.
5. Verify the read-only GET status and payment amount.
6. Repeat with approved production credentials after Lucas authorizes the live invoice. Do not duplicate any preexisting Square invoice.
