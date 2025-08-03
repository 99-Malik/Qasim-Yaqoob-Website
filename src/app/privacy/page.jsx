"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number)",
        "Service request details and appliance information",
        "Payment and billing information",
        "Website usage data and cookies"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide appliance repair services",
        "To communicate about appointments and services",
        "To process payments and invoices",
        "To improve our services and website"
      ]
    },
    {
      icon: Shield,
      title: "Data Protection",
      content: [
        "We use industry-standard security measures",
        "Your data is encrypted and securely stored",
        "We never sell or share your personal information",
        "You can request data deletion at any time"
      ]
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: [
        "Access your personal data",
        "Request correction of inaccurate data",
        "Request deletion of your data",
        "Opt-out of marketing communications"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 mt-12">
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
            Privacy
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Your privacy is important to us. Learn how we protect your information.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Quick Fix Pro, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our appliance repair services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in transparency and want you to understand how your information is handled. 
              This policy applies to all services provided by Quick Fix Pro and our website.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mt-8 border border-emerald-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Us About Privacy
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> privacy@quickfixpro.ae</p>
              <p><strong>Phone:</strong> +971 50 123 4567</p>
              <p><strong>Address:</strong> Dubai, UAE</p>
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-gray-500"
          >
            <p>Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 