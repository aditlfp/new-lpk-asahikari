import React, { useState, useEffect } from "react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sari Indah",
      position: "Caregiver di Osaka, Jepang",
      text: "Instrukturnya sangat sabar dan fasilitasnya lengkap. Saya tidak hanya belajar bahasa, tapi juga budaya kerja Jepang. Sangat membantu saat pertama kali tiba di sini. Sukses selalu!",
    },
    {
      name: "Budi Santoso",
      position: "Perawat di Tokyo, Jepang",
      text: "Program pelatihannya sangat komprehensif. Dari bahasa Jepang hingga sertifikasi keperawatan, semuanya dipersiapkan dengan baik. Sekarang saya bekerja di rumah sakit terkemuka di Tokyo.",
    },
    {
      name: "Dewi Lestari",
      position: "Caregiver di Kyoto, Jepang",
      text: "Terima kasih atas bimbingannya yang luar biasa. Prosesnya transparan dan supportnya sangat membantu. Saya merasa sangat siap ketika berangkat ke Jepang. Highly recommended!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Testimoni Alumni Sukses
          </h1>
          <p className="text-gray-600 text-sm">
            Dengar langsung pengalaman alumni kami yang telah sukses berkarir di
            Jepang
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mx-4">
          {/* Avatar */}
          <div className="flex justify-center mb-2">
            <div className="w-24 h-24 rounded-full shadow-2xl outline outline-8 outline-white bg-gray-200 flex items-center justify-center">
              <svg
                className="w-20 h-20 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="text-center mb-2 min-h-[100px] flex items-center justify-center">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
          </div>

          {/* Name & Position */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-blue-600">
              {testimonials[currentIndex].position}
            </p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-8" : "bg-blue-800/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
