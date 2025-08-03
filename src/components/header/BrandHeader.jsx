"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown, Wrench, Clock, Shield, Star, CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const BrandHeader = ({ brand }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  let brandName = "UAE";
  let brandLogo = "/logos/default-logo.png";
  let hoverColor = "hover:text-emerald-600";
  let gradient = "from-emerald-600 to-teal-600";
  let brandGradient = "from-emerald-500 to-teal-600";

  if (brand === "lg") {
    brandName = "LG";
    brandLogo = "/lg-logo.webp";
    hoverColor = "hover:text-[#A50034]";
    gradient = "from-[#A50034] to-[#e6004c]";
    brandGradient = "from-[#A50034] to-pink-600";
  } else if (brand === "samsung") {
    brandName = "Samsung";
    brandLogo = "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg";
    hoverColor = "hover:text-[#1428a0]";
    gradient = "from-[#1428a0] to-[#1c51ce]";
    brandGradient = "from-[#1428a0] to-blue-600";
  } else if (brand === "bosch") {
    brandName = "Bosch";
    brandLogo = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Bosch-logo.svg";
    hoverColor = "hover:text-[#e2231a]";
    gradient = "from-[#e2231a] to-[#b51f1a]";
    brandGradient = "from-[#e2231a] to-red-600";
  } else if (brand === "siemens") {
    brandName = "Siemens";
    brandLogo = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Siemens-logo.svg";
    hoverColor = "hover:text-[#009999]";
    gradient = "from-[#009999] to-[#005f5f]";
    brandGradient = "from-[#009999] to-cyan-600";
  }

  const services = [
    { name: "TV & Electronics Repair", href: `/company/${brand}/tv-repair`, icon: "📺", badge: "Popular" },
    { name: "Washing Machine Repair", href: `/company/${brand}/washing-machine-repair`, icon: "🧺", badge: "Fast" },
    { name: "Refrigerator Repair", href: `/company/${brand}/refrigerator-repair`, icon: "❄️", badge: "24/7" },
    { name: "Dishwasher Repair", href: `/company/${brand}/dishwasher-repair`, icon: "🍽️", badge: "Expert" },
    { name: "Oven & Stove Repair", href: `/company/${brand}/oven-repair`, icon: "🔥", badge: "Same Day" },
    { name: "AC & HVAC Repair", href: `/company/${brand}/ac-repair`, icon: "❄️", badge: "Emergency" },
    { name: "Dryer Repair", href: `/company/${brand}/dryer-repair`, icon: "👕", badge: "Warranty" },
    { name: "Microwave Repair", href: `/company/${brand}/microwave-repair`, icon: "📡", badge: "Quick" },
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
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-lg"
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo with enhanced styling */}
          <Link href={`/company/${brand}`} className="flex items-center gap-4 group">
            <motion.div 
              className="relative w-16 h-12"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={brandLogo}
                alt={`${brandName} Logo`}
                fill
                className="object-contain drop-shadow-lg"
              />
            </motion.div>
            <div className="group-hover:transform group-hover:scale-105 transition-transform duration-300">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                {brandName}
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-600">Authorized Service Center</p>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href={`/company/${brand}`}
              className={cn("text-gray-700 font-medium transition-all duration-300 relative group", hoverColor)}
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            
            {/* Enhanced Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={cn("flex items-center gap-2 text-gray-700 font-medium transition-all duration-300 relative group", hoverColor)}
              >
                <span className="relative">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-[500px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={service.href}
                            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 group border border-transparent hover:border-gray-200"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                                {service.name}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs px-2 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium">
                                  {service.badge}
                                </span>
                                <CheckCircle className="w-3 h-3 text-green-500" />
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>Same Day Service</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-500" />
                          <span>Warranty Included</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href={`/company/${brand}/about`}
              className={cn("text-gray-700 font-medium transition-all duration-300 relative group", hoverColor)}
            >
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            <Link
              href={`/company/${brand}/contact`}
              className={cn("text-gray-700 font-medium transition-all duration-300 relative group", hoverColor)}
            >
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className={cn("relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group", `bg-gradient-to-r ${gradient}`)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Call Now</span>
              <Sparkles className="w-4 h-4 relative z-10 animate-pulse" />
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
          >
            <div className="px-4 py-8 space-y-6">
              <Link
                href={`/company/${brand}`}
                className="flex items-center justify-between text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 p-3 rounded-xl hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Home</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              </Link>
              
              <div>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 p-3 rounded-xl hover:bg-gray-50"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-3"
                    >
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={service.href}
                            className="flex items-center gap-4 p-3 rounded-xl text-gray-600 hover:text-emerald-600 hover:bg-gray-50 transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-2xl">{service.icon}</span>
                            <div className="flex-1">
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500">{service.badge}</div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href={`/company/${brand}/about`}
                className="flex items-center justify-between text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 p-3 rounded-xl hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>About</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              </Link>
              
              <Link
                href={`/company/${brand}/contact`}
                className="flex items-center justify-between text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 p-3 rounded-xl hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Contact</span>
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              </Link>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCall}
                className={cn("w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300", `bg-gradient-to-r ${gradient}`)}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default BrandHeader; 