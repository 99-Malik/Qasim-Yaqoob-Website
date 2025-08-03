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
} from "lucide-react";

const brandColors = {
  default: {
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-100 to-teal-100",
  },
  lg: {
    gradient: "from-[#A50034] to-pink-700",
    bg: "from-[#A50034]/10 to-pink-100/10",
  },
  samsung: {
    gradient: "from-[#1428a0] to-blue-700",
    bg: "from-[#1428a0]/10 to-blue-100/10",
  },
  bosch: {
    gradient: "from-[#ed1c24] to-red-700",
    bg: "from-[#ed1c24]/10 to-red-100/10",
  },
  siemens: {
    gradient: "from-[#009999] to-cyan-600",
    bg: "from-[#009999]/10 to-cyan-100/10",
  },
};

const StatsSection = ({ brand = "default" }) => {
  const colors = brandColors[brand] || brandColors.default;

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Service",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
    },
    {
      icon: Shield,
      number: "90 Days",
      label: "Warranty Guaranteed",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Same Day Service",
      description: "Most repairs completed on the same day",
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Certified professionals with brand training",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Emergency service available anytime",
    },
    {
      icon: MessageCircle,
      title: "Free Quotes",
      description: "Transparent pricing with no hidden fees",
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${colors.bg}`}></div>
        <div className={`absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r ${colors.gradient} opacity-10 blur-3xl`}></div>
        <div className={`absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r ${colors.gradient} opacity-10 blur-3xl`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${colors.gradient} text-white mb-4`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className={`block bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
              Appliances Experts AE?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional appliance repair service with guaranteed results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white relative rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${colors.gradient} text-white mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`bg-gradient-to-br ${colors.gradient} rounded-3xl p-8 md:p-12 text-white`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Fix Your Appliances?</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get professional appliance repair services with guaranteed results. Same day service available for most repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition duration-300 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Get Free Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
