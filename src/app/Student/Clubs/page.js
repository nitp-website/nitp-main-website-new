/** @format */

import Link from "next/link";
import { getClubs } from "./services/clubService";
import NITPLogo from "@/app/assets/images/logo.png";

export default async function ClubsPage({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params?.category;

  const clubs = await getClubs();

  const categories = [...new Set(clubs.map((club) => club.category).filter(Boolean)),].sort();
  const displayedClubs = activeCategory ? clubs.filter((club) => club.category === activeCategory) : clubs;

  return (
    <>
      <section className="mx-auto w-[min(1120px,calc(100%_-_32px))] py-[28px] pb-[18px] text-center">
        <h1 className="text-center text-3xl font-bold text-red-800">
          Clubs and Societies
        </h1>
      </section>

      {/* Category Filters */}
      <section
        className="mx-auto flex w-[min(1120px,calc(100%_-_32px))] flex-wrap justify-center gap-3 py-2 pb-8"
        aria-label="Filter clubs by category"
      >
        <Link
          href="/Student/Clubs"
          scroll={false}
          className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
            !activeCategory
              ? "border-red-800 bg-red-800 text-white shadow-md"
              : "border-red-800/40 bg-white text-red-800 hover:border-red-800 hover:bg-red-50"
          }`}
        >
          All
        </Link>

        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <Link
              key={category}
              href={`/Student/Clubs?category=${encodeURIComponent(category)}`}
              scroll={false}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border-red-800 bg-red-800 text-white shadow-md"
                  : "border-red-800/40 bg-white text-red-800 hover:border-red-800 hover:bg-red-50"
              }`}
            >
              {category}
            </Link>
          );
        })}
      </section>

      {/* Clubs Grid */}
      <section
        className="mx-auto grid w-[min(1120px,calc(100%_-_32px))] grid-cols-2 gap-[12px] pb-16 pt-5 min-[640px]:grid-cols-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-5"
        aria-label="Club list"
      >
        {displayedClubs.length > 0 ? (
          displayedClubs.map((club) => {
            const isInactive = club.status && club.status.toLowerCase() === "inactive";
            return (
              <Link
                key={club.id}
                href={`/Student/Clubs/${club.id}`}
                className={`mx-auto flex min-h-[180px] w-full max-w-[300px] flex-col items-center justify-center gap-4 rounded-lg border px-[14px] py-[2px] text-center no-underline transition md:mx-0 md:min-h-[158px] md:max-w-none md:px-3 md:py-[18px] relative overflow-hidden ${
                  isInactive
                    ? "border-gray-200 bg-gray-50/80 opacity-70 filter grayscale shadow-sm hover:opacity-90 hover:border-gray-300"
                    : "border-red-900/15 bg-white/85 shadow-[0_14px_34px_rgba(127,29,29,0.08)] hover:-translate-y-1 hover:border-red-900/35 hover:shadow-[0_20px_42px_rgba(127,29,29,0.14)]"
                }`}
              >
                {isInactive && (
                  <div className="absolute top-2 right-2 rounded bg-gray-500/10 px-1.5 py-0.5 text-[9px] font-bold text-gray-500 uppercase tracking-wider border border-gray-500/20">
                    Inactive
                  </div>
                )}
                <span className="grid h-[86px] w-[86px] place-items-center rounded-lg bg-[linear-gradient(145deg,#ffffff,#fff1f1)] shadow-[inset_0_0_0_6px_rgba(255,255,255,0.75)]">
                  <img
                    src={club.logo || NITPLogo.src}
                    alt={`${club.name} logo`}
                    loading="lazy"
                    className="h-[70px] w-[70px] rounded-[7px] object-cover"
                  />
                </span>

                <span className="text-base font-black leading-[1.35] text-gray-900">
                  {club.name}
                </span>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full py-10 text-center text-red-600 font-semibold text-xl">
            No clubs found in this category.
          </div>
        )}
      </section>
    </>
  );
}
