import { Geist, Geist_Mono } from "next/font/google";
// import type { Metadata } from "next"
import Header from "../app/components/Header";
import Fotter from "./components/Fotter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Caffie - Premium Coffee Experience",
//   description: "Enjoy the finest coffee from farm to your doorstep. Premium coffee blends, expertly roasted.",
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Fotter />
      </body>
    </html>
  );
}
