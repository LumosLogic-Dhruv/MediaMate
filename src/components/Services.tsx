"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Globe, Zap, Palette, FileText, BarChart } from "lucide-react";
import { resources } from "@/data/resources";

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
    { name: "CRO", icon: BarChart },
  ];

  const tabContent = {
    "Paid Search": {
      title: "Precision Paid Search Campaigns",
      description:
        "Drive qualified traffic and maximize ROI with data-driven search campaigns that convert browsers into buyers.",
      features: ["Keyword Research & Strategy", "Ad Copy Optimization", "Bid Management", "Landing Page Alignment"],
    },
    "Paid Social": {
      title: "Social Media Advertising",
      description:
        "Reach your audience where they spend their time with engaging social campaigns across all major platforms.",
      features: ["Multi-Platform Campaigns", "Audience Targeting", "Creative Testing", "Social Commerce"],
    },
    SEO: {
      title: "Search Engine Optimization",
      description:
        "Build long-term organic visibility and authority with comprehensive SEO strategies that drive sustainable growth.",
      features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
    },
    DSP: {
      title: "Demand Side Platform",
      description:
        "Leverage programmatic advertising to reach your target audience with precision across premium inventory.",
      features: ["Programmatic Buying", "Real-Time Bidding", "Audience Segments", "Brand Safety"],
    },
    Creative: {
      title: "Creative Services",
      description:
        "Stunning visuals and compelling creative that captures attention and drives engagement across all channels.",
      features: ["Ad Creative Design", "Video Production", "A/B Testing", "Brand Guidelines"],
    },
    "Content Marketing": {
      title: "Content Marketing Strategy",
      description:
        "Build authority and trust with strategic content that educates, engages, and converts your target audience.",
      features: ["Content Strategy", "Blog Writing", "Social Content", "Email Marketing"],
    },
    CRO: {
      title: "Conversion Rate Optimization",
      description:
        "Turn more visitors into customers with data-driven testing and optimization of your digital experience.",
      features: ["A/B Testing", "User Research", "Landing Pages", "Funnel Analysis"],
    },
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

  // Handle keyboard navigation for tabs
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const tabCount = tabs.length;
    let newIndex = index;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      newIndex = (index + 1) % tabCount;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      newIndex = (index - 1 + tabCount) % tabCount;
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newIndex = tabCount - 1;
    }

    if (newIndex !== index) {
      setActiveTab(tabs[newIndex].name);
      // Focus the new tab
      const tabButtons = document.querySelectorAll('[role="tab"]');
      (tabButtons[newIndex] as HTMLElement)?.focus();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-16 px-4"
      ref={sectionRef}
      id="services"
      aria-label="Our Services"
    >
      {/* Main Card Container with Gradient Background */}
      <div className="bg-gradient-to-r from-pink-300 via-purple-100 to-cyan-300 rounded-[3rem] border border-white/50 shadow-2xl p-6 md:p-8 lg:p-10 w-[90vw] mx-auto relative overflow-hidden">
        {/* Content Container */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-8 max-w-4xl mx-auto"
          >
            <h2 className="font-bold text-slate-800 mb-4">Services We Provide</h2>
          </motion.div>

          {/* Pill-Shaped Navigation Tabs */}
          <div
            className="flex flex-nowrap justify-start lg:justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16 bg-white py-3 sm:py-4 px-3 sm:px-4 rounded-[2rem] sm:rounded-full shadow-inner w-full max-w-6xl mx-auto overflow-x-auto overflow-y-hidden scrollbar-hide"
            role="tablist"
            aria-label="Service categories"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role="tab"
                aria-selected={activeTab === tab.name}
                aria-controls={`tabpanel-${tab.name.toLowerCase().replace(/\s+/g, "-")}`}
                id={`tab-${tab.name.toLowerCase().replace(/\s+/g, "-")}`}
                tabIndex={activeTab === tab.name ? 0 : -1}
                className={`flex-shrink-0 flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-full font-semibold text-xs sm:text-body-sm md:text-btn transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
                  activeTab === tab.name
                    ? "bg-gradient-to-r from-[#EB5896] to-[#3CB4C7] text-white shadow-lg"
                    : " text-slate-800 hover:bg-slate-200"
                }`}
              >
                <tab.icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" aria-hidden="true" />
                <span className="whitespace-nowrap">{tab.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Split-Pane Layout (60/40) */}
          <div className="grid lg:grid-cols-[60%_40%] gap-8 md:gap-12 items-center container mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="space-y-5 md:space-y-6 order-2 lg:order-1"
                role="tabpanel"
                id={`tabpanel-${activeTab.toLowerCase().replace(/\s+/g, "-")}`}
                aria-labelledby={`tab-${activeTab.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <h3 className="font-bold text-slate-800">{currentContent.title}</h3>

                <p className="text-body-base text-slate-600 leading-relaxed font-medium">{currentContent.description}</p>

                <ul className="space-y-3 md:space-y-4" role="list">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div
                        className="w-2.5 h-2.5 bg-gradient-to-r from-teal-400 to-pink-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      ></div>
                      <span className="text-body-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#EB5896] to-[#3CB4C7] text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-body-sm md:text-btn shadow-lg inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  Learn More
                  <span aria-hidden="true">→</span>
                </motion.a>
              </motion.div>
            </AnimatePresence>

            {/* Right Column - Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
              aria-hidden="true"
            >
              <div className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[52vh] relative rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl bg-white/50">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-pink-500/20 rounded-[2.5rem] blur-xl"></div>
                <img
                  src={resources.heroImg1.src}
                  alt={resources.heroImg1.alt}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
