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
      <div className="flex flex-col items-center gap-5 bg-gradient-to-br from-white via-white to-primary p-10 shadow-2xl rounded-3xl border-2 border-primary">
        <h2 className="text-sm font-medium text-secondary/70 md:text-xl tracking-wide uppercase">
          Expert Appliance Repair Services
        </h2>
        <div className="hidden max-w-[994px] flex-col gap-3 text-5xl font-extrabold leading-[83px] text-gray-800 md:flex lg:text-6xl">
          <div className="animate-fade-in">Professional Repairs for</div>
          <div className="flex items-start gap-1 md:gap-2">
            <div className="mt-1 inline-block w-fit -rotate-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-2 py-1 text-white shadow-lg md:mt-3 md:-rotate-3 md:rounded-3xl md:px-6 md:py-4">
              Premium
            </div>{" "}
            <span className="mt-2 text-gray-900">Home Appliances</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-2xl font-semibold text-gray-800 md:hidden">
          <div className="animate-fade-in">Professional Repairs</div>
          <div className="flex items-center justify-center gap-1 md:gap-2">
            <span className="mt-1">for</span>
            <div className="mt-1 inline-block w-fit -rotate-3 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-1 text-2xl text-white shadow-lg">
              Premium
            </div>{" "}
          </div>
          <span className="mt-1">Home Appliances</span>
        </div>
        <p className="mb-4 mt-3 max-w-2xl text-gray-700 md:mt-8 md:text-xl leading-relaxed">
          Specialized repair services for Bosch, Siemens, Samsung, and LG
          appliances. Expert solutions for your TVs, washing machines, dryers,
          dishwashers, ovens, fridges, and stoves. Fast, reliable service when
          you need it most.
        </p>
        <div className="flex gap-2 items-center">
          <Link href="tel:+1234567890">
            <GetInTouchButton
              title="Call Us"
              className="text-nowrap"
            />
          </Link>
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <PrimaryButton
              title="Whatsapp"
            />
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
