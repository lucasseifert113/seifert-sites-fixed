import Link from "next/link";
import FreeEvaluationCTA from "./components/FreeEvaluationCTA";
import { featuredProject, proofItems, site } from "./lib/site";

const steps = [
  {
    title: "Clarify the offer",
    text: "We tighten the message first so the site is selling something specific instead of looking pretty and doing nothing.",
  },
  {
    title: "Design the right structure",
    text: "Clean hierarchy, better CTA placement, and simple navigation so people know where to go fast.",
  },
  {
    title: "Build and launch",
    text: "Fast, responsive, and easy to manage. No bloated mess. Just a site that looks legit and works.",
  },
];

const fit = [
  "Local service businesses that need more credibility",
  "Personal brands and coaches who need cleaner positioning",
  "Businesses with outdated sites that feel cheap or confusing",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="kickerRow" style={{ marginBottom: 18 }}>
              <span className="badge">Premium websites</span>
              <span
                className="badge"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                Built for local businesses
              </span>
            </div>

            <p className="eyebrow">Seifert Sites · Web design and development</p>
            <h1 className="h1">
              Websites that make your business look{" "}
              <span className="accent">more credible</span> and convert better.
            </h1>
            <p className="lead">
              I build clean, modern websites for local businesses that are tired of looking outdated,
              hard to trust, or impossible to navigate.
            </p>

            <div className="btnRow">
              <Link className="btnPrimary" href="/contact">
                {site.primaryCta}
              </Link>
              <Link className="btnGhost" href="/work">
                {site.secondaryCta}
              </Link>
            </div>

            <div className="kickerRow" style={{ marginTop: 20 }}>
              {proofItems.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: 13,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="card panelHighlight">
            <p className="eyebrow">Featured launch</p>

            <h2 className="h3" style={{ fontSize: 28, marginBottom: 8 }}>
              <a
                href="https://lebrunlacrosse.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                {featuredProject.name}
              </a>
            </h2>

            <p className="muted" style={{ marginBottom: 18 }}>
              {featuredProject.summary}
            </p>

            <div className="grid2" style={{ gap: 14 }}>
              <div className="metric">
                <strong>Live</strong>
                <span className="mutedSmall">Recently launched</span>
              </div>
              <div className="metric">
                <strong>Multi-page</strong>
                <span className="mutedSmall">Clearer structure</span>
              </div>
            </div>

            <div className="inlineDivider" />

            <ul className="list">
              {featuredProject.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="btnRow">
              <a
                className="btnPrimary"
                href="https://lebrunlacrosse.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site
              </a>

              <Link className="btnText" href="/contact">
                Start your project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Why businesses hire me</p>
            <h2 className="h2">The problem usually is not traffic. It is trust.</h2>
            <p className="lead">
              A weak site quietly kills referrals, inbound leads, and close rate. If the business looks
              second-rate online, people assume the service is second-rate too.
            </p>
          </div>

          <div className="grid3">
            {[
              {
                title: "Look more established",
                text: "Cleaner layout, better typography, and stronger brand presentation so the business feels real immediately.",
              },
              {
                title: "Guide people to action",
                text: "Better page structure and CTA placement so visitors know what to do instead of bouncing.",
              },
              {
                title: "Launch without chaos",
                text: "Simple process, fast turnaround, and direct communication so the project actually gets finished.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="h3">{item.title}</h3>
                <p className="muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Best fit</p>
            <h2 className="h2">Who this is for</h2>
          </div>

          <div className="gridAuto">
            {fit.map((item) => (
              <div key={item} className="card cardSoft">
                <p className="muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Process</p>
            <h2 className="h2">Fast, simple, and built to ship</h2>
          </div>

          <div className="grid3">
            {steps.map((step, index) => (
              <div key={step.title} className="card">
                <span className="badge" style={{ marginBottom: 14 }}>
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="h3">{step.title}</h3>
                <p className="muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free website evaluation"
        title="Before you rebuild, get clear on what is actually broken."
        text="I’ll review your current site and tell you what’s hurting trust, what’s hurting conversions, and what I’d fix first."
      />

      <section className="section sectionBorder">
        <div className="container">
          <div className="card panelHighlight" style={{ textAlign: "center" }}>
            <p className="eyebrow">Next move</p>
            <h2 className="h2">If your current site feels average, that is the problem.</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              You do not need more fluff. You need a sharper website that helps the business look easier
              to trust and easier to buy from.
            </p>
            <div className="btnRow" style={{ justifyContent: "center" }}>
              <Link className="btnPrimary" href="/contact">
                {site.primaryCta}
              </Link>
              <Link className="btnGhost" href="/pricing">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}