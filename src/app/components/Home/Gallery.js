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

  return (
    <div className="flex flex-col md:flex-row gap-6 p-5 md:p-20 h-full gdiv">
      <div className="w-full md:w-2/5 bg-white p-4 border border-gray-200 rounded-md h-full dark:border-gray-800 social-media">
        <h2 className="text-xl font-bold mb-4 text-center">View our Social Media</h2>
        <a className="twitter-timeline" data-lang="en" data-height="350" href="https://twitter.com/NITPatna1?ref_src=twsrc%5Etfw">Tweets by NIT Patna</a>
        <a className="twitter-timeline" data-lang="en" data-height="350" href="https://twitter.com/EduMinOfIndia?ref_src=twsrc%5Etfw">Tweets by Education Ministry Of India</a>
      </div>
      <div className="imagediv1">
        <h2 className="text-xl font-bold mb-4 text-center">Glimpse of NIT Patna</h2>
        <div className="image-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 md:p-6">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg group aspect-[4/3] image-item ${index >= 4 ? 'hidden-on-mobile' : ''}`} data-aos="zoom-out-up">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => openPopup(index)} className="text-white font-medium">
                  View Image
                </button>
              </div>
            </div>
          ))}
          <div className="col-span-full flex justify-center mt-4">
            <Link
              href="/Gallery"
              className="inline-flex items-center px-6 py-2 text-white bg-[#421010] rounded hover:bg-[#8b1d1d] transition-colors duration-300"
              prefetch={false}
            >
              <GalleryThumbnailsIcon className="w-5 h-5 mr-2" />
              View All Images
            </Link>
          </div>
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
