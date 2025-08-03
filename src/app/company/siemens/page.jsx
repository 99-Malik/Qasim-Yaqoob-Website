"use client";

import HeroSection from "@/components/sections/home/HeroSection";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import StatsSection from "@/components/sections/home/StatsSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CTASection from "@/components/sections/home/CTASection";

export default function SiemensHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <HeroSection brand="siemens" />
      <FeaturesSection brand="siemens" />
      <ServicesGrid brand="siemens" />
      <StatsSection brand="siemens" />
      <TestimonialsSection brand="siemens" />
      <CTASection brand="siemens" />
    </div>
  );
} 