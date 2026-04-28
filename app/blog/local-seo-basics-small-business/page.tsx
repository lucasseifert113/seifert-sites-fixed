import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO Basics Every Small Business Should Know",
  description:
    "A practical guide to local SEO for small businesses. Google Business Profile, local keywords, schema markup, and reviews explained without the jargon.",
  alternates: {
    canonical:
      "https://seifertsites.com/blog/local-seo-basics-small-business",
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
              <span
                className="badge"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                6 min read
              </span>
            </div>
            <h1 className="h1">
              Local SEO basics every small business{" "}
              <span className="accent">should know</span>.
            </h1>
            <p className="lead">
              You do not need to become an SEO expert. You need to understand a handful of
              things that actually move the needle for a local business. Here they are.
            </p>
            <p className="mutedSmall" style={{ marginTop: 16 }}>
              April 2026 · By Lucas Seifert
            </p>
          </div>
        </section>

        <section className="section sectionBorder">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="blogContent">
              <h2 className="h2">Start with your Google Business Profile</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Your Google Business Profile is the single highest-leverage thing you can do
                for local search visibility. It is what shows up in the map pack when someone
                searches &ldquo;plumber near me&rdquo; or &ldquo;best coffee shop in
                [city].&rdquo;
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                Set it up completely. Business name, address, phone number, website, hours,
                category, photos, and a short description. Fill in every field. Google
                rewards completeness. If you already have one, audit it. Outdated info,
                missing photos, and no responses to reviews all hurt your ranking.
              </p>

              <h2 className="h2">Use the right local keywords on your website</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                A local business website should mention the city and region naturally
                throughout the content. Not stuffed in awkwardly, just used the way you
                would actually talk about where you serve customers.
              </p>
              <p className="muted" style={{ marginBottom: 24 }}>
                &ldquo;We serve small businesses in Platteville, WI and the surrounding
                area&rdquo; is more useful to Google than nothing. Your page title, your H1,
                your meta description, and your body copy should all make clear where you
                operate.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                Think about how your customers search. Not &ldquo;web design,&rdquo; but
                &ldquo;web designer Platteville WI.&rdquo; Not &ldquo;dentist,&rdquo; but
                &ldquo;dentist near Dodgeville WI.&rdquo; Build your pages around those
                phrases.
              </p>

              <h2 className="h2">Schema markup: worth doing, not worth overthinking</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Schema markup is structured data you add to your site that tells Google
                exactly what your business is: name, address, phone, hours, type of service.
                It does not directly boost rankings in a huge way, but it helps Google
                understand your site faster and can get you rich snippets in search results.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                The minimum you should have is LocalBusiness schema on your homepage with
                your NAP (name, address, phone) and business type. If you have a developer
                building your site, they should handle this. If you are using a builder, most
                have a plugin or built-in tool for it.
              </p>

              <h2 className="h2">Reviews matter more than most people think</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                The number of reviews and the recency of reviews are both signals Google
                uses for local rankings. A business with 50 reviews ranks better than a
                business with 5, all else being equal.
              </p>
              <p className="muted" style={{ marginBottom: 24 }}>
                The simplest system: after every completed job or satisfied customer, ask for
                a Google review. Send them the direct link so it takes ten seconds. Most
                people who had a good experience will leave one if you make it easy.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                Responding to reviews also matters. It signals to Google that the business is
                active. It also signals to potential customers that you care about what people
                think.
              </p>

              <h2 className="h2">NAP consistency</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                NAP stands for name, address, and phone number. Your NAP should be identical
                everywhere it appears online: your website, your Google Business Profile,
                Yelp, Facebook, local directories. Even small inconsistencies (Street vs St,
                different phone formats) can confuse Google.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                Do a quick audit: search your business name and see what comes up. Check that
                the address and phone match everywhere. Fix anything that is off.
              </p>

              <h2 className="h2">Your website is still the foundation</h2>
              <p className="muted" style={{ marginBottom: 32 }}>
                All of this works better when the website itself is solid. Fast loading,
                mobile-friendly, well-structured, with clear local signals in the content. A
                good Google Business Profile pointing to a bad website still loses customers.
                The website is where trust is built or lost.
              </p>

              <div className="inlineDivider" style={{ margin: "40px 0" }} />

              <div className="btnRow">
                <Link className="btnPrimary" href="/contact">
                  Get a free evaluation
                </Link>
                <Link className="btnGhost" href="/services">
                  See what I build
                </Link>
              </div>

              <div className="inlineDivider" style={{ margin: "40px 0" }} />

              <h2 className="h2">Related posts</h2>
              <div style={{ display: "grid", gap: 12 }}>
                <Link
                  href="/blog/why-local-businesses-need-a-real-website"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card cardSoft">
                    <h3 className="h3" style={{ marginBottom: 6 }}>
                      Why local businesses need a real website
                    </h3>
                    <p className="mutedSmall">A Facebook page is not a website. Here is why that matters for search and trust.</p>
                  </div>
                </Link>
                <Link
                  href="/blog/5-signs-your-website-is-costing-you-customers"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card cardSoft">
                    <h3 className="h3" style={{ marginBottom: 6 }}>
                      5 signs your website is costing you customers
                    </h3>
                    <p className="mutedSmall">The red flags that mean your site is actively working against you.</p>
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
