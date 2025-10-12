import { motion } from "framer-motion";
import { Home, Mic, Presentation, Wrench } from "lucide-react";

const facilities = [
  {
    icon: <Presentation size={40} className="text-blue-600" />,
    title: "Ruang Kelas Modern",
    desc: "Kelas nyaman ber-AC dilengkapi dengan perangkat multimedia untuk menunjang pembelajaran.",
  },
  {
    icon: <Mic size={40} className="text-blue-600" />,
    title: "Laboratorium Bahasa",
    desc: "Fasilitas untuk melatih kemampuan mendengar (choukai) dan berbicara (kaiwa) secara intensif.",
  },
  {
    icon: <Wrench size={40} className="text-blue-600" />,
    title: "Ruang Praktik Skill",
    desc: "Tempat khusus untuk simulasi keterampilan kerja sesuai bidang SSW yang dipilih.",
  },
  {
    icon: <Home size={40} className="text-blue-600" />,
    title: "Asrama Peserta",
    desc: "Akomodasi yang aman dan nyaman bagi peserta didik dari luar kota.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FacilitiesSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4">
          Fasilitas Pendukung Lengkap
        </h2>
        <p className="text-gray-600 mb-12">
          Kami menyediakan lingkungan belajar yang nyaman dan kondusif untuk
          kesuksesan Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
