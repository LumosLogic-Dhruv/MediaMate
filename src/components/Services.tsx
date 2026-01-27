"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Globe, Zap, Palette, FileText, BarChart } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Paid Search");

  const tabs = [
    { name: "Paid Search", icon: Search },
    { name: "Paid Social", icon: Users },
    { name: "SEO", icon: Globe },
    { name: "DSP", icon: Zap },
    { name: "Creative", icon: Palette },
    { name: "Content Marketing", icon: FileText },
    { name: "CRO", icon: BarChart }
  ];

  const tabContent = {
    "Paid Search": {
      title: "Precision Paid Search Campaigns",
      description: "Drive qualified traffic and maximize ROI with data-driven search campaigns that convert browsers into buyers.",
      features: ["Keyword Research & Strategy", "Ad Copy Optimization", "Bid Management", "Landing Page Alignment"]
    },
    "Paid Social": {
      title: "Social Media Advertising",
      description: "Reach your audience where they spend their time with engaging social campaigns across all major platforms.",
      features: ["Multi-Platform Campaigns", "Audience Targeting", "Creative Testing", "Social Commerce"]
    },
    "SEO": {
      title: "Search Engine Optimization",
      description: "Build long-term organic visibility and authority with comprehensive SEO strategies that drive sustainable growth.",
      features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"]
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent] || tabContent["Paid Search"];

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Services We Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to scale your ecommerce business
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-8 py-5 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.name
                    ? "bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="whitespace-nowrap">{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-800">
                {currentContent.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentContent.description}
              </p>
              
              <ul className="space-y-3">
                {currentContent.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] text-white px-8 py-3 rounded-full font-medium"
              >
                Learn More
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#DF5E99]/20 to-[#45AFC5]/20 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-gray-800 rounded-t-2xl p-4">
                <div className="bg-white rounded-lg p-6 h-64">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <div className="text-sm text-gray-600">ecommerce marketing strategies</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-700 h-4 rounded-b-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

