"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const OurServices = () => {
  const pathname = usePathname();
  const servicesList = [
    {
      title: "TV Repair",
      desc: "Expert repair services for Samsung and LG TVs, including screen repairs, power issues, smart TV troubleshooting, and circuit board repairs.",
      image: "/services/tv-repair.jpg",
      href: "/tv-repair",
    },
    {
      title: "Washing Machine Repair",
      desc: "Repair solutions for Bosch, Siemens, Samsung, and LG washing machines. From drum problems to electronic faults, we fix it all.",
      image: "/services/washing-machine-repair.webp",
      href: "/washing-machine-repair",
    },
    {
      title: "Dryer Repair",
      desc: "Professional dryer repair services for all major brands. We handle heating issues, motor repairs, belt replacements, and sensor problems.",
      image: "/services/dryer-repair.jpg",
      href: "/dryer-repair",
    },
    {
      title: "Dishwasher Repair",
      desc: "Specialized repairs for Bosch, Siemens, Samsung, and LG dishwashers. We fix water leaks, drainage issues, and cleaning system problems.",
      image: "/services/dishwasher-repair.jpg",
      href: "/dishwasher-repair",
    },
    {
      title: "Oven Repair",
      desc: "Complete oven repair services including temperature control, heating element replacement, door repairs, and electronic control fixes.",
      image: "/services/oven-repair.jpg",
      href: "/oven-repair",
    },
    {
      title: "Refrigerator Repair",
      desc: "Expert refrigerator repairs covering cooling systems, compressor issues, ice maker repairs, and temperature control problems.",
      image: "/services/fridge-repair.png",
      href: "/refrigerator-repair",
    },
    {
      title: "Stove/Cooker Repair",
      desc: "Professional repair services for electric and gas stoves. We handle burner repairs, ignition problems, and control panel issues.",
      image: "/services/stove-repair.avif",
      href: "/stove-repair",
    },
    {
      title: "AC Repair",
      desc: "Expert AC repair services for all major brands. We fix cooling issues, compressor problems, and thermostat malfunctions.",
      image: "/services/ac-repair.webp",
      href: "/ac-repair",
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
            <motion.a
              href={pathname + "/" + service.href}
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
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
                className="grid size-16 place-items-center rounded-lg border-[1.33px] border-[#EAECF0] shadow-[0px_1px_2px_0px_#1018280D]"
              >
                <Image
                  src={`/services-icons/${index == 0 ? 7 : index}.png`}
                  width={32}
                  height={32}
                  alt={service.title}
                  loading="lazy"
                  quality={100}
                />
              </motion.div>

              <span className="text-nowrap text-xl font-semibold md:text-2xl">
                {service.title}
              </span>
              <span className="text-sm text-[#475467] md:text-base">
                {service.desc}
              </span>
              <div className="h-64 w-full">
                <Image
                  src={service.image}
                  loading="lazy"
                  width={500}
                  height={300}
                  alt={service.title}
                  quality={100}
                  className="w-ful h-full rounded-lg object-cover"
                />
              </div>
            </motion.a>
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

export default OurServices;
