"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=100&h=100",
      company: "TechStart",
      metric1: "85%",
      title1: "Increase App Installation",
      metric2: "50%",
      title2: "Increase in Daily Active User"
    },
    {
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=100&h=100",
      company: "AppFlow",
      metric1: "127%",
      title1: "Increase App Installation",
      metric2: "73%",
      title2: "Increase in Daily Active User"
    },
    {
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=100&h=100",
      company: "EcomPlus",
      metric1: "200%",
      title1: "Increase App Installation",
      metric2: "95%",
      title2: "Increase in Daily Active User"
    },
    {
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=100&h=100",
      company: "ScaleUp",
      metric1: "156%",
      title1: "Increase App Installation",
      metric2: "82%",
      title2: "Increase in Daily Active User"
    },
    {
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=100&h=100",
      company: "GrowthCo",
      metric1: "178%",
      title1: "Increase App Installation",
      metric2: "64%",
      title2: "Increase in Daily Active User"
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 px-4 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real results from real clients who trusted us to scale their business
          </p>
        </motion.div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * stories.length] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-4 md:gap-6 lg:gap-8"
            style={{ width: `${(stories.length + 3) * 320}px` }}
          >
            {[...stories, ...stories, ...stories].map((story, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group cursor-pointer hover:shadow-2xl transition-all duration-300 min-w-[260px] md:min-w-[300px]"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden">
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-3xl md:text-4xl font-bold text-[#DF5E99] mb-1 md:mb-2">
                  {story.metric1}
                </div>

                <div className="text-base md:text-lg text-black mb-4 md:mb-6 font-medium">
                  {story.title1}
                </div>

                <div className="text-3xl md:text-4xl font-bold text-[#45AFC5] mb-1 md:mb-2">
                  {story.metric2}
                </div>

                <div className="text-base md:text-lg text-black mb-6 md:mb-8 font-medium">
                  {story.title2}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 text-[#DF5E99] font-medium group-hover:text-[#45AFC5] transition-colors mx-auto text-sm md:text-base"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
