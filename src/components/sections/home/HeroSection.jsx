"use client";

import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock, Wrench, Award } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/common";
import Link from "next/link";
import { phoneNumber } from "@/lib/company";

const HeroSection = ({ brand }) => {
  const brandConfig = {
    lg: {
      name: "LG",
    bgImage: "/washing-machine-repair.jpg",
      accent: "text-[#a50034]",
      button: "bg-[#a50034]",
      icon: "text-[#a50034]",
    },
    samsung: {
      name: "Samsung",
      bgImage: "/washing-machine-repair.jpg",
      accent: "text-[#1428a0]",
      button: "bg-[#1428a0]",
      icon: "text-[#1428a0]",
    },
    bosch: {
      name: "Bosch",
      bgImage: "/washing-machine-repair.jpg",
      accent: "text-[#ed0007]",
      button: "bg-[#ed0007]",
      icon: "text-[#ed0007]",
    },
    siemens: {
      name: "Siemens",
   bgImage: "/washing-machine-repair.jpg",
      accent: "text-[#00a4b4]",
      button: "bg-[#00a4b4]",
      icon: "text-[#00a4b4]",
    },
    default: {
      name: "UAE",
   bgImage: "/washing-machine-repair.jpg",
      accent: "text-orange-500",
      button: "bg-orange-600 hover:bg-orange-700",
      icon: "text-orange-500",
    },
  };

  const { name, bgImage, accent, button, icon } =
    brandConfig[brand?.toLowerCase()] || brandConfig.default;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Subtle Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium border border-white/20">
          <ShieldCheck className={`w-4 h-4 ${icon}`} />
          Trusted Appliance Care
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Reliable <span className={`${accent}`}>{name}</span> Appliance Repairs
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200">
          Certified technicians delivering same-day repair service with warranty-backed solutions
          across UAE.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href={`tel:${phoneNumber}`} className="flex-1 sm:flex-none">
            <Button
              className={`w-full sm:w-auto ${button} text-white rounded-full px-6 py-3 font-semibold shadow-md hover:shadow-lg`}
            >
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </Button>
          </Link>
          <Link href={`https://wa.me/${phoneNumber}`} className="flex-1 sm:flex-none">
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-full px-6 py-3 font-semibold border-white/30 bg-white/10 hover:bg-white/20 text-white"
            >
              <WhatsappIcon className="w-5 h-5 mr-2 text-green-400" /> WhatsApp
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm font-medium">
          <div className="flex flex-col items-center">
            <Clock className={`w-6 h-6 mb-2 ${icon}`} />
            Same-Day Service
          </div>
          <div className="flex flex-col items-center">
            <Wrench className={`w-6 h-6 mb-2 ${icon}`} />
            Certified Techs
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className={`w-6 h-6 mb-2 ${icon}`} />
            90-Day Warranty
          </div>
          <div className="flex flex-col items-center">
            <Award className={`w-6 h-6 mb-2 ${icon}`} />
            Genuine Parts
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
