"use client"

import { useEffect, useState, useRef } from 'react';


const CompanyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timeoutRef = useRef(null)
  
    const companyLogos = [
      './Company Logo/company_logo_1.png',
      './Company Logo/company_logo_2.png',
      './Company Logo/company_logo_3.png',
      './Company Logo/company_logo_4.png',
      './Company Logo/company_logo_5.png',
      './Company Logo/company_logo_6.png',
      './Company Logo/company_logo_7.png',
    ]
  
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  
    useEffect(() => {
      resetTimeout()
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === companyLogos.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)
  
      return () => {
        resetTimeout()
      }
    }, [currentIndex])
  
    return (
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 6)}%)`,
          }}
        >
        
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-1/2 md:w-1/6 px-2"
            >
              <div className="aspect-square bg-white rounded-lg border hover:shadow-lg transition-all p-4 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter"
                />
              </div>
            </div>
          ))}
          
        </div>
      </div>
    )
  }

export default CompanyCarousel; 