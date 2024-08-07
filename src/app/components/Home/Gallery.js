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
    <div className="flex flex-col md:flex-row gap-6 p-20 h-full gdiv">
      <div className="w-full md:w-2/5 bg-white p-4 border border-gray-200 rounded-md h-full dark:border-gray-800 social-media">
        <h2 className="text-xl font-bold mb-4 text-center">View our Social Media</h2>
        <a className="twitter-timeline" data-lang="en" data-height="350" href="https://twitter.com/NITPatna1?ref_src=twsrc%5Etfw">Tweets by NIT Patna</a>
        <a className="twitter-timeline" data-lang="en" data-height="350" href="https://twitter.com/EduMinOfIndia?ref_src=twsrc%5Etfw">Tweets by Education Ministry Of India</a>
      </div>
      <div className="imagediv1">
        <h2 className="text-xl font-bold mb-4 text-center">Glimpse of NIT Patna</h2>
        <div className="image-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 md:p-6">
          {images.map((image, index) => (
            <div key={index}className={` relative overflow-hidden rounded-lg group aspect-[4/3] image-item ${index >= 4 ? 'hidden-on-mobile' : ''}`} data-aos="zoom-out-up">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => openPopup(index)} className="text-white font-medium w-4/5 h-4/5">
                  View Image
                </button>
              </div>
            </div>
          ))}
          <div className="col-span-full flex justify-center mt-6">
            <Link
              href="/Gallery"
              className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" prefetch={false} >
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
<GalleryThumbnailsIcon className="w-6 h-6" />
              View All
</span>

              
            
              
            </Link>
          </div>
        </div>
      </div>
      {popupImage && (
        <>
          <div className="overlay-background" onClick={closePopup}></div>
          <div className="popup">
            <button className="close-button" onClick={closePopup}>✖</button>
            <img src={popupImage} alt="Popup Image" />
            <div className="navigation-buttons">
              <button className="prev-button" onClick={showPreviousImage}>←</button>
              <button className="next-button" onClick={showNextImage}>→</button>
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
