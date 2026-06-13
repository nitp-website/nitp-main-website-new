"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../components/Home/styles/Details.css";
import { Briefcase, Calendar, Download, ExternalLink, Star } from "lucide-react";
import { extractApiArray } from "@/lib/apiHelpers";

const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div className="notice bg-white rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-all border border-gray-100">
    <div className="flex items-start gap-3">
      <Briefcase className="w-5 h-5 text-red-800 mt-1 flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-start gap-2">
          {imp && <Star className="h-4 w-4 mt-1 flex-shrink-0 text-yellow-500 fill-yellow-500" />}
          <h3 className="text-gray-800 text-base font-medium flex-1">{detail}</h3>
        </div>

        <div className="flex items-center gap-2 my-3 text-gray-500 text-sm">
          <Calendar className="w-4 h-4" />
          <span>
            {(() => {
              if (!time) return "Invalid Date";
              const timestamp = typeof time === "string" ? parseInt(time) : time;
              if (isNaN(timestamp)) return "Invalid Date";
              const date = new Date(timestamp);
              return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
            })()}
          </span>
        </div>

        <div className="space-y-2">
          {Array.isArray(attachments) && attachments.length > 0 && (
            <div className="space-y-2">
              {attachments.map((attachment, index) => (
                <a
                  key={index}
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-red-800 hover:text-red-900 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>{attachment.caption || "Download Attachment"}</span>
                </a>
              ))}
            </div>
          )}

          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-red-800 hover:text-red-900 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>View Details</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [subType, setSubType] = useState("ALL");

  const subtypeConfig = {
    ALL: { label: "All", combine: true, limit: 10 },
    // REGULARTEACHING: { label: "Regular Teaching", limit: 20 },
    // NONREGULARTEACHING: { label: "Non-Regular Teaching", limit: 25 },
    // REGULARNONTEACHING: { label: "Regular Non-Teaching", limit: 30 },
    // NONREGULARNONTEACHING: { label: "Non-Regular Non-Teaching", limit: 100 },
    // JDRFSRF: { label: "JDRF/SRF", limit: 10 },
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);

        const cfg = subtypeConfig[subType] || subtypeConfig.ALL;
        const usedLimit = cfg.limit || 10;
        const base = process.env.NEXT_PUBLIC_BACKEND_API_URL;

        let combined = [];
        let totalCount = null; // unknown by default

        if (cfg.combine) {
          const url1 = `${base}/api/notice?type=facultystaffjob&page=${currentPage}&limit=${usedLimit}`;
          const url2 = `${base}/api/notice?type=job&page=${currentPage}&limit=${usedLimit}`;

          const [res1, res2] = await Promise.all([axios.get(url1), axios.get(url2)]);

          const arr1 = extractApiArray(res1) || [];
          let arr2 = extractApiArray(res2) || [];

          // keep only job items from the `all` endpoint
          arr2 = arr2.filter((n) => n && (n.type === "job" || n.notice_type === "job" || n.noticeType === "job"));

          // combine and dedupe by id
          const byId = new Map();
          [...arr1, ...arr2].forEach((item) => {
            if (item && (item.id !== undefined && item.id !== null)) byId.set(item.id, item);
          });
          combined = Array.from(byId.values());

          const t1 = res1.data?.total;
          const t2 = res2.data?.total;
          if (typeof t1 === "number" || typeof t2 === "number") {
            totalCount = (t1 || 0) + (t2 || 0);
          } else {
            totalCount = byId.size; // best-effort
          }
        } else {
          const url = `${base}/api/notice?type=job&notice_sub_type=${subType}&page=${currentPage}&limit=${usedLimit}`;
          const res = await axios.get(url);
          const arr = extractApiArray(res) || [];
          combined = arr;
          totalCount = res.data?.total ?? arr.length;
        }

        const filtered = (combined || []).filter((notice) => notice.isVisible === 1);

        // Sort by event/date/timestamp — newest first
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

        // Compute total pages
        const computedTotal = typeof totalCount === "number" ? Math.max(1, Math.ceil(totalCount / usedLimit)) : Math.max(1, Math.ceil(filtered.length / usedLimit));
        setTotalPages(computedTotal);
        if (currentPage > computedTotal) setCurrentPage(computedTotal);

        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching Jobs notices:", e);
        setIsLoading(false);
        setFetchError(true);
      }
    };

    fetchJobs();
  }, [currentPage, subType]);

  // scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="bg-white bg-opacity-50">
      <div className="p-5 md:p-10 md:pl-28 md:pr-28">
        <div className="text-2xl text-center pb-7 md:pb-10 text-red-950 font-bold">
          <h2>Jobs Notifications</h2>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center">Loading...</div>
        ) : fetchError ? (
          <div className="text-center text-red-500">Failed to fetch job notices.</div>
        ) : (
          <div className="md:flex md:items-start md:gap-6">
            <aside className="w-full md:w-60 mb-4 md:mb-0">
              <div className="bg-white p-4 rounded-md shadow-sm sticky top-24">
                <h4 className="font-semibold mb-3">Filters</h4>
                <div className="flex flex-col gap-2">
                  {Object.entries(subtypeConfig).map(([key, cfg]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSubType(key);
                        setCurrentPage(1);
                      }}
                      className={`text-left px-3 py-2 rounded-md border transition-colors ${
                        subType === key ? "bg-red-800 text-white border-red-800" : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {cfg.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <main className="flex-1">
              <div className="section-content">
                {jobs.length === 0 ? (
                  <div className="text-center text-red-500">No job notices available.</div>
                ) : (
                  jobs.map((notice) => (
                    <Noticecard
                      key={notice.id}
                      detail={notice.title}
                      time={notice.timestamp}
                      attachments={notice.attachments}
                      imp={notice.important}
                      link={
                        notice.notice_link && (() => {
                          try {
                            const parsed = JSON.parse(notice.notice_link);
                            return parsed?.url || "";
                          } catch (e) {
                            return "";
                          }
                        })()
                      }
                    />
                  ))
                )}
              </div>

              {/* Pagination */}
              <div className="flex flex-col items-center gap-3 mt-6 text-center sm:flex-row sm:justify-center sm:gap-4">
                <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>

                <div className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-medium">Page {currentPage} of {totalPages}</div>

                <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
              </div>
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
