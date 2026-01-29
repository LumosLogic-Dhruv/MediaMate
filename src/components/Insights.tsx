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
    { image: resources.insightsImg1.src, category: "Performance Marketing", title: "5 Strategies to Scale Your Ecommerce Business in 2024" },
    { image: resources.insightsImg2.src, category: "SEO", title: "The Complete Guide to Ecommerce SEO Optimization" },
    { image: resources.insightsImg3.src, category: "Paid Social", title: "Maximizing ROI with Advanced Facebook Ad Strategies" },
    { image: resources.insightsImg1.src, category: "Analytics", title: "Data-Driven Decision Making for Ecommerce Growth" },
    { image: resources.insightsImg2.src, category: "CRO", title: "Conversion Rate Optimization Best Practices" }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = gsap.utils.toArray(slider.children);
    // We only need the original set width for the loop math
    const originalLength = insights.length;
    const totalWidth = slider.scrollWidth / 3;

    // Helper to create the seamless loop
    const horizontalLoop = (items: any[], config: any) => {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times: number[] = [],
        widths: number[] = [],
        xPercents: number[] = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1),
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;

      gsap.set(items, {
        xPercent: (i, target) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(target, "width", "px") as string));
          xPercents[i] = parseFloat(gsap.getProperty(target, "xPercent") as string);
          return xPercents[i];
        },
      });

      totalWidth = items[length - 1].offsetLeft + (xPercents[length - 1] / 100) * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);

      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, { xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
          .fromTo(item, { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }

      function toIndex(index: number, vars: any) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.unitize(gsap.utils.wrap(0, tl.duration())) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars: any) => toIndex(curIndex + 1, vars);
      tl.prev = (vars: any) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index: number, vars: any) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        tl.vars.onReverseComplete?.();
        tl.reverse();
      }
      return tl;
    };

    const loop = horizontalLoop(items, {
      repeat: -1,
      speed: 0.5, // Control auto-scroll speed
      paddingRight: 32, // Match your gap (6 or 8 based on Tailwind)
    });

    // Manual Drag Integration
    const draggable = Draggable.create(document.createElement("div"), {
      trigger: containerRef.current,
      type: "x",
      onPress() {
        gsap.killTweensOf(loop);
        this.startProgress = loop.progress();
      },
      onDrag() {
        // Sync the timeline progress with the drag distance
        const change = (this.startX - this.x) / totalWidth;
        loop.progress(gsap.utils.wrap(0, 1, this.startProgress + change));
      },
      onRelease() {
        // Smoothly resume auto-scroll
        gsap.to(loop, { timeScale: 1, duration: 0.5 });
      }
    });

    return () => {
      loop.kill();
      if (draggable[0]) draggable[0].kill();
    };
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-[#DF5E99]/20 via-[#9B5DE5]/10 to-[#45AFC5]/20 overflow-hidden select-none"
      id="insights"
    >
      <div className="w-[90vw] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Insights</h2>
        </div>

        <div ref={containerRef} className="relative w-full cursor-grab active:cursor-grabbing touch-pan-y">
          <div ref={sliderRef} className="flex gap-8" style={{ width: "max-content" }}>
            {/* Duplicating just once extra is enough with the horizontalLoop helper */}
            {[...insights, ...insights, ...insights].map((insight, index) => (
              <article
                key={index}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg min-w-[350px] md:min-w-[400px] p-5 pointer-events-none"
                style={{ width: "25rem" }}
              >
                <div className="relative overflow-hidden h-64 rounded-2xl">
                  <Image src={insight.image} alt={insight.title} fill className="object-cover" />
                </div>

                <div className="p-4 md:p-6 pointer-events-auto">
                  <span className="text-[#45AFC5] text-lg font-bold">{insight.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 my-4 line-clamp-2 leading-tight">
                    {insight.title}
                  </h3>
                  <button className="flex items-center border border-[#DF5E99] px-5 py-2 rounded-full space-x-2 text-[#DF5E99] font-medium hover:bg-pink-50 transition-all">
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