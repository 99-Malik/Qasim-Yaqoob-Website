import PrimaryButton from "@/components/buttons/PrimaryButton";
import AboutMain from "@/components/sections/about/AboutMain";
import TransformingSection from "@/components/sections/about/TransformingSection";
import DeliveringSection from "@/components/sections/home/delivering-section/DeliveringSection";
import ProcessSection from "@/components/sections/home/process-section/ProcessSection";
import Image from "next/image";
import Link from "next/link";

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
      {service == "ac-repair" && (
        <div className="flex w-full max-w-7xl flex-col items-center gap-5 self-center px-5 py-20 md:flex-row">
          <Image
            src="/static/ac2.jpg"
            className="w-full min-w-[300px] rounded-lg shadow"
            width={600}
            height={500}
            alt="ac"
          />
          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-secondary/70 md:text-xl">
              Trusted AC Repair Experts
            </h2>
            <h1 className="text-2xl font-medium md:text-5xl md:leading-[3.8rem]">
              AC Repair Services in Your Area
            </h1>
            <h2 className="mb-3 text-custom-black/70 md:text-xl">
              We are your authorized repair specialists for AC appliances. Our
              certified technicians provide reliable, efficient repairs for all
              your home appliances, ensuring minimal disruption to your daily
              life with quick turnaround times and quality service.
            </h2>
            <Link href="/contact">
              <PrimaryButton title="Schedule Service" className="w-fit" />
            </Link>
          </div>
        </div>
      )}
      <div className="flex w-full flex-col items-center">
        <div className="grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[5.2fr_4.8fr]">
          <div className="flex flex-col gap-5">
            <h2 className="font-medium text-secondary/70 md:text-xl">
              Trusted Appliance Repair Experts
            </h2>
            <h1 className="text-2xl font-medium md:text-5xl md:leading-[3.8rem]">
              Professional Repairs for Premium Brands
            </h1>
            <h2 className="mb-3 text-custom-black/70 md:text-xl">
              We are your authorized repair specialists for Bosch, Siemens,
              Samsung, and LG appliances. Our certified technicians provide
              reliable, efficient repairs for all your home appliances, ensuring
              minimal disruption to your daily life with quick turnaround times
              and quality service.
            </h2>
            <Link href="/contact">
              <PrimaryButton title="Schedule Service" className="w-fit" />
            </Link>
          </div>
          <div className="grid max-w-xl place-items-center gap-5 sm:grid-cols-2">
          <Image
            src="/static/ac3.jpg"
            className="w-full rounded-lg shadow"
            width={600}
            height={500}
            alt="ac"
          />
          <Image
            src="/static/ac4.jpg"
            className="w-full rounded-lg shadow"
            width={600}
            height={500}
            alt="ac"
          />
          <Image
            src="/static/ac5.jpg"
            className="w-full rounded-lg shadow"
            width={600}
            height={500}
            alt="ac"
          />
          <Image
            src="/static/ac6.jpg"
            className="w-full rounded-lg shadow"
            width={600}
            height={500}
            alt="ac"
          />
          </div>
        </div>
      </div>
      <TransformingSection />
      <ProcessSection />
    </div>
  );
};

export default ServiceCompanyPage;
