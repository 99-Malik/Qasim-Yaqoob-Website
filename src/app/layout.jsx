import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/Footer";
import FixedCallButtons from "@/components/buttons/FixedCallButtons";

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

export const metadata = {
  title: "Customer Service UAE",
  description: "Appliances Repair Company in UAE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.variable,
          montserrat.variable,
          inter.variable,
          "max-w-screen flex flex-col overflow-x-hidden font-poppins text-custom-black",
        )}
      >
        <FixedCallButtons />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
