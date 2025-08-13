"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+971 56 239 7004",
      href: "tel:+971562397004",
      description: "24/7 Emergency Service"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dubai, UAE",
      href: "#",
      description: "Serving Dubai & Abu Dhabi"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "24/7 Available",
      href: "#",
      description: "Emergency repairs anytime"
    }
  ];

  const services = [
    "TV & Electronics Repair",
    "Washing Machine Repair",
    "Refrigerator Repair",
    "Dishwasher Repair",
    "Oven & Stove Repair",
    "AC & HVAC Repair",
    "Dryer Repair",
    "Microwave Repair"
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
            Contact
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Emirates Repair Center
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch with us for professional appliance repair services
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white mb-4">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <a
                  href={info.href}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 block mb-1"
                >
                  {info.value}
                </a>
                <p className="text-sm text-gray-600">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Describe your appliance issue..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mt-8 border border-emerald-200">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Service Area
                  </h3>
                  <p className="text-gray-600">
                    Dubai, Abu Dhabi, Sharjah & Surrounding Areas
                  </p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Emergency Service
                </h3>
                <p className="text-red-700 mb-4">
                  Need immediate assistance? Call our 24/7 emergency hotline:
                </p>
                <a
                  href="tel:+971562397004"
                  className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors duration-300"
                >
                  +971 50 123 4567
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-blue-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Emergency:</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Don't wait until your appliance completely breaks down
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
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
