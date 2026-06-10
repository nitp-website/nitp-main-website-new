"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

const ClubGallery = ({ club }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const gallery=club?.gallery;

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) =>
      prev === null ? 0 : (prev + 1) % gallery.length
    );
  };

  const previousImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => prev === null ? 0 : (prev - 1 + gallery.length) % gallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <section className="min-h-screen overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-t-4 border-red-600 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
            <Images className="h-5 w-5 text-red-700" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {club?.name} Gallery
            </h1>
            <p className="text-sm text-gray-500">
              Explore highlights from our events and activities.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 border-b border-gray-200 pb-5">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-red-600" />
            <span className="text-xs font-medium text-gray-600">
              {gallery.length} Photos
            </span>
          </div>
        </div>

        <div className="mt-6">
          <div
            onClick={() => openLightbox(0)}
            className="group relative cursor-pointer overflow-hidden rounded-xl"
          >
            <img
              src={gallery[0]}
              alt="Featured"
              className="h-[200px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[280px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                Featured
              </p>
              <h3 className="text-lg font-bold">{club?.name || "Club"}</h3>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {gallery.slice(1).map((image, index) => {
            const actualIndex = index + 1;
            return (
              <div
                key={actualIndex}
                onClick={() => openLightbox(actualIndex)}
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-100 bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {!loadedImages[actualIndex] && (
                  <div className="absolute inset-0 animate-pulse bg-gray-200" />
                )}
                <img
                  src={image}
                  alt={`Gallery ${actualIndex}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(actualIndex)}
                  className={`aspect-square w-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    loadedImages[actualIndex]
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
              </div>
            );
          })}
        </div>
      </div>

      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <button
            onClick={previousImage}
            className="absolute left-2 md:left-6 z-50 rounded-full bg-white/10 p-2 md:p-3 text-white backdrop-blur transition hover:bg-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-6 z-50 rounded-full bg-white/10 p-2 md:p-3 text-white backdrop-blur transition hover:bg-white/20"
          >
            <ChevronRight size={24} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg"
          >
            <img
              src={gallery[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="max-h-[85vh] w-auto object-contain"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
              {currentIndex + 1} / {gallery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClubGallery;