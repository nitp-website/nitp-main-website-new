"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, X, ChevronLeft, ChevronRight, Maximize2, ArrowRight, Clock, MapPin } from "lucide-react";

const ClubEvents = ({ clubEvents, club }) => {
  const router = useRouter();
  
  // State tracking the index of the currently opened fullscreen image modal
  const [selectedIndex, setSelectedIndex] = useState(null);
  const events = Array.isArray(clubEvents) ? clubEvents : [];
  const clubId = club?.id;

  // Modal navigation handlers
  const openPoster = (e, index) => {
    e.stopPropagation(); // Prevents navigating to the details page when clicking fullscreen button
    setSelectedIndex(index);
  };

  const closePoster = () => setSelectedIndex(null);

  const nextPoster = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % events.length);
  };

  const previousPoster = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  // Listens for keyboard shortcuts (Esc, Left, Right) to navigate the modal
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closePoster();
      if (e.key === "ArrowRight") nextPoster();
      if (e.key === "ArrowLeft") previousPoster();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-2xl border border-red-100 bg-white p-5 sm:p-6 md:p-8 shadow-sm">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 pb-4 border-b border-red-100/60 w-full text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="inline-block w-1.5 h-5 bg-red-700 rounded-full"></span>
            <h1 className="text-xl font-extrabold text-red-950">
              {club?.name || "Club"} Events
            </h1>
          </div>
          <p className="text-xs text-gray-500">
            Explore the club's events, workshops, competitions, and community initiatives.
          </p>
        </div>

        {/* Events Grid / Empty State conditional wrapper */}
        {events.length ? (
          <div className="relative z-10 mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={event.id || index}
                onClick={() =>
                  router.push(`/Student/Clubs/${clubId}/events/${event.id}`)
                }
                className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-red-100/80 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
              >
                {/* Event Poster Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 border-b border-red-100/40">
                  <img
                    src={event.poster}
                    alt={event.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-200" />

                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-red-900/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
                      {event.category || "Event"}
                    </span>
                  </div>

                  <button
                    onClick={(e) => openPoster(e, index)}
                    className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-red-100 text-red-800 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:bg-red-900 hover:text-white hover:border-red-900"
                    title="Fullscreen Poster View"
                  >
                    <Maximize2 size={12} className="stroke-[2.5]" />
                  </button>
                </div>

                {/* Event Meta Details Card */}
                <div className="flex flex-col justify-between flex-1 p-5 space-y-4">
                  <div className="space-y-2">
                    <h3 className="line-clamp-1 text-sm font-bold text-red-950 transition-colors duration-200 tracking-tight">
                      {event.title}
                    </h3>
                    <p className="line-clamp-2 text-xs text-gray-700 leading-relaxed font-normal">
                      {event.description}
                    </p>
                    
                    {/* Event Metadata (Duration & Venue) */}
                    {(event.duration || event.venue) && (
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-gray-500 font-medium pt-1">
                        {event.duration && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-red-700/60" />
                            <span>{event.duration}</span>
                          </div>
                        )}
                        {event.venue && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-red-700/60" />
                            <span className="line-clamp-1">{event.venue}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-red-100/40 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-red-800">
                    <span>View Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State fallback view when no events exist */
          <div className="mt-8 flex flex-col items-center justify-center rounded-xl p-8 text-center bg-[#f7f5ec]/50 border border-dashed border-red-200">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-800">
              <CalendarDays className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-bold tracking-tight text-red-950">
              Data Unavailable
            </h2>

            <p className="mt-2 max-w-xs text-xs font-medium leading-relaxed text-gray-500">
              Event details will be available soon.
            </p>
          </div>
        )}
      </div>

      {/* Fullscreen Poster Modal Overlay */}
      {selectedIndex !== null && (
        <div
          onClick={closePoster}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md transition-all duration-300"
        >
          {/* Modal Header controls */}
          <div className="w-full max-w-[85vh] flex justify-between items-center mb-3 text-white">
            <span className="text-xs font-bold tracking-wide text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              {selectedIndex + 1} / {events.length} —{" "}
              {events[selectedIndex].title}
            </span>
            <button
              onClick={closePoster}
              className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-white transition hover:bg-white/10 hover:text-red-400 active:scale-95"
            >
              <X size={18} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Modal Media & Navigation Carousel */}
          <div className="relative flex items-center justify-center w-full max-w-5xl">
            {events.length > 1 && (
              <>
                <button
                  onClick={previousPoster}
                  className="absolute -left-2 sm:left-4 z-20 rounded-xl bg-slate-900/60 border border-slate-800 p-3 text-white transition hover:bg-slate-800 active:scale-95"
                >
                  <ChevronLeft size={20} className="stroke-[2.5]" />
                </button>
                <button
                  onClick={nextPoster}
                  className="absolute -right-2 sm:right-4 z-20 rounded-xl bg-slate-900/60 border border-slate-800 p-3 text-white transition hover:bg-slate-800 active:scale-95"
                >
                  <ChevronRight size={20} className="stroke-[2.5]" />
                </button>
              </>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative overflow-hidden shadow-2xl rounded-2xl bg-black max-h-[75vh]"
            >
              <img
                src={events[selectedIndex].poster}
                alt={events[selectedIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClubEvents;