import type { Metadata } from "next";
import FreeEvaluationCTA from "@/app/components/FreeEvaluationCTA";
export const metadata: Metadata = {
  title: "Meet Lucas Seifert",
  description: "I run Seifert Sites LLC from Platteville, Wisconsin. When you hire me, you work directly with the person designing and building your website.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <p className="eyebrow">Seifert Sites LLC</p>
      <h1 className="h1">Meet Lucas Seifert</h1>
      <p className="lead">I run Seifert Sites LLC from Platteville, Wisconsin. When you hire me, you work directly with the person designing and building your website.</p>
    </div></section>
    <section className="section sectionBorder"><div className="container grid2">
      <div className="card"><h2 className="h2">From the first conversation to launch</h2><p className="muted">We agree on the pages, price, and next steps together. I build around how customers choose your service, share the work for review, and test the path from the first page to the inquiry.</p></div>
      <div className="card"><h2 className="h2">What that looks like in practice</h2><p className="muted">For Rebel Training, that meant bringing programs, coach profiles, pricing, and membership links together. For Tay Blendz, visitors can look through services and book through The Cut. Explore both in the portfolio.</p></div>
    </div></section>
    <FreeEvaluationCTA />
  </main>;
}
