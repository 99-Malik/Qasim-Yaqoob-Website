"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ title = "", href = "/" }) => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];
  return (
    <Link
      className={cn(
        "font-medium text-custom-black/70",
        pathname === href
          ? company === "bosch"
            ? "text-boschPrimary hover:text-boschPrimary"
            : company === "siemens"
              ? `text-siemensPrimary hover:text-siemensPrimary`
              : company === "samsung"
                ? `text-samsungPrimary hover:text-samsungPrimary`
                : company === "lg"
                  ? `text-lgPrimary hover:text-lgPrimary`
                  : "text-primary hover:text-primary"
          : "transition-all duration-100 ease-in",
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
