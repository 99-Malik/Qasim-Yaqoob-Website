"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Star, Sparkles, Heart, Award, Zap } from "lucide-react";

// ✅ Canonical brand colors
const brandColors = {
  lg: { name: "LG", primary: "text-[#a50034]", secondary: "bg-[#a50034]" },
  bosch: { name: "Bosch", primary: "text-[#ed0007]", secondary: "bg-[#ed0007]" },
  siemens: { name: "Siemens", primary: "text-[#00a4b4]", secondary: "bg-[#00a4b4]" },
  samsung: { name: "Samsung", primary: "text-[#1428a0]", secondary: "bg-[#1428a0]" },
  default: { name: "UAE", primary: "text-[#6d28d9]", secondary: "bg-[#6d28d9]" },
};

const TestimonialsSection = () => {
  const pathname = usePathname();

  // 🔑 detect brand from URL
  let brandKey = "default";
  if (pathname.includes("/company/lg")) brandKey = "lg";
  else if (pathname.includes("/company/samsung")) brandKey = "samsung";
  else if (pathname.includes("/company/bosch")) brandKey = "bosch";
  else if (pathname.includes("/company/siemens")) brandKey = "siemens";

  const { name, primary, secondary } = brandColors[brandKey];

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      role: "Homeowner",
      content:
        "Emirates Repair Center saved me from buying a new washing machine. Fixed in under an hour – brilliant service!",
      rating: 5,
      avatar: "A",
    },
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      content:
        "We rely on appliances daily. Their team is always fast, professional, and reliable.",
      rating: 5,
      avatar: "S",
    },
    {
      name: "Mohammed Hassan",
      role: "Property Manager",
      content:
        "Managing properties means constant repairs. The team never disappoints – always on time, always accurate.",
      rating: 5,
      avatar: "M",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium mb-6 ${secondary}`}
          >
            <Sparkles className="w-4 h-4" />
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            What Our{" "}
            <span className={`${primary}`}>Customers Say</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Hear directly from customers who trust our certified repair experts.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${primary}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-5">“{t.content}”</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold ${secondary}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Customers", value: "100K+", icon: Heart },
              { label: "Rating", value: "5.0", icon: Award },
              { label: "Support", value: "24/7", icon: Zap },
            ].map((stat, idx) => (
              <div key={idx}>
                <div
                  className={`w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center ${secondary} text-white`}
                >
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
