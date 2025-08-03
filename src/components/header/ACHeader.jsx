"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, Wrench, Home, Clock, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ACHeader = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const services = [
    { name: "TV & Electronics", href: "/tv-repair", icon: "📺" },
    { name: "Washing Machine", href: "/washing-machine-repair", icon: "🧺" },
    { name: "Refrigerator", href: "/refrigerator-repair", icon: "❄️" },
    { name: "Dishwasher", href: "/dishwasher-repair", icon: "🍽️" },
    { name: "Oven & Stove", href: "/oven-repair", icon: "🔥" },
    { name: "AC & HVAC", href: "/ac-repair", icon: "❄️" },
    { name: "Dryer", href: "/dryer-repair", icon: "👕" },
    { name: "Microwave", href: "/microwave-repair", icon: "📡" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+971562397004";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg sm:text-xl text-gray-900">Quick Fix Pro</div>
                <div className="text-xs sm:text-sm text-gray-600">Home Appliance Repair</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          <span className="text-2xl">{service.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                              {service.name}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-teal-800 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-3 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="font-medium text-gray-900 mb-3">Services</div>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="block py-3 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                href="/contact"
                className="block py-3 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  handleCall();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full font-semibold hover:from-emerald-700 hover:to-teal-800 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default ACHeader;
