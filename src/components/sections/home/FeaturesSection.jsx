"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Star,
  Target,
  Heart,
  Award,
  Zap,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const getBrandClasses = (brand) => {
  switch ((brand || "").toLowerCase()) {
    case "lg":
      return {
        name: "LG",
        primary: "from-slate-800 via-gray-900 to-zinc-900",
        accent: "from-pink-400 to-red-500",
        iconBg: "from-pink-500 to-red-600",
        badge: "from-pink-500/20 to-red-500/20",
        card: "bg-white/5 backdrop-blur-xl border-white/10",
      };
    case "samsung":
      return {
        name: "Samsung",
        primary: "from-indigo-900 via-blue-900 to-slate-900",
        accent: "from-blue-400 to-cyan-500",
        iconBg: "from-blue-500 to-cyan-600",
        badge: "from-blue-500/20 to-cyan-500/20",
        card: "bg-white/5 backdrop-blur-xl border-white/10",
      };
    case "bosch":
      return {
        name: "Bosch",
        primary: "from-red-900 via-rose-900 to-pink-900",
        accent: "from-red-500 to-red-600",
        iconBg: "from-red-600 to-red-700",
        badge: "from-red-500/20 to-red-600/20",
        card: "bg-white/5 backdrop-blur-xl border-white/10",
      };
    case "siemens":
      return {
        name: "Siemens",
        primary: "from-teal-900 via-cyan-900 to-blue-900",
        accent: "from-teal-400 to-emerald-500",
        iconBg: "from-teal-500 to-emerald-600",
        badge: "from-teal-500/20 to-emerald-500/20",
        card: "bg-white/5 backdrop-blur-xl border-white/10",
      };
    default:
      return {
        name: "UAE",
        primary: "from-violet-900 via-purple-900 to-indigo-900",
        accent: "from-amber-400 to-orange-500",
        iconBg: "from-amber-500 to-orange-600",
        badge: "from-amber-500/20 to-orange-500/20",
        card: "bg-white/5 backdrop-blur-xl border-white/10",
      };
  }
};

const FeaturesSection = ({ brand = "default" }) => {
  const brandConfig = getBrandClasses(brand);

  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Same-day repair service that gets your appliances running instantly" },
    { icon: Shield, title: "Warranty Backed", desc: "Every repair comes with a trusted service warranty" },
    { icon: Star, title: "Certified Experts", desc: "World-class technicians with professional training" },
    { icon: Target, title: "Precision Repair", desc: "Advanced diagnostics ensure accurate and reliable fixes" },
    { icon: Heart, title: "24/7 Support", desc: "Round-the-clock service with instant response" },
    { icon: Award, title: "Trusted by Thousands", desc: "Over 100,000 satisfied UAE customers" },
  ];

  const benefits = [
    "AI-powered diagnostics",
    "Mobile elite service",
    "Transparent pricing",
    "Licensed & insured",
    "Premium parts",
    "Instant appointments",
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${brandConfig.primary}`} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r ${brandConfig.badge} backdrop-blur-xl rounded-full border border-white/10 mb-6`}
          >
            <Sparkles className="w-4 h-4 text-white/80" />
            <span className="text-sm font-semibold text-white/90">
              Elite {brandConfig.name} Service
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Why Choose{" "}
            <span
              className={`bg-gradient-to-r ${brandConfig.accent} bg-clip-text text-transparent`}
            >
              {brandConfig.name}
            </span>{" "}
            Repairs?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the future of appliance care with trusted technology,
            certified experts, and 24/7 support.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${brandConfig.card} rounded-2xl p-8 border group hover:scale-[1.03] transition-all`}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${brandConfig.iconBg} flex items-center justify-center mb-6`}
              >
                <f.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`bg-gradient-to-br ${brandConfig.badge} backdrop-blur-xl rounded-2xl p-10 border border-white/10`}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">
            What You Get
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white/90"
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${brandConfig.iconBg} flex items-center justify-center`}
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
