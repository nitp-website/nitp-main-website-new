"use client";
import React, { useEffect, useState, useMemo } from "react";

const ArticlesList = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [activeTab, setActiveTab] = useState("current");
  const [activeType, setActiveType] = useState("all");
  const [academicYear, setAcademicYear] = useState(getCurrentAcademicYear());

  function getCurrentAcademicYear() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    if (month >= 6) { // July to December 
      return `${year}-${year + 1}`;
    } else { // January to June
      return `${year - 1}-${year}`;
    }
  }

  const fetchPublications = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://admin.nitp.ac.in/api/publications?type=all`
      );
      const data = await response.json();
      setPublications(data);
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

  const getFilteredPublications = useMemo(() => {
    if (!publications || publications.length === 0) return [];

    let filtered = [...publications];
    
    if (activeTab === "current") {
      filtered = filtered.filter((pub) => {
        const year = parseInt(pub.conference_year || pub.publication_year);
        return year >= 2025 && year <= 2026;
      });
    } else if (activeTab === "academic") {
      const [startYear, endYear] = academicYear.split("-").map(Number);
      filtered = filtered.filter((pub) => {
        const year = parseInt(pub.conference_year || pub.publication_year);
        return year >= startYear && year <= endYear;
      });
    }
    
    if (activeType === "journal") {
      filtered = filtered.filter(pub => pub.journal_name);
    } else if (activeType === "conference") {
      filtered = filtered.filter(pub => pub.conference_name);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(pub => 
        pub.authors?.toLowerCase().includes(term) ||
        pub.title?.toLowerCase().includes(term) ||
        (pub.journal_name && pub.journal_name.toLowerCase().includes(term)) ||
        (pub.conference_name && pub.conference_name.toLowerCase().includes(term)) ||
        pub.email?.toLowerCase().includes(term)
      );
    }
    
    return filtered.sort((a, b) => {
      const yearA = parseInt(a.conference_year || a.publication_year);
      const yearB = parseInt(b.conference_year || b.publication_year);
      return yearB - yearA;
    });
  }, [publications, activeTab, academicYear, activeType, searchTerm]);

  const totalPages = Math.ceil(getFilteredPublications.length / itemsPerPage);
  const currentItems = getFilteredPublications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const generateAcademicYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    const startYear = 2010;
    
    for (let year = currentYear; year >= startYear; year--) {
      years.push(`${year}-${year + 1}`);
    }
    
    return years;
  };

  const groupPublicationsByYear = (items) => {
    const grouped = {};
    
    items.forEach(item => {
      const year = item.conference_year || item.publication_year;
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(item);
    });
    
    return grouped;
  };

  const groupedPublications = groupPublicationsByYear(currentItems);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/5 mb-6 md:mb-0 md:mr-6">
          <div className="bg-white rounded-md shadow-sm p-4 md:sticky md:top-24"> 
            <h2 className="text-lg font-semibold mb-4 text-red-800">Filter by Type</h2>
            <div className="space-y-2">
              <button
                className={`w-full text-left px-3 py-2 rounded-md ${
                  activeType === "all"
                    ? "bg-red-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setActiveType("all");
                  setCurrentPage(1);
                }}
              >
                All Publications
              </button>
              <button
                className={`w-full text-left px-3 py-2 rounded-md ${
                  activeType === "journal"
                    ? "bg-red-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setActiveType("journal");
                  setCurrentPage(1);
                }}
              >
                Journal Articles
              </button>
              <button
                className={`w-full text-left px-3 py-2 rounded-md ${
                  activeType === "conference"
                    ? "bg-red-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setActiveType("conference");
                  setCurrentPage(1);
                }}
              >
                Conference Papers
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-4/5">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-red-950 text-center">
            {activeType === "journal" ? "Journal Publications" : 
             activeType === "conference" ? "Conference Publications" : 
             "All Publications"}
          </h1>

          {/* Search bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by author, title, journal, conference, or email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "current"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("current");
                setCurrentPage(1);
              }}
            >
              Academic Year (2025–26)
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "academic"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("academic");
                setCurrentPage(1);
              }}
            >
              Academic Year
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "all"
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("all");
                setCurrentPage(1);
              }}
            >
              All Publications
            </button>
          </div>

          {/* Academic Year Picker */}
          {activeTab === "academic" && (
            <div className="flex justify-center mb-6">
              <label className="mr-2 font-medium text-gray-700 self-center">
                Select Academic Year:
              </label>
              <select
                value={academicYear}
                onChange={(e) => {
                  setAcademicYear(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-800"
              >
                {generateAcademicYears().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-800"></div>
              <p className="mt-4 text-gray-600">Loading publications...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 bg-red-50 p-6 rounded-md">
              <p className="font-medium">{error}</p>
              <button 
                onClick={fetchPublications}
                className="mt-4 px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : getFilteredPublications.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-md shadow-sm">
              <p className="text-gray-600">No publications found matching your criteria.</p>
              {(searchTerm || activeTab !== "all" || activeType !== "all") && (
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setActiveTab("all");
                    setActiveType("all");
                  }}
                  className="mt-4 px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Results count */}
              <div className="mb-4 text-sm text-gray-600">
                Showing {currentItems.length} of {getFilteredPublications.length} publications
              </div>

              {/* Publications list */}
              {Object.entries(groupedPublications).map(([year, yearPublications]) => (
                <div key={year} className="mb-6">
                  <h3 className="text-lg font-bold text-white bg-blue-700 px-4 py-2 rounded-lg">
                    {year}
                  </h3>
                  <ul className="space-y-4 mt-2">
                    {yearPublications.map((pub) => (
                      <li
                        key={pub.id}
                        className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                      >
                        {pub.conference_name ? (
                          // Conference paper format
                          <p className="text-gray-800">
                            <span className="font-semibold">{pub.authors}</span>,{" "}
                            <span className="font-semibold text-blue-700">
                              "{pub.title}"
                            </span>
                            ,{" "}
                            <span className="text-gray-700 text-lg font-bold">
                              {pub.conference_name}
                            </span>
                            {pub.location && (
                              <span className="text-gray-800 font-semibold">
                                {" "}Location: {pub.location}
                              </span>
                            )}
                            <span className="text-gray-700">
                              {" "}({pub.conference_year})
                            </span>
                            {(pub.doi_url || pub.doi) && (
                              <p className="text-blue-600 underline mt-2">
                                <a
                                  href={pub.doi_url || pub.doi || `https://doi.org/${pub.doi}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  DOI Link
                                </a>
                              </p>
                            )}
                          </p>
                        ) : (
                          <p className="text-gray-800">
                            {pub.authors && (
                              <span className="font-semibold">{pub.authors}</span>
                            )}
                            {pub.title && (
                              <>
                                ,{" "}
                                <span className="font-semibold text-blue-700">
                                  "{pub.title}"
                                </span>
                              </>
                            )}
                            {pub.journal_name && (
                              <>
                                ,{" "}
                                <span className="text-gray-700 text-lg font-semibold">
                                  {pub.journal_name}
                                </span>
                              </>
                            )}
                            {pub.journal_quartile && (
                              <span className="text-gray-700">
                                {" "}({pub.journal_quartile})
                              </span>
                            )}
                            {pub.volume && (
                              <span className="text-gray-700">
                                {" "}Volume: {pub.volume}
                              </span>
                            )}
                            {pub.publication_year && (
                              <span className="text-gray-700">
                                {" "}Year: {pub.publication_year}
                              </span>
                            )}
                            {(pub.doi_url || pub.doi) && (
                              <p className="text-blue-600 underline mt-2">
                                <a
                                  href={pub.doi_url || pub.doi || `https://doi.org/${pub.doi}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  DOI Link
                                </a>
                              </p>
                            )}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      currentPage === 1 
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                        : "bg-red-800 text-white hover:bg-red-900 transition-colors"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Previous
                  </button>
                  
                  <div className="px-4 py-2 text-black bg-white border border-gray-300 rounded-md flex items-center">
                    Page {currentPage} of {totalPages}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      currentPage === totalPages 
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                        : "bg-red-800 text-white hover:bg-red-900 transition-colors"
                    }`}
                  >
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;