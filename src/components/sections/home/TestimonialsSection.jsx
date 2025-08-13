"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, Heart, Award, Zap } from "lucide-react";

// Revolutionary new brand color system
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
        starColor: "text-emerald-400"
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
        starColor: "text-cyan-400"
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
        starColor: "text-yellow-400"
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
        starColor: "text-lime-400"
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
        starColor: "text-amber-400"
      };
  }
};

const TestimonialsSection = ({ brand = "default" }) => {
  const { primary, accent, iconBg, cardBg, textPrimary, textSecondary, badgeBg, starColor } = getBrandClasses(brand);

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      role: "Elite Homeowner",
      content:
        "Revolutionary service! Appliances Experts AE saved me from buying a new washing machine with their cutting-edge technology. Fixed in under an hour - absolutely incredible!",
      rating: 5,
      avatar: "A",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      name: "Sarah Johnson",
      role: "Premium Restaurant Owner",
      content:
        "We rely on our commercial appliances daily. Appliances Experts AE has been our elite service provider for years. Revolutionary technology, lightning-fast, and always professional.",
      rating: 5,
      avatar: "S",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      name: "Mohammed Hassan",
      role: "Elite Property Manager",
      content:
        "Managing multiple properties means dealing with appliance issues regularly. Appliances Experts AE's revolutionary team is always available and gets the job done perfectly every time.",
      rating: 5,
      avatar: "M",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      name: "Fatima Al Zahra",
      role: "Premium Homeowner",
      content:
        "Exceptional elite service! The technician used advanced diagnostic systems, diagnosed the refrigerator problem instantly, and had it working perfectly. Revolutionary technology!",
      rating: 5,
      avatar: "F",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "David Chen",
      role: "Elite Business Owner",
      content:
        "Revolutionary service from start to finish. They fixed our AC system with cutting-edge technology and the price was fair. Elite communication throughout the entire process.",
      rating: 5,
      avatar: "D",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Aisha Rahman",
      role: "Premium Homeowner",
      content:
        "I was worried about my oven before a big dinner party. Appliances Experts AE came through with revolutionary same-day service and fixed it perfectly. Elite service!",
      rating: 5,
      avatar: "A",
      gradient: "from-rose-500 to-pink-600"
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Revolutionary Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl float-delay-1"></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl float-delay-2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Revolutionary Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Revolutionary Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl mb-8">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-white">Elite Customer Stories</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            What Our Elite Customers
            <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our elite customers have to say about our revolutionary service and cutting-edge technology.
          </p>
        </motion.div>

        {/* Revolutionary Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${cardBg} rounded-3xl p-8 border transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 card-hover-subtle`}>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${starColor} group-hover:scale-110 transition-transform duration-300`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-slate-400 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revolutionary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`bg-gradient-to-br ${badgeBg} backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl`}>
            <h3 className="text-2xl md:text-5xl font-black text-white mb-12">
              Revolutionary Success Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: "Elite Customers", value: "100,000+", icon: Heart, gradient: "from-violet-500 to-purple-600" },
                { label: "Perfect Rating", value: "5.0/5", icon: Award, gradient: "from-amber-500 to-orange-600" },
                { label: "Revolutionary Support", value: "24/7", icon: Zap, gradient: "from-emerald-500 to-teal-600" },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.gradient} p-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 font-semibold text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
