"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Stats() {
  const stats = [
    {
      icon: "/icons/growth2.svg",
      value: "40%",
      label: "Growth",
      subtitle: "Enrollment Lift",
      color: "from-[#DF5E99] to-pink-400",
    },
    {
      icon: "/icons/percentage.svg",
      value: "58%",
      label: "CTR",
      subtitle: "Creative Engagement",
      color: "from-[#45AFC5] to-blue-400",
    },
    {
      icon: "/icons/group.svg",
      value: "2X",
      label: "Conversions",
      subtitle: "Lead-to-Start",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full"
      aria-label="Key performance statistics"
    >
      <div className="w-full mt-12">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.1)] p-2 md:p-4 lg:p-4 w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" role="list">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 md:gap-6 p-2 md:p-6"
                role="listitem"
              >
                <div
                  className={`w-20 h-20 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center transition-transform duration-300 flex-shrink-0`}
                  aria-hidden="true"
                >
                  <Image
                    src={stat.icon}
                    alt={`${stat.label} icon - ${stat.subtitle}`}
                    width={32}
                    height={32}
                    className="h-14 w-14 md:h-16 md:w-16"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.value}{" "}{stat.label}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
