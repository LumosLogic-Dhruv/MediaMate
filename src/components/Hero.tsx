"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";
import { resources } from "@/data/resources";

export default function Hero() {
  return (
    <section
      className="relative w-full h-auto md:h-[90vh] flex items-center justify-center overflow-hidden bg-transparent"
      aria-label="Hero section"
    >
      {/* Main content container */}
      <div className="relative z-10 w-full px-4">
        <div className="w-[90vw] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* --- LEFT CONTENT --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className=" max-w-3xl space-y-3 md:space-y-4 lg:space-y-5 text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="font-bold leading-[1.1] text-gray-900">
                <span className="block">We scale ecommerce</span>
                <span className="block">brand with precision</span>
                <span className="text-[#DF5E99]">performance marketing </span>
                <span className="block">& <span className="text-[#45AFC5]">search</span>.</span>
              </h1>

              <p className="text-body-lg md:text-body-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Drive growth with data-driven strategies that deliver measurable results for your ecommerce business.
              </p>

              {/* IMPROVED RESPONSIVE BUTTON GROUP */}
              <form
                className="gradient-bg-pink-blue flex flex-col sm:flex-row gap-3 sm:gap-2 max-w-xl lg:max-w-3xl mx-auto lg:mx-0 rounded-2xl sm:rounded-full p-2 sm:p-2 md:p-3"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Email subscription form"
              >
                <div className="flex-1 relative">
                  <label htmlFor="hero-email" className="sr-only">
                    Enter your email address
                  </label>
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                    aria-hidden="true"
                  />
                  <input
                    id="hero-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full pl-11 pr-4 py-3 md:py-4 rounded-xl sm:rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF5E99]/50 focus:border-[#DF5E99] bg-white text-body-md md:text-body-base transition-shadow"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-[#3CB4C7] border border-white text-white px-6 md:px-10 py-3 md:py-4 rounded-xl sm:rounded-full font-medium shadow-md hover:shadow-xl transition-all flex items-center justify-center text-body-md md:text-btn whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#DF5E99]"
                >
                  <span className="flex items-center">
                    Submit
                    <ArrowRight className="ml-2 h-4 w-5 md:h-5 md:w-6" aria-hidden="true" />
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* --- RIGHT CONTENT: OVERLAPPING IMAGES --- */}
            <div
              className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full max-w-5xl flex items-center justify-center order-1 lg:order-2"
              aria-hidden="true"
            >
              {/* Mobile: Show only one centered image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="lg:hidden absolute inset-0 flex items-center justify-center z-10 mt-5"
              >
                <div className="w-[85%] h-[85%] overflow-hidden border-[6px] border-white/50 shadow-2xl">
                  <Image
                    src={resources.heroImg1.src}
                    alt="A high-energy candid photo of two people"
                    fill
                    priority
                    quality={75}
                    sizes="85vw"
                    className="object-cover rounded-3xl"
                  />
                </div>
              </motion.div>

              {/* Desktop: All overlapping images */}
              {/* Image 1 - Bottom-Left, Vertical */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="hidden lg:block absolute bottom-0 left-0 z-10 w-[40%] h-[50vh] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden border-[4px] sm:border-[6px] md:border-[8px] lg:border-[12px] border-white/50 shadow-2xl"
              >
                <Image
                  src={resources.heroImg1.src}
                  alt="A high-energy candid photo of two people laughing and singing into a microphone; one person is wearing a green jacket with floral patterns and sunglasses"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, (max-width: 1024px) 40vw, 35vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Image 3 - Bottom-Center, Horizontal */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hidden lg:block absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 w-[40%] h-[40%] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[40px] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] lg:border-[10px] border-white/50 shadow-2xl"
              >
                <Image
                  src={resources.heroImg2.src}
                  alt="A wide shot of a modern co-working space or cafe with people sitting at a long pink table working on laptops"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 640px) 55vw, (max-width: 768px) 50vw, (max-width: 1024px) 45vw, 40vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Image 2 - Top-Right, Vertical */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="hidden lg:block absolute top-0 right-0 z-10 w-[40%] h-[55%] rounded-[15px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[50px] overflow-hidden border-[3px] sm:border-[4px] md:border-[6px] lg:border-[10px] border-white/50 shadow-xl"
              >
                <Image
                  src={resources.heroImg3.src}
                  alt="A portrait of a smiling man with a beard, wearing round glasses, a white t-shirt, and a dark beanie"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, (max-width: 1024px) 35vw, 30vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Rocket Badge - Top Right of Image 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -15, 0], rotate: [0, 5, 0] }}
                // transition={{
                //   opacity: { duration: 0.8, ease: "easeOut" },
                //   scale: { duration: 0.8, ease: "easeOut" },
                //   y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                //   rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                // }}
                className="hidden lg:flex absolute bottom-[50vh] left-[40%] transform -translate-x-1/2 translate-y-1/2 z-40 w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-30 lg:h-30 bg-gradient-to-tr from-[#DF5E99] via-[#8E86AF] to-[#45AFC5] rounded-full items-center justify-center border-[2px] sm:border-[4px] md:border-[6px] lg:border-[10px] border-white/50 shadow-2xl"
              >
                <div className="bg-white/10 w-[85%] h-[85%] rounded-full flex items-center justify-center">
                  <Rocket
                    className="text-white h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 "
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
