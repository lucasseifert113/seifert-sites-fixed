import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Signs Your Website Is Costing You Customers",
  description:
    "Most business owners do not realize their website is pushing customers away. Here are 5 red flags that mean your site is hurting your business.",
  alternates: {
    canonical:
      "https://seifertsites.com/blog/5-signs-your-website-is-costing-you-customers",
  },
};

export default function Post() {
  return (
    <main>
      <article>
        <section className="hero">
          <div className="container" style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <span className="badge">Website Audit</span>
              <span
                className="badge"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                4 min read
              </span>
            </div>
            <h1 className="h1">
              5 signs your website is{" "}
              <span className="accent">costing you customers</span>.
            </h1>
            <p className="lead">
              Your website might look fine to you. But your customers are forming an opinion
              in under three seconds. Here is what pushes them away.
            </p>
            <p className="mutedSmall" style={{ marginTop: 16 }}>
              April 2026 · By Lucas Seifert
            </p>
          </div>
        </section>

        <section className="section sectionBorder">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="blogContent">
              <h2 className="h2">1. It looks like it was built in 2015</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Design trends change. If your site still has stock photo banners, tiny text,
                and a layout that screams &ldquo;template,&rdquo; visitors notice. They might
                not be able to articulate it, but they feel it. And that feeling is: this
                business is not serious.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                The fix is not flashy animations or trendy gradients. It is clean typography,
                proper spacing, and a layout that feels intentional. Modern does not mean
                complicated. It means clear.
              </p>

              <h2 className="h2">2. There is no clear call to action</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Someone lands on your site. They are interested. Now what? If the answer is
                &ldquo;scroll around and figure it out,&rdquo; you are losing them. Every page
                needs one obvious next step: call, book, fill out a form, or visit.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                The best sites guide people like a conversation. First this, then that. No
                guessing.
              </p>

              <h2 className="h2">3. It is not mobile-friendly</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                More than half of your visitors are on their phone. If the text is tiny, the
                buttons are impossible to tap, or the layout breaks, you are invisible to the
                majority of your audience.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                Mobile-first is not a buzzword. It is the reality of how people find local
                businesses in 2026.
              </p>

              <h2 className="h2">4. It loads slowly</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Every second of load time costs you visitors. If your site takes more than
                three seconds to load, nearly half of people will leave before they see
                anything. Oversized images, bloated plugins, and cheap hosting are the usual
                culprits.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                A clean, lightweight build on modern hosting loads in under a second. That is
                what your customers expect.
              </p>

              <h2 className="h2">5. The content does not match your quality</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                You do great work. But your website says otherwise. Spelling mistakes, vague
                service descriptions, no real photos, no testimonials. People judge the
                service by the website. If the site looks half-baked, they assume the work is
                too.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                You do not need a novel. You need clear descriptions of what you do, who it
                is for, and proof that you are good at it.
              </p>

              <div className="inlineDivider" style={{ margin: "40px 0" }} />

              <h2 className="h2">What to do about it</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                If you recognized your site in two or more of these signs, it is probably
                time for a redesign. Not a tweak. Not a new logo. A site that is actually
                built to make your business look as good as the work you do.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                I offer a free website evaluation where I will review your current site and
                tell you exactly what is hurting you and what I would fix first. No pitch. No
                obligation. Just honest feedback.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/contact">
                  Get a free website evaluation
                </Link>
                <Link className="btnGhost" href="/blog">
                  Back to blog
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
                    <p className="mutedSmall">An honest look at when a builder works and when it starts to hurt you.</p>
                  </div>
                </Link>
                <Link
                  href="/blog/local-seo-basics-small-business"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card cardSoft">
                    <h3 className="h3" style={{ marginBottom: 6 }}>
                      Local SEO basics every small business should know
                    </h3>
                    <p className="mutedSmall">Google Business Profile, local keywords, and reviews. What actually moves the needle.</p>
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
