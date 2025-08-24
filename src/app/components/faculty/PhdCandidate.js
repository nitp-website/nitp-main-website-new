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
      : current_status === "Completed" || current_status === "Awarded"
        ? "Unknown" // If status is completed but no end year, show "Unknown"
        : "Ongoing" // Otherwise show "Ongoing"
    : "N/A";

  return (
    <div className="w-full lg:w-2/5 md:w-1/2 sm:w-full px-3 mb-6">
      <div className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
        {/* Header with status badge */}
        <div className="relative bg-gradient-to-r from-gray-50 to-white p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <div
              className={`px-3 py-1 ${
                current_status === "Completed" || current_status === "Awarded"
                  ? "bg-green-600"
                  : "bg-red-700"
              } text-white text-xs font-medium rounded-full shadow-sm`}
            >
              {current_status}
            </div>
          </div>
          
          {/* Registration type with year info */}
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-semibold">{registration_type}</span>
            {startYear && (
              <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded-md text-gray-700">
                {startYear} {endYear ? `- ${endYear}` : "- Present"}
              </span>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="p-4 space-y-3">
          {/* Supervisor Section */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-1 h-4 bg-red-700 rounded-full mr-2"></div>
              <p className="text-sm font-semibold text-gray-700">Supervisor</p>
            </div>
            <p className="text-sm pl-3 text-gray-600 mt-1">{supervisor}</p>
          </div>
          
          {/* Research Area Section */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-1 h-4 bg-red-700 rounded-full mr-2"></div>
              <p className="text-sm font-semibold text-gray-700">Research Area</p>
            </div>
            <p className="text-xs pl-3 text-gray-600 mt-1 line-clamp-3">{research_area}</p>
          </div>
          
          {/* Years spent (if applicable) */}
          {yearsSpent !== "N/A" && (
            <div className="flex items-center justify-end mt-2">
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                {yearsSpent === "Unknown" || yearsSpent === "Ongoing" 
                  ? `Status: ${yearsSpent}` 
                  : `Duration: ${yearsSpent} ${yearsSpent !== 1 ? "years" : "year"}`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhdCandidate;
