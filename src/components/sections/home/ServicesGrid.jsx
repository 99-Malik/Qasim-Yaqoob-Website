"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ correct hook for your case
import {
  Tv,
  WashingMachine,
  Snowflake,
  Utensils,
  Flame,
  Shirt,
  Zap,
  ArrowRight,
  Sparkles,
  Settings,
  Phone,
} from "lucide-react";

// Brand colors (HEX → Tailwind-safe classes)
const brandColors = {
  lg: {
    name: "LG",
    primary: "bg-[#a50034]",
    text: "text-[#a50034]",
    gradient: "from-[#a50034] to-[#a50034]/80",
  },
  bosch: {
    name: "Bosch",
    primary: "bg-[#ed0007]",
    text: "text-[#ed0007]",
    gradient: "from-[#ed0007] to-[#ed0007]/80",
  },
  siemens: {
    name: "Siemens",
    primary: "bg-[#00a4b4]",
    text: "text-[#00a4b4]",
    gradient: "from-[#00a4b4] to-[#00a4b4]/80",
  },
  samsung: {
    name: "Samsung",
    primary: "bg-[#1428a0]",
    text: "text-[#1428a0]",
    gradient: "from-[#1428a0] to-[#1428a0]/80",
  },
  default: {
    name: "UAE",
    primary: "bg-[#6d28d9]",
    text: "text-[#6d28d9]",
    gradient: "from-[#6d28d9] to-[#7c3aed]/80",
  },
};

const ServicesGrid = () => {
  const pathname = usePathname();

  // Detect brand from the current path
  let brandKey= "default";
  if (pathname.includes("/company/lg")) brandKey = "lg";
  else if (pathname.includes("/company/bosch")) brandKey = "bosch";
  else if (pathname.includes("/company/siemens")) brandKey = "siemens";
  else if (pathname.includes("/company/samsung")) brandKey = "samsung";

  const brandConfig = brandColors[brandKey];

  const services = [
    { icon: Tv, title: "TV & Electronics", href: "/tv-repair", desc: "Smart TVs, LEDs, and home entertainment systems." },
    { icon: WashingMachine, title: "Washing Machines", href: "/washing-machine-repair", desc: "All brands, front & top load machines." },
    { icon: Snowflake, title: "Refrigerators", href: "/refrigerator-repair", desc: "Cooling, compressor, and temperature fixes." },
    { icon: Utensils, title: "Dishwashers", href: "/dishwasher-repair", desc: "Cleaning performance, drainage & installation." },
    { icon: Flame, title: "Ovens & Stoves", href: "/oven-repair", desc: "Gas & electric cooking range expert service." },
    { icon: Snowflake, title: "AC & HVAC", href: "/ac-repair", desc: "Climate control, cooling issues, full servicing." },
    { icon: Shirt, title: "Dryers", href: "/dryer-repair", desc: "Efficient drying, heating & mechanical repairs." },
    { icon: Zap, title: "Microwaves", href: "/microwave-repair", desc: "Instant heating, power & safety system repairs." },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div
          className={`inline-flex items-center gap-3 px-6 py-2 ${brandConfig.primary} text-white rounded-full shadow-md mb-6`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-semibold">
            Elite {brandConfig.name} Services
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
          Our <span className={`${brandConfig.text}`}>Specialized Repairs</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Tailored {brandConfig.name} appliance repair services with expert
          technicians and same-day availability.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={service.href}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 p-6 transition group">
                <div
                  className={`w-14 h-14 rounded-lg ${brandConfig.primary} flex items-center justify-center mb-4`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${brandConfig.text}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <span
                  className={`inline-flex items-center gap-2 text-sm font-medium ${brandConfig.text}`}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`mt-16 rounded-2xl p-10 text-center text-white bg-gradient-to-r ${brandConfig.gradient}`}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Need Same-Day {brandConfig.name} Service?
        </h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Book a technician now and restore your appliance performance with
          trusted {brandConfig.name} repairs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-bold shadow hover:bg-gray-100"
          >
            <Settings className="w-5 h-5 inline mr-2" /> Call Us
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10"
          >
            <Phone className="w-5 h-5 inline mr-2" /> WhatsApp
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
