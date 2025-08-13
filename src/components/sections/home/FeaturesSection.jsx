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
  Zap,
  Award,
  Sparkles,
  Target,
  Heart
} from "lucide-react";
import { getBrandConfig } from "@/lib/brandConfig";

// Instant new brand color system
const getBrandClasses = (brand) => {
  switch (brand) {
    case "lg":
      return {
        primary: "from-slate-800 via-gray-900 to-zinc-900",
        accent: "from-emerald-400 to-teal-500",
        iconBg: "from-emerald-500 to-teal-600",
        checkColor: "text-emerald-400",
        badgeBg: "from-emerald-500/20 to-teal-500/20",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300"
      };
    case "samsung":
      return {
        primary: "from-indigo-900 via-blue-900 to-slate-900",
        accent: "from-cyan-400 to-blue-500",
        iconBg: "from-cyan-500 to-blue-600",
        checkColor: "text-cyan-400",
        badgeBg: "from-cyan-500/20 to-blue-500/20",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300"
      };
    case "bosch":
      return {
        primary: "from-red-900 via-rose-900 to-pink-900",
        accent: "from-yellow-400 to-orange-500",
        iconBg: "from-yellow-500 to-orange-600",
        checkColor: "text-yellow-400",
        badgeBg: "from-yellow-500/20 to-orange-500/20",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300"
      };
    case "siemens":
      return {
        primary: "from-teal-900 via-cyan-900 to-blue-900",
        accent: "from-lime-400 to-green-500",
        iconBg: "from-lime-500 to-green-600",
        checkColor: "text-lime-400",
        badgeBg: "from-lime-500/20 to-green-500/20",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300"
      };
    default:
      return {
        primary: "from-violet-900 via-purple-900 to-indigo-900",
        accent: "from-amber-400 to-orange-500",
        iconBg: "from-amber-500 to-orange-600",
        checkColor: "text-amber-400",
        badgeBg: "from-amber-500/20 to-orange-500/20",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300"
      };
  }
};

const FeaturesSection = ({ brand = null }) => {
  const brandConfig = brand ? getBrandConfig(brand) : null;
  const { primary, accent, iconBg, checkColor, badgeBg, cardBg, textPrimary, textSecondary } = getBrandClasses(brand);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Service",
      description: "Instant same-day repair technology that gets your appliances running instantly",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Unlimited Warranty",
      description: "Lifetime guarantee on all repairs with our Instant repair technology",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: Star,
      title: "Elite Technicians",
      description: "World-class certified professionals with cutting-edge training and expertise",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Advanced diagnostic systems ensure perfect repairs every single time",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Heart,
      title: "24/7 Elite Support",
      description: "Round-the-clock premium service with instant response technology",
      gradient: "from-rose-400 to-pink-500"
    },
    {
      icon: Award,
      title: "100,000+ Satisfied",
      description: "Join our elite community of customers who trust our Instant service",
      gradient: "from-violet-400 to-purple-500"
    },
  ];

  const benefits = [
    "AI-powered diagnostics",
    "Mobile elite service",
    "Transparent pricing",
    "Military-grade equipment",
    "Fully licensed & insured",
    "Instant appointments"
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Instant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl float-delay-1"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Instant Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl mb-8">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-white">Instant Technology</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              {brandConfig ? `${brandConfig.name} Elite Service` : "Instant Repair?"}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {brandConfig
              ? `Experience the future of ${brandConfig.name} appliance repair with our Instant technology and elite service`
              : "Experience the future of appliance repair with our Instant technology and elite service"}
          </p>
        </motion.div>

        {/* Instant Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${cardBg} rounded-3xl p-8 border transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 card-hover-subtle`}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} p-5 mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="texts-sm md:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instant Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`bg-gradient-to-br ${badgeBg} backdrop-blur-xl rounded-3xl p-12 border border-white/20`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              Instant Benefits
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {brandConfig
                ? `When you choose our ${brandConfig.name} elite service, you get access to Instant technology`
                : "When you choose our elite service, you get access to Instant technology"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${iconBg} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-lg font-semibold group-hover:text-amber-400 transition-colors">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
