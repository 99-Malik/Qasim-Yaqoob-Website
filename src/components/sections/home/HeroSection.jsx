"use client";

import { Button } from "@/components/ui/button";
import { Phone, Sparkles, Shield, Clock, Star } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/common";
import Link from "next/link";
import { phoneNumber } from "@/lib/company";

const HeroSection = ({ brand }) => {
  let bgGradient = "from-emerald-900 via-teal-900 to-cyan-900";
  let textGradient = "from-emerald-400 to-teal-400";
  let buttonGradient = "from-emerald-500 to-teal-600";
  let brandName = "UAE";

  if (brand === "lg") {
    bgGradient = "from-[#A50034] via-[#5a0022] to-black";
    textGradient = "from-[#A50034] to-pink-500";
    buttonGradient = "from-[#A50034] to-pink-700";
    brandName = "LG";
  } else if (brand === "samsung") {
    bgGradient = "from-[#1428a0] via-[#1b1f2f] to-black";
    textGradient = "from-[#1428a0] to-blue-400";
    buttonGradient = "from-[#1428a0] to-blue-700";
    brandName = "Samsung";
  } else if (brand === "bosch") {
    bgGradient = "from-[#ed1c24] via-[#8a0c14] to-black";
    textGradient = "from-[#ed1c24] to-red-600";
    buttonGradient = "from-[#ed1c24] to-red-800";
    brandName = "Bosch";
  } else if (brand === "siemens") {
    bgGradient = "from-[#009999] via-[#004f4f] to-black";
    textGradient = "from-[#009999] to-cyan-300";
    buttonGradient = "from-[#009999] to-cyan-700";
    brandName = "Siemens";
  }

  return (
    <section className={`relative min-h-screen overflow-hidden bg-gradient-to-br ${bgGradient}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/20">
          <Sparkles className="h-4 w-4" />
          <span>Expert Technicians</span>
          <Star className="h-4 w-4" />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block mb-2">Home Appliance</span>
          <span className="block mb-4">Repair</span>
          <span className={`block bg-gradient-to-r ${textGradient} bg-clip-text text-transparent animate-pulse`}>
            {brandName}
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-xl text-gray-200 sm:text-2xl md:mt-10 md:max-w-4xl leading-relaxed">
          Same-Day Expert Technicians at Your Doorstep — Washing Machine, Refrigerator, Dishwasher, Gas Cooker, Oven & More.
        </p>

        {/* Features */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-green-400" />
            <span>Same Day Service</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-400" />
            <span>Warranty Included</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>5-Star Rated</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link href={`tel:${phoneNumber}`} className="block group">
            <Button
              className={`relative w-full rounded-full bg-gradient-to-r ${buttonGradient} px-10 py-4 text-lg font-semibold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 sm:w-auto overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">Call Now</span>
            </Button>
          </Link>
          <Link href={`https://wa.me/${phoneNumber}`} className="block group">
            <Button
              className="relative w-full rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-10 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 sm:w-auto overflow-hidden"
              variant="outline"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <WhatsappIcon className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">WhatsApp</span>
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>24/7 Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Free Diagnosis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
