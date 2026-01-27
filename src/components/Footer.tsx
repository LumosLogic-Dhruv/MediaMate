"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const services = [
    "Paid Search",
    "Paid Social", 
    "SEO",
    "DSP",
    "Creative",
    "Content Marketing",
    "CRO"
  ];

  const company = [
    "Home",
    "About Us",
    "Our Stories",
    "Success Stories",
    "Contact",
    "Privacy Policy",
    "Terms of Service"
  ];

  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* Copyright at top */}
        <div className="text-center mb-12">
          <div className="text-gray-400 text-sm">
            © 2026 Media Mates. All Rights Reserved.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] bg-clip-text text-transparent">
              MediaMate
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold">
              Ready to Scale?
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Let precision marketing take your brand to next level. Get started with a free consultation and discover how we can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#DF5E99]/50 text-white placeholder:text-gray-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] text-white px-8 py-3 rounded-full font-medium flex items-center justify-center space-x-2"
              >
                <span>Submit</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}