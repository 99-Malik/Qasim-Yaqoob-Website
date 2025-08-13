"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import HeaderSheet from "./HeaderSheet";
import GetInTouchButton from "./GetInTouchButton";
import { headerLinks, sendMessage } from "@/lib/data";
import { Zap } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand Logo */}
          {isCompanyRoute ? (
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src={`/companies/${company}.svg`}
                alt={`${company} Logo`}
                width={120}
                height={48}
                className="h-8 lg:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="hidden sm:flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
                <span className="text-xs font-bold text-white uppercase tracking-wide">Elite</span>
              </div>
            </Link>
          ) : (
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-[#FB923C] to-[#FB923C] flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <div className="text-lg lg:text-xl font-bold text-gray-900">Emirates Repair Center</div>
              </div>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <GetInTouchButton className="hidden sm:flex" onClick={sendMessage} />
            <div className="lg:hidden">
              <HeaderSheet />
            </div>
          </div>
        </div>

        {/* Company Selector Bar - Only on Home */}
        {/* {isHomeRoute && (
          <div className="border-t border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100/50">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 py-3 px-4">
              <span className="text-sm font-medium text-gray-700 mb-2 sm:mb-0">Choose Brand:</span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                {companies.map((company, index) => (
                  <Link
                    key={index}
                    href={company.href}
                    className="text-xs sm:text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-200 hover:scale-105 px-2 py-1 rounded-md hover:bg-gray-100"
                  >
                    {company.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
};

export default Header;
