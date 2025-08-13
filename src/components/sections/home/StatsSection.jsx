"use client";

import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Star,
  Shield,
  CheckCircle,
  Wrench,
  Phone,
  MessageCircle,
  Zap,
  Award,
  Sparkles,
  Target,
  Heart,
  TrendingUp
} from "lucide-react";

// Instant new brand color system
const getBrandClasses = (brand) => {
  switch (brand) {
    case "lg":
      return {
        primary: "from-slate-800 via-gray-900 to-zinc-900",
        accent: "from-emerald-400 to-teal-500",
        iconBg: "from-emerald-500 to-teal-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-emerald-500/20 to-teal-500/20"
      };
    case "samsung":
      return {
        primary: "from-indigo-900 via-blue-900 to-slate-900",
        accent: "from-cyan-400 to-blue-500",
        iconBg: "from-cyan-500 to-blue-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-cyan-500/20 to-blue-500/20"
      };
    case "bosch":
      return {
        primary: "from-red-900 via-rose-900 to-pink-900",
        accent: "from-yellow-400 to-orange-500",
        iconBg: "from-yellow-500 to-orange-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-yellow-500/20 to-orange-500/20"
      };
    case "siemens":
      return {
        primary: "from-teal-900 via-cyan-900 to-blue-900",
        accent: "from-lime-400 to-green-500",
        iconBg: "from-lime-500 to-green-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-lime-500/20 to-green-500/20"
      };
    default:
      return {
        primary: "from-violet-900 via-purple-900 to-indigo-900",
        accent: "from-amber-400 to-orange-500",
        iconBg: "from-amber-500 to-orange-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-amber-500/20 to-orange-500/20"
      };
  }
};

const StatsSection = ({ brand = "default" }) => {
  const { primary, accent, iconBg, cardBg, textPrimary, textSecondary, badgeBg } = getBrandClasses(brand);

  const stats = [
    {
      icon: Users,
      number: "100,000+",
      label: "Elite Customers",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Instant Support",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Star,
      number: "5.0/5",
      label: "Perfect Rating",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Shield,
      number: "Lifetime",
      label: "Elite Warranty",
      gradient: "from-cyan-500 to-blue-600"
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Service",
      description: "Instant same-day repair technology",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Advanced diagnostic systems for perfect repairs",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Heart,
      title: "24/7 Elite Support",
      description: "Round-the-clock premium service technology",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Free Elite Quotes",
      description: "Transparent pricing with Instant technology",
      gradient: "from-cyan-500 to-blue-600"
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Instant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl float-delay-1"></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl float-delay-2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Instant Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.gradient} p-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                <stat.icon className="w-12 h-12 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-slate-300 font-semibold text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Instant Features Header */}
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
            <span className="text-sm font-semibold text-white">Elite Service Network</span>
          </div>

          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Instant Repair?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of appliance repair with our Instant technology and elite service network
          </p>
        </motion.div>

        {/* Instant Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${cardBg} rounded-3xl p-8 border transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 card-hover-subtle`}>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} p-5 mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instant CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`bg-gradient-to-br ${badgeBg} backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl`}>
            <h3 className="text-2xl md:text-5xl font-black text-white mb-6">
              Ready for Instant Service?
            </h3>
            <p className="text-slate-300 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
              Experience the future of appliance repair with our elite technology and expert technicians. 
              Same-day Instant service available for most repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-6 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group">
                <Phone className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                Call Elite Team
              </button>
              <button className="px-6 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                <MessageCircle className="w-8 h-8" />
                Get Elite Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
