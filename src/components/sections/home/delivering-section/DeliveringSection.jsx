"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import DeliveringStat from "./DeliveringStat";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const company = pathname?.split("/")[2];

  let primaryTextColor = "text-secondary";

  if (company === "lg") {
    primaryTextColor = "text-[#A50034]";
  } else if (company === "samsung") {
    primaryTextColor = "text-[#1428a0]";
  } else if (company === "bosch") {
    primaryTextColor = "text-[#ed1c24]";
  } else if (company === "siemens") {
    primaryTextColor = "text-[#009999]";
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[5.2fr_4.8fr]">
        <div className="flex flex-col gap-5">
          <h2 className={`font-medium ${primaryTextColor}/70 md:text-xl`}>
            Trusted Appliance Repair Experts
          </h2>
          <h1 className="text-2xl font-medium md:text-5xl md:leading-[3.8rem]">
            Specialized Appliance Repair Solutions
          </h1>
          <h2 className="mb-3 text-custom-black/70 md:text-xl">
            We are your trusted repair specialists for all major home appliances. Our certified technicians deliver reliable and efficient repair services, ensuring minimal disruption to your daily routine with quick turnaround times and a commitment to quality workmanship.
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
          <DeliveringStat
            title={<Counter value="100%" />}
            desc="Warranty on all parts and labor for your peace of mind."
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveringSection;
