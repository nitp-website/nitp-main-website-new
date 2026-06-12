"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../components/Home/styles/Details.css";
import {
  Briefcase,
  Calendar,
  Download,
  ExternalLink,
  Star,
} from "lucide-react";
import { extractApiArray } from "@/lib/apiHelpers";

const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div className="notice bg-white rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-all border border-gray-100">
    <div className="flex items-start gap-3">
      <Briefcase className="w-5 h-5 text-red-800 mt-1 flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-start gap-2">
          {imp && (
            <Star className="h-4 w-4 mt-1 flex-shrink-0 text-yellow-500 fill-yellow-500" />
          )}
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
              return isNaN(date.getTime())
                ? "Invalid Date"
                : date.toLocaleDateString();
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
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-red-800 hover:text-red-900 transition-colors"
            >
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

  // ✅ Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);

        const jobsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=facultystaffjob&page=${currentPage}&limit=${limit}`;

        const response = await axios.get(jobsUrl);
        const jobsData = extractApiArray(response);

        const filtered = jobsData.filter(
          (notice) => notice.isVisible === 1
        );

        setJobs(filtered);

        // ⚠️ If backend gives total count, use it
        if (response.data?.total) {
          setTotalPages(Math.ceil(response.data.total / limit));
        } else {
          setTotalPages(10); // fallback (adjust if needed)
        }

        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching Jobs notices:", e);
        setIsLoading(false);
        setFetchError(true);
      }
    };

    fetchJobs();
  }, [currentPage]);

  // ✅ scroll to top on page change
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
          <div className="text-center text-red-500">
            Failed to fetch job notices.
          </div>
        ) : (
          <>
            <div className="section-content">
              {jobs.length === 0 ? (
                <div className="text-center text-red-500">
                  No job notices available.
                </div>
              ) : (
                jobs.map((notice) => (
                  <Noticecard
                    key={notice.id}
                    detail={notice.title}
                    time={notice.timestamp}
                    attachments={notice.attachments}
                    imp={notice.important}
                    link={
                      notice.notice_link &&
                      JSON.parse(notice.notice_link).url
                        ? JSON.parse(notice.notice_link).url
                        : ""
                    }
                  />
                ))
              )}
            </div>

            {/* ✅ Pagination UI */}
            <div className="flex flex-col items-center gap-3 mt-6 text-center sm:flex-row sm:justify-center sm:gap-4">
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>

              <div className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 font-medium">
                Page {currentPage} of {totalPages}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;