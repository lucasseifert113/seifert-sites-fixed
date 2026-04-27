const testimonials = [
  {
    quote:
      "Lucas built our entire gym website from scratch. Clean, professional, and exactly what we needed. He was responsive, fast, and easy to work with. Highly recommend.",
    name: "Devin Pomranky",
    title: "Founder, Rebel Training",
    url: "https://rebeltraining.org",
  },
  {
    quote:
      "The site came together quickly and looks way more professional than what I had before. Lucas made the whole process simple and stress-free.",
    name: "Andy LeBrun",
    title: "Andy LeBrun Lacrosse",
    url: "https://lebrunlacrosse.online",
  },
];

export default function Testimonials() {
  return (
    <section className="section sectionBorder">
      <div className="container">
        <div style={{ maxWidth: 760, marginBottom: 28 }}>
          <p className="eyebrow">What clients say</p>
          <h2 className="h2">Real results from real businesses</h2>
        </div>

        <div className="grid2">
          {testimonials.map((t) => (
            <div key={t.name} className="card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.82)",
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{t.name}</p>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                >
                  {t.title} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
