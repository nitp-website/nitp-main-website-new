"use client";
import React from "react";

const PhdCandidate = ({ data }) => {
  // console.log(data);
  const {
    student_name,
    supervisor,
    research_area,
    current_status,
    roll_no,
    registration_type,
    registration_year,
    completion_year,
  } = data;

  // Function to parse name and college
  const parseNameAndCollege = (fullName) => {
    const matches = fullName.match(/(.*?)\s*\((.*?)\)/);
    if (matches) {
      return {
        name: matches[1].trim(),
        college: matches[2].trim(),
      };
    }
    return {
      name: fullName.trim(),
      college: "NIT PATNA",
    };
  };

  // Extract name and college
  const { name, college } = parseNameAndCollege(student_name);

  // Function to safely extract year
  const extractYear = (dateString) => {
    if (!dateString) return null;
    const yearString = String(dateString);
    return parseInt(yearString.split("-")[0]);
  };

  // Extract start and end year
  const startYear = extractYear(registration_year);
  const endYear = extractYear(completion_year);

  // Calculate duration or show "Ongoing"
  const yearsSpent = startYear
    ? endYear
      ? endYear - startYear
      : "Ongoing"
    : "N/A";

  return (
    <div className="w-[400px] h-[250px] bg-gradient-to-br from-white to-slate-50 border-2 border-[rgb(153,27,27)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        {/* Name and Status Section */}
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-[rgb(153,27,27)] font-bold text-xl">{name}</h5>
          </div>
          <div
            className={`px-4 py-1.5 ${
              current_status === "Completed" || current_status === "Awarded"
                ? "bg-green-900"
                : "bg-[rgb(153,27,27)]"
            } text-white text-sm font-medium rounded-full`}
          >
            {current_status}
          </div>
        </div>

        {/* Decorative Line */}
        <div className="absolute w-full h-px mt-1 bg-[rgb(153,27,27)]"></div>
        {/* <p className="text-gray-600 text-md mt-1 italic">{college}</p> */}

        <div className="text-gray-700 text-md mt-1">
          <span className="font-semibold text-md">{registration_type}</span>{" "}
          
        </div>

        {/* Details Section */}
        <div className="mt-2">
          <p className="text-gray-700 text-md">
            <span className="font-semibold">Supervisor:</span>{" "}
            <span className="ml-1">{supervisor}</span>
          </p>
        </div>
        <div className="mt-1 text-gray-700 text-sm">
          <span className="font-semibold text-md">Research Area:</span>{" "}
          {research_area}
        </div>
      </div>
    </div>
  );
};

export default PhdCandidate;
