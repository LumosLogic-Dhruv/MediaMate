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
    <section className="w-[100vw] py-16 md:py-20 px-4 bg-gradient-to-br from-[#DF5E99]/20 via-[#9B5DE5]/10 to-[#45AFC5]/20">
      <div className="w-[90vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-3 md:mb-4">
            Insights
          </h2>
        </motion.div>

        {/* Auto-scrolling container */}
        <div className="relative w-full mx-auto">
          <motion.div
            animate={{ x: [0, -100 * insights.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-4 md:gap-6 lg:gap-8"
            style={{ width: `${(insights.length + 3) * 350}px` }}
          >
            {[...insights, ...insights, ...insights].map((insight, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300 min-w-[350px] md:min-w-[400px] p-5"
              >
                <div className="relative overflow-hidden h-64 md:h-64 rounded-2xl">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 md:p-6">
                  <div className="mb-2 md:mb-3">
                    <span className=" text-[#45AFC5]  rounded-full text-lg font-bold">
                      {insight.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 line-clamp-2 group-hover:text-[#DF5E99] transition-colors leading-tight">
                    {insight.title}
                  </h3>

                    <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center  border px-5 py-2 rounded-full  justify-center space-x-2 text-[#DF5E99] font-medium group-hover:text-[#45AFC5] transition-colors text-sm md:text-base"
                  style={{ border: "linear-gradient(135deg, #DF5E99 0%, #45AFC5 100%)" }}
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
