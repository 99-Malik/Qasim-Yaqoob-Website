import TestimonialsCarousel from "@/components/carousels/TestimonialsCarousel";
import ContactUsSection from "@/components/sections/home/ContactUsSection";
import DeliveringSection from "@/components/sections/home/delivering-section/DeliveringSection";
import MainBanner from "@/components/sections/home/MainBanner";
import OurClients from "@/components/sections/home/OurClients";
import OurPortfolio from "@/components/sections/home/OurPortfolio";
import OurServices from "@/components/sections/home/OurServices";
import ProcessSection from "@/components/sections/home/process-section/ProcessSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <MainBanner />
      <OurClients />
      <DeliveringSection />
      <ProcessSection />
      <OurServices />
      <TestimonialsCarousel />
    </div>
  );
}