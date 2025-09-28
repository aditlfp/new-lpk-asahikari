import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Calendar,
  MapPin,
  Star,
  Award,
  ArrowBigRight,
  ArrowRight,
} from "lucide-react";
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        >
          <motion.div
            className="text-blue-500 text-sm font-medium mb-2"
            variants={headerVariants}
          >
            Kelas Terbaik Asa Hikari Mulya
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            variants={headerVariants}
          >
            Kelas BASIC adalah Kelas Terbaik di Asa Hikari Mulya
          </motion.h2>
          <motion.h3
            className="text-xl text-blue-600 font-semibold mb-6"
            variants={headerVariants}
          >
            MENGAPA DEMIKIAN ?
          </motion.h3>
          <motion.p
            className="text-gray-600 text-base max-w-6xl mx-auto leading-relaxed mb-4"
            variants={headerVariants}
          >
            Di Kelas BASIC, Para Peserta Didik Mendapatkan Berbagai Materi
            Pendidikan yang Menjadi Persyaratan untuk Mengikuti Program SSW
            (Specified Skill Worker) diantaranya Kurikulum Pendidikan Kemampuan
            Bahasa Jepang JF-Test A2 dan Kurikulum Pendidikan Skill SSW di
            Berbagai Bidang.
          </motion.p>
          <motion.p
            className="text-gray-600 text-base max-w-6xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Dan yang Lebih Menariknya Peserta Didik kelas BASIC akan
            dikutsertakan dalam Wawancara Bersama Pihak User JEPANG untuk
            Penempatan Kerja di Berbagai Wilayah yang ada di Jepang.
          </motion.p>
        </motion.div>

        {/* Schedule Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
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
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <img src={item.image} />
                  </div>
                </div>

                {/* Top right badges */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <div className="bg-gray-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.duration}
                  </div>
                  {item.certified && (
                    <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Bersertifikat
                    </div>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{item.tags.length - 3} lainnya
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {item.rating} ({item.reviews})
                  </span>
                </div>

                {/* Daftar Button */}
                <div>
                  <Button
                    clickFunc={() => {
                      window.location.href = import.meta.env.VITE_URL_SIGNUP;
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all ease-in-out duration-300 text-white font-semibold py-2 rounded-bl-2xl rounded-tr-2xl"
                  >
                    Daftar <ArrowRight />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lihat Selengkapnya Button */}
        <motion.div
          className="text-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5, margin: "0px 0px -50px 0px" }}
        >
          <Button clickFunc={() => {
              window.location.href = import.meta.env.VITE_URL_SIGNUP;
            }} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold rounded-bl-2xl rounded-tr-2xl hover:scale-110 transition-all ease-in-out duration-300">
            Lihat Selengkapnya <ArrowRight />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
