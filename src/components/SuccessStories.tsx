"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { resources } from "@/data/resources";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";

// Register Draggable
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

export default function SuccessStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const stories = [
    { logo: resources.googleLogo.src, company: "TechStart", metric1: "85%", title1: "Increase App Installation", metric2: "50%", title2: "Increase in Daily Active User" },
    { logo: resources.metaLogo.src, company: "AppFlow", metric1: "127%", title1: "Increase App Installation", metric2: "73%", title2: "Increase in Daily Active User" },
    { logo: resources.shopifyLogo.src, company: "EcomPlus", metric1: "200%", title1: "Increase App Installation", metric2: "95%", title2: "Increase in Daily Active User" },
    { logo: resources.microsoftLogo.src, company: "ScaleUp", metric1: "156%", title1: "Increase App Installation", metric2: "82%", title2: "Increase in Daily Active User" },
    { logo: resources.nvidiaLogo.src, company: "GrowthCo", metric1: "178%", title1: "Increase App Installation", metric2: "64%", title2: "Increase in Daily Active User" }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // 1. Setup the infinite loop
    const totalWidth = slider.scrollWidth / 3; // Based on triple array
    
    // Create a proxy object to handle the animation progress
    const proxy = document.createElement("div");
    let sliderX = 0;

    const animation = gsap.to(slider, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });

    // 2. Add Draggable functionality
    const draggable = Draggable.create(proxy, {
      type: "x",
      trigger: containerRef.current,
      onPress() {
        animation.pause();
        // Record the current x position to sync with proxy
        gsap.set(this.target, { x: gsap.getProperty(slider, "x") });
      },
      onDrag() {
        // Update slider position based on drag
        gsap.set(slider, {
          x: this.x % totalWidth,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
          }
        });
      },
      onRelease() {
        // Resume auto-scroll from the new position
        animation.play();
        // Optional: Smoothly transition back to the auto-scroll speed
        gsap.fromTo(animation, { timeScale: 0 }, { timeScale: 1, duration: 1 });
      }
    });

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
      className="w-full overflow-hidden py-16 md:py-20 bg-white select-none"
      id="success-stories"
    >
      <div className="w-[90vw] mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Success Stories
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Real results from real clients (Drag to explore)
        </p>
      </div>

      <div 
        ref={containerRef} 
        className="relative w-full cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <div 
          ref={sliderRef}
          className="flex gap-4 md:gap-8 flex-nowrap"
          style={{ width: "max-content" }}
        >
          {/* Tripled items for seamless looping */}
          {[...stories, ...stories, ...stories].map((story, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 text-center shadow-lg min-w-[320px] md:min-w-[400px] pointer-events-none"
            >
              {/* Note: pointer-events-none on article helps the drag feel smoother, 
                  you can re-enable it for buttons specifically if needed */}
              <div className="w-full h-48 rounded-xl border border-gray-500 p-5 flex justify-center items-center mb-5 ">
                <div className="relative w-full h-full">
                  <Image src={story.logo} alt={story.company} fill className="object-contain" />
                </div>
              </div>

              <div className="text-3xl font-bold text-[#DF5E99] mb-1">{story.metric1}</div>
              <div className="text-base text-black mb-4 font-medium">{story.title1}</div>
              <div className="text-3xl font-bold text-[#45AFC5] mb-1">{story.metric2}</div>
              <div className="text-base text-black mb-6 font-medium">{story.title2}</div>

              <div className="inline-flex items-center border border-[#DF5E99] px-5 py-2 rounded-full justify-center space-x-2 text-[#DF5E99] font-medium pointer-events-auto cursor-pointer hover:bg-pink-50">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}