import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does a Website Cost for a Small Business?",
  description:
    "A straightforward breakdown of website costs for small businesses. DIY builders, freelancers, and agencies compared so you know what you are actually paying for.",
  alternates: {
    canonical: "https://seifertsites.com/blog/how-much-does-a-website-cost",
  },
};

export default function Post() {
  return (
    <main>
      <article>
        <section className="hero">
          <div className="container" style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <span className="badge">Pricing</span>
              <span
                className="badge"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                5 min read
              </span>
            </div>
            <h1 className="h1">
              How much does a website cost for a{" "}
              <span className="accent">small business</span>?
            </h1>
            <p className="lead">
              The range is enormous and the answers online are usually vague. Here is a
              straight breakdown of what you actually get at each price point.
            </p>
            <p className="mutedSmall" style={{ marginTop: 16 }}>
              April 2026 · By Lucas Seifert
            </p>
          </div>
        </section>

        <section className="section sectionBorder">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="blogContent">
              <h2 className="h2">DIY website builders: $0 to $50/month</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Wix, Squarespace, and similar builders let you get something online fast.
                Monthly costs are low, usually $15 to $50 depending on the plan. But the
                real cost is your time and the ceiling you hit.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                DIY builders work fine for very simple use cases: a portfolio, a basic landing
                page, a placeholder. Once you need custom layouts, better performance, or
                anything beyond a standard template, you start fighting the tool. The output
                also looks like a template, which affects trust.
              </p>

              <h2 className="h2">Freelancers: $500 to $5,000+</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                A freelance web designer or developer can build a real custom site. The range
                is wide because experience, scope, and market all vary. Someone charging $500
                is probably using a page builder with a template. Someone charging $3,000 to
                $5,000 is likely building something more custom with better strategic input.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                At Seifert Sites, pricing runs $175 to $250 per page depending on the plan,
                with $50 per month for ongoing updates. A 4-page Growth site lands around
                $850 to $1,250 total. You get a custom design, real conversion thinking, and
                direct communication throughout. Not a template, not a hand-off to a junior
                developer.
              </p>

              <h2 className="h2">Agencies: $5,000 to $50,000+</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Agencies come with account managers, strategy decks, and layered teams. For
                some businesses that overhead is worth it. For most small local businesses,
                you are paying for a lot of process that does not improve the output.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                If you are a local service business, gym, restaurant, or coach, you rarely
                need a $20,000 website. You need a $1,000 to $2,500 site built well with a
                clear strategy behind it.
              </p>

              <h2 className="h2">What affects the price the most</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Page count is the biggest driver. More pages means more design time, more
                content, and more development. After that, custom functionality (booking
                systems, integrations, e-commerce) adds cost. Rushed timelines and unclear
                briefs add cost too, because they eat time.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                The clearer you are about what you need when you start, the more efficient
                the process is and the lower the final bill.
              </p>

              <h2 className="h2">The question worth asking</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Instead of &ldquo;what is the cheapest option,&rdquo; ask: what does a weak
                site cost me in lost leads, lower close rates, and missed referrals? For most
                small businesses that number is higher than the cost of a good site.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                A $1,200 site that earns trust and converts visitors pays for itself quickly.
                A $15/month Wix site that looks like a template might technically exist, but
                it is not working hard for you.
              </p>

              <div className="inlineDivider" style={{ margin: "40px 0" }} />

              <div className="btnRow">
                <Link className="btnPrimary" href="/pricing">
                  See Seifert Sites pricing
                </Link>
                <Link className="btnGhost" href="/contact">
                  Get a free evaluation
                </Link>
              </div>

              <div className="inlineDivider" style={{ margin: "40px 0" }} />

              <h2 className="h2">Related posts</h2>
              <div style={{ display: "grid", gap: 12 }}>
                <Link
                  href="/blog/wix-vs-custom-website"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card cardSoft">
                    <h3 className="h3" style={{ marginBottom: 6 }}>
                      Wix vs a custom website: which is better for your business?
                    </h3>
                    <p className="mutedSmall">See a side-by-side comparison and when each one makes sense.</p>
                  </div>
                </Link>
                <Link
                  href="/blog/why-local-businesses-need-a-real-website"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card cardSoft">
                    <h3 className="h3" style={{ marginBottom: 6 }}>
                      Why local businesses need a real website
                    </h3>
                    <p className="mutedSmall">Not just a Facebook page. Here is why it matters for trust and search.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
