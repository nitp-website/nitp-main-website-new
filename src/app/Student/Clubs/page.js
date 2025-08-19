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
    <>
      <div className="clubs-header">
        <h1 className="clubs-title">Clubs in College</h1>
        <p className="clubs-subtitle">Explore student‑led communities driving creativity, technology, culture, and leadership at NIT Patna.</p>
      </div>
      <div className="slider-container">
        <div className="slider">
          <div key={`content-${currentIndex}`} className="content-pane fade-in-up">
            <h2 className="overlay-title">{sliderData[currentIndex].heading}</h2>
            <p className="overlay-desc">{sliderData[currentIndex].description}</p>
          </div>
          <div
            key={`image-${currentIndex}`}
            className="image-pane slide-in"
            style={{ ['--bg-image']: `url('${sliderData[currentIndex].image}')` }}
          >
            <img src={sliderData[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
          </div>
          <button aria-label="Previous slide" className="nav prev" onClick={prevSlide}>❮</button>
          <button aria-label="Next slide" className="nav next" onClick={nextSlide}>❯</button>
          <div className="dots">
            {sliderData.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};





export default ImageSlider;
