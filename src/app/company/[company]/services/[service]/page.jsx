import AboutMain from "@/components/sections/about/AboutMain";
import TransformingSection from "@/components/sections/about/TransformingSection";
import DeliveringSection from "@/components/sections/home/delivering-section/DeliveringSection";
import ProcessSection from "@/components/sections/home/process-section/ProcessSection";

const ServiceCompanyPage = ({ params }) => {
  const service = params.service;
  const unslugify = (str) => {
    return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };
  const serviceName = unslugify(service);
  const serviceDesc = `We are your authorized repair specialists for ${serviceName} appliances. Our certified technicians provide reliable, efficient repairs for all your home appliances, ensuring minimal disruption to your daily life with quick turnaround times and quality service.`;
  return (
    <div className="flex w-full flex-col">
      <AboutMain title={serviceName} desc={serviceDesc} />
      <DeliveringSection />
      <TransformingSection />
      <ProcessSection />
    </div>
  );
};

export default ServiceCompanyPage;
