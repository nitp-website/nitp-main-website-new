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

// Department Faculty Page

function FacultyCard({
  name,
  designation,
  // qualification,
  department,
  image,
  researchInterests,
  email,
  phone,
  profileLink,
  researchLink, // Assuming you have a link for the full research interests
}) {
  const [isHovered, setIsHovered] = useState(false);

  // const qualification = "Ph.D.(CSE),M.Tech.(CSE),B.E.(CSE)";
  // if (qualification == null) qualification = "";
  if (researchInterests == null) researchInterests = "";

  const interestsArray = researchInterests.split(", ");
  const displayedInterests = interestsArray.slice(0, 3);
  const remainingInterests = interestsArray.length > 3;

  interestsArray.sort();

  return (
    <div className="w-[300px] h-[325px] mx-4 my-2">
      <div className="py-8 pb-10 mb-8 bg-[#f7f5ec] text-center overflow-hidden relative rounded-[20px] group h-full">
        <div className="inline-block h-[130px] w-[130px] mb-12 z-[1] relative">
          <div className="absolute w-full h-0 rounded-full bg-[rgb(153,27,27)] bottom-[135%] right-0 left-0 opacity-90 scale-[3] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute w-full h-full rounded-full bg-[rgb(153,27,27)] top-0 left-0 -z-[1]"></div>
          <Image
            src={image || "/faculty.jpeg"}
            alt={name}
            width={130}
            height={130}
            className="w-[130px] h-[130px] object-cover rounded-full transform scale-100 transition-all duration-900 ease-in-out group-hover:shadow-[0_0_0_14px_#f7f5ec] group-hover:scale-[0.7]"
          />
        </div>
  
        <div className="px-4">
          <h3 className="text-lg text-black font-semibold">{name}</h3>
          <h4 className="block text-[15px] text-[#4e5052] capitalize">{designation}</h4>
          {/* <h4 className="block text-[15px] text-[#4e5052] capitalize">{department}</h4> */}
        </div>
  
        <ul className="w-full flex justify-between p-0 m-0 bg-[rgb(153,27,27)] absolute -bottom-[100px] left-0 transition-all duration-500 ease-in-out group-hover:bottom-0">
          {phone && (
            <li className="inline-block">
              <a
                href={`tel:${phone}`}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="w-8" />
              </a>
            </li>
          )}
          {email && (
            <li className="inline-block">
              <a
                href={`mailto:${email}`}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-8" />
              </a>
            </li>
          )}
          {profileLink && (
            <li className="inline-block">
              <a
                href={profileLink}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                View Profile
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
  
}

export default FacultyCard;