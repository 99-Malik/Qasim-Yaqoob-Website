"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Clock, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "Service Agreement",
      content: [
        "We provide appliance repair services as described",
        "All services are subject to availability",
        "We reserve the right to refuse service",
        "Emergency services are available 24/7"
      ]
    },
    {
      icon: Shield,
      title: "Warranty & Guarantees",
      content: [
        "All repairs come with 90-day warranty",
        "Parts used are genuine or equivalent quality",
        "Warranty covers workmanship and parts",
        "Warranty does not cover misuse or accidents"
      ]
    },
    {
      icon: Clock,
      title: "Appointments & Scheduling",
      content: [
        "Appointments are scheduled based on availability",
        "We provide estimated arrival times",
        "Cancellations require 24-hour notice",
        "Emergency repairs may have priority"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "We are not liable for consequential damages",
        "Liability is limited to repair costs",
        "We are not responsible for data loss",
        "Customer assumes risk for appliance operation"
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
            Terms of
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Service
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Please read these terms carefully before using our services.
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
              Agreement to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By using Emirates Service Center's appliance repair services, you agree to be bound by these Terms of Service. 
              These terms govern your use of our services and form a legally binding agreement between you and Emirates Service Center.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mt-8 border border-emerald-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Important Information
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Payment Terms:</strong> Payment is due upon completion of services. We accept cash, credit cards, and bank transfers.
              </p>
              <p>
                <strong>Cancellation Policy:</strong> Cancellations must be made 24 hours in advance. Late cancellations may incur a fee.
              </p>
              <p>
                <strong>Emergency Services:</strong> Emergency repairs are available 24/7 but may incur additional charges.
              </p>
              <p>
                <strong>Safety:</strong> We prioritize safety in all repairs. If we determine a repair is unsafe, we will not proceed.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mt-8 border border-blue-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Questions About Terms?
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Address:</strong> Dubai, UAE</p>
              <p><strong>Phone:</strong> +971 56 239 7004</p>
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
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