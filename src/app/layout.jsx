import { Nunito, Quicksand } from "next/font/google";
import { MessageCircleMore } from "lucide-react";
// import type { Metadata } from "next"
import Header from "@/components/layout/Header";
import Fotter from "@/components/layout/Fotter";
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

// export const metadata: Metadata = {
//   title: "Caffie - Premium Coffee Experience",
//   description: "Enjoy the finest coffee from farm to your doorstep. Premium coffee blends, expertly roasted.",
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${quicksand.className}`}>
        <Header />
        {children}
        // ...existing code...
        <a
          href="https://wa.me/+919987545874?text=👋%20Hello%20caffia"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
        >
          <MessageCircleMore className="w-6 h-6 text-white" />
        </a>
        // ...existing code...
        <Fotter />
      </body>
    </html>
  );
}
