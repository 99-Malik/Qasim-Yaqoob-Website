"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

const PrimaryButton = ({ title, className = "" }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: "0px 5px 15px rgba(0, 30, 60, 0.4)", // Dark blue shadow
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={cn(
        "flex items-center gap-3 rounded-lg bg-primary px-6 py-4 font-montserrat transition-all duration-150 ease-out md:px-16",
        className,
      )}
    >
      <motion.span
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.15 },
        }}
        className="text-white"
      >
        {title}
      </motion.span>
      <motion.div
        animate={{ x: [0, 3, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {arrowRight}
      </motion.div>
    </motion.button>
  );
};

const arrowRight = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.625 8H15.625M15.625 8L8.625 1M15.625 8L8.625 15"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PrimaryButton;
