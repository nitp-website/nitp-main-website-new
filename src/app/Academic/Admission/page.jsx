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
  AlertCircle,
  BookOpen,
  Frown,
} from "lucide-react";
import { extractApiArray } from "@/lib/apiHelpers";
import {
  NoticeBadge,
  NoticeTitle,
  parseNoticeLink,
  getValidAttachments,
  getNoticeStartDate,
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

// Clickable logos on top for table-layout categories
const admissionPortals = {
  btech: [
    {
      name: "JoSAA",
      image:
        "https://cdnbbsr.s3waas.gov.in/s313111c20aee51aeb480ecbd988cd8cc9/uploads/2022/09/2022091261.png",
      link: "https://josaa.nic.in",
    },
    {
      name: "CSAB",
      image:
        "https://cdnbbsr.s3waas.gov.in/s305a70454516ecd9194c293b0e415777f/uploads/2022/08/2022081238.png",
      link: "https://CSAB.aicte.gov.in/",
    },
    {
      name: "DASA",
      image: "https://dasanit.org/assets/images/dasa_new.png",
      link: "https://dasanit.org",
    },
  ],
  mtech: [
    {
      name: "CCMT",
      image:
        "https://cdnbbsr.s3waas.gov.in/s301894d6f048493d2cacde3c579c315a3/uploads/2022/02/2022022590.png",
      link: "https://ccmt.admissions.nic.in",
    },
  ],
  mca: [
    {
      name: "NIMCET",
      image:
        "https://cdnbbsr.s3waas.gov.in/s33e6260b81898beacda3d16db379ed329/uploads/2025/03/2025031961.png",
      link: "https://nimcet.admissions.nic.in/",
    },
  ],
  phd: [],
};

// Legacy portal data for Study in India and QIP (kept as before)
const legacyAdmissionData = {
  study_in_india: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2026 admissions",
        image: "/logo.png",
        sopLink:
          "https://drive.google.com/file/d/1PdsHeOkaeAvIWvQMeZFCTkQzsAf-LuX6/view?usp=sharing",
      },
    ],
  },
  qip: {
    portals: [
      {
        name: "QIP Admissions Portal",
        image: "https://qip.aicte.gov.in/assets/images/logoLogin.png",
        link: "https://qip.aicte.gov.in/",
      },
    ],
  },
};

const degreeMap = {
  btech: "Bachelor of Technology",
  mtech: "Master of Technology",
  mca: "Master of Computer Application",
  phd: "PhD",
  study_in_india: "Study in India",
  qip: "Quality Improvement Programme",
};

const getNoticeHref = (notice) => {
  if (notice.href) return notice.href;
  const link = parseNoticeLink(notice.notice_link);
  if (link) return link;
  const attachments = getValidAttachments(notice.attachments);
  return attachments[0]?.url || "";
};

const getNoticeDate = (notice) => {
  if (notice.date && notice.date instanceof Date) return notice.date;
  const ts = getNoticeStartDate(notice);
  return ts ? new Date(ts) : new Date();
};

function AdmissionsPageContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const [selected, setSelected] = useState(typeParam || "btech");
  const [expandedNotices, setExpandedNotices] = useState({});
  const router = useRouter();
  const pathname = usePathname();

  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const usedLimit = 100;

  const isTableLayout = ["btech", "mtech", "phd", "mca"].includes(selected);

  useEffect(() => {
    if (typeParam) {
      setSelected(typeParam);
    }
  }, [typeParam]);

  useEffect(() => {
    setCurrentPage(1);
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
        setNotices(sorted);

        const computedTotal =
          typeof totalCount === "number"
            ? Math.max(1, Math.ceil(totalCount / usedLimit))
            : Math.max(1, Math.ceil(filtered.length / usedLimit));
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

  const toggleNotice = (index) => {
    setExpandedNotices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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

  // Table layout for BTech, MTech, PhD, MCA
  if (isTableLayout) {
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

          {/* Notices Table Layout (Recruitment Notices format) */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
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
                    {notices.length === 0 ? (
                      <tr>
                        <td
                          colSpan="2"
                          className="text-center text-red-500 py-16 font-medium bg-gray-50"
                        >
                          No notices available for this category.
                        </td>
                      </tr>
                    ) : (
                      notices.map((notice, idx) => {
                        const parsedAttachments = getValidAttachments(
                          notice.attachments
                        );
                        const parsedLink = parseNoticeLink(notice.notice_link);
                        const firstDocUrl =
                          parsedAttachments[0]?.url || parsedLink || "";

                        return (
                          <tr
                            key={notice.id || idx}
                            className={`border-b border-gray-200 hover:bg-gray-100 transition-colors ${
                              idx % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                            }`}
                          >
                            <td className="py-5 px-6 align-middle">
                              <div className="flex items-center gap-3">
                                <NoticeBadge notice={notice} />
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
                              </div>
                            </td>
                            <td className="py-5 px-6 align-middle border-l border-gray-200">
                              <div className="flex flex-col gap-3 items-center sm:items-start">
                                {parsedAttachments.map((attachment, index) => {
                                  const isApplyOrLink =
                                    attachment.typeLink === true ||
                                    attachment.typeLink === "True" ||
                                    /apply|portal|form/i.test(
                                      attachment.caption || ""
                                    );
                                  const Icon = isApplyOrLink
                                    ? ExternalLink
                                    : FileText;

                                  return (
                                    <a
                                      key={index}
                                      href={attachment.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8c1c1c] hover:bg-[#6c1414] text-white text-xs font-semibold rounded shadow-sm hover:shadow transition-all w-full sm:w-auto"
                                    >
                                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                                      <span className="truncate">
                                        {attachment.caption || "Download"}
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
                                    <span>Apply Here</span>
                                  </a>
                                )}
                                {parsedAttachments.length === 0 &&
                                  !parsedLink && (
                                    <span className="text-xs text-gray-400 italic">
                                      No documents attached
                                    </span>
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
            {!isLoading && !fetchError && notices.length > 0 && totalPages > 1 && (
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
        </div>
      </div>
    );
  }

  // Original 2-column layout kept for QIP and Study in India
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white text-red-900 relative">
      <div className="flex flex-col xl:flex-row">
        <main className="flex-1 p-3.5 sm:p-6 md:p-8 xl:ml-6 w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <Link
                href="/Academic/Admission"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#8c1c1c] hover:text-[#5b1e22] transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Categories
              </Link>
            </div>

            <h1 className="hidden md:block text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-red-800 relative pb-4">
              {degreeMap[selected] || ""} Admissions
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Notices Section */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-md p-6 border border-red-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-red-800 flex items-center">
                      <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
                      Important Notices
                    </h2>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                      <span className="animate-pulse h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                      Latest Updates
                    </span>
                  </div>
                  <div className="space-y-6">
                    {isLoading ? (
                      <div className="flex justify-center items-center p-8">
                        <svg
                          version="1.1"
                          id="L1"
                          height="80px"
                          width="80px"
                          x="0px"
                          y="0px"
                          viewBox="0 0 100 100"
                          enableBackground="new 0 0 100 100"
                        >
                          <circle
                            fill="none"
                            stroke="#f87171"
                            strokeWidth="6"
                            strokeMiterlimit="15"
                            strokeDasharray="14.2472,14.2472"
                            cx="50"
                            cy="50"
                            r="47"
                          >
                            <animateTransform
                              attributeName="transform"
                              attributeType="XML"
                              type="rotate"
                              dur="5s"
                              from="0 50 50"
                              to="360 50 50"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>
                    ) : fetchError ? (
                      <div className="text-center p-6 bg-red-50 rounded-xl">
                        <Frown className="w-12 h-12 mx-auto text-red-400 mb-4" />
                        <p className="text-red-600">
                          Failed to load notices. Please try again later.
                        </p>
                      </div>
                    ) : notices.length > 0 ? (
                      notices.map((notice, index) => {
                        const noticeHref = getNoticeHref(notice);
                        const noticeDate = getNoticeDate(notice);

                        return (
                          <div
                            key={notice.id || index}
                            className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-red-600 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="relative">
                              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                                {noticeDate.toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </div>

                              <div className="absolute top-4 left-4 bg-red-50 p-2 rounded-full">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                              </div>

                              <div
                                className="pl-16 pr-4 pt-4 pb-4 cursor-pointer"
                                onClick={() => toggleNotice(index)}
                              >
                                <Link
                                  className="font-bold text-gray-800 hover:text-red-700 block text-sm md:text-base leading-tight mb-2 transition-colors pt-2"
                                  href={noticeHref || "#"}
                                  target="_blank"
                                >
                                  <NoticeTitle
                                    title={notice.title}
                                    additionalTitle={notice.additional_title}
                                  />
                                </Link>

                                <div className="flex justify-between items-center">
                                  <p className="text-xs text-gray-600">
                                    {degreeMap[selected] || "Admission"} Update
                                  </p>
                                  {noticeHref && noticeHref !== "#" && (
                                    <Link
                                      href={noticeHref}
                                      target="_blank"
                                      className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-800 transition-colors bg-red-50 hover:bg-red-100 py-1 px-3 rounded-full"
                                    >
                                      <ExternalLink className="w-3 h-3" />
                                      View
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center p-6 bg-red-50 rounded-xl">
                        <Frown className="w-12 h-12 mx-auto text-red-400 mb-4" />
                        <p className="text-red-600">
                          No notices available at this time.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Portals Section */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-md p-6 border border-red-100">
                  <h2 className="text-2xl font-semibold mb-6 text-red-800 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-red-600" />
                    Admission Portals
                  </h2>
                  {legacyAdmissionData[selected]?.portals?.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {legacyAdmissionData[selected].portals.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-red-100 group"
                        >
                          <div className="h-40 flex items-center justify-center bg-red-50 rounded-lg mb-4 p-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="max-h-full max-w-full object-contain"
                              loading="lazy"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_189b8a7a1f6%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_189b8a7a1f6%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
                              }}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-center text-red-800 mb-2">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-gray-600 text-center mb-4 text-sm">
                              {item.description}
                            </p>
                          )}

                          {item.sopLink && (
                            <div className="text-center">
                              <a
                                href={item.sopLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-sm hover:shadow-md mb-4"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View SOP
                              </a>
                            </div>
                          )}

                          {item.link && (
                            <div className="text-center">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Portal
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-6 bg-red-50 rounded-xl">
                      <Frown className="w-12 h-12 mx-auto text-red-400 mb-4" />
                      <h3 className="text-xl font-semibold text-red-700 mb-2">
                        No Admission Portals Available
                      </h3>
                      <p className="text-red-600">
                        Currently there are no active admission portals for this
                        category.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
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
