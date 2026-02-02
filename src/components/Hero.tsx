"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
              className="max-w-3xl space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              {/* --- Title Section --- */}
              <h1 className="font-bold leading-[1.1] text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                <span className="block">We scale ecommerce</span>
                <span className="block">brands with precision</span>
                <span className="text-[#DF5E99] block">performance marketing</span>
                <span className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
                  & <span className="text-[#45AFC5]">search</span>.
                </span>
              </h1>

              {/* --- Subtitle --- */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-snug max-w-2xl mx-auto lg:mx-0">
                Drive growth with data-driven strategies that deliver measurable results for your ecommerce business.
              </p>

              {/* --- Search Bar Container --- */}
              <form
                className="relative flex items-center p-[4px] md:p-[6px] rounded-2xl sm:rounded-full max-w-2xl lg:mx-0 mx-auto"
                style={{
                  background: 'linear-gradient(to right, #DF5E99, #45AFC5)',
                }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col sm:flex-row w-full items-center bg-transparent rounded-[inherit] overflow-hidden gap-2 sm:gap-0">
                  {/* Input Field */}
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full sm:flex-1 bg-white ml-0 sm:ml-1 my-0 sm:my-1 h-12 md:h-14 pl-6 rounded-xl sm:rounded-full outline-none text-gray-700 placeholder:text-gray-400 text-base md:text-lg"
                    required
                  />

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#45AFC5] sm:bg-transparent text-white px-6 md:px-8 h-12 md:h-14 font-semibold text-lg md:text-xl border border-white/50 sm:border-white rounded-xl sm:rounded-full sm:ml-2 mr-0 sm:mr-3 transition-colors"
                  >
                    Submit <ArrowRight className="h-auto w-auto" />
                  </motion.button>
                </div>
              </form>
            </motion.div>


            {/* --- RIGHT CONTENT: OVERLAPPING IMAGES --- */}
            <div
              className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full max-w-5xl flex items-center justify-center order-1 lg:order-2"
              aria-hidden="true"
            >
              {/* Mobile: Show only one centered image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="lg:hidden absolute inset-0 flex items-center justify-center z-10 mt-5"
              >
                <div className="w-[85vw] h-[85%]">
                  <Image
                    src={resources.heroImg2.src}
                    alt="A high-energy candid photo of two people"
                    fill
                    priority
                    quality={75}
                    className="object-contain rounded-3xl positioned-center"
                  />
                </div>
              </motion.div>

              <div className="h-[80%] w-full flex justify-center item-center">
                {/* Image 1 - Bottom-Left, Vertical */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="hidden lg:block absolute bottom-10 left-0 z-10 w-[20vw] h-[54vh] rounded-[15px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[40px]"
                >
                  <Image
                    src={resources.heroImg1.src}
                    alt="A high-energy candid photo of two people laughing and singing into a microphone; one person is wearing a green jacket with floral patterns and sunglasses"
                    fill
                    priority
                    quality={75}
                    // sizes="(max-width: 640px) 50vw, (max-width: 768px) 45vw, (max-width: 1024px) 40vw, 35vw"
                    className="object-contain w-fit h-fit"
                    style={{ borderRadius: 'inherit' }}
                  />
                </motion.div>

                {/* Image 3 - Bottom-Center, Horizontal */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-[20vw] h-[40vh] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[40px]"
                >
                  <Image
                    src={resources.heroImg2.src}
                    alt="A wide shot of a modern co-working space or cafe with people sitting at a long pink table working on laptops"
                    fill
                    priority
                    quality={75}
                    // sizes="(max-width: 640px) 55vw, (max-width: 768px) 50vw, (max-width: 1024px) 45vw, 40vw"
                    className="object-contain w-fit h-fit"
                    style={{ borderRadius: 'inherit' }}
                  />
                </motion.div>

                {/* Image 2 - Top-Right, Vertical */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="hidden lg:block absolute top-10 right-0 z-10 w-[18vw] h-[40vh] rounded-[15px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] "
                >
                  <Image
                    src={resources.heroImg3.src}
                    alt="A portrait of a smiling man with a beard, wearing round glasses, a white t-shirt, and a dark beanie"
                    fill
                    priority
                    quality={75}
                    // sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, (max-width: 1024px) 35vw, 30vw"
                    className="object-contain w-fit h-fit"
                    style={{ borderRadius: 'inherit' }}
                  />
                </motion.div>

                {/* Floating Rocket Badge - Top Right of Image 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -15, 0], rotate: [0, 5, 0] }}
                  className="hidden lg:flex absolute top-15 left-[40%] transform -translate-x-1/2 translate-y-1/2 z-40 w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-30 lg:h-30 bg-gradient-to-tr from-[#DF5E99] via-[#8E86AF] to-[#45AFC5] rounded-full items-center justify-center border-[2px] sm:border-[4px] md:border-[6px] lg:border-[10px] border-white/50 shadow-2xl"
                >
                  <div className="bg-white/10 w-[85%] h-[85%] rounded-full flex items-center justify-center">
                    <Image
                      src={resources.rocket.src}
                      alt={resources.rocket.alt}
                      fill
                      className="object-contain p-7"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
