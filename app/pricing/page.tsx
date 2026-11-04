import BuildOffer from "../components/BuildOffer";
import { site } from "../lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Pricing | Web Design, Marketing & SEO",
  description:
    "Web design packages. Local SEO, Google Ads, social media, brand identity, and website audits. Clear pricing for local businesses.",
  alternates: { canonical: "https://www.seifertsites.com/pricing" },
};

const tiers = [
  {
    name: "Starter",
    price: site.pricing.starter,
    monthly: site.pricing.monthly + " maintenance",
    blurb: "For simple offers that need a clean one-page site and a clear call to action.",
    features: [
      "1 to 3 pages",
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
    price: site.pricing.growth,
    monthly: site.pricing.monthly + " maintenance",
    blurb: "For businesses that need a real multi-page site that looks established and converts better.",
    features: [
      "4 to 6 pages",
      "Premium design direction",
      "Conversion-first layout",
      "SEO-ready build",
      "Analytics setup",
    ],
    note: "For businesses with several distinct services.",
    highlight: true,
  },
  {
    name: "Premium",
    price: site.pricing.premium,
    monthly: site.pricing.monthly + " maintenance",
    blurb: "For brands that want more pages, more custom sections, and a stronger custom feel.",
    features: [
      "7+ pages",
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

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Pricing · Seifert Sites LLC</p>
          <h1 className="h1">
            Simple pricing. <span className="accent">No guessing</span>.
          </h1>
          <p className="lead">
            Prices cover the project. Page count, integrations, and content needs determine your quote within each range. Maintenance is priced separately.
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
                >Request a free website evaluation</Link>
              </div>

              <p className="mutedSmall" style={{ marginTop: 12 }}>
                {tier.note}
              </p>
            </div>
          ))}
        </div>
        <BuildOffer />
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
              { title: "Google Business Profile", price: site.pricing.profile, note: "One-time setup", text: "Full profile optimization, photos, categories, review strategy, and post scheduling." },
              { title: "Website Audit", price: "Free", note: "No strings attached", text: "One page or planned offer, with up to three recommendations by email." },
              { title: "Logo & Brand Identity", price: site.pricing.brand, note: "One-time", text: "Logo design, color palette, typography, and a brand guidelines document." },
              { title: "Local SEO + Google Business Profile", price: site.pricing.seo, note: "Monthly retainer", text: "Google Business Profile optimization, local citation building, keyword targeting for your city, and monthly ranking report." },
              { title: "Google & Meta Ads", price: site.pricing.ads, note: "+ ad spend", text: "Campaign setup, audience targeting, ad creative, and performance tracking." },
              { title: "Social Media Management", price: site.pricing.social, note: "Monthly retainer", text: "3 posts/week on Instagram and Facebook, caption writing in your brand voice, hashtag research, and monthly performance report." },
              { title: "Full Marketing Retainer", price: site.pricing.marketing, note: "Monthly retainer", text: "Social media management plus local SEO, monthly email newsletter, strategy call, and priority support. Everything in one package." },
              { title: "Monthly Maintenance", price: site.pricing.monthly, note: "Monthly", text: "Hosting, backups, security updates, small content edits, and uptime monitoring." },
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
              text: "We agree on a project price for the pages, features, and content you need before work begins.",
            },
            {
              title: "What does maintenance include?",
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

      <FreeEvaluationCTA />
    </main>
  );
}
