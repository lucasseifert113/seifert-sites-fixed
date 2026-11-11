// One-time read-only Square Production connection test.
// Do not log access tokens or credentials. This is run only in the test branch build.
const token = process.env.SQUARE_ACCESS_TOKEN;
const locationId = process.env.SQUARE_LOCATION_ID;
const environment = process.env.SQUARE_ENVIRONMENT;

if (!token || !locationId || !environment) {
  console.error("SQUARE_CONNECTION_TEST: CONFIG_MISSING");
  process.exit(1);
}
if (environment !== "production") {
  console.error("SQUARE_CONNECTION_TEST: WRONG_ENVIRONMENT");
  process.exit(1);
}
const url = "https://connect.squareup.com/v2/locations";
try {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token,
      "Square-Version": "2026-09-16",
      "Accept": "application/json",
    },
    signal: AbortSignal.timeout(15000),
  });
  const payload = await response.json();
  if (response.ok && Array.isArray(payload.locations) && payload.locations.some((l) => l.id === locationId)) {
    console.log("SQUARE_CONNECTION_TEST: PASS (production location accessible, read-only)");
  } else {
    console.error("SQUARE_CONNECTION_TEST: FAIL HTTP " + response.status);
    console.error("SQUARE_CONNECTION_TEST: ERROR_CODES " + (payload.errors || []).map(e=>e.code).filter(Boolean).join(","));
    console.error("SQUARE_CONNECTION_TEST: CONTENT_TYPE " + (response.headers.get("content-type") || "unknown"));
    console.error("SQUARE_CONNECTION_TEST: RESPONSE_KEYS " + Object.keys(payload ?? {}).join(","));
    console.error("SQUARE_CONNECTION_TEST: SQUARE_REQUEST_ID_PRESENT " + Boolean(response.headers.get("x-request-id")));
    process.exit(1);
  }
} catch (e) {
  console.error("SQUARE_CONNECTION_TEST: NETWORK_ERROR " + (e?.name || "unknown"));
  process.exit(1);
}
