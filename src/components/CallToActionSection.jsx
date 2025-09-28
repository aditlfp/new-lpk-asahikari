import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Panjang from '../assets/images/img_panjang.jpg'
import background from '../assets/bg-hero-1.jpg';

const CallToActionSection = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
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
      className="py-10 pb-10 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-xl relative">
          <ParallaxBanner
            layers={[
              {
                image: background,
                speed: -20
              },
              {
                children: (
                  <div className="absolute inset-0 bg-blue-800/70"></div>
                ),
                speed: -10
              }
            ]}
            className="min-h-[400px]"
          >
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="flex flex-col lg:flex-row items-center min-h-[400px]">
                  {/* Left Content */}
                  <div className="flex-1 px-8 lg:px-16 py-12 lg:py-16 text-white">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      Jangan lewatkan kesempatan emas ini! Bergabunglah dengan Asa Hikari Mulya dan raih sukses karirmu di Jepang! Kursi Kami terbatas!
                    </h2>
                    
                    <Button onClick={() => {
                      window.location.href = import.meta.env.VITE_URL_SIGNUP;
                    }} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-bold rounded-bl-2xl rounded-tr-2xl transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105">
                      Gabung Sekarang!
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  
                  {/* Right side spacing */}
                  <div>
                    <img src={Panjang} alt="" srcset="" className='max-w-lg -mr-10'/>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxBanner>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;