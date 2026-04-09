import Link from "next/link";
import FreeEvaluationCTA from "../components/FreeEvaluationCTA";

export default function WorkPage() {
  return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: 1000 }}>
          
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <p className="eyebrow">Work</p>
            <h2 className="h2">Selected projects</h2>
          </div>

          <div className="grid3">

            {/* Real Project */}
            <div className="card panelHighlight">
              <h3 className="h3">Andy LeBrun Lacrosse</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Multi-page website built to improve credibility and make information easier to navigate.
              </p>

              <div className="btnRow">
                <a
                  className="btnPrimary"
                  href="https://lebrunlacrosse.online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site
                </a>
              </div>
            </div>

            {/* Lucas Seifert Online */}
            <div className="card panelHighlight">
              <h3 className="h3">Lucas Seifert Online</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Personal brand and portfolio site built to establish authority, showcase client work, and convert visitors into leads.
              </p>
              <div className="btnRow">
                <a
                  className="btnPrimary"
                  href="https://www.lucasseifert.online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site
                </a>
              </div>
            </div>

            {/* TideGuard */}
            <div className="card panelHighlight">
              <h3 className="h3">TideGuard Fiji</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Educational site on coastal climate risk in Fiji — covering sea-level rise, flooding, erosion, and community resilience.
              </p>
              <div className="btnRow">
                <a
                  className="btnPrimary"
                  href="https://www.tideguard.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live site
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FreeEvaluationCTA
        eyebrow="Free website evaluation"
        title="Like the direction? Get a free evaluation of your own site."
        text="If your current site feels outdated, weak, or unclear, I’ll review it and tell you what I’d fix first."
      />
    </main>
  );
}