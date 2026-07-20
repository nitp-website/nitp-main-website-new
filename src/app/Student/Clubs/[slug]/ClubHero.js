"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Quote, Users, ChevronLeft, ChevronRight } from "lucide-react";
import NITPLogo from "@/app/assets/images/logo.png";

const ClubHero = ({ club }) => {
  // Safe extraction of club data parameters and fallbacks
  const name = club?.name || "Club";
  const isInactive = club?.status && club.status.toLowerCase() === "inactive";
  const clubId = club?.id;
  const memberSessions = club?.members && typeof club.members === "object" ? club.members : {};
  const sessionKeys = Object.keys(memberSessions).sort((a, b) => b.localeCompare(a));
  const latestSessionKey = sessionKeys[0] || null;
  const currentMembers =
    (latestSessionKey && memberSessions[latestSessionKey]) ||
    Object.values(memberSessions).find((session) => session && typeof session === "object") ||
    {};

  const patnaPI = currentMembers.patna?.pi;
  const bihtaPI = currentMembers.bihta?.pi;
  const showPatnaPI = patnaPI && patnaPI.name;
  const showBihtaPI = bihtaPI && bihtaPI.name;
  const hasPI = showPatnaPI || showBihtaPI;

  const activeMembers = club?.active_members || "0";
  const eventsOrganized = club?.events_organized || "0";
  const establishedYear = club?.established_year || "1999";
  const piMessage = club?.message_from_pi || "";
  const carouselImages = Array.isArray(club?.pictures) ? club.pictures : [];

  // Carousel layout and tracking state
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const stats = [
    { val: eventsOrganized, label: "Events Organized" },
    { val: activeMembers, label: "Active Members" },
    { val: establishedYear, label: "Year Established" },
    { val: "NITP", label: "Official Node" },
  ];

  // Listens to manual swipe/scroll interactions inside the gallery carousel
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  // Programmatically scrolls the image gallery section to a precise slide index
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full space-y-8 antialiased">
      {isInactive && (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-3 text-slate-700 shadow-sm animate-fadeIn">
          <span className="font-bold uppercase tracking-wider text-[10px] bg-slate-200/60 border border-slate-300 rounded px-2.5 py-1 text-slate-500">
            Inactive
          </span>
          <p className="text-xs sm:text-sm font-medium">
            This student club is currently inactive. Past archives, legacy members, and details are shown for reference.
          </p>
        </div>
      )}
      
      {/* OVERVIEW HERO SECTION */}
      <section id="overview" className={`relative overflow-hidden rounded-2xl border bg-white p-6 sm:p-8 shadow-sm scroll-mt-24 ${isInactive ? "border-gray-200" : "border-red-100"}`} >
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-5 sm:gap-6 flex-1 min-w-0">
            <div className={`relative rounded-full border bg-white p-1 shadow-sm overflow-hidden h-20 w-20 sm:h-24 sm:w-24 shrink-0 ${isInactive ? "border-gray-300 filter grayscale opacity-75" : "border-red-200"}`}>
              <img
                src={club?.logo || NITPLogo.src}
                alt={`${name} logo`}
                className="h-full w-full object-cover rounded-full aspect-square"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
                <h1 className="text-2xl font-extrabold tracking-tight text-red-950 sm:text-3xl leading-tight">
                  {name}
                </h1>
                {isInactive && (
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500 border border-gray-300">
                    Inactive
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm font-bold tracking-widest text-red-700 uppercase">
                {club?.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 justify-center">
            <Link
              href={clubId ? `/Student/Clubs/${clubId}/events` : "#"}
              aria-disabled={!clubId}
              className={`group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-red-800 px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-red-900 shadow-md hover:shadow-lg whitespace-nowrap ${
                !clubId ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <CalendarDays className="h-4 w-4 text-red-200" />
              Explore Events
              <ArrowRight className="h-3.5 w-3.5 text-red-200 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href={clubId ? `/Student/Clubs/${clubId}/team` : "#"}
              aria-disabled={!clubId}
              className={`group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 text-xs font-bold text-red-900 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-950 shadow-sm whitespace-nowrap ${
                !clubId ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <Users className="h-4 w-4 text-red-700/80 group-hover:text-red-900 transition-colors duration-200" />
              Meet Team
              <ArrowRight className="h-3.5 w-3.5 text-red-700/80 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Stats Summary Grid Footer */}
        <div className="mt-8 pt-6 border-t border-red-100 grid grid-cols-2 gap-3 min-[640px]:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#f7f5ec]/70 rounded-xl p-3 text-center border border-red-100/60 shadow-sm"
            >
              <span className="block text-lg font-extrabold text-red-900">
                {stat.val}
              </span>
              <span className="text-[10px] font-bold text-red-950/60 tracking-wider uppercase mt-0.5 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT CLUB BRIEF SECTION */}
      {club?.about?.trim() && (
        <section id="about" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-2 pb-2 border-b border-red-100">
            <span className="inline-block w-1.5 h-5 bg-red-700 rounded-full"></span>
            <h2 className="text-base font-extrabold text-red-950 uppercase tracking-wider">
              About
            </h2>
          </div>

          <div className="rounded-2xl border border-red-100/80 bg-white p-5 shadow-sm sm:p-6">
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-800 md:text-base">
              {club.about.length > 240
                ? `${club.about.slice(0, 240)}...`
                : club.about}
            </p>

            <div className="mt-6 flex justify-end">
              <Link
                href={clubId ? `/Student/Clubs/${clubId}/about` : "#"}
                aria-disabled={!clubId}
                className={`inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold text-red-800 transition-all duration-200 hover:border-red-300 hover:bg-red-100 hover:text-red-950 ${
                  !clubId ? "pointer-events-none opacity-50" : ""
                }`}
              >
                More...
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* PI DESK LEADERSHIP MESSAGE */}
      {piMessage && (
        <section id="leadership" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-2 pb-2 border-b border-red-100">
            <span className="inline-block w-1.5 h-5 bg-red-700 rounded-full"></span>
            <h2 className="text-base font-extrabold text-red-950 uppercase tracking-wider">
              PI Desk
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-red-100/80 bg-white p-5 sm:p-6 shadow-sm">
            <Quote
              className="absolute right-6 top-6 h-12 w-12 text-red-50"
              strokeWidth={1}
              aria-hidden="true"
            />

            <div className={`relative z-10 grid gap-6 ${showPatnaPI && showBihtaPI ? "lg:grid-cols-[380px_1fr]" : "md:grid-cols-[180px_1fr]"} items-center`}>
              {hasPI && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full">
                  {showBihtaPI && (
                    <div className="flex flex-col items-center p-4 bg-[#f7f5ec]/70 rounded-2xl border border-red-100/50 text-center flex-1 shadow-sm min-w-[160px] max-w-[190px]">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white border-2 border-red-200 shadow-sm overflow-hidden">
                        <img
                          src={bihtaPI.avatar || "/faculty.jpeg"}
                          alt={bihtaPI.name}
                          className="h-full w-full object-cover rounded-full aspect-square"
                          loading="lazy"
                          onError={(e) => {e.currentTarget.src = "/faculty.jpeg"}}
                        />
                      </div>
                      <span className="mt-2 text-[9px] font-bold text-red-700/80 uppercase tracking-wide">
                        Bihta Campus PI
                      </span>
                      <h3 className="mt-1 text-sm font-bold text-red-950 line-clamp-1">
                        {bihtaPI.name}
                      </h3>
                      <p className="text-xs font-semibold text-red-800 mt-0.5 line-clamp-1">
                        {bihtaPI.department || ""}
                      </p>
                      {bihtaPI.email && (
                        <Link
                          href={`/profile/${bihtaPI.email}`}
                          className="mt-2.5 inline-flex items-center gap-1 rounded-lg bg-red-800 px-3 py-1 text-[11px] font-bold text-white transition-all duration-200 hover:bg-red-900 shadow-xs"
                        >
                          View Profile
                        </Link>
                      )}
                    </div>
                  )}
                  {showPatnaPI && (
                    <div className="flex flex-col items-center p-4 bg-[#f7f5ec]/70 rounded-2xl border border-red-100/50 text-center flex-1 shadow-sm min-w-[160px] max-w-[190px]">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white border-2 border-red-200 shadow-sm overflow-hidden">
                        <img
                          src={patnaPI.avatar || "/faculty.jpeg"}
                          alt={patnaPI.name}
                          className="h-full w-full object-cover rounded-full aspect-square"
                          loading="lazy"
                          onError={(e) => {e.currentTarget.src = "/faculty.jpeg"}}
                        />
                      </div>
                      <span className="mt-2 text-[9px] font-bold text-red-700/80 uppercase tracking-wide">
                        Patna Campus PI
                      </span>
                      <h3 className="mt-1 text-sm font-bold text-red-950 line-clamp-1">
                        {patnaPI.name}
                      </h3>
                      <p className="text-xs font-semibold text-red-800 mt-0.5 line-clamp-1">
                        {patnaPI.department || ""}
                      </p>
                      {patnaPI.email && (
                        <Link
                          href={`/profile/${patnaPI.email}`}
                          className="mt-2.5 inline-flex items-center gap-1 rounded-lg bg-red-800 px-3 py-1 text-[11px] font-bold text-white transition-all duration-200 hover:bg-red-900 shadow-xs"
                        >
                          View Profile
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )}
              <div className="space-y-3 flex-1">
                <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-[10px] font-bold text-red-800 uppercase tracking-wider">
                  Message from PI
                </span>
                <blockquote className="border-l-4 border-red-700 pl-4 bg-red-50/10 py-3 pr-3 rounded-r-xl">
                  <p className="text-sm leading-relaxed text-gray-800 italic font-medium">
                    {piMessage || ""}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FULL-WIDTH RESPONSIVE IMAGES CAROUSEL */}
      {carouselImages.length > 0 && (
        <section id="gallery" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-2 pb-2 border-b border-red-100">
            <span className="inline-block w-1.5 h-5 bg-red-700 rounded-full"></span>
            <h2 className="text-base font-extrabold text-red-950 uppercase tracking-wider">
              Club Gallery
            </h2>
          </div>

          <div className="relative group/carousel w-full rounded-2xl overflow-hidden shadow-sm border border-red-100 bg-slate-50 aspect-[16/9] md:aspect-[21/9]">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {carouselImages.map((imgUrl, idx) => (
                <div key={idx} className="h-full w-full shrink-0 snap-start snap-always relative select-none">
                  <img
                    src={imgUrl}
                    alt={`${name} gallery frame ${idx + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Carousel navigation controls and pagination triggers */}
            {carouselImages.length > 1 && (
              <>
                <button
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-red-800 hover:bg-white shadow transition-all duration-200 disabled:opacity-0 pointer-events-auto opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollToIndex(Math.min(carouselImages.length - 1, activeIndex + 1))}
                  disabled={activeIndex === carouselImages.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-red-800 hover:bg-white shadow transition-all duration-200 disabled:opacity-0 pointer-events-auto opacity-0 group-hover/carousel:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        idx === activeIndex ? "w-5 bg-white" : "w-2 bg-white/50"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClubHero;