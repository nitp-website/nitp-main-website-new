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
        <div className="w-[300px] h-[325px] mx-4 bg-slate-200 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden">
        <div className="bg-[rgb(153,27,27)] py-4">
          <div className="w-[150px] h-[150px] mx-auto my-4 flex items-center justify-center bg-red-700 rounded-full border-8 border-white">
            <Image
              src={image || "/faculty.jpeg"}
              alt={name}
              width={150}
              height={140}
              className="w-[150px] h-[140px] object-cover rounded-full transform scale-100 transition-all duration-900 ease-in-out group-hover:shadow-[0_0_0_14px_#f7f5ec] group-hover:scale-[0.7]"
            />
          </div>
        </div>
        <div className=" text-black text-center">
          <h3 className="text-xl font-bold mt-2">{name}</h3>
          <h4 className="text-md font-[600] font-sans">
            <FontAwesomeIcon icon={faIdCard} className="w-8 text-black" />
            {designation}
          </h4>
          {email && (
            <li className="inline-block">
              <a
                href={`mailto:${email}`}
                className="block px-5 py-1 text-sm text-black hover:text-blue-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-8 text-black" />{" "}
                {email}
              </a>
            </li>
          )}
        </div>
      </div>
    </>
  );
}

export default DeptStaffcard;
