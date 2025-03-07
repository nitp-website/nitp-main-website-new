"use client";
import React, { useEffect, useState } from "react";

const ArticlesTable = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPublications = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://admin.nitp.ac.in/api/publications?type=all`
      );
      const data = await response.json();

      // Group publications by year
      const groupedByYear = data.reduce((acc, publication) => {
        const year = publication.conference_year;
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

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Conference Publications
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
              <div key={year} className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-red-950">
                  Publications in {year}
                </h2>
                <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white">
                      <thead>
                        <tr className="bg-[#421010] text-white">
                          <th className="text-left px-6 py-4 font-semibold">Title</th>
                          <th className="text-left px-6 py-4 font-semibold">Authors</th>
                          <th className="text-left px-6 py-4 font-semibold">Conference</th>
                          <th className="text-left px-6 py-4 font-semibold">Location</th>
                          <th className="text-left px-6 py-4 font-semibold">Indexing</th>
                          <th className="text-left px-6 py-4 font-semibold">Student Involved</th>
                          <th className="text-left px-6 py-4 font-semibold">DOI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {publications[year].map((pub, index) => (
                          <tr
                            key={pub.id}
                            className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }`}
                          >
                            <td className="text-left px-6 py-4 text-gray-800">{pub.title}</td>
                            <td className="text-left px-6 py-4 text-gray-800">{pub.authors}</td>
                            <td className="text-left px-6 py-4 text-gray-800">{pub.conference_name}</td>
                            <td className="text-left px-6 py-4 text-gray-800">{pub.location}</td>
                            <td className="text-left px-6 py-4 text-gray-800">{pub.indexing || 'N/A'}</td>
                            <td className="text-left px-6 py-4 text-gray-800">{pub.student_involved || 'N/A'}</td>
                            <td className="text-left px-6 py-4 text-gray-800">{pub.doi || 'N/A'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default ArticlesTable;
