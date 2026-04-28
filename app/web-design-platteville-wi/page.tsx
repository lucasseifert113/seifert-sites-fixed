import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Web Design in Platteville, WI | Seifert Sites",
  description:
    "Professional web design for Platteville businesses. Seifert Sites builds clean, modern websites for local businesses in Platteville, WI and the surrounding area.",
  alternates: { canonical: "https://seifertsites.com/web-design-platteville-wi" },
};

export default function PlattevilleWebDesign() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Web Design · Platteville, WI</p>
          <h1 className="h1">
            Web design for <span className="accent">Platteville businesses</span>.
          </h1>
          <p className="lead">
            Based in Platteville, WI, I build clean, fast websites for local businesses that
            need a better online presence. No templates. No bloat. Just sites that look
            credible and convert.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="/contact">
              Get a free evaluation
            </Link>
            <Link className="btnGhost" href="/work">
              See the work
            </Link>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Local presence</p>
            <h2 className="h2">A Platteville web designer who knows the market</h2>
            <p className="lead">
              I am a UW-Platteville student and local entrepreneur. I know Platteville
              businesses, the community, and what local customers expect when they land on
              your site.
            </p>
          </div>
          <div className="grid3">
            {[
              {
                title: "Built for local search",
                text: "Every site I build is structured for local SEO so your business shows up when Platteville customers search for what you offer.",
              },
              {
                title: "Fast turnaround",
                text: "Most projects launch within 1 to 2 weeks. No long agency timelines, no waiting in a queue.",
              },
              {
                title: "Direct communication",
                text: "You work with me directly. No account managers, no handoffs. Fast answers and clear updates throughout.",
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
            <p className="eyebrow">Recent local work</p>
            <h2 className="h2">Real projects built right here</h2>
            <p className="muted">
              Rebel Training is a local wrestling gym in the Platteville area. I built their
              full website including programs, pricing, coach profiles, and membership
              integration. It launched fast and it works.
            </p>
          </div>
          <div className="grid2">
            <div className="card panelHighlight">
              <span className="badge" style={{ marginBottom: 12 }}>Gym / Athletic Program</span>
              <h3 className="h3">Rebel Training</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Full gym website with programs, scheduling, pricing, coach bios, and app
                integration. Built mobile-first to convert visitors into members.
              </p>
              <div className="btnRow">
                <a
                  className="btnPrimary"
                  href="https://rebeltraining.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site
                </a>
                <Link className="btnGhost" href="/work">
                  See all work
                </Link>
              </div>
            </div>
            <div className="card">
              <p className="eyebrow">What to expect</p>
              <h3 className="h3">Simple process, fast launch</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                We clarify your offer, design the right structure, then build and launch.
                Most Platteville web design projects are done in under two weeks.
              </p>
              <Link className="btnGhost" href="/services">
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">Clear pricing. No surprises.</h2>
            <p className="muted">
              Development ranges from $175 to $250 per page depending on the plan. Ongoing
              updates are $50 per month. Most local businesses fit the Growth plan.
            </p>
          </div>
          <div className="btnRow">
            <Link className="btnPrimary" href="/pricing">
              See full pricing
            </Link>
            <Link className="btnGhost" href="/contact">
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free evaluation"
        title="Not sure what your Platteville business needs online? Start here."
        text="Book a free website evaluation and I will tell you exactly what your site needs, what to fix first, and what it would cost. No pressure, no pitch."
      />
    </main>
  );
}
