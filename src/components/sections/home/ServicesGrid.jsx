"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tv,
  WashingMachine,
  Snowflake,
  Utensils,
  Flame,
  Shirt,
  Zap,
  Wrench,
  ArrowRight,
  Sparkles,
  Settings,
  Phone
} from "lucide-react";

const ServicesGrid = ({ brand }) => {
  // Revolutionary new brand color system
  let cardGradient = "from-violet-500 to-purple-600";
  let arrowGradient = "from-amber-500 to-orange-600";
  let titleText = "from-amber-400 to-orange-500";
  let hoverText = "text-amber-400";
  let ctaBg = "from-violet-600 to-purple-700";
  let ctaText = "text-violet-100";
  let sectionBg = "from-slate-50 via-white to-violet-50";

  if (brand === "lg") {
    cardGradient = "from-emerald-500 to-teal-600";
    arrowGradient = "from-emerald-500 to-teal-600";
    titleText = "from-emerald-400 to-teal-500";
    hoverText = "text-emerald-400";
    ctaBg = "from-emerald-600 to-teal-700";
    ctaText = "text-emerald-100";
    sectionBg = "from-slate-50 via-white to-emerald-50";
  } else if (brand === "samsung") {
    cardGradient = "from-cyan-500 to-blue-600";
    arrowGradient = "from-cyan-500 to-blue-600";
    titleText = "from-cyan-400 to-blue-500";
    hoverText = "text-cyan-400";
    ctaBg = "from-cyan-600 to-blue-700";
    ctaText = "text-cyan-100";
    sectionBg = "from-slate-50 via-white to-blue-50";
  } else if (brand === "bosch") {
    cardGradient = "from-yellow-500 to-orange-600";
    arrowGradient = "from-yellow-500 to-orange-600";
    titleText = "from-yellow-400 to-orange-500";
    hoverText = "text-yellow-400";
    ctaBg = "from-yellow-600 to-orange-700";
    ctaText = "text-yellow-100";
    sectionBg = "from-slate-50 via-white to-orange-50";
  } else if (brand === "siemens") {
    cardGradient = "from-lime-500 to-green-600";
    arrowGradient = "from-lime-500 to-green-600";
    titleText = "from-lime-400 to-green-500";
    hoverText = "text-lime-400";
    ctaBg = "from-lime-600 to-green-700";
    ctaText = "text-lime-100";
    sectionBg = "from-slate-50 via-white to-green-50";
  }

  const services = [
    {
      icon: Tv,
      title: "Revolutionary TV & Electronics",
      description: "Next-generation repair technology for all modern entertainment systems",
      href: "/tv-repair",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: WashingMachine,
      title: "Elite Washing Machine Service",
      description: "Advanced diagnostic systems for all premium washing machine brands",
      href: "/washing-machine-repair",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Snowflake,
      title: "Precision Refrigerator Repair",
      description: "Cutting-edge cooling system technology and expert maintenance",
      href: "/refrigerator-repair",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Utensils,
      title: "Advanced Dishwasher Solutions",
      description: "Revolutionary cleaning system optimization and repair",
      href: "/dishwasher-repair",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Flame,
      title: "Elite Oven & Stove Service",
      description: "Professional cooking appliance specialists with safety technology",
      href: "/oven-repair",
      gradient: "from-red-500 to-rose-600"
    },
    {
      icon: Snowflake,
      title: "Premium AC & HVAC Systems",
      description: "Advanced climate control technology and expert repair services",
      href: "/ac-repair",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shirt,
      title: "Professional Dryer Solutions",
      description: "Elite dryer repair and advanced maintenance technology",
      href: "/dryer-repair",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      icon: Zap,
      title: "Lightning Microwave Repair",
      description: "Instant microwave troubleshooting with revolutionary safety systems",
      href: "/microwave-repair",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className={`relative py-24 px-4 overflow-hidden bg-gradient-to-br ${sectionBg}`}>
      {/* Revolutionary Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-3xl float-delay-1"></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl float-delay-2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Revolutionary Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Revolutionary Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl mb-8">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-semibold text-slate-700">Elite Service Network</span>
          </div>

          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
            Our Revolutionary
            <span className={`block bg-gradient-to-r ${titleText} bg-clip-text text-transparent`}>
              Elite Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Experience the future of appliance repair with our revolutionary technology and elite service network
          </p>
        </motion.div>

        {/* Revolutionary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href={service.href} className="block">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 group-hover:border-white/40 card-hover-subtle">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} p-5 mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-base">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors">Learn More</span>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${arrowGradient} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Revolutionary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`bg-gradient-to-br ${ctaBg} rounded-3xl p-12 text-white shadow-2xl border border-white/20`}>
            <h3 className="text-2xl md:text-5xl font-black mb-6">
              Ready for Revolutionary Service?
            </h3>
            <p className={`${ctaText} mb-10 max-w-3xl mx-auto text-xl leading-relaxed`}>
              Experience the future of appliance repair with our elite technology and expert technicians.
              Same-day revolutionary service available for most repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="px-6 py-4 text-md bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group"
              >
                <Settings className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
                Call Us              </Link>
              <Link
                href="/contact"
                className="px-6 py-4 border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
              >
                <Phone className="w-8 h-8" />
                Whstapp Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
