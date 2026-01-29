"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Globe, Zap, Palette, FileText, BarChart } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Paid Search");
  const sectionRef = useRef<HTMLDivElement>(null);

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
    },
    "DSP": {
      title: "Demand Side Platform",
      description: "Leverage programmatic advertising to reach your target audience with precision across premium inventory.",
      features: ["Programmatic Buying", "Real-Time Bidding", "Audience Segments", "Brand Safety"]
    },
    "Creative": {
      title: "Creative Services",
      description: "Stunning visuals and compelling creative that captures attention and drives engagement across all channels.",
      features: ["Ad Creative Design", "Video Production", "A/B Testing", "Brand Guidelines"]
    },
    "Content Marketing": {
      title: "Content Marketing Strategy",
      description: "Build authority and trust with strategic content that educates, engages, and converts your target audience.",
      features: ["Content Strategy", "Blog Writing", "Social Content", "Email Marketing"]
    },
    "CRO": {
      title: "Conversion Rate Optimization",
      description: "Turn more visitors into customers with data-driven testing and optimization of your digital experience.",
      features: ["A/B Testing", "User Research", "Landing Pages", "Funnel Analysis"]
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent] || tabContent["Paid Search"];

  // Scroll-based tab activation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // This is a simple implementation - in a real scenario with multiple sections,
            // you'd track which section is currently in view
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-20 px-4" 
      ref={sectionRef}
    >
      {/* Main Card Container with Gradient Background */}
      <div className=" bg-gradient-to-br from-pink-300 via-purple-100 to-cyan-300 rounded-[3rem] border border-white/50 shadow-2xl p-6 md:p-8 lg:p-12 w-[90vw] mx-auto relative overflow-hidden">
        
        {/* Subtle Wave Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="url(#gradient-wave)" fillOpacity="0.4" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <defs>
              <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DF5E99" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#45AFC5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
          >
            <h2 className="font-bold text-slate-800 mb-4">
              Services We Provide
            </h2>
            <p className="text-body-base md:text-body-lg text-slate-600 max-w-2xl mx-auto px-4 font-medium">
              Comprehensive digital marketing solutions tailored to scale your ecommerce business
            </p>
          </motion.div>

          {/* Pill-Shaped Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {tabs.map((tab) => (
              <motion.button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-body-sm md:text-btn transition-all duration-300 ${
                  activeTab === tab.name
                    ? "bg-gradient-to-r from-teal-400 to-pink-500 text-white shadow-lg"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                <tab.icon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="whitespace-nowrap">{tab.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Split-Pane Layout (60/40) */}
          <div className="grid lg:grid-cols-[60%_40%] gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="space-y-5 md:space-y-6 order-2 lg:order-1"
              >
                <h3 className="font-bold text-slate-800">
                  {currentContent.title}
                </h3>

                <p className="text-body-base text-slate-600 leading-relaxed font-medium">
                  {currentContent.description}
                </p>

                <ul className="space-y-3 md:space-y-4">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-teal-400 to-pink-500 rounded-full flex-shrink-0"></div>
                      <span className="text-body-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-400 to-pink-500 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-body-sm md:text-btn shadow-lg inline-flex items-center gap-2"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Right Column - Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl inner-shadow bg-white/50">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-pink-500/20 rounded-[2.5rem] blur-xl"></div>
                
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-[2rem] p-6 md:p-8">
                  {/* Laptop Mockup */}
                  <div className="relative">
                    <div className="bg-gray-800 rounded-t-xl md:rounded-t-2xl p-3 md:p-4">
                      <div className="bg-white rounded-lg p-4 md:p-6 h-48 md:h-64">
                        <div className="flex items-center space-x-2 mb-3 md:mb-4">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3 md:p-4 mb-3 md:mb-4">
                          <div className="flex items-center space-x-2">
                            <Search className="h-4 w-4 text-gray-400" />
                            <div className="text-sm text-gray-600">ecommerce marketing strategies</div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="h-4 bg-gradient-to-r from-teal-400 to-pink-500 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700 h-4 rounded-b-xl md:rounded-b-2xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
