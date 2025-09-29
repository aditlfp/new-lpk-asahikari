import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ParallaxBanner } from "react-scroll-parallax";
import Panjang from "../assets/images/img_panjang.jpg";
import background from "../assets/bg-hero-1.jpg";

const CallToActionSection = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="py-4 sm:py-6 md:py-8 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative">
          <ParallaxBanner
            layers={[
              {
                image: background,
                speed: -20,
                opacity: [0.3, 0.6],
              },
              {
                children: (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/80"></div>
                ),
                speed: -10,
              },
              {
                children: (
                  <div className="absolute inset-0">
                    <div className="absolute top-10 right-20 w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-40 w-1.5 h-1.5 bg-orange-300/30 rounded-full animate-pulse delay-75"></div>
                    <div className="absolute top-1/3 right-10 w-1 h-1 bg-blue-200/30 rounded-full animate-pulse delay-150"></div>
                  </div>
                ),
                speed: -5,
              },
            ]}
            className="min-h-[250px] sm:min-h-[280px] md:min-h-[320px]"
          >
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[250px] sm:min-h-[280px] md:min-h-[320px]">
                  {/* Left Content */}
                  <motion.div
                    className="flex-1 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 text-white text-center lg:text-left max-w-3xl"
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
                      <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                        Jangan lewatkan kesempatan emas ini!
                        <span className="block mt-1 bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
                          Bergabunglah dengan Asa Hikari Mulya
                        </span>
                      </h2>

                      <p className="text-[11px] xs:text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5 text-blue-50 leading-relaxed">
                        Raih sukses karirmu di Jepang!
                        <span className="font-semibold text-orange-200 ml-1">
                          Kursi Kami terbatas!
                        </span>
                      </p>

                      <Button
                        onClick={() => {
                          window.location.href =
                            import.meta.env.VITE_URL_SIGNUP;
                        }}
                        className="group relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white px-4 xs:px-5 sm:px-6 py-2 sm:py-2.5 md:py-3 text-[11px] xs:text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 inline-flex items-center gap-1.5 shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-600/50 hover:-translate-y-0.5 hover:scale-105 overflow-hidden border border-orange-400/50"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        <span className="relative">Gabung Sekarang!</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </motion.div>

                  {/* Right side image - aligned to right edge */}
                  <motion.div
                    className="hidden lg:block lg:flex-shrink-0 self-stretch"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="relative h-full flex items-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 via-blue-800/40 to-transparent z-10"></div>
                      <img
                        src={Panjang}
                        alt="Join Us"
                        className="h-full w-56 xl:w-64 object-cover object-center"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 sm:w-48 h-40 sm:h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
          </ParallaxBanner>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;
