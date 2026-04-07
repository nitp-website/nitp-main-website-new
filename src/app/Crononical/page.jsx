"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CampusCulture() {
  const yearsData = [
    {
      year: "2026",
      img: "https://res.cloudinary.com/dxmyyw7cn/image/upload/v1774207698/download_p0izrz.jpg",
    },
    {
      year: "2025",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTRzLea_0zPoz0O7aO_fsZNjo8V5g5FEEpA&s",
    },
    {
      year: "2024",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2oASENe7GdCli1KnAl6cnDnuD6lGT60txQ&s",
    },
    {
      year: "2023",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s",
    },
    {
      year: "2022",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99sY76AYNUvkEEulj9h3uGYExcKHjVBqB9A&s",
    },
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE (desktop only feel)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % yearsData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % yearsData.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">

      {/* 🔥 TITLE */}
      <div className="px-4 py-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-red-700 mb-10">
          Campus Culture
        </h1>
          {/* <h1 className="text-3xl sm:text-4xl font-bold text-cneter">
                enjoy
          </h1> */}
      {/* 🔥 MOBILE 3D CAROUSEL */}
<div className="sm:hidden flex justify-center items-center relative h-[220px]">

  {/* LEFT BUTTON */}
  <button
    onClick={() =>
      setIndex((prev) => (prev - 1 + yearsData.length) % yearsData.length)
    }
    className="absolute left-2 z-50 bg-white/50 backdrop-blur p-2 rounded-full"
  >
    ◀
  </button>

  {/* RIGHT BUTTON */}
  <button
    onClick={() =>
      setIndex((prev) => (prev + 1) % yearsData.length)
    }
    className="absolute right-2 z-50 bg-white/50 backdrop-blur p-2 rounded-full"
  >
    ▶
  </button>

  {yearsData.map((item, i) => {
    const position = (i - index + yearsData.length) % yearsData.length;

    let offset = position;
    if (offset > yearsData.length / 2) {
      offset -= yearsData.length;
    }

    return (
      <Link key={item.year} href={`/Crononical/${item.year}`}>
        <div
          className="absolute w-[220px] h-[140px] rounded-xl overflow-hidden shadow-lg transition-all duration-500"
          style={{
            transform: `
              translateX(${offset * 120}px)
              scale(${offset === 0 ? 1 : 0.8})
              rotateY(${offset === 0 ? 0 : offset > 0 ? -25 : 25}deg)
            `,
            zIndex: offset === 0 ? 10 : 5,
            opacity: Math.abs(offset) > 2 ? 0 : 1,
          }}
        >
          <img
            src={item.img}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-lg font-bold text-white">
              {item.year}
            </h2>
          </div>
        </div>
      </Link>
    );
  })}
</div>

        {/* 🔥 DESKTOP VIEW (3D CAROUSEL) */}
        <div className="hidden sm:flex justify-center items-center perspective-[1200px] relative h-[250px]">

          {/* ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-50 bg-orange-200/40 backdrop-blur p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            ▶
          </button>

          {yearsData.map((item, i) => {
            const position =
              (i - index + yearsData.length) % yearsData.length;

            let offset = position;
            if (offset > yearsData.length / 2) {
              offset -= yearsData.length;
            }

            return (
              <Link key={item.year} href={`/Crononical/${item.year}`}>
                <div
                  className="absolute w-[260px] md:w-[300px] h-[180px] md:h-[200px] rounded-2xl overflow-hidden shadow-xl transition-all duration-700 cursor-pointer group"
                  style={{
                    transform: `
                      translateX(${offset * 280}px)
                      scale(${offset === 0 ? 1 : 0.75})
                      rotateY(${offset === 0 ? 0 : offset > 0 ? -40 : 40}deg)
                    `,
                    zIndex: offset === 0 ? 10 : 5,
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                    filter: offset === 0 ? "none" : "blur(2px)",
                  }}
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-white">
                      {item.year}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 🔥 DESCRIPTION */}
      <div className="px-4 pb-12 flex justify-center mt-10 sm:mt-40">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-red-100 p-6 sm:p-10 text-center">

          <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-4">
            Experience Campus Life
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Explore the vibrant campus culture of NIT Patna through years of memories.
            From technical fests to cultural nights, every year brings new experiences
            and unforgettable moments.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-red-600 font-semibold text-sm sm:text-base">
                Technical Fests
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-red-600 font-semibold text-sm sm:text-base">
                Cultural Nights
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-red-600 font-semibold text-sm sm:text-base">
                Student Life
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}