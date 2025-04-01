import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import React from "react";

const OurClients = () => {
  const companies = [
    {
      width: 150,
      link: "/companies/bosch.svg",
    },
    {
      width: 150,
      link: "/companies/siemens.svg",
    },
    {
      width: 120,
      link: "/companies/samsung.svg",
    },
    {
      width: 150,
      link: "/companies/lg.svg",
    },
  ];
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-20 md:py-40">
      <h1 className="text-3xl font-semibold md:text-6xl">Companies We Serve</h1>
      <p className="text-center font-medium text-secondary/70 md:text-xl">
        We are your authorized repair specialists for Bosch, Siemens, Samsung, and LG appliances. 
      </p>
      <div className="flex w-full max-w-7xl justify-between overflow-hidden px-3 py-10">
        <Marquee>
          {companies.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-2 py-1"
            >
              <Image
                width={logo.width}
                height={20}
                alt={"company-" + index}
                loading="lazy"
                quality={100}
                className="h-fit"
                src={logo.link}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <Image
        src="/bg/our-clients/arrow.png"
        width={174}
        height={179}
        alt="Arrow"
        loading="lazy"
        className="absolute right-20 top-28 -z-10 size-10 md:size-44"
      />
    </section>
  );
};

export default OurClients;
