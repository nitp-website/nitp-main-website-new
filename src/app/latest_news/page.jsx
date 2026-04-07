"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LatestNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news") // ✅ direct news API (best)
      .then((res) => res.json())
      .then((res) => {
        const sorted = res.data
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // latest first
          .slice(0, 10); // limit

        setNews(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8">

      {/* HEADER */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">
          LATEST <span className="text-red-600">NEWS</span>
        </h2>

        <Link href="/latest-news/all">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300">
            VIEW ALL
          </button>
        </Link>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500 animate-pulse">
          Loading latest news...
        </p>
      )}

      {/* NEWS LIST */}
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">

        {news.map((item, index) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 flex flex-col md:flex-row gap-4 border border-transparent hover:border-red-200"
          >

            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col justify-between">

              {/* DATE + BADGE */}
              <div className="flex items-center gap-3 mb-2">
                <p className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </p>

                {index === 0 && (
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                    Breaking
                  </span>
                )}
              </div>

              {/* TITLE */}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-red-600 transition">
                {item.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-2 line-clamp-3">
                {item.desc}
              </p>

              {/* BUTTON */}
              <Link href={`../latest_news/${item.id}`}>
                <button className="mt-4 text-red-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More →
                </button>
              </Link>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-[260px] h-[180px] flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}