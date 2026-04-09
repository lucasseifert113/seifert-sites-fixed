import { site } from "../lib/site";

type Props = {
  eyebrow?: string;
  title?: string;
  text?: string;
  buttonText?: string;
};

export default function FreeEvaluationCTA({
  eyebrow = "Free offer",
  title = "Get a free website evaluation",
  text = "If you already have a site, I’ll tell you what’s helping, what’s hurting, and what to fix first. If you don’t have one yet, I’ll tell you what your business should have online.",
  buttonText = "Book your free website evaluation",
}: Props) {
  return (
    <section className="section sectionBorder">
      <div className="container">
        <div className="card panelHighlight freeEvalSection">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2">{title}</h2>
          <p className="lead freeEvalText">{text}</p>
          <div className="btnRow freeEvalActions">
            <a className="btnPrimary" href={site.calendlyUrl} target="_blank" rel="noreferrer">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
