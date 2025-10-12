import React from "react";
import { motion } from "framer-motion";
import log_ippnu1 from "../assets/images/log_ippnu_res.png";
import log_ippnu2 from "../assets/images/log_kongres_ippnu.png";

function ClientSection() {
  const client = [
    {
      id: "1",
      name: "IPNU PONOROGO",
      logo: log_ippnu1,
    },
    {
      id: "2",
      name: "IPNU PONOROGO",
      logo: log_ippnu2,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Determine grid classes based on number of items
  const getGridClasses = () => {
    const count = client.length;
    if (count === 1) {
      return "flex justify-center";
    } else if (count === 2) {
      return "flex justify-center flex-wrap gap-8";
    } else if (count === 3) {
      return "grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center";
    } else if (count <= 4) {
      return "grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8";
    } else {
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8";
    }
  };

  return (
    <div className="bg-white w-full min-h-fit pb-12">
      <section className="text-center py-8">
        <motion.span
          className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-950"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Mitra Kami
        </motion.span>
      </section>

      {/* Logo Grid */}
      <motion.div
        className={`${getGridClasses()} px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {client.map((data, i) => (
          <motion.div
            key={`${data.id}-${i}`}
            className="flex flex-col gap-y-3 items-center justify-center w-full max-w-[140px]"
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <img
                className="w-full h-full object-contain"
                src={data.logo}
                alt={data.name}
              />
            </motion.div>
            <span className="font-semibold text-blue-950 text-xs sm:text-sm md:text-base text-center px-2">
              {data.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
      {/* End Logo Grid */}
    </div>
  );
}

export default ClientSection;
