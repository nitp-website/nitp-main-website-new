"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import { HiChevronRight } from "react-icons/hi";

// Inline MemberCard
const MemberCard = ({ name, position, department, memberType, email, profileUrl }) => {
  const handleClick = () => {
    if (profileUrl && profileUrl !== "#") {
      window.open(profileUrl, "_blank");
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-100 w-full max-w-sm cursor-pointer transform hover:-translate-y-1 ${
        profileUrl && profileUrl !== "#" ? "hover:border-red-300" : "cursor-default"
      }`}
      onClick={handleClick}
    >
      <div className="bg-gradient-to-r from-red-700 to-red-500 p-4 text-white">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 font-medium mb-2">{position}</p>
        {department && <p className="text-gray-600 text-sm mb-3">{department}</p>}
        <div className="flex items-center justify-between mt-4">
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
            {memberType}
          </span>
          {profileUrl && profileUrl !== "#" && (
            <HiChevronRight className="text-red-500" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

const CVOPage = () => {
  const committeeMembers = [
    {
      name: "Dr. Amit Kumar Singh",
      position: "Associate Professor",
      department: "Department of Computer Science & Engineering",
      memberType: "Chief Vigilance Officer",
      email: "amit.singh@nitp.ac.in",
      profileUrl: "https://www.nitp.ac.in/profile/amit.singh@nitp.ac.in",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row px-2 md:px-16 lg:px-16 mt-10 md:justify-between w-full mb-8">
      {/* Sidebar */}
      <div className="mt-6 mb-12 md:mt-0">
        <Sidebar />
      </div>

      {/* Content */}
      <div className="flex flex-col md:w-3/4 md:pl-10">
        <h1 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">
          CVO Committee Members
        </h1>
        <div className="flex flex-wrap gap-6">
          {committeeMembers.map((member, i) => (
            <MemberCard key={i} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVOPage;
