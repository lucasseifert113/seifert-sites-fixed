import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Iowa Web Design for Small Businesses | Seifert Sites",
  description:
    "Professional web design for Iowa small businesses. Seifert Sites builds clean, modern websites for businesses in Dubuque, Decorah, and eastern Iowa.",
  alternates: { canonical: "https://seifertsites.com/web-design-iowa" },
};

const towns = [
  "Dubuque",
  "Decorah",
  "Waukon",
  "Postville",
  "Guttenberg",
  "Elkader",
  "McGregor",
  "Lansing",
  "Strawberry Point",
  "Oelwein",
  "Manchester",
  "Dyersville",
];

export default function IowaWebDesign() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Web Design · Iowa</p>
          <h1 className="h1">
            Iowa web design for{" "}
            <span className="accent">small businesses</span>.
          </h1>
          <p className="lead">
            I build clean, modern websites for small businesses across eastern Iowa. If your
            current site looks outdated, confusing, or just does not reflect what your
            business is actually worth, I can fix that.
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
            <p className="eyebrow">The problem</p>
            <h2 className="h2">Most small business websites underperform</h2>
            <p className="lead">
              Eastern Iowa has great businesses. Most of them have websites that do not do
              them justice. Slow load times, outdated design, no clear call to action. That
              costs real customers every week.
            </p>
          </div>
          <div className="grid3">
            {[
              {
                title: "Look more established",
                text: "A clean, modern site tells visitors you are serious before they read a single word. Design is trust.",
              },
              {
                title: "Show up in local search",
                text: "Every site I build is structured to help you rank locally. That means more customers finding you without paid ads.",
              },
              {
                title: "Convert better",
                text: "Good structure and clear CTAs turn visitors into leads. Most sites bury the ask or do not have one at all.",
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
            <p className="eyebrow">Service area</p>
            <h2 className="h2">Serving eastern Iowa communities</h2>
            <p className="muted" style={{ marginBottom: 24 }}>
              Based just across the border in Platteville, WI, I work with Iowa businesses
              remotely. Fast communication, no travel overhead, same quality output.
            </p>
          </div>
          <div className="gridAuto">
            {towns.map((town) => (
              <div key={town} className="card cardSoft">
                <p className="muted">{town}</p>
              </div>
            ))}
          </div>
          <p className="mutedSmall" style={{ marginTop: 16 }}>
            Not on the list? I work with businesses anywhere in Iowa.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">Honest pricing for Iowa small businesses</h2>
            <p className="muted">
              Development ranges from $175 to $250 per page depending on the plan. Ongoing
              updates are $50 per month. You know the cost before we start.
            </p>
          </div>
          <div className="btnRow">
            <Link className="btnPrimary" href="/pricing">
              See full pricing
            </Link>
            <Link className="btnGhost" href="/services">
              See what is included
            </Link>
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free evaluation"
        title="Iowa business? Get an honest look at your site for free."
        text="Book a free website evaluation and I will tell you what your site needs, what is holding you back, and what I would fix first. No pressure."
      />
    </main>
  );
}
