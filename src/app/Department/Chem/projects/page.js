"use client";
import React, { useEffect, useState } from "react";
import { DepartmentProjects } from "../../../components/department/DepartmentProjects";
import Spinner from "../../../components/Spinner.js";

const ChemProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  // format date from YYYY-MM-DD to DD-MM-YYYY
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const fetchPublications = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=che`
      );
      const data = await response.json();

      setData(data);
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
      </div>
    </div>
  );
};

export default ChemProjectsPage;
