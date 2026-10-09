import { Fraunces, Manrope } from "next/font/google";
import { MessageCircleMore } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./providers";
import "./globals.css";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { site, absoluteUrl } from "@/lib/site";

// Serif for headings — gives the roastery / premium feel
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Clean sans for body text and UI
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "instant coffee",
    "flavoured instant coffee",
    "hazelnut coffee",
    "french vanilla coffee",
    "arabica coffee India",
    "buy coffee online India",
    "cafe MG Road Pune",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.ogImage, width: 2060, height: 720, alt: "Caffia instant coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
};

// Brand + cafe facts for Google and AI engines (knowledge panel, local results, citations)
const organizationJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/assets/images/caffia.png"),
    email: site.email,
    telephone: site.phone,
    sameAs: Object.values(site.social).filter(Boolean),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${site.url}/#cafe`,
    name: `${site.name} Cafe`,
    url: site.url,
    image: absoluteUrl(site.ogImage),
    telephone: site.phone,
    servesCuisine: "Coffee",
    priceRange: "₹₹",
    address: { "@type": "PostalAddress", ...site.address },
    parentOrganization: { "@id": `${site.url}/#organization` },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-cream text-espresso">
        <JsonLd data={organizationJsonLd} />
        <Providers>
          <Header />
          <main>{children}</main>
          <a
            href="https://wa.me/919987545874?text=Hello%20Caffia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110"
          >
            <MessageCircleMore className="h-6 w-6" />
          </a>
          <Toaster richColors closeButton position="top-center" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
