"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { format } from "path";

const CSEProjectsPage = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openYears, setOpenYears] = useState({}); // dropdown open/close tracking

  // format date from YYYY-MM-DD to DD-MM-YYYY
  function formatDate(dateStr) {
    // Convert YYYY-MM-DD to DD-MM-YYYY
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }

  const fetchPublications = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=cse`
      );
      const data = await response.json();

      // Group publications by year
      const groupedByYear = data.reduce((acc, publication) => {
        if (!publication.end_date) return acc; // Skip if project_date is missing

        const year = new Date(publication.start_date).getFullYear();

        if (isNaN(year)) return acc; // Skip if year is NaN (invalid date)

        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(publication);

        return acc;
      }, {});

      setPublications(groupedByYear);
      setError(null);
    } catch (error) {
      setError("Failed to fetch publication data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const toggleYear = (year) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-6xl">
        {" "}
        {/* Adjust the width here */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-700 text-center">
          Projects
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <svg
              version="1.1"
              id="L1"
              height="150px"
              width="150px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 100 100"
            >
              <circle
                fill="none"
                stroke="#f87171"
                strokeWidth="6"
                strokeMiterlimit="15"
                strokeDasharray="14.2472,14.2472"
                cx="50"
                cy="50"
                r="47"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                fill="none"
                stroke="#f87171"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeDasharray="10,10"
                cx="50"
                cy="50"
                r="39"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
            <p>Please try refreshing the page</p>
          </div>
        ) : (
          Object.keys(publications)
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
                  Projects in {year} ({publications[year].length})
                  {openYears[year] ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openYears[year] && (
                  <div className="overflow-y-auto max-h-100">
                    <ul className="p-4 space-y-4">
                      {publications[year].map((project, index) => (
                        <li
                          key={index}
                          className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                        >
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

                          {/* Funding Agency */}
                          <p className="text-gray-800">
                            <strong>Sponsor:</strong> {project.funding_agency}
                          </p>

                          {/* Duration */}
                          <p className="text-gray-700">
                            <strong>Duration:</strong> {formatDate(project.start_date)} 
                            <span className="font-extrabold text-black"> - </span>
                            {formatDate(project.end_date)}
                          </p>

                          {/* Financial Outlay */}
                          <p className="text-gray-800">
                            <strong>Project Cost (INR):</strong> ₹
                            {parseFloat(
                              project.financial_outlay
                            ).toLocaleString()}
                          </p>

                          {/* Status */}
                          <p
                            className={`text-lg font-semibold ${project.status === "Completed"
                              ? "text-green-800"
                              : "text-blue-600"
                              }`}
                          >
                            <strong className="text-black font-normal">
                              Status:
                            </strong>{" "}
                            {project.status}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default CSEProjectsPage;
