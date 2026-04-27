import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Expect When You Hire a Web Designer",
  description:
    "The web design process does not have to be painful. Here is what a good project looks like from discovery to launch.",
  alternates: {
    canonical: "https://seifertsites.com/blog/what-to-expect-when-you-hire-a-web-designer",
  },
};

export default function Post() {
  return (
    <main>
      <article>
        <section className="hero">
          <div className="container" style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <span className="badge">Process</span>
              <span className="badge" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}>4 min read</span>
            </div>
            <h1 className="h1">What to expect when you <span className="accent">hire a web designer</span>.</h1>
            <p className="lead">The process does not have to be painful. Here is what it looks like when it is done right.</p>
            <p className="mutedSmall" style={{ marginTop: 16 }}>April 2026 · By Lucas Seifert</p>
          </div>
        </section>

        <section className="section sectionBorder">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="blogContent">
              <h2 className="h2">Step 1: Discovery call</h2>
              <p className="muted" style={{ marginBottom: 24 }}>This is where you tell me what your business does, who your customers are, and what you want the website to accomplish. I ask questions. You give context. We figure out if this is a good fit.</p>

              <h2 className="h2">Step 2: Scope and quote</h2>
              <p className="muted" style={{ marginBottom: 24 }}>Based on the call, I put together a clear scope: how many pages, what goes on each one, what the timeline looks like, and what it costs. No surprises. No hidden fees.</p>

              <h2 className="h2">Step 3: Design and build</h2>
              <p className="muted" style={{ marginBottom: 24 }}>I design the structure, write the layout, and build the pages. You see progress along the way. If something is off, we adjust early instead of at the end.</p>

              <h2 className="h2">Step 4: Review and revisions</h2>
              <p className="muted" style={{ marginBottom: 24 }}>You review the site. Tell me what works and what does not. I make revisions until you are happy with it. Most projects need one or two rounds.</p>

              <h2 className="h2">Step 5: Launch</h2>
              <p className="muted" style={{ marginBottom: 24 }}>We push the site live, set up analytics, make sure everything works on mobile, and hand it off. I also offer $50/month ongoing support for updates and changes.</p>

              <h2 className="h2">How long does it take?</h2>
              <p className="muted" style={{ marginBottom: 32 }}>Most projects launch within one to two weeks. The biggest bottleneck is usually content and approvals from the client, not the build itself. If you come prepared, it goes fast.</p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/contact">Start your project</Link>
                <Link className="btnGhost" href="/blog">Back to blog</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
