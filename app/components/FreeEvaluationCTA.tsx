import Link from "next/link";
import { site } from "../lib/site";

export default function FreeEvaluationCTA() {
  return <section className="section sectionBorder"><div className="container"><div className="card panelHighlight">
    <p className="eyebrow">Free website evaluation</p>
    <h2 className="h2">What would help your next customer get in touch?</h2>
    <p className="lead">{site.evaluation}</p>
    <div className="btnRow"><Link className="btnPrimary" href="/contact">{site.primaryCta}</Link>
      <Link className="btnGhost" href="/work">{site.secondaryCta}</Link></div>
  </div></div></section>;
}
