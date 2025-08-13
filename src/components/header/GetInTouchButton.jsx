"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const GetInTouchButton = ({ className, onClick }) => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];
  const isCompanyRoute =
    pathname.startsWith("/company/") &&
    company &&
    company.toLowerCase() !== "ac";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`${className} px-4 py-2 bg-[#FB923C] hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md`}
    >
      <Phone className="w-4 h-4" />
      Get In Touch
    </motion.button>
  );
};

export default GetInTouchButton;
