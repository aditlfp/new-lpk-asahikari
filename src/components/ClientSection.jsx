import { motion } from "framer-motion";

const ClientSection = () => {
  const wiggleVariants = {
    hover: {
      rotate: [0, 5, -5, 5, 0], // Keyframes for rotation
      transition: {
        duration: 0.5, // Duration for one complete wiggle
        repeat: 2, // Number of repeats (2 repeats = 3 total wiggles)
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white w-full min-h-fit pb-12">
      <motion.div
        className="text-center py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={titleVariants}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-950 "
        >
          Mitra Kami
        </motion.span>
      </motion.div>

      <motion.div
        className="flex justify-center flex-wrap gap-8 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First Card */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-y-3 items-center justify-center w-full max-w-[140px]"
          whileHover={{ scale: 1.05 }} // Add scale animation on hover
          transition={{ duration: 0.3, ease: "easeInOut" }} // Scale transition
        >
          <motion.div
            variants={wiggleVariants}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
            whileHover="hover" // Trigger wiggle animation on hover
          >
            <img
              src="https://www.asahikarimulya.co.id/assets/log_ippnu_res-CwhFOOxJ.png"
              className="w-full h-full object-contain"
              alt="IPPNU PONOROGO"
              srcSet=""
            />
          </motion.div>
          <span className="font-semibold text-blue-950 text-xs sm:text-sm md:text-base text-center px-2">
            IPPNU PONOROGO
          </span>
        </motion.div>

        {/* Second Card */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-y-3 items-center justify-center w-full max-w-[140px]"
          whileHover={{ scale: 1.05 }} // Add scale animation on hover
          transition={{ duration: 0.3, ease: "easeInOut" }} // Scale transition
        >
          <motion.div
            variants={wiggleVariants}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
            whileHover="hover" // Trigger wiggle animation on hover
          >
            <img
              src="https://www.asahikarimulya.co.id/assets/log_kongres_ippnu-BnsfuShg.png"
              className="w-full h-full object-contain"
              alt="IPNU PONOROGO"
              srcSet=""
            />
          </motion.div>
          <span className="font-semibold text-blue-950 text-xs sm:text-sm md:text-base text-center px-2">
            IPNU PONOROGO
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientSection;
