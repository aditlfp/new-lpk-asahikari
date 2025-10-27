import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const waNumber = "6281395554334"; // Replace with your WhatsApp number

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function encodeForWhatsapp(str) {
    return encodeURIComponent(str).replace(/%20/g, "+"); // WA prefers '+' for spaces
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Construct message with proper escaping
      const waMessage = [
        `Halo, saya *${formData.name}*.`,
        `Berikut data diri dan pesan saya:`,
        ``,
        `*Email       :* ${formData.email}`,
        `*Program :* ${formData.program}`,
        `*Pesan      :* ${formData.message}`,
        ``,
        `Mohon konfirmasi lebih lanjut. Terima kasih`,
      ].join("\n");

      const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
        waMessage
      )}`;

      // Open link in new tab
      window.open(waLink, "_blank");

      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          program: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kami",
      content: "Jl. Pendidikan No. 123, Ponorogo, Jawa Timur 63411",
      link: null,
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@asahikarimulya.ac.id",
      link: null,
    },
    {
      icon: Phone,
      title: "Telepon / WhatsApp",
      content: "+62 812-3456-7890",
      link: null,
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wide">
            HUBUNGI KAMI
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Kontak & Pendaftaran
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Hubungi kami untuk informasi lebih lanjut atau langsung daftar
            program pelatihan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Info Cards */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                            {item.content}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-800 font-medium">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            <div
              className="flex items-center justify-center gap-x-2 text-blue-600/80 bg-white rounded-2xl p-4 sm:p-6 shadow-lg cursor-pointer select-none hover:drop-shadow-xl hover:scale-105 transition-all duration-300"
              tabIndex={0}
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=6281395554334&text=Halo+Admin+Asa+hikari+Mulya.&type=phone_number&app_absent=0",
                  "_blank"
                );
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(
                    "https://api.whatsapp.com/send/?phone=6281395554334&text=Halo+Admin+Asa+hikari+Mulya.&type=phone_number&app_absent=0",
                    "_blank"
                  );
                }
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-2xl text-green-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                ></path>
              </svg>
              <span className="text-blue-900 font-bold">Hubungi Kami</span>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Form Pendaftaran
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                Isi form di bawah untuk mendaftar atau konsultasi
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    Pesan Terkirim!
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 text-center">
                    Kami akan menghubungi Anda segera
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 required">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Nama Anda"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 required">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 required">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="08123456789"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 required">
                        Pilih Program
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                      >
                        <option value="">Pilih Program</option>
                        <option value="basic-n4">Kelas Basic N4</option>
                        <option value="basic-n5">Kelas Basic N5</option>
                        <option value="ssw">Program SSW</option>
                        <option value="magang">Program Magang</option>
                        <option value="konsultasi">Konsultasi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Pesan Anda
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white"
                      placeholder="Tulis pesan atau pertanyaan Anda..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 sm:py-4 px-6 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          Kirim Pesan
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-[10px] xs:text-xs text-gray-500 text-center">
                    Dengan mengirim form ini, Anda menyetujui untuk dihubungi
                    oleh tim kami
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Notice Section */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-200/50"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xs xs:text-sm sm:text-base text-gray-700 text-center leading-relaxed">
            <span className="font-semibold text-blue-700">Catatan : </span>
            Pastikan semua informasi yang Anda berikan sudah benar sebelum
            mengirim. Kami akan menghubungi Anda melalui email atau WhatsApp
            yang Anda cantumkan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
