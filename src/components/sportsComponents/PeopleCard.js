"use client";
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

function PeopleCard({
  name,
  designation,
  image,
  email,
  phone,
  }) 
  {
  return (
    <>
        <div
          className={`backdrop-blur-md text-black static flex flex-col overflow-hidden md:flex-row shadow-md border rounded p-4 m-5`}
        >
          <div className="flex justify-center items-center md:w-1/4">
            <div
              className="relative h-[100px] w-[100px]"
            >
              <Image
                className={`rounded-md object-cover "h-[100px] w-[100px]"}`}
                src={"/faculty.jpeg"}
                alt={name}
                height={300}
                width={300}
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-3 md:ml-8 ml-4 md:w-3/4 md:mt-0 ">
            <h5 className="m-0 text-red-800 font-bold">{name}</h5>
            <span className="flex font-bold mt-1">
              <FontAwesomeIcon icon={faIdCard} className="w-5 mr-1" />{" "}
              {designation}
            </span>
           
            <span
              className={`flex mt-1 transition-opacity duration-300 "opacity-0"}`}
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 mr-1" />{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </span>
            {/* <span
              className={`flex mt-1 transition-opacity duration-300  "opacity-0"
              }`}
            >
              <FontAwesomeIcon icon={faPhone} className="w-5 mr-1" /> {phone}
            </span> */}
           
          </div>
        </div>
    </>
  );
}

export default PeopleCard;
