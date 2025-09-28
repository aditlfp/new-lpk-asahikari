import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image_formal1 from '../assets/foto_diri_formal_689c4047bec90.jpg';
import image_formal2 from '../assets/foto_diri_formal_689c7d80ab3b0.jpg';
import image_formal3 from '../assets/foto_diri_formal_68b1114c78dbf.jpg';
import image_formal4 from '../assets/foto_diri_formal_68be5d7aa8d2b.jpeg';

const RegistrationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with index 1 to show 3 cards initially

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Marketing",
      subtitle: "UDIN, S.Sos.I",
      description: 'Visi: "MENAMPUNG SISWA SISWI YANG BERMINAT KERJA KE JEPANG YANG TIDAK MAU KULIAH"',
      image: image_formal1
    },
    {
      id: 2,
      number: "02", 
      title: "Marketing",
      subtitle: "Gangsar",
      description: 'Visi: "Menambah relasi dan pengalaman"',
      image: image_formal2
    },
    {
      id: 3,
      number: "03",
      title: "Marketing", 
      subtitle: "Arwindha pupy choirunnisa",
      description: 'Visi: "Mendapat penghasilan tambahan, mempromosikan dan meyebarluaskan tawaran kerja di jepang "',
      image: image_formal3
    },
    {
      id: 4,
      number: "04",
      title: "Marketing",
      subtitle: "RUSBIYANTO", 
      description: 'Visi: "ikut andil dalam mengurangi pengganguran dan meningkatkan pendapatan ekonomi di wilayah saya"',
      image: image_formal4
    },
  ];

  // Auto-scroll with proper boundary handling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= steps.length - 2) return 1; // Reset to show first 3 cards
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  // Navigation functions with boundary handling
  const nextStep = () => {
    setCurrentIndex((prev) => {
      if (prev >= steps.length - 2) return 1;
      return prev + 1;
    });
  };

  const prevStep = () => {
    setCurrentIndex((prev) => {
      if (prev <= 1) return steps.length - 2;
      return prev - 1;
    });
  };

  // Get visible steps (3 steps centered around current)
  const getVisibleSteps = () => {
    // This function is no longer needed for horizontal scrolling
    return steps;
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-gray-100"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Talenta Terbaik Kami</span>
          </h1>
          <p className="text-gray-600">Figur-figur inspiratif yang menjadi bukti nyata dari komitmen dan kualitas kami.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-400 z-0"></div>
          
          {/* Viewport Container */}
          <div className="overflow-hidden px-16">
            {/* Scrolling Container */}
            <div 
              className="flex transition-transform duration-1000 ease-out"
              style={{
                transform: `translateX(-${(currentIndex - 1) * 33.33}%)`,
                width: '100%'
              }}
            >
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className="flex flex-col items-center px-4 flex-shrink-0 pb-10"
                  style={{ 
                    width: '33.33%'
                  }}
                >
                  {/* Number Circle */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-8 z-10 transition-all duration-700 ease-out ${
                      currentIndex === index ? 'bg-blue-600 shadow-lg scale-110' : 'bg-blue-500 scale-100'
                    }`}
                  >
                    {step.number}
                  </div>
                  
                  {/* Step Content */}
                  <div 
                    className={`bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto transition-all duration-700 ease-out overflow-hidden ${
                      currentIndex === index ? 'shadow-xl scale-105' : 'shadow-md'
                    }`}
                    style={{
                      minHeight: '280px'
                    }}
                  >
                    {/* Profile Image */}
                    <div className="w-full h-[20rem] bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.subtitle}
                        className="w-full h-fit object-fill object-center"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-blue-600 text-lg mb-1 text-center">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-800 font-medium mb-3 text-center">
                        {step.subtitle}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevStep}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={nextStep}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center mt-12" onClick={() => () => {
            window.location.href = import.meta.env.VITE_URL_SIGNUP;
          }}>
          <button onClick={() => () => {
              window.location.href = import.meta.env.VITE_URL_SIGNUP;
            }} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-bl-2xl rounded-tr-2xl shadow-lg transition-all duration-300 inline-flex items-center gap-2 hover:scale-105">
            Lihat Selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default RegistrationSection;