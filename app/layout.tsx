import "./globals.css";
import type { Metadata } from "next";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { site } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.title,
    template: "%s | Seifert Sites",
  },
  description: site.description,
  keywords: [
    "web design",
    "website design",
    "local business website",
    "small business web design",
    "Platteville web design",
    "Wisconsin web design",
    "affordable web design",
    "freelance web designer",
    "website redesign",
    "landing page design",
  ],
  authors: [{ name: "Lucas Seifert", url: site.domain }],
  creator: "Lucas Seifert",
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.domain,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Seifert Sites - Premium websites for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Background />
        <Nav />
        <div className="site">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
