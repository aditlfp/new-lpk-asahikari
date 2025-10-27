import { motion } from "framer-motion";

const GallerySection = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the description
  const descriptionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for gallery items
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Animation variants for the overlay - still from center
  const overlayVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transformOrigin: "center",
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the text - now from bottom but centered horizontally
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Move from below
      x: 0, // Keep centered horizontally
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  // Gallery data
  const galleryItems = [
    {
      src: "https://www.asahikarimulya.co.id/assets/Job-D8iRyKfr.jpeg",
      title: "Job Fair di PCC PONOROGO",
    },
    {
      src: "https://www.asahikarimulya.co.id/assets/Pengantaran-NlSIryoz.jpeg",
      title: "Pengantaran Peserta Didik ke Jepang",
    },
    {
      src: "https://www.asahikarimulya.co.id/assets/Pengantaran2-DssrH4YK.jpeg",
      title: "Pengantaran Peserta Didik ke Jepang",
    },
    {
      src: "https://www.asahikarimulya.co.id/assets/Persiapan-DW4FX6Mo.jpeg",
      title: "Pertemuan Dengan Pejabat Jepang",
    },
    {
      src: "https://www.asahikarimulya.co.id/assets/Pertemuan-DktZs0_r.jpeg",
      title: "Pertemuan dengan pejabat penting Jepang",
    },
    {
      src: "https://www.asahikarimulya.co.id/assets/Pembekalan-D8Gdm3ki.jpeg",
      title: "Persiapan Pembekalan Peserta Didik",
    },
    {
      src: "https://www.asahikarimulya.co.id/assets/ippnu_ponorogo-jYDu0dDv.jpeg",
      title: "Kerjasama Dengan IPPNU PONOROGO",
    },
    {
      src: "https://www.asahikarimulya.co.id/assets/ippnu_ponorogo2-DKbj7QrE.jpeg",
      title: "Kerjasama Dengan IPNU PONOROGO",
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4"
          variants={titleVariants}
        >
          Galeri
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 text-sm sm:text-base"
          variants={descriptionVariants}
        >
          Momen-momen berharga dari proses pembelajaran hingga keberhasilan
          alumni kami.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={sectionVariants}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover rounded-2xl"
              />

              {/* Overlay that appears from center */}
              <motion.div
                className="absolute inset-0 bg-blue-900/40 flex items-end justify-center p-4 rounded-2xl"
                initial="hidden"
                whileHover="visible"
                variants={overlayVariants}
              >
                <motion.p
                  className="text-white font-semibold text-center w-full"
                  variants={textVariants}
                >
                  {item.title}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GallerySection;
