import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Your Google Business Profile Matters More Than Your Website",
  description:
    "Most customers find you on Google before they ever see your website. Here is what to optimize in your Google Business Profile and why it matters more than you think.",
  alternates: {
    canonical:
      "https://seifertsites.com/blog/google-business-profile-guide",
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
              Why your Google Business Profile matters{" "}
              <span className="accent">more than your website</span>.
            </h1>
            <p className="lead">
              Your customers are looking for you on Google. If your profile is incomplete or ignored, they are finding your competitors instead. Here is what actually moves the needle.
            </p>
            <p className="mutedSmall" style={{ marginTop: 16 }}>
              April 2026 · By Lucas Seifert
            </p>
          </div>
        </section>

        <section className="section sectionBorder">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="blogContent">
              <h2 className="h2">Where customers actually look first</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Think about how you search for a business. You type the name or category into Google. You see a map, some review stars, hours, and a link to their website. You rarely click the website link first. You read the reviews, check the hours, look at the photos, maybe call the phone number. Your website is secondary.
              </p>
              <p className="muted" style={{ marginBottom: 32 }}>
                Your customers do the same thing. Google Business Profile (formerly Google My Business) is where they form their first impression. An incomplete profile tells them you are not serious. A complete, well-maintained one tells them you care about being found and you respect your customers' time.
              </p>

              <h2 className="h2">What you actually need to optimize</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Your Google Business Profile has five moving parts that drive customers to you or push them away. If any of them are weak, you are losing money.
              </p>

              <h3 className="h3" style={{ fontSize: 18, marginBottom: 10, marginTop: 28 }}>
                1. Categories and business type
              </h3>
              <p className="muted" style={{ marginBottom: 32 }}>
                Google needs to understand what you do. Pick the primary category that matches how customers search for you. If you are a plumber who also does water damage restoration, pick plumber as primary and add water damage services as secondary. Be specific. Vague categories mean Google cannot rank you for the searches that matter.
              </p>

              <h3 className="h3" style={{ fontSize: 18, marginBottom: 10, marginTop: 28 }}>
                2. Photos and video
              </h3>
              <p className="muted" style={{ marginBottom: 32 }}>
                Profiles with at least 10 photos get clicked 42% more often. Post real photos of your work, your storefront, your team. Customers want to see what you actually do. Bad lighting or smartphone shots are better than no photos. Do not use stock images. Do not use your website banner photo. Show the real thing.
              </p>

              <h3 className="h3" style={{ fontSize: 18, marginBottom: 10, marginTop: 28 }}>
                3. Hours and service area
              </h3>
              <p className="muted" style={{ marginBottom: 32 }}>
                If your hours are wrong, customers will not come. Update them now. Also tell Google where you serve. If you are a service business (HVAC, roofing, lawn care), specify your service radius. This tells Google exactly who should see you in search results.
              </p>

              <h3 className="h3" style={{ fontSize: 18, marginBottom: 10, marginTop: 28 }}>
                4. Reviews and reputation
              </h3>
              <p className="muted" style={{ marginBottom: 32 }}>
                More reviews and higher ratings = more clicks. Ask your happy customers to leave a review. Not on Facebook. Not on your website. On Google. Respond to every review, positive or negative. Fast responses tell people you actually care. Ignore reviews and customers assume you do not.
              </p>

              <h3 className="h3" style={{ fontSize: 18, marginBottom: 10, marginTop: 28 }}>
                5. Posts and updates
              </h3>
              <p className="muted" style={{ marginBottom: 32 }}>
                Post on your profile once or twice a month. New services, seasonal offers, photos of recent work. These appear right on your profile card in search results. They keep your profile fresh and give Google a reason to show you to more people.
              </p>

              <div className="inlineDivider" style={{ margin: "40px 0" }} />

              <h2 className="h2">The mistakes that cost you customers</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                I see the same problems in every industry. An incomplete profile says everything about your business. Here are the ones that hurt the most.
              </p>

              <p className="muted" style={{ marginBottom: 24 }}>
                <strong>Missing or outdated photos.</strong> A profile with no photos or generic stock images signals that you are either lazy or hiding something. Your competitors with real photos get the clicks.
              </p>

              <p className="muted" style={{ marginBottom: 24 }}>
                <strong>Wrong or incomplete hours.</strong> Nothing kills a potential sale faster than showing up to a place that is closed. Update your hours right now. Post if you are open today.
              </p>

              <p className="muted" style={{ marginBottom: 24 }}>
                <strong>Ignoring reviews and messages.</strong> Your Google profile lets customers message you directly. If you do not respond within 24 hours, you look unresponsive. Reviews sit unanswered and you look like you do not care what people think.
              </p>

              <p className="muted" style={{ marginBottom: 32 }}>
                <strong>No phone number or call buttons.</strong> Make it effortless to contact you. A missing phone number or a buried email address means customers go to your competitor who answers their phone.
              </p>

              <h2 className="h2">How it connects to Google Maps and local SEO</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Your Google Business Profile is the foundation of local SEO. When someone searches for your service in your area, Google prioritizes profiles that are:
              </p>

              <ul className="list" style={{ marginBottom: 32 }}>
                <li>Complete and up to date</li>
                <li>Getting positive reviews</li>
                <li>Getting clicks and calls from Google</li>
                <li>Physically close to the search location</li>
                <li>Relevant to the search query</li>
              </ul>

              <p className="muted" style={{ marginBottom: 32 }}>
                Your website helps. Good content on your site about the services you offer and the area you serve tells Google you are serious. But Google shows your profile first. Your website is the proof. Getting the profile right is the fastest way to get found.
              </p>

              <div className="inlineDivider" style={{ margin: "40px 0" }} />

              <h2 className="h2">What it costs and what it is worth</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Setting up a Google Business Profile is free. Optimizing it takes time and ongoing attention. You need real photos, regular updates, customer reviews, and quick responses to messages. Most business owners do not have the time or bandwidth.
              </p>

              <p className="muted" style={{ marginBottom: 32 }}>
                Seifert Sites offers full Google Business Profile optimization for $200. I audit your profile, upload your best photos, optimize your categories and description, set up review requests, and make sure you are getting found. I also handle the setup so you can focus on running your business.
              </p>

              <div className="btnRow">
                <Link className="btnPrimary" href="/contact">
                  Optimize your Google Business Profile
                </Link>
                <Link className="btnGhost" href="/blog">
                  Back to blog
                </Link>
              </div>

              <div className="inlineDivider" style={{ margin: "40px 0" }} />

              <h2 className="h2">Related posts</h2>
              <div style={{ display: "grid", gap: 12 }}>
                <Link
                  href="/blog/local-seo-basics-small-business"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card cardSoft">
                    <h3 className="h3" style={{ marginBottom: 6 }}>
                      Local SEO basics every small business should know
                    </h3>
                    <p className="mutedSmall">Google Business Profile, local keywords, schema markup, and reviews that actually move the needle.</p>
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
                    <p className="mutedSmall">A Facebook page is not enough. Here is why your real website matters for trust and SEO.</p>
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
