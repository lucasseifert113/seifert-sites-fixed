import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Web Design Tips for Local Businesses",
  description:
    "Practical web design advice for local business owners. Learn what makes a website convert, when to redesign, and how to stop losing customers to a bad site.",
  alternates: { canonical: "https://seifertsites.com/blog" },
};

const posts = [
  {
    slug: "google-business-profile-guide",
    title: "Why your Google Business Profile matters more than your website",
    excerpt:
      "Most customers find you on Google before they see your website. Here is what to optimize in your profile and why it matters more than you think.",
    date: "April 2026",
    tag: "Local SEO",
    readTime: "6 min read",
  },
  {
    slug: "5-signs-your-website-is-costing-you-customers",
    title: "5 signs your website is costing you customers",
    excerpt:
      "Most business owners do not realize their site is actively pushing people away. Here are the five biggest red flags and what to do about each one.",
    date: "April 2026",
    tag: "Website Audit",
    readTime: "4 min read",
  },
  {
    slug: "why-local-businesses-need-a-real-website",
    title: "Why local businesses need a real website (not just a Facebook page)",
    excerpt:
      "A Facebook page is not a website. Here is why that matters for trust, SEO, and actually getting found by customers who are ready to buy.",
    date: "April 2026",
    tag: "Local SEO",
    readTime: "5 min read",
  },
  {
    slug: "what-to-expect-when-you-hire-a-web-designer",
    title: "What to expect when you hire a web designer",
    excerpt:
      "The process does not have to be painful. Here is what a good web design project looks like from start to finish so you know exactly what you are getting into.",
    date: "April 2026",
    tag: "Process",
    readTime: "4 min read",
  },
  {
    slug: "how-much-does-a-website-cost",
    title: "How much does a website cost for a small business?",
    excerpt:
      "DIY builders, freelancers, and agencies compared. A straight breakdown of what you actually get at each price point and what questions to ask before you spend anything.",
    date: "April 2026",
    tag: "Pricing",
    readTime: "5 min read",
  },
  {
    slug: "wix-vs-custom-website",
    title: "Wix vs a custom website: which is better for your business?",
    excerpt:
      "An honest comparison. When a builder is fine, when it starts to hurt you, and what you actually give up by staying on a template platform.",
    date: "April 2026",
    tag: "Web Design",
    readTime: "5 min read",
  },
  {
    slug: "local-seo-basics-small-business",
    title: "Local SEO basics every small business should know",
    excerpt:
      "Google Business Profile, local keywords, schema markup, and reviews. The things that actually move the needle for local search without needing to become an SEO expert.",
    date: "April 2026",
    tag: "Local SEO",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Blog · Seifert Sites</p>
          <h1 className="h1">
            Practical advice for{" "}
            <span className="accent">local business owners</span>.
          </h1>
          <p className="lead">
            No fluff. No jargon. Just honest takes on what makes a website actually work
            for a real business.
          </p>
        </div>
      </section>

      <section className="section sectionBorder">
        <div className="container">
          <div className="gridAuto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article className="card blogCard">
                  <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                    <span className="badge">{post.tag}</span>
                    <span
                      className="badge"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        borderColor: "rgba(255,255,255,0.12)",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="h3" style={{ fontSize: 22, marginBottom: 10 }}>
                    {post.title}
                  </h2>
                  <p className="muted" style={{ marginBottom: 14 }}>
                    {post.excerpt}
                  </p>
                  <p className="mutedSmall">{post.date}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
