"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-0">
      {/* --- BACKGROUND ELEMENTS --- */}

      {/* 1. TOP-RIGHT PRIMARY GRADIENT - More visible with darker blue and pink */}
      <div className="absolute top-[-5%] right-[-10%] w-[70%] h-[80%] bg-[radial-gradient(ellipse_at_center,_#c94d87_0%,_#2d8799_35%,_#45AFC5_50%,_transparent_70%)] opacity-80 blur-[80px] z-0 pointer-events-none" />

      {/* Secondary gradient for depth */}
      <div className="absolute top-[10%] right-[5%] w-[40%] h-[50%] bg-[radial-gradient(circle_at_center,_#DF5E99_0%,_#b4487d_40%,_transparent_70%)] opacity-60 blur-[60px] z-0 pointer-events-none" />

      {/* 3. DECORATIVE WAVE LINES */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-200 400 C 400 200, 800 700, 1600 100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <path
            d="M-200 500 C 400 300, 800 800, 1600 200"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DF5E99" />
              <stop offset="100%" stopColor="#2d8799" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b4487d" />
              <stop offset="100%" stopColor="#45AFC5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* --- LEFT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold leading-[1.1] text-gray-900">
              We scale ecommerce brands with precision{" "}
              <span className="bg-gradient-to-r from-[#DF5E99] to-[#b4487d] bg-clip-text text-transparent">
                performance marketing
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-[#45AFC5] to-[#2d8799] bg-clip-text text-transparent">
                search
              </span>
              .
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="gradient-bg-pink-blue flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl lg:max-w-3xl mx-auto lg:mx-0 rounded-full p-3 sm:p-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF5E99]/50 bg-white text-sm md:text-base"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2d8799] border border-white text-white px-5 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-sm md:text-base"
              >
                <span className="flex items-center">
                  Submit
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT: OVERLAPPING IMAGES --- */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] w-full flex items-center justify-center order-1 lg:order-2">
            {/* Main Background Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute left-0 sm:left-5 bottom-5 lg:bottom-10 z-10 w-[60%] sm:w-[55%] h-[65%] lg:h-[75%] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden border-[4px] sm:border-[6px] md:border-[8px] lg:border-[12px] border-white shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
                alt="Main"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Top Right Image */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-0 right-0 sm:right-4 z-20 w-[50%] sm:w-[45%] h-[45%] sm:h-[50%] lg:h-[55%] rounded-[15px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[50px] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] lg:border-[10px] border-white shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80"
                alt="Man"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small Foreground Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-16 right-0 z-30 w-[55%] sm:w-[50%] h-[28%] sm:h-[30%] lg:h-[35%] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[40px] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] lg:border-[10px] border-white shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Rocket Badge */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-[35%] sm:left-[40%] z-40 w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-tr from-[#DF5E99] via-[#8E86AF] to-[#45AFC5] rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(223,94,153,0.5)] border-[2px] sm:border-[3px] md:border-[4px] lg:border-[6px] border-white/50 backdrop-blur-md"
            >
              <div className="bg-white/10 w-[85%] h-[85%] rounded-full flex items-center justify-center border border-white/20">
                <Rocket className="text-white h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 drop-shadow-md" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
