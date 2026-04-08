import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { ArrowLeft, Briefcase, LayoutGrid, LayoutList, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import job1 from '../assets/images/job_img_1.png';
import job2 from '../assets/images/job_img_2.png';
import job3 from '../assets/images/job_img_3.png';
import job4 from '../assets/images/job_img_4.png';
import job5 from '../assets/images/job_img_5.png';
import job6 from '../assets/images/job_img_6.png';
import job7 from '../assets/images/job_img_7.png';

export default function WorkInfo({ onBackClick }){
  const [viewMode, setViewMode] = useState('grid');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Demo data with placeholder images
  	const data = [
		{
			"id" : 0,
			"img": job1,
			"value": "Pengelohan Sayur & Buah"
		},
		{
			"id" : 1,
			"img": job2,
			"value": "Penataan Barang Dagangan"
		},
		{
			"id" : 2,
			"img": job3,
			"value": "Pengolahan Ikan Segar"
		},
		{
			"id" : 3,
			"img": job4,
			"value": "Pengolahan Daging"
		},
		{
			"id" : 4,
			"img": job5,
			"value": "Pengolahan Lauk - Pauk"
		},
		{
			"id" : 5,
			"img": job6,
			"value": "Pembuatan Lauk - Pauk"
		},
		{
			"id" : 6,
			"img": job7,
			"value": "Manufaktur / Pengolahan"
		},
	]

  const handlePrevious = (e) => {
    e.stopPropagation();
    const currentIndex = data.findIndex(item => item.id === selectedItem.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : data.length - 1;
    setSelectedItem(data[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = data.findIndex(item => item.id === selectedItem.id);
    const nextIndex = currentIndex < data.length - 1 ? currentIndex + 1 : 0;
    setSelectedItem(data[nextIndex]);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-8">
        <div className="max-w-3xl mt-8 sm:mt-12 md:mt-20 space-y-4">
          <div className="flex flex-col gap-y-3 md:gap-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onBackClick}
                className="p-1.5 sm:p-2 rounded-full hover:bg-blue-100 transition-colors flex-shrink-0"
                aria-label="Kembali ke halaman utama"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
              </button>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-900 font-semibold">
                Informasi Pekerjaan
              </h1>
            </div>
            <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-base lg:text-lg ml-9 sm:ml-11">
              Informasi pekerjaan yang dapat dilamar sesuai bidang pelatihan.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Controls */}
      <div className="px-4 sm:px-6 lg:px-8 pb-4 md:pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center bg-blue-800 backdrop-blur-xl p-3 sm:p-3.5 md:p-4 rounded-xl md:rounded-2xl shadow-xl">
            <div className="text-white text-xs sm:text-sm md:text-base font-medium">
              {data.length} Informasi Pekerjaan
            </div>
            <div className="flex gap-1.5 sm:gap-2">
              <button
                className={`p-2 sm:p-2.5 md:px-4 md:py-2.5 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-blue-900 text-slate-400 hover:bg-blue-700'
                }`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </button>
              <button
                className={`p-2 sm:p-2.5 md:px-4 md:py-2.5 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-blue-900 text-slate-400 hover:bg-blue-700'
                }`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <LayoutList className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={`Work ${item.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                    
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                      <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-center gap-2.5 sm:gap-4 md:gap-6 p-2.5 sm:p-3 md:p-4 bg-blue-950 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 hover:bg-blue-800 hover:shadow-2xl hover:shadow-blue-500/20"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative w-20 h-14 min-[400px]:w-24 min-[400px]:h-16 sm:w-32 sm:h-20 md:w-40 md:h-28 overflow-hidden rounded-lg sm:rounded-xl flex-shrink-0">
                    <img
                      src={item.img}
                      alt={`Work ${item.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex-1 flex items-center justify-between min-w-0">    
					<div className="px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-blue-500/10 backdrop-blur-xl rounded-lg sm:rounded-xl border border-blue-500/30">
                      <span className="text-blue-400 font-bold text-base text-sm">{item.value}</span>
                    </div>
                    <div className="p-1.5 sm:p-2 md:p-3 bg-blue-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modern Modal */}
      {selectedItem && (
        <div 
          onClick={() => setSelectedItem(null)} 
          className={`fixed ${isScrolled ? 'top-16 sm:top-16' : 'top-16 sm:top-28'} inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/95 backdrop-blur-xl animate-in fade-in duration-300`}>
          {/* Close Button */}
          <button
            className="absolute top-32 right-20 sm:top-4 sm:right-4 md:top-6 md:right-6 p-2 sm:p-2.5 md:p-3 bg-blue-950/80 backdrop-blur-xl rounded-full border border-blue-800 hover:bg-blue-800 transition-all duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(null);
            }}
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" strokeWidth={1.5} />
          </button>

          {/* Navigation Buttons - Hidden on very small screens */}
          <button
            className="absolute left-2 sm:left-3 md:left-6 p-2 sm:p-2.5 md:p-3 bg-blue-900/80 backdrop-blur-xl rounded-full border border-blue-800 hover:bg-blue-800 transition-all duration-300 z-10"
            onClick={handlePrevious}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" strokeWidth={1.5} />
          </button>

          <button
            className="absolute right-12 sm:right-3 md:right-6 p-2 sm:p-2.5 md:p-3 bg-blue-900/80 backdrop-blur-xl rounded-full border border-blue-800 hover:bg-blue-800 transition-all duration-300 z-10"
            onClick={handleNext}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" strokeWidth={1.5} />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-4 sm:mx-8 md:mx-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-[80vw] sm:w-full rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-blue-900 border border-blue-800 shadow-2xl">
              <img
                src={selectedItem.img}
                alt={`Work ${selectedItem.id}`}
                className="w-full h-auto max-h-[60vh] max-w-[80vw] sm:max-w-full sm:max-h-[70vh] md:max-h-[75vh] object-contain"
              />
              
              {/* ID Badge on Modal */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-6 md:left-6 px-3 py-1.5 sm:px-2 sm:py-2 md:px-6 md:py-3 bg-blue-500/90 backdrop-blur-xl rounded-full border border-blue-400/30 shadow-2xl">
                <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                  Informasi Pekerjaan {selectedItem.id + 1}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
