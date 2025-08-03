"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

const brandStyles = {
  lg: {
    gradientFrom: "from-[#a50034]",
    gradientTo: "to-[#a50034]",
    text: "text-[#a50034]",
    gradientLightFrom: "from-[#fde4ec]",
    gradientLightTo: "to-[#fde4ec]",
  },
  samsung: {
    gradientFrom: "from-[#1428a0]",
    gradientTo: "to-[#1428a0]",
    text: "text-[#1428a0]",
    gradientLightFrom: "from-[#e8ebfa]",
    gradientLightTo: "to-[#e8ebfa]",
  },
  bosch: {
    gradientFrom: "from-[#ed1c24]",
    gradientTo: "to-[#ed1c24]",
    text: "text-[#ed1c24]",
    gradientLightFrom: "from-[#fde9ea]",
    gradientLightTo: "to-[#fde9ea]",
  },
  siemens: {
    gradientFrom: "from-[#009999]",
    gradientTo: "to-[#009999]",
    text: "text-[#009999]",
    gradientLightFrom: "from-[#e5f6f6]",
    gradientLightTo: "to-[#e5f6f6]",
  },
  default: {
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    text: "text-emerald-600",
    gradientLightFrom: "from-emerald-50",
    gradientLightTo: "to-teal-50",
  },
};

const CTASection = ({ brand = "default" }) => {
  const styles = brandStyles[brand] || brandStyles.default;

  const benefits = [
    "Same day service available",
    "90-day warranty guaranteed",
    "Certified technicians",
    "Genuine parts only",
    "24/7 emergency support",
    "Free diagnosis and quotes",
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br ${styles.gradientFrom}/20 ${styles.gradientTo}/20`}></div>
        <div className={`absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo} opacity-10 blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r ${styles.gradientTo} ${styles.gradientFrom} opacity-10 blur-3xl animate-pulse delay-1000`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo} text-white px-6 py-3 mb-6`}>
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Emergency Service Available</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Need Professional
              <span className={`block bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo} bg-clip-text text-transparent`}>
                Appliance Repair?
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get expert appliance repair services with guaranteed results.
              Same day service available for most repairs. Professional technicians,
              genuine parts, and exceptional customer service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo} text-white`}>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className={`w-full sm:w-auto py-4 px-4 bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo} text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2`}>
                <Phone className="w-4 h-4" />
                Call Now
              </button>
              <button className={`w-full sm:w-auto py-4 px-4 border-2 ${styles.text} ${styles.text.replace("text-", "border-")} font-bold rounded-lg hover:${styles.gradientFrom} hover:text-white transition-all duration-300 flex items-center justify-center gap-2`}>
                <MessageCircle className="w-4 h-4" />
                Get Free Quote
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Started Today
                </h3>
                <p className="text-gray-600">
                  Contact us for professional appliance repair services
                </p>
              </div>

              {/* Contact Info */}
              {[
                { icon: <Phone className="w-6 h-6" />, label: "Call Now", value: "+971 56 239 7004" },
                { icon: <Clock className="w-6 h-6" />, label: "24/7 Service", value: "Emergency Repairs" },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-4 p-4 bg-gradient-to-r ${styles.gradientLightFrom} ${styles.gradientLightTo} rounded-xl mb-4`}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${styles.gradientFrom} ${styles.gradientTo} text-white flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.label}</div>
                    <div className={`${styles.text}`}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
