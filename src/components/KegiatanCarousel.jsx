import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img_kegiatan_1 from "../assets/images/kegiatan_1.jpeg";
import img_kegiatan_2 from "../assets/images/kegiatan_2.jpeg";
import img_kegiatan_3 from "../assets/images/kegiatan_3.jpeg";
import img_kegiatan_4 from "../assets/images/kegiatan_4.jpeg";

export default function KegiatanCarousel() {
  const scrollContainerRef = useRef(null);

  const [isHoverPaused, setIsHoverPaused] = useState(false); 
  const [isLockedPaused, setIsLockedPaused] = useState(false);
  const isPaused = isHoverPaused || isLockedPaused;

  const images = [
    img_kegiatan_1,
    img_kegiatan_2,
    img_kegiatan_3,
    img_kegiatan_4
  ];
  const allImages = [...images, ...images, ...images];

  const scrollPositionRef = useRef(0);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    scrollPositionRef.current = container.scrollLeft || 0;

    const scrollSpeed = 1;

    const step = () => {
      const totalWidth = container.scrollWidth / 3 || 0;
      if (!isPaused && totalWidth > 0) {
        scrollPositionRef.current += scrollSpeed;

        if (scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current -= totalWidth;
        }

        container.scrollLeft = scrollPositionRef.current;
      } else {
        scrollPositionRef.current = container.scrollLeft;
      }

      animationIdRef.current = requestAnimationFrame(step);
    };

    animationIdRef.current = requestAnimationFrame(step);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPaused, images.length]);

  const handleImageClick = (e) => {
    e.preventDefault?.();
    setIsLockedPaused(prev => !prev);
  };

  const handlePointerEnter = () => setIsHoverPaused(true);
  const handlePointerLeave = () => setIsHoverPaused(false);
  const handleTouchStart = () => setIsHoverPaused(true);
  const handleTouchEnd = () => setIsHoverPaused(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-2 sm:mb-3">
            Kegiatan
          </h1>
           <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
			Berikut adalah dokumentasi berbagai kegiatan yang telah dilakukan oleh kami,
			mulai dari aktivitas rutin hingga acara khusus. Silakan jelajahi semua momen terbaik kami.
		  </p>
        </div>

        {/* Auto-Scrolling Container */}
        <div
          className="relative"
          onMouseEnter={handlePointerEnter}
          onMouseLeave={handlePointerLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-hidden scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {allImages.map((image, index) => (
              <div
                key={index}
                onClick={handleImageClick}
                className="scroll-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsLockedPaused(prev => !prev);
                  }
                }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image}
                    alt={`Kegiatan ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading={index < 15 ? "eager" : "lazy"}
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"></div>
        </div>


        {/* Info Text */}
        <div className="mt-4 text-center">
          <p className="text-slate-500 text-xs sm:text-sm">
            Klik untuk menghentikan atau melanjutkan gambar berjalan.
          </p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
