"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Stats() {
  const stats = [
    {
      icon: "/icons/growth2.svg",
      value: "40% Growth",
      subtitle: "ENROLLMENT LIFT",
    },
    {
      icon: "/icons/percentage.svg",
      value: "58% CTR",
      subtitle: "CREATIVE ENGAGEMENT",
    },
    {
      icon: "/icons/group.svg",
      value: "2X Conversions",
      subtitle: "LEAD-TO-START",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center py-12"
      aria-label="Key performance statistics"
    >
      <div className="bg-white rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.06)] px-8 py-10 md:px-16 w-[90vw] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" role="list">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-5"
              role="listitem"
            >
              {/* Icon Container - No background, exact sizing */}
              <div className="relative w-[65px] h-[65px] flex-shrink-0" aria-hidden="true">
                <Image
                  src={stat.icon}
                  alt={stat.value}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[28px] leading-tight font-extrabold text-[#1a1a1a] tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-[13px] font-bold text-[#9ca3af] tracking-[0.05em] mt-1">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}