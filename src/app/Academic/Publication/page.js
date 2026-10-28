"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { extractApiArray, getBackendApiUrl } from "@/lib/apiHelpers";

const PUBLICATIONS_API = getBackendApiUrl("/api/publications");
const PAGE_SIZE = 50;

// UI tab -> value understood by the backend API's `pubType` parameter
const TYPE_TO_API = {
  all: null,
  journal: "journal",
  conference: "conference",
  book_chapters: "book_chapter",
};

const TYPE_BUTTONS = [
  { key: "all", label: "All Publications" },
  { key: "journal", label: "Journal Articles" },
  { key: "conference", label: "Conference Papers" },
  { key: "book_chapters", label: "Book Chapters" },
];

const TYPE_HEADINGS = {
  all: "All Publications",
  journal: "Journal Publications",
  conference: "Conference Publications",
  book_chapters: "Book Chapters",
};

function getCurrentAcademicYear() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  if (month >= 6) {
    // July to December
    return `${year}-${year + 1}`;
  }
  // January to June
  return `${year - 1}-${year}`;
}

function generateAcademicYears() {
  const years = [];
  const startYear = 2010;
  const latestStart = parseInt(getCurrentAcademicYear().split("-")[0], 10);

  for (let year = latestStart; year >= startYear; year--) {
    years.push(`${year}-${year + 1}`);
  }
  return years;
}

// Always returns a 4-digit year string (or "Unknown") for grouping.
function getItemYear(item) {
  const direct = item.conference_year || item.publication_year;
  if (direct) return String(direct);
  const match = String(item.year || "").match(/\d{4}/);
  return match ? match[0] : "Unknown";
}

function getDoiHref(pub) {
  const raw = pub.doi_url || pub.doi;
  if (!raw) return null;
  return /^https?:\/\//i.test(raw) ? raw : `https://doi.org/${raw}`;
}

function DoiLink({ pub }) {
  const href = getDoiHref(pub);
  if (!href) return null;
  return (
    <div className="text-blue-600 underline mt-2">
      <a href={href} target="_blank" rel="noopener noreferrer">
        DOI Link
      </a>
    </div>
  );
}

function PublicationItem({ pub }) {
  if (pub.type === "conference" || pub.conference_name) {
    const yearDisplay = pub.conference_year || getItemYear(pub);
    return (
      <div className="text-gray-800">
        <span className="font-semibold">{pub.authors}</span>,{" "}
        <span className="font-semibold text-blue-700">"{pub.title}"</span>,{" "}
        <span className="text-gray-700 text-lg font-bold">{pub.conference_name}</span>
        {pub.location && (
          <span className="text-gray-800 font-semibold"> Location: {pub.location}</span>
        )}
        {yearDisplay && yearDisplay !== "Unknown" && (
          <span className="text-gray-700"> ({yearDisplay})</span>
        )}
        <DoiLink pub={pub} />
      </div>
    );
  }

  if (pub.type === "journal" || pub.journal_name) {
    const yearDisplay = pub.publication_year || getItemYear(pub);
    return (
      <div className="text-gray-800">
        {pub.authors && <span className="font-semibold">{pub.authors}</span>}
        {pub.title && (
          <>
            , <span className="font-semibold text-blue-700">"{pub.title}"</span>
          </>
        )}
        {pub.journal_name && (
          <>
            , <span className="text-gray-700 text-lg font-semibold">{pub.journal_name}</span>
          </>
        )}
        {pub.journal_quartile && (
          <span className="text-gray-700"> ({pub.journal_quartile})</span>
        )}
        {pub.volume && <span className="text-gray-700"> Volume: {pub.volume}</span>}
        {yearDisplay && yearDisplay !== "Unknown" && (
          <span className="text-gray-700"> Year: {yearDisplay}</span>
        )}
        <DoiLink pub={pub} />
      </div>
    );
  }

  // Book chapters / textbooks
  const yearDisplay = pub.publication_year || getItemYear(pub);
  return (
    <div className="text-gray-800">
      {pub.authors && <span className="font-semibold">{pub.authors}</span>}
      {pub.chapter_title && (
        <>
          , <span className="font-semibold text-blue-700">"{pub.chapter_title}"</span>
        </>
      )}
      {pub.book_title && (
        <>
          , <span className="text-gray-700 text-lg font-semibold">{pub.book_title}</span>
        </>
      )}
      {pub.title && !pub.chapter_title && !pub.book_title && (
        <>
          , <span className="font-semibold text-blue-700">"{pub.title}"</span>
        </>
      )}
      {pub.publisher && <span className="text-gray-700"> Publisher: {pub.publisher}</span>}
      {pub.pages && <span className="text-gray-700"> Pages: {pub.pages}</span>}
      {yearDisplay && yearDisplay !== "Unknown" && (
        <span className="text-gray-700"> ({yearDisplay})</span>
      )}
      <DoiLink pub={pub} />
    </div>
  );
}

