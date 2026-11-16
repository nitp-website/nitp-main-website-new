"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiDownload, FiStar } from "react-icons/fi";
import { extractApiArray } from "@/lib/apiHelpers";
import { NoticeBadge, NoticeTitle, getNoticeStartDate, isNoticeEndCrossed } from "@/lib/noticeHelpers";

// FormatDate component
const FormatDate = ({ time }) => {
  if (!time || time === null || time === undefined) {
    return <>Invalid Date</>;
  }

  const timestamp = typeof time === "string" ? parseInt(time) : time;

  if (isNaN(timestamp) || timestamp <= 0) {
    return <>Invalid Date</>;
  }

  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return <>Invalid Date</>;
  }

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

  return <>{formattedDate}</>;
};

const Noticecard = ({ notice, detail, time, attachments, imp, link }) => (
  <div className="notice flex items-start gap-2 p-4 border-b border-gray-100 hover:bg-red-50 transition-colors">
    <NoticeBadge notice={notice || { timestamp: time, important: imp }} starType="fi" className="mt-[6px]" />
    <div className="flex-1">
      <h3 className="text-black md:text-xs text-sm">
        <NoticeTitle title={detail} additionalTitle={notice?.additional_title} />
      </h3>
      <p>
        <span className="text-neutral-400 text-xs">
          <FormatDate time={time} />
        </span>
      </p>
      {Array.isArray(attachments) && attachments.length > 0 && (
        <ul className="text-xs mt-1">
          {attachments.map((attachment, index) => (
            <li key={index} className="mb-1">
              <a
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-800 hover:text-red-900"
              >
                <FiDownload className="inline-block text-red-800 hover:text-red-900" />
                <span className="text-red-800 hover:text-red-900">
                  {attachment.caption || "View Notice"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-red-800 hover:text-red-900 mt-1 inline-block"
        >
          <span className="text-red-800 hover:text-red-900">View Notice</span>
        </a>
      )}
    </div>
  </div>
);

const ExamNoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const fetchExamNotices = async () => {
      try {
        setIsLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
        let data = [];

        try {
          const resExam = await axios.get(`${baseUrl}/api/notice?type=exam`);
          data = extractApiArray(resExam).filter((notice) => notice.isVisible === 1 || notice.isVisible === undefined);
        } catch {
          data = [];
        }

        if (!data || data.length === 0) {
          try {
            const resAcademics = await axios.get(`${baseUrl}/api/notice?type=academics`);
            data = extractApiArray(resAcademics).filter((notice) => notice.isVisible === 1 || notice.isVisible === undefined);
          } catch {
            data = [];
          }
        }

        const sorted = (data || []).sort((a, b) => {
          const timeA = getNoticeStartDate(a) || 0;
          const timeB = getNoticeStartDate(b) || 0;
          return timeB - timeA;
        });

        const activeNotices = sorted.filter((notice) => !isNoticeEndCrossed(notice));
        const passedNotices = sorted.filter((notice) => isNoticeEndCrossed(notice));
        const displayNotices = activeNotices.length > 0 ? activeNotices : passedNotices.slice(0, 5);

        setNotices(displayNotices);
        setCurrentPage(1);
      } catch (e) {
        console.error("Error fetching examination notices:", e);
        setNotices([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExamNotices();
  }, []);

  const totalPages = Math.ceil(notices.length / ITEMS_PER_PAGE);
  const paginatedNotices = notices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className="p-5 md:p-10 md:pl-28 md:pr-28">
        <div className="text-2xl text-center pb-7 md:pb-10 text-red-950 font-bold">
          <h2>Examination Notices & Announcements</h2>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-10 h-10 border-4 border-red-800 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md border border-gray-100">
              {notices.length === 0 ? (
                <p className="text-center p-6 text-gray-500">No examination notices available at present.</p>
              ) : (
                paginatedNotices.map((notice, id) => (
                  <Noticecard
                    notice={notice}
                    detail={notice.title}
                    time={notice.timestamp || notice.updatedAt}
                    key={notice.id || notice._id || id}
                    attachments={notice.attachments}
                    imp={notice.important}
                    link={
                      notice.notice_link
                        ? typeof notice.notice_link === "string" && notice.notice_link.startsWith("{")
                          ? JSON.parse(notice.notice_link).url
                          : notice.notice_link
                        : null
                    }
                  />
                ))
              )}
            </div>

            {/* Pagination Controls - only displayed if there are more active notices */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
                  <span className="font-semibold text-gray-900">{Math.min(currentPage * ITEMS_PER_PAGE, notices.length)}</span> of{" "}
                  <span className="font-semibold text-gray-900">{notices.length}</span> notices
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.max(prev - 1, 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Prev
                  </button>

                  <div className="px-3 py-1.5 rounded-md bg-red-50 text-red-900 text-sm font-medium border border-red-100">
                    Page {currentPage} of {totalPages}
                  </div>

                  <button
                    onClick={() => {
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExamNoticePage;
