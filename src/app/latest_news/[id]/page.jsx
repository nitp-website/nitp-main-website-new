"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailPage() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/news/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  // 🔄 LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 animate-pulse">
        Loading article...
      </div>
    );
  }

  // ❌ ERROR STATE
  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        News not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        {/* IMAGE */}
        <div className="w-full h-[220px] sm:h-[350px] overflow-hidden">
          <img
            src={data.img}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-10">

          {/* DATE + CATEGORY */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">
              {new Date(data.date).toDateString()}
            </p>

            <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full capitalize">
              {data.category}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-snug">
            {data.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            {data.desc}
          </p>

          {/* IMPACT SECTION */}
          {data.impact && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <p className="text-red-700 font-semibold">
                Impact:
              </p>
              <p className="text-gray-700 mt-1">
                {data.impact}
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}