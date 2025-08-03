'use client'

import { Inter, Montserrat, Poppins } from "next/font/google";
import "../globals.css";
import BrandHeader from "@/components/header/BrandHeader";
import BrandFooter from "@/components/footer/BrandFooter";
import { cn } from "@/lib/utils";
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

export default function CompanyLayout({ children }) {
  const pathname = usePathname();
  const brand = pathname.split("/")[2]; // Extract brand from /company/brand/...

  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17299909485" />
        <Script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','AW-17299909485');
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
        <main className="pt-20">
          {children}
        </main>
        <BrandFooter brand={brand} />
      </body>
    </html>
  );
} 