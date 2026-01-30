"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { resources } from "@/data/resources";

interface ServiceItem {
  label: string;
  icon: string;
  color: string;
  gradient: string;
}

const services: ServiceItem[] = [
  { label: "Paid Search", icon: "search", color: "#DF5E99", gradient: "from-pink-400 to-pink-600" },
  { label: "Paid Social", icon: "users", color: "#45AFC5", gradient: "from-blue-400 to-blue-600" },
  { label: "SEO", icon: "trending", color: "#22c55e", gradient: "from-green-400 to-green-600" },
  { label: "DSP", icon: "signal", color: "#f97316", gradient: "from-orange-400 to-orange-600" },
  { label: "Creative", icon: "sparkle", color: "#a855f7", gradient: "from-purple-400 to-purple-600" },
  { label: "Content", icon: "document", color: "#06b6d4", gradient: "from-cyan-400 to-cyan-600" },
  { label: "CRO", icon: "chart", color: "#ec4899", gradient: "from-rose-400 to-rose-600" },
];

// Icon components mapping with proper accessibility
const IconMap: Record<string, React.ReactNode> = {
  search: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  trending: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  ),
  signal: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M2 20h.01M7 20v-4m5 4v-8m5 8v-12m5 12v-16" />
    </svg>
  ),
  sparkle: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent, dropdown: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
      }
    },
    [activeDropdown]
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed-top top-0 z-50 px-3 sm:px-4 mt-5"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between w-[90vw] max-w-auto mx-auto">
          {/* Logo - Left Side */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" aria-label="MediaMate Home">
              <Image
                src={resources.logo.src}
                alt={resources.logo.alt}
                width={120}
                height={40}
                className="object-contain w-24 md:w-[120px]"
                priority
              />
            </a>
          </div>

          {/* Navigation Links - Center with Rounded Black BG */}
          <div className="hidden lg:flex items-center h-[9vh] max-w-7xl px-5 py-2 rounded-full">
            <div className="bg-[#222222] h-full flex justify-evenly rounded-full w-[40vw] px-5 xl:px-6 py-4 items-center space-x-3 xl:space-x-6">
              <a
                href="#about"
                className="text-white hover:text-[#DF5E99] focus:text-[#DF5E99] transition-colors text-nav whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222] rounded"
              >
                Who We Are
              </a>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center text-white hover:text-[#DF5E99] focus:text-[#DF5E99] transition-colors text-nav whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222] rounded"
                  aria-expanded={activeDropdown === "services"}
                  aria-haspopup="true"
                  onKeyDown={(e) => handleDropdownKeyDown(e, "services")}
                >
                  Services{" "}
                  <ChevronDown
                    className={`ml-1 h-5 w-5 transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full mt-8 left-1/2 transform -translate-x-1/2"
                      role="menu"
                      aria-label="Services menu"
                    >
                      {/* Center Pointer Arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2" aria-hidden="true">
                        <div className="w-4 h-4 bg-white/90 backdrop-blur-xl rotate-45 border-l border-t border-[#DF5E99]/30" />
                      </div>

                      {/* Main Dropdown Container - Pill Shaped */}
                      <div className="bg-gradient-to-tr from-pink-200 via-purple-100 to-cyan-200 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#DF5E99]/20 p-4 w-[1200px]">
                        {/* Horizontal Layout Grid */}
                        <div className="flex justify-evenly items-center gap-2">
                          {services.map((service, index) => (
                            <motion.a
                              key={service.label}
                              href={`#services`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="group flex justify-between items-center text-center p-3 rounded-2xl hover:bg-gradient-to-br hover:from-[#DF5E99]/10 hover:to-[#45AFC5]/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] focus-visible:rounded-2xl"
                              role="menuitem"
                            >
                              {/* Icon Container with Glow Effect */}
                              <div
                                className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-2 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                                style={{
                                  boxShadow: `0 4px 15px ${service.color}40`,
                                }}
                                aria-hidden="true"
                              >
                                {IconMap[service.icon]}
                              </div>
                              {/* Label */}
                              <span className="ml-2 text-xs font-bold text-gray-700 group-hover:text-[#DF5E99] transition-colors duration-200 leading-tight">
                                {service.label}
                              </span>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#success-stories"
                className="text-white hover:text-[#DF5E99] focus:text-[#DF5E99] transition-colors text-nav whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222] rounded"
              >
                Success Stories
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#DF5E99] focus:text-[#DF5E99] transition-colors text-nav whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222] rounded"
              >
                Our Story
              </a>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("insights")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center text-white hover:text-[#DF5E99] focus:text-[#DF5E99] transition-colors text-nav whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222] rounded"
                  aria-expanded={activeDropdown === "insights"}
                  aria-haspopup="true"
                  onKeyDown={(e) => handleDropdownKeyDown(e, "insights")}
                >
                  Insights{" "}
                  <ChevronDown
                    className={`ml-1 h-5 w-5 transition-transform ${
                      activeDropdown === "insights" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "insights" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 bg-white rounded-2xl shadow-xl p-4 min-w-48 left-1/2 transform -translate-x-1/2"
                      role="menu"
                      aria-label="Insights menu"
                    >
                      <a
                        href="#insights"
                        className="block py-2 text-gray-700 hover:text-[#DF5E99] focus:text-[#DF5E99] transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] rounded"
                        role="menuitem"
                      >
                        Blog
                      </a>
                      <a
                        href="#success-stories"
                        className="block py-2 text-gray-700 hover:text-[#DF5E99] focus:text-[#DF5E99] transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] rounded"
                        role="menuitem"
                      >
                        Case Studies
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Let's Talk Button - Right Side */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center bg-gradient-to-r from-[#EB5896] to-[#3CB4C7] text-white px-5 lg:px-6 py-3 lg:py-4 border border-white rounded-full font-medium shadow-md hover:shadow-lg transition-shadow text-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99] focus-visible:ring-offset-2"
          >
            <span className="flex justify-center items-center">
              Let&apos;s Talk
              <ArrowRight className="ml-1 h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
            </span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-gray-700 bg-white rounded-full shadow-md active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Semi-transparent Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="fixed top-24 left-3 right-3 sm:left-4 sm:right-4 max-w-sm mx-auto z-40 bg-[#222222] rounded-3xl p-6 shadow-2xl border border-white/10 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="flex flex-col space-y-2" role="navigation">
                {["Who We Are", "Services", "Success Stories", "Our Story", "Insights"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/90 hover:text-[#DF5E99] hover:bg-white/5 py-3 px-4 rounded-xl transition-all text-base font-medium flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                    <ChevronRight
                      className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#DF5E99]"
                      aria-hidden="true"
                    />
                  </a>
                ))}

                {/* Mobile Services Grid */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3 px-2">Services</p>
                  <div className="grid grid-cols-2 gap-2">
                    {services.slice(0, 4).map((service) => (
                      <a
                        key={service.label}
                        href="#services"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white flex-shrink-0`}
                          aria-hidden="true"
                        >
                          {IconMap[service.icon]}
                        </div>
                        <span className="text-white/80 text-sm">{service.label}</span>
                      </a>
                    ))}
                    {services.slice(4).map((service) => (
                      <a
                        key={service.label}
                        href="#services"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white flex-shrink-0`}
                          aria-hidden="true"
                        >
                          {IconMap[service.icon]}
                        </div>
                        <span className="text-white/80 text-sm">{service.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <motion.a
                    href="#contact"
                    whileTap={{ scale: 0.98 }}
                    className="gradient-bg-pink-blue text-white w-full py-4 rounded-2xl font-semibold shadow-lg flex justify-center items-center text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Let&apos;s Talk
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
