"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart,
  MapPin,
  Clock,
  DollarSign,
  Send
} from "lucide-react";

export default function CareersPage() {
  const positions = [
    {
      title: "Appliance Repair Technician",
      type: "Full-time",
      location: "Dubai, UAE",
      experience: "3+ years",
      salary: "Competitive",
      description: "We're looking for experienced technicians to join our team. Must have experience with major appliance brands and excellent customer service skills.",
      requirements: [
        "Certified technician with 3+ years experience",
        "Experience with major appliance brands",
        "Excellent customer service skills",
        "Valid UAE driving license",
        "Willingness to work flexible hours"
      ]
    },
    {
      title: "Customer Service Representative",
      type: "Full-time",
      location: "Dubai, UAE",
      experience: "2+ years",
      salary: "Competitive",
      description: "Join our customer service team to help customers with scheduling, quotes, and support. Bilingual (English/Arabic) preferred.",
      requirements: [
        "2+ years customer service experience",
        "Excellent communication skills",
        "Bilingual (English/Arabic) preferred",
        "Problem-solving abilities",
        "Experience with CRM systems"
      ]
    },
    {
      title: "Service Manager",
      type: "Full-time",
      location: "Dubai, UAE",
      experience: "5+ years",
      salary: "Competitive",
      description: "Lead our service team and ensure excellent customer satisfaction. Manage technicians, scheduling, and quality control.",
      requirements: [
        "5+ years management experience",
        "Appliance repair industry knowledge",
        "Strong leadership skills",
        "Excellent organizational abilities",
        "Experience with service management software"
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Attractive compensation package with performance bonuses"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling options"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance and wellness programs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Our
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Build your career with the leading appliance repair company in the UAE
          </motion.p>
        </div>
      </section>

      {/* Company Culture */}
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
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building a team of passionate professionals who love what they do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help us provide excellent service to our customers
            </p>
          </motion.div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Apply Now
                  </motion.button>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {position.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to join our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Send your resume and cover letter to careers@quickfixpro.ae"
              },
              {
                step: "2",
                title: "Interview Process",
                description: "We'll review your application and schedule an interview"
              },
              {
                step: "3",
                title: "Join Our Team",
                description: "Successful candidates will receive an offer and start their journey"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Join Our Team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Send your resume to careers@quickfixpro.ae or call us for more information
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Resume
            </button>
            <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              Contact HR
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 