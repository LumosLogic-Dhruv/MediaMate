"use client";

import { motion } from "framer-motion";
import { resources } from "@/data/resources";

export default function Partners() {
  const partners = [
    { name: "Google Partner", logo: resources.googleLogo.src },
    { name: "Shopify", logo: resources.shopifyLogo.src },
    { name: "Microsoft", logo: resources.microsoftLogo.src },
    { name: "Meta", logo: resources.metaLogo.src },
    { name: "Nvidia", logo: resources.nvidiaLogo.src },
    { name: "Oracle", logo: resources.oracleLogo.src }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-[100vw] py-16 md:py-20 px-4 bg-gradient-to-br from-[#DF5E99]/35 via-[#9B5DE5]/35 to-[#45AFC5]/35"
    >
      <div className="w-[90vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">
            Network Agencies
          </h2>
        </motion.div>

        {/* Auto-scrolling container */}
        <div className="relative  w-full mx-auto">
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
                className="flex flex-col items-center justify-center group cursor-pointer min-w-[140px] md:min-w-[160px]"
              >
                <div className="w-full h-24 md:w-34 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
