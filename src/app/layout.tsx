import { Fraunces, Manrope } from "next/font/google";
import { MessageCircleMore } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./providers";
import "./globals.css";

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

export const metadata = {
  title: "Caffia - Premium Coffee Experience",
  description: "Enjoy the finest coffee from farm to your doorstep. Premium coffee blends, expertly roasted.",
  icons: { icon: "/caffia.svg" },
  openGraph: {
    title: "Caffia",
    description: "Premium, handcrafted coffee experience.",
    url: "https://nextjs-caffia.vercel.app",
    siteName: "Caffia",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-cream text-espresso">
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
