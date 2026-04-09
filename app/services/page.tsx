import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

const services = [
  {
    title: "Landing pages",
    text: "Built for a single offer, a single audience, and a single next step.",
    bullets: ["One-page structure", "Offer-focused messaging", "Mobile-first build", "Fast launch path"],
  },
  {
    title: "Business websites",
    text: "Multi-page sites for local businesses that need more trust, cleaner positioning, and stronger presentation.",
    bullets: ["3 to 6 core pages", "Clear navigation", "Conversion-first layout", "SEO-ready foundation"],
  },
  {
    title: "Redesigns",
    text: "For businesses with a site that feels old, cluttered, or cheap compared to the quality of the actual service.",
    bullets: ["Visual upgrade", "Better information hierarchy", "Cleaner page flow", "Stronger brand feel"],
  },
];

const addons = [
  "Copy cleanup",
  "Analytics setup",
  "SEO basics",
  "Launch support",
  "Hosting setup",
  "Additional pages",
];

export default function ServicesPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Services · Seifert Sites</p>
          <h1 className="h1">
            What I build and <span className="accent">what it solves</span>.
          </h1>
          <p className="lead">
            I do not sell random design work. I build websites that help businesses look more credible,
            communicate more clearly, and convert more of the people already finding them.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid3">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h2 className="h3" style={{ fontSize: 28 }}>{service.title}</h2>
              <p className="muted" style={{ marginBottom: 16 }}>{service.text}</p>
              <ul className="list">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Add-ons</p>
            <h2 className="h2">Only the extras that actually matter</h2>
          </div>

          <div className="gridAuto">
            {addons.map((addon) => (
              <div key={addon} className="card cardSoft">
                <p className="muted">{addon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free website evaluation"
        title="Not sure what service you actually need?"
        text="Start with a free website evaluation. I’ll tell you what’s weak, what matters, and whether you need a redesign, cleanup, or a full rebuild."
      />

      <section className="section sectionBorder">
        <div className="container grid2">
          <div className="card">
            <p className="eyebrow">What you can expect</p>
            <h2 className="h2">Clean communication. Fast execution.</h2>
            <p className="muted">
              You will get direct feedback, clear next steps, and a project that moves forward without
              weeks of drift.
            </p>
          </div>

          <div className="card panelHighlight">
            <p className="eyebrow">Ready to start</p>
            <h2 className="h2">Need a site that feels more premium?</h2>
            <p className="muted">Book a call and I will tell you the fastest path to a better site.</p>
            <div className="btnRow">
              <Link className="btnPrimary" href="/contact">Book a strategy call</Link>
              <Link className="btnGhost" href="/pricing">See pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
