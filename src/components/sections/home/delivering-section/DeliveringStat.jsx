"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const DeliveringStat = ({ title = "", desc = "" }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2 rounded-md px-5 py-7 text-center",
        "cursor-pointer",
      )}
      style={{
        boxShadow: "0px 0px 4px 0px #00000040",
      }}
    >
      <h1 className="text-3xl font-semibold text-secondary md:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h1>
      <p className="max-w-56">{desc}</p>
    </motion.div>
  );
};

export default DeliveringStat;
