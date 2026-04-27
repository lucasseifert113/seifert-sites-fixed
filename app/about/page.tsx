import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "About | Lucas Seifert - Web Designer in Platteville, WI",
  description:
    "Meet Lucas Seifert, the founder of Seifert Sites. Finance student and web designer helping local businesses in Wisconsin, Iowa, and Illinois look more credible online.",
  alternates: { canonical: "https://seifertsites.com/about" },
};

const values = [
  {
    title: "Clarity over cleverness",
    text: "Good websites communicate fast. If someone has to think about where to click, the site is failing.",
  },
  {
    title: "Speed over perfection",
    text: "A site that ships this week beats a perfect mockup that sits in a folder for three months.",
  },
  {
    title: "Honesty over flattery",
    text: "If your current site is fine, I will tell you. If it is costing you business, I will tell you that too.",
  },
];

const timeline = [
  { year: "2024", text: "Started building websites for friends and local projects" },
  { year: "2025", text: "Launched Seifert Sites as a real business, filed the LLC" },
  { year: "2026", text: "10+ sites launched for businesses across WI, IA, and IL" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">About · Seifert Sites</p>
          <h1 className="h1">
            Built by someone who actually{" "}
            <span className="accent">cares if it works</span>.
          </h1>
          <p className="lead">
            I am Lucas Seifert. I run Seifert Sites out of Platteville, Wisconsin. I build
            websites for local businesses that are tired of looking outdated, confusing, or
            cheap compared to what they actually deliver.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid2">
          <div>
            <p className="eyebrow">The short version</p>
            <h2 className="h2">I am a finance student who builds websites.</h2>
            <p className="muted" style={{ marginBottom: 16 }}>
              I study finance at UW-Platteville and run Seifert Sites on the side. I got into
              web design because I kept seeing local businesses with terrible websites and
              thought: these people deserve better.
            </p>
            <p className="muted" style={{ marginBottom: 16 }}>
              Most web designers charge too much, take too long, and deliver something the
              business owner cannot even update. I do the opposite: fair pricing, fast
              turnaround, and sites built so clean they actually work.
            </p>
            <p className="muted">
              I am not an agency. I am one person who does good work, communicates directly,
              and gets things shipped.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card panelHighlight">
              <p className="eyebrow">Quick facts</p>
              <ul className="list">
                <li>Based in Platteville, WI</li>
                <li>Finance major at UW-Platteville</li>
                <li>Seifert Sites LLC (Wisconsin)</li>
                <li>Serving WI, IA, and IL businesses</li>
                <li>10+ websites launched</li>
              </ul>
            </div>

            <div className="card">
              <p className="eyebrow">Timeline</p>
              <div style={{ display: "grid", gap: 14 }}>
                {timeline.map((t) => (
                  <div key={t.year} style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                    <span className="badge" style={{ flexShrink: 0 }}>{t.year}</span>
                    <p className="muted">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">How I work</p>
            <h2 className="h2">Three things I care about</h2>
          </div>

          <div className="grid3">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="h3">{v.title}</h3>
                <p className="muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free website evaluation"
        title="Want to see how I think? Start with a free evaluation."
        text="Send me your current site and I will tell you exactly what I would fix, what I would keep, and what matters most."
      />

      <section className="section sectionBorder">
        <div className="container">
          <div className="card panelHighlight" style={{ textAlign: "center" }}>
            <p className="eyebrow">Work with me</p>
            <h2 className="h2">Ready to get your site right?</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              I keep my client list small so every project gets real attention. If that sounds
              like what you need, let us talk.
            </p>
            <div className="btnRow" style={{ justifyContent: "center" }}>
              <Link className="btnPrimary" href="/contact">
                Book a strategy call
              </Link>
              <Link className="btnGhost" href="/work">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
