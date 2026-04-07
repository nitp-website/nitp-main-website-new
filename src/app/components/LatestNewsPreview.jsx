"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function LatestUpdatesPage() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [activeBtn, setActiveBtn] = useState(null);

  const newsRef = useRef(null);
  const eventsRef = useRef(null);

  // Fetch Data
  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((res) => setNews(res.data || []));

    fetch("/api/events")
      .then((res) => res.json())
      .then((res) => setEvents(res.data || []));
  }, []);

  // Glow reset
  useEffect(() => {
    if (!activeBtn) return;
    const timer = setTimeout(() => setActiveBtn(null), 300);
    return () => clearTimeout(timer);
  }, [activeBtn]);

  // 🔥 AUTO SCROLL NEWS (VERTICAL)
  useEffect(() => {
    if (!newsRef.current || news.length === 0) return;

    const interval = setInterval(() => {
      newsRef.current.scrollBy({
        top: 200,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [news]);

  // 🔥 AUTO SCROLL EVENTS (HORIZONTAL)
  useEffect(() => {
    if (!eventsRef.current || events.length === 0) return;

    const interval = setInterval(() => {
      eventsRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [events]);

  // 🔥 INFINITE LOOP (NEWS)
  useEffect(() => {
    if (!newsRef.current) return;

    const el = newsRef.current;

    const handleScroll = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        el.scrollTop = 0;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll functions
  const scrollHorizontal = (ref, dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const scrollVertical = (ref, dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      top: dir === "up" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">
        Latest Updates
      </h1>

      <div className="flex justify-center gap-8">

        {/* ================= NEWS ================= */}
        <div className="relative w-[40%] bg-white rounded-2xl shadow-lg p-5 border">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-red-700">Latest News</h2>

            <Link href="/latest-news">
              <button className="text-xs bg-red-600 text-white px-3 py-1 rounded">
                View All
              </button>
            </Link>
          </div>

          {/* ▲ UP */}
          <button
            disabled={news.length === 0}
            onClick={() => {
              scrollVertical(newsRef, "up");
              setActiveBtn("up");
            }}
            className={`absolute top-10 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full text-xl transition
              ${
                news.length === 0
                  ? "opacity-30 cursor-not-allowed"
                  : activeBtn === "up"
                  ? "text-white bg-red-500 shadow-lg shadow-red-400 animate-pulse"
                  : "text-gray-600 bg-white/30 backdrop-blur"
              }`}
          >
            ▲
          </button>

          {/* ▼ DOWN */}
          <button
            disabled={news.length === 0}
            onClick={() => {
              scrollVertical(newsRef, "down");
              setActiveBtn("down");
            }}
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full text-xl transition
              ${
                news.length === 0
                  ? "opacity-30 cursor-not-allowed"
                  : activeBtn === "down"
                  ? "text-white bg-red-500 shadow-lg shadow-red-400 animate-pulse"
                  : "text-gray-600 bg-white/30 backdrop-blur"
              }`}
          >
            ▼
          </button>

          {/* NEWS LIST */}
          <div
            ref={newsRef}
            className="h-[350px] overflow-y-auto space-y-4 no-scrollbar  pr-2"
          >
            {news.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-gray-50 rounded-xl p-2 shadow hover:shadow-md transition"
              >
                <img
                  src={item.img}
                  className="w-24 h-20 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2">
                    {item.desc}
                  </p>

                  <Link href={`../latest_news/${item.id}`}>
                    <p className="text-red-600 text-xs mt-1">
                      Read More →
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EVENTS ================= */}
        <div className="relative w-[40%] bg-white rounded-2xl shadow-lg p-5 border">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-blue-700">Events</h2>

            <Link href="../Events">
              <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded">
                View All
              </button>
            </Link>
          </div>

          {/* ◀ LEFT (NO EFFECT) */}
          <button
            onClick={() => scrollHorizontal(eventsRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500"
          >
            ◀
          </button>

          {/* ▶ RIGHT (NO EFFECT) */}
          <button
            onClick={() => scrollHorizontal(eventsRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500"
          >
            ▶
          </button>

          {/* EVENTS LIST */}
          <div
            ref={eventsRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {events.map((item) => (
              <div
                key={item.id}
                className="min-w-[220px] bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  className="h-[130px] w-full object-cover"
                />

                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2">
                    {item.desc}
                  </p>

                  <Link href={`/Events`}>
                    <p className="text-blue-600 text-xs mt-2">
                      View Event →
                    </p>
                  </Link>
                  <Link href={`/Events`}>
                     <p>
                      view event
                     </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Hide Scrollbar */}
      {/* <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}

    </div>
  );
}