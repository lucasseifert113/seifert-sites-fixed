"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="navHeader">
      <div className="container navContainer">
        <Link href="/" className="navLogo" onClick={() => setOpen(false)}>
          <div className="navLogoIcon">
            <Image src="/logo.png" alt="Seifert Sites" width={28} height={28} />
          </div>
          <div style={{ display: "grid", gap: 2 }}>
            <span style={{ fontWeight: 700 }}>{site.name}</span>
            <span className="navLogoSub">Premium web design</span>
          </div>
        </Link>

        <button
          className="navToggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`navHamburger ${open ? "navHamburgerOpen" : ""}`} />
        </button>

        <div className={`navLinks ${open ? "navLinksOpen" : ""}`}>
          <nav className="navLinkList">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="navLink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="btnGhost navCta"
            onClick={() => setOpen(false)}
          >
            {site.primaryCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
