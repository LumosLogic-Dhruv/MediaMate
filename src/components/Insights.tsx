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
      title: "5 Strategies to Scale Your Ecommerce Business in 2024",
    },
    {
      image: resources.insightsImg2.src,
      category: "SEO",
      title: "The Complete Guide to Ecommerce SEO Optimization",
    },
    {
      image: resources.insightsImg3.src,
      category: "Paid Social",
      title: "Maximizing ROI with Advanced Facebook Ad Strategies",
    },
    {
      image: resources.insightsImg1.src,
      category: "Analytics",
      title: "Data-Driven Decision Making for Ecommerce Growth",
    },
    {
      image: resources.insightsImg2.src,
      category: "CRO",
      title: "Conversion Rate Optimization Best Practices",
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = gsap.utils.toArray(slider.children);
    const totalWidth = slider.scrollWidth / 3;

    // Helper to create the seamless loop
    const horizontalLoop = (items: Element[], config: Record<string, unknown>) => {
      const itemsArray = gsap.utils.toArray(items) as HTMLElement[];
      config = config || {};
      const tl = gsap.timeline({
        repeat: config.repeat as number,
        paused: config.paused as boolean,
        defaults: { ease: "none" },
        onReverseComplete() {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
      });
      const length = itemsArray.length;
      const startX = itemsArray[0].offsetLeft;
      const times: number[] = [];
      const widths: number[] = [];
      const xPercents: number[] = [];
      let curIndex = 0;
      const pixelsPerSecond = ((config.speed as number) || 1) * 100;
      const snap = config.snap === false ? (v: number) => v : gsap.utils.snap((config.snap as number) || 1);
      let totalWidth: number,
        curX: number,
        distanceToStart: number,
        distanceToLoop: number,
        item: HTMLElement,
        i: number;

      gsap.set(itemsArray, {
        xPercent: (i, target) => {
          widths[i] = parseFloat(gsap.getProperty(target, "width", "px") as string);
          xPercents[i] = parseFloat(gsap.getProperty(target, "xPercent") as string);
          return xPercents[i];
        },
      });

      totalWidth =
        itemsArray[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        itemsArray[length - 1].offsetWidth * (gsap.getProperty(itemsArray[length - 1], "scaleX") as number) +
        (parseFloat(config.paddingRight as string) || 0);

      for (i = 0; i < length; i++) {
        item = itemsArray[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
        tl.to(item, { xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
          .fromTo(
            item,
            { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
            { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }

      function toIndex(index: number, vars: Record<string, unknown>) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
        const newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.unitize(gsap.utils.wrap(0, tl.duration())) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }

      // Extend timeline with navigation methods
      (tl as gsap.core.Timeline & { next: (vars: Record<string, unknown>) => gsap.core.Tween }).next = (vars) => toIndex(curIndex + 1, vars);
      (tl as gsap.core.Timeline & { prev: (vars: Record<string, unknown>) => gsap.core.Tween }).prev = (vars) => toIndex(curIndex - 1, vars);
      (tl as gsap.core.Timeline & { current: () => number }).current = () => curIndex;
      (tl as gsap.core.Timeline & { toIndex: (index: number, vars: Record<string, unknown>) => gsap.core.Tween }).toIndex = (index, vars) => toIndex(index, vars);
      (tl as gsap.core.Timeline & { times: number[] }).times = times;

      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        (tl.vars as gsap.TimelineVars).onReverseComplete?.();
        tl.reverse();
      }
      return tl;
    };

    const loop = horizontalLoop(items as Element[], {
      repeat: -1,
      speed: 0.5,
      paddingRight: 32,
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
        const change = (this.startX - this.x) / totalWidth;
        loop.progress(gsap.utils.wrap(0, 1, this.startProgress + change));
      },
      onRelease() {
        gsap.to(loop, { timeScale: 1, duration: 0.5 });
      },
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
      className="relative z-0 w-full py-16 md:py-20 px-4 bg-gradient-to-r from-[#DF5E99]/20 via-[#9B5DE5]/10 to-[#45AFC5]/20 overflow-hidden select-none"
      id="insights"
      aria-label="Latest insights and articles"
    >
      <div className="relative z-10 w-[90vw] mx-auto">
        <div className="relative z-10 text-center mb-12 md:mb-16">
          <h2 className="font-bold text-black mb-4">Insights</h2>
        </div>

        <div
          ref={containerRef}
          className="relative w-full cursor-grab active:cursor-grabbing touch-pan-y"
          role="region"
          aria-label="Insights carousel - drag to scroll"
        >
          <div ref={sliderRef} className="flex gap-3 sm:gap-5 md:gap-8" style={{ width: "max-content", willChange: "transform" }}>
            {/* Duplicating for seamless loop */}
            {[...insights, ...insights, ...insights].map((insight, index) => (
              <article
                key={index}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg min-w-[220px] sm:min-w-[280px] md:min-w-[400px] w-[220px] sm:w-[280px] md:w-[400px] p-3 sm:p-4 md:p-5 pointer-events-none flex-shrink-0"
                style={{ backfaceVisibility: "hidden" }}
                aria-label={insight.title}
              >
                <div className="relative overflow-hidden h-32 sm:h-44 md:h-64 rounded-lg sm:rounded-xl md:rounded-2xl">
                  <Image
                    src={insight.image}
                    alt={`${insight.category} article illustration`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 400px"
                  />
                </div>

                <div className="p-2 sm:p-4 md:p-6 pointer-events-auto">
                  <span className="text-[#45AFC5] text-xs sm:text-sm md:text-body-lg font-bold">{insight.category}</span>
                  <h3 className="text-sm sm:text-base md:text-h4 font-bold text-gray-800 my-2 sm:my-3 md:my-4 line-clamp-2 leading-tight">{insight.title}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      const element = document.getElementById('insights');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative p-[1px] inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#EB5896] to-[#3CB4C7] transition-all hover:shadow-lg active:scale-95"
                  >
                    <div className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-white group-hover:bg-pink-50 transition-all">
                      <span className="bg-gradient-to-r from-[#EB5896] to-[#3CB4C7] bg-clip-text text-transparent font-medium text-xs sm:text-body-sm">
                        Read More
                      </span>
                      <ArrowRight
                        className="h-3 w-3 sm:h-4 sm:w-4"
                        style={{ stroke: "#EB5896", filter: "drop-shadow(2px 0px 0px #3CB4C7)" }}
                        aria-hidden="true"
                      />
                    </div>
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
