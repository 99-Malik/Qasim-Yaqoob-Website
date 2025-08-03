"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ title = "", href = "/" }) => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];
  
  let activeColor = "text-primary hover:text-primary";
  
  if (company === "lg") {
    activeColor = "text-[#A50034] hover:text-[#A50034]";
  } else if (company === "samsung") {
    activeColor = "text-[#1428a0] hover:text-[#1428a0]";
  } else if (company === "bosch") {
    activeColor = "text-[#ed1c24] hover:text-[#ed1c24]";
  } else if (company === "siemens") {
    activeColor = "text-[#009999] hover:text-[#009999]";
  }
  
  return (
    <Link
      className={cn(
        "font-medium text-custom-black/70",
        pathname === href
          ? activeColor
          : "transition-all duration-100 ease-in",
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
