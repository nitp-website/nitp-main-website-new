import React from "react";
import { useState } from "react";

const Internships = ({ data }) => {
  // Get the current date
  const currentDate = new Date();

  // Categorize internships
  const categorizedInternships = data.reduce((acc, internship) => {
    const endDate = internship.end_date ? new Date(internship.end_date) : null;
    const year = endDate ? endDate.getFullYear() : "Ongoing";

    if (!endDate || endDate >= currentDate) {
      if (!acc["Ongoing"]) acc["Ongoing"] = [];
      acc["Ongoing"].push(internship);
    } else {
      if (!acc[year]) acc[year] = [];
      acc[year].push(internship);
    }
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(categorizedInternships)
    .sort((a, b) => (a === "Ongoing" ? -1 : b - a));

  // State to manage dropdown visibility
  const [openDropdown, setOpenDropdown] = useState({});

  const toggleDropdown = (year) => {
    setOpenDropdown((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className="p-6 border border-green-600 rounded-lg text-black bg-green-100 shadow-lg">
      <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-500 pb-2 mb-4">
        Internships
      </h2>
      {sortedYears.map((year) => (
        <div key={year} className="mb-4">
          <button
            className="w-full text-left text-lg font-bold bg-purple-700 text-white px-4 py-2 rounded-lg flex justify-between items-center"
            onClick={() => toggleDropdown(year)}
          >
            {year} ({categorizedInternships[year].length}) <span>{openDropdown[year] ? "▲" : "▼"}</span>
          </button>
          {openDropdown[year] && (
            <ul className="mt-2 space-y-4">
              {categorizedInternships[year].map((internship, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-green-700">
                    {internship.project_title}
                  </h3>
                  <p className="text-gray-800">
                    <strong>Student Name:</strong> {internship.student_name}
                  </p>
                  <p className="text-gray-800">
                    <strong>Qualification:</strong> {internship.qualification}
                  </p>
                  <p className="text-gray-800">
                    <strong>Affiliation:</strong> {internship.affiliation}
                  </p>
                  <p className="text-gray-800">
                    <strong>Student Type:</strong> {internship.student_type}
                  </p>
                  <p className="text-gray-800">
                    <strong>Start Date:</strong> {new Date(internship.start_date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-800">
                    <strong>End Date:</strong> {internship.end_date ? new Date(internship.end_date).toLocaleDateString() : "Ongoing"}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Internships;