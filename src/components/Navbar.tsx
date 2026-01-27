"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
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
        <div className="flex items-center justify-between w-[95%] max-w-7xl mx-auto">
          {/* Logo - Left Side */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="MediaMate Logo"
              width={120}
              height={40}
              className="object-contain w-24 md:w-[120px]"
            />
          </div>

          {/* Navigation Links - Center with Rounded Black BG */}
          <div className="hidden lg:flex items-center h-full">
            <div className="bg-[#222222] h-auto rounded-full px-4 xl:px-6 py-3 flex items-center space-x-3 xl:space-x-6">
              <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm xl:text-base whitespace-nowrap">
                Who We Are
              </a>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-[#DF5E99] transition-colors text-sm xl:text-base whitespace-nowrap">
                  Services <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 bg-white rounded-2xl shadow-xl p-4 min-w-48 left-1/2 transform -translate-x-1/2"
                  >
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-sm">Paid Search</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-sm">Paid Social</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-sm">SEO</a>
                  </motion.div>
                )}
              </div>

              <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm xl:text-base whitespace-nowrap">
                Success Stories
              </a>
              <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm xl:text-base whitespace-nowrap">
                Our Story
              </a>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("insights")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-[#DF5E99] transition-colors text-sm xl:text-base whitespace-nowrap">
                  Insights <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {activeDropdown === "insights" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 bg-white rounded-2xl shadow-xl p-4 min-w-48 left-1/2 transform -translate-x-1/2"
                  >
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-sm">Blog</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-[#DF5E99] transition-colors text-sm">Case Studies</a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Let's Talk Button - Right Side */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex gradient-bg-pink-blue text-white px-4 lg:px-5 py-2.5 lg:py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow text-sm lg:text-base"
          >
            <span className="flex justify-center items-center">
              Let&apos;s Talk
              <ChevronRight className="ml-1 h-4 w-4 lg:h-5 lg:w-5" />
            </span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 bg-white rounded-full shadow-md"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-40 bg-[#222222] rounded-2xl p-5 md:p-6 lg:hidden"
        >
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm md:text-base">
              Who We Are
            </a>
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm md:text-base">
              Services
            </a>
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm md:text-base">
              Success Stories
            </a>
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm md:text-base">
              Our Story
            </a>
            <a href="#" className="text-white hover:text-[#DF5E99] transition-colors text-sm md:text-base">
              Insights
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg-pink-blue text-white px-5 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow text-sm md:text-base w-full mt-2"
            >
              <span className="flex justify-center items-center">
                Let&apos;s Talk
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
