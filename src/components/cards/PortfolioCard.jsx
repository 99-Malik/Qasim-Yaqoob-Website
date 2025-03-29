"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ project, index }) => {
  return (
    <motion.div
      className={`grid w-full gap-3 rounded-lg p-3.5 shadow-[0px_0px_4px_0px_#00000040] md:grid-cols-2 md:gap-7 md:rounded-2xl md:p-5 ${
        index % 2 === 0 ? "" : "md:[direction:rtl]"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Static Image (No Animation) */}
      <div className="overflow-hidden rounded-lg md:rounded-2xl">
        <Image
          src={project.image}
          width={600}
          height={600}
          className="h-full w-full object-cover rounded-lg md:rounded-2xl"
          alt="image"
          quality={100}
          loading="lazy"
        />
      </div>

      {/* Animated Text & Button */}
      <motion.div
        className="flex flex-col justify-center gap-2 md:[direction:ltr]"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <span className="font-semibold text-secondary md:text-xl">
          {project.type}
        </span>
        <span className="text-3xl font-medium md:text-5xl">
          {project.title}
        </span>
        <span className="text-black/50 md:text-xl">{project.desc}</span>

        {/* Infinite Animated Button with Hover Effect */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          whileHover={{ scale: 1.1 }} // Slight scale on hover
          className="mt-5 grid size-16 place-items-center rounded-full shadow-[0px_0px_4px_0px_#00000040] bg-white"
        >
          <Link href={project.link}>
            <motion.div
              whileHover={{ rotate: 45 }} // Rotates the arrow on hover
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ArrowUpRight className="size-8" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
