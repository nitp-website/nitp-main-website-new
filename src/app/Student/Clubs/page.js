"use client";
import React, { useState, useEffect } from 'react';
import { sliderData } from './sliderData';
import './style.css'; // Ensure the correct path to your CSS file

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderData.length;

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 25000); // Change slide every 25 seconds

    return () => clearInterval(autoPlay); // Cleanup on unmount
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="slider-container">
      <div className="slider mx-auto">
        <img src={sliderData[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="text-overlay">
          <h2 className="text-2xl pt-4 text-red-800 font-extrabold">{sliderData[currentIndex].heading}</h2>
          <p className="text-sm md:text-lg pt-5 md:pt-8 text-neutral-700">{sliderData[currentIndex].description}</p>
        </div>
      </div>

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageSlider;
