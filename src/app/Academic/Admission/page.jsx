"use client";
import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  ArrowLeft,
  GraduationCap,
  Settings,
  ExternalLink,
  Laptop,
  Award,
  Globe,
  Library,
  FileText,
  Archive,
  ChevronDown,
  ChevronUp,
  Calendar,
} from "lucide-react";
import { extractApiArray } from "@/lib/apiHelpers";
import {
  NoticeBadge,
  NoticeTitle,
  parseNoticeLink,
  getValidAttachments,
  getNoticeEndDate,
  isNoticeEndCrossed,
} from "@/lib/noticeHelpers";

const admissionOptions = {
  btech: {
    label: "B.Tech/B. Arch Admissions",
    title: "B.Tech / B.Arch Admissions",
    icon: GraduationCap,
  },
  mtech: {
    label: "M.Tech/PGPAP Admissions",
    title: "M.Tech / PGPAP Admissions",
    icon: Settings,
  },
  phd: {
    label: "PhD Admissions",
    title: "PhD Admissions",
    icon: Award,
  },
  mca: {
    label: "MCA Admissions",
    title: "MCA Admissions",
    icon: Laptop,
  },
  study_in_india: {
    label: "Study in India",
    title: "Study in India Admissions",
    icon: Globe,
  },
  qip: {
    label: "QIP Admissions",
    title: "QIP Admissions",
    icon: Library,
  },
};

// Clickable logos on top for admission categories
const admissionPortals = {
  btech: [
    {
      name: "JoSAA",
      image: "/admission-portals/josaa.png",
      link: "https://josaa.nic.in",
    },
    {
      name: "CSAB",
      image: "/admission-portals/csab.png",
      link: "https://csab.nic.in/",
    },
    {
      name: "DASA",
      image: "/admission-portals/dasa.png",
      link: "https://dasanit.org",
    },
  ],
  mtech: [
    {
      name: "CCMT",
      image: "/admission-portals/ccmt.png",
      link: "https://ccmt.admissions.nic.in",
    },
  ],
  mca: [
    {
      name: "NIMCET",
      image: "/admission-portals/nimcet.png",
      link: "https://nimcet.admissions.nic.in/",
    },
  ],
  phd: [],
  study_in_india: [
    {
      name: "Study in India Portal",
      image: "/admission-portals/sii.png",
      link: "https://studyinindia.gov.in/",
    },
  ],
  qip: [
    {
      name: "QIP Admissions Portal",
      image: "/admission-portals/qip.png",
      link: "https://qip.aicte.gov.in/",
    },
  ],
};

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

function AdmissionsPageContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const [selected, setSelected] = useState(typeParam || "btech");
  const router = useRouter();
  const pathname = usePathname();

  const [activeNotices, setActiveNotices] = useState([]);
  const [archivedNotices, setArchivedNotices] = useState([]);
  const [showArchives, setShowArchives] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const usedLimit = 100;

  useEffect(() => {
    if (typeParam) {
      setSelected(typeParam);
    }
  }, [typeParam]);

  useEffect(() => {
    setCurrentPage(1);
    setShowArchives(false);
  }, [selected]);

  useEffect(() => {
    const fetchNotices = async () => {
      if (!selected || !admissionOptions[selected]) return;

      setIsLoading(true);
      setFetchError(false);
      try {
        const base =
          process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
        let url = `${base}/api/notice?type=admissions&notice_sub_type=${encodeURIComponent(
          selected
        )}&page=${currentPage}&limit=${usedLimit}`;

        let response;
        try {
          response = await axios.get(url);
        } catch (err) {
          if (base !== "https://admin.nitp.ac.in") {
            url = `https://admin.nitp.ac.in/api/notice?type=admissions&notice_sub_type=${encodeURIComponent(
              selected
            )}&page=${currentPage}&limit=${usedLimit}`;
            response = await axios.get(url);
          } else {
            throw err;
          }
        }

        const rawData = extractApiArray(response) || [];
        const totalCount = response.data?.total ?? rawData.length;

        const filtered = rawData.filter((notice) => {
          if (notice.isVisible !== 1) return false;
          const noticeSubType = (
            notice.notice_sub_type ||
            notice.noticeSubType ||
            ""
          )
            .trim()
            .toUpperCase();
          const normalizedSubType = selected.trim().toUpperCase();
          if (noticeSubType && normalizedSubType) {
            return noticeSubType === normalizedSubType;
          }
          return true;
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
          if (n.updatedAt) {
            const t = Date.parse(n.updatedAt);
            if (!isNaN(t)) return t;
          }
          return 0;
        };

        const sorted = [...filtered].sort(
          (a, b) => getTimeValue(b) - getTimeValue(a)
        );

        const active = sorted.filter((n) => !isNoticeEndCrossed(n));
        const archived = sorted.filter((n) => isNoticeEndCrossed(n));

        setActiveNotices(active);
        setArchivedNotices(archived);

        const computedTotal = Math.max(1, Math.ceil(active.length / usedLimit));
        setTotalPages(computedTotal);
        if (currentPage > computedTotal) setCurrentPage(computedTotal);
      } catch (e) {
        console.error("Error fetching admission notices:", e);
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, [selected, currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderNoticeRow = (notice, idx, isArchived = false) => {
    const parsedAttachments = getValidAttachments(notice.attachments);
    const parsedLink = parseNoticeLink(notice.notice_link);
    const firstDocUrl = parsedAttachments[0]?.url || parsedLink || "";
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
              {firstDocUrl ? (
                <a
                  href={firstDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-[#8c1c1c] text-sm font-medium leading-relaxed transition-colors block"
                >
                  <NoticeTitle
                    title={notice.title}
                    additionalTitle={notice.additional_title}
                  />
                </a>
              ) : (
                <h3 className="text-gray-800 text-sm font-medium leading-relaxed">
                  <NoticeTitle
                    title={notice.title}
                    additionalTitle={notice.additional_title}
                  />
                </h3>
              )}
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
            {parsedAttachments.map((attachment, index) => {
              const isApplyOrLink =
                attachment.typeLink === true ||
                attachment.typeLink === "True" ||
                /apply|portal|form/i.test(attachment.caption || "");
              const Icon = isApplyOrLink ? ExternalLink : FileText;

              return (
                <a
                  key={index}
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={attachment.caption || "View Document"}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8c1c1c] hover:bg-[#6c1414] text-white text-xs font-semibold rounded shadow-sm hover:shadow transition-all w-full sm:w-auto"
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">
                    {parsedAttachments.length > 1 ? `View ${index + 1}` : "View"}
                  </span>
                </a>
              );
            })}
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
              <span className="text-xs text-gray-400 italic">
                No documents attached
              </span>
            )}
          </div>
        </td>
      </tr>
    );
  };

  // If no type parameter is in URL, show the category grid layout
  if (!typeParam) {
    return (
      <div className="bg-[#f0f0f0] min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-3xl text-center pb-12 text-[#4d1418] font-bold">
            <h2>Admissions</h2>
          </div>

          {/* Category Boxes */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            {Object.entries(admissionOptions).map(([key, cfg]) => {
              const Icon = cfg.icon;
              return (
                <Link
                  href={`/Academic/Admission?type=${encodeURIComponent(key)}`}
                  key={key}
                  className="relative w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center p-3 gap-3 rounded-2xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden group border border-[#e6b3b3] bg-[#f0caca] text-[#ba210e] hover:bg-[#ba210e] hover:text-[#ffe5e5] hover:border-transparent"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ba210e] to-[#911a0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <Icon
                    className="w-10 h-10 md:w-12 md:h-12 text-[#ba210e] group-hover:text-[#f7cece] transition-colors z-10 mb-1"
                    strokeWidth={2}
                  />
                  <p className="text-[11px] md:text-xs font-black text-center uppercase z-10 leading-snug tracking-wider">
                    {cfg.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentPortals = admissionPortals[selected] || [];
  const pageHeading = admissionOptions[selected]?.title || "Admissions";

  return (
    <div className="bg-[#f0f0f0] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/Academic/Admission"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8c1c1c] hover:text-[#5b1e22] transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
        </div>

        {/* Page Title */}
        <div className="text-3xl text-center pb-6 text-[#4d1418] font-bold">
          <h2>{pageHeading}</h2>
        </div>

        {/* Clickable Admission / Counselling Portals on Top */}
        {currentPortals.length > 0 && (
          <div className="mb-8 flex flex-col items-center">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-3 text-center">
              Admission & Counselling Portals
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {currentPortals.map((portal, idx) => (
                <a
                  key={idx}
                  href={portal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-[#8c1c1c]/40 transition-all duration-300 hover:-translate-y-0.5"
                  title={`Visit ${portal.name}`}
                >
                  <div className="h-10 w-24 sm:h-11 sm:w-28 flex items-center justify-center p-1 bg-white rounded">
                    <img
                      src={portal.image}
                      alt={portal.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#8c1c1c] transition-colors">
                    <span>{portal.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#8c1c1c] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Active Notices Table Layout */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20 text-gray-500 font-medium text-lg">
              Loading notices...
            </div>
          ) : fetchError ? (
            <div className="text-center text-red-500 py-20 font-medium">
              Failed to fetch admission notices.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#4d1418] text-white">
                    <th className="py-4 px-6 font-semibold text-sm w-[70%] border-b-0">
                      Name of Notices
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm w-[30%] border-l border-[#6a1d22] border-b-0">
                      Documents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeNotices.length === 0 ? (
                    <tr>
                      <td
                        colSpan="2"
                        className="text-center text-gray-500 py-16 font-medium bg-gray-50"
                      >
                        No active notices available for this category.
                      </td>
                    </tr>
                  ) : (
                    activeNotices.map((notice, idx) =>
                      renderNoticeRow(notice, idx, false)
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {!isLoading && !fetchError && activeNotices.length > 0 && totalPages > 1 && (
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

        {/* Archives Box at the Bottom of Each Admission Type */}
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
                    : `${archivedNotices.length} ${
                        archivedNotices.length === 1 ? "notice" : "notices"
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
              ) : archivedNotices.length === 0 ? (
                <div className="text-center text-gray-500 py-12 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
                  No archived notices available for this category.
                </div>
              ) : (
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#4d1418] text-white">
                        <th className="py-4 px-6 font-semibold text-sm w-[70%] border-b-0">
                          Name of Notices
                        </th>
                        <th className="py-4 px-6 font-semibold text-sm w-[30%] border-l border-[#6a1d22] border-b-0">
                          Documents
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {archivedNotices.map((notice, idx) =>
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
}

const AdmissionsPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen text-gray-500 text-lg">
          Loading Admissions...
        </div>
      }
    >
      <AdmissionsPageContent />
    </Suspense>
  );
};

export default AdmissionsPage;
