import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Google & Meta Ads Management | Seifert Sites",
  description:
    "Google Ads and Facebook/Meta ads management for small businesses. PPC advertising that puts your offer in front of customers ready to buy.",
  alternates: { canonical: "https://seifertsites.com/google-ads" },
};

export default function GoogleAdsPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Google & Meta Ads · Seifert Sites</p>
          <h1 className="h1">
            Put your offer in front of <span className="accent">customers ready to buy</span>.
          </h1>
          <p className="lead">
            Google Ads and Facebook/Meta ads get your message to the right people at the right time.
            Unlike organic marketing, paid ads let you control timing and reach to get leads and sales fast.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">What you get with managed ads</h2>
          </div>
          <div className="gridAuto">
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Google Search Ads</h3>
              <p className="muted">Your ads show up when customers search for exactly what you offer. You only pay when someone clicks.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Google Display Ads</h3>
              <p className="muted">Reach interested customers across websites and apps. Build awareness for your brand while people browse.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Facebook & Instagram Ads</h3>
              <p className="muted">Target by interests, behavior, and demographics. Great for building awareness and driving traffic to a specific offer.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>Campaign Management</h3>
              <p className="muted">I handle setup, targeting, copywriting, landing page direction, budget optimization, and weekly reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="h2">How paid advertising works</h2>
            <p className="muted">Simple process. Real results.</p>
          </div>
          <div className="grid3">
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>1. Strategy & Setup</h3>
              <p className="muted" style={{ marginTop: 12 }}>I figure out which platform makes sense for your offer, build your campaigns, write ads, and set up targeting to reach the right customers.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>2. Run & Monitor</h3>
              <p className="muted" style={{ marginTop: 12 }}>Your ads run live. I monitor performance daily, adjust targeting, pause underperformers, and optimize bids to keep costs down and results up.</p>
            </div>
            <div className="card">
              <h3 className="h3" style={{ fontSize: 20 }}>3. Optimize & Scale</h3>
              <p className="muted" style={{ marginTop: 12 }}>As we learn what works, I increase budget on winning campaigns and adjust creative or targeting on campaigns that need work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Pricing</p>
            <h2 className="h2">$400 per month management fee</h2>
            <p className="lead">Plus your ad spend. You control the budget.</p>
          </div>
          <div className="grid2">
            <div className="card panelHighlight">
              <h3 className="h3">What's included</h3>
              <ul className="list" style={{ marginTop: 12 }}>
                <li>Complete campaign setup</li>
                <li>Keyword research and audience targeting</li>
                <li>Ad copy writing</li>
                <li>Daily monitoring and optimization</li>
                <li>Bid management</li>
                <li>Weekly performance reports</li>
              </ul>
              <div className="btnRow" style={{ marginTop: 20 }}>
                <Link className="btnPrimary" href="/contact">Get started</Link>
                <Link className="btnGhost" href="/pricing">See all pricing</Link>
              </div>
            </div>

            <div className="card cardSoft">
              <h3 className="h3">Ad spend expectations</h3>
              <p className="muted" style={{ marginTop: 12 }}>Budget depends on your industry and goals. Most clients start with $500 to $2,000 per month in ad spend.</p>
              <p className="muted" style={{ marginTop: 12 }}>The management fee is separate from what you spend on ads. You control ad budget completely.</p>
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
              <h3 className="h3" style={{ fontSize: 20 }}>How much will ads cost me?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Ad spend varies by industry. A dentist might spend $1,000/month while a local service might spend $500. The management fee is $400/month. You set the total budget that works for you.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>How long until I see results?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Google Ads show results within days. Meta ads take 1 to 2 weeks to gather learning data. Real optimization takes 4 to 6 weeks as we learn what works.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>Can I pause or stop ads?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Yes. You control the budget and can pause campaigns anytime. No contract lock-in. You're only charged for the ads that run.</p>
            </div>
            <div className="card cardSoft">
              <h3 className="h3" style={{ fontSize: 20 }}>What's a good return on ad spend?</h3>
              <p className="muted" style={{ marginTop: 12 }}>Depends on your industry. Service businesses often aim for 3x to 5x return. A $1,000 ad spend should generate $3,000 to $5,000 in revenue.</p>
            </div>
          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free strategy call"
        title="Not sure if paid ads make sense for your business?"
        text="Book a call and I will tell you whether Google or Facebook ads are the right fit, what budget to start with, and what realistic returns look like for your industry."
      />

      <section className="section sectionBorder">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">Paid ads work when they're done right</h2>
            <p className="muted">Bad ads waste money. Good ads get leads. The difference is strategy, targeting, copywriting, and constant optimization. I handle all of it so you don't have to think about it.</p>
          </div>

          <div className="card panelHighlight">
            <p className="eyebrow">Ready for fast results</p>
            <h2 className="h2">Ready to get qualified leads and sales?</h2>
            <p className="muted">Book a call and we will talk about your goals, budget, and what the next 30 days could look like.</p>
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
