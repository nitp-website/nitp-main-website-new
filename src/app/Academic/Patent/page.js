"use client";
import React, { useState, useEffect } from "react";

function Page() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
        const res = await fetch(
          `${baseUrl}/api/patent?type=all&page=1&limit=5`
        );
        if (!res.ok) throw new Error("Failed to fetch patents");
        const json = await res.json();
        setAllData(json);
      } catch (err) {
        console.log("error fetching patent data", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };


  const totalPages = Math.ceil(allData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = allData.slice(startIndex, endIndex);
  const pagesRemaining = totalPages - currentPage;

  const goToPage = (e, page) => {
    if (e) {
      e.preventDefault();
      // Remove focus from the button so the browser doesn't try to auto-scroll to it when table height changes
      e.currentTarget.blur(); 
    }
    const scrollY = window.scrollY;
    setCurrentPage(page);
    // Force scroll position to remain static after React completes rendering
    setTimeout(() => {
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }, 0);
  };

  
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        start = 2;
        end = Math.min(maxVisible, totalPages - 1);
      } else if (currentPage >= totalPages - 2) {
        start = Math.max(totalPages - maxVisible + 1, 2);
        end = totalPages - 1;
      }

      if (start > 2) pages.push("...");
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push("...");

      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-red-950 text-center">
          Patents Dashboard
        </h1>

        {!loading && !error && allData.length > 0 && (
          <p className="text-center text-gray-500 text-sm mb-6">
            Showing {startIndex + 1}–{Math.min(endIndex, allData.length)} of{" "}
            {allData.length} patents &nbsp;|&nbsp; Page {currentPage} of{" "}
            {totalPages} &nbsp;|&nbsp; {pagesRemaining}{" "}
            {pagesRemaining === 1 ? "page" : "pages"} remaining
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-900"></div>
            <span className="ml-3 text-red-900 font-medium">
              Loading patents...
            </span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-10 text-red-600 bg-red-50 rounded-lg border border-red-200">
            <p className="font-medium">Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 px-4 py-2 bg-red-900 text-white rounded-md text-sm hover:bg-red-800 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Table */}
        {!loading && !error && currentData.length > 0 && (
          <>
            <div className="overflow-hidden rounded-lg shadow-md border border-gray-200 bg-white">
              <div className="overflow-auto h-[650px]">
                <table className="w-full border-collapse bg-white text-sm relative">
                  <thead className="sticky top-0 z-10 shadow-md">
                    <tr className="bg-[#421010] text-white">
                      <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">
                        S.No
                      </th>
                      <th className="text-left px-4 py-3 font-semibold">
                        Title
                      </th>
                      <th className="text-left px-4 py-3 font-semibold">
                        Inventors
                      </th>
                      <th className="text-left px-4 py-3 font-semibold">
                        Applicant
                      </th>
                      <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">
                        Registration
                      </th>
                      <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">
                        Publication
                      </th>
                      <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">
                        Grant Date
                      </th>
                      <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">
                        Grant No
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((patent, idx) => (
                      <tr
                        key={patent.id}
                        className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                          idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-4 py-3 text-gray-600 font-medium">
                          {startIndex + idx + 1}
                        </td>
                        <td className="px-4 py-3 text-gray-800 min-w-[280px] leading-snug">
                          {patent.title}
                        </td>
                        <td className="px-4 py-3 text-gray-700 min-w-[180px]">
                          {patent.inventors}
                        </td>
                        <td className="px-4 py-3 text-gray-700 min-w-[180px]">
                          {patent.applicant_name}
                        </td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                          {formatDate(patent.registration_date)}
                        </td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                          {formatDate(patent.publication_date)}
                        </td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                          {formatDate(patent.grant_date)}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {patent.grant_no || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                {/* Back Button */}
                <button
                  type="button"
                  onClick={(e) => goToPage(e, currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1 px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-red-900 text-white hover:bg-red-800 shadow-sm hover:shadow-md"
                  }`}
                >
                  ← Back
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((page, i) =>
                    page === "..." ? (
                      <span
                        key={`dots-${i}`}
                        className="px-2 py-2 text-gray-400 text-sm"
                      >
                        …
                      </span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        onClick={(e) => goToPage(e, page)}
                        className={`min-w-[36px] h-9 rounded-md text-sm font-medium transition-all ${
                          currentPage === page
                            ? "bg-red-900 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-900"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={(e) => goToPage(e, currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-1 px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-red-900 text-white hover:bg-red-800 shadow-sm hover:shadow-md"
                  }`}
                >
                  Next →
                </button>
              </div>
            )}

            {/* Pages Remaining Info */}
            {totalPages > 1 && (
              <p className="text-center text-gray-400 text-xs mt-3">
                {pagesRemaining > 0
                  ? `${pagesRemaining} more ${pagesRemaining === 1 ? "page" : "pages"} ahead`
                  : "You're on the last page"}
              </p>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && !error && allData.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No patents found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
