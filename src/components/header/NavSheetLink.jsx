"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavSheetLink = ({ title = "", href = "/" }) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "flex w-full items-center justify-between font-medium text-custom-black/70",
        pathname === href
          ? "text-primary"
          : "transition-all duration-100 ease-in hover:text-primary",
      )}
      href={href}
    >
      {title}
      <ChevronRight strokeWidth={1.5} className="size-6" />
    </Link>
  );
};

export default NavSheetLink;
