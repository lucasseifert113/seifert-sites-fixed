import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";
import { recentProjects } from "../lib/recent-projects";

export const metadata: Metadata = {
  title: "Our Work | Websites Built for Real Businesses",
  description:
    "See websites Seifert Sites has built for local businesses, coaches, and brands. Real projects, real results.",
  alternates: { canonical: "https://www.seifertsites.com/work" },
};

const projects: { name: string; desc: string; url: string; tag: string; caseStudy?: string }[] = [
  ...recentProjects.map((project) => ({
    ...project,
    tag: project.name === "Tay Blendz" ? "Barber" : "Sports recruiting",
  })),
  {
    name: "Rebel Training",
    tag: "Wrestling & fitness",
    desc: "Wrestling gym website organizing programs, pricing, and clear next steps in a sharper, more credible brand experience.",
    url: "https://rebeltraining.org",
    caseStudy: "/work/rebel-training",
  },
  {
    name: "Lucas Seifert Online",
    tag: "Personal brand",
    desc: "Personal brand and portfolio site built to establish authority, showcase client work, and convert visitors into leads.",
    url: "https://lucasseifert.online",
  },
  {
    name: "TideGuard",
    tag: "Climate education",
    desc: "Educational website covering coastal climate risk, sea-level rise, flooding, erosion, and resilience.",
    url: "https://tideguard.org",
  },
  {
    name: "Andy LeBrun Lacrosse",
    tag: "Lacrosse coaching",
    desc: "Multi-page website built to improve credibility, sharpen positioning, and make information easier to navigate.",
    url: "https://lebrunlacrosse.online",
  },
];
export default function WorkPage() {
  return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: 1000 }}>
          
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Work</p>
            <h2 className="h2">Selected projects</h2>
          </div>

          <div className="workGrid">
            {projects.map((project) => (
              <article key={project.url} className="card panelHighlight workCard">
                <span className="badge">{project.tag}</span>
                <h3 className="h3">{project.name}</h3>
                <p className="muted">{project.desc}</p>
                <div className="workActions">
                  <a className="btnPrimary" href={project.url} target="_blank" rel="noopener noreferrer">
                    View live site
                  </a>
                  {project.caseStudy ? (
                    <Link className="workCaseStudy" href={project.caseStudy}>Read case study →</Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free website evaluation"
        title="Like the direction? Get a free evaluation of your own site."
        text="If your current site feels outdated, weak, or unclear, I’ll review it and tell you what I’d fix first."
      />
    </main>
  );
}
