"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const GetInTouchButton = ({ className = "" }) => {
  const router = useRouter();
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "flex items-center justify-center gap-3 rounded-md border-[0.6px] border-secondary bg-white px-5 py-3 transition-all hover:border",
        className,
      )}
      onClick={() => router.push("/contact")}
    >
      {phoneIcon}
      <span className="font-medium text-secondary">Get in Touch</span>
    </motion.button>
  );
};

const phoneIcon = (
  <motion.svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.1, ease: "easeOut" }}
  >
    <path
      d="M21.3749 16.42V19.42C21.3761 19.6985 21.319 19.9741 21.2074 20.2293C21.0959 20.4845 20.9322 20.7136 20.727 20.9018C20.5218 21.0901 20.2795 21.2335 20.0157 21.3227C19.7519 21.4119 19.4723 21.445 19.1949 21.42C16.1178 21.0856 13.1619 20.0341 10.5649 18.35C8.14876 16.8146 6.10027 14.7661 4.56493 12.35C2.87491 9.74118 1.82318 6.77097 1.49493 3.67997C1.46994 3.40344 1.50281 3.12474 1.59143 2.8616C1.68006 2.59846 1.8225 2.35666 2.0097 2.1516C2.19689 1.94653 2.42474 1.78268 2.67872 1.6705C2.93271 1.55831 3.20727 1.50024 3.48493 1.49997H6.48493C6.97024 1.4952 7.44072 1.66705 7.80869 1.98351C8.17666 2.29996 8.41701 2.73942 8.48493 3.21997C8.61156 4.18004 8.84638 5.1227 9.18493 6.02997C9.31948 6.3879 9.3486 6.77689 9.26884 7.15086C9.18908 7.52482 9.0038 7.86809 8.73493 8.13998L7.46493 9.40997C8.88849 11.9135 10.9614 13.9864 13.4649 15.41L14.7349 14.14C15.0068 13.8711 15.3501 13.6858 15.7241 13.6061C16.098 13.5263 16.487 13.5554 16.8449 13.69C17.7522 14.0285 18.6949 14.2634 19.6549 14.39C20.1407 14.4585 20.5843 14.7032 20.9015 15.0775C21.2186 15.4518 21.3871 15.9296 21.3749 16.42Z"
      stroke="#0F2C4A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default GetInTouchButton;
