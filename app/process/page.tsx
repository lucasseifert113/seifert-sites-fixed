import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Discovery",
    text: "We define the offer, the audience, and the actual job of the website before design starts.",
  },
  {
    num: "02",
    title: "Design direction",
    text: "I map the structure, tighten the hierarchy, and shape the visual direction around trust and clarity.",
  },
  {
    num: "03",
    title: "Build",
    text: "The site gets built responsive, lightweight, and clean. No bloated theme junk. No chaos.",
  },
  {
    num: "04",
    title: "Launch",
    text: "We ship, test, and make sure the business can actually use the site confidently after launch.",
  },
];

export default function ProcessPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Process · Seifert Sites</p>
          <h1 className="h1">
            Simple process. <span className="accent">No wasted motion</span>.
          </h1>
          <p className="lead">
            The goal is not to drag you through a bloated agency process. The goal is to get a better
            site live without the project turning into a mess.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container gridAuto">
          {steps.map((step) => (
            <div key={step.num} className="card">
              <span className="badge" style={{ marginBottom: 14 }}>Step {step.num}</span>
              <h2 className="h3">{step.title}</h2>
              <p className="muted">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid3">
          {[
            {
              title: "Clear scope",
              text: "You know what is being built, what is not, and what the next checkpoint is.",
            },
            {
              title: "Direct feedback",
              text: "No fluff. No endless loops. Just the decisions needed to keep shipping.",
            },
            {
              title: "Launch-ready finish",
              text: "Responsive pages, working CTAs, and a site that is ready to represent the business properly.",
            },
          ].map((item) => (
            <div key={item.title} className="card cardSoft">
              <h3 className="h3">{item.title}</h3>
              <p className="muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div className="card panelHighlight" style={{ textAlign: "center" }}>
            <p className="eyebrow">Next step</p>
            <h2 className="h2">Need this handled fast and clean?</h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Book a strategy call. I will tell you what to fix, what to ignore, and what the project
              should look like.
            </p>
            <div className="btnRow" style={{ justifyContent: "center" }}>
              <Link className="btnPrimary" href="/contact">Book a strategy call</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
