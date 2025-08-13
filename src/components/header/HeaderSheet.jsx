"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu, X, Clock, Shield, Star, Sparkles } from "lucide-react";
import { headerLinks, sendMessage } from "@/lib/data";
import NavSheetLink from "./NavSheetLink";
import GetInTouchButton from "./GetInTouchButton";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const HeaderSheet = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];
  const isCompanyRoute = pathname.startsWith("/company/") && company && company.toLowerCase() !== "ac";

  const brandColors = {
    lg: "text-[#a50034]",
    samsung: "text-[#1428a0]",
    bosch: "text-[#ec111a]",
    siemens: "text-[#009999]",
  };

  const brandTextColor = isCompanyRoute && brandColors[company?.toLowerCase()] || "text-gray-900";

  const repairServices = [
    { name: "TV Repair", href: "/tv-repair", icon: "📺" },
    { name: "Washing Machine", href: "/washing-machine-repair", icon: "🧺" },
    { name: "Refrigerator", href: "/refrigerator-repair", icon: "❄️" },
    { name: "Dishwasher", href: "/dishwasher-repair", icon: "🍽️" },
    { name: "Oven & Stove", href: "/oven-repair", icon: "🔥" },
    { name: "Dryer", href: "/dryer-repair", icon: "👕" },
    { name: "Microwave", href: "/microwave-repair", icon: "📡" },
    { name: "AC & HVAC", href: "/ac-repair", icon: "❄️" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-sm bg-white flex flex-col">
        <SheetHeader className="border-b border-gray-200 pb-4 flex-shrink-0">
          <SheetTitle className="flex items-center justify-between py-4">
            <SheetClose asChild>
              <Link href="/" className="flex items-center gap-2">
                <span className={`text-xl font-bold ${brandTextColor}`}>
                  {isCompanyRoute ? "AUTHORIZED REPAIRS" : "Emirates Service Center"}
                </span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">
          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">5-Star Service</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Navigation</h3>
            {headerLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <NavSheetLink 
                  title={link.title} 
                  href={isCompanyRoute ? `/company/${company}${link.href}` : link.href} 
                />
              </motion.div>
            ))}
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Repair Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {repairServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <SheetClose asChild>
                    <Link
                      href={service.href}
                      className="flex flex-row sm:flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                    >
                      <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-200">
                        {service.icon}
                      </span>
                      <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                        {service.name}
                      </span>
                    </Link>
                  </SheetClose>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Warranty Included</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Additional Services</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Free Diagnosis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Licensed Technicians</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Emergency Repairs</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Service Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((area, index) => (
                <div key={index} className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2 text-center">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 border-t border-gray-200 p-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GetInTouchButton onClick={sendMessage} className="w-full" />
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSheet;
