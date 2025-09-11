"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const DepartmentProjects = ({ data }) => {
  const [openYears, setOpenYears] = useState({}); // dropdown open/close tracking

  // format date from YYYY-MM-DD to DD-MM-YYYY
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // group data by year
  const groupedByYear = data.reduce((acc, publication) => {
    const year = new Date(publication.start_date).getFullYear();
    if (isNaN(year)) return acc; // skip invalid dates
    if (!acc[year]) acc[year] = [];
    acc[year].push(publication);
    return acc;
  }, {});

  const toggleYear = (year) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-4 max-w-6xl">
        {Object.keys(groupedByYear)
          .sort((a, b) => b - a) // Sort years in descending order
          .map((year) => (
            <div
              key={year}
              className="mb-6 border border-gray-300 rounded-lg shadow-md bg-blue-100"
            >
              <button
                onClick={() => toggleYear(year)}
                className="w-full px-4 py-3 bg-red-200 text-left text-lg font-bold text-red-700 flex justify-between items-center hover:bg-red-300 transition"
              >
                Projects in {year} ({groupedByYear[year].length})
                {openYears[year] ? <ChevronUp /> : <ChevronDown />}
              </button>

              {openYears[year] && (
                <div className="overflow-y-auto max-h-100">
                  <ul className="p-4 space-y-4">
                    {groupedByYear[year].map((project, index) => (
                      <li
                        key={index}
                        className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                      >
                        {/* Project Name (if exists) */}
                        
                        {/* Project Title */}
                        <h3 className="text-lg font-semibold text-blue-800">
                          {project.project_title}
                        </h3>

                        {/* Role */}
                        {project.role && (
                          <p className="text-gray-700">
                            <strong>Role:</strong> {project.role}
                          </p>
                        )}

                        {/* Investigators */}
                        {project.investigators && project.investigators !== "NA" && (
                          <p className="text-gray-700">
                            <strong>Investigators:</strong> {project.investigators}
                          </p>
                        )}

                        {/* Funding Agency */}
                        <p className="text-gray-800">
                          <strong>Sponsor:</strong> {project.funding_agency}
                        </p>

                        {/* Duration */}
                        <p className="text-gray-700">
                          <strong>Duration:</strong> {formatDate(project.start_date)}
                          {project.end_date && (
                            <>
                              <span className="font-extrabold text-black"> - </span>
                              {formatDate(project.end_date)}
                            </>
                          )}
                        </p>

                        {/* Financial Outlay */}
                        <p className="text-gray-800">
                          <strong>Project Cost (INR):</strong> ₹
                          {parseFloat(project.financial_outlay).toLocaleString()}
                        </p>

                        {/* Status */}
                        <p
                          className={`text-lg font-semibold ${
                            project.status === "Completed"
                              ? "text-green-800"
                              : "text-blue-600"
                          }`}
                        >
                          <strong className="text-black font-normal">Status:</strong>{" "}
                          {project.status}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
