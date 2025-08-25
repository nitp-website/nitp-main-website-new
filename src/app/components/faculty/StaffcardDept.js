"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faEnvelope,
  faPhone,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

function StaffCard({
  name,
  designation = "N/A",
  image,
  email = "Not Available",
  mobile = "Not Available",
  experience = "Not Available",
  education = "Not Available",
  expertise = "Not Available",
}) {
  return (
    <div className="w-full lg:w-2/5 md:w-1/2 sm:w-full px-3 mb-6">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100 h-full">
        {/* Responsive card: horizontal on all screens, with adaptive height */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left section with image, name and designation */}
          <div className="md:w-1/3 p-4 bg-gradient-to-r from-gray-50 to-white flex flex-col items-center justify-center border-r border-gray-100">
            {/* Smaller image container */}
            <div className="w-[100px] h-[100px] relative mb-3">
              <div className="w-full h-full rounded-full p-1 bg-white">
                {/* Red glass effect border */}
                <div className="w-full h-full rounded-full p-1 bg-red-100/30 backdrop-blur-sm border-2 border-red-400/40 shadow-md">
                  <img
                    src={image || "/faculty.jpeg"}
                    alt={name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Name and designation - left aligned on mobile, center on desktop */}
            <div className="w-full text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">{name}</h3>
              {
                designation && designation !== "Not Available" && (
                  <h4 className="text-sm font-medium text-red-800 flex items-center justify-center gap-1 mb-2">
                    <FontAwesomeIcon icon={faIdCard} className="w-3 h-3" />
                    <span className="text-unwrap">{designation}</span>
                  </h4>)
              }
            </div>
          </div>

          {/* Right section with details */}
          <div className="md:w-2/3 p-4 flex flex-col justify-center">
            <div className="space-y-3">
              {
                expertise && expertise !== "Not Available" && expertise.trim() !== "" && (
                  <div className="flex items-start text-sm">
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0"
                    />
                    <span className="ml-3 text-gray-700 break-words">
                      <span className="font-medium">Expertise:</span> {expertise}
                    </span>
                  </div>
                )}

              {email && email !== "Not Available" && (
                <div className="flex items-center text-sm">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-4 h-4 text-blue-500 flex-shrink-0"
                  />
                  <a
                    href={`mailto:${email}`}
                    className="ml-3 text-gray-700 hover:text-blue-600 transition-all duration-300 break-all"
                  >
                    {email}
                  </a>
                </div>
              )}

              {mobile && mobile !== "Not Available" && (
                <div className="flex items-center text-sm">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                  />
                  <span className="ml-3 text-gray-700">{mobile}</span>
                </div>
              )}

              {
                experience && experience !== "Not Available" && (
                  <div className="flex items-start text-sm">
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className="w-4 h-4 mt-0.5 text-purple-500 flex-shrink-0"
                    />
                    <span className="ml-3 text-gray-700 break-words">
                      <span className="font-medium">Experience:</span> {experience}
                    </span>
                  </div>
                )}

              {
                education && education !== "Not Available" && (
                  <div className="flex items-start text-sm">
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0"
                    />
                    <span className="ml-3 text-gray-700 break-words">
                      <span className="font-medium">Education:</span> {education}
                    </span>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;
