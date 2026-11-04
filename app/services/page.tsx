import type { Metadata } from "next";
import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export const metadata: Metadata = {
  title: "Services | Web Design, Marketing & SEO",
  description:
    "Web design, local SEO, Google Ads, social media management, email marketing, brand identity, and website audits for local businesses.",
  alternates: { canonical: "https://www.seifertsites.com/services" },
};

const serviceCategories = [
  {
    category: "Web Design",
    services: [
      {
        title: "Landing pages",
        text: "Built for a single offer, a single audience, and a single next step.",
        bullets: ["One-page structure", "Offer-focused messaging", "Mobile-first build", "Fast launch path"],
      },
      {
        title: "Business websites",
        text: "Multi-page sites for local businesses that need more trust, cleaner positioning, and stronger presentation.",
        bullets: ["3 to 6 core pages", "Clear navigation", "Conversion-first layout", "SEO-ready foundation"],
      },
      {
        title: "Redesigns",
        text: "For businesses with a site that feels old, cluttered, or cheap compared to the quality of the actual service.",
        bullets: ["Visual upgrade", "Better information hierarchy", "Cleaner page flow", "Stronger brand feel"],
      },
    ],
  },
  {
    category: "Digital Marketing",
    services: [
      {
        title: "Local SEO",
        text: "On-page optimization and citation building to rank higher in Google search and Maps for local customers.",
        bullets: ["Keyword targeting", "On-page optimization", "Google Maps ranking", "Citation building"],
      },
      {
        title: "Google & Meta Ads",
        text: "Campaign setup and management that puts your offer in front of the right people at the right time.",
        bullets: ["Campaign strategy", "Audience targeting", "Ad creative", "Performance tracking"],
      },
      {
        title: "Social Media Management",
        text: "Consistent posting and community engagement that keeps your brand visible and builds trust.",
        bullets: ["Content calendars", "Regular posting", "Community engagement", "Brand consistency"],
      },
      {
        title: "Email Marketing",
        text: "Newsletter setup and automation that turns visitors into repeat customers.",
        bullets: ["List building", "Automation sequences", "Newsletter templates", "Campaign analytics"],
      },
    ],
  },
  {
    category: "Brand & Optimization",
    services: [
      {
        title: "Google Business Profile Setup",
        text: "Complete profile optimization so customers find you, trust you, and leave reviews.",
        bullets: ["Profile optimization", "Photo uploads", "Review strategy", "Post scheduling"],
      },
      {
        title: "Website Audits",
        text: "A free review of one page or planned offer.",
        bullets: ["One visitor goal", "Up to three recommendations", "Delivered by email"],
      },
      {
        title: "Logo & Brand Identity",
        text: "Professional logo design and brand guidelines that make your business look established.",
        bullets: ["Logo design", "Color palette", "Typography", "Brand guidelines document"],
      },
    ],
  },
  {
    category: "Ongoing Services",
    services: [
      {
        title: "Monthly Maintenance",
        text: "Ongoing updates, backups, and content changes so your site stays current and secure.",
        bullets: ["Hosting and backups", "Security updates", "Content edits", "Uptime monitoring"],
      },
    ],
  },
  {
    category: "Marketing Retainers",
    services: [
      {
        title: "Social Media Management",
        text: "Regular posting and community engagement that keeps your brand visible and builds trust with your audience.",
        bullets: ["3 posts/week (Instagram + Facebook)", "Caption writing in your brand voice", "Hashtag research", "Monthly performance report"],
      },
      {
        title: "Local SEO + Google Business Profile",
        text: "Help customers find accurate service and location details on Google Search and Maps.",
        bullets: ["Google Business Profile optimization", "Local citation building", "Keyword targeting for your city", "Monthly ranking report"],
      },
      {
        title: "Full Marketing Retainer",
        text: "Everything you need to stay visible online. Social media, SEO, email, strategy calls, and priority support.",
        bullets: ["Everything in Social + SEO packages", "Email newsletter (1x/month)", "Monthly strategy call", "Priority support"],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Services · Seifert Sites LLC</p>
          <h1 className="h1">
            Build, market, and <span className="accent">grow your business online</span>.
          </h1>
          <p className="lead">
            I work with local businesses on web design, digital marketing, and ongoing marketing retainers.
            Everything is built to help you get found, look credible, and convert more customers.
          </p>
        </div>
      </section>

      {serviceCategories.map((categoryGroup) => (
        <section key={categoryGroup.category} className="section sectionBorder">
          <div className="container">
            <div style={{ maxWidth: 760, marginBottom: 28 }}>
              <h2 className="h2">{categoryGroup.category}</h2>
            </div>
            <div className="grid3">
              {categoryGroup.services.map((service) => (
                <div key={service.title} className="card">
                  <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>{service.title}</h3>
                  <p className="muted" style={{ marginBottom: 16 }}>{service.text}</p>
                  <ul className="list">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <FreeEvaluationCTA />
    </main>
  );
}
