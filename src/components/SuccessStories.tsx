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
    {
      logo: resources.googleLogo.src,
      company: "TechStart",
      metric1: "85%",
      title1: "Increase in App Installs",
      metric2: "50%",
      title2: "Reduction in CPA",
    },
    {
      logo: resources.metaLogo.src,
      company: "AppFlow",
      metric1: "127%",
      title1: "ROAS Improvement",
      metric2: "73%",
      title2: "Growth in Revenue",
    },
    {
      logo: resources.shopifyLogo.src,
      company: "EcomPlus",
      metric1: "200%",
      title1: "Increase in Orders",
      metric2: "95%",
      title2: "Higher Customer LTV",
    },
    {
      logo: resources.microsoftLogo.src,
      company: "ScaleUp",
      metric1: "156%",
      title1: "Boost in Lead Volume",
      metric2: "82%",
      title2: "Lower Cost Per Lead",
    },
    {
      logo: resources.nvidiaLogo.src,
      company: "GrowthCo",
      metric1: "178%",
      title1: "Traffic Growth",
      metric2: "64%",
      title2: "Improved Conversion Rate",
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = gsap.utils.toArray(slider.children) as HTMLElement[];
    const totalWidth = slider.scrollWidth / 3;

    // Helper to create the seamless loop with explicit types to fix Build errors
    const horizontalLoop = (items: HTMLElement[], config: Record<string, unknown>) => {
      items = gsap.utils.toArray(items);
      config = config || {};
      const tl = gsap.timeline({
        repeat: config.repeat as number,
        paused: config.paused as boolean,
        defaults: { ease: "none" },
        onReverseComplete: () => {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
      });
      const length = items.length;
      const startX = items[0].offsetLeft;
      const times: number[] = [];
      const widths: number[] = [];
      const xPercents: number[] = [];
      const pixelsPerSecond = ((config.speed as number) || 1) * 100;
      const snap = config.snap === false ? (v: number) => v : gsap.utils.snap((config.snap as number) || 1);
      let totalWidth: number,
        curX: number,
        distanceToStart: number,
        distanceToLoop: number,
        item: HTMLElement,
        i: number;

      gsap.set(items, {
        xPercent: (i, target) => {
          widths[i] = parseFloat(gsap.getProperty(target, "width", "px") as string);
          xPercents[i] = parseFloat(gsap.getProperty(target, "xPercent") as string);
          return xPercents[i];
        },
        force3D: true,
      });

      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], "scaleX") as number) +
        (parseFloat(config.paddingRight as string) || 0);

      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
        tl.to(item, { xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100), duration: distanceToLoop / pixelsPerSecond }, 0).fromTo(
          item,
          { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
          { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false },
          distanceToLoop / pixelsPerSecond
        );
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
        const change = (this.startX - this.x) / totalWidth;
        loop.progress(gsap.utils.wrap(0, 1, this.startProgress + change));
      },
      onRelease() {
        gsap.to(loop, { timeScale: 1, duration: 0.8, ease: "sine.inOut" });
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
      className="w-full overflow-hidden py-16 md:py-20 select-none"
      id="success-stories"
      aria-label="Success stories from our clients"
    >
      <div className="w-[90vw] mx-auto mb-12 text-center">
        <h2 className="font-bold text-gray-800 mb-4">Success Stories</h2>
      </div>

      <div
        ref={containerRef}
        className="relative w-full cursor-grab active:cursor-grabbing touch-pan-y"
        role="region"
        aria-label="Success stories carousel - drag to scroll"
      >
        <div
          ref={sliderRef}
          className="flex gap-3 sm:gap-5 md:gap-8 flex-nowrap"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {[...stories, ...stories, ...stories].map((story, index) => (
            <article
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-8 border border-gray-200 text-center shadow-lg min-w-[220px] sm:min-w-[280px] md:min-w-[400px] w-[220px] sm:w-[280px] md:w-[400px] pointer-events-none flex-shrink-0"
              style={{ backfaceVisibility: "hidden" }}
              aria-label={`${story.company} success story`}
            >
              <div className="w-full h-32 sm:h-48 md:h-64 rounded-lg sm:rounded-xl border border-gray-500 p-4 sm:p-6 md:p-10 flex justify-center items-center mb-3 sm:mb-4 md:mb-5">
                <div className="relative w-full h-full">
                  <Image
                    src={story.logo}
                    alt={`${story.company} logo`}
                    fill
                    className="object-contain"
                    loading={index < 5 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 360px"
                  />
                </div>
              </div>

              <div className="text-xl sm:text-2xl md:text-h2 font-bold text-[#DF5E99] mb-0.5 sm:mb-1">{story.metric1}</div>
              <div className="text-xs sm:text-sm md:text-body-lg text-black mb-2 sm:mb-3 md:mb-4 font-medium">{story.title1}</div>
              <div className="text-xl sm:text-2xl md:text-h2 font-bold text-[#45AFC5] mb-0.5 sm:mb-1">{story.metric2}</div>
              <div className="text-xs sm:text-sm md:text-body-lg text-black mb-3 sm:mb-4 md:mb-6 font-medium">{story.title2}</div>

              <button
                type="button"
                onClick={() => {
                  const element = document.getElementById('insights');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative p-[1px] inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#EB5896] to-[#3CB4C7] transition-all hover:shadow-lg active:scale-95"
              >
                <div className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-white group-hover:bg-pink-50 transition-all">
                  <span className="bg-gradient-to-r from-[#EB5896] to-[#3CB4C7] bg-clip-text text-transparent font-medium text-xs sm:text-body-lg">
                    Learn More
                  </span>
                  <ArrowRight
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    style={{ stroke: "#EB5896", filter: "drop-shadow(2px 0px 0px #3CB4C7)" }}
                    aria-hidden="true"
                  />
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
