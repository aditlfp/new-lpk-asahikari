import { motion } from "framer-motion";
import { MessageCircleIcon } from "lucide-react";
import Panjang from "../assets/images/img_panjang.jpg";
import img_small1 from "../assets/images/bg1.jpg";
import img_small2 from "../assets/images/bg4.jpg";

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
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

  const textVariants = {
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

  const buttonVariants = {
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

  const bigImageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const smallImageTopVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.3,
      },
    },
  };

  const smallImageBottomVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          >
            <motion.h2
              className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight"
              variants={titleVariants}
            >
              About <span className="text-blue-600">ASA HIKARI MULYA</span>
            </motion.h2>

            <motion.p
              className="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              variants={textVariants}
            >
              Asa Hikari Mulya adalah pusat pelatihan bahasa Jepang terpercaya
              yang mempersiapkan Anda untuk bekerja di Jepang melalui program
              Specified Skilled Worker (SSW) dan Magang. Dapatkan pelatihan
              intensif, sertifikasi resmi, dan penempatan kerja dengan kurikulum
              berbasis kebutuhan pasar kerja Jepang.
            </motion.p>

            <div
              onClick={() => {
                window.location.href = import.meta.env.VITE_URL_SIGNUP;
              }}
            >
              <motion.button
                className="flex items-center gap-x-2 bg-blue-600 hover:bg-blue-700 transition-all ease-in-out text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-tr-2xl rounded-bl-2xl w-auto"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
                <MessageCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Images Layout */}
          <div className="order-1 lg:order-2">
            {/* Mobile Layout (Single Column) */}
            <div className="block md:hidden space-y-4">
              <div className="hover:scale-105 transition-all ease-in-out duration-300">
                <motion.img
                  src={Panjang}
                  alt="Scout Activity 3"
                  className="w-full h-48 xs:h-56 sm:h-64 object-cover rounded-xl shadow-lg rounded-br-[2rem]"
                  variants={bigImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                    margin: "0px 0px -80px 0px",
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="hover:scale-105 transition-all ease-in-out duration-300">
                  <motion.img
                    src={img_small1}
                    className="w-full h-24 xs:h-28 sm:h-32 object-cover rounded-lg rounded-tl-[1.5rem] shadow-lg"
                    variants={smallImageTopVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.2,
                      margin: "0px 0px -50px 0px",
                    }}
                  />
                </div>
                <div className="hover:scale-105 transition-all ease-in-out duration-300">
                  <motion.img
                    src={img_small2}
                    alt="Scout Activity 2"
                    className="w-full h-24 xs:h-28 sm:h-32 object-cover rounded-lg rounded-br-[1.5rem] shadow-lg"
                    variants={smallImageBottomVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.2,
                      margin: "0px 0px -50px 0px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Tablet and Desktop Layout */}
            <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-6 p-2 sm:p-4">
              {/* Kolom kiri: dua gambar kecil */}
              <div className="flex flex-col space-y-4 lg:space-y-5 mt-32 sm:mt-80 lg:mt-72">
                <div className="hover:scale-110 transition-all ease-in-out duration-300">
                  <motion.img
                    src={img_small1}
                    className="w-full h-16 sm:h-20 md:h-24 lg:h-[18vh] object-cover rounded-lg rounded-tl-[2rem] lg:rounded-tl-[3.1rem] shadow-lg"
                    variants={smallImageTopVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.2,
                      margin: "0px 0px -50px 0px",
                    }}
                  />
                </div>
                <div className="hover:scale-110 transition-all ease-in-out duration-300">
                  <motion.img
                    src={img_small2}
                    alt="Scout Activity 2"
                    className="w-full h-24 sm:h-28 md:h-32 lg:h-full object-cover rounded-lg rounded-br-[2rem] lg:rounded-br-[3.1rem] shadow-lg"
                    variants={smallImageBottomVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.2,
                      margin: "0px 0px -50px 0px",
                    }}
                  />
                </div>
              </div>

              {/* Kolom kanan: satu gambar besar */}
              <div className="flex justify-center items-start pt-2 sm:pt-4 ml-4 sm:ml-2 lg:ml-2 hover:scale-110 transition-all ease-in-out duration-300 w-full">
                <motion.img
                  src={Panjang}
                  alt="Scout Activity 3"
                  className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md h-64 sm:h-80 md:h-[40vh] lg:h-[50vh] object-cover rounded-xl shadow-lg rounded-br-[2rem] lg:rounded-br-[3rem]"
                  variants={bigImageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                    margin: "0px 0px -80px 0px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
