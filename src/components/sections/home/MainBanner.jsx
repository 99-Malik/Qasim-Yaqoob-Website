"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import GetInTouchButton from "@/components/header/GetInTouchButton";

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
      <div className="flex flex-col items-center gap-3 bg-white p-10 shadow-xl rounded-2xl">
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
        <div className="flex flex-col gap-1 text-2xl font-medium md:hidden">
          <div>Professional Repairs</div>
          <div className="flex items-center justify-center gap-1 md:gap-2">
            <span className="mt-1">for</span>
            <div className="mt-1 inline-block w-fit -rotate-3 rounded-xl bg-primary px-4 py-1 text-2xl">
              Premium
            </div>{" "}
          </div>
          <span className="mt-1">Home Appliances</span>
        </div>
        <p className="mb-4 mt-3 max-w-2xl text-custom-black/70 md:mt-8 md:text-xl">
          Specialized repair services for Bosch, Siemens, Samsung, and LG
          appliances. Expert solutions for your TVs, washing machines, dryers,
          dishwashers, ovens, fridges, and stoves. Fast, reliable service when
          you need it most.
        </p>
        <div className="flex gap-4 items-center">
          <Link href="tel:+1234567890">
            <GetInTouchButton title="Call Us" />
          </Link>
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <PrimaryButton title="Whatsapp" />
          </Link>
        </div>
      </div>
      <div className="w-full h-full bg-black/50 absolute -z-10"></div>
      <Image
        src="/static/main-banner.jpg"
        quality={100}
        loading="lazy"
        width={2000}
        height={1000}
        alt="main bg"
        className="absolute top-0 h-full w-full object-cover -z-20"
      />
    </motion.section>
  );
};

export default MainBanner;
