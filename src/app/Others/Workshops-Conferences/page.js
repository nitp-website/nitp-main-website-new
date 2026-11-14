"use client";

import { useEffect, useState } from "react";
import { Calendar, Users } from "lucide-react";

const PAGE_SIZE = 20;

const formatDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return isNaN(date.getTime())
    ? null
    : date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
};

export default function WorkshopsConferencesPage() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadEvents = async () => {
      setLoading(true);
      setError(false);

      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/workshops-conferences?page=${page}&limit=${PAGE_SIZE}`;
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        const result = await response.json();
        setEvents(Array.isArray(result.data) ? result.data : []);
        setTotalPages(Math.max(1, Number(result.totalPages) || 1));
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          console.error("Error fetching workshops and conferences:", fetchError);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadEvents();
    return () => controller.abort();
  }, [page]);

  return (
    <main className="min-h-screen bg-[#f8f5f3] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-red-950">Workshops & Conferences</h1>

        {loading ? (
          <p className="py-12 text-center text-gray-600" role="status">Loading workshops and conferences...</p>
        ) : error ? (
          <p className="py-12 text-center text-red-800" role="alert">Unable to load workshops and conferences.</p>
        ) : events.length === 0 ? (
          <p className="py-12 text-center text-gray-600">No workshops or conferences available.</p>
        ) : (
          <div className="space-y-4">
            {events.map((event) => {
              const startDate = formatDate(event.start_date);
              const endDate = formatDate(event.end_date);

              return (
                <article key={event.id} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h2 className="text-lg font-semibold text-red-800">{event.event_name}</h2>
                  <p className="mt-1 text-sm text-gray-700">
                    {[event.event_type, event.role, event.faculty_name, event.department].filter(Boolean).join(" · ")}
                  </p>
                  {event.sponsored_by && <p className="mt-2 text-sm text-gray-700">Sponsored by {event.sponsored_by}</p>}
                  {(startDate || endDate) && (
                    <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 shrink-0 text-red-800" />
                      <span>{startDate || endDate}{startDate && endDate && startDate !== endDate ? ` to ${endDate}` : ""}</span>
                    </p>
                  )}
                  {event.participants_count != null && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 shrink-0 text-red-800" />
                      <span>{event.participants_count} participants</span>
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {!loading && !error && totalPages > 1 && (
          <nav aria-label="Workshop pages" className="mt-8 flex items-center justify-center gap-4">
            <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={page === 1} className="rounded border border-red-800 px-4 py-2 text-red-800 disabled:cursor-not-allowed disabled:opacity-40">Previous</button>
            <span className="text-sm text-gray-700">Page {page} of {totalPages}</span>
            <button type="button" onClick={() => setPage((value) => Math.min(totalPages, value + 1))} disabled={page === totalPages} className="rounded border border-red-800 px-4 py-2 text-red-800 disabled:cursor-not-allowed disabled:opacity-40">Next</button>
          </nav>
        )}
      </div>
    </main>
  );
}
