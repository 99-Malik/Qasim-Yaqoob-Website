"use client";

import HeroSection from "@/components/sections/home/HeroSection";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import StatsSection from "@/components/sections/home/StatsSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CTASection from "@/components/sections/home/CTASection";

export default function BoschHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <HeroSection brand="bosch" />
      <FeaturesSection brand="bosch" />
      <ServicesGrid brand="bosch" />
      <StatsSection brand="bosch" />
      <TestimonialsSection brand="bosch" />
      <CTASection brand="bosch" />
    </div>
  );
} 