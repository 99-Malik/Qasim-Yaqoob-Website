"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ title = "", href = "/" }) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "font-medium text-custom-black/70",
        pathname === href
          ? "text-primary"
          : "transition-all ease-in duration-100 hover:text-primary"
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
