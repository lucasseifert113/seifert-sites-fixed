import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.seifertsites.com";


  return [
    { url: base, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/local-seo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/google-ads`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/social-media-management`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/website-audits`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/process`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/how-to-market-your-small-business-online`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/platteville-web-design-tay-blendz-averon`, lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/google-business-profile-guide`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/5-signs-your-website-is-costing-you-customers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/why-local-businesses-need-a-real-website`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/what-to-expect-when-you-hire-a-web-designer`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/how-much-does-a-website-cost`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/wix-vs-custom-website`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/local-seo-basics-small-business`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/web-design-platteville-wi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-design-wisconsin`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-design-iowa`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/web-design-illinois`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/rebel-training`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
