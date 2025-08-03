"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import GetInTouchButton from "@/components/header/GetInTouchButton";
import { usePathname } from "next/navigation";
import CallButtons from "@/components/buttons/CallButtons";

const MainBanner = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];

  let primaryGradient = "from-primary to-secondary";
  let brandName = "Premium";

  if (company === "lg") {
    primaryGradient = "from-[#A50034] to-[#8a0029]";
    brandName = "LG";
  } else if (company === "samsung") {
    primaryGradient = "from-[#1428a0] to-[#0f1f7a]";
    brandName = "Samsung";
  } else if (company === "bosch") {
    primaryGradient = "from-[#ed1c24] to-[#c41820]";
    brandName = "Bosch";
  } else if (company === "siemens") {
    primaryGradient = "from-[#009999] to-[#007777]";
    brandName = "Siemens";
  }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-screen relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden px-5 pb-24 pt-40 text-center md:min-h-[90vh] md:gap-5"
    >
      <div className="flex flex-col items-center gap-3 pt-4 text-white">
        <h2 className="text-sm font-medium uppercase tracking-wide md:text-xl">
          Expert Appliance Repair Services
        </h2>
        <div className="hidden max-w-[994px] flex-col gap-3 text-5xl font-extrabold leading-[83px] md:flex lg:text-6xl">
          <div className="animate-fade-in">Professional Repairs for</div>
          <div className="flex items-start gap-1 md:gap-2">
            <div
              className={`mt-1 inline-block w-fit -rotate-2 rounded-lg bg-gradient-to-r ${primaryGradient} px-2 py-1 text-white shadow-lg md:mt-3 md:-rotate-3 md:rounded-3xl md:px-6 md:py-4`}
            >
              {brandName}
            </div>{" "}
            <span className="mt-2">Home Appliances</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-2xl font-semibold md:hidden">
          <div className="animate-fade-in">Professional Repairs</div>
          <div className="flex items-center justify-center gap-1 md:gap-2">
            <span className="mt-1 m-2">for</span>
            <div
              className={`mt-1 inline-block w-fit -rotate-3 rounded-xl bg-gradient-to-r ${primaryGradient} px-4 py-1 text-2xl text-white shadow-lg`}
            >
              {brandName}
            </div>{"  "}
            <span className="mt-1">Appliances</span>
          </div>
         
        </div>
        <p className="mb-4 mt-3 max-w-2xl leading-relaxed md:mt-8 md:text-xl">
          Comprehensive repair solutions for a wide range of household appliances. Our experienced technicians deliver prompt, reliable service with a focus on quality, efficiency, and customer satisfaction.
        </p>
        <CallButtons />
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-black/80"></div>
      <Image
        src="/static/main-banner.jpg"
        quality={100}
        loading="lazy"
        width={2000}
        height={1000}
        alt="main bg"
        className="absolute top-0 -z-20 h-full w-full object-cover"
      />
    </motion.section>
  );
};

export default MainBanner;
