"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { resources } from "@/data/resources";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

export default function Insights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const insights = [
    {
      image: resources.insightsImg1.src,
      category: "Performance Marketing",
      title: "5 Strategies to Scale Your Ecommerce Business in 2024"
    },
    {
      image: resources.insightsImg2.src,
      category: "SEO",
      title: "The Complete Guide to Ecommerce SEO Optimization"
    },
    {
      image: resources.insightsImg3.src,
      category: "Paid Social",
      title: "Maximizing ROI with Advanced Facebook Ad Strategies"
    },
    {
      image: resources.insightsImg1.src,
      category: "Analytics",
      title: "Data-Driven Decision Making for Ecommerce Growth"
    },
    {
      image: resources.insightsImg2.src,
      category: "CRO",
      title: "Conversion Rate Optimization Best Practices"
    }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate width of one original set for seamless looping
    const totalWidth = slider.scrollWidth / 3;
    
    // Proxy element to track drag movement
    const proxy = document.createElement("div");

    // 1. Setup the Infinite Auto-Scroll
    const animation = gsap.to(slider, {
      x: `-=${totalWidth}`,
      duration: 35, // Adjust speed here
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
      }
    });

    // 2. Setup the Manual Drag
    const draggable = Draggable.create(proxy, {
      type: "x",
      trigger: containerRef.current,
      onPress() {
        animation.pause();
        // Sync proxy position with current slider position
        gsap.set(this.target, { x: gsap.getProperty(slider, "x") });
      },
      onDrag() {
        gsap.set(slider, {
          x: this.x % totalWidth,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
          }
        });
      },
      onRelease() {
        // Resume auto-scroll with a smooth ramp-up
        animation.play();
        gsap.fromTo(animation, { timeScale: 0 }, { timeScale: 1, duration: 1.5 });
      }
    });

    // Clean up on unmount
    return () => {
      animation.kill();
      if (draggable[0]) draggable[0].kill();
    };
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-[100vw] py-16 md:py-20 px-4 bg-gradient-to-br from-[#DF5E99]/20 via-[#9B5DE5]/10 to-[#45AFC5]/20 overflow-hidden select-none"
      id="insights"
      aria-labelledby="insights-heading"
    >
      <div className="w-[90vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="insights-heading" className="text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-3 md:mb-4">
            Insights
          </h2>
        </motion.div>

        {/* GSAP Managed Scrolling Container */}
        <div 
          ref={containerRef}
          className="relative w-full mx-auto cursor-grab active:cursor-grabbing touch-pan-y"
        >
          <div
            ref={sliderRef}
            className="flex gap-4 md:gap-6 lg:gap-8"
            style={{ width: "max-content" }}
          >
            {/* Tripled items to ensure no gaps during loop */}
            {[...insights, ...insights, ...insights].map((insight, index) => (
              <article
                key={index}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300 min-w-[350px] md:min-w-[400px] p-5 pointer-events-none"
                style={{width:"25rem"}}
              >
                <div className="relative overflow-hidden h-64 md:h-64 rounded-2xl">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    sizes="(max-width: 768px) 350px, 400px"
                    quality={60}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 md:p-6 pointer-events-auto">
                  <div className="mb-2 md:mb-3">
                    <span className="text-[#45AFC5] rounded-full text-lg font-bold">
                      {insight.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 line-clamp-2 group-hover:text-[#DF5E99] transition-colors leading-tight">
                    {insight.title}
                  </h3>

                  <button
                    className="flex items-center border px-5 py-2 rounded-full justify-center space-x-2 text-[#DF5E99] font-medium hover:text-[#45AFC5] transition-colors text-sm md:text-base border-[#DF5E99]"
                    aria-label={`Read more: ${insight.title}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}