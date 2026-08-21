"use client";
import React, { useEffect, useState } from "react";
import { DepartmentProjects } from "../../../components/department/DepartmentProjects";
import Spinner from "../../../components/Spinner.js";import { extractApiArray } from "@/lib/apiHelpers";
const HumanitiesProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  // format date from YYYY-MM-DD to DD-MM-YYYY
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const fetchPublications = async (pageNumber) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=hss&limit=50&page=${pageNumber}`
      );
      const result = await response.json();

setTotalPages(result.totalPages || 1);

const data = extractApiArray(result);
setData(data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch publication data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications(page);
  }, [page]);

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-4 max-w-6xl">
        {" "}
        {/* Adjust the width here */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-700 text-center">
          Projects
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
            <p>Please try refreshing the page</p>
          </div>
        ) : (
          <DepartmentProjects data={data} />
        )}
        <div className="flex justify-center items-center gap-4 mt-8">
  <button
    onClick={() => setPage((p) => p - 1)}
    disabled={page === 1}
    className={`px-4 py-2 rounded-md text-white ${
      page === 1
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-red-600 hover:bg-red-700"
    }`}
  >
    Prev
  </button>

  <span className="font-semibold text-gray-700">
    {page} / {totalPages}
  </span>

  <button
    onClick={() => setPage((p) => p + 1)}
    disabled={page === totalPages}
    className={`px-4 py-2 rounded-md text-white ${
      page === totalPages
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-red-600 hover:bg-red-700"
    }`}
  >
    Next
  </button>
</div>
      </div>
    </div>
  );
};

export default HumanitiesProjectsPage;
