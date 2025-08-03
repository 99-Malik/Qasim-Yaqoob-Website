"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  MessageCircle
} from "lucide-react";
import { getBrandConfig } from "@/lib/brandConfig";
import { cn } from "@/lib/utils";

const BrandFooter = ({ brand }) => {
  const currentYear = new Date().getFullYear();
  const brandConfig = getBrandConfig(brand);

  const services = [
    { name: "TV & Electronics Repair", href: `/company/${brand}/tv-repair` },
    { name: "Washing Machine Repair", href: `/company/${brand}/washing-machine-repair` },
    { name: "Refrigerator Repair", href: `/company/${brand}/refrigerator-repair` },
    { name: "Dishwasher Repair", href: `/company/${brand}/dishwasher-repair` },
    { name: "Oven & Stove Repair", href: `/company/${brand}/oven-repair` },
    { name: "AC & HVAC Repair", href: `/company/${brand}/ac-repair` },
    { name: "Dryer Repair", href: `/company/${brand}/dryer-repair` },
    { name: "Microwave Repair", href: `/company/${brand}/microwave-repair` },
  ];

  const companyLinks = [
    { name: "About Us", href: `/company/${brand}/about` },
    { name: "Our Services", href: `/company/${brand}/services` },
    { name: "Contact", href: `/company/${brand}/contact` },
    { name: "Privacy Policy", href: `/company/${brand}/privacy` },
    { name: "Terms of Service", href: `/company/${brand}/terms` },
    { name: "Careers", href: `/company/${brand}/careers` },
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
    <footer className={cn("relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden", `border-t-4 ${brandConfig.borderColor}`)}>
      {/* Background Blur Elements */}
      <div className="absolute inset-0">
        <div className={cn("absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br", brandConfig.bgGradient)}></div>
        <div className={cn("absolute top-20 right-10 h-72 w-72 rounded-full bg-gradient-to-r opacity-10 blur-3xl", brandConfig.gradient)}></div>
        <div className={cn("absolute bottom-20 left-10 h-96 w-96 rounded-full bg-gradient-to-r opacity-10 blur-3xl", brandConfig.gradient)}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start flex-col gap-4 mb-6">
              <div className="relative w-32 h-32">
                <Image
                  src={brandConfig.logo}
                  alt={`${brandConfig.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              {/* <div>
                <h3 className="text-xl font-bold">{brandConfig.name}</h3>
                <p className="text-gray-300 text-sm">Authorized Service Center</p>
              </div> */}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional {brandConfig.name} appliance repair services for all major models. Fast, reliable, and guaranteed service that gets your appliances working like new again.
            </p>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <contact.icon className={cn("w-4 h-4", brandConfig.textColor)} />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Wrench className={cn("w-5 h-5", brandConfig.textColor)} />
              Our Services
            </h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={service.href} className="text-gray-300 hover:text-white text-sm block">
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Shield className={cn("w-5 h-5", brandConfig.textColor)} />
              Company
            </h4>
            <div className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="text-gray-300 hover:text-white text-sm block">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA / Quote Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Star className={cn("w-5 h-5", brandConfig.textColor)} />
              Get Started
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Ready to fix your {brandConfig.name} appliance? Get a free quote today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn("w-full bg-gradient-to-r text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2", brandConfig.gradient)}
            >
              <MessageCircle className="w-4 h-4" />
              Get Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full border-2 border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © {currentYear} {brandConfig.name} Service Center. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Authorized {brandConfig.name} Service Provider
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Certification Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
        className="bg-black/20 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Shield className={cn("w-4 h-4", brandConfig.textColor)} />
              <span className="text-sm text-gray-300">Certified {brandConfig.name} Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-gray-300">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className={cn("w-4 h-4", brandConfig.textColor)} />
              <span className="text-sm text-gray-300">Warranty Guaranteed</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default BrandFooter;
