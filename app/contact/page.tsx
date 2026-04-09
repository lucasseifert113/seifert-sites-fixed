import { site } from "../lib/site";

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
          <p className="eyebrow">Contact · Seifert Sites</p>
          <h1 className="h1">
            Let&apos;s build something that <span className="accent">actually helps the business</span>.
          </h1>
          <p className="lead">
            Keep it simple. Tell me what you do, what you need, and what the current bottleneck is.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid2">
          <div className="card panelHighlight">
            <p className="eyebrow">Fastest path</p>
            <h2 className="h2">Book a strategy call</h2>
            <p className="muted">
              Best option if you want direct feedback, a rough scope, and clear next steps.
            </p>
            <div className="btnRow">
              <a className="btnPrimary" href={site.calendlyUrl} target="_blank" rel="noreferrer">
                {site.primaryCta}
              </a>
            </div>
            <p className="mutedSmall" style={{ marginTop: 14 }}>
              30-minute intro call. Clear direction. No wasted time.
            </p>
          </div>

          <div className="card">
            <p className="eyebrow">Prefer email?</p>
            <h2 className="h2">Send the project details</h2>
            <p className="muted">
              Best option if you want to explain the project asynchronously before hopping on a call.
            </p>
            <div className="inlineDivider" />
            <a
              href={`mailto:${site.email}?subject=Website%20Project%20Inquiry`}
              style={{
                display: "inline-flex",
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: -0.3,
              }}
            >
              {site.email}
            </a>
            <p className="mutedSmall" style={{ marginTop: 12 }}>
              Reach out directly and I’ll get back to you within 24 hours.
            </p>
            <div className="btnRow">
              <a
                className="btnGhost"
                href={`mailto:${site.email}?subject=Free%20Website%20Evaluation&body=Hi%20Lucas%2C%0A%0AI%E2%80%99d%20like%20a%20free%20website%20evaluation%20for%20my%20business.%0A%0ABusiness%20name%3A%0AWebsite%20link%3A%0A%0AThanks.`}
              >
                Get a free website evaluation
              </a>
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
