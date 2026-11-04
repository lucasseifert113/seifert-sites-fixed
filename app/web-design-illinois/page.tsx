import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Illinois Web Design for Small Businesses",
  description:
    "Professional web design for Illinois small businesses. Seifert Sites LLC builds clean, modern websites for businesses in Galena, Freeport, Dixon, and northern Illinois.",
  alternates: { canonical: "https://www.seifertsites.com/web-design-illinois" },
};

const towns = [
  "Galena",
  "Freeport",
  "Dixon",
  "Rockford",
  "Sterling",
  "Rock Falls",
  "Oregon",
  "Mount Carroll",
  "Savanna",
  "Elizabeth",
  "Warren",
  "Lena",
];

export default function IllinoisWebDesign() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Web Design · Illinois</p>
          <h1 className="h1">
            Illinois web design for{" "}
            <span className="accent">small businesses</span>.
          </h1>
          <p className="lead">
            I build clean, modern websites for small businesses in northern Illinois. If you
            are in Galena, Freeport, Dixon, or anywhere in the region and your current site
            is not working for you, I can help.
          </p>
          <div className="btnRow">
            <Link className="btnPrimary" href="/contact">Request a free website evaluation</Link>
            <Link className="btnGhost" href="/work">
              See the work
            </Link>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">What I build</p>
            <h2 className="h2">Sites that make northern Illinois businesses look serious</h2>
            <p className="lead">
              Northern Illinois has a strong base of independent businesses. Most of them are
              held back by websites that look dated, load slowly, or do not have a clear path
              for customers to take action.
            </p>
          </div>
          <div className="grid3">
            {[
              {
                title: "Tourism and hospitality",
                text: "Northern Illinois draws visitors, especially around Galena. A fast, polished site is how you capture that traffic and turn it into bookings.",
              },
              {
                title: "Local services",
                text: "Contractors, healthcare, fitness, food. Every local service business needs a site that works on mobile and shows up in search.",
              },
              {
                title: "Retail and restaurants",
                text: "People check the site before they visit. If the site looks rough, some will not bother. A good site earns you the visit before you even open the door.",
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
            <h2 className="h2">Serving northern Illinois communities</h2>
            <p className="muted" style={{ marginBottom: 24 }}>
              Based in Platteville, WI, I am just south of the state line. I work with
              Illinois businesses remotely with fast turnarounds and direct communication.
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
            Not on the list? I work with businesses anywhere in Illinois.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">Straightforward pricing</h2>
            <p className="muted">
              Projects are quoted by scope. See the <Link href="/pricing">website packages and maintenance rate</Link>.
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

      <FreeEvaluationCTA />
    </main>
  );
}
