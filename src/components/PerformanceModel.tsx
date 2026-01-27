"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Target, Rocket } from "lucide-react";

export default function PerformanceModel() {
  const features = [
    {
      icon: Zap,
      title: "Speed to Insight",
      description: "Get actionable data insights in real-time to make informed decisions faster",
      color: "from-[#45AFC5] to-blue-500",
      position: "top-left"
    },
    {
      icon: Palette,
      title: "Speed to Create", 
      description: "Rapid creative development and testing to maximize campaign performance",
      color: "from-[#DF5E99] to-pink-500",
      position: "top-right"
    },
    {
      icon: Target,
      title: "Speed to Optimize",
      description: "Continuous optimization based on performance data and market trends", 
      color: "from-[#DF5E99] to-pink-500",
      position: "bottom-left"
    },
    {
      icon: Rocket,
      title: "Speed to Launch",
      description: "Quick campaign deployment across all channels for maximum market impact",
      color: "from-[#45AFC5] to-blue-500", 
      position: "bottom-right"
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              A Performance Model That{" "}
              <span className="bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] bg-clip-text text-transparent">
                Scales
              </span>
              .
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Our proven methodology combines speed, precision, and scalability to deliver 
              consistent results across all your marketing channels. We don't just run campaigns - 
              we build growth engines.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] rounded-full"></div>
                <span className="text-gray-700">Data-driven decision making</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] rounded-full"></div>
                <span className="text-gray-700">Rapid testing and iteration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] rounded-full"></div>
                <span className="text-gray-700">Scalable growth strategies</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 2x2 Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Top Row - Offset Left */}
              <div className="col-span-2 grid grid-cols-2 gap-6 -ml-8">
                {features.slice(0, 2).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group cursor-pointer hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row - Normal Position */}
              <div className="col-span-2 grid grid-cols-2 gap-6">
                {features.slice(2, 4).map((feature, index) => (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group cursor-pointer hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}