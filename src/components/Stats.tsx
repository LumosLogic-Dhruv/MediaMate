"use client";

import { motion } from "framer-motion";
import { TrendingUp, MousePointer, Target } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Growth",
      subtitle: "Enrollment Lift",
      color: "from-[#DF5E99] to-pink-400"
    },
    {
      icon: MousePointer,
      value: "58%",
      label: "CTR",
      subtitle: "Creative Engagement",
      color: "from-[#45AFC5] to-blue-400"
    },
    {
      icon: Target,
      value: "2X",
      label: "Conversions",
      subtitle: "Lead-to-Start",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex flex-col">
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}