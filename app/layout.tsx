import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import ScrollToTop from "@/components/ScrollToTop";
import { themeScript } from "@/components/ThemeToggle";
import { site } from "@/lib/site";
import { categories, startingPrice } from "@/lib/services";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

// The preview lives on a legxcysol.dev subdomain while ecamservices.com is still on Wix,
// so keep it out of search results until it moves to the real domain.
const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Eco-Friendly Cleaning & Maintenance in London | ECAMS",
    template: "%s | ECAMS",
  },
  description: site.description,
  robots: indexable ? undefined : { index: false, follow: false },
  openGraph: {
    title: "ECAMS: Eco-friendly cleaning & maintenance in London",
    description: site.description,
    images: ["/images/hero-window.webp"],
    locale: "en_GB",
    type: "website",
    siteName: "ECAMS",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0a140f" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: "ECAMS",
  legalName: site.legalName,
  url: site.url,
  telephone: "+447401694259",
  email: site.email,
  image: `${site.url}/images/hero-window.webp`,
  priceRange: "££",
  areaServed: { "@type": "City", name: "London" },
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  sameAs: [site.socials.instagram, site.socials.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: categories.map((c) => ({
      "@type": "OfferCatalog",
      name: c.name,
      description: `From ${startingPrice(c)}`,
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: themeScript sets data-theme before React hydrates.
    <html lang="en-GB" className={`${bricolage.variable} ${geist.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="overflow-x-clip bg-paper font-sans text-ink">
        <a
          href="#main"
          className="sr-only z-60 rounded-full bg-forest px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <ScrollToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
