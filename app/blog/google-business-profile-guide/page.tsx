import type { Metadata } from "next";
import FreeEvaluationCTA from "@/app/components/FreeEvaluationCTA";
export const metadata: Metadata = {
  title: "A small business guide to Google Business Profile",
  description: "Help nearby customers check your hours, understand your services, and reach the right person.",
  alternates: { canonical: "/blog/google-business-profile-guide" },
};

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <p className="eyebrow">Seifert Sites LLC</p>
      <h1 className="h1">A small business guide to Google Business Profile</h1>
      <p className="lead">Help nearby customers check your hours, understand your services, and reach the right person.</p>
    </div></section>
    <section className="section sectionBorder"><div className="container grid2">
      <div className="card"><h2 className="h2">Start with the details customers use</h2><p className="muted">Verify your eligible business, select the category that best describes your work, and check your hours, contact information, and website link.</p></div>
      <div className="card"><h2 className="h2">Show what a visit looks like</h2><p className="muted">Add current photos of your work or location. Invite customers to share honest reviews and reply with information that helps future customers.</p></div>
      <div className="card"><h2 className="h2">Check what happens next</h2><p className="muted">Open the profile on your phone. Follow the website link and try the contact path yourself. A correct listing still needs a useful destination.</p></div>
      <div className="card"><h2 className="h2">How local results work</h2><p className="muted">Google describes relevance, distance, and prominence as the main factors. No particular photo count or posting schedule guarantees placement. See <a href="https://support.google.com/business/answer/7091">Google’s guide to local ranking</a>.</p></div>
    </div></section>
    <FreeEvaluationCTA />
  </main>;
}
