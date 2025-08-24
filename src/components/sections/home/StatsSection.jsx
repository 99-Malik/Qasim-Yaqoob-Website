"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Users,
  Clock,
  Star,
  Shield,
  Zap,
  Award,
  Target,
  Heart,
  Phone,
  MessageCircle,
} from "lucide-react";

// ✅ Canonical brand color config
const brandColors = {
  lg: {
    name: "LG",
    primary: "text-[#a50034]",
    secondary: "bg-[#a50034]",
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

const StatsSection = () => {
  const pathname = usePathname();

  // 🔑 detect brand from URL
  let brandKey = "default";
  if (pathname.includes("/company/lg")) brandKey = "lg";
  else if (pathname.includes("/company/samsung")) brandKey = "samsung";
  else if (pathname.includes("/company/bosch")) brandKey = "bosch";
  else if (pathname.includes("/company/siemens")) brandKey = "siemens";

  const { name, primary, secondary } = brandColors[brandKey];

  const stats = [
    { icon: Users, number: "100,000+", label: "Customers" },
    { icon: Clock, number: "24/7", label: "Support" },
    { icon: Star, number: "5.0", label: "Rating" },
    { icon: Shield, number: "Warranty", label: "Coverage" },
  ];

  const features = [
    { icon: Zap, title: "Fast Service", description: "Same-day appliance repair you can trust." },
    { icon: Target, title: "Expert Precision", description: "Advanced diagnostics for perfect results." },
    { icon: Heart, title: "24/7 Support", description: "Always available for urgent service." },
    { icon: Award, title: "Free Quotes", description: "Upfront pricing with no hidden fees." },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full ${secondary} text-white`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose <span className={primary}>{name} Repairs?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted technicians, warranty-backed service, and 24/7 support
            across the UAE.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 mb-4 flex items-center justify-center rounded-lg ${secondary} text-white`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Same-Day {name} Service?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a technician today for reliable repair service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-6 py-3 text-white font-semibold rounded-lg ${secondary}`}>
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call Now
            </button>
            <button className="px-6 py-3 border rounded-lg text-gray-700 hover:bg-gray-50 transition">
              <MessageCircle className="inline-block w-5 h-5 mr-2" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
