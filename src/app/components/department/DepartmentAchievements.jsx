"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import {
  Trophy,
  Calendar,
  User,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  FileText,
  RefreshCw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { getBackendApiUrl } from "@/lib/apiHelpers";

export const DEPT_CODE_MAP = {
  CSE: { code: "cse", name: "Computer Science and Engineering" },
  ECE: { code: "ece", name: "Electronics and Communication Engineering" },
  EE: { code: "ee", name: "Electrical Engineering" },
  ME: { code: "me", name: "Mechanical Engineering" },
  CE: { code: "ce", name: "Civil Engineering" },
  Archi: { code: "arch", name: "Architecture and Planning" },
  Chem: { code: "che", name: "Chemical Science and Technology" },
  Phy: { code: "phy", name: "Applied Physics and Material Engineering" },
  Math: { code: "maths", name: "Mathematics and Computing Technology" },
  Humanities: { code: "hss", name: "Humanities & Social Sciences" },
  Mechatronics: { code: "mae", name: "Mechatronics and Automation Engineering" },
  Material: { code: "mse", name: "Materials Science and Engineering" },
  all: { code: "all", name: "Institute-wide (All Departments)" },
};

// Format date into a clean, readable Indian / British format (e.g., 19 Nov 2026)
function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return String(dateStr);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return String(dateStr);
  }
}

// Safely normalize attachments
function normalizeAttachments(attachments) {
  if (!attachments) return [];
  let parsed = attachments;
  if (typeof attachments === "string") {
    try {
      parsed = JSON.parse(attachments);
    } catch {
      return [{ title: "Attachment", url: attachments }];
    }
  }
  if (!Array.isArray(parsed)) return [];
  return parsed.map((item, idx) => {
    if (typeof item === "string") {
      return { title: `Attachment ${idx + 1}`, url: item };
    }
    return {
      title: item.title || item.name || item.filename || `Attachment ${idx + 1}`,
      url: item.url || item.link || item.file_url || "#",
    };
  });
}

