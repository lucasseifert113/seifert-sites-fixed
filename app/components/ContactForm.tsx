"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xgorbggv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
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
      <div className="card panelHighlight" style={{ textAlign: "center", padding: "48px 24px" }}>
        <h3 className="h3" style={{ marginBottom: 8 }}>Message sent.</h3>
        <p className="muted">I will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card panelHighlight" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <p className="eyebrow">Send a message</p>
      <h2 className="h2" style={{ marginBottom: 4 }}>Tell me about your project</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label htmlFor="name" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="email"
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

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label htmlFor="website" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Current website URL (if any)</label>
        <input
          type="url"
          id="website"
          name="website"
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

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label htmlFor="message" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>What do you need?</label>
        <textarea
          id="message"
          name="message"
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

      <button
        type="submit"
        className="btnPrimary"
        disabled={status === "sending"}
        style={{ alignSelf: "flex-start", marginTop: 4 }}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p style={{ color: "#ef4444", fontSize: 14 }}>Something went wrong. Try emailing seifertsites@gmail.com directly.</p>
      )}
    </form>
  );
}
