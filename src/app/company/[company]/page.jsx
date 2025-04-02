import TestimonialsCarousel from "@/components/carousels/TestimonialsCarousel";
import DeliveringSection from "@/components/sections/home/delivering-section/DeliveringSection";
import MainBanner from "@/components/sections/home/MainBanner";
import OurServices from "@/components/sections/home/OurServices";
import ProcessSection from "@/components/sections/home/process-section/ProcessSection";
import React from "react";

const CompanyPage = ({ params }) => {
  const company = params.company;
  return (
    <div className="flex w-full flex-col">
      <MainBanner />
      <DeliveringSection />
      <ProcessSection />
      <OurServices />
      <TestimonialsCarousel />
    </div>
  );
};

export default CompanyPage;
