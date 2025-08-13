'use client';

import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import AcHeader from "@/components/header/ACHeader";
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
  const hideFooter = pathname.startsWith("/company/");

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#10b981" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17409704964" />
        <Script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','AW-17409704964');
        `}} />
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
        <Header />
        <main
          className={cn({
            "pt-20": pathname === "/",
            "pt-8": pathname.startsWith("/company/"),
          })}
        >
          {children}
        </main>
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
