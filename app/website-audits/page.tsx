import type { Metadata } from "next";
import FreeEvaluationCTA from "@/app/components/FreeEvaluationCTA";
export const metadata: Metadata = {
  title: "Free website evaluation",
  description: "Get a second pair of eyes on the page your customers see first.",
  alternates: { canonical: "/website-audits" },
};

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <p className="eyebrow">Seifert Sites LLC</p>
      <h1 className="h1">Free website evaluation</h1>
      <p className="lead">Get a second pair of eyes on the page your customers see first.</p>
    </div></section>
    <section className="section sectionBorder"><div className="container grid2">
      <div className="card"><h2 className="h2">What to send</h2><p className="muted">Share one public page and the action you want a visitor to take. If you are planning a site, describe one offer and your ideal customer.</p></div>
      <div className="card"><h2 className="h2">What comes back</h2><p className="muted">Lucas will email up to three recommendations about your message, mobile layout, or inquiry path. Implementation and deeper technical reviews can be scoped separately.</p></div>
    </div></section>
    <FreeEvaluationCTA />
  </main>;
}
