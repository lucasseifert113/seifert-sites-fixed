import { site } from "../lib/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.state,
      addressCountry: site.location.country,
    },
    areaServed: [
      { "@type": "State", name: "Wisconsin" },
      { "@type": "State", name: "Iowa" },
      { "@type": "State", name: "Illinois" },
    ],
    priceRange: "$250 - $4,000+",
    image: `${site.domain}/og.png`,
    sameAs: [],
    serviceType: "Web Design",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Page",
            description: "One-page site built for a single offer and audience.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Website",
            description:
              "Multi-page site for local businesses that need trust, positioning, and conversions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Redesign",
            description:
              "Visual upgrade and restructure for businesses with outdated or cluttered sites.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
