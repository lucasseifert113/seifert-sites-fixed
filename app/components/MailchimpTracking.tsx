"use client";

import { useEffect, useState } from "react";

type Consent = "pending" | "accepted" | "declined";
const STORAGE_KEY = "seifert-sites-mailchimp-consent-v1";
const MAILCHIMP_SCRIPT = "https://chimpstatic.com/mcjs-connected/js/users/0b73a25746fdf425790697470/f3482dbe75a97534a455da547.js";

export default function MailchimpTracking() {
  const [consent, setConsent] = useState<Consent>("pending");
  const [ready, setReady] = useState(false);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    try {
      const previous = window.localStorage.getItem(STORAGE_KEY);
      if (previous === "accepted" || previous === "declined") {
        setConsent(previous);
        setShowChoices(false);
      } else {
        setShowChoices(true);
      }
    } catch {
      // If storage is blocked, offer a choice for the current page only.
      setShowChoices(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || consent !== "accepted" || document.getElementById("mcjs")) return;

    // Load marketing analytics only after affirmative visitor consent.
    const script = document.createElement("script");
    script.id = "mcjs";
    script.src = MAILCHIMP_SCRIPT;
    script.async = true;
    document.head.appendChild(script);
  }, [consent, ready]);

  function choose(next: Exclude<Consent, "pending">) {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage may be disabled by visitor preferences.
    }

    const wasTracking = consent === "accepted";
    setConsent(next);
    setShowChoices(false);

    // Removing a script element doesn't stop already-running JavaScript.
    // Reload before continuing once consent is withdrawn.
    if (wasTracking && next === "declined") window.location.reload();
  }

  if (!ready) return null;

  return (
    <>
      {showChoices ? (
        <aside
          role="dialog"
          aria-label="Analytics cookie preferences"
          aria-modal="false"
          style={{
            position: "fixed",
            bottom: 16,
            left: 16,
            right: 16,
            maxWidth: 520,
            zIndex: 1000,
            background: "#15161b",
            border: "1px solid rgba(255,255,255,0.24)",
            color: "#fff",
            borderRadius: 18,
            padding: 20,
            boxShadow: "0 16px 50px rgba(0,0,0,0.6)",
          }}
        >
          <p style={{ margin: "0 0 8px", fontWeight: 700 }}>Optional website analytics</p>
          <p style={{ margin: "0 0 14px", lineHeight: 1.5, fontSize: 14, color: "rgba(255,255,255,0.78)" }}>
            Seifert Sites LLC would like to use Mailchimp tracking to understand
            website visits and improve marketing. This tracking stays off unless
            you accept. See our <a href="/privacy" style={{ textDecoration: "underline" }}>privacy notice</a>.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => choose("declined")}
              style={{ cursor: "pointer", borderRadius: 10, padding: "10px 16px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", fontWeight: 600 }}
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              style={{ cursor: "pointer", borderRadius: 10, padding: "10px 16px", background: "#ff9a3d", color: "#07080b", border: 0, fontWeight: 700 }}
            >
              Accept analytics
            </button>
          </div>
        </aside>
      ) : (
        <button
          type="button"
          onClick={() => setShowChoices(true)}
          aria-label="Change analytics cookie preferences"
          style={{
            position: "fixed", bottom: 12, left: 12, zIndex: 1000, cursor: "pointer",
            color: "rgba(255,255,255,0.9)", background: "rgba(15,16,20,0.9)",
            border: "1px solid rgba(255,255,255,0.22)", borderRadius: 999,
            padding: "7px 12px", fontSize: 12,
          }}
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
