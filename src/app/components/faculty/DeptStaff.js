"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard
} from "@fortawesome/free-solid-svg-icons";

function DeptStaffcard({
  name,
  designation,
  image,
  email,
}) {
  return (
    <>
        <div
          className="backdrop-blur-sm static flex flex-col overflow-hidden md:flex-row shadow-md border rounded p-4 m-5 transition-all duration-500 h-[17rem] md:h-[9rem] text-black"
        >
          <div className="flex justify-center items-center md:w-1/4">
            <div
              className="relative h-[100px] w-[100px] transition-all duration-300"
            >
              <img
                className="rounded-md object-cover  h-[100px] w-[100px]"
                src={image !== null ? image : "/faculty.jpeg"}
                alt={name}
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="mt-8 md:ml-8 ml-4 md:w-3/4 md:mt-0 ">
            <h5 className="m-0 text-red-800 font-bold">{name}</h5>
            <span className="flex font-bold mt-1">
              <FontAwesomeIcon icon={faIdCard} className="w-5 mr-1 mt-1" />{" "}
              {designation}
            </span>
          </div>
        </div>
    </>
  );
}

export default DeptStaffcard;
