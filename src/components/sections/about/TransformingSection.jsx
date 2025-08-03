"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const TransformingSection = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];

  let primaryBgColor = "bg-primary";
  let primaryTextColor = "text-primary";

  if (company === "lg") {
    primaryBgColor = "bg-[#A50034]";
    primaryTextColor = "text-[#A50034]";
  } else if (company === "samsung") {
    primaryBgColor = "bg-[#1428a0]";
    primaryTextColor = "text-[#1428a0]";
  } else if (company === "bosch") {
    primaryBgColor = "bg-[#ed1c24]";
    primaryTextColor = "text-[#ed1c24]";
  } else if (company === "siemens") {
    primaryBgColor = "bg-[#009999]";
    primaryTextColor = "text-[#009999]";
  }

  return (
    <div className="flex w-full flex-col items-center justify-center px-5 py-32">
      <div className="grid w-full max-w-7xl gap-8 md:grid-cols-2">
        <div className="flex w-full flex-col gap-2">
          <span className={`text-secondary ${primaryTextColor}`}>
            Expert Appliance Repair Services
          </span>
          <h1
            className={`text-3xl font-medium leading-snug ${primaryTextColor}`}
          >
            Professional Repairs for Premium Home Appliances
          </h1>
          <span className="py-3 text-lg text-custom-black/70">
            We specialize in repairing high-end appliances from leading brands
            including Bosch, Siemens, Samsung, and LG. Our certified technicians
            are equipped with advanced diagnostic tools and genuine parts to
            ensure your appliances receive the highest quality repairs.
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="py-3 text-lg text-custom-black/70">
            From TVs and washing machines to refrigerators and ovens, we handle
            all major household appliances with expertise and care. Our
            commitment to excellence and customer satisfaction makes us the
            trusted choice for appliance repairs in your area.
          </span>
          <div className="relative flex h-full w-full items-center justify-center py-14">
            <Image
              src="/bg/transforming-bg.png"
              width={350}
              height={250}
              alt="appliance repair background"
              loading="lazy"
              className="absolute -z-10 md:hidden"
            />
            <Image
              src="/bg/transforming-bg-2.png"
              width={723}
              height={465}
              alt="appliance repair background"
              loading="lazy"
              className="absolute -z-10 hidden md:flex"
            />
            <div className="flex flex-col gap-y-7">
              <div className="flex items-center gap-0.5">
                <span
                  className={`-rotate-12 text-nowrap rounded-full ${primaryBgColor} px-5 py-2 text-white`}
                >
                  Pro Experts
                </span>
                <span
                  className={`rotate-6 text-nowrap rounded-full ${primaryBgColor} px-5 py-2 text-white`}
                >
                  Sameday Service
                </span>
              </div>
              <div className="flex items-center gap-0.5">
                <span
                  className={`rotate-6 text-nowrap rounded-full ${primaryBgColor} px-5 py-2 text-white`}
                >
                  Quality Parts
                </span>
                <span
                  className={`-rotate-6 text-nowrap rounded-full ${primaryBgColor} px-5 py-2 text-white`}
                >
                  Warranty Backed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformingSection;
