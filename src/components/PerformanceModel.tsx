"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PerformanceModel() {
  const features = [
    {
      icon: "/icons/speedometer.svg",
      title: "Speed to Insight",
      color: "from-[#45AFC5] to-blue-500"
    },
    {
      icon: "/icons/pen.svg",
      title: "Speed to Create",
      color: "from-[#DF5E99] to-pink-500"
    },
    {
      icon: "/icons/growth.svg",
      title: "Speed to Optimize",
      color: "from-[#45AFC5] to-blue-500"
    },
    {
      icon: "/icons/rocket.svg",
      title: "Speed to Launch",
      color: "from-[#DF5E99] to-pink-500"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-[100vw] py-20 md:py-30 px-4 relative overflow-hidden"
    >
      {/* Subtle Background Curves */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-20" viewBox="0 0 400 400">
          <circle cx="400" cy="0" r="350" fill="none" stroke="url(#curve-gradient)" strokeWidth="2" />
          <defs>
            <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#45AFC5" />
              <stop offset="100%" stopColor="#DF5E99" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 w-1/3 h-full opacity-15" viewBox="0 0 300 300">
          <ellipse cx="0" cy="300" rx="250" ry="200" fill="none" stroke="url(#curve-gradient-2)" strokeWidth="2" />
          <defs>
            <linearGradient id="curve-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DF5E99" />
              <stop offset="100%" stopColor="#45AFC5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-[90vw] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Content - Headline & Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="font-bold text-slate-800 leading-tight">
              A Performance Model That Scales.
            </h2>

            <p className="text-body-base md:text-body-lg text-slate-600 leading-relaxed font-medium">
              Traditional marketing approaches fail to keep pace with today&apos;s rapidly evolving
              digital landscape. Our proven methodology combines speed, precision, and scalability
              to deliver consistent results across all your marketing channels.
            </p>

            <p className="text-body-sm text-slate-500 leading-relaxed">
              We don&apos;t just run campaigns — we build growth engines that adapt and expand
              with your business, ensuring sustained competitive advantage in an increasingly
              crowded marketplace.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#45AFC5] font-semibold text-body-base mt-4"
            >
              Explore Our Methodology
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>

          {/* Right Content - 2x2 Feature Cards Grid with Offset */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Top Row - Offset Left */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 lg:-ml-12">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden ${index % 2 === 0
                      ? "bg-gradient-to-br from-[#45AFC5] to-blue-600"
                      : "bg-gradient-to-br from-[#DF5E99] to-pink-600"
                    }`}
                >
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col justify-center items-center p-5">
                    {/* SVG Icon Container */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-5 bg-white/20 backdrop-blur-sm">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="h-10 w-10 md:h-12 md:w-12 text-white"
                      />
                    </div>

                    {/* Title */}
                    <h4 className="font-bold text-white mb-2 md:mb-3">
                      {feature.title}
                    </h4>
                    {/* Arrow Button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-white/90 font-medium text-body-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>

                  {/* Subtle Pattern Overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="80" cy="20" r="40" fill="white" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row - Normal Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.slice(2, 4).map((feature, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden ${(index + 2) % 2 === 0
                      ? "bg-gradient-to-br from-[#45AFC5] to-blue-600"
                      : "bg-gradient-to-br from-[#DF5E99] to-pink-600"
                    }`}
                >
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col justify-center items-center p-5">
                    {/* SVG Icon Container */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-5 bg-white/20 backdrop-blur-sm">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="h-10 w-10 md:h-12 md:w-12 text-white"
                      />
                    </div>

                    {/* Title */}
                    <h4 className="font-bold text-white mb-2 md:mb-3">
                      {feature.title}
                    </h4>

                    {/* Arrow Button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-white/90 font-medium text-body-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>

                  {/* Subtle Pattern Overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="80" cy="20" r="40" fill="white" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
