"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { sendWebsiteForm } from "../lib/forms";

const title = "Save 25% on your first website build, up to $200";
const storageKey = "seifert-firstsite25";

export default function BuildOffer() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "claimed" | "error">("idle");

  useEffect(() => {
    const button = trigger.current;
    if (!button) return;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "claimed") setStatus("claimed");
      if (saved) return;
    } catch { /* Storage may be unavailable in private browsing. */ }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (!dialog.current?.open && document.activeElement === document.body) {
        remember("seen");
        dialog.current?.showModal();
      }
    }, { threshold: 1 });
    observer.observe(button);
    return () => observer.disconnect();
  }, []);

  function remember(state: "seen" | "claimed") {
    try { localStorage.setItem(storageKey, state); } catch { /* The offer also works without storage. */ }
  }

  async function claim(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    data.set("subject", "Seifert Sites LLC | First website build offer | FIRSTSITE25");
    data.set("offer", title);
    setStatus("sending");
    try {
      await sendWebsiteForm(data);
      remember("claimed");
      setStatus("claimed");
    } catch {
      setStatus("error");
    }
  }

  return <div className="container offerEntry">
    <button className="btnGhost" ref={trigger} onClick={() => {
      if (status !== "claimed") remember("seen");
      dialog.current?.showModal();
    }}>
      {status === "claimed" ? "View your FIRSTSITE25 offer" : title}
    </button>
    <dialog ref={dialog} className="buildOffer" aria-labelledby="offer-title" onClose={() => {
      trigger.current?.focus({ preventScroll: true });
    }}>
      <button type="button" className="offerClose" onClick={() => dialog.current?.close()}>Close</button>
      <p className="eyebrow">Seifert Sites LLC · New client offer</p>
      <h2 className="h2" id="offer-title">{title}</h2>
      <p>One offer per new client. Applies to the one-time website build fee. Maintenance, marketing, and other services are excluded.</p>
      {status === "claimed" ? <div role="status">
        <h3>Your code is FIRSTSITE25</h3>
        <p>Include this code and the email you used here when you request your quote. Lucas will apply the discount to your eligible build.</p>
        <Link className="btnPrimary" href="/contact">Request a quote with your code</Link>
      </div> : <form onSubmit={claim}>
        <label>Email address<input type="email" name="email" autoComplete="email" maxLength={254} required /></label>
        <label>Phone number (optional for a callback)<input type="tel" name="phone" autoComplete="tel" maxLength={35} /></label>
        <p className="mutedSmall">We’ll use these details to handle your offer request. Add your phone number if you’d like Lucas to call about your project. <Link href="/privacy">Privacy notice</Link></p>
        <button className="btnPrimary" disabled={status === "sending"}>{status === "sending" ? "Claiming…" : "Claim my discount"}</button>
        {status === "error" && <p role="alert">Your claim could not be confirmed. Try again or <a href="mailto:lucas@seifertsites.com?subject=FIRSTSITE25">email Lucas about the offer</a>.</p>}
      </form>}
    </dialog>
  </div>;
}
