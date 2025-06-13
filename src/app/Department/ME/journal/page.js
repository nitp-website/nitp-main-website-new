"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MEJournalPage = () => {
  const [publications, setPublications] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openYears, setOpenYears] = useState({}); // dropdown open/close tracking

  const fetchPublications = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/publications?type=me`
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
            {/* Spinner here */}
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
                className="mb-6 border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <button
                  onClick={() => toggleYear(year)}
                  className="w-full px-4 py-3 bg-red-100 text-left text-lg font-bold text-red-700 flex justify-between items-center hover:bg-red-200 transition"
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
                          className="p-4 border border-gray-200 bg-white rounded-md shadow-sm hover:shadow-md transition-transform duration-200"
                        >
                          <p className="text-gray-800">
                            {paper.authors && (
                              <span className="font-semibold">
                                {paper.authors}
                              </span>
                            )}
                            ,{" "}
                            {paper.title && (
                              <span className="font-semibold text-blue-700">
                                &quot;{paper.title}&quot;
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
                                Volume: {paper.volume}{" "}
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

export default MEJournalPage;
