"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PerformanceModel() {
  const features = [
    {
      icon: "/icons/speedometer.svg",
      title: "Speed to Insight",
      description: "Real-time analytics dashboards that reveal actionable growth opportunities",
      color: "from-[#45AFC5] to-blue-500",
    },
    {
      icon: "/icons/rocket.svg",
      title: "Speed to Launch",
      description: "Go live in days, not weeks, with our rapid deployment methodology",
      color: "from-[#DF5E99] to-pink-500",
    },
    {
      icon: "/icons/growth.svg",
      title: "Speed to Optimize",
      description: "AI-powered campaign optimization that maximizes your ROAS continuously",
      color: "from-[#45AFC5] to-blue-500",
    },
    {
      icon: "/icons/pen.svg",
      title: "Speed to Create",
      description: "High-converting ad creatives designed and deployed in record time",
      color: "from-[#DF5E99] to-pink-500",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-20 md:py-20 px-4 relative overflow-hidden"
      aria-label="Performance model section"
    >
      <div className="w-[90vw] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Content - Headline & Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 max-w-3xl"
          >
            <h2 className="font-bold text-slate-800 leading-tight max-w-xl">A Performance Model That Scales.</h2>

            <p className="text-body-lg md:text-body-lg text-slate-600 leading-relaxed font-medium">
                You can’t scale with fragmented performance strategies.
            </p>
            <p className="text-body-lg md:text-body-lg text-slate-600 leading-relaxed font-medium">
              When your performance tactics aren't connected, your growth stalls. We fix that. Our Growth and Performance Model combines proprietary technology (OneSource360TM, SmartSpot360TM, Captivasr360TM) with strategic, cross- channel insights and performance-focused creative, optimizing your spend, expending your reach, and boosting ROI quickly.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#45AFC5] font-semibold text-body-lg mt-4 focus:outline-none focus-visible:underline"
            >
              Explore Our Methodology
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Right Content - 2x2 Feature Cards Grid with Offset */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col gap-4 md:gap-6"
          >
            {/* Bottom Row - Cards 3 and 4 (Offset to the left) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:mr-12 lg:mr-20">
              {features.slice(2, 4).map((feature, index) => (
                <motion.article
                  key={index + 2}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative rounded-[2rem] p-8 md:p-10 shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden ${index === 0
                    ? "bg-[#3CB4C7]" // Teal for Card 3
                    : "bg-[#EB5896]" // Pink for Card 4
                    }`}
                >
                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="mb-6">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={50}
                        height={50}
                        className="brightness-0 invert" // Makes icons white like the image
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <div className="rounded-full border-2 border-white/50 p-1 group-hover:bg-white/20 transition-colors">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>



            {/*  */}

            {/* Top Row - Cards 1 and 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:ml-12 lg:ml-20">
              {features.slice(0, 2).map((feature, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative rounded-[2rem] p-8 md:p-10 shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden ${index === 0
                    ? "bg-[#EB5896]" // Pink for Card 1
                    : "bg-[#3CB4C7]" // Teal for Card 2
                    }`}
                >

                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="mb-6">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={50}
                        height={50}
                        className="brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <div className="rounded-full border-2 border-white/50 p-1 group-hover:bg-white/20 transition-colors">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
