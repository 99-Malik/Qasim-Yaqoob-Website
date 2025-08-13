"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Wrench, 
  Shield, 
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Sparkles,
  Crown,
  Zap,
  Target,
  Rocket
} from "lucide-react";
import { sendMessage } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "TV & Electronics Repair", href: "/tv-repair" },
    { name: "Washing Machine Repair", href: "/washing-machine-repair" },
    { name: "Refrigerator Repair", href: "/refrigerator-repair" },
    { name: "Dishwasher Repair", href: "/dishwasher-repair" },
    { name: "Oven & Stove Repair", href: "/oven-repair" },
    { name: "AC & HVAC Repair", href: "/ac-repair" },
    { name: "Dryer Repair", href: "/dryer-repair" },
    { name: "Microwave Repair", href: "/microwave-repair" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Careers", href: "/careers" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+971 56 239 7004", href: "tel:+971562397004" },
    { icon: MapPin, text: "Dubai, UAE", href: "#" },
    { icon: Clock, text: "24/7 Emergency Service", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-950 text-white overflow-hidden">
      {/* Ultra-Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Advanced Grid Pattern */}
        
        {/* Floating 3D Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-white/10 rotate-45 transform-gpu animate-spin-slow opacity-30"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border border-white/8 -rotate-12 transform-gpu animate-spin-slow-reverse opacity-20"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 border border-white/12 rotate-90 transform-gpu animate-spin-slow opacity-25"></div>
        
        {/* Glowing Orb Backgrounds */}
        <div className="absolute top-16 left-8 w-48 h-48 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse-glow-slow opacity-20"></div>
        <div className="absolute bottom-16 right-8 w-64 h-64 bg-gradient-to-l from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse-glow-slow delay-1000 opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-b from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-glow-slow delay-500 opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-20">
        {/* Ultra-Modern Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* Ultra-Modern Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#FB923C] via-[#FB923C] to-[#FB923C] flex items-center justify-center text-black font-black text-2xl shadow-2xl">
                  Q
                </div>
                {/* Glow Effect */}
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">Appliances Experts AE</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
                  <span className="text-sm font-bold text-white/80 uppercase tracking-widest">Elite Solutions</span>
                  <Crown className="h-4 w-4 text-amber-400 animate-pulse delay-500" />
                </div>
              </div>
            </div>
            <p className="text-white/80 mb-8 leading-relaxed text-base">
              Revolutionary appliance repair services for all major brands. Quantum technology, instant expert dispatch, and elite customer experience that transforms your appliances.
            </p>
            
            {/* Ultra-Modern Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 text-white/80 hover:text-white transition-all duration-500 hover:scale-105"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                      <contact.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-400/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-sm font-medium">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Ultra-Modern Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-black mb-8 flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FB923C] to-[#FB923C] flex items-center justify-center shadow-xl">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-r from-[#FB923C] to-[#FB923C] blur-md opacity-50"></div>
              </div>
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Elite Services</span>
            </h4>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.href}
                    className="group flex items-center gap-3 text-white/70 hover:text-white transition-all duration-500 hover:scale-105 py-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                    <span className="text-sm font-medium">{service.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ultra-Modern Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-black mb-8 flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center shadow-xl">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-500 blur-md opacity-50"></div>
              </div>
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Company</span>
            </h4>
            <div className="space-y-4">
              {companyLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-white/70 hover:text-white transition-all duration-500 hover:scale-105 py-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ultra-Modern CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-black mb-8 flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center shadow-xl">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 blur-md opacity-50"></div>
              </div>
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Get Started</span>
            </h4>
            <div className="space-y-6">
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Ready to experience revolutionary appliance repair? Get your elite quote today!
              </p>
              <motion.button
                onClick={sendMessage}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full bg-gradient-to-r from-[#FB923C] via-[#FB923C] to-[#FB923C] text-white font-bold py-4 px-6 rounded-2xl hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10 uppercase tracking-widest text-sm">Get Quote</span>
                <Rocket className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                onClick={sendMessage}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full border-2 border-white/30 text-white font-bold py-4 px-6 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-500 flex items-center justify-center gap-3 backdrop-blur-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10 uppercase tracking-widest text-sm">Call Now</span>
                <Target className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Ultra-Modern Social Links & Bottom Bar */}
        <div className="border-t border-white/10 pt-8 sm:pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-sm font-medium text-white/60">Follow Us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-xl"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-center sm:text-right"
            >
              <p className="text-sm text-white/60">
                © {currentYear} Appliances Experts AE. All rights reserved.
              </p>
              <p className="text-xs text-white/40 mt-1">
                Elite Appliance Repair Services in UAE
              </p>
            </motion.div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
