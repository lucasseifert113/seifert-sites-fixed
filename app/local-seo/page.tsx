import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Local SEO Services | Get Found on Google Maps | Seifert Sites",
  description:
    "Local SEO services for Wisconsin businesses. Google Maps ranking, citation building, and on-page optimization to help customers find you locally.",
  alternates: { canonical: "https://seifertsites.com/local-seo" },
};

export default function LocalSEOPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Local SEO · Seifert Sites</p>
          <h1 className="h1">
            Get found on Google Maps and <span className="accent">rank for local search</span>.
          </h1>
          <p className="lead">
            Your customers are searching for what you offer in your area. Local SEO gets you visible in Google Maps,
            Google search results, and local directories so they find you instead of your competition.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">What local SEO actually does for your business</h2>
          </div>
          <div className="grid3">
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Google Maps Pack</h3>
              <p className="muted">Show up in the map results when customers search for your service in your area. This is where most local searches happen.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Local Search Rankings</h3>
              <p className="muted">Rank higher in regular Google search results for keywords that include your city, region, or service area. Customers searching for "plumber near me" should find you.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Citation Building</h3>
              <p className="muted">Get your business listed in local directories and nap databases so Google knows you exist, you're real, and you're active in your area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">How local SEO works</h2>
            <p className="muted">Step-by-step optimization that tells Google your business is relevant to local customers.</p>
          </div>
          <div className="grid3">
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>1. Google Business Profile Setup</h3>
              <p className="muted" style={{ marginTop: 12 }}>Optimize your profile with correct categories, business hours, photos, and location data. Google uses this as the primary source for Maps and local results.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>2. On-Page Optimization</h3>
              <p className="muted" style={{ marginTop: 12 }}>Build your website with local keywords, location pages if relevant, and schema markup that tells search engines where you serve and what you offer.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>3. Citation Building & Reviews</h3>
              <p className="muted" style={{ marginTop: 12 }}>Get listed in local directories and help customers leave reviews. Consistency and review signals boost your visibility in Maps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">$300 per month</h2>
            <p className="lead">Ongoing local SEO optimization, citation management, and ranking monitoring.</p>
          </div>
          <div className="grid2">
            <div className="card panelHighlight">
              <h3 className="h3">What's included</h3>
              <ul className="list" style={{ marginTop: 12 }}>
                <li>Google Business Profile optimization and posting</li>
                <li>Local keyword research and targeting</li>
                <li>On-page SEO updates</li>
                <li>Citation building in local directories</li>
                <li>Review monitoring and strategy</li>
                <li>Monthly ranking reports</li>
              </ul>
              <div className="btnRow" style={{ marginTop: 20 }}>
                <Link className="btnPrimary" href="/contact">Get started</Link>
                <Link className="btnGhost" href="/pricing">See all pricing</Link>
              </div>
            </div>

            <div className="card cardSoft">
              <h3 className="h3">Best for</h3>
              <p className="muted" style={{ marginTop: 12 }}>Service businesses, restaurants, stores, contractors, and professional services that rely on local customers finding them through Google.</p>
              <p className="muted" style={{ marginTop: 12 }}>If most of your business comes from a specific city or region, this is where to invest.</p>
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
              <h3 className="h3" style={{ fontSize: 20 }}>How long before I see results?</h3>
              <p className="muted" style={{ marginTop: 12 }}>3 to 6 months typically. Local SEO compounds over time. Quick wins happen first (profile optimization), longer-term gains come from consistent citation building and content work.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Does my site need to be new?</h3>
              <p className="muted" style={{ marginTop: 12 }}>No. Local SEO works on existing sites. If your site is weak on keywords or missing local signals, we optimize what you have. If it needs a redesign, that's a separate conversation.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>What if I have multiple locations?</h3>
              <p className="muted" style={{ marginTop: 12 }}>We optimize each location separately with dedicated landing pages, location-specific keywords, and individual citations. Each location gets the same ranking attention.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Do you manage reviews?</h3>
              <p className="muted" style={{ marginTop: 12 }}>I monitor reviews on Google and other platforms. I don't fake or manipulate reviews, but I help you build a strategy to get more legitimate customer feedback.</p>
            </div>
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free website evaluation"
        title="Not sure if local SEO is right for you?"
        text="Book a free evaluation and I'll tell you how visible you currently are on Google Maps, what's working, and what quick wins are available to get more local customers."
      />

      <section className="section sectionBorder">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">Local search is competitive</h2>
            <p className="muted">The businesses that show up on Google Maps and local search get most of the customers. The rest get forgotten. If you want to compete in your area, local SEO is essential.</p>
          </div>

          <div className="card panelHighlight">
            <p className="eyebrow">Ready to rank locally</p>
            <h2 className="h2">Ready to get found by local customers?</h2>
            <p className="muted">Book a call and we will talk about your current visibility, where you can rank, and what the fastest path looks like.</p>
            <div className="btnRow">
              <Link className="btnPrimary" href="/contact">Book a strategy call</Link>
              <Link className="btnGhost" href="/services">See all services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
