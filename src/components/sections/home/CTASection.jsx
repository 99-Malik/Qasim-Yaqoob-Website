"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Clock,
  CheckCircle,
  Zap,
  Sparkles,
  Shield,
  Award,
  Star,
  ArrowRight
} from "lucide-react";

// ✅ Canonical brand colors
const brandColors = {
  lg: { name: "LG", primary: "text-[#a50034]", secondary: "bg-[#a50034]" },
  bosch: { name: "Bosch", primary: "text-[#ed0007]", secondary: "bg-[#ed0007]" },
  siemens: { name: "Siemens", primary: "text-[#00a4b4]", secondary: "bg-[#00a4b4]" },
  samsung: { name: "Samsung", primary: "text-[#1428a0]", secondary: "bg-[#1428a0]" },
  default: { name: "UAE", primary: "text-[#6d28d9]", secondary: "bg-[#6d28d9]" },
};

const CTASection = () => {
  const pathname = usePathname();

  // 🔑 detect brand from URL
  let brandKey = "default";
  if (pathname.includes("/company/lg")) brandKey = "lg";
  else if (pathname.includes("/company/samsung")) brandKey = "samsung";
  else if (pathname.includes("/company/bosch")) brandKey = "bosch";
  else if (pathname.includes("/company/siemens")) brandKey = "siemens";

  const { primary, secondary } = brandColors[brandKey];

  const benefits = [
    "Same-day service",
    "Warranty guaranteed",
    "Certified technicians",
    "Genuine parts only",
    "24/7 emergency support",
    "Free diagnosis & quotes",
  ];

  return (
    <section className="relative py-20 px-4 bg-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium mb-6 ${secondary}`}>
              <Zap className="w-4 h-4" />
              Service Available
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready for{" "}
              <span className={`${primary}`}>Appliance Repair?</span>
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl">
              Experience future-ready repair with certified experts and same-day service. 
              Reliable, fast, and always professional.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white ${secondary}`}>
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white shadow flex items-center justify-center gap-2 ${secondary}`}>
                <Phone className="w-4 h-4" /> Call Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <MessageCircle className="w-4 h-4" /> Get Quote
              </button>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs font-medium mb-4 ${secondary}`}>
                  <Star className="w-3 h-3" /> Elite Service
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
                <p className="text-gray-300 text-sm">Contact us for certified appliance repair</p>
              </div>

              {[
                { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "+971 56 239 7004" },
                { icon: <Clock className="w-5 h-5" />, label: "Available", value: "24/7 Service" },
                { icon: <Shield className="w-5 h-5" />, label: "Warranty", value: "Guaranteed" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 mb-4 rounded-xl bg-white/5 border border-white/10">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${secondary}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="text-center pt-4 border-t border-white/10">
                <div className="flex justify-center items-center gap-2 mb-2 text-white text-xs">
                  <Award className="w-3 h-3" /> Elite Certified
                </div>
                <p className="text-gray-400 text-xs">Trusted • Certified • Reliable</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
