"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  TrendingUp,
  Heart,
  MapPin,
  Phone,
  Mail,
  Globe
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize customer satisfaction above everything else",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Every repair comes with our comprehensive warranty",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround times for all appliance repairs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: "Expert Team",
      description: "Certified technicians with years of experience",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const milestones = [
    { year: "2008", title: "Company Founded", description: "Started with a vision to provide reliable appliance repair services" },
    { year: "2012", title: "Expanded Services", description: "Added more appliance types and brand certifications" },
    { year: "2016", title: "Dubai Expansion", description: "Opened our main office in Dubai with a team of 20 technicians" },
    { year: "2020", title: "Digital Transformation", description: "Launched online booking and digital service tracking" },
    { year: "2023", title: "Market Leader", description: "Became the most trusted appliance repair service in UAE" }
  ];

  const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & CEO",
      experience: "15+ years",
      specialty: "Business Strategy"
    },
    {
      name: "Sarah Al-Rashid",
      role: "Technical Director",
      experience: "12+ years",
      specialty: "Appliance Engineering"
    },
    {
      name: "Mohammed Khan",
      role: "Operations Manager",
      experience: "10+ years",
      specialty: "Service Operations"
    },
    {
      name: "Fatima Ali",
      role: "Customer Success",
      experience: "8+ years",
      specialty: "Customer Relations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl float"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl float-delay-1"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-responsive-xl font-bold mb-6">
              About <span className="gradient-text">Emirates Service Center</span>
            </h1>
            <p className="text-responsive-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading appliance repair service in Dubai with over 15 years of experience. 
              We're committed to excellence, innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide exceptional appliance repair services that exceed customer expectations, 
                while maintaining the highest standards of quality, reliability, and professionalism.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe every home deserves appliances that work perfectly, and we're here to make that happen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To become the most trusted and innovative appliance repair service provider in the UAE, 
                  setting industry standards for excellence and customer satisfaction.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
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
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 shadow-lg`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming the leading appliance repair service in Dubai
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8 ml-auto'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full ${index % 2 === 0 ? '-right-1.5' : '-left-1.5'}`}></div>
                    
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional service
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
                <div className="card-hover bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-semibold mb-2">{member.role}</div>
                  <div className="text-sm text-gray-500 mb-2">{member.experience}</div>
                  <div className="text-sm text-gray-600">{member.specialty}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Repairs Completed" },
              { number: "100+", label: "Expert Technicians" },
              { number: "99%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
              Ready to Experience <span className="gradient-text">Quality Service?</span>
            </h2>
            <p className="text-responsive-md text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their appliance repairs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-modern px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +971 56 239 7004
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                Get Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}