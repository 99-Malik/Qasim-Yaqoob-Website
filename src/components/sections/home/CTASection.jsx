"use client";

import { motion } from "framer-motion";
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
        badgeBg: "from-emerald-500/20 to-teal-500/20",
        buttonGradient: "from-emerald-500 to-teal-600"
      };
    case "samsung":
      return {
        primary: "from-indigo-900 via-blue-900 to-slate-900",
        accent: "from-cyan-400 to-blue-500",
        iconBg: "from-cyan-500 to-blue-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-cyan-500/20 to-blue-500/20",
        buttonGradient: "from-cyan-500 to-blue-600"
      };
    case "bosch":
      return {
        primary: "from-red-900 via-rose-900 to-pink-900",
        accent: "from-yellow-400 to-orange-500",
        iconBg: "from-yellow-500 to-orange-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-yellow-500/20 to-orange-500/20",
        buttonGradient: "from-yellow-500 to-orange-600"
      };
    case "siemens":
      return {
        primary: "from-teal-900 via-cyan-900 to-blue-900",
        accent: "from-lime-400 to-green-500",
        iconBg: "from-lime-500 to-green-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-lime-500/20 to-green-500/20",
        buttonGradient: "from-lime-500 to-green-600"
      };
    default:
      return {
        primary: "from-violet-900 via-purple-900 to-indigo-900",
        accent: "from-amber-400 to-orange-500",
        iconBg: "from-amber-500 to-orange-600",
        cardBg: "bg-white/5 backdrop-blur-xl border-white/10",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        badgeBg: "from-amber-500/20 to-orange-500/20",
        buttonGradient: "from-amber-500 to-orange-600"
      };
  }
};

const CTASection = ({ brand = "default" }) => {
  const { primary, accent, iconBg, cardBg, textPrimary, textSecondary, badgeBg, buttonGradient } = getBrandClasses(brand);

  const benefits = [
    "Instant same-day service technology",
    "Lifetime elite warranty guaranteed",
    "Certified Instant technicians",
    "Premium genuine parts only",
    "24/7 elite emergency support",
    "Free Instant diagnosis and quotes",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Instant Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Instant Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl mb-8">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold text-white">Service Available</span>
            </div>

            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Ready for 
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Appliance Repair?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              Experience the future of appliance repair with our Instant technology and elite service network.
              Same-day service available for most repairs with cutting-edge diagnostic systems.
            </p>

            {/* Instant Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${buttonGradient} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-slate-300 font-semibold text-lg group-hover:text-white transition-colors">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Instant CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className={`w-full sm:w-auto py-6 px-8 bg-gradient-to-r ${buttonGradient} text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group`}>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Call Elite Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="w-full sm:w-auto py-6 px-8 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" />
                Get Elite Quote
              </button>
            </motion.div>
          </motion.div>

          {/* Instant Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`${cardBg} rounded-3xl p-10 border shadow-2xl backdrop-blur-xl`}>
              <div className="text-center mb-10">
                {/* Instant Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20 mb-6">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-white">Elite Service</span>
                </div>
                
                <h3 className="text-3xl font-black text-white mb-4">
                  Get Started Today
                </h3>
                <p className="text-slate-300 text-lg">
                  Contact us for Instant appliance repair services
                </p>
              </div>

              {/* Instant Contact Info */}
              {[
                { icon: <Phone className="w-6 h-6" />, label: "Call Elite Team", value: "+971 56 239 7004", gradient: "from-violet-500 to-purple-600" },
                { icon: <Clock className="w-6 h-6" />, label: "24/7 Elite Service", value: "Emergency Repairs", gradient: "from-amber-500 to-orange-600" },
                { icon: <Shield className="w-6 h-6" />, label: "Elite Warranty", value: "Lifetime Coverage", gradient: "from-emerald-500 to-teal-600" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl mb-6 border border-white/10 group hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.gradient} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{item.label}</div>
                    <div className="text-slate-300 font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}

              {/* Instant Trust Indicator */}
              <div className="text-center pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-semibold text-white">Elite Certified</span>
                </div>
                <p className="text-xs text-slate-400">Instant technology • Elite service • Perfect results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
