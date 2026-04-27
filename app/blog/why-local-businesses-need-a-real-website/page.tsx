import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Local Businesses Need a Real Website (Not Just a Facebook Page)",
  description:
    "A Facebook page is not a website. Here is why that matters for trust, SEO, and getting found by customers ready to buy.",
  alternates: {
    canonical: "https://seifertsites.com/blog/why-local-businesses-need-a-real-website",
  },
};

export default function Post() {
  return (
    <main>
      <article>
        <section className="hero">
          <div className="container" style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <span className="badge">Local SEO</span>
              <span className="badge" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}>5 min read</span>
            </div>
            <h1 className="h1">Why local businesses need a <span className="accent">real website</span>.</h1>
            <p className="lead">A Facebook page is not a website. Here is why that matters more than most business owners think.</p>
            <p className="mutedSmall" style={{ marginTop: 16 }}>April 2026 · By Lucas Seifert</p>
          </div>
        </section>

        <section className="section sectionBorder">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="blogContent">
              <h2 className="h2">You do not own Facebook</h2>
              <p className="muted" style={{ marginBottom: 24 }}>Facebook controls your reach. They decide who sees your posts, when, and whether your page even shows up in search. One algorithm change and your visibility drops overnight. With your own website, you own the real estate.</p>

              <h2 className="h2">Google does not index Facebook pages well</h2>
              <p className="muted" style={{ marginBottom: 24 }}>When someone searches &ldquo;plumber near me&rdquo; or &ldquo;best restaurant in Platteville,&rdquo; Google shows websites, not Facebook pages. If you do not have a site, you are invisible to the people actively looking for what you sell.</p>

              <h2 className="h2">A website builds trust instantly</h2>
              <p className="muted" style={{ marginBottom: 24 }}>When someone hears about your business and Googles you, the first thing they look for is a website. No website means no credibility. A Facebook-only presence says: this is a side hustle, not a real business.</p>

              <h2 className="h2">You control the message</h2>
              <p className="muted" style={{ marginBottom: 24 }}>On your website, you decide what people see first, how they navigate, and what action they take. On Facebook, your message competes with ads, notifications, and your competitor who just boosted a post.</p>

              <h2 className="h2">It does not have to be expensive</h2>
              <p className="muted" style={{ marginBottom: 32 }}>A clean, professional website can start at a few hundred dollars. It does not need to be 20 pages. It needs to be clear, fast, mobile-friendly, and built to make your business look as good as it actually is.</p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/contact">Get a free website evaluation</Link>
                <Link className="btnGhost" href="/blog">Back to blog</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
