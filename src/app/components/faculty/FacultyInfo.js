"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "./Sidebar";
import FacultyHeader from "./FacultyHeader";

const FacultyInfo = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { facultyid } = useParams();
  const email = decodeURIComponent(facultyid || '');
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  useEffect(() => {
    if (!email) return;
    fetch(`${baseUrl}/api/v2/profile?email=${encodeURIComponent(email)}&section=summary`)
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        setSummary(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [email]);

  if (error) return <p className="text-black p-4">Error: {error.message}</p>;

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite linear;
          border-radius: 6px;
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        .pulse-ring { animation: pulse-ring 1.8s ease-in-out infinite; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.35s ease forwards; }
      `}</style>

      {loading ? (
        <div className="md:w-[90%] mx-auto flex flex-col md:flex-row gap-2 p-4">
          {/* Sidebar skeleton */}
          <div className="w-full md:w-[35%] flex flex-col items-center gap-4 p-4 shadow-lg rounded-md bg-white">
            <div className="pulse-ring w-[180px] h-[180px] rounded-3xl shimmer mt-4" />
            <div className="w-full flex flex-col gap-2 px-4 mt-2">
              <div className="shimmer h-5 w-3/4 mx-auto" />
              <div className="shimmer h-4 w-1/2 mx-auto" />
              <div className="shimmer h-4 w-2/3 mx-auto" />
            </div>
            <div className="flex gap-3 mt-2">
              {[1,2,3,4].map(i => <div key={i} className="shimmer w-14 h-14 rounded-md" />)}
            </div>
            <div className="w-full px-4 mt-4 flex flex-col gap-2">
              <div className="shimmer h-5 w-1/3" />
              <div className="shimmer h-3 w-full" />
              <div className="shimmer h-3 w-5/6" />
              <div className="shimmer h-3 w-4/6" />
            </div>
          </div>

          {/* Header + dropdown skeleton */}
          <div className="w-full md:w-[65%] flex flex-col gap-3">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="flex flex-col gap-2 w-2/3">
                  <div className="shimmer h-6 w-3/4" />
                  <div className="shimmer h-4 w-1/2" />
                  <div className="shimmer h-4 w-2/3" />
                  <div className="shimmer h-4 w-1/2" />
                </div>
                <div className="shimmer w-28 h-28 rounded-md" />
              </div>
              <div className="flex gap-4 flex-wrap mt-2">
                {[1,2,3,4].map(i => <div key={i} className="shimmer w-24 h-24 rounded-lg" />)}
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="shimmer h-10 w-full rounded-lg" style={{ opacity: 1 - i * 0.1 }} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="md:w-[90%] mx-auto flex flex-col md:flex-row gap-2 fade-in">
          <div className="w-full md:w-[35%]">
            <Sidebar summary={summary} />
          </div>
          <div className="w-full md:w-[65%]">
            <FacultyHeader summary={summary} email={email} />
          </div>
        </div>
      )}
    </>
  );
};

export default FacultyInfo;
