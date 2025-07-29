"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Staffcard({ name, designation, image, email }) {
  return (
    <>
      <div className="w-[320px] h-[380px] mx-4 bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100">
        {/* Header with clean background */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-10 relative">
          {/* Position indicator line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-red-700 rounded-b-lg opacity-70"></div>
          
          {/* Image container with red glass effect border */}
          <div className="w-[150px] h-[150px] mx-auto mb-2 relative">
            <div className="absolute inset-0 rounded-full bg-white p-1">
              {/* Red glass effect border */}
              <div className="w-full h-full rounded-full p-3 bg-red-100/30 backdrop-blur-sm border-2 border-red-400/40 shadow-lg">
                <img
                  src={image || "/faculty.jpeg"}
                  alt={name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover rounded-full transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="text-black px-6 py-5 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          
          <div className="flex items-center justify-center py-2 px-4 bg-gray-50 rounded-lg mb-4 border-l-4 border-red-700">
            <FontAwesomeIcon icon={faIdCard} className="w-4 h-4 text-red-700 mr-2" />
            <h4 className="text-md font-medium text-gray-700">{designation}</h4>
          </div>
          
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-700 hover:text-blue-600 transition-all duration-300"
            >
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="w-4 h-4 text-blue-500" 
              />
              <span className="truncate">{email}</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Staffcard;
