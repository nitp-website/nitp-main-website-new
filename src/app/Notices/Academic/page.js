"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiDownload, FiStar } from 'react-icons/fi';

// FormatDate component
const FormatDate = ({ time }) => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(time));

  return <>{formattedDate}</>;
};

const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div className="notice flex items-start gap-2 p-4 border-b border-gray-100 hover:bg-red-50 transition-colors">
    {imp && (
      <FiStar className="h-3 w-3 mt-[6px] flex-shrink-0 text-red-500 fill-red-500" />
    )}
    <div className="flex-1">
      <h3 className="text-black md:text-xs text-sm">{detail}</h3>
      <p>
        <span className="text-neutral-400 text-xs">
          <FormatDate time={time} />
        </span>
      </p>
      {Array.isArray(attachments) && attachments.length > 0 && (
        <ul className="text-xs">
          {attachments.map((attachment, index) => (
            <li key={index} className="mb-1">
              {attachment.typeLink ? (
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
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-red-800 hover:text-red-900"
        >
          <span className="text-red-800 hover:text-red-900">View Notice</span>
        </a>
      )}
    </div>
  </div>
);

const Page = () => {
  const [academics, setAcademics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchAcademics = async () => {
      try {
        const academicsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=academics`;
        const response = await axios.get(academicsUrl);
        setAcademics(response.data.filter((notice) => notice.isVisible === 1));
        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching academic notices:", e);
        setIsLoading(false);
        setFetchError(true);
      }
    };

    fetchAcademics();
  }, []);

  return (
    <div>
      <div className="p-5 md:p-10 md:pl-28 md:pr-28">
        <div className="text-2xl text-center pb-7 md:pb-10 text-red-950 font-bold">
          <h2>Academic Notices</h2>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <svg
              version="1.1"
              id="L1"
              height="150px"
              width="150px"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
            >
              <circle
                fill="none"
                stroke="#f87171"
                stroke-width="6"
                stroke-miterlimit="15"
                stroke-dasharray="14.2472,14.2472"
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
          <div className="flex justify-center items-center">
            <div className="text-center">
              <svg width="120px" className="m-auto" height="120px" viewBox="0 0 16.00 16.00" fill="#e85e5e" stroke="#e85e5e" strokeWidth="0.00016">
                <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="#e85e5e"></path>
              </svg>
              <p className="text-red-500 pt-10">Sorry, failed to fetch academic notices.</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md">
            {academics.length === 0 ? (
              <p className="text-center p-4">No academic notices available.</p>
            ) : (
              academics.map((notice) => (
                <Noticecard
                  detail={notice.title}
                  time={notice.timestamp}
                  key={notice.id}
                  attachments={notice.attachments}
                  imp={notice.important}
                  link={notice.notice_link && JSON.parse(notice.notice_link).url}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;