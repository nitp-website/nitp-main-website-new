"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Details.css";

const dummyNotices = [
  {
    id: 1,
    title: "Guidelines on Information Security Practices for Government Entities",
    timestamp: 0,
    attachments: [
      {
        typeLink: true,
        url: "https://drive.google.com/file/d/1O1BlKglEEyDOubpP7LmTpJSxN_SbfSs8/view?usp=sharing",
        caption: "View in Detail",
      },
    ],
    important: true,
    isVisible: 1,
  },
  {
    id: 2,
    title: "Cyber Security Guidelines for Government Employees",
    timestamp: 0,
    attachments: [
      {
        typeLink: true,
        url: "https://drive.google.com/file/d/1s0dp_D7yTvpB6dxkawavzGn-OyREAqIE/view?usp=drive_link",
        caption: "View in Detail",
      },
    ],
    important: true,
    isVisible: 1,
  },
];

const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div
    className={`rounded-xl shadow-md px-6 py-5 mb-5 border-l-4 ${
      imp
        ? "border-red-700 bg-red-50 shadow-red-100"
        : "border-gray-200 bg-white"
    }`}
  >
    <h3 className="font-semibold text-red-900 text-base mb-1">{detail}</h3>
    {time !== 0 && (
      <p className="text-gray-500 text-xs mb-2">
        {new Date(time).toLocaleDateString()}
      </p>
    )}
    {attachments && attachments.length > 0 && (
      <ul className="text-xs text-red-800 space-y-1">
        {attachments.map((attachment, index) => (
          <li key={index}>
            {attachment.typeLink ? (
              <a
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-700 font-medium"
              >
                <span className="inline-block mr-1 align-middle">🔗</span>
                {attachment.caption}
              </a>
            ) : (
              <a
                href={attachment.url}
                download
                className="underline hover:text-red-700 font-medium"
              >
                <span className="inline-block mr-1 align-middle">⬇️</span>
                {attachment.caption}
              </a>
            )}
          </li>
        ))}
      </ul>
    )}
    {link && (
      <a
        href={link}
        className="text-xs underline text-red-700 hover:text-red-900 font-medium mt-2 block"
      >
        View Details
      </a>
    )}
  </div>
);

const Notice = () => {
  const [academics, setAcademics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchAcademics = async () => {
      try {
        // Simulate fetching data from API
        setTimeout(() => {
          setAcademics(dummyNotices.filter((notice) => notice.isVisible === 1));
          setIsLoading(false);
        }, 1000); // Simulate delay
      } catch (err) {
        setFetchError(true);
        setIsLoading(false);
      }
    };

    fetchAcademics();
  }, []);

  return (
    <div>
      <div className="p-5 md:p-10 md:pl-28 md:pr-28">
        <div className="text-2xl text-center pb-7 md:pb-10 text-red-950 font-bold">
          <h2>Notice</h2>
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
              <circle
                fill="none"
                stroke="#f87171"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeDasharray="10,10"
                cx="50"
                cy="50"
                r="39"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <g fill="#f87171">
                <rect x="30" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.1"
                  />
                </rect>
                <rect x="40" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.2"
                  />
                </rect>
                <rect x="50" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.3"
                  />
                </rect>
                <rect x="60" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.4"
                  />
                </rect>
                <rect x="70" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.5"
                  />
                </rect>
              </g>
            </svg>
          </div>
        ) : fetchError ? (
          <div className="flex justify-center items-center">
            <div className="text-center justify-center items-center">
              <svg
                width="120px"
                className="m-auto"
                height="120px"
                viewBox="0 0 16.00 16.00"
                fill="#e85e5e"
                stroke="#e85e5e"
                strokeWidth="0.00016"
              >
                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM7 4h2v5H7V4zm0 6h2v2H7v-2z" />
              </svg>
              <p className="text-red-700 mt-4 text-sm font-semibold">
                Failed to fetch notices. Please try again later.
              </p>
            </div>
          </div>
        ) : (
          academics.map((notice) => (
            <Noticecard
              key={notice.id}
              detail={notice.title}
              time={notice.timestamp}
              attachments={notice.attachments}
              imp={notice.important}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notice;
