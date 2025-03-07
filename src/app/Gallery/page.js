"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gpage.css';

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
  'https://i.postimg.cc/bwy2BtkJ/nit-patna-001.jpg',
  'https://i.postimg.cc/02dwnf6F/nit-patna-002.jpg',
  'https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg',
  'https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg',
  'https://i.postimg.cc/fyY06783/nit-patna-005.jpg',
  'https://i.postimg.cc/HLP55kJL/nit-patna-006.jpg',
  'https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg',
  'https://i.postimg.cc/pTwFGcJb/nit-patna-008.jpg',
  'https://i.postimg.cc/LssLn187/nit-patna-009.jpg',
];

const Gallery = () => {
  const [popupImage, setPopupImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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

  const showNextImage = () => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % images.length;
      setPopupImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const showPreviousImage = () => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setPopupImage(images[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!popupImage) return;
      if (e.key === 'Escape') closePopup();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPreviousImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [popupImage, currentIndex]);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    script.setAttribute("charset", "utf-8");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white/90 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#421010] text-center mb-8">
          Glimpse of NIT Patna
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group aspect-[4/3] shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => openPopup(index)} 
                  className="text-white font-medium hover:text-red-200 transition-colors"
                >
                  View Image
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Popup */}
        {popupImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <div 
              className="fixed inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closePopup}
            />
            
            <div className="relative z-10 w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Close button */}
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 z-20 p-1 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main image */}
              <div className="relative aspect-video">
                <img
                  src={popupImage}
                  alt="Gallery Preview"
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation buttons */}
                <button 
                  onClick={showPreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={showNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="bg-gray-100 p-4 overflow-x-auto">
                <div className="flex gap-2 justify-center">
                  {images.map((thumb, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setPopupImage(images[index]);
                        setCurrentIndex(index);
                      }}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                        currentIndex === index ? 'ring-2 ring-red-600' : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

function GalleryThumbnailsIcon(props) {
  return (
    <svg viewBox="24 24 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M372.778667 182.997333l566.272 189.952-189.952 566.272L182.826667 749.269333z" fill="#64B5F6"></path><path d="M410.410667 266.752l446.336 145.493333-132.266667 405.76-446.336-145.493333z" fill="#1E88E5"></path><path d="M232.128 123.264l587.178667 108.117333-108.117334 587.178667-587.178666-108.117333z" fill="#90CAF9"></path><path d="M282.005333 201.472l462.293334 82.133333-74.666667 420.266667-462.293333-82.133333z" fill="#42A5F5"></path><path d="M85.333333 85.333333h597.333334v597.333334H85.333333z" fill="#BBDEFB"></path><path d="M149.333333 149.333333h469.333334v426.666667H149.333333z" fill="#4CAF50"></path><path d="M341.333333 277.333333c0-23.466667 19.2-42.666667 42.666667-42.666666s42.666667 19.2 42.666667 42.666666-42.666667 85.333333-42.666667 85.333334-42.666667-61.866667-42.666667-85.333334zM426.666667 448c0 23.466667-19.2 42.666667-42.666667 42.666667s-42.666667-19.2-42.666667-42.666667 42.666667-85.333333 42.666667-85.333333 42.666667 61.866667 42.666667 85.333333z" fill="#FFFFFF"></path><path d="M288 356.266667c-21.333333-12.8-27.733333-38.4-14.933333-57.6 12.8-21.333333 38.4-27.733333 57.6-14.933334 21.333333 12.8 53.333333 78.933333 53.333333 78.933334s-74.666667 6.4-96-6.4zM480 369.066667c21.333333 12.8 27.733333 38.4 14.933333 57.6-12.8 21.333333-38.4 27.733333-57.6 14.933333-21.333333-10.666667-53.333333-78.933333-53.333333-78.933333s74.666667-6.4 96 6.4z" fill="#FFFFFF"></path><path d="M480 356.266667c21.333333-12.8 27.733333-38.4 14.933333-57.6-12.8-21.333333-38.4-27.733333-57.6-14.933334-21.333333 10.666667-53.333333 78.933333-53.333333 78.933334s74.666667 6.4 96-6.4zM288 369.066667c-21.333333 12.8-27.733333 38.4-14.933333 57.6 12.8 21.333333 38.4 27.733333 57.6 14.933333 21.333333-12.8 53.333333-78.933333 53.333333-78.933333s-74.666667-6.4-96 6.4z" fill="#FFFFFF"></path><path d="M384 362.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#FFC107"></path></g></svg>
  )
}