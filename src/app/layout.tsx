import { Nunito, Quicksand } from "next/font/google";
import { MessageCircleMore } from "lucide-react";
// import type { Metadata } from "next"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-heading",
});

// Load Quicksand for body text
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Caffie - Premium Coffee Experience",
  description: "Enjoy the finest coffee from farm to your doorstep. Premium coffee blends, expertly roasted.",
  icons: { icon: "/caffia.svg" },
  openGraph: {
    title: "Caffie",
    description: "Premium, handcrafted coffee experience.",
    url: "https://nextjs-caffia.vercel.app",
    siteName: "Caffie",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} mx-auto`}>
        <Header />
        {children}
        <a
          href="https://wa.me/+919987545874?text=👋%20Hello%20caffia"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
        >
          <MessageCircleMore className="w-6 h-6 text-white" />
        </a>
        <Toaster richColors closeButton position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
