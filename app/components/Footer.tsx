import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "22px 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(7, 8, 11, 0.64)",
        backdropFilter: "blur(14px)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 650 }}>
            <Image src="/logo.png" alt="Seifert Sites" width={22} height={22} />
            <div style={{ display: "grid", gap: 2 }}>
              <span>{site.name}</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                {site.serviceArea}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, color: "rgba(255,255,255,0.52)", flexWrap: "wrap" }}>
            <Link href="/services" style={{ textDecoration: "none" }}>
              Services
            </Link>
            <Link href="/work" style={{ textDecoration: "none" }}>
              Work
            </Link>
            <Link href="/pricing" style={{ textDecoration: "none" }}>
              Pricing
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </div>

          <div style={{ color: "rgba(255,255,255,0.52)", fontSize: 13, textAlign: "right" }}>
            <div>© {new Date().getFullYear()} {site.name}</div>
            <a href={`mailto:${site.email}`} style={{ textDecoration: "none" }}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
