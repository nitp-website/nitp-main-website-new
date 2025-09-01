"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MechatronicsJournalPage = () => {
  const [publications, setPublications] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openYears, setOpenYears] = useState({}); // dropdown open/close tracking

  const fetchPublications = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/publications?type=mae`
      );
      const data = await response.json();

      const groupedByYear = data.reduce((acc, publication) => {
        if (!publication.publication_year) return acc;
        const year = publication.publication_year;
        if (!acc[year]) acc[year] = [];
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
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-700 text-center">
          Journal Publications
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
            .sort((a, b) => b - a)
            .map((year) => (
              <div
                key={year}
                className="mb-6 border border-gray-300 rounded-lg shadow-md bg-blue-100"
              >
                <button
                  onClick={() => toggleYear(year)}
                  className="w-full px-4 py-3 bg-red-200 text-left text-lg font-bold text-red-700 flex justify-between items-center hover:bg-red-300 transition"
                >
                  Publications in {year} ({publications[year].length})
                  {openYears[year] ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openYears[year] && (
                  <div className="overflow-y-auto max-h-100">
                    <ul className="p-4 space-y-4">
                      {publications[year].map((paper, index) => (
                        <li
                          key={index}
                          className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                        >
                          <p className="text-gray-800">
                            {paper.authors && (
                              <span className="font-semibold">{paper.authors}</span>
                            )}
                            ,{" "}
                            {paper.title && (
                              <span className="font-semibold text-blue-700">
                                "{paper.title}"
                              </span>
                            )}
                            ,{" "}
                            {paper.journal_name && (
                              <span className="text-gray-700 text-lg font-semibold">
                                {paper.journal_name}
                              </span>
                            )}{" "}
                            {paper.journal_quartile && (
                              <span className="text-gray-700">
                                ({paper.journal_quartile})
                              </span>
                            )}{" "}
                            {paper.volume && (
                              <span className="text-gray-700">
                                Volume: {paper.volume}
                              </span>
                            )}{" "}
                            {paper.publication_year && (
                              <span className="text-gray-700">
                                Year: {paper.publication_year}
                              </span>
                            )}
                          </p>
                          {paper.doi_url && (
                            <p className="text-blue-600 underline">
                              <a
                                href={paper.doi_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                DOI Link
                              </a>
                            </p>
                          )}
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

export default MechatronicsJournalPage;
