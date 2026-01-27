"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    { name: "TikTok Partner", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=120&h=60" },
    { name: "Google Partner", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=120&h=60" },
    { name: "Shopify", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=120&h=60" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=120&h=60" },
    { name: "Triple Whale", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=120&h=60" },
    { name: "Klaviyo", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=120&h=60" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=120&h=60" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=120&h=60" }
  ];

  return (
    <section className="w-full py-16 md:py-20 px-4 bg-gradient-to-br from-[#DF5E99] via-[#9B5DE5] to-[#45AFC5]">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Network Agencies
          </h2>
          <p className="text-base md:text-lg text-white/80 px-4">
            We work with industry-leading platforms to deliver exceptional results
          </p>
        </motion.div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * partners.length] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-6 md:gap-8 lg:gap-12 items-center"
            style={{ width: `${(partners.length + 4) * 200}px` }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer min-w-[140px] md:min-w-[160px]"
              >
                <div className="w-20 h-10 md:w-24 md:h-12 mb-2 md:mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors text-center">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
