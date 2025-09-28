import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircleIcon } from 'lucide-react';
import Panjang from '../assets/images/img_panjang.jpg'
import img_small1 from '../assets/images/bg1.jpg';
import img_small2 from '../assets/images/bg4.jpg';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
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

  const textVariants = {
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

  const buttonVariants = {
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

  const bigImageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const smallImageTopVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.3
      }
    }
  };

  const smallImageBottomVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              variants={titleVariants}
            >
              About <span className="text-blue-600">ASA HIKARI MULYA</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={textVariants}
            >
              Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya yang mempersiapkan Anda untuk bekerja di Jepang melalui program Specified Skilled Worker (SSW) dan Magang. Dapatkan pelatihan intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum berbasis kebutuhan pasar kerja Jepang.
            </motion.p>
            
            <div onClick={() => {
              window.location.href = import.meta.env.VITE_URL_SIGNUP;
            }}>
              <motion.button 
                className="flex gap-x-2 bg-blue-600 hover:bg-blue-700 transition-all ease-in-out text-white px-6 py-3 font-semibold rounded-tr-2xl rounded-bl-2xl"
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
              >
                Read More 
                <MessageCircleIcon className='text-xs'/>
              </motion.button>
            </div>
          </motion.div>
          
          {/* Images Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Kolom kiri: dua gambar kecil */}
            <div className="flex flex-col space-y-5 mt-72">
              <div className='hover:scale-110 transition-all ease-in-out duration-300'>
                <motion.img
                  src={img_small1}
                  className="w-full h-[18vh] object-cover rounded-lg rounded-tl-[3.1rem] shadow-lg"
                  variants={smallImageTopVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                />
              </div>
              <div className='hover:scale-110 transition-all ease-in-out duration-300'>
                <motion.img
                  src={img_small2}
                  alt="Scout Activity 2"
                  className="w-full h-full object-cover rounded-lg rounded-br-[3.1rem] shadow-lg"
                  variants={smallImageBottomVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                />
              </div>
            </div>

            {/* Kolom kanan: satu gambar besar */}
            <div className="flex justify-center items-start pt-4 ml-12 hover:scale-110 transition-all ease-in-out duration-300 w-full">
              <motion.img
                src={Panjang}
                alt="Scout Activity 3"
                className="w-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[50vh] object-cover rounded-xl shadow-lg rounded-br-[3rem]"
                variants={bigImageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;