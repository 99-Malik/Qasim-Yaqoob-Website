"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import HeaderSheet from "./HeaderSheet";
import { headerLinks } from "@/lib/data";
import GetInTouchButton from "./GetInTouchButton";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];
  const companies = [
    { name: "Bosch", href: "/company/bosch" },
    { name: "Siemens", href: "/company/siemens" },
    { name: "Samsung", href: "/company/samsung" },
    { name: "LG", href: "/company/lg" },
  ];
  return (
    <div className="absolute z-50 flex w-screen items-center justify-center px-2">
      <div
        className={cn(
          "flex h-full w-full max-w-7xl flex-col items-center justify-center rounded-b-2xl border-b-2 bg-white shadow",
          pathname.includes("/company/")
            ? `border-${company}Primary/80`
            : "border-primary/80",
        )}
      >
        <div className="flex w-full items-center justify-between gap-5 px-8 py-5">
          {pathname.includes("/company/") ? (
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/companies/" + company + ".svg"}
                alt="Logo"
                width={150}
                height={100}
                className="w-[150px]"
              />
            </Link>
          ) : (
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-primary">
                Repair Site
              </span>
            </Link>
          )}
          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            {headerLinks.map((link, index) => (
              <NavLink
                company={company}
                title={link.title}
                href={
                  pathname.includes("/company/")
                    ? "/company/" + company + link.href
                    : link.href
                }
                key={index}
              />
            ))}
          </div>
          <GetInTouchButton className="hidden md:flex" />
          <div className="md:hidden">
            <HeaderSheet />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-5 border-t border-black/10 px-5 py-4 md:justify-start">
          {companies.map((company, index) => (
            <NavLink
              key={index}
              title={company.name}
              href={company.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
