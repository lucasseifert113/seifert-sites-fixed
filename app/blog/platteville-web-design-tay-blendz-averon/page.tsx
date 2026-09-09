import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../../components/FreeEvaluationCTA";

const title = "Platteville Web Design: Tay Blendz & Averon Sports Group";
const description = "See two recent Seifert Sites projects: a Platteville barber website for Tay Blendz and a recruiting and representation website for Averon Sports Group.";
const url = "https://seifertsites.com/blog/platteville-web-design-tay-blendz-averon";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "article", title, description, url,
    publishedTime: "2026-09-09T12:00:00-05:00",
    authors: ["Lucas Seifert"],
  },
  twitter: { card: "summary", title, description },
};

export default function Post() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        datePublished: "2026-09-09T12:00:00-05:00",
        dateModified: "2026-09-09T12:00:00-05:00",
        mainEntityOfPage: url,
        author: { "@type": "Person", name: "Lucas Seifert", url: "https://seifertsites.com/about" },
        publisher: { "@type": "Organization", name: "Seifert Sites", url: "https://seifertsites.com" },
      }) }} />
      <article>
        <section className="hero">
          <div className="container" style={{ maxWidth: 760 }}>
            <span className="badge">Recent projects</span>
            <h1 className="h1" style={{ marginTop: 20 }}>Platteville web design: <span className="accent">Tay Blendz and Averon Sports Group</span></h1>
            <p className="lead">Two recent websites from Seifert Sites, built for two different kinds of businesses.</p>
            <p className="mutedSmall" style={{ marginTop: 16 }}><time dateTime="2026-09-09">September 9, 2026</time> · By Lucas Seifert · 3 min read</p>
          </div>
        </section>
        <section className="section sectionBorder">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="blogContent">
              <p className="muted" style={{ marginBottom: 24 }}>If you are looking for web design in Platteville, WI, actual projects are a useful place to start. They show how a designer presents a business and what a visitor can do next. I recently added Tay Blendz and Averon Sports Group to the Seifert Sites portfolio. One serves local haircut clients; the other is a sports recruiting and representation brand.</p>

              <h2 className="h2">Tay Blendz: a barber website in Platteville</h2>
              <p className="muted" style={{ marginBottom: 24 }}>Tay works at Cut Club Barbershop in downtown Platteville. The website puts the essentials together: examples of recent cuts, a service list, the shop location, social links, and appointment booking through The Cut.</p>
              <p className="muted" style={{ marginBottom: 24 }}>The service list includes fades, tapers, lineups, beard work, kids cuts, and custom designs. A visitor can see the kind of work Tay offers before reserving a chair. The site also lists the shop at 45 N 3rd Street, with options to call or get directions.</p>
              <p className="muted" style={{ marginBottom: 24 }}>For this kind of local business, the booking link deserves a prominent place. Someone arriving from Instagram or a referral may already want an appointment. The website gives that person a direct route to the existing booking platform while giving a new visitor room to explore the work first.</p>
              <p style={{ marginBottom: 32 }}><a className="btnText" href="https://tayblendz.online" target="_blank" rel="noopener noreferrer">Explore the Tay Blendz website →</a></p>

              <h2 className="h2">Averon Sports Group: a sports brand website</h2>
              <p className="muted" style={{ marginBottom: 24 }}>The second addition is Averon Sports Group at averonathletes.com, a website for a recruiting and representation brand. It brings a different business category into the portfolio alongside local services, coaching, and athletic programs.</p>
              <p className="muted" style={{ marginBottom: 24 }}>A sports brand and a barber do not need the same message. A barber visitor may be choosing a service and an appointment. Someone exploring a recruiting and representation brand needs to understand what the organization does. Those differences are why I start a website project with the business and its audience.</p>
              <p style={{ marginBottom: 32 }}><a className="btnText" href="https://averonathletes.com" target="_blank" rel="noopener noreferrer">Explore the Averon Sports Group website →</a></p>

              <h2 className="h2">What to look for in your own business website</h2>
              <p className="muted" style={{ marginBottom: 24 }}>When reviewing your site, start with three questions. Can a new visitor tell what you offer? Is there enough relevant information to decide whether you are a good fit? Is the next step easy to find?</p>
              <p className="muted" style={{ marginBottom: 24 }}>For a local service business, that might mean a clear service list, photos of actual work, an address or service area, and a visible booking or contact link. Open the site on your phone and follow the path a customer would take. Check whether the details are current and whether the contact or booking destination works.</p>
              <p className="muted" style={{ marginBottom: 24 }}>Seifert Sites is based in Platteville and builds websites for local businesses and founder-led brands. You can explore our <Link href="/web-design-platteville-wi">Platteville web design services</Link>, compare <Link href="/pricing">website pricing</Link>, or browse the <Link href="/work">full project portfolio</Link> to see more examples.</p>
              <p className="muted" style={{ marginBottom: 32 }}>If you have a website already, a free evaluation is a practical starting point. I will review it and identify what I would improve first, from unclear information to a hard-to-find next step.</p>
              <Link className="btnGhost" href="/blog">Back to blog</Link>
            </div>
          </div>
        </section>
      </article>
      <FreeEvaluationCTA eyebrow="Free website evaluation" title="Make your next website update count." text="Get a review of your current website and a clear list of what I would improve first." />
    </main>
  );
}
