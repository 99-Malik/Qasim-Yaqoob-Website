import AboutMain from "@/components/sections/about/AboutMain";
import TransformingSection from "@/components/sections/about/TransformingSection";
import DeliveringSection from "@/components/sections/home/delivering-section/DeliveringSection";
import ProcessSection from "@/components/sections/home/process-section/ProcessSection";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col">
      <AboutMain />
      <DeliveringSection />
      <TransformingSection />
      <ProcessSection />
    </div>
  );
};

export default AboutPage;
