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
  { label: "Paid Search", icon: "paidSearch", color: "#DF5E99", gradient: "from-pink-400 to-pink-600" },
  { label: "Paid Social", icon: "paidSocial", color: "#45AFC5", gradient: "from-blue-400 to-blue-600" },
  { label: "SEO", icon: "seo", color: "#22c55e", gradient: "from-green-400 to-green-600" },
  { label: "DSP", icon: "dsp", color: "#f97316", gradient: "from-orange-400 to-orange-600" },
  { label: "Creative", icon: "creative", color: "#a855f7", gradient: "from-purple-400 to-purple-600" },
  { label: "Content Marketing", icon: "contentMarketing", color: "#06b6d4", gradient: "from-cyan-400 to-cyan-600" },
  { label: "CRO", icon: "cro", color: "#ec4899", gradient: "from-rose-400 to-rose-600" },
];

// Icon components mapping with proper accessibility
const IconMap: Record<string, React.ReactNode> = {
  paidSearch: (
    <Image
      src={resources.paidSearchIcon.src}
      alt="Paid Search"
      width={24}
      height={24}
      className="w-5 h-5"
    />
  ),
  paidSocial: (
    <Image
      src={resources.paidSocialIcon.src}
      alt="Paid Social"
      width={24}
      height={24}
      className="w-5 h-5"
    />
  ),
  seo: (
    <Image
      src={resources.seoIcon.src}
      alt="SEO"
      width={24}
      height={24}
      className="w-5 h-5"
    />
  ),
  dsp: (
    <Image
      src={resources.dspIcon.src}
      alt="DSP"
      width={24}
      height={24}
      className="w-5 h-5"
    />
  ),
  creative: (
    <Image
      src={resources.creativeIcon.src}
      alt="Creative"
      width={24}
      height={24}
      className="w-5 h-5"
    />
  ),
  contentMarketing: (
    <Image
      src={resources.contentMarketingIcon.src}
      alt="Content Marketing"
      width={24}
      height={24}
      className="w-5 h-5"
    />
  ),
  cro: (
    <Image
      src={resources.croIcon.src}
      alt="CRO"
      width={24}
      height={24}
      className="w-5 h-5"
    />
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
                    className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""
                      }`}
                    aria-hidden="true"
                  />
                </button>
                {/* Mega Dropdown */}
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      // Ensures the entire dropdown is centered under the trigger
                      className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 z-50"
                      role="menu"
                      aria-label="Services menu"
                    >
                      {/* Center Pointer Notch */}
                      <div className="absolute -top-[9px] left-1/2 transform -translate-x-1/2 z-10" aria-hidden="true">
                        <div className="w-4 h-4 bg-[#FDEFF4] rotate-45 border-l border-t border-[#DF5E99]/40" />
                      </div>

                      {/* Main Dropdown Container */}
                      <div className="bg-gradient-to-r from-[#FDEFF4] via-[#F3F1FF] to-[#E6F8FB] rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#DF5E99]/30 p-6 w-auto min-w-[1000px] max-w-[95vw]">

                        {/* Horizontal Layout - justify-center and items-center for perfect alignment */}
                        <div className="flex justify-center items-center gap-8 px-2">
                          {services.map((service, index) => (
                            <motion.a
                              key={service.label}
                              href={`#services`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.03 }}
                              // flex-col and items-center to stack the BIG icon over the text
                              className="group flex items-center justify-center gap-3  px-5 rounded-2xl hover:bg-white/50 transition-all duration-300 outline-none focus:outline-none"
                              role="menuitem"
                            >
                              {/* BIG Icon Container - Increased from w-10 to w-16 */}
                              <div
                                className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                aria-hidden="true"
                              >
                                <div className="w-full h-full relative flex items-center justify-center">
                                  {/* This scales the actual SVG/Image inside the IconMap */}
                                  <div className="transform scale-[1.8]">
                                    {IconMap[service.icon]}
                                  </div>
                                </div>
                              </div>

                              {/* Label - Bold and Centered */}
                              <span className="text-[14px] font-extrabold text-[#1a1a1a] tracking-tight whitespace-nowrap text-center">
                                {service.label}
                              </span>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>              </div>

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
                    className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === "insights" ? "rotate-180" : ""
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
              className="fixed top-20 left-3 right-3 sm:left-4 sm:right-4 bottom-4 max-w-md mx-auto z-40 bg-[#222222] rounded-3xl shadow-2xl border border-white/10 lg:hidden overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="flex flex-col h-full overflow-y-auto p-4 sm:p-6" role="navigation">
                {/* Main Navigation Links */}
                <div className="space-y-1">
                  {["Who We Are", "Services", "Success Stories", "Our Story", "Insights"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/90 hover:text-[#DF5E99] hover:bg-white/5 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all text-sm sm:text-base font-medium flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                      <ChevronRight
                        className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#DF5E99]"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>

                {/* Mobile Services Grid */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2 sm:mb-3 px-2">Services</p>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {services.map((service) => (
                      <a
                        key={service.label}
                        href="#services"
                        className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full  flex items-center justify-center text-white flex-shrink-0`}
                          aria-hidden="true"
                        >
                          <span className="scale-75 sm:scale-100">{IconMap[service.icon]}</span>
                        </div>
                        <span className="text-white/80 text-xs sm:text-sm">{service.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Fixed at bottom */}
                <div className="mt-auto pt-3 sm:pt-4">
                  <motion.a
                    href="#contact"
                    whileTap={{ scale: 0.98 }}
                    className="gradient-bg-pink-blue text-white w-full py-3 sm:py-4 rounded-2xl font-semibold shadow-lg flex justify-center items-center text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Let&apos;s Talk
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
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
