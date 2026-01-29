"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { resources } from "@/data/resources";

export default function Footer() {
  const [email, setEmail] = useState("");

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
    "Our Stories",
    "Success Stories",
    "Contact",
    "Privacy Policy",
    "Terms of Service"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#1a1a1a] text-white"
    >
      <div className="w-full px-4 py-16 md:py-20">
        <div className="w-[90vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            {/* Left Section - Logo, Headline, Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Company Logo */}
              <div className="relative w-56 h-32 md:w-64 md:h-32 mx-auto lg:mx-0">
                <Image
                  src={resources.logo.src}
                  alt={resources.logo.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Headline */}
              <h2 className="font-bold leading-tight font-montserrat">
                Ready to Scale?
              </h2>

              {/* Supporting Line */}
              <p className="text-body-base md:text-body-lg text-white leading-relaxed max-w-md">
                Let precision marketing take your brand to the next level
              </p>

              {/* Email Input Form */}
              <form onSubmit={handleSubmit} className="pt-4">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 rounded-full bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:border-[#DF5E99] focus:ring-1 focus:ring-[#DF5E99] text-white placeholder:text-gray-500 text-body-base"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap text-btn"
                  >
                    <span>Submit</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Right Section - Link Columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-12 md:gap-16 pt-8 lg:pt-4"
            >
              {/* Services Column */}
              <div>
                <h4 className="text-h5 uppercase tracking-wider text-white mb-8">
                  Services
                </h4>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors text-body-base flex items-center gap-3 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DF5E99] group-hover:bg-[#45AFC5] transition-colors flex-shrink-0" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="text-h5 uppercase tracking-wider text-white mb-8">
                  Company
                </h4>
                <ul className="space-y-4">
                  {company.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors text-body-base flex items-center gap-3 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#45AFC5] group-hover:bg-[#DF5E99] transition-colors flex-shrink-0" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Divider Line */}
          <div className="mt-20 md:mt-20 pt-8 border-t border-gray-800">
            {/* Centered Copyright */}
            <div className="text-center">
              <p className="text-gray-500 text-body-base">
                © {new Date().getFullYear()} MediaMate. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
