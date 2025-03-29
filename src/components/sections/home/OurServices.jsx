"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const OurServices = () => {
  const servicesList = [
    {
      title: "Web Development",
      desc: "Design and create customized websites for businesses, according to your individual needs in WordPress",
    },
    {
      title: "Social Media Branding",
      desc: "Social media branding creates consistent identity, messaging, and engagement across platforms.",
    },
    {
      title: "Performance Marketing",
      desc: "Drive measurable results through data-driven performance marketing campaigns.",
    },
    {
      title: "Mobile App Development",
      desc: "Developing innovative and high-performing mobile applications for iOS and Android.",
    },
    {
      title: "Graphic Designing",
      desc: "Graphic design conveys messages visually using images, typography, and creative elements effectively.",
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
          <span className="text-lg text-secondary md:text-2xl">Services</span>
          <span className="text-3xl font-medium md:text-5xl">Our Services</span>
          <span className="py-2 text-center text-[#475467] md:text-xl">
            We bring a breadth of experience and industry knowledge to help you
            succeed.
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
          className="no-scrollbar flex w-full flex-col items-center gap-4 overflow-x-auto p-2 sm:flex-row"
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
              className="flex min-h-[300px] w-full cursor-pointer flex-col gap-3 rounded-lg bg-white px-10 pb-14 pt-10 shadow-[0px_0px_4px_0px_#00000030] md:min-w-[500px]"
            >
              {/* Icon Animation */}
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
                className="grid size-16 place-items-center rounded-lg border-[1.33px] border-[#EAECF0] shadow-[0px_1px_2px_0px_#1018280D]"
              >
                <Image
                  src={`/services-icons/${index + 1}.png`}
                  width={32}
                  height={32}
                  alt="image"
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

export default OurServices;
