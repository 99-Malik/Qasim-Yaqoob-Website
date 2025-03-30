"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import DeliveringStat from "./DeliveringStat";
import Link from "next/link";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const isDecimal = value.includes(".");

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    const duration = 2000;
    const incrementTime = 50;
    const steps = duration / incrementTime;
    const stepSize = end / steps;

    const timer = setInterval(() => {
      start += stepSize;
      if (start >= end) {
        clearInterval(timer);
        setCount(end.toFixed(isDecimal ? 1 : 0));
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isDecimal]);

  return (
    <motion.span animate={{ opacity: [0, 1] }}>
      {count}
      {value.replace(/[0-9.]+/, "")}
    </motion.span>
  );
};

const DeliveringSection = () => {
  return (
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
          <DeliveringStat
            title={<Counter value="5000+" />}
            desc="Successful repairs completed across all appliance types."
          />
          <Image
            src="/logo/logo-light.png"
            width={168}
            height={168}
            alt="logo"
            loading="lazy"
            className="hidden sm:flex"
            quality={100}
          />
          <DeliveringStat
            title={<Counter value="98%" />}
            desc="First-time fix rate for all appliance repairs."
          />
          <DeliveringStat
            title={
              <div className="item-center flex">
                <Counter value="4.9" />
                <span className="">/</span>
                <Counter value="5.0" />
              </div>
            }
            desc="Customer satisfaction rating from verified reviews."
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveringSection;
