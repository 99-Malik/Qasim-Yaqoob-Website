"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <p className="text-center text-lg font-medium text-secondary md:text-xl">
          Our Process
        </p>
        <h2 className="mt-2 text-center text-3xl font-medium md:text-4xl lg:text-5xl">
          How We Work
        </h2>
      </div>
      <div ref={ref} className="relative mx-auto flex max-w-7xl flex-col pb-20">
        <div className="absolute z-10 flex size-10 items-center justify-center rounded-full border-2 border-primary bg-white left-[calc(50%-1px)]">
          <div className="size-7 rounded-full bg-primary"></div>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="absolute hidden md:flex z-10 size-12 items-center justify-center left-[calc(50%-21.5px)]">
              <div className="size-6 rotate-45 bg-[#17508F]" />
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute top-0 w-[5px] overflow-hidden bg-custom-black/5 left-1/2"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[5px] rounded-full bg-[#17508F]"
          />
        </div>
      </div>
    </div>
  );
};
