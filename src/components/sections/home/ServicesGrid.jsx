"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tv,
  WashingMachine,
  Snowflake,
  Utensils,
  Flame,
  Shirt,
  Zap,
  Wrench
} from "lucide-react";

const ServicesGrid = ({ brand }) => {
  // Set gradient colors by brand
  let cardGradient = "from-emerald-500 to-teal-600";
  let arrowGradient = "from-emerald-500 to-teal-600";
  let titleText = "from-emerald-400 to-teal-400";
  let hoverText = "text-emerald-600";
  let ctaBg = "from-emerald-600 to-teal-700";
  let ctaText = "text-emerald-100";

  if (brand === "lg") {
    cardGradient = "from-[#A50034] to-pink-700";
    arrowGradient = "from-[#A50034] to-pink-700";
    titleText = "from-[#A50034] to-pink-500";
    hoverText = "text-[#A50034]";
    ctaBg = "from-[#A50034] to-[#5a0022]";
    ctaText = "text-pink-200";
  } else if (brand === "samsung") {
    cardGradient = "from-[#1428a0] to-blue-700";
    arrowGradient = "from-[#1428a0] to-blue-700";
    titleText = "from-[#1428a0] to-blue-400";
    hoverText = "text-[#1428a0]";
    ctaBg = "from-[#1428a0] to-[#1b1f2f]";
    ctaText = "text-blue-200";
  } else if (brand === "bosch") {
    cardGradient = "from-[#ed1c24] to-red-800";
    arrowGradient = "from-[#ed1c24] to-red-800";
    titleText = "from-[#ed1c24] to-red-600";
    hoverText = "text-[#ed1c24]";
    ctaBg = "from-[#ed1c24] to-[#8a0c14]";
    ctaText = "text-red-200";
  } else if (brand === "siemens") {
    cardGradient = "from-[#009999] to-cyan-700";
    arrowGradient = "from-[#009999] to-cyan-700";
    titleText = "from-[#009999] to-cyan-300";
    hoverText = "text-[#009999]";
    ctaBg = "from-[#009999] to-[#004f4f]";
    ctaText = "text-cyan-200";
  }

  const services = [
    { icon: Tv, title: "TV & Electronics Repair", description: "Professional repair of TVs, displays, and electronic devices", href: "/tv-repair" },
    { icon: WashingMachine, title: "Washing Machine Repair", description: "Expert repair for all washing machine brands and models", href: "/washing-machine-repair" },
    { icon: Snowflake, title: "Refrigerator Repair", description: "Professional refrigerator and freezer repair services", href: "/refrigerator-repair" },
    { icon: Utensils, title: "Dishwasher Repair", description: "Reliable dishwasher repair for all major brands", href: "/dishwasher-repair" },
    { icon: Flame, title: "Oven & Stove Repair", description: "Expert oven, stove, and range repair services", href: "/oven-repair" },
    { icon: Snowflake, title: "AC & HVAC Repair", description: "Professional air conditioning and HVAC system repair", href: "/ac-repair" },
    { icon: Shirt, title: "Dryer Repair", description: "Professional dryer repair and maintenance services", href: "/dryer-repair" },
    { icon: Zap, title: "Microwave Repair", description: "Expert microwave repair and safety checks", href: "/microwave-repair" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Professional
            <span className={`block bg-gradient-to-r ${titleText} bg-clip-text text-transparent`}>
              Repair Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive appliance repair services for all major brands and models
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link href={service.href} className="block">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-opacity-50">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${cardGradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-3 group-hover:${hoverText} transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`${hoverText} font-medium text-sm`}>Learn More</span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${arrowGradient} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`bg-gradient-to-br ${ctaBg} rounded-3xl p-8 md:p-12 text-white`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Appliance Repair?
            </h3>
            <p className={`${ctaText} mb-8 max-w-2xl mx-auto`}>
              Get expert repair services for all your home appliances.
              Same day service available for most repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Wrench className="w-4 h-4" />
                View All Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
