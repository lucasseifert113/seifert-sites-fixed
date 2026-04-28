import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Rebel Training Case Study | Wrestling Gym Website | Seifert Sites",
  description:
    "How Seifert Sites built a complete website for Rebel Training, a wrestling and strength gym. Programs, pricing, coach profiles, scheduling, and membership integration.",
  alternates: { canonical: "https://seifertsites.com/work/rebel-training" },
};

const stats = [
  { value: "7", label: "Pages built" },
  { value: "2 weeks", label: "Launch time" },
  { value: "$1,225", label: "Project cost" },
  { value: "4", label: "Programs listed" },
];

const problems = [
  "No website at all. All information lived on social media and word of mouth.",
  "Pricing, schedule, and program details were scattered across DMs and flyers.",
  "No way for parents or athletes to book sessions or understand what was offered.",
  "The brand had strong energy but no online presence to match it.",
];

const solutions = [
  {
    title: "Full program breakdown",
    text: "Each program (Youth Wrestling, Advanced Wrestling, Strength & Conditioning, Private Training) gets its own section with clear descriptions, age groups, and what athletes get.",
  },
  {
    title: "Pricing table",
    text: "Clean pricing table with monthly rates, package options, and private session costs. No hidden fees, no confusion. Parents can make a decision without calling.",
  },
  {
    title: "Coach profiles",
    text: "Head coach Devin Pomranky's background, credentials, and coaching philosophy front and center. Trust starts with knowing who is coaching your kid.",
  },
  {
    title: "Weekly schedule",
    text: "Full class schedule displayed in a responsive table. Athletes and parents can check times without digging through group chats.",
  },
  {
    title: "Athletes Ocean integration",
    text: "TeamSpace app integration for booking, communication, and progress tracking. Links to App Store and web app built right into the site.",
  },
  {
    title: "Contact form with program selector",
    text: "Simple form that asks the right questions: name, email, which program, and a message. Gets routed directly to the coach.",
  },
];

export default function RebelTrainingCaseStudy() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            <span className="badge">Case Study</span>
            <span
              className="badge"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              Wrestling Gym
            </span>
          </div>
          <h1 className="h1">
            Rebel Training: from zero online presence to a{" "}
            <span className="accent">complete gym website</span>.
          </h1>
          <p className="lead">
            Rebel Training is a wrestling and strength gym building athletes who refuse to
            quit. They had the coaching, the community, and the results. They just did not
            have a website.
          </p>
          <div className="btnRow">
            <a
              className="btnPrimary"
              href="https://rebeltraining.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              View live site
            </a>
            <Link className="btnGhost" href="/contact">
              Start your project
            </Link>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div
            className="grid4"
            style={{ textAlign: "center" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="card">
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    letterSpacing: -1,
                    color: "var(--orange2)",
                    marginBottom: 4,
                  }}
                >
                  {s.value}
                </div>
                <p className="mutedSmall">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container grid2">
          <div>
            <p className="eyebrow">The problem</p>
            <h2 className="h2">Strong brand, zero online presence</h2>
            <p className="muted" style={{ marginBottom: 20 }}>
              Rebel Training had a growing roster of athletes, a dedicated coach, and real
              momentum. But everything lived offline or in social media DMs.
            </p>
            <ul className="list">
              {problems.map((p) => (
                <li key={p} className="muted">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card panelHighlight" style={{ alignSelf: "start" }}>
            <p className="eyebrow">Client</p>
            <h3 className="h3" style={{ marginBottom: 8 }}>
              Rebel Training
            </h3>
            <p className="mutedSmall" style={{ marginBottom: 16 }}>
              Wrestling and strength training gym. Youth through advanced athletes. Founded
              by Devin Pomranky.
            </p>
            <p className="eyebrow" style={{ marginTop: 12 }}>
              Location
            </p>
            <p className="mutedSmall">Wisconsin</p>
            <p className="eyebrow" style={{ marginTop: 12 }}>
              Industry
            </p>
            <p className="mutedSmall">Fitness / Athletic Training</p>
            <p className="eyebrow" style={{ marginTop: 12 }}>
              Package
            </p>
            <p className="mutedSmall">Premium (7 pages + integrations)</p>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">The solution</p>
            <h2 className="h2">Everything an athlete or parent needs, in one place</h2>
          </div>
          <div className="grid2">
            {solutions.map((s) => (
              <div key={s.title} className="card">
                <h3 className="h3" style={{ marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow">The result</p>
          <h2 className="h2">A website that matches the intensity of the program</h2>
          <p className="muted" style={{ marginBottom: 20 }}>
            Rebel Training now has a professional online presence that does what social media
            cannot: organize information, build trust with parents at first glance, and make
            it dead simple to understand what the gym offers and how to join.
          </p>
          <p className="muted" style={{ marginBottom: 20 }}>
            The site launched in under two weeks from kickoff. No back-and-forth committee
            decisions, no scope creep. Clear goals, fast execution, clean result.
          </p>
          <p className="muted">
            Parents can check the schedule, compare programs, read about the coach, and sign
            up without sending a single DM. That is what a website should do.
          </p>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Your turn"
        title="Running a gym, studio, or training program with no real website?"
        text="Book a free evaluation and I will tell you exactly what your online presence needs. No pressure, no pitch."
      />
    </main>
  );
}
