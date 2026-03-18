import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(16px)",
        background: "rgba(7, 8, 11, 0.64)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container" style={{ paddingTop: 14, paddingBottom: 14 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                display: "grid",
                placeItems: "center",
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <Image src="/logo.png" alt="Seifert Sites" width={28} height={28} />
            </div>
            <div style={{ display: "grid", gap: 2 }}>
              <span style={{ fontWeight: 700 }}>{site.name}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                Premium web design
              </span>
            </div>
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="btnGhost"
              style={{
                minHeight: 42,
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255, 122, 26, 0.35)",
                background:
                  "linear-gradient(180deg, rgba(255, 122, 26, 0.18), rgba(255, 122, 26, 0.06))",
              }}
            >
              {site.primaryCta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
