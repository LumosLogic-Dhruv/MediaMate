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

    const items = gsap.utils.toArray(slider.children);
    // Use the width of one set of cards for progress calculation
    const totalWidth = (slider.scrollWidth / 3);

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
        force3D: true, // Uses GPU for smoother motion
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

      tl.progress(1, true).progress(0, true);
      return tl;
    };

    const loop = horizontalLoop(items, {
      repeat: -1,
      speed: 0.6,
      paddingRight: 32,
    });

    const draggable = Draggable.create(document.createElement("div"), {
      trigger: containerRef.current,
      type: "x",
      onPress() {
        gsap.killTweensOf(loop);
        this.startProgress = loop.progress();
      },
      onDrag() {
        // Precise progress tracking to eliminate the "pumping" reset
        const change = (this.startX - this.x) / totalWidth;
        loop.progress(gsap.utils.wrap(0, 1, this.startProgress + change));
      },
      onRelease() {
        // Ultra-smooth ramp back to auto-scroll
        gsap.to(loop, { timeScale: 1, duration: 0.8, ease: "sine.inOut" });
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
      className="w-full overflow-hidden py-16 md:py-20 bg-white select-none"
      id="success-stories"
    >
      <div className="w-[90vw] mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Success Stories
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Real results from real clients
        </p>
      </div>

      <div 
        ref={containerRef} 
        className="relative w-full cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <div 
          ref={sliderRef}
          className="flex gap-8 flex-nowrap"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {[...stories, ...stories, ...stories].map((story, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 text-center shadow-lg min-w-[320px] md:min-w-[400px] pointer-events-none"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="w-full h-48 rounded-xl border border-gray-500 p-5 flex justify-center items-center mb-5">
                <div className="relative w-full h-full">
                  <Image src={story.logo} alt={story.company} fill className="object-contain" priority={index < 5} />
                </div>
              </div>

              <div className="text-3xl font-bold text-[#DF5E99] mb-1">{story.metric1}</div>
              <div className="text-base text-black mb-4 font-medium">{story.title1}</div>
              <div className="text-3xl font-bold text-[#45AFC5] mb-1">{story.metric2}</div>
              <div className="text-base text-black mb-6 font-medium">{story.title2}</div>

              <div className="inline-flex items-center border border-[#DF5E99] px-5 py-2 rounded-full justify-center space-x-2 text-[#DF5E99] font-medium pointer-events-auto cursor-pointer hover:bg-pink-50 transition-colors">
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