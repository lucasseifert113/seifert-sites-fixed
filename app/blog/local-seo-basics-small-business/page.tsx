import type { Metadata } from "next";
import FreeEvaluationCTA from "@/app/components/FreeEvaluationCTA";
export const metadata: Metadata = {
  title: "Local SEO basics for small businesses",
  description: "Help nearby customers understand what you do, where you work, and how to contact you.",
  alternates: { canonical: "/blog/local-seo-basics-small-business" },
};

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <p className="eyebrow">Seifert Sites LLC</p>
      <h1 className="h1">Local SEO basics for small businesses</h1>
      <p className="lead">Help nearby customers understand what you do, where you work, and how to contact you.</p>
    </div></section>
    <section className="section sectionBorder"><div className="container grid2">
      <div className="card"><h2 className="h2">Describe each service clearly</h2><p className="muted">Use the words customers use, give each page a useful title, and include examples of the work. Link related services so visitors can find the next page. See <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google’s SEO Starter Guide</a>.</p></div>
      <div className="card"><h2 className="h2">Make your service area easy to check</h2><p className="muted">List the places you actually serve. Keep your business hours and contact details accurate on both your website and your eligible Google Business Profile.</p></div>
      <div className="card"><h2 className="h2">Understand local results</h2><p className="muted">Google considers relevance, distance, and prominence together. Reviews can contribute, but a review count alone cannot predict who appears first. See <a href="https://support.google.com/business/answer/7091">Google’s guide to local ranking</a>.</p></div>
      <div className="card"><h2 className="h2">Measure business interest</h2><p className="muted">Check which searches bring visitors to your pages, then review the inquiries that arrive. Use those questions to decide which services need a clearer explanation.</p></div>
    </div></section>
    <FreeEvaluationCTA />
  </main>;
}
