"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processData } from "@/lib/data";
import { usePathname } from "next/navigation";

const ProcessSection = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];

  const primaryBgColor =
    company === "bosch"
      ? "bg-boschPrimary"
      : company === "siemens"
      ? "bg-siemensPrimary"
      : company === "samsung"
      ? "bg-samsungPrimary"
      : company === "lg"
      ? "bg-lgPrimary"
      : "bg-primary";

  const primaryTextColor =
    company === "bosch"
      ? "text-boschPrimary"
      : company === "siemens"
      ? "text-siemensPrimary"
      : company === "samsung"
      ? "text-samsungPrimary"
      : company === "lg"
      ? "text-lgPrimary"
      : "text-primary";

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Start when section enters, end when it leaves
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["-10%", "110%"]);

  return (
    <div
      ref={sectionRef}
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="relative flex w-full max-w-7xl flex-col gap-8 px-6 pb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <p className={`text-center text-lg font-medium ${primaryTextColor}/70 md:text-xl`}>
            Our Process
          </p>
          <h2 className={`text-center text-3xl font-semibold md:text-4xl lg:text-5xl ${primaryTextColor}`}>
            How We Work
          </h2>
        </motion.div>

        <Image
          src="/bg/main-arrow-bg.png"
          quality={100}
          loading="lazy"
          width={450}
          height={450}
          alt="arrow"
          className="absolute -bottom-5 left-0 -z-10 hidden md:bottom-0 md:flex md:size-72"
        />

        {/* Process Line */}
        <div className="relative flex w-full flex-col gap-20">
          <div className="absolute left-[calc(50%-2px)] top-9 mx-auto h-[calc(100%-36px)] w-1 overflow-hidden bg-gray-200">
            {/* Scroll-animated filling */}
            <motion.div
              style={{ height: fillHeight }}
              className={`w-full ${primaryBgColor}`}
            />
          </div>

          {/* Top Dot */}
          <div className={`z-10 mx-auto flex size-[39px] items-center justify-center rounded-full border-[3px] ${primaryBgColor} bg-white`}>
            <div className={`size-[27px] rounded-full ${primaryBgColor}`}></div>
          </div>

          {/* Process Steps */}
          <div className="flex w-full flex-col gap-10 md:gap-5">
            {processData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="relative flex w-full flex-col"
              >
                <div className={`absolute left-[calc(50%-18px)] top-[calc(50%-18px)] size-9 rotate-45 ${primaryBgColor}`}></div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className={cn(
                    "z-10 flex max-w-sm flex-col gap-2 rounded-lg bg-white p-6 md:max-w-md lg:max-w-lg",
                    index % 2 === 0 ? "self-start" : "self-end",
                  )}
                  style={{
                    boxShadow: " 0px 0px 4px 0px #00000030",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="rounded-lg border border-[#EAECF0] p-3"
                      style={{
                        boxShadow: "0px 1px 2px 0px #1018280D",
                      }}
                    >
                      {item.icon}
                    </div>
                    <span className={`text-xl font-semibold ${primaryTextColor}`}>
                      {index + 1}. {item.title}
                    </span>
                  </div>
                  <span className="text-">{item.desc}</span>
                  <Image
                    src={item.image}
                    loading="lazy"
                    width={500}
                    height={300}
                    alt="process image"
                    quality={100}
                    className="rounded-lg"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Dot */}
          <div className={`z-10 mx-auto flex size-[34px] items-center justify-center rounded-full ${primaryBgColor}`}></div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
