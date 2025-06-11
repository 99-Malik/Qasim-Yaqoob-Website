'use client'

import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import AcHeader from "@/components/header/ACHeader"; // assuming this is your AC header
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/Footer";
import FixedCallButtons from "@/components/buttons/FixedCallButtons";
import { usePathname } from "next/navigation";
import Script from "next/script";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAcRepairPage = pathname === "/";

  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16983992238" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','AW-16983992238');
        ` }} />
      </head>
      <body
        className={cn(
          poppins.variable,
          montserrat.variable,
          inter.variable,
          "max-w-screen flex flex-col overflow-x-hidden font-poppins text-custom-black"
        )}
      >
        <FixedCallButtons />
        {isAcRepairPage ? <AcHeader /> : <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
