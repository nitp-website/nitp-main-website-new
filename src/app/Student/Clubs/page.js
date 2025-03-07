"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Student Clubs
        </h1>

        <div className="relative overflow-hidden rounded-lg shadow-md bg-white">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-red-900/80 hover:bg-red-800 text-white p-2 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-red-900/80 hover:bg-red-800 text-white p-2 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Club Content */}
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <img 
              src={sliderData[currentIndex].image} 
              alt={sliderData[currentIndex].heading}
              className="w-full h-full object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {sliderData[currentIndex].heading}
                </h2>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {sliderData[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
