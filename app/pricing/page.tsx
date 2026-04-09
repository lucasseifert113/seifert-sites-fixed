import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

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
        <div className="container grid3">
          {[
            {
              title: "How does pricing work?",
              text: "Development is $200 per page. The total build cost depends on how many pages your site needs.",
            },
            {
              title: "What does the $50/month include?",
              text: "Ongoing updates, small content changes, and keeping the site current without you having to touch it.",
            },
            {
              title: "How fast can you deliver?",
              text: "Fast if content and approvals move. Most delays happen because the inputs are slow, not the build.",
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