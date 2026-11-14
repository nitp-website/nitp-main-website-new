"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Calendar, Download, ExternalLink, FileText } from "lucide-react";
import { extractApiArray } from "@/lib/apiHelpers";

const parseNoticeLink = (value) => {
  if (!value) return null;
  if (typeof value === "object") return value?.url || null;

  try {
    return JSON.parse(value)?.url || null;
  } catch {
    return null;
  }
};

const parseAttachments = (value) => {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string") return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const TenderLoadingGraphic = () => (
  <svg
    version="1.1"
    height="150"
    width="150"
    viewBox="0 0 100 100"
    role="img"
    aria-label="Loading tenders"
  >
    <circle fill="none" stroke="#f87171" strokeWidth="6" strokeMiterlimit="15" strokeDasharray="14.2472,14.2472" cx="50" cy="50" r="47">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
    </circle>
    <circle fill="none" stroke="#f87171" strokeWidth="1" strokeMiterlimit="10" strokeDasharray="10,10" cx="50" cy="50" r="39">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="-360 50 50" repeatCount="indefinite" />
    </circle>
    <g fill="#f87171">
      {[30, 40, 50, 60, 70].map((x, index) => (
        <rect key={x} x={x} y="35" width="5" height="30">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin={`${(index + 1) / 10}`} />
        </rect>
      ))}
    </g>
  </svg>
);

const TenderStatusGraphic = () => (
  <svg width="120" height="120" viewBox="0 0 16 16" aria-hidden="true">
    <path
      fill="#e85e5e"
      d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136719 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0"
    />
  </svg>
);

const TenderCard = ({ tender }) => {
  const date = tender.openDate ? new Date(Number(tender.openDate)) : null;
  const formattedDate = date && !isNaN(date.getTime())
    ? date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    : null;
  const attachments = parseAttachments(tender.attachments).filter((item) => typeof item?.url === "string" && item.url.trim());
  const noticeUrl = parseNoticeLink(tender.notice_link);

  return (
    <article className="mb-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start gap-3">
        <FileText className="mt-1 h-5 w-5 shrink-0 text-red-800" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <h2 className="mb-2 text-base font-medium text-gray-800">{tender.title}</h2>
          {formattedDate && (
            <p className="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>{formattedDate}</span>
            </p>
          )}
          <div className="space-y-2">
            {attachments.map((attachment, index) => (
              <a
                key={`${attachment.url}-${index}`}
                href={attachment.url.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-red-800 hover:text-red-900"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{attachment.caption || "Download Attachment"}</span>
              </a>
            ))}
            {noticeUrl && (
              <a
                href={noticeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-red-800 hover:text-red-900"
              >
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>View Notice</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default function TendersPage() {
  const [tenders, setTenders] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    const fetchTenders = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=tender`;
        const response = await axios.get(url, { signal: controller.signal });
        if (controller.signal.aborted) return;

        const visibleTenders = extractApiArray(response).filter(
          (notice) => notice.notice_type === "tender" && notice.isVisible === 1
        );
        setTenders(visibleTenders);
        setStatus("ready");
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Error fetching tenders:", error);
          setStatus("error");
        }
      }
    };

    fetchTenders();
    return () => controller.abort();
  }, []);

  return (
    <main className="min-h-screen bg-white/50 px-5 py-10 md:px-28">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-center text-2xl font-bold text-red-950">Tenders</h1>

        {status === "loading" && (
          <div className="flex justify-center py-10" role="status">
            <TenderLoadingGraphic />
          </div>
        )}
        {status === "error" && (
          <div className="flex flex-col items-center py-8 text-center" role="alert">
            <TenderStatusGraphic />
            <p className="mt-4 text-red-600">Sorry, failed to fetch the latest Tenders notices.</p>
          </div>
        )}
        {status === "ready" && tenders.length === 0 && (
          <div className="flex flex-col items-center py-8 text-center">
            <TenderStatusGraphic />
            <p className="mt-4 text-red-600">Sorry, No Data available.</p>
          </div>
        )}
        {status === "ready" && tenders.map((tender) => (
          <TenderCard key={tender.id} tender={tender} />
        ))}
      </div>
    </main>
  );
}

