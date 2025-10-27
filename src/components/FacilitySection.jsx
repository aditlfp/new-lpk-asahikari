import { motion } from "framer-motion";

const FacilitySection = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for facility cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for icons
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      rotate: [0, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gray-100"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4"
          variants={titleVariants}
        >
          Fasilitas Pendukung Lengkap
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12"
          variants={descriptionVariants}
        >
          Kami menyediakan lingkungan belajar yang nyaman dan kondusif untuk
          kesuksesan Anda.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={sectionVariants}
        >
          {/* Facility Card 1 */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="mb-4"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-presentation-icon lucide-presentation text-blue-600"
              >
                <path d="M2 3h20" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                <path d="m7 21 5-5 5 5" />
              </svg>
            </motion.div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">
              Ruang Kelas Modern
            </h3>
            <p className="text-gray-600 text-sm">
              Kelas nyaman ber-AC dilengkapi dengan perangkat multimedia untuk
              menunjang pembelajaran.
            </p>
          </motion.div>

          {/* Facility Card 2 */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="mb-4"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mic-icon lucide-mic text-blue-600"
              >
                <path d="M12 19v3" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <rect x="9" y="2" width="6" height="13" rx="3" />
              </svg>
            </motion.div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">
              Laboratorium Bahasa
            </h3>
            <p className="text-gray-600 text-sm">
              Fasilitas untuk melatih kemampuan mendengar (choukai) dan
              berbicara (kaiwa) secara intensif.
            </p>
          </motion.div>

          {/* Facility Card 3 */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="mb-4"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wrench-icon lucide-wrench text-blue-600"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
              </svg>
            </motion.div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">
              Ruang Praktik Skill
            </h3>
            <p className="text-gray-600 text-sm">
              Tempat khusus untuk simulasi keterampilan kerja sesuai bidang SSW
              yang dipilih.
            </p>
          </motion.div>

          {/* Facility Card 4 */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="mb-4"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house-icon lucide-house text-blue-600"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </motion.div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">
              Asrama Peserta
            </h3>
            <p className="text-gray-600 text-sm">
              Akomodasi yang aman dan nyaman bagi peserta didik dari luar kota.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FacilitySection;
