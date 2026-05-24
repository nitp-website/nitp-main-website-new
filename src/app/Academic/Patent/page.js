"use client";
import React, { useState, useEffect } from "react";

function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // start false
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${baseUrl}/api/patent?type=all&page=${page}&limit=10`
      );

      if (!res.ok) throw new Error("Failed to fetch patents");

      const json = await res.json();

      // update AFTER response
      setData(json.data || []);
      setTotalPages(json.totalPages || 1);
      setCurrentPage(page);
    } catch (err) {
      console.log("Error fetching patents:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    fetchData(page);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-red-950 mb-6">
          Patents Dashboard
        </h1>

        {/* Error */}
        {error && (
          <div className="text-center text-red-600 bg-red-50 p-4 rounded mb-4">
            {error}
          </div>
        )}

        {/* TABLE (ALWAYS VISIBLE) */}
        <div className="overflow-auto rounded-lg border shadow">
          <table className="w-full text-sm">
            <thead className="bg-[#421010] text-white">
              <tr>
                <th className="p-3 text-left">S.No</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Inventors</th>
                <th className="p-3 text-left">Applicant</th>
                <th className="p-3 text-left">Registration</th>
                <th className="p-3 text-left">Publication</th>
                <th className="p-3 text-left">Grant Date</th>
                <th className="p-3 text-left">Grant No</th>
              </tr>
            </thead>

            {/* 🔥 KEY CHANGE: table stays, just fades */}
            <tbody className={`transition-all duration-300 ${loading ? "opacity-50" : "opacity-100"}`}>
              {data.map((item, idx) => (
                <tr key={item.id} className="border-b hover:bg-red-50">
                  <td className="p-3">
                    {(currentPage - 1) * 10 + idx + 1}
                  </td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.inventors}</td>
                  <td className="p-3">{item.applicant_name}</td>
                  <td className="p-3">{formatDate(item.registration_date)}</td>
                  <td className="p-3">{formatDate(item.publication_date)}</td>
                  <td className="p-3">{formatDate(item.grant_date)}</td>
                  <td className="p-3">{item.grant_no || "—"}</td>
                </tr>
              ))}

              {/* Optional: show message if no data */}
              {data.length === 0 && !loading && (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-gray-400">
                    No patents found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 🔥 Small loading indicator (no UI break) */}
        {loading && (
          <p className="text-center text-gray-500 mt-2">
            Loading new page...
          </p>
        )}

        {/* PAGINATION (ALWAYS VISIBLE) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6">

            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || loading}
              className="px-4 py-2 bg-red-900 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-red-900 font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || loading}
              className="px-4 py-2 bg-red-900 text-white rounded disabled:opacity-50"
            >
              Next
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default Page;