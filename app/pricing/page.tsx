import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";
import PricingJsonLd from "../components/PricingJsonLd";

export const metadata: Metadata = {
  title: "Pricing | Web Design, Marketing & SEO | Seifert Sites",
  description:
    "Web design starting at $250/page. Local SEO, Google Ads, social media, brand identity, and website audits. Clear pricing for local businesses.",
  alternates: { canonical: "https://seifertsites.com/pricing" },
};

const tiers = [
  {
    name: "Starter",
    price: "$250 to $850",
    monthly: "$50/month",
    blurb: "For simple offers that need a clean one-page site and a clear call to action.",
    features: [
      "1 to 3 pages",
      "$250 per page development fee",
      "$50/month for updates",
      "Mobile-first design",
      "Clean CTA flow",
      "Basic SEO structure",
      "Launch support",
    ],
    note: "Best for simple service offers and fast launches.",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$850 to $1,250",
    monthly: "$50/month",
    blurb: "For businesses that need a real multi-page site that looks established and converts better.",
    features: [
      "4 to 6 pages",
      "$200 per page development fee",
      "$50/month for updates",
      "Premium design direction",
      "Conversion-first layout",
      "SEO-ready build",
      "Analytics setup",
    ],
    note: "Best fit for most local businesses.",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$1,275+",
    monthly: "$50/month",
    blurb: "For brands that want more pages, more custom sections, and a stronger custom feel.",
    features: [
      "7+ pages",
      "$175 per page development fee",
      "$50/month for updates",
      "More custom sections",
      "Copy cleanup",
      "Priority turnaround",
      "Higher-end finish",
    ],
    note: "Best for brands that want stronger positioning and more depth.",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      <PricingJsonLd />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Pricing · Seifert Sites</p>
          <h1 className="h1">
            Simple pricing. <span className="accent">No guessing</span>.
          </h1>
          <p className="lead">
            Development starts at $250 per page. Ongoing updates are $50 per month.
            Final cost depends mostly on page count and scope.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`card ${tier.highlight ? "panelHighlight" : ""}`}
              style={{ position: "relative", overflow: "hidden" }}
            >
              {tier.highlight && (
                <div
                  style={{ position: "absolute", top: 18, right: 18 }}
                  className="badge"
                >
                  Most popular
                </div>
              )}

              <h2 className="h3" style={{ fontSize: 28 }}>
                {tier.name}
              </h2>

              <div className="price">{tier.price}</div>
              <p className="mutedSmall" style={{ marginTop: 4, marginBottom: 12 }}>
                {tier.monthly}
              </p>

              <p className="muted">{tier.blurb}</p>

              <div className="inlineDivider" />

              <ul className="list">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="btnRow">
                <Link
                  className={tier.highlight ? "btnPrimary" : "btnGhost"}
                  href="/contact"
                >
                  Get a quote
                </Link>
              </div>

              <p className="mutedSmall" style={{ marginTop: 12 }}>
                {tier.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Additional Services</p>
            <h2 className="h2">Marketing, branding, and optimization</h2>
            <p className="muted">Standalone services you can add to any web design package or purchase on their own.</p>
          </div>
          <div className="grid3">
            {[
              { title: "Google Business Profile", price: "$200", note: "One-time setup", text: "Full profile optimization, photos, categories, review strategy, and post scheduling." },
              { title: "Website Audit", price: "$200", note: "One-time", text: "Detailed report covering performance, SEO, UX, and conversion issues with a clear action plan." },
              { title: "Logo & Brand Identity", price: "$400 to $600", note: "One-time", text: "Logo design, color palette, typography, and a brand guidelines document." },
              { title: "Local SEO + Google Business Profile", price: "$175/mo", note: "Monthly retainer", text: "Google Business Profile optimization, local citation building, keyword targeting for your city, and monthly ranking report." },
              { title: "Google & Meta Ads", price: "$400/mo", note: "+ ad spend", text: "Campaign setup, audience targeting, ad creative, and performance tracking." },
              { title: "Social Media Management", price: "$250/mo", note: "Monthly retainer", text: "3 posts/week on Instagram and Facebook, caption writing in your brand voice, hashtag research, and monthly performance report." },
              { title: "Full Marketing Retainer", price: "$500/mo", note: "Best value", text: "Social media management plus local SEO, monthly email newsletter, strategy call, and priority support. Everything in one package." },
              { title: "Monthly Maintenance", price: "$50/mo", note: "Monthly", text: "Hosting, backups, security updates, small content edits, and uptime monitoring." },
            ].map((service) => (
              <div key={service.title} className="card cardSoft">
                <h3 className="h3" style={{ fontSize: 22 }}>{service.title}</h3>
                <div className="price" style={{ fontSize: 24 }}>{service.price}</div>
                <p className="mutedSmall" style={{ marginTop: 4, marginBottom: 12 }}>{service.note}</p>
                <p className="muted">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid3">
          {[
            {
              title: "How does pricing work?",
              text: "Development ranges from $175 to $250 per page depending on the plan. Starter is $250/page, Growth is $200/page, and Premium is $175/page.",
            },
            {
              title: "What does the $50/month include?",
              text: "Ongoing updates, small content changes, and keeping the site current without you having to touch it.",
            },
            {
              title: "How fast can you deliver?",
              text: "Fast if content and approvals move. Most delays happen because the inputs are slow, not the build.",
            },
            {
              title: "Can I bundle services?",
              text: "Yes. If you need a website plus SEO or ads, I will scope the full package and give you one clear price.",
            },
            {
              title: "Do I need a website first?",
              text: "Not always. Google Business Profile, audits, and brand identity work as standalone services. But a good website makes everything else work harder.",
            },
          ].map((item) => (
            <div key={item.title} className="card cardSoft">
              <h3 className="h3">{item.title}</h3>
              <p className="muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free website evaluation"
        title="Not ready for a quote yet? Start with a free evaluation."
        text="If you want honest feedback before spending money, book a free website evaluation and I’ll tell you what your site needs first."
      />

      <section className="section sectionBorder">
        <div className="container">
          <div className="card panelHighlight" style={{ textAlign: "center" }}>
            <p className="eyebrow">Get exact pricing</p>
            <h2 className="h2">Tell me how many pages you need and I’ll scope it fast.</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              If you know your page count, goals, and deadline, that is enough to get a clear quote.
            </p>
            <div className="btnRow" style={{ justifyContent: "center" }}>
              <Link className="btnPrimary" href="/contact">
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}