"use client";
import axios from "axios";
import React, { useEffect, useState, Suspense } from "react";
import { ExternalLink, Star, FileText, ArrowLeft } from "lucide-react";
import { extractApiArray } from "@/lib/apiHelpers";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PositionsContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "REGULAR TEACHING";

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const usedLimit = 100;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const base = process.env.NEXT_PUBLIC_BACKEND_API_URL;

        let combined = [];
        let totalCount = null;

        const url = `${base}/api/notice?type=job&notice_sub_type=${encodeURIComponent(category)}&page=${currentPage}&limit=${usedLimit}`;
        const res = await axios.get(url);
        const arr = extractApiArray(res) || [];
        combined = arr;
        totalCount = res.data?.total ?? arr.length;

        const filtered = (combined || []).filter((notice) => {
          if (notice.isVisible !== 1) return false;
          const noticeSubType = (notice.notice_sub_type || notice.noticeSubType || "").trim().toUpperCase();
          const normalizedSubType = category.trim().toUpperCase();
          return noticeSubType === normalizedSubType;
        });

        const getTimeValue = (n) => {
          if (!n) return 0;
          if (n.event_date) {
            const t = Date.parse(n.event_date);
            if (!isNaN(t)) return t;
          }
          if (n.timestamp !== undefined && n.timestamp !== null) {
            const t = Number(n.timestamp);
            if (!isNaN(t)) return t;
          }
          if (n.date) {
            const t = Date.parse(n.date);
            if (!isNaN(t)) return t;
          }
          if (n.published_on) {
            const t = Date.parse(n.published_on);
            if (!isNaN(t)) return t;
          }
          return 0;
        };

        const sorted = [...filtered].sort((a, b) => getTimeValue(b) - getTimeValue(a));
        setJobs(sorted);

        const computedTotal = typeof totalCount === "number" ? Math.max(1, Math.ceil(totalCount / usedLimit)) : Math.max(1, Math.ceil(filtered.length / usedLimit));
        setTotalPages(computedTotal);
        if (currentPage > computedTotal) setCurrentPage(computedTotal);

        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching Faculty notices:", e);
        setIsLoading(false);
        setFetchError(true);
      }
    };

    if (category) {
      fetchJobs();
    }
  }, [currentPage, category]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const displayTitle = category
    .toLowerCase()
    .split(/[\s-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Jdrf/srf", "JDRF/SRF");

  return (
    <div className="bg-[#f0f0f0] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        
        <div className="mb-6">
          <Link href="/Others/faculty-recruitment" className="inline-flex items-center gap-2 text-sm font-medium text-[#8c1c1c] hover:text-[#5b1e22] transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50">
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
        </div>

        <div className="text-3xl text-center pb-10 text-[#4d1418] font-bold">
          <h2>{displayTitle} Positions</h2>
        </div>

        {/* Table Layout */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
          {isLoading ? (
            <div className="flex justify-center items-center py-20 text-gray-500 font-medium text-lg">Loading...</div>
          ) : fetchError ? (
            <div className="text-center text-red-500 py-20 font-medium">Failed to fetch faculty notices.</div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#4d1418] text-white">
                    <th className="py-4 px-6 font-semibold text-sm w-[70%] border-b-0">Name of Posts</th>
                    <th className="py-4 px-6 font-semibold text-sm w-[30%] border-l border-[#6a1d22] border-b-0">Documents</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.length === 0 ? (
                    <tr>
                      <td colSpan="2" className="text-center text-red-500 py-16 font-medium bg-gray-50">No notices available for this category.</td>
                    </tr>
                  ) : (
                    jobs.map((notice, idx) => {
                      let parsedAttachments = [];
                      if (Array.isArray(notice.attachments)) {
                        parsedAttachments = notice.attachments;
                      } else if (typeof notice.attachments === 'string') {
                        try {
                          const parsed = JSON.parse(notice.attachments);
                          parsedAttachments = Array.isArray(parsed) ? parsed : [];
                        } catch (e) {
                          parsedAttachments = [];
                        }
                      }

                      let parsedLink = "";
                      if (notice.notice_link) {
                        try {
                           const parsed = typeof notice.notice_link === 'string' ? JSON.parse(notice.notice_link) : notice.notice_link;
                           parsedLink = parsed?.url || "";
                        } catch (e) {
                           parsedLink = notice.notice_link || "";
                        }
                      }

                      return (
                        <tr key={notice.id} className={`border-b border-gray-200 hover:bg-gray-100 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}>
                          <td className="py-5 px-6 align-top">
                            <div className="flex items-start gap-3">
                              {notice.important === 1 && <Star className="h-4 w-4 mt-1 flex-shrink-0 text-yellow-500 fill-yellow-500" />}
                              <h3 className="text-gray-800 text-sm font-medium leading-relaxed">{notice.title}</h3>
                            </div>
                          </td>
                          <td className="py-5 px-6 align-top border-l border-gray-200">
                            <div className="flex flex-col gap-3 items-start">
                              {parsedAttachments.map((attachment, index) => (
                                <a
                                  key={index}
                                  href={attachment.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8c1c1c] hover:bg-[#6c1414] text-white text-xs font-semibold rounded shadow-sm hover:shadow transition-all w-full sm:w-auto"
                                >
                                  <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                                  <span className="truncate">{attachment.caption || "Download"}</span>
                                </a>
                              ))}
                              {parsedLink && (
                                <a href={parsedLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8c1c1c] hover:bg-[#6c1414] text-white text-xs font-semibold rounded shadow-sm hover:shadow transition-all w-full sm:w-auto">
                                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                                  <span>Apply Here</span>
                                </a>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {!isLoading && !fetchError && jobs.length > 0 && totalPages > 1 && (
            <div className="flex flex-col items-center gap-3 pt-8 mt-2 text-center sm:flex-row sm:justify-center sm:gap-4">
              <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-5 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium">Prev</button>
              <div className="px-5 py-2 rounded-md bg-gray-100 text-gray-800 font-medium text-sm">Page {currentPage} of {totalPages}</div>
              <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-5 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium">Next</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-gray-500 text-lg">Loading Page...</div>}>
      <PositionsContent />
    </Suspense>
  );
};

export default Page;
