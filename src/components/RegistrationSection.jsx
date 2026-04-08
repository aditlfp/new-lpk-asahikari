import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image_formal1 from "../assets/foto_diri_formal_689c4047bec90.jpg";
import image_formal3 from "../assets/foto_diri_formal_68b1114c78dbf.jpg";
import image_formal4 from "../assets/foto_diri_formal_68be5d7aa8d2b.jpeg";
import placeholder from '../assets/images/placeholder.png'

const RegistrationSection = () => {
  // Initialize with 0 instead of -1
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Marketing",
      subtitle: "UDIN, S.Sos.I",
      description:
        'Visi: "MENAMPUNG SISWA SISWI YANG BERMINAT KERJA KE JEPANG YANG TIDAK MAU KULIAH"',
      image: image_formal1,
    },
    {
      id: 2,
      number: "02",
      title: "Marketing",
      subtitle: "Gangsar",
      description: 'Visi: "Menambah relasi dan pengalaman"',
      image: placeholder,
    },
    {
      id: 3,
      number: "03",
      title: "Marketing",
      subtitle: "Arwindha pupy choirunnisa",
      description:
        'Visi: "Mendapat penghasilan tambahan, mempromosikan dan meyebarluaskan tawaran kerja di jepang "',
      image: image_formal3,
    },
    {
      id: 4,
      number: "04",
      title: "Marketing",
      subtitle: "RUSBIYANTO",
      description:
        'Visi: "ikut andil dalam mengurangi pengganguran dan meningkatkan pendapatan ekonomi di wilayah saya"',
      image: image_formal4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const nextStep = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold mb-4 tracking-wide">
              TIM TERBAIK KAMI
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Talenta Terbaik Kami
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Figur-figur inspiratif yang menjadi bukti nyata dari komitmen dan
              kualitas kami
            </p>
          </motion.div>
        </div>

        {/* Desktop Timeline Container */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Modern connection line with gradient */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent z-0 rounded-full"></div>

          <div className="overflow-hidden px-16">
            <div
              className="flex transition-transform duration-1000 ease-out"
              style={{
                // Fixed calculation for proper centering
                transform: `translateX(-${currentIndex * 33.33}%)`,
                width: `${steps.length * 33.33}%`,
              }}
            >
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center px-4 flex-shrink-0 pb-10"
                  style={{ width: "33.33%" }}
                >
                  {/* Modern number badge */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl my-8 z-10 transition-all duration-700 ease-out relative ${
                      currentIndex === index
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 shadow-xl shadow-blue-500/50 scale-110"
                        : "bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg scale-100"
                    }`}
                  >
                    {currentIndex === index && (
                      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
                    )}
                    <span className="relative z-10">{step.number}</span>
                  </div>

                  {/* Modern card with glassmorphism */}
                  <div
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl w-full max-w-sm mx-auto transition-all duration-700 ease-out overflow-hidden border border-gray-200/50 ${
                      currentIndex === index
                        ? "shadow-2xl shadow-blue-500/20 scale-105 ring-2 ring-blue-500/30"
                        : "shadow-lg hover:shadow-xl"
                    }`}
                    style={{ minHeight: "280px" }}
                  >
                    {/* Profile Image with modern overlay */}
                    <div className="w-full h-72 bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100 relative overflow-hidden group">
                      <img
                        src={step.image}
                        alt={step.subtitle}
                        className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content with improved typography */}
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold mb-3">
                        {step.title}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                        {step.subtitle}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed text-center italic">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modern navigation arrows */}
          <button
            onClick={prevStep}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white z-20 group"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={nextStep}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white z-20 group"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="w-full flex-shrink-0 px-4 sm:px-6 mb-10"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden max-w-sm mx-auto">
                    <div className="w-full h-64 sm:h-72 bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100 relative overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.subtitle}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold mb-3">
                        {step.title}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 text-center">
                        {step.subtitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center italic">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation arrows */}
          <button
            onClick={prevStep}
            className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-blue-600 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white z-20"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={nextStep}
            className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-blue-600 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white z-20"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Modern progress indicators */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-8 h-3 bg-gradient-to-r from-blue-600 to-blue-700"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Modern CTA button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={() => {
              window.location.href = import.meta.env.VITE_URL_SIGNUP;
            }}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 sm:px-8 rounded-tr-2xl rounded-bl-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative text-sm sm:text-base">
              Lihat Selengkapnya
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 relative transition-transform group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default RegistrationSection;