// Single Achievement Card Component
function AchievementCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const attachments = normalizeAttachments(item.attachments);
  const formattedDate = formatDate(item.achievement_date || item.createdAt);
  const description = (item.description || "").trim();
  const isLongDescription = description.length > 380;

  return (
    <article className="w-full bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-100 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {item.category && (
            <span className="font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
              {item.category}
            </span>
          )}
          {item.recipient_type && (
            <span className="font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <User className="w-3 h-3" />
              {item.recipient_type}
            </span>
          )}
        </div>

        {formattedDate && (
          <span className="flex items-center gap-1.5 text-gray-500 font-medium ml-auto">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            {formattedDate}
          </span>
        )}
      </div>

      {/* Achievement Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mt-4 mb-3">
        {item.title}
      </h3>

      {/* Achieved By Highlight */}
      {item.achieved_by && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50/90 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-medium mb-3 self-start">
          <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            Achieved by: <strong className="font-semibold text-gray-900">{item.achieved_by}</strong>
          </span>
        </div>
      )}

      {/* Banner Image (if available) */}
      {item.banner_image && item.banner_image.trim() && (
        <div className="w-full my-3 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 max-h-96 flex items-center justify-center">
          <img
            src={item.banner_image}
            alt={item.title || "Achievement banner"}
            className="w-full max-h-96 object-cover rounded-xl"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      {/* Description: Formatted to flow naturally across the page width */}
      {description && (
        <div className="my-3 text-gray-700 text-sm sm:text-base leading-relaxed break-words whitespace-pre-line text-left">
          <p>
            {isLongDescription && !isExpanded
              ? `${description.slice(0, 360)}...`
              : description}
          </p>
          {isLongDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 hover:text-black cursor-pointer underline underline-offset-4"
            >
              {isExpanded ? (
                <>
                  <span>Show less</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>Read full description</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Attachments & External Link Row */}
      {(attachments.length > 0 || item.external_link) && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          {/* Attachments */}
          {attachments.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-gray-500" />
                Attachments:
              </span>
              {attachments.map((att, i) => (
                <a
                  key={i}
                  href={att.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 transition-colors"
                  title={att.title}
                >
                  <Download className="w-3 h-3 text-gray-600" />
                  <span className="truncate max-w-[220px]">{att.title}</span>
                </a>
              ))}
            </div>
          )}

          {/* External Link */}
          {item.external_link && (
            <a
              href={item.external_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white transition-colors ml-auto shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Learn More</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function DepartmentAchievements({ dept, code: propCode, departmentName: propName }) {
  // Resolve department metadata
  const deptKey = Object.keys(DEPT_CODE_MAP).find(
    (k) => k.toLowerCase() === (dept || "").toLowerCase()
  );
  const deptInfo = DEPT_CODE_MAP[deptKey] || {
    code: (propCode || dept || "all").toLowerCase(),
    name: propName || dept || "Department",
  };

  const departmentCode = (propCode || deptInfo.code || "all").toLowerCase();
  const departmentName = propName || deptInfo.name || "Department";

  // State
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const PAGE_LIMIT = 10;

  // Fetch all achievements for the department
  const fetchAchievements = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      params.set("department", departmentCode);
      params.set("page", String(page));
      params.set("limit", String(PAGE_LIMIT));
      params.set("sortBy", "achievement_date");
      params.set("sortOrder", "desc");

      const url = getBackendApiUrl(`/api/department-achievements?${params.toString()}`);
      const response = await axios.get(url);

      const payload = response.data;
      if (payload && Array.isArray(payload.data)) {
        setAchievements(payload.data);
        setTotalPages(payload.totalPages || Math.ceil((payload.total || payload.data.length) / PAGE_LIMIT) || 1);
      } else if (Array.isArray(payload)) {
        setAchievements(payload);
        setTotalPages(Math.ceil(payload.length / PAGE_LIMIT) || 1);
      } else {
        setAchievements([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error("Error fetching department achievements:", err);
      setError("Unable to load achievements at this time. Please try again.");
      setAchievements([]);
    } finally {
      setLoading(false);
    }
  }, [departmentCode, page]);

  useEffect(() => {
    fetchAchievements();
  }, [fetchAchievements]);

  return (
    <div className="w-full text-black px-4 sm:px-6 lg:px-8 py-4 max-w-5xl mx-auto">
      {/* Clean Academic Header */}
      <div className="text-center pb-8 pt-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Achievements & Recognition
        </h2>
        <p className="text-gray-500 text-sm mt-1 max-w-xl mx-auto">
          Honors, awards, and notable milestones from {departmentName}
        </p>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Content Area: Loading / Error / Empty / List */}
      {loading ? (
        <div className="space-y-6">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 p-6 animate-pulse flex flex-col gap-4"
            >
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-20 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center max-w-md mx-auto my-8">
          <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Trophy className="w-6 h-6 text-amber-500" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1">Failed to load achievements</h3>
          <p className="text-sm text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchAchievements}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium rounded-xl transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      ) : achievements.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-md mx-auto my-8 shadow-sm">
          <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-200/60">
            <Trophy className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No achievements available</h3>
          <p className="text-sm text-gray-500">
            No achievements have been published for this department yet.
          </p>
        </div>
      ) : (
        <>
          {/* Achievements List: Clean full-width format adapted to page size */}
          <div className="flex flex-col gap-6">
            {achievements.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>

          {/* Clean Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                Page <span className="font-semibold text-gray-900">{page}</span> of{" "}
                <span className="font-semibold text-gray-900">{totalPages}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setPage((p) => Math.max(p - 1, 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={page === 1}
                  className="px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>

                <div className="px-3.5 py-2 rounded-xl bg-gray-100 text-gray-800 text-sm font-semibold border border-gray-200">
                  {page} / {totalPages}
                </div>

                <button
                  onClick={() => {
                    setPage((p) => Math.min(p + 1, totalPages));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={page === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 shadow-sm"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
