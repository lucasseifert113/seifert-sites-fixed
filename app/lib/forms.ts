export async function sendWebsiteForm(data: FormData) {
  data.set("access_key", "415fcd94-5170-4925-a1e6-8e0ffe797de9");
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });
  if (!response.ok || (await response.json()).success !== true) {
    throw new Error("Form delivery was not confirmed");
  }
}
