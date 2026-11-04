import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact | Get a Free Website Evaluation",
  description:
    "Request a free website evaluation from Seifert Sites LLC.",
  alternates: { canonical: "https://www.seifertsites.com/contact" },
};

const prepItems = [
  "What your business does",
  "What kind of site you need",
  "What is wrong with the current site",
  "What you want visitors to do",
];

export default function ContactPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Contact · Seifert Sites LLC</p>
          <h1 className="h1">
            Request a free website evaluation
            </h1>
            <p className="lead">{site.evaluation}</p>
        </div>
      </section>



      <section className="section sectionBorder">
        <div className="container grid2">
          <ContactForm />

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card">
              <p className="eyebrow">Prefer email?</p>
              <p className="muted">
                Reach out directly at{" "}
                <a
                  href={`mailto:${site.email}?subject=Website%20Project%20Inquiry`}
                  style={{ fontWeight: 700, textDecoration: "none" }}
                >
                  {site.email}
                </a>
              </p>

            </div>

            <div className="card">
              <p className="eyebrow">Make a payment</p>
              <p className="muted" style={{ marginBottom: 4 }}>
                Already working together? Pay your invoice securely through PayPal.
              </p>
              <div className="btnRow">
                <a
                  className="btnGhost"
                  href={site.paypal}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ gap: 8 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11l5-5 5 5M12 4v14"/></svg>
                  Pay with PayPal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid2">
          <div className="card cardSoft">
            <p className="eyebrow">Come prepared with</p>
            <ul className="list">
              {prepItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card cardSoft">
            <p className="eyebrow">Best fit projects</p>
            <p className="muted">
              Local services, personal brands, coaches, and businesses with an outdated site that is
              clearly underselling them.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
