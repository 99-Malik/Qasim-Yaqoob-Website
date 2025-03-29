"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MainBanner = () => {
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
      className="max-w-screen relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden px-5 py-24 text-center md:min-h-[90vh] md:gap-5"
    >
      <h2 className="text-sm font-medium text-secondary/70 md:text-xl">
        Expert Appliance Repair Services
      </h2>
      <div className="hidden max-w-[994px] flex-col gap-3 text-5xl font-medium leading-[83px] md:flex lg:text-6xl">
        <div>Professional Repairs for</div>
        <div className="flex items-start gap-1 md:gap-2">
          <div className="mt-1 inline-block w-fit -rotate-2 rounded-lg bg-primary px-2 py-1 text-white md:mt-3 md:-rotate-3 md:rounded-3xl md:px-6 md:py-4">
            Premium
          </div>{" "}
          <span className="mt-2">Home Appliances</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-3xl font-medium md:hidden">
        <div>Professional Repairs</div>
        <div className="flex items-start gap-1 md:gap-2">
          <span className="mt-1">for</span>
          <div className="mt-1 inline-block w-fit -rotate-3 rounded-xl bg-primary px-4 py-1 text-2xl">
            Premium
          </div>{" "}
        </div>
        <span className="mt-1">Home Appliances</span>
      </div>
      <p className="mb-4 mt-3 max-w-5xl text-custom-black/70 md:mt-8 md:text-xl">
        Specialized repair services for Bosch, Siemens, Samsung, and LG appliances. 
        Expert solutions for your TVs, washing machines, dryers, dishwashers, 
        ovens, fridges, and stoves. Fast, reliable service when you need it most.
      </p>
      <PrimaryButton title="Book a Repair" />
      <div className="absolute inset-0 -z-10 flex h-full w-full items-center justify-center px-10 opacity-15">
        <Image
          src="/bg/main-mid-bg.png"
          quality={100}
          loading="lazy"
          width={800}
          height={462}
          alt="main bg"
          className="absolute"
        />
      </div>
      <Image
        src="/bg/main-arrow-bg.png"
        quality={100}
        loading="lazy"
        width={180}
        height={180}
        alt="arrow"
        className="absolute -bottom-5 left-0 -z-10 size-24 md:bottom-0 md:size-44"
      />
    </motion.section>
  );
};

export default MainBanner;
