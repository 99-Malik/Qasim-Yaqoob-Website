"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import HeaderSheet from "./HeaderSheet";
import GetInTouchButton from "./GetInTouchButton";
import { headerLinks, sendMessage } from "@/lib/data";
import ACHeader from "./ACHeader";

const Header = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];
  const isCompanyRoute =
    pathname.startsWith("/company/") &&
    company &&
    company.toLowerCase() !== "ac";

  const isHomeRoute = pathname === "/";

  const companies = [
    { name: "Bosch", href: "/company/bosch" },
    { name: "Siemens", href: "/company/siemens" },
    { name: "Samsung", href: "/company/samsung" },
    { name: "LG", href: "/company/lg" },
  ];

  return (
    <div className="absolute z-50 flex w-screen items-center justify-center">
      <div
        className={cn(
          "flex h-full w-full max-w-7xl flex-col items-center justify-center rounded-b-3xl border-b bg-white/90 shadow-lg backdrop-blur-md",
          isCompanyRoute ? `border-${company}Primary/80` : "border-primary/80"
        )}
      >
        <div className="flex w-full items-center justify-between gap-5 px-6 py-5 md:py-6 lg:px-10">
          {/* Brand Logo or Default */}
          {isCompanyRoute ? (
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
              <Image
                src={`/companies/${company}.svg`}
                alt={`${company} Logo`}
                width={150}
                height={60}
                className="w-[130px] md:w-[150px] object-contain drop-shadow-sm"
              />
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">Quick Fix</span>
            </div>
          )}

          {/* Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {headerLinks.map((link, index) => (
              <NavLink
                key={index}
                company={company}
                title={link.title}
                href={
                  isCompanyRoute
                    ? `/company/${company}${link.href}`
                    : link.href
                }
              />
            ))}
          </div>

          {/* CTA and Mobile Menu */}
          <GetInTouchButton className="hidden md:flex" onClick={sendMessage} />
          <div className="md:hidden">
            <HeaderSheet />
          </div>
        </div>

        {/* Company Selector on Home */}
        {isHomeRoute && (
          <div className="flex w-full items-center justify-center gap-4 border-t border-black/10 px-5 py-4 md:justify-start">
            {companies.map((company, index) => (
              <NavLink key={index} title={company.name} href={company.href} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
