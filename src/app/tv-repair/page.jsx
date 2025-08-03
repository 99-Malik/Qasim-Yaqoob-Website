"use client";

import { motion } from "framer-motion";
import { 
  Tv, 
  Wrench, 
  Shield, 
  Clock, 
  Star,
  Phone,
  MessageCircle,
  CheckCircle,
  Zap
} from "lucide-react";

export default function TVRepairPage() {
  const services = [
    {
      icon: Tv,
      title: "Screen Repairs",
      description: "Professional repair of TV screens, LCD panels, and display issues.",
      features: ["LCD Panel Replacement", "Screen Crack Repair", "Display Issues", "Backlight Problems"]
    },
    {
      icon: Wrench,
      title: "Power Issues",
      description: "Fix power supply problems, circuit board repairs, and electrical faults.",
      features: ["Power Supply Repair", "Circuit Board Repair", "Electrical Faults", "Voltage Issues"]
    },
    {
      icon: Shield,
      title: "Audio Problems",
      description: "Repair sound issues, speaker problems, and audio system faults.",
      features: ["Speaker Replacement", "Audio System Repair", "Sound Issues", "Volume Problems"]
    },
    {
      icon: Clock,
      title: "Smart TV Features",
      description: "Fix smart TV functionality, WiFi connectivity, and app issues.",
      features: ["WiFi Connectivity", "App Installation", "Smart Features", "Software Updates"]
    }
  ];

  const brands = [
    "Samsung", "LG", "Sony", "Panasonic", "Sharp", "Toshiba", "Philips", "Hisense", "TCL", "Vizio"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most TV repairs completed on the same day"
    },
    {
      icon: Shield,
      title: "Warranty Guaranteed",
      description: "90-day warranty on all repairs and parts"
    },
    {
      icon: Star,
      title: "Expert Technicians",
      description: "Certified professionals with brand training"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Emergency service available anytime"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 mt-12">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            TV & Electronics
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Repair
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional TV and electronics repairs for all major brands
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
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
              Our TV & Electronics Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional repairs for all types of TVs and electronics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
              Why Choose Our TV & Electronics Repair?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional service with guaranteed results
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
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white mb-4">
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Need TV & Electronics Repair?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-emerald-100 mb-8"
          >
            Get professional TV and electronics repair services for any brand or model
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-white text-emerald-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Get Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 