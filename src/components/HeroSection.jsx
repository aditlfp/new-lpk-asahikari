import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';
import bg4 from '../assets/images/bg4.jpg';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  // Array of background images
  const backgroundImages = [
    bg1, bg2, bg3, bg4
  ];


  useEffect(() => {
      const interval = setInterval(() => {
        // Start flash animation
        setIsFlashing(true);
        
        // Change image during flash peak
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % backgroundImages.length
          );
        }, 150); // Change image at flash peak
        
        // End flash animation
        setTimeout(() => {
          setIsFlashing(false);
        }, 300); // Flash duration
        
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Animation variants for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 1.1
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section 
      id="home"
      className="relative h-screen overflow-hidden"
    >
      <div className="absolute inset-0">
      <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: 1,
              scale: isFlashing ? 1.05 : 1.1,
              transition: { 
                opacity: { duration: 0.5 },
                scale: {
                  duration: isFlashing ? 0.3 : 5.7,
                  ease: isFlashing ? "easeOut" : "linear"
                }
              }
            }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat bg-gray-900"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImages[currentImageIndex]}')`
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Flash Overlay */}
        <AnimatePresence>
          {isFlashing && (
            <motion.div
              className="absolute inset-0 bg-gray-100 z-20"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                transition: { 
                  duration: 0.3,
                  times: [0, 0.5, 1],
                  ease: "easeInOut"
                }
              }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Side Banner */}
      <div className="absolute hidden sm:block w-fit h-fit inset-0 top-1/2 -left-20 bg-blue-600 text-white p-1 px-2 -rotate-90 origin-right transform -translate-y-1/2 -translate-x-12 z-10">
        <span className="text-sm font-medium whitespace-nowrap">ASA HIKARI MULYA 2025</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.div 
          className="mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Judul dengan garis kiri & kanan */}
          <div className="flex items-center justify-center gap-6">
            <motion.div 
              className="flex-grow border-t border-gray-100 opacity-10"
              variants={lineVariants}
              style={{ originX: 1 }}
            ></motion.div>
            <motion.div 
              className="flex flex-col text-7xl md:text-8xl font-bold leading-tight"
              variants={titleVariants}
            >
              <motion.span variants={titleWordVariants}>Asa</motion.span>
              <motion.span variants={titleWordVariants}>Hikari</motion.span>
              <motion.span variants={titleWordVariants}>Mulya</motion.span>
            </motion.div>
            <motion.div 
              className="flex-grow border-t border-gray-100 opacity-10"
              variants={lineVariants}
              style={{ originX: 0 }}
            ></motion.div>
          </div>

          {/* Sub-judul dengan kutipan */}
          <motion.p 
            className="text-xl md:text-2xl mb-0 font-semibold italic px-4"
            variants={subtitleVariants}
          >
            "Kami siap memberikan bimbingan dan segala hal yang perlu Anda ketahui untuk mempersiapkan diri bekerja di Jepang"
          </motion.p>
          
          {/* Paragraf deskripsi */}
          <motion.p 
            className="text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed"
            variants={descriptionVariants}
          >
            Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya yang mempersiapkan Anda untuk bekerja di Jepang melalui program Specified Skilled Worker (SSW) dan Magang. Dapatkan pelatihan intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis kebutuhan pasar kerja Jepang.
          </motion.p>

          {/* BTN ON MOBILE */}
          <motion.div 
            className='flex justify-center items-center pb-10'
            variants={buttonVariants}
            onClick={() => {
              window.location.href = import.meta.env.VITE_URL_SIGNUP;
            }}
          >
            <Button className="bg-blue-800 w-1/2 h-10 rounded-bl-2xl rounded-tr-2xl text-lg hover:bg-blue-700 hover:scale-110 transition-all ease-in-out duration-200 sm:hidden flex">Join Now <MessageCircle /> </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;