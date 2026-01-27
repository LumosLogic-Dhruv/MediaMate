"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  const insights = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      category: "Performance Marketing",
      title: "5 Strategies to Scale Your Ecommerce Business in 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      category: "SEO",
      title: "The Complete Guide to Ecommerce SEO Optimization"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
      category: "Paid Social",
      title: "Maximizing ROI with Advanced Facebook Ad Strategies"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
      category: "Analytics",
      title: "Data-Driven Decision Making for Ecommerce Growth"
    },
    {
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80",
      category: "CRO",
      title: "Conversion Rate Optimization Best Practices"
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#DF5E99]/10 via-purple-50 to-[#45AFC5]/10">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay ahead of the curve with our expert insights on digital marketing trends and strategies
          </p>
        </motion.div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * insights.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8"
            style={{ width: `${(insights.length + 3) * 350}px` }}
          >
            {[...insights, ...insights, ...insights].map((insight, index) => (
              <motion.article
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300 min-w-[320px]"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {insight.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-6 line-clamp-2 group-hover:text-[#DF5E99] transition-colors leading-tight">
                    {insight.title}
                  </h3>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-[#DF5E99] font-medium group-hover:text-[#45AFC5] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}