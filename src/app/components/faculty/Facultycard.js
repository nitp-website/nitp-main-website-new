"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faGraduationCap,
  faEnvelope,
  faPhone,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

function FacultyCard({
  name,
  designation,
  image,
  researchInterests,
  email,
  phone,
  profileLink,
  researchLink, // Assuming you have a link for the full research interests
}) {
  const [isHovered, setIsHovered] = useState(false);

  const qualification = "Ph.D.(CSE),M.Tech.(CSE),B.E.(CSE)";
  if (researchInterests == null) researchInterests = "";

  const interestsArray = researchInterests.split(", ");
  const displayedInterests = interestsArray.slice(0, 3);
  const remainingInterests = interestsArray.length > 3;

  interestsArray.sort();

  return (
    <>
      <a href={profileLink} target="_parent">
        <div
          className={`backdrop-blur-sm	 static flex flex-col overflow-hidden md:flex-row shadow-md border rounded p-4 m-5 transition-all duration-500 ${
            isHovered
              ? remainingInterests
                ? "h-[52rem] md:h-[17rem]"
                : "h-[48rem] md:h-[17rem]"
              : "h-[27rem] md:h-[10rem]"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-center items-center md:w-1/4">
            <div
              className={`relative ${
                isHovered ? "h-[180px] w-[150px]" : "h-[100px] w-[100px]"
              } transition-all duration-300`}
            >
              <Image
                className="rounded-md"
                src={image != null ? image : "/faculty.jpeg"}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mt-3 md:ml-8 ml-4 md:w-3/4 md:mt-0 ">
            <h5 className="m-0 text-red-800 font-bold">{name}</h5>
            <span className="flex font-bold mt-1">
              <FontAwesomeIcon icon={faIdCard} className="w-5 mr-1" />{" "}
              {designation}
            </span>
            <span className="flex mt-1">
              <FontAwesomeIcon icon={faGraduationCap} className="w-5 mr-1" />
              Ph.D.(CSE),M.Tech.(CSE),B.E.(CSE)
            </span>
            <span className={`flex mt-1 md:underline hover:text-blue-800 ${isHovered ?"hidden":""} `}>
              <FontAwesomeIcon icon={faEye} className="w-5 mr-1" />
              <a
                href={profileLink}
                target="_parent"
              >
                View Detailed Profile
              </a>
            </span>
            <span
              className={`inline-block mt-1 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <b className="font-bold">Research Interests: </b>
              {displayedInterests.join(", ")}
              {remainingInterests && (
                <a
                  href={profileLink}
                  target="_parent"
                  className=" cursor-pointer text-blue-600 hover:text-blue-800"
                >
                  {" "}
                  ...View all
                </a>
              )}
            </span>
            <span
              className={`flex mt-1 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 mr-1" />{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span
              className={`flex mt-1 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <FontAwesomeIcon icon={faPhone} className="w-5 mr-1" /> {phone}
            </span>
            <span className={`flex mt-1 ${isHovered ?"":"hidden"} `}>
              <FontAwesomeIcon icon={faEye} className="w-5 mr-1" />
              <a
                href={profileLink}
                target="_parent"
                className="underline hover:text-blue-800"
              >
                View Detailed Profile
              </a>
            </span>
          </div>
        </div>
      </a>
    </>
  );
}

export default FacultyCard;
