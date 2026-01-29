"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { resources } from "@/data/resources";

export default function SuccessStories() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  
  const stories = [
    {
      logo: resources.googleLogo.src,
      company: "TechStart",
      metric1: "85%",
      title1: "Increase App Installation",
      metric2: "50%",
      title2: "Increase in Daily Active User"
    },
    {
      logo: resources.metaLogo.src,
      company: "AppFlow",
      metric1: "127%",
      title1: "Increase App Installation",
      metric2: "73%",
      title2: "Increase in Daily Active User"
    },
    {
      logo: resources.shopifyLogo.src,
      company: "EcomPlus",
      metric1: "200%",
      title1: "Increase App Installation",
      metric2: "95%",
      title2: "Increase in Daily Active User"
    },
    {
      logo: resources.microsoftLogo.src,
      company: "ScaleUp",
      metric1: "156%",
      title1: "Increase App Installation",
      metric2: "82%",
      title2: "Increase in Daily Active User"
    },
    {
      logo: resources.nvidiaLogo.src,
      company: "GrowthCo",
      metric1: "178%",
      title1: "Increase App Installation",
      metric2: "64%",
      title2: "Increase in Daily Active User"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-[100vw] py-16 md:py-20 px-4 bg-white"
      id="success-stories"
      aria-labelledby="success-stories-heading"
    >
      <div className="w-[90vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="success-stories-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real results from real clients who trusted us to scale their business
          </p>
        </motion.div>

        {/* Auto-scrolling container with drag support */}
        <div 
          ref={constraintsRef}
          className="relative w-full mx-auto cursor-grab active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            animate={{ x: [0, -100 * stories.length] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            whileTap={{ cursor: "grabbing" }}
            whileHover={{ animationPlayState: "paused" }}
            className="flex gap-4 md:gap-6 lg:gap-8"
            style={{ width: `${(stories.length + 3) * 320}px` }}
          >
            {[...stories, ...stories, ...stories].map((story, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 text-center group cursor-pointer shadow-2xl min-w-[350px] md:min-w-[400px]"
              >
                <div className="w-full h-[200] rounded-xl md:rounded-2xl border border-gray-500 flex justify-center items-center mb-5">
                  <div className="w-auto h-auto overflow-hidden p-5">
                    <Image
                      src={story.logo}
                      alt={`${story.company} logo`}
                      width={120}
                      height={50}
                      quality={60}
                      sizes="(max-width: 768px) 100px, 120px"
                      className="w-full h-full object-contain"
                    />
                  </div>
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
                  className="flex items-center border px-5 py-2 rounded-full justify-center space-x-2 text-[#DF5E99] font-medium group-hover:text-[#45AFC5] transition-colors mx-auto text-sm md:text-base"
                  style={{ border: "linear-gradient(135deg, #DF5E99 0%, #45AFC5 100%)" }}
                  aria-label={`Learn more about ${story.company} success story`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
