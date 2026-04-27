export default function PricingJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a website from Seifert Sites cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Development starts at $250 per page. A Starter site (1-3 pages) runs $250-$850, Growth (4-6 pages) runs $850-$1,250, and Premium (7+ pages) starts at $1,275. All plans include $50/month for ongoing updates.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can Seifert Sites deliver a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most sites launch within 1-2 weeks if content and approvals move quickly. Delays usually come from slow inputs, not slow builds.",
        },
      },
      {
        "@type": "Question",
        name: "What does the $50/month include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ongoing updates, small content changes, and keeping the site current without you having to touch it.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
