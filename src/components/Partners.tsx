"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { resources } from "@/data/resources";

export default function Partners() {
  const partners = [
    { name: "Google Partner", logo: resources.googleLogo.src },
    { name: "Shopify", logo: resources.shopifyLogo.src },
    { name: "Microsoft", logo: resources.microsoftLogo.src },
    { name: "Meta", logo: resources.metaLogo.src },
    { name: "Nvidia", logo: resources.nvidiaLogo.src },
    { name: "Oracle", logo: resources.oracleLogo.src },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-20 w-full py-16 md:py-16 mt-2 px-4 bg-gradient-to-r from-[#DF5E99]/80 to-[#45AFC5]/80"
      aria-label="Our Partner Networks"
    >
      <div className="w-[90vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <h2 className="font-bold text-black">Network Agencies</h2>
        </motion.div>

        {/* Auto-scrolling container */}
        <div
          className="relative w-full mx-auto"
          role="region"
          aria-label="Partner logos carousel"
        >

          <motion.div
            animate={{ x: [0, -100 * partners.length] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 md:gap-8 lg:gap-12 items-center"
            style={{ width: `${(partners.length + 4) * 200}px` }}
            aria-hidden="true"
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center group min-w-[160px] md:min-w-[180px]"
              >
                <div className="w-full h-20 sm:h-24 md:h-32 lg:h-34 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160} 
                    height={60}
                    quality={60}
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 160px"
                    className="max-w-full max-h-full object-contain transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Accessible list of partners (screen reader only) */}
        <div className="sr-only">
          <h3>Our partners include:</h3>
          <ul>
            {partners.map((partner, index) => (
              <li key={index}>{partner.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
