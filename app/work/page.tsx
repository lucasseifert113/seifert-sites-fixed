import Link from "next/link";

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

            {/* Placeholder 1 */}
            <div className="card">
              <h3 className="h3">Project</h3>
              <p className="muted">In development</p>
            </div>

            {/* Placeholder 2 */}
            <div className="card">
              <h3 className="h3">Project</h3>
              <p className="muted">In development</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}