import { Nunito, Quicksand } from "next/font/google";
// import type { Metadata } from "next"
import Header from "../app/components/Header";
import Fotter from "./components/Fotter";
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
      <body
        className={`${quicksand.className} ${quicksand.className}`}
      >
        <Header/>
        {children}
        <Fotter />
      </body>
    </html>
  );
}
