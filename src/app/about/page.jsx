"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  Star, 
  Shield,
  CheckCircle,
  Phone,
  MessageCircle,
  Award,
  Heart,
  Target
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Customers",
      description: "Satisfied customers across the region"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Service",
      description: "Available anytime you need us"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      description: "Consistently excellent service"
    },
    {
      icon: Shield,
      number: "90 Days",
      label: "Warranty Guaranteed",
      description: "Peace of mind with every repair"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond to ensure you're happy with our service."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in every repair, using quality parts and expert techniques."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can count on us to be there when you need us, with honest pricing and dependable service."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're proud to serve our local community with professional appliance repair services."
    }
  ];

  const team = [
    {
      name: "Ahmed Hassan",
      role: "Lead Technician",
      experience: "15+ years",
      avatar: "A"
    },
    {
      name: "Sarah Johnson",
      role: "Service Manager",
      experience: "12+ years",
      avatar: "S"
    },
    {
      name: "Mohammed Ali",
      role: "Senior Technician",
      experience: "10+ years",
      avatar: "M"
    },
    {
      name: "Fatima Rahman",
      role: "Customer Support",
      experience: "8+ years",
      avatar: "F"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Quick Fix Pro
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional appliance repair service with a commitment to excellence and customer satisfaction
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to provide reliable, professional appliance repair services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Trusted Appliance Repair Experts
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quick Fix Pro was established with a simple mission: to provide professional, 
                reliable appliance repair services that customers can trust. We understand that 
                when your appliances break down, it can disrupt your daily routine and cause 
                unnecessary stress.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of certified technicians has years of experience working with all major 
                appliance brands. We use only genuine parts and follow manufacturer guidelines 
                to ensure your appliances are repaired correctly and safely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're proud to serve our community with honest pricing, transparent communication, 
                and exceptional customer service. Your satisfaction is our top priority.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  "Certified technicians with brand training",
                  "Genuine manufacturer parts",
                  "90-day warranty on all repairs",
                  "Same day service available",
                  "24/7 emergency support",
                  "Transparent pricing - no hidden fees"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                    <span className="text-emerald-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to providing excellent service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.experience} experience
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience Our Service?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-emerald-100 mb-8"
          >
            Get professional appliance repair services with guaranteed results
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-white text-emerald-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Get Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}