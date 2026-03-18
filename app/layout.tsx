import "./globals.css";
import type { Metadata } from "next";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { site } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.domain,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Nav />
        <main className="site">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
