"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Shield,
  Star,
  Wrench,
  CheckCircle,
  Phone,
  Users,
} from "lucide-react";
import { getBrandConfig } from "@/lib/brandConfig";

// Helper to return Tailwind classes based on brand
const getBrandClasses = (brand) => {
  switch (brand) {
    case "lg":
      return {
        text: "text-[#a50034]",
        iconBg: "bg-gradient-to-br from-[#ffb7c5] to-[#a50034]",
        checkColor: "text-[#a50034]",
      };
    case "samsung":
      return {
        text: "text-[#1428a0]",
        iconBg: "bg-gradient-to-br from-[#7ca6ff] to-[#1428a0]",
        checkColor: "text-[#1428a0]",
      };
    case "bosch":
      return {
        text: "text-[#e60000]",
        iconBg: "bg-gradient-to-br from-[#ff9999] to-[#e60000]",
        checkColor: "text-[#e60000]",
      };
    case "siemens":
      return {
        text: "text-[#007c92]",
        iconBg: "bg-gradient-to-br from-[#8fe3ff] to-[#007c92]",
        checkColor: "text-[#007c92]",
      };
    default:
      return {
        text: "text-emerald-500",
        iconBg: "bg-gradient-to-br from-emerald-200 to-emerald-500",
        checkColor: "text-emerald-500",
      };
  }
};

const FeaturesSection = ({ brand = null }) => {
  const brandConfig = brand ? getBrandConfig(brand) : null;
  const { text, iconBg, checkColor } = getBrandClasses(brand);

  const features = [
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most repairs completed on the same day for your convenience",
    },
    {
      icon: Shield,
      title: "Warranty Guaranteed",
      description: "90-day warranty on all repairs and replacement parts",
    },
    {
      icon: Star,
      title: "Expert Technicians",
      description: "Certified professionals with extensive brand training",
    },
    {
      icon: Wrench,
      title: "Genuine Parts",
      description: "We use only original manufacturer parts for lasting repairs",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Emergency service available anytime, day or night",
    },
    {
      icon: Users,
      title: "10,000+ Customers",
      description: "Trusted by thousands of satisfied customers across the region",
    },
  ];

  const benefits = [
    "Free diagnosis and quotes",
    "Mobile service available",
    "No hidden fees",
    "Professional equipment",
    "Licensed and insured",
    "Same day appointments",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className={`block ${text}`}>
              {brandConfig ? `${brandConfig.name} Service?` : "Appliances Experts AE?"}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {brandConfig
              ? `Professional ${brandConfig.name} appliance repair service with guaranteed results and exceptional customer care`
              : "Professional appliance repair service with guaranteed results and exceptional customer care"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                <div
                  className={`inline-flex p-4 rounded-xl ${iconBg} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What You Get
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {brandConfig
                ? `When you choose our ${brandConfig.name} service, you get more than just repairs`
                : "When you choose our service, you get more than just repairs"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className={`w-5 h-5 ${checkColor} flex-shrink-0`} />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
