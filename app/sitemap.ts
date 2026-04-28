import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seifertsites.com";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/process`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/5-signs-your-website-is-costing-you-customers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/why-local-businesses-need-a-real-website`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/what-to-expect-when-you-hire-a-web-designer`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/how-much-does-a-website-cost`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/wix-vs-custom-website`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/local-seo-basics-small-business`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/web-design-platteville-wi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-design-wisconsin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-design-iowa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-design-illinois`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
