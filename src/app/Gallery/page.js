"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    script.setAttribute("charset", "utf-8");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 text-center text-black">Glimpse of NIT Patna</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group aspect-[4/3] shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => openPopup(index)} 
                className="text-white font-medium px-6 py-2 rounded-lg bg-[#421010]/80 hover:bg-[#421010] transition-colors"
              >
                View Image
              </button>
            </div>
          </div>
        ))}
      </div>

      {popupImage && (
        <>
          <div className="fixed inset-0 bg-black/80 z-[60000]" onClick={closePopup}></div>
          <div className="fixed inset-0 z-[70000] flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-[95vw] md:max-w-[85vw] lg:max-w-[1200px] mx-auto max-h-[90vh] flex flex-col">
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
                  className="w-auto h-auto max-w-full max-h-[65vh] object-contain mx-auto"
                />
                <button 
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all hover:shadow-xl"
                  onClick={showPreviousImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all hover:shadow-xl"
                  onClick={showNextImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-100 p-2 md:p-4 rounded-b-lg">
                <div className="flex gap-2 overflow-x-auto py-2 px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  {images.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPopupImage(images[idx]);
                        setCurrentIndex(idx);
                      }}
                      className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all hover:opacity-90 ${
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
    <svg viewBox="24 24 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M372.778667 182.997333l566.272 189.952-189.952 566.272L182.826667 749.269333z" fill="#64B5F6"></path><path d="M410.410667 266.752l446.336 145.493333-132.266667 405.76-446.336-145.493333z" fill="#1E88E5"></path><path d="M232.128 123.264l587.178667 108.117333-108.117334 587.178667-587.178666-108.117333z" fill="#90CAF9"></path><path d="M282.005333 201.472l462.293334 82.133333-74.666667 420.266667-462.293333-82.133333z" fill="#42A5F5"></path><path d="M85.333333 85.333333h597.333334v597.333334H85.333333z" fill="#BBDEFB"></path><path d="M149.333333 149.333333h469.333334v426.666667H149.333333z" fill="#4CAF50"></path><path d="M341.333333 277.333333c0-23.466667 19.2-42.666667 42.666667-42.666666s42.666667 19.2 42.666667 42.666666-42.666667 85.333333-42.666667 85.333334-42.666667-61.866667-42.666667-85.333334zM426.666667 448c0 23.466667-19.2 42.666667-42.666667 42.666667s-42.666667-19.2-42.666667-42.666667 42.666667-85.333333 42.666667-85.333333 42.666667 61.866667 42.666667 85.333333z" fill="#FFFFFF"></path><path d="M288 356.266667c-21.333333-12.8-27.733333-38.4-14.933333-57.6 12.8-21.333333 38.4-27.733333 57.6-14.933334 21.333333 12.8 53.333333 78.933333 53.333333 78.933334s-74.666667 6.4-96-6.4zM480 369.066667c21.333333 12.8 27.733333 38.4 14.933333 57.6-12.8 21.333333-38.4 27.733333-57.6 14.933333-21.333333-10.666667-53.333333-78.933333-53.333333-78.933333s74.666667-6.4 96 6.4z" fill="#FFFFFF"></path><path d="M480 356.266667c21.333333-12.8 27.733333-38.4 14.933333-57.6-12.8-21.333333-38.4-27.733333-57.6-14.933334-21.333333 10.666667-53.333333 78.933333-53.333333 78.933334s74.666667 6.4 96-6.4zM288 369.066667c-21.333333 12.8-27.733333 38.4-14.933333 57.6 12.8 21.333333 38.4 27.733333 57.6 14.933333 21.333333-12.8 53.333333-78.933333 53.333333-78.933333s-74.666667-6.4-96 6.4z" fill="#FFFFFF"></path><path d="M384 362.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#FFC107"></path></g></svg>
  )
}