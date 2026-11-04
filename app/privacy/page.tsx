import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "This notice explains how Seifert Sites LLC handles information when you visit this website or request a website evaluation.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <p className="eyebrow">Seifert Sites LLC</p>
      <h1 className="h1">Privacy notice</h1>
      <p className="lead">This notice explains how Seifert Sites LLC handles information when you visit this website or request a website evaluation.</p>
    </div></section>
    <section className="section sectionBorder"><div className="container grid2">
      <div className="card"><h2 className="h2">When you send an inquiry</h2><p className="muted">The form asks for your name, email, business name, and project goal. Your phone number and website address are optional. Web3Forms processes the submission and forwards it to our email inbox. We use it to reply, evaluate the project, and follow up. Please leave out passwords, payment details, and other sensitive information.</p></div>
      <div className="card"><h2 className="h2">Inquiry measurement</h2><p className="muted">We label evaluation requests in our inbox according to whether you indicate interest in hiring someone. This lets us count requests with a business, a project goal, and interest in paid work. We review the details to determine project fit.</p></div>
      <div className="card"><h2 className="h2">Hosting and other websites</h2><p className="muted">Vercel hosts this website and processes technical request information such as IP addresses to serve and operate it. If you follow a project link or use PayPal to pay an invoice, that provider handles your visit under its own privacy notice.</p></div>
      <div className="card"><h2 className="h2">Questions about your information</h2><p className="muted">Email <a href="mailto:lucas@seifertsites.com">lucas@seifertsites.com</a> to ask about an inquiry or request that we correct or delete information you sent.</p></div>
    </div></section>

  </main>;
}
