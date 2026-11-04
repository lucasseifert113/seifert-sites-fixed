"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    for (const field of ["name", "business", "message"]) {
      const input = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
      const value = input.value.trim();
      if (!value || (field === "message" && value.length < 10)) {
        input.setCustomValidity(field === "message" ? "Describe your project goal in at least 10 characters." : "Please complete this field.");
        input.reportValidity();
        return;
      }
      data.set(field, value);
    }
    const projectIntent = data.get("projectIntent") === "yes";
    data.set("subject", projectIntent
      ? "Seifert Sites LLC | Evaluation inquiry | Considering paid work"
      : "Seifert Sites LLC | Evaluation inquiry | Feedback only");
    setStatus("sending");
    try {
      data.append("access_key", "415fcd94-5170-4925-a1e6-8e0ffe797de9");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok && (await res.json()).success === true) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="card panelHighlight" style={{ textAlign: "center", padding: "48px 24px" }}>
        <h3 className="h3" style={{ marginBottom: 8 }}>Message sent.</h3>
        <p className="muted">Thank you. Lucas will review your request and reply by email.</p>
      </div>
    );
  }

  return (
    <form onInput={event => { const field = event.target; if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity(""); }} onSubmit={handleSubmit} className="card panelHighlight" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <p className="eyebrow">Send a message</p>
      <h2 className="h2" style={{ marginBottom: 4 }}>Tell me about your project</h2>

      <div className="inquiryFields">
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label htmlFor="name" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Name</label>
          <input
            type="text"
            id="name"
            name="name" maxLength={120} autoComplete="name"
            required
            placeholder="Your name"
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              fontSize: 15,
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label htmlFor="email" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Email</label>
          <input
            type="email"
            id="email"
            name="email" maxLength={254} autoComplete="email"
            required
            placeholder="you@email.com"
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              fontSize: 15,
            }}
          />
        </div>
      </div>

      <div className="inquiryFields">
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label htmlFor="phone" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Phone (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(555) 123-4567"
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              fontSize: 15,
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label htmlFor="website" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Current website URL (if any)</label>
          <input
            type="url"
            id="website"
            name="website" pattern="https?://.+" title="Enter a complete http or https address."
            placeholder="https://yourbusiness.com"
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              fontSize: 15,
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label htmlFor="business" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Business name</label>
        <input
          type="text"
          id="business"
          name="business" required maxLength={160} autoComplete="organization"
          placeholder="Your business name"
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.3)",
            color: "#fff",
            fontSize: 15,
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label htmlFor="message" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>What do you want visitors to do?</label>
        <textarea
          id="message"
          name="message" minLength={10} maxLength={4000}
          required
          rows={4}
          placeholder="What your business does, what kind of site you need, what is not working right now..."
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.3)",
            color: "#fff",
            fontSize: 15,
            resize: "vertical",
          }}
        />
      </div>

      <label><input type="checkbox" name="projectIntent" value="yes" /> I’m considering hiring someone to work on this website.</label>
      <p className="mutedSmall">Web3Forms delivers this request to Seifert Sites LLC by email. <Link href="/privacy">Read our privacy notice</Link>.</p>
      <button
        type="submit"
        className="btnPrimary"
        disabled={status === "sending"}
        style={{ alignSelf: "flex-start", marginTop: 4 }}
      >
        {status === "sending" ? "Sending..." : "Request my free evaluation"}
      </button>

      {status === "error" && (
        <p role="alert" style={{ color: "#ffa49b", fontSize: 14 }}>Something went wrong. Try emailing lucas@seifertsites.com directly.</p>
      )}
    </form>
  );
}
