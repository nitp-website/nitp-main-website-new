"use client";
import { useEffect, useState } from 'react';
import './styles/Gallery.css';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
];

export function Gallery() {
  const [popupImage, setPopupImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
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
    // Load Twitter widget script
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', 'true');
    script.setAttribute('charset', 'utf-8');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-20 h-full gdiv">
      <div className="w-full md:w-2/5 bg-white p-4 border border-gray-200 rounded-md h-full dark:border-gray-800 social-media">
        <h2 className="text-xl font-bold mb-4 text-center">View our Social Media</h2>
        <a className="twitter-timeline" data-lang="en" data-height="350" href="https://twitter.com/NITPatna1?ref_src=twsrc%5Etfw">Tweets by NIT Patna</a>
        <a className="twitter-timeline" data-lang="en" data-height="350" href="https://twitter.com/EduMinOfIndia?ref_src=twsrc%5Etfw">Tweets by Education Ministry Of India</a>
      </div>
      <div className="imagediv1">
        <h2 className="text-xl font-bold mb-4 text-center">Glimpse of NIT Patna</h2>
        <div className="image-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 md:p-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg group aspect-[4/3] image-item ${index >= 4 ? 'hidden-on-mobile' : ''}`} 
              data-aos="zoom-out-up"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => openPopup(index)} 
                  className="text-white font-medium w-4/5 h-4/5 hover:text-red-200 transition-colors"
                >
                  View Image
                </button>
              </div>
            </div>
          ))}
          <div className="col-span-full flex justify-center mt-6">
            <Link
              href="/Gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#421010] rounded-lg hover:bg-red-900 transition-colors duration-200 shadow-sm hover:shadow-md"
              prefetch={false}
            >
              <GalleryThumbnailsIcon className="w-5 h-5 fill-current" />
              View All
            </Link>
          </div>
        </div>
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
  );
}

export default Gallery;

function GalleryThumbnailsIcon(props) {
  return (
    <svg 
      {...props}
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1 0.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/>
    </svg>
  );
}
