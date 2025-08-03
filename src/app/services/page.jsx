"use client";

import { motion } from "framer-motion";
import { 
  Tv, 
  WashingMachine, 
  Snowflake, 
  Utensils, 
  Flame, 
  Wind,
  Shirt,
  Radio,
  Clock,
  Shield,
  Star,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Tv,
      title: "TV & Electronics Repair",
      description: "Expert repairs for all major TV brands including Samsung, LG, Sony, and more. We handle screen repairs, power issues, and smart TV troubleshooting.",
      features: ["Screen Repairs", "Power Issues", "Smart TV Setup", "Circuit Board Repairs"],
      href: "/tv-repair",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: WashingMachine,
      title: "Washing Machine Repair",
      description: "Professional washing machine repairs for Bosch, Siemens, Samsung, and LG. From drum problems to electronic faults, we fix it all.",
      features: ["Drum Repairs", "Electronic Faults", "Water Leaks", "Motor Issues"],
      href: "/washing-machine-repair",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Snowflake,
      title: "Refrigerator Repair",
      description: "Complete refrigerator repair services covering cooling systems, compressor issues, ice maker repairs, and temperature control problems.",
      features: ["Cooling Systems", "Compressor Issues", "Ice Maker Repairs", "Temperature Control"],
      href: "/refrigerator-repair",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Utensils,
      title: "Dishwasher Repair",
      description: "Specialized repairs for all major dishwasher brands. We fix water leaks, drainage issues, and cleaning system problems.",
      features: ["Water Leaks", "Drainage Issues", "Cleaning Systems", "Detergent Dispensers"],
      href: "/dishwasher-repair",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Flame,
      title: "Oven & Stove Repair",
      description: "Professional oven and stove repair services including temperature control, heating element replacement, and electronic control fixes.",
      features: ["Temperature Control", "Heating Elements", "Electronic Controls", "Gas Safety"],
      href: "/oven-repair",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Wind,
      title: "AC & HVAC Repair",
      description: "Expert AC repair services for all major brands. We fix cooling issues, compressor problems, and thermostat malfunctions.",
      features: ["Cooling Issues", "Compressor Problems", "Thermostat Repairs", "Air Flow"],
      href: "/ac-repair",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shirt,
      title: "Dryer Repair",
      description: "Professional dryer repair services for all major brands. We handle heating issues, motor repairs, belt replacements, and sensor problems.",
      features: ["Heating Issues", "Motor Repairs", "Belt Replacements", "Sensor Problems"],
      href: "/dryer-repair",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Radio,
      title: "Microwave Repair",
      description: "Expert microwave repair services including magnetron replacement, door repairs, and electronic control fixes.",
      features: ["Magnetron Replacement", "Door Repairs", "Electronic Controls", "Safety Checks"],
      href: "/microwave-repair",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most repairs completed on the same day for your convenience."
    },
    {
      icon: Shield,
      title: "Warranty Guaranteed",
      description: "All repairs come with comprehensive warranty coverage."
    },
    {
      icon: Star,
      title: "Expert Technicians",
      description: "Certified professionals with manufacturer training."
    },
    {
      icon: Phone,
      title: "24/7 Emergency",
      description: "Round-the-clock support for urgent repairs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive appliance repair services for all major brands and models
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional, reliable, and guaranteed appliance repair services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              All Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional repair services for every appliance in your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Link href={service.href} className="block">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Need Appliance Repair?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Get professional repair services for any appliance issue
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
              Get Free Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}