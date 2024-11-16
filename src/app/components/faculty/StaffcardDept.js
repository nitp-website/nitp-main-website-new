"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faEnvelope, faPhone, faGraduationCap, faBriefcase, faLightbulb } from "@fortawesome/free-solid-svg-icons";

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
    <div className="backdrop-blur-sm flex flex-col md:flex-row shadow-md border rounded-lg p-4 m-5 transition-all duration-500 h-auto text-black">
      {/* Image Section */}
      <div className="flex justify-center items-center md:w-1/4 mb-4 md:mb-0 pr-3 rounded-full">
        <div className="relative h-[100px] w-[100px] transition-all duration-300 rounded-full">
          <img
            className="object-cover h-[100px] w-[100px] rounded-full"
            src={image ? image : "/faculty.jpeg"}
            alt={`${name}'s profile picture`}
            height={100}
            width={100}
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="md:w-3/4">
        <h5 className="text-red-800 font-bold">{name}</h5>
        <span className="flex items-center font-bold mt-2">
          <FontAwesomeIcon icon={faIdCard} className="w-5 mr-2 text-gray-600" />
          {designation}
        </span>

        {/* {experience && (
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faBriefcase} className="w-5 mr-2 text-gray-600" />
            <span>Experience: {experience}</span>
          </div>
        )}

        {education && (
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faGraduationCap} className="w-5 mr-2 text-gray-600" />
            <span>Education: {education}</span>
          </div>
        )} */}

        {expertise && (
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faLightbulb} className="w-5 mr-2 text-gray-600" />
            <span>Expertise: {expertise}</span>
          </div>
        )}

        {email && (
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="w-5 mr-2 text-gray-600" />
            {email !== "Not Available" ? (
              <a href={`mailto:${email}`} className="text-blue-600 underline">
                {email}
              </a>
            ) : (
              <span className="text-gray-500">{email}</span>
            )}
          </div>
        )}

        {mobile && (
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faPhone} className="w-5 mr-2 text-gray-600" />
            <span>{mobile}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StaffCard;