const ArticlesList = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [activeTab, setActiveTab] = useState("current");
  const [academicYear, setAcademicYear] = useState(getCurrentAcademicYear());

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Active type comes straight from the URL query params
  const rawType = searchParams?.get("type");
  const activeType = rawType && TYPE_TO_API[rawType] !== undefined ? rawType : "all";
  const apiPubType = TYPE_TO_API[activeType];

  // Server-side year filter derived from the active tab.
  // "all" tab sends no year param so all years are fetched.
  const yearParam = useMemo(() => {
    if (activeTab === "current") return getCurrentAcademicYear();
    if (activeTab === "academic") return academicYear;
    return null;
  }, [activeTab, academicYear]);

  // Debounce the search box to avoid firing a request on every keystroke
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm.trim()), 400);
    return () => clearTimeout(t);
  }, [searchTerm]);

  // Page is tied to active filters. If filters change, it resets to page 1 automatically
  const filtersKey = `${activeType}|${yearParam || ""}|${debouncedSearch}`;
  const [pageState, setPageState] = useState({ key: "", page: 1 });
  const currentPage = pageState.key === filtersKey ? pageState.page : 1;

  const goToPage = (page) => {
    const targetPage = Math.max(1, Math.min(page, totalPages));
    setPageState({ key: filtersKey, page: targetPage });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Server-side filtered fetch. Year, pubType, search and pagination are all
  // processed on the server BEFORE LIMIT/OFFSET so each page is full (PAGE_SIZE).
  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          type: "all",
          page: String(currentPage),
          limit: String(PAGE_SIZE),
        });
        if (yearParam) params.set("year", yearParam);
        if (apiPubType) params.set("pubType", apiPubType);
        if (debouncedSearch) params.set("search", debouncedSearch);

        const response = await fetch(`${PUBLICATIONS_API}?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch publication data");
        }

        const data = await response.json();
        const items = Array.isArray(data?.data) ? data.data : extractApiArray(data);

        setPublications(items);
        setTotal(Number(data?.total || 0));
        setTotalPages(Math.max(1, Number(data?.totalPages || 1)));
        setError(null);
      } catch (err) {
        if (err?.name === "AbortError") return; // superseded by newer request
        setError("Failed to fetch publication data");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, [filtersKey, currentPage, yearParam, apiPubType, debouncedSearch, retryCount]);

  const updateTypeParam = (type) => {
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    if (!type || type === "all") {
      params.delete("type");
    } else {
      params.set("type", type);
    }
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`);
  };

  // Group the current page's publications by year for display.
  // The backend already returns rows ordered by sort_year DESC, id DESC.
  const groupedEntries = useMemo(() => {
    const grouped = {};
    publications.forEach((item) => {
      const year = getItemYear(item);
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(item);
    });

    return Object.entries(grouped).sort(([yearA], [yearB]) => {
      const a = parseInt(yearA, 10);
      const b = parseInt(yearB, 10);
      if (isNaN(a) && isNaN(b)) return 0;
      if (isNaN(a)) return 1; // "Unknown" sinks to the bottom
      if (isNaN(b)) return -1;
      return b - a;
    });
  }, [publications]);

  const rangeStart = total === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = rangeStart === 0 ? 0 : rangeStart + publications.length - 1;

  const clearFilters = () => {
    setSearchTerm("");
    setDebouncedSearch("");
    setActiveTab("all");
    updateTypeParam("all");
  };

  const tabs = [
    { key: "current", label: `Academic Year (${getCurrentAcademicYear()})` },
    { key: "academic", label: "Academic Year" },
    { key: "all", label: "All Publications" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/5 mb-6 md:mb-0 md:mr-6">
          <div className="bg-white rounded-md shadow-sm p-4 md:sticky md:top-24">
            <h2 className="text-lg font-semibold mb-4 text-red-800">Filter by Type</h2>
            <div className="space-y-2">
              {TYPE_BUTTONS.map(({ key, label }) => (
                <button
                  key={key}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    activeType === key
                      ? "bg-red-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => updateTypeParam(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-4/5">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-950 text-center">
            {TYPE_HEADINGS[activeType]}
          </h1>

          {/* Search bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by author, title, journal, conference, or publisher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-md ${
                  activeTab === key
                    ? "bg-red-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Academic Year Picker */}
          {activeTab === "academic" && (
            <div className="flex justify-center mb-6">
              <label className="mr-2 font-medium text-gray-700 self-center">
                Select Academic Year:
              </label>
              <select
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-800"
              >
                {generateAcademicYears().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-800"></div>
              <p className="mt-4 text-gray-600">Loading publications...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 bg-red-50 p-6 rounded-md">
              <p className="font-medium">{error}</p>
              <button
                onClick={() => setRetryCount((c) => c + 1)}
                className="mt-4 px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : publications.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-md shadow-sm">
              <p className="text-gray-600">No publications found matching your criteria.</p>
              {(searchTerm || activeTab !== "all" || activeType !== "all") && (
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Results count */}
              <div className="mb-4 text-sm text-gray-600">
                Showing {rangeStart}–{rangeEnd} of {total} publications (page {currentPage} of{" "}
                {totalPages})
              </div>

              {/* Publications list */}
              {groupedEntries.map(([year, yearPublications]) => (
                <div key={year} className="mb-6">
                  <h3 className="text-lg font-bold text-white bg-blue-700 px-4 py-2 rounded-lg">
                    {year}
                  </h3>
                  <ul className="space-y-4 mt-2">
                    {yearPublications.map((pub, idx) => (
                      <li
                        key={`${pub.type || "pub"}-${pub.id || idx}-${idx}`}
                        className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                      >
                        <PublicationItem pub={pub} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1 || isLoading}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      currentPage === 1 || isLoading
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-red-800 text-white hover:bg-red-900 transition-colors"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Previous
                  </button>

                  <div className="px-4 py-2 text-black bg-white border border-gray-300 rounded-md flex items-center">
                    Page {currentPage} of {totalPages}
                  </div>

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages || isLoading}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      currentPage === totalPages || isLoading
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-red-800 text-white hover:bg-red-900 transition-colors"
                    }`}
                  >
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
