import React, { useState } from "react";

const Education = ({ data }) => {
  const [error, setError] = useState(null);

  // Sort by passing year (latest first)
  const sortedData = [...data].sort((a, b) => b.passing_year - a.passing_year);

  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Education
      </h2>

      {/* Error State */}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      
      {/* Display Education */}
      <ul className="space-y-4">
        {sortedData.map((education, index) => (
          <li key={index} className="text-lg">
            {education.certification && (
              <span className="text-xl font-bold text-gray-700">
                {education.certification}
              </span>
            )}{" "}
            {education.specialization && (
              <span className="text-lg font-normal">
                ({education.specialization})
              </span>
            )}{" "}
            {education.institution && (
              <span className="text-black">
                from <span className="text-xl font-semibold text-blue-700">{education.institution}</span>
              </span>
            )}{" "}
            {education.passing_year && (
              <span className="text-xl font-semibold text-black">
                ({education.passing_year})
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
