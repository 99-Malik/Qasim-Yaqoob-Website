"use client";

import { motion } from "framer-motion";
import { Wrench, Clock, Shield, Star } from "lucide-react";
import { sendMessage } from "@/lib/data";

const AppliancesRepairSection = () => {
  const appliances = [
    {
      name: "Washing Machine",
      image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?w=400&h=300&fit=crop&crop=center",
      description: "Expert repair for all washing machine brands. Fix leaks, drainage issues, spinning problems, and more.",
      issues: ["Leaking", "Not spinning", "Drainage problems", "Noise issues"],
      href: "/washing-machine-repair"
    },
    {
      name: "Dryer",
      image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?w=400&h=300&fit=crop&crop=center", 
      description: "Professional dryer repair services. Solve heating problems, drum issues, and electrical faults.",
      issues: ["Not heating", "Drum not turning", "Electrical faults", "Overheating"],
      href: "/dryer-repair"
    },
    {
      name: "Dishwasher",
      image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?w=400&h=300&fit=crop&crop=center",
      description: "Complete dishwasher repair solutions. Fix water leaks, cleaning issues, and mechanical problems.",
      issues: ["Water leaks", "Not cleaning", "Mechanical issues", "Drainage problems"],
      href: "/dishwasher-repair"
    },
    {
      name: "Refrigerator",
      image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?w=400&h=300&fit=crop&crop=center",
      description: "Reliable fridge repair services. Fix cooling issues, compressor problems, and temperature control.",
      issues: ["Not cooling", "Compressor issues", "Temperature control", "Ice maker problems"],
      href: "/refrigerator-repair"
    },
    {
      name: "TV & Electronics",
      image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?w=400&h=300&fit=crop&crop=center",
      description: "Expert TV and electronics repair. Fix display issues, sound problems, and connectivity issues.",
      issues: ["Display problems", "Sound issues", "Connectivity", "Power problems"],
      href: "/tv-repair"
    },
    {
      name: "Cooker & Oven",
      image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?w=400&h=300&fit=crop&crop=center",
      description: "Professional cooker and oven repair. Fix heating elements, temperature control, and safety features.",
      issues: ["Heating problems", "Temperature control", "Safety features", "Ignition issues"],
      href: "/cooker-repair"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4"
          >
            <Wrench className="w-4 h-4" />
            Professional Repair Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
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

        {/* Appliances Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {appliances.map((appliance, index) => (
            <motion.div
              key={appliance.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
                             {/* Appliance Image */}
               <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                     <Wrench className="w-12 h-12 text-white" />
                   </div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute top-3 right-3">
                   <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                     <Wrench className="w-4 h-4 text-white" />
                   </div>
                 </div>
               </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {appliance.name} Repair
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {appliance.description}
                </p>

                {/* Common Issues */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Common Issues:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {appliance.issues.map((issue, issueIndex) => (
                      <span
                        key={issueIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Same Day</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Warranty</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>5.0 Rating</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={sendMessage}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
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
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Emergency Repair?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is available 24/7 for emergency repairs. 
              Don't let a broken appliance disrupt your day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={sendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Call Now
              </motion.button>
              <motion.button
                onClick={sendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-emerald-600 font-semibold py-3 px-8 rounded-xl border-2 border-emerald-600 transition-colors duration-300 shadow-md hover:shadow-lg"
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
