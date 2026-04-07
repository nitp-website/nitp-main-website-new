"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function YearPage() {
  const { year } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/campus/${year}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images || []);
        setLoading(false);
      })
      .catch(() => {
        setImages([]);
        setLoading(false);
      });
  }, [year]);

  const prev = () => {
    setSelectedIndex((prev) =>
      (prev - 1 + images.length) % images.length
    );
  };

  const next = () => {
    setSelectedIndex((prev) =>
      (prev + 1) % images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      <h1 className="text-2xl font-bold text-center text-red-700 mb-10">
        Campus Life {year}
      </h1>

      {/* LOADING */}
      {loading ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="break-inside-avoid">
              <div className="relative w-full h-[200px] rounded-xl bg-gray-300 overflow-hidden">
                <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      ) : images.length === 0 ? (
        <p className="text-center text-gray-500">
          No images available
        </p>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                src={img}
                loading="lazy"
                onClick={() => setSelectedIndex(index)}
                className="w-full rounded-xl hover:scale-105 transition duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}

      {/* 🔥 CENTERED IMAGE VIEWER */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* 🔥 WRAPPER (IMPORTANT FOR CENTER ALIGNMENT) */}
          <div className="relative flex items-center justify-center">

            {/* IMAGE */}
            <img
              src={images[selectedIndex]}
              className="object-contain rounded-lg max-h-[95vh] max-w-[95vw] scale-110"
            />

            {/* ❌ CLOSE BUTTON (TOP RIGHT OF IMAGE) */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:scale-110 transition"
            >
              ✕
            </button>

            {/* ◀ LEFT BUTTON (CENTER LEFT OF IMAGE) */}
            <button
              onClick={prev}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white text-2xl hover:scale-110 transition"
            >
              ◀
            </button>

            {/* ▶ RIGHT BUTTON (CENTER RIGHT OF IMAGE) */}
            <button
              onClick={next}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white text-2xl hover:scale-110 transition"
            >
              ▶
            </button>

          </div>
        </div>
      )}

    </div>
  );
}