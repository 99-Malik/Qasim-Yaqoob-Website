"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Wrench, Clock, Shield, Star } from "lucide-react";
import { sendMessage } from "@/lib/data";

// ✅ Canonical brand colors
const brandColors = {
  lg: {
    name: "LG",
    primary: "text-[#a50034]",     // text
    secondary: "bg-[#a50034]",     // bg
  },
  bosch: {
    name: "Bosch",
    primary: "text-[#ed0007]",
    secondary: "bg-[#ed0007]",
  },
  siemens: {
    name: "Siemens",
    primary: "text-[#00a4b4]",
    secondary: "bg-[#00a4b4]",
  },
  samsung: {
    name: "Samsung",
    primary: "text-[#1428a0]",
    secondary: "bg-[#1428a0]",
  },
  default: {
    name: "UAE",
    primary: "text-[#6d28d9]",
    secondary: "bg-[#6d28d9]",
  },
};

const AppliancesRepairSection = () => {
  const pathname = usePathname();

  // 🔑 detect brand from URL
  let brandKey = "default";
  if (pathname.includes("/company/lg")) brandKey = "lg";
  else if (pathname.includes("/company/samsung")) brandKey = "samsung";
  else if (pathname.includes("/company/bosch")) brandKey = "bosch";
  else if (pathname.includes("/company/siemens")) brandKey = "siemens";

  const { primary, secondary } = brandColors[brandKey];

  const appliances = [
    {
      name: "Washing Machine",
      description: "Expert repair for all washing machine brands. Fix leaks, drainage issues, spinning problems, and more.",
      issues: ["Leaking", "Not spinning", "Drainage problems", "Noise issues"],
    },
    {
      name: "Dryer",
      description: "Professional dryer repair services. Solve heating problems, drum issues, and electrical faults.",
      issues: ["Not heating", "Drum not turning", "Electrical faults", "Overheating"],
    },
    {
      name: "Dishwasher",
      description: "Complete dishwasher repair solutions. Fix water leaks, cleaning issues, and mechanical problems.",
      issues: ["Water leaks", "Not cleaning", "Mechanical issues", "Drainage problems"],
    },
    {
      name: "Refrigerator",
      description: "Reliable fridge repair services. Fix cooling issues, compressor problems, and temperature control.",
      issues: ["Not cooling", "Compressor issues", "Temperature control", "Ice maker problems"],
    },
    {
      name: "TV & Electronics",
      description: "Expert TV and electronics repair. Fix display issues, sound problems, and connectivity issues.",
      issues: ["Display problems", "Sound issues", "Connectivity", "Power problems"],
    },
    {
      name: "Cooker & Oven",
      description: "Professional cooker and oven repair. Fix heating elements, temperature control, and safety features.",
      issues: ["Heating problems", "Temperature control", "Safety features", "Ignition issues"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-4 py-2 ${secondary} text-white rounded-full text-sm font-medium mb-4`}
          >
            <Wrench className="w-4 h-4" />
            Professional Repair Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Expert Appliance Repair
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Fast, reliable repair services for all major household appliances.
            Our certified technicians ensure your appliances work like new.
          </motion.p>
        </div>

        {/* Appliance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appliances.map((appliance, index) => (
            <motion.div
              key={appliance.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl border border-gray-100 shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="p-6">
                <h3 className={`text-xl font-bold text-gray-900 mb-3 ${primary}`}>
                  {appliance.name} Repair
                </h3>
                <p className="text-gray-600 mb-4">{appliance.description}</p>

                {/* Common Issues */}
                <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Common Issues:
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {appliance.issues.map((issue, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {issue}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Same Day
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" /> Warranty
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" /> 5.0 Rating
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  onClick={sendMessage}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 px-6 rounded-lg text-white font-semibold shadow ${secondary}`}
                >
                  Get Repair Quote
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 border shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Emergency Repair?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is available 24/7 for emergency repairs. Don’t let a broken appliance disrupt your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={sendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold text-white shadow ${secondary}`}
              >
                Call Now
              </motion.button>
              <motion.button
                onClick={sendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold border ${primary}`}
              >
                Schedule Online
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppliancesRepairSection;
