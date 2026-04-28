import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Wisconsin Web Design for Small Businesses | Seifert Sites",
  description:
    "Small business web design across Wisconsin. Seifert Sites builds clean, modern websites for WI businesses in Platteville, Dodgeville, Baraboo, and beyond.",
  alternates: { canonical: "https://seifertsites.com/web-design-wisconsin" },
};

const towns = [
  "Platteville",
  "Dodgeville",
  "Baraboo",
  "Portage",
  "Lancaster",
  "Darlington",
  "Richland Center",
  "Viroqua",
  "Prairie du Chien",
  "Monroe",
  "Mineral Point",
  "Boscobel",
];

export default function WisconsinWebDesign() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Web Design · Wisconsin</p>
          <h1 className="h1">
            Wisconsin web design for{" "}
            <span className="accent">small businesses</span>.
          </h1>
          <p className="lead">
            I build clean, fast websites for small businesses across Wisconsin. Whether you
            are in a small town or a mid-size city, your business deserves a site that looks
            credible, loads fast, and actually brings in customers.
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
            <p className="eyebrow">Who I work with</p>
            <h2 className="h2">Built for Wisconsin small businesses</h2>
            <p className="lead">
              Wisconsin small towns are full of great businesses that get overlooked online
              because their website does not do them justice. That is the problem I fix.
            </p>
          </div>
          <div className="grid3">
            {[
              {
                title: "Local service businesses",
                text: "Contractors, gyms, salons, clinics, trades. If you serve a local market, a strong site is your best salesperson.",
              },
              {
                title: "Restaurants and retail",
                text: "People Google before they walk in. A bad site or no site means lost foot traffic. A good one earns trust before they even arrive.",
              },
              {
                title: "Coaches and personal brands",
                text: "If your credibility lives or dies on how you look online, the site needs to be sharp. Vague layouts and template designs quietly hurt you.",
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
            <h2 className="h2">Serving Wisconsin communities</h2>
            <p className="muted" style={{ marginBottom: 24 }}>
              Based in Platteville, I work with businesses across the state. Remote
              collaboration keeps things simple and fast regardless of where you are.
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
            Not on the list? I work with businesses anywhere in Wisconsin.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">Simple Wisconsin web design pricing</h2>
            <p className="muted">
              Development ranges from $175 to $250 per page depending on the plan. Ongoing
              updates are $50 per month. Most small businesses fit the Growth plan.
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
        title="Wisconsin small business? Let me look at your site for free."
        text="Book a free website evaluation and I will tell you what your site needs, what is hurting you, and what I would fix first. No pitch, just honest feedback."
      />
    </main>
  );
}
