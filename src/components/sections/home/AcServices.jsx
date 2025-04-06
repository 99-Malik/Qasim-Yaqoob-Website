"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { dialPhone, sendMessage } from "@/lib/data";
import Link from "next/link";

const AcServices = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];

  const servicesList = [
    {
      title: "Professional AC Repair",
      desc: "Specialized repair services for air conditioning units, covering cooling inefficiencies, compressor malfunctions, and thermostat replacements — delivered by certified HVAC experts.",
      image: "/ac-1.png",
    },
    {
      title: "AC Water Leak Repair",
      desc: "Comprehensive air conditioning service including filter replacements, deep cleaning, and full system diagnostics to ensure optimal performance and efficiency.",
      image: "/ac-2.jpg",
    },
    {
      title: "HVAC Repair Services",
      desc: "Expert repair solutions for all major HVAC systems, addressing unusual noises, water leakage, and overall system malfunctions.",
      image: "/ac-3.jpeg",
    },
    {
      title: "AC Duct Cleaning",
      desc: "Thorough cleaning of AC ducts to improve air quality and system efficiency. We remove dust, allergens, and debris.",
      image: "/ac-3.png",
    },
    {
      title: "AC Coil Cleaning",
      desc: "Expert coil cleaning services to improve cooling efficiency, enhance air quality, and reduce energy consumption. Suitable for all types of AC units.",
      image: "/ac-6.webp",
    },
    {
      title: "Air Duct Cleaning",
      desc: "Comprehensive air duct cleaning for all major brands. We remove dust, allergens, and debris to improve indoor air quality.",
      image: "/ac-4.webp",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center px-5 py-20">
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-8">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full flex-col items-center gap-3 text-center md:gap-5"
        >
          <span className="text-lg text-secondary md:text-2xl">
            Our Services
          </span>
          <span className="text-3xl font-medium md:text-5xl">
            Appliance Repair Services
          </span>
          <span className="py-2 text-center text-[#475467] md:text-xl">
            Professional repair services for premium brands including Bosch,
            Siemens, Samsung, and LG.
          </span>
        </motion.div>

        {/* Services List with Animations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="no-scrollbar flex w-full flex-col items-center gap-4 overflow-x-auto p-2 sm:flex-row sm:flex-wrap sm:justify-center"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              className="flex min-h-[300px] w-full cursor-pointer flex-col gap-3 rounded-lg bg-white px-5 pb-14 pt-10 shadow-[0px_0px_4px_0px_#00000030] md:min-w-[350px] md:max-w-[400px]"
            >
              {/* Icon Animation */}
              <div className="flex items-center gap-2">
                <motion.div
                  onClick={dialPhone}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                  className="grid size-12 place-items-center rounded-lg border-[1.33px] border-[#EAECF0] bg-gray-400 shadow-[0px_1px_2px_0px_#1018280D]"
                >
                  <Image
                    quality={100}
                    src="/static/call.svg"
                    alt="Call us"
                    width={28}
                    height={28}
                  />
                </motion.div>
                <motion.div
                  onClick={sendMessage}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                  className="grid size-12 place-items-center rounded-lg border-[1.33px] border-[#EAECF0] bg-green-400 shadow-[0px_1px_2px_0px_#1018280D]"
                >
                  <Image
                    quality={100}
                    src="/static/whatsapp-2.svg"
                    alt="Whatsapp"
                    width={30}
                    height={30}
                  />
                </motion.div>
              </div>

              <Link
                href={pathname + "/" + service.href}
                className="text-nowrap text-xl font-semibold md:text-2xl"
              >
                {service.title}
              </Link>
              <Link
                href={pathname + "/" + service.href}
                className="text-sm text-[#475467] md:text-base"
              >
                {service.desc}
              </Link>
              <Link
                href={pathname + "/" + service.href}
                className="h-64 w-full"
              >
                <Image
                  src={service.image}
                  loading="lazy"
                  width={500}
                  height={300}
                  alt={service.title}
                  quality={100}
                  className="w-ful h-full rounded-lg object-cover"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Arrow */}
        <Image
          src="/bg/our-clients/arrow.png"
          width={174}
          height={179}
          alt="Arrow"
          loading="lazy"
          className="absolute right-0 top-0 -z-10 size-10 md:size-44"
        />
      </div>
    </div>
  );
};

export default AcServices;
