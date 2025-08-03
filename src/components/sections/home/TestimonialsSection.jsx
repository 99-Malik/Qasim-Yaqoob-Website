"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const brandColors = {
  lg: {
    gradientFrom: "#a50034",
    gradientTo: "#a50034",
    fill: "#a50034",
    text: "#a50034",
  },
  samsung: {
    gradientFrom: "#1428a0",
    gradientTo: "#1428a0",
    fill: "#1428a0",
    text: "#1428a0",
  },
  bosch: {
    gradientFrom: "#ed1c24",
    gradientTo: "#ed1c24",
    fill: "#ed1c24",
    text: "#ed1c24",
  },
  siemens: {
    gradientFrom: "#009999",
    gradientTo: "#009999",
    fill: "#009999",
    text: "#009999",
  },
  default: {
    gradientFrom: "#10b981",
    gradientTo: "#14b8a6",
    fill: "#10b981",
    text: "#10b981",
  },
};

const TestimonialsSection = ({ brand = "default" }) => {
  const brandTheme = brandColors[brand] || brandColors.default;

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      role: "Homeowner",
      content:
        "Appliances Experts AE saved me from buying a new washing machine. Their technician was professional, knowledgeable, and fixed the issue in under an hour. Highly recommended!",
      rating: 5,
      avatar: "A",
    },
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      content:
        "We rely on our commercial appliances daily. Appliances Experts AE has been our go-to service for years. Fast, reliable, and always professional.",
      rating: 5,
      avatar: "S",
    },
    {
      name: "Mohammed Hassan",
      role: "Property Manager",
      content:
        "Managing multiple properties means dealing with appliance issues regularly. Appliances Experts AE's team is always available and gets the job done right the first time.",
      rating: 5,
      avatar: "M",
    },
    {
      name: "Fatima Al Zahra",
      role: "Homeowner",
      content:
        "Excellent service! The technician was on time, diagnosed the refrigerator problem quickly, and had it working perfectly. Will definitely use them again.",
      rating: 5,
      avatar: "F",
    },
    {
      name: "David Chen",
      role: "Business Owner",
      content:
        "Professional service from start to finish. They fixed our AC system quickly and the price was fair. Great communication throughout the process.",
      rating: 5,
      avatar: "D",
    },
    {
      name: "Aisha Rahman",
      role: "Homeowner",
      content:
        "I was worried about my oven not working before a big dinner party. Appliances Experts AE came through and fixed it same day. Amazing service!",
      rating: 5,
      avatar: "A",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 mb-6 text-white"
            style={{
              background: `linear-gradient(to right, ${brandTheme.gradientFrom}, ${brandTheme.gradientTo})`,
            }}
          >
            <Quote className="w-5 h-5" />
            <span className="text-sm font-medium">Customer Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our service.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ fill: brandTheme.fill, color: brandTheme.fill }}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{
                    background: `linear-gradient(to right, ${brandTheme.gradientFrom}, ${brandTheme.gradientTo})`,
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Happy Customers", value: "10,000+" },
              { label: "Average Rating", value: "4.9/5" },
              { label: "Emergency Service", value: "24/7" },
            ].map((stat, index) => (
              <div key={index}>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: brandTheme.text }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
