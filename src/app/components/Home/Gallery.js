"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  'https://i.postimg.cc/bwy2BtkJ/nit-patna-001.jpg',
  'https://i.postimg.cc/02dwnf6F/nit-patna-002.jpg',
  'https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg',
  'https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg',
  'https://i.postimg.cc/fyY06783/nit-patna-005.jpg',
  'https://i.postimg.cc/HLP55kJL/nit-patna-006.jpg',
  'https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg',
  'https://i.postimg.cc/pTwFGcJb/nit-patna-008.jpg',
  'https://i.postimg.cc/LssLn187/nit-patna-009.jpg',
  'https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg',
  'https://i.postimg.cc/pTwFGcJb/nit-patna-008.jpg',
  'https://nitp-database-s3.s3.ap-south-1.amazonaws.com/MainEntrance.webp'
];

export function Gallery() {
  const [popupImage, setPopupImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  const openPopup = (index) => {
    setPopupImage(images[index]);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setPopupImage(null);
    setCurrentIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNextImage = (e) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % images.length;
      setPopupImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const showPreviousImage = (e) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setPopupImage(images[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  // --- PERFECT TILING LOGIC ---
  // This maps specific indices to spans that sum up to exactly 4 columns.
  const getBentoClass = (index) => {
    const layoutMap = {
      // ROW 1 & 2 (Mix of Big, Tall, Std)
      0: 'md:col-span-2 md:row-span-2 col-span-2 row-span-2', // Big Square (Top Left)
      1: 'md:col-span-1 md:row-span-2 col-span-1 row-span-2', // Tall Vertical (Middle)
      2: 'md:col-span-1 md:row-span-1 col-span-1 row-span-1', // Small (Top Right)
      3: 'md:col-span-1 md:row-span-1 col-span-1 row-span-1', // Small (Bottom Right - fills gap under 2)

      // ROW 3 (Two Wide items)
      4: 'md:col-span-2 md:row-span-1 col-span-2 row-span-1', // Wide
      5: 'md:col-span-2 md:row-span-1 col-span-2 row-span-1', // Wide

      // ROW 4 & 5 (Mirrored Big layout)
      6: 'md:col-span-1 md:row-span-1 col-span-1 row-span-1', // Small
      7: 'md:col-span-1 md:row-span-1 col-span-1 row-span-1', // Small
      8: 'md:col-span-2 md:row-span-2 col-span-2 row-span-2', // Big Square (Right side)
      9: 'md:col-span-1 md:row-span-1 col-span-1 row-span-1', // Small (Bottom Left)
      10: 'md:col-span-1 md:row-span-1 col-span-1 row-span-1', // Small (Bottom Middle)

      // ROW 6 (Full Width Footer)
      11: 'md:col-span-4 md:row-span-1 col-span-2 row-span-1', // Panoramic
    };

    return layoutMap[index] || 'col-span-1 row-span-1';
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-700 to-red-900 tracking-tight mb-3">
            Campus Chronicles
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A glimpse into the vibrant life and architecture of NIT Patna.
          </p>
        </div>
        
        {/* --- GRID CONTAINER --- */}
        {/* grid-flow-dense is crucial: it fills tiny gaps automatically */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[220px] grid-flow-dense">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 ${getBentoClass(index)}`}
              onClick={() => openPopup(index)}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={image}
                alt={`Gallery View ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                   <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="text-center mt-12">
          <Link
            href="/Gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 hover:border-red-600 text-gray-800 hover:text-red-600 font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            View Complete Gallery
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
      
      {/* --- POPUP LIGHTBOX --- */}
      {popupImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity animate-fadeIn" 
            onClick={closePopup}
          ></div>
          
          <div className="relative w-full max-w-5xl h-[85vh] flex flex-col z-10 animate-scaleIn">
            {/* Close X */}
            <button 
              className="absolute -top-10 right-0 md:-right-10 text-white hover:text-red-500 transition-colors"
              onClick={closePopup}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Image Area */}
            <div className="flex-1 relative flex items-center justify-center bg-black/20 rounded-lg overflow-hidden">
               <img 
                src={popupImage} 
                alt="Popup" 
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
              
              {/* Arrows */}
              <button onClick={showPreviousImage} className="absolute left-2 md:left-4 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-colors backdrop-blur-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={showNextImage} className="absolute right-2 md:right-4 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-colors backdrop-blur-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 h-16 flex justify-center gap-2 overflow-x-auto py-1 px-2 no-scrollbar">
               {images.map((img, idx) => (
                 <div 
                   key={idx}
                   onClick={(e) => {e.stopPropagation(); openPopup(idx);}}
                   className={`relative w-14 h-14 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${currentIndex === idx ? 'border-red-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                 >
                   <img src={img} className="w-full h-full object-cover" alt="thumb" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;