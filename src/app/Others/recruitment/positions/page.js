"use client";
import axios from "axios";
import React, { useEffect, useState, Suspense } from "react";
import {
  ExternalLink,
  FileText,
  ArrowLeft,
  Archive,
  ChevronDown,
  ChevronUp,
  Calendar,
} from "lucide-react";
import { extractApiArray } from "@/lib/apiHelpers";
import {
  NoticeBadge,
  NoticeTitle,
  getNoticeEndDate,
  isNoticeEndCrossed,
} from "@/lib/noticeHelpers";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const formatClosedDate = (notice) => {
  const ts = getNoticeEndDate(notice);
  if (!ts) return "";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const PositionsContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "REGULAR TEACHING";

  const [activeJobs, setActiveJobs] = useState([]);
  const [archivedJobs, setArchivedJobs] = useState([]);
  const [showArchives, setShowArchives] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const usedLimit = 100;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const base =
          process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";

        const url = `${base}/api/notice?type=job&notice_sub_type=${encodeURIComponent(
          category
        )}&page=${currentPage}&limit=${usedLimit}`;
        const res = await axios.get(url);
        const arr = extractApiArray(res) || [];

        const filtered = (arr || []).filter((notice) => {
          if (notice.isVisible !== 1 && notice.isVisible !== undefined) return false;
          const sub = (
            notice.notice_sub_type ||
            notice.noticeSubType ||
            ""
          )
            .trim()
            .toUpperCase();
          const target = category.trim().toUpperCase();

          if (sub === target) return true;
          if (
            target === "CONTRACTUAL / TEMPORARY FACULTY" &&
            (sub === "NON-REGULAR TEACHING" ||
              (sub.includes("CONTRACTUAL") && sub.includes("FACULTY")))
          ) {
            return true;
          }
          if (
            target === "CONTRACTUAL / TEMPORARY NON-TEACHING" &&
            (sub === "NON-REGULAR NON-TEACHING" ||
              (sub.includes("CONTRACTUAL") && sub.includes("NON-TEACHING")))
          ) {
            return true;
          }
          if (
            target === "JDRF/SRF" &&
            (sub === "JRF/SRF" || sub.includes("JDRF") || sub.includes("JRF"))
          ) {
            return true;
          }
          return false;
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

        const sorted = [...filtered].sort(
          (a, b) => getTimeValue(b) - getTimeValue(a)
        );

        // Separate active notices vs expired notices (end date crossed)
        const active = sorted.filter((n) => !isNoticeEndCrossed(n));
        const archived = sorted.filter((n) => isNoticeEndCrossed(n));

        setActiveJobs(active);
        setArchivedJobs(archived);

        const computedTotal = Math.max(1, Math.ceil(active.length / usedLimit));
        setTotalPages(computedTotal);
        if (currentPage > computedTotal) setCurrentPage(computedTotal);

        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching notices:", e);
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

  const renderNoticeRow = (notice, idx, isArchived = false) => {
    let parsedAttachments = [];
    if (Array.isArray(notice.attachments)) {
      parsedAttachments = notice.attachments;
    } else if (typeof notice.attachments === "string") {
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
        const parsed =
          typeof notice.notice_link === "string"
            ? JSON.parse(notice.notice_link)
            : notice.notice_link;
        parsedLink = parsed?.url || "";
      } catch (e) {
        parsedLink = notice.notice_link || "";
      }
    }

    const closedDate = isArchived ? formatClosedDate(notice) : "";

    return (
      <tr
        key={notice.id || idx}
        className={`border-b border-gray-200 hover:bg-gray-100 transition-colors ${
          idx % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
        }`}
      >
        <td className="py-5 px-6 align-middle">
          <div className="flex items-center gap-3">
            {!isArchived && <NoticeBadge notice={notice} />}
            {isArchived && (
              <span className="bg-gray-200 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider flex-shrink-0">
                Closed
              </span>
            )}
            <div className="flex-1">
              <h3 className="text-gray-800 text-sm font-medium leading-relaxed">
                <NoticeTitle
                  title={notice.title}
                  additionalTitle={notice.additional_title}
                />
              </h3>
              {closedDate && (
                <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  <span>Closed on: {closedDate}</span>
                </div>
              )}
            </div>
          </div>
        </td>
        <td className="py-5 px-6 align-middle border-l border-gray-200">
          <div className="flex flex-col gap-3 items-center sm:items-start">
            {parsedAttachments.map((attachment, index) => (
              <a
                key={index}
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8c1c1c] hover:bg-[#6c1414] text-white text-xs font-semibold rounded shadow-sm hover:shadow transition-all w-full sm:w-auto"
              >
                <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">
                  {attachment.caption || "Download"}
                </span>
              </a>
            ))}
            {parsedLink && (
              <a
                href={parsedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8c1c1c] hover:bg-[#6c1414] text-white text-xs font-semibold rounded shadow-sm hover:shadow transition-all w-full sm:w-auto"
              >
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isArchived ? "View Details" : "Apply Here"}</span>
              </a>
            )}
            {parsedAttachments.length === 0 && !parsedLink && (
              <span className="text-xs text-gray-400 italic">No documents</span>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-[#f0f0f0] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="mb-6">
          <Link
            href="/Others/recruitment"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8c1c1c] hover:text-[#5b1e22] transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
        </div>

        <div className="text-3xl text-center pb-10 text-[#4d1418] font-bold">
          <h2>{displayTitle} Positions</h2>
        </div>

        {/* Active Positions Table Layout */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20 text-gray-500 font-medium text-lg">
              Loading...
            </div>
          ) : fetchError ? (
            <div className="text-center text-red-500 py-20 font-medium">
              Failed to fetch notices.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#4d1418] text-white">
                    <th className="py-4 px-6 font-semibold text-sm w-[70%] border-b-0">
                      Name of Posts
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm w-[30%] border-l border-[#6a1d22] border-b-0">
                      Documents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeJobs.length === 0 ? (
                    <tr>
                      <td
                        colSpan="2"
                        className="text-center text-gray-500 py-16 font-medium bg-gray-50"
                      >
                        No active notices available for this category.
                      </td>
                    </tr>
                  ) : (
                    activeJobs.map((notice, idx) =>
                      renderNoticeRow(notice, idx, false)
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {!isLoading && !fetchError && activeJobs.length > 0 && totalPages > 1 && (
            <div className="flex flex-col items-center gap-3 pt-8 mt-2 text-center sm:flex-row sm:justify-center sm:gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-5 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
              >
                Prev
              </button>
              <div className="px-5 py-2 rounded-md bg-gray-100 text-gray-800 font-medium text-sm">
                Page {currentPage} of {totalPages}
              </div>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-5 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Archives Box at the Bottom of Each Recruitment Type */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          <button
            type="button"
            onClick={() => setShowArchives(!showArchives)}
            className="w-full flex items-center justify-between p-5 md:p-6 bg-gradient-to-r from-gray-50 to-white hover:bg-gray-100 transition-colors text-left border-b border-gray-200"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#4d1418]/10 text-[#4d1418] flex items-center justify-center flex-shrink-0">
                <Archive className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#4d1418]">Archives</h3>
                <p className="text-xs text-gray-500">
                  {isLoading
                    ? "Loading archived notices..."
                    : `${archivedJobs.length} ${
                        archivedJobs.length === 1 ? "notice" : "notices"
                      } whose end date has passed`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#8c1c1c]">
              <span>{showArchives ? "Hide Notices" : "View Notices"}</span>
              {showArchives ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </button>

          {/* Display Notices when Archives Box is open */}
          {showArchives && (
            <div className="p-6 md:p-8">
              {isLoading ? (
                <div className="text-center text-gray-500 py-10 text-sm">
                  Loading archived notices...
                </div>
              ) : archivedJobs.length === 0 ? (
                <div className="text-center text-gray-500 py-12 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
                  No archived notices available for this category.
                </div>
              ) : (
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#4d1418] text-white">
                        <th className="py-4 px-6 font-semibold text-sm w-[70%] border-b-0">
                          Name of Posts
                        </th>
                        <th className="py-4 px-6 font-semibold text-sm w-[30%] border-l border-[#6a1d22] border-b-0">
                          Documents
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {archivedJobs.map((notice, idx) =>
                        renderNoticeRow(notice, idx, true)
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen text-gray-500 text-lg">
          Loading Page...
        </div>
      }
    >
      <PositionsContent />
    </Suspense>
  );
};

export default Page;
