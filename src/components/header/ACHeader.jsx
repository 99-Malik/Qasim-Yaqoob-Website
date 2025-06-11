"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import HeaderSheet from "./HeaderSheet";
import { headerLinks, sendMessage } from "@/lib/data";
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
    { name: "AC", href: "/ac-repair" },
  ];
  return (
    <div className="absolute z-50 flex w-screen items-center justify-center ">
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
              <span className="text-xl font-semibold text-primary">
                AC & HVAC Specialists 
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
          <GetInTouchButton className="hidden md:flex" onClick={sendMessage} />
          {/* <div className="md:hidden">
            <HeaderSheet />
          </div> */}
        </div>
     
      </div>
    </div>
  );
};

export default Header;
