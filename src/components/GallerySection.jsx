import { motion } from "framer-motion";
import job_fair from "../assets/images/Job.jpeg";
import pengantaran_siswa from "../assets/images/Pengantaran.jpeg";
import pengantaran_siswa2 from "../assets/images/Pengantaran2.jpeg";
import persiapan from "../assets/images/Persiapan.jpeg";
import pertemuan from "../assets/images/Pertemuan.jpeg";
import pembekalan from "../assets/images/Pembekalan.jpeg";
import pembekalan2 from "../assets/images/Pembekalan2.jpeg";

const galleryItems = [
  {
    img: job_fair,
    title: "Job Fair di PCC PONOROGO",
  },
  {
    img: pengantaran_siswa,
    title: "Pengantaran Peserta Didik ke Jepang",
  },
  {
    img: pengantaran_siswa2,
    title: "Pengantaran Peserta Didik ke Jepang",
  },
  {
    img: persiapan,
    title: "Pertemuan Dengan Pejabat Jepang",
  },
  {
    img: pertemuan,
    title: "Pertemuan dengan pejabat penting Jepang",
  },
  {
    img: pembekalan,
    title: "Persiapan Pembekalan Peserta Didik",
  },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4">
          Galeri
        </h2>
        <p className="text-gray-600 mb-12 text-sm sm:text-base">
          Momen-momen berharga dari proses pembelajaran hingga keberhasilan
          alumni kami.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 rounded-2xl">
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
