"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLink = ({ title, href, company }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-emerald-600",
        isActive 
          ? "text-emerald-600 font-semibold" 
          : "text-gray-700 hover:text-emerald-600"
      )}
    >
      {title}
      
      {/* Active Indicator */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"></div>
      )}
    </Link>
  );
};

export default NavLink;
