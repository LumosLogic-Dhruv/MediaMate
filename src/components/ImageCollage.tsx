"use client";

import { motion } from "framer-motion";
import { Rocket, Search } from "lucide-react";
import Image from "next/image";

export default function ImageCollage() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-[#DF5E99]/20 to-[#45AFC5]/20 rounded-3xl p-8">
      {/* Large main image - left center */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 top-8 w-48 h-64 bg-white/80 rounded-[32px] border-4 border-white/60 shadow-lg overflow-hidden"
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
      </motion.div>

      {/* Top right overlapping image */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-8 top-4 w-32 h-40 bg-white/80 rounded-[28px] border-4 border-white/60 shadow-lg overflow-hidden z-10"
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
      </motion.div>

      {/* Bottom right overlapping image */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-4 bottom-8 w-36 h-32 bg-white/80 rounded-[30px] border-4 border-white/60 shadow-lg overflow-hidden z-10"
      >
        <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200" />
      </motion.div>

      {/* Floating icon badge */}
      <motion.div
        animate={{ 
          y: [0, -6, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-[#DF5E99] to-[#45AFC5] rounded-full flex items-center justify-center shadow-lg z-20"
        style={{ 
          boxShadow: '0 0 20px rgba(223, 94, 153, 0.3)' 
        }}
      >
        <Rocket className="w-6 h-6 text-white" />
      </motion.div>

      {/* Mobile stacked layout */}
      <div className="md:hidden flex flex-col space-y-4 items-center">
        <div className="w-48 h-32 bg-white/80 rounded-[28px] border-4 border-white/60 shadow-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
        </div>
        <div className="w-40 h-28 bg-white/80 rounded-[28px] border-4 border-white/60 shadow-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
        </div>
        <div className="w-36 h-24 bg-white/80 rounded-[28px] border-4 border-white/60 shadow-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200" />
        </div>
      </div>
    </div>
  );
}