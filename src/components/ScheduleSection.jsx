import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Calendar, Star, Award, ArrowRight } from "lucide-react";
import basic_n4 from "../assets/images/basic_n4.jpg";
import basic_n5 from "../assets/images/basic_n5.jpg";

const ScheduleSection = () => {
  const scheduleItems = [
    {
      date: "01",
      month: "JAN",
      title: "Kelas Basic N4",
      duration: "6 Bulan Pendidikan",
      certified: true,
      rating: 4.9,
      reviews: 156,
      description:
        "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
      image: basic_n4,
      tags: ["Bahasa Jepang", "N4 Level", "Percakapan", "Kanji Dasar"],
    },
    {
      date: "02",
      month: "FEB",
      title: "Kelas Basic N5",
      duration: "6 Bulan Pendidikan",
      certified: true,
      rating: 4.8,
      reviews: 89,
      description:
        "Kelas Basic direkomendasikan bagi peserta yang memiliki keinginan untuk siap bekerja di Jepang. Kelas BASIC meliputi pendidikan dasar bahasa Jepang serta Budaya dan etika di negara Jepang.",
      image: basic_n5,
      tags: ["Sertifikat Kompetensi", "N5 Level"],
    },
  ];

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

  const headerVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        >
          <motion.div
            className="text-blue-500 text-xs sm:text-sm font-medium mb-2"
            variants={headerVariants}
          >
            Kelas Terbaik Asa Hikari Mulya
          </motion.div>
          <motion.h2
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 px-2"
            variants={headerVariants}
          >
            Kelas BASIC adalah Kelas Terbaik di Asa Hikari Mulya
          </motion.h2>
          <motion.h3
            className="text-base xs:text-lg sm:text-xl text-blue-600 font-semibold mb-4 sm:mb-6"
            variants={headerVariants}
          >
            MENGAPA DEMIKIAN ?
          </motion.h3>
          <motion.p
            className="text-gray-600 text-xs xs:text-sm sm:text-base max-w-6xl mx-auto leading-relaxed mb-3 sm:mb-4 px-2"
            variants={headerVariants}
          >
            Di Kelas BASIC, Para Peserta Didik Mendapatkan Berbagai Materi
            Pendidikan yang Menjadi Persyaratan untuk Mengikuti Program SSW
            (Specified Skill Worker) diantaranya Kurikulum Pendidikan Kemampuan
            Bahasa Jepang JF-Test A2 dan Kurikulum Pendidikan Skill SSW di
            Berbagai Bidang.
          </motion.p>
          <motion.p
            className="text-gray-600 text-xs xs:text-sm sm:text-base max-w-6xl mx-auto leading-relaxed px-2"
            variants={headerVariants}
          >
            Dan yang Lebih Menariknya Peserta Didik kelas BASIC akan
            dikutsertakan dalam Wawancara Bersama Pihak User JEPANG untuk
            Penempatan Kerja di Berbagai Wilayah yang ada di Jepang.
          </motion.p>
        </motion.div>

        {/* Schedule Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        >
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              variants={cardVariants}
            >
              {/* Card Image */}
              <div className="relative h-36 xs:h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200 mb-4 sm:mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center w-full h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Top right badges */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col sm:flex-row gap-1 sm:gap-2">
                  <div className="bg-gray-600 text-white text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded flex items-center gap-0.5 xs:gap-1">
                    <Calendar className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                    <span className="whitespace-nowrap">{item.duration}</span>
                  </div>
                  {item.certified && (
                    <div className="bg-blue-600 text-white text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded flex items-center gap-0.5 xs:gap-1">
                      <Award className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                      <span className="whitespace-nowrap">Bersertifikat</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base xs:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs xs:text-sm leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] xs:text-xs bg-gray-100 text-gray-700 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-[10px] xs:text-xs text-gray-500">
                      +{item.tags.length - 3} lainnya
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 ${
                          i < Math.floor(item.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs xs:text-sm text-gray-600">
                    {item.rating} ({item.reviews})
                  </span>
                </div>

                {/* Daftar Button */}
                <div className="text-center mt-4 sm:mt-6 md:mt-8">
                  <button
                    onClick={() => {
                      window.location.href = import.meta.env.VITE_URL_SIGNUP;
                    }}
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-2 px-3 sm:px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative text-sm sm:text-base">
                      Daftar
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
            </motion.div>
          ))}
        </motion.div>

        {/* Lihat Selengkapnya Button */}
        <motion.div
          className="text-center mt-8 sm:mt-10 md:mt-12"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5, margin: "0px 0px -50px 0px" }}
        >
          <button
            onClick={() => {
              window.location.href = import.meta.env.VITE_URL_SIGNUP;
            }}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-2 px-3 sm:px-8 rounded-tr-2xl rounded-bl-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 overflow-hidden"
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
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
