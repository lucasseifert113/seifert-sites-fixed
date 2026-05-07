import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Website Audit | Find What's Hurting Your Business Online | Seifert Sites",
  description:
    "Website audits for small businesses. Performance, SEO, UX, and conversion analysis with a clear action plan to improve your site.",
  alternates: { canonical: "https://seifertsites.com/website-audits" },
};

export default function WebsiteAuditsPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Website Audits · Seifert Sites</p>
          <h1 className="h1">
            Find out what's hurting your <span className="accent">business online</span>.
          </h1>
          <p className="lead">
            Most websites have obvious problems that drive customers away. A detailed audit tells you exactly what's broken,
            why it matters, and what to fix first. No vague feedback. Just actionable insights.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">What we analyze in a website audit</h2>
          </div>
          <div className="gridAuto">
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Performance</h3>
              <p className="muted">How fast your site loads, mobile responsiveness, and technical health. A slow site loses customers before they even see what you offer.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>SEO</h3>
              <p className="muted">Whether Google can crawl your site properly, if you're targeting the right keywords, and how competitive your rankings are. Basic SEO problems are easy to fix.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>User Experience</h3>
              <p className="muted">How easy your site is to use, whether the navigation makes sense, and if customers can find what they need. Bad UX kills conversions.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Conversions</h3>
              <p className="muted">Whether you have clear calls to action, if your messaging is convincing, and what's stopping visitors from contacting you or buying.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">What you get from an audit</h2>
            <p className="muted">Not a generic report. A real action plan.</p>
          </div>
          <div className="grid2">
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Detailed Report</h3>
              <p className="muted" style={{ marginTop: 12 }}>Specific findings with screenshots, examples, and explanations of why each issue matters.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Priority Ranking</h3>
              <p className="muted" style={{ marginTop: 12 }}>Not everything matters equally. I tell you which fixes give the biggest impact on visitors and conversions.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Action Steps</h3>
              <p className="muted" style={{ marginTop: 12 }}>Clear next steps for each issue. You know exactly what to do and why it matters.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Competitive Comparison</h3>
              <p className="muted" style={{ marginTop: 12 }}>How you stack up against competitors in speed, design, messaging, and SEO. Shows you where you're losing ground.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Sample findings</p>
            <h2 className="h2">Real problems we find in audits</h2>
          </div>
          <div className="grid2">
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>Slow page load time</h3>
              <p className="muted" style={{ marginTop: 12 }}>Site takes 5+ seconds to load. Visitors bounce before the page even renders. Easy fix with image optimization and better hosting.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>No clear value proposition</h3>
              <p className="muted" style={{ marginTop: 12 }}>Homepage doesn't clearly explain what you do or why customers should choose you. Visitors leave confused.</p>
            </div>
            <div className="card">
              <h3 className="card">Mobile doesn't work right</h3>
              <p className="muted" style={{ marginTop: 12 }}>Site looks fine on desktop but buttons are hard to tap on mobile, or the layout is broken. 60% of traffic is mobile.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>Weak call to action</h3>
              <p className="muted" style={{ marginTop: 12 }}>No clear next step for visitors. Contact button is buried in the footer instead of prominent on every page. No reason to convert.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>Missing SEO basics</h3>
              <p className="muted" style={{ marginTop: 12 }}>No title tags, no meta descriptions, no keywords, no internal linking. Google can't tell what your site is about.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>Outdated design</h3>
              <p className="muted" style={{ marginTop: 12 }}>Site looks cheap or old compared to competitors. Visitors think your business is not professional. Design kills trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">Free</h2>
            <p className="lead">Comprehensive audit report with specific action plan.</p>
          </div>
          <div className="grid2">
            <div className="card panelHighlight">
              <h3 className="h3">What's included</h3>
              <ul className="list" style={{ marginTop: 12 }}>
                <li>Performance analysis</li>
                <li>SEO review and keyword analysis</li>
                <li>User experience assessment</li>
                <li>Conversion optimization review</li>
                <li>Competitive benchmarking</li>
                <li>Detailed written report with screenshots</li>
                <li>30-minute strategy call to review findings</li>
              </ul>
              <div className="btnRow" style={{ marginTop: 20 }}>
                <Link className="btnPrimary" href="/contact">Order an audit</Link>
                <Link className="btnGhost" href="/pricing">See all pricing</Link>
              </div>
            </div>

            <div className="card cardSoft">
              <h3 className="h3">Next steps after the audit</h3>
              <p className="muted" style={{ marginTop: 12 }}>You get a detailed report. Then you have options. Fix it yourself if you want. Hire someone. Or book a call with me to handle the redesign or fixes.</p>
              <p className="muted" style={{ marginTop: 12 }}>The audit is independent. I am not trying to upsell you on rebuilding your site. I'm giving you honest feedback so you can make a good decision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">Common questions</h2>
          </div>
          <div className="grid2">
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>How long does an audit take?</h3>
              <p className="muted" style={{ marginTop: 12 }}>3 to 5 business days. I dig deep into performance, code, SEO, UX, and conversions. Then I write the detailed report.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Do you need access to my site?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Not always. I can audit any public website from the outside. If you want detailed technical analysis, I might ask for limited backend access.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Will the report be useful if I don't plan to rebuild?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Yes. The audit tells you what's broken and how to fix it. If you have a developer, they can use the report to make improvements. You don't need me for that.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>What if I already know my site needs work?</h3>
              <p className="muted" style={{ marginTop: 12 }}>An audit tells you what to fix first. You might think the design is the problem when it's actually the navigation. Priorities matter when budget is tight.</p>
            </div>
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free 15-minute consultation"
        title="Not sure if you need an audit?"
        text="Book a quick call and I'll do a fast visual review of your site, tell you what stands out as the biggest issues, and whether an audit makes sense."
      />

      <section className="section sectionBorder">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">Most websites leave money on the table</h2>
            <p className="muted">A good website audit finds the problems that are costing you customers. Small fixes often deliver big results. Knowing what matters first is a bargain.</p>
          </div>

          <div className="card panelHighlight">
            <p className="eyebrow">Get real feedback</p>
            <h2 className="h2">Ready for an honest assessment of your site?</h2>
            <p className="muted">Book an audit and get a detailed report with specific fixes that will improve performance and conversions.</p>
            <div className="btnRow">
              <Link className="btnPrimary" href="/contact">Order an audit</Link>
              <Link className="btnGhost" href="/services">See all services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
