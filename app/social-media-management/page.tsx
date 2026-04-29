import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Social Media Management for Local Businesses | Seifert Sites",
  description:
    "Social media management and content creation for small businesses. Instagram, Facebook, and Google Business Profile posting to build trust and stay visible.",
  alternates: { canonical: "https://seifertsites.com/social-media-management" },
};

export default function SocialMediaManagementPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Social Media Management · Seifert Sites</p>
          <h1 className="h1">
            Stay visible and build trust with <span className="accent">consistent social posting</span>.
          </h1>
          <p className="lead">
            Social media is where your customers hang out. Regular posting keeps your brand visible, builds authority,
            and gives people reasons to trust you. I handle the content creation and posting so you don't have to.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">What's included in social media management</h2>
          </div>
          <div className="gridAuto">
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Content Creation</h3>
              <p className="muted">I create original content that shows what your business does and why customers should care. No generic stock photo stuff.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Consistent Posting</h3>
              <p className="muted">Scheduled posts 3 to 5 times per week. Consistency is how you stay visible and build an audience without you thinking about it.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Community Engagement</h3>
              <p className="muted">I monitor comments and messages, respond to customers, and engage with followers so your brand feels human and accessible.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Brand Consistency</h3>
              <p className="muted">Every post matches your brand colors, voice, and positioning so customers see a cohesive, professional presence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">Platforms we manage</h2>
          </div>
          <div className="grid3">
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Instagram</h3>
              <p className="muted">Where most of your younger and middle-aged customers are. Perfect for showing your work, sharing behind-the-scenes content, and building a following.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Facebook</h3>
              <p className="muted">Still where older demographics hang out. Great for longer-form posts, community building, and reaching local audiences.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Google Business Profile</h3>
              <p className="muted">The most important platform for local businesses. Posts here show up in Google Search and Maps, helping customers find you and trust your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">$500 per month</h2>
            <p className="lead">Complete social media management. All platforms included.</p>
          </div>
          <div className="grid2">
            <div className="card panelHighlight">
              <h3 className="h3">What's included</h3>
              <ul className="list" style={{ marginTop: 12 }}>
                <li>Content calendar and strategy</li>
                <li>3 to 5 posts per week</li>
                <li>Original content creation</li>
                <li>Post scheduling and publishing</li>
                <li>Community engagement and responses</li>
                <li>Monthly analytics report</li>
              </ul>
              <div className="btnRow" style={{ marginTop: 20 }}>
                <Link className="btnPrimary" href="/contact">Get started</Link>
                <Link className="btnGhost" href="/pricing">See all pricing</Link>
              </div>
            </div>

            <div className="card cardSoft">
              <h3 className="h3">How it works</h3>
              <p className="muted" style={{ marginTop: 12 }}>We start with a call to talk about your business, voice, and goals. Then I create a content strategy and calendar for the month.</p>
              <p className="muted" style={{ marginTop: 12 }}>Content gets created, scheduled, and posted automatically. You get monthly reports showing what worked and what didn't.</p>
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
              <h3 className="h3" style={{ fontSize: 20 }}>What kind of content will you create?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Real content about your business. Before and after photos, customer testimonials, tips related to what you offer, behind-the-scenes looks, special offers, and educational content. Nothing generic or low quality.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Do you handle video?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Yes. Short-form videos like Reels and TikToks are included. I can shoot simple videos or work with footage you provide.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>What if I don't like a post?</h3>
              <p className="muted" style={{ marginTop: 12 }}>You get to approve the content calendar before the month starts. If something doesn't fit, we change it. This is collaborative.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Will I see growth?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Growth takes time. Most clients see meaningful follower growth in 2 to 3 months with consistent posting. More importantly, you get engaged followers, not fake ones.</p>
            </div>
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free audit"
        title="Not sure if social media is the right move for you?"
        text="Book a call and I'll audit your current presence, tell you what's working on other platforms in your industry, and whether social media makes sense for your business right now."
      />

      <section className="section sectionBorder">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">Social media is not optional</h2>
            <p className="muted">Your customers are on Instagram, Facebook, and Google Business Profile. If you don't show up consistently, they forget you. Managed social media is one of the cheapest ways to stay visible and build authority.</p>
          </div>

          <div className="card panelHighlight">
            <p className="eyebrow">Ready to stay visible</p>
            <h2 className="h2">Ready to build a social presence?</h2>
            <p className="muted">Book a call and we will talk about your brand, content strategy, and what consistent posting can do for your business.</p>
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
