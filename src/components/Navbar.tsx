"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4"
      >
        <div className="flex items-center justify-between w-[95%] mx-auto">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="MediaMate Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Navigation Links - Center with Rounded Black BG */}
          <div className="hidden md:flex items-center h-full">
            <div className="bg-[#222222] h-[8vh] w-3xl rounded-full flex justify-evenly px-6 py-3 flex items-center space-x-6">
              <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-md">
                Who We Are
              </a>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-[#DF5E99] transition-colors text-md">
                  Services <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 bg-white rounded-2xl shadow-xl p-4 min-w-48 left-1/2 transform -translate-x-1/2"
                  >
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-md">Paid Search</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-md">Paid Social</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-md">SEO</a>
                  </motion.div>
                )}
              </div>

              <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-md">
                Success Stories
              </a>
              <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-md">
                Our Story
              </a>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("insights")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-[#DF5E99] transition-colors text-md">
                  Insights <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === "insights" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 bg-white rounded-2xl shadow-xl p-4 min-w-48 left-1/2 transform -translate-x-1/2"
                  >
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-md">Blog</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-md">Case Studies</a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Let's Talk Button - Right Side */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-bg-pink-blue text-white px-5 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow text-md"
          >
           <span className="flex justify-center items-center">
            Let&apos;s Talk
            <ChevronRight className="ml-1 h-5 w-5" />
           </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-4 right-4 z-40 bg-[#222222] rounded-2xl p-6 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm">
              Who We Are
            </a>
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm">
              Services
            </a>
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm">
              Success Stories
            </a>
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm">
              Our Story
            </a>
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm">
              Insights
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
