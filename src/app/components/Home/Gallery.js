"use client";
import { useEffect, useState } from 'react';

import './styles/Gallery.css';

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
'https://i.postimg.cc/LssLn187/nit-patna-009.jpg',

];

export function Gallery() {
  const [popupImage, setPopupImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
         offset: 50,
       })
 }, [])
  const openPopup = (index) => {
    setPopupImage(images[index]);
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setPopupImage(null);
    setCurrentIndex(null);
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
    // Load Twitter widget script
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', 'true');
    script.setAttribute('charset', 'utf-8');
    document.body.appendChild(script);
  }, []);

  // Define different sizes for masonry layout
  const getImageClass = (index) => {
    const patterns = [
      'row-span-2 col-span-2', // Large image
      'row-span-1 col-span-1', // Small image
      'row-span-2 col-span-1', // Tall image
      'row-span-1 col-span-2', // Wide image
      'row-span-1 col-span-1', // Small image
      'row-span-2 col-span-1', // Tall image
      'row-span-1 col-span-2', // Wide image
      'row-span-1 col-span-1', // Small image
      'row-span-2 col-span-2', // Large image
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="p-5 md:p-20 h-full gdiv bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent mb-4">
            Glimpse of NIT Patna
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the beautiful campus, state-of-the-art facilities, and vibrant student life at one of India's premier technical institutions.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="image-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-4 gap-4 p-4 md:p-6 auto-rows-fr">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl group shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 image-item ${getImageClass(index)} ${index >= 6 ? 'hidden md:block' : ''}`} 
              data-aos="zoom-out-up"
              data-aos-delay={index * 100}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">Campus View {index + 1}</h3>
                  <button 
                    onClick={() => openPopup(index)} 
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Full Size
                  </button>
                </div>
              </div>
              
              {/* Image number badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-red-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/Gallery"
            className="inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            prefetch={false}
          >
            <GalleryThumbnailsIcon className="w-6 h-6 mr-3" />
            View Complete Gallery
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="text-gray-500 mt-4">Discover more beautiful moments from our campus</p>
        </div>
      </div>
      
      {popupImage && (
        <>
          <div className="fixed inset-0 bg-black/80 z-[60000]" onClick={closePopup}></div>
          <div className="fixed inset-0 z-[70000] flex items-center justify-center p-4 md:p-6">
            <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col">
              <button 
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 z-[80] bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all hover:shadow-xl"
                onClick={closePopup}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative flex-1 min-h-0 flex items-center justify-center p-4">
                <img 
                  src={popupImage} 
                  alt="Popup Image" 
                  className="max-w-full max-h-[70vh] object-contain"
                />
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:shadow-xl"
                  onClick={showPreviousImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:shadow-xl"
                  onClick={showNextImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-b-lg">
                <div className="flex gap-2 overflow-x-auto py-2 px-2">
                  {images.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPopupImage(images[idx]);
                        setCurrentIndex(idx);
                      }}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all hover:opacity-90 ${
                        currentIndex === idx ? 'ring-2 ring-[#421010] ring-offset-2' : ''
                      }`}
                    >
                      <img
                        src={thumb}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Gallery;

function GalleryThumbnailsIcon(props) {
  return (
    <svg 
      {...props}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M4 4H20V16H4V4ZM2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V4ZM4 20H20V22H4V20Z" 
        fill="currentColor"
      />
    </svg>
  )
}
