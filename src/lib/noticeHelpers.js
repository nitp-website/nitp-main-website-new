import React from "react";
import { Star } from "lucide-react";
import { FiStar } from "react-icons/fi";

/**
 * Extract start timestamp (in ms) from notice object or date value.
 */
export function getNoticeStartDate(noticeOrDate) {
  if (!noticeOrDate) return null;

  const parseTimestamp = (val) => {
    if (val === null || val === undefined || val === "") return null;
    if (typeof val === "number") return isNaN(val) ? null : val;
    if (typeof val === "string") {
      const trimmed = val.trim();
      if (!trimmed) return null;
      if (/^\d+$/.test(trimmed)) {
        const num = parseInt(trimmed, 10);
        return isNaN(num) ? null : num;
      }
      const parsed = Date.parse(trimmed);
      return isNaN(parsed) ? null : parsed;
    }
    return null;
  };

  if (typeof noticeOrDate === "number" || typeof noticeOrDate === "string") {
    return parseTimestamp(noticeOrDate);
  }

  const n = noticeOrDate;
  return (
    parseTimestamp(n.openDate) ??
    parseTimestamp(n.timestamp) ??
    parseTimestamp(n.event_date) ??
    parseTimestamp(n.eventStartDate) ??
    parseTimestamp(n.published_on) ??
    parseTimestamp(n.date) ??
    parseTimestamp(n.createdAt) ??
    parseTimestamp(n.updatedAt) ??
    null
  );
}

/**
 * Check if a notice is "NEW" (within 15 days starting from its start date).
 */
export function isNoticeNew(noticeOrDate) {
  const startTs = getNoticeStartDate(noticeOrDate);
  if (!startTs) return false;

  const now = Date.now();
  const diffMs = now - startTs;
  const fifteenDaysMs = 15 * 24 * 60 * 60 * 1000; // 15 days in milliseconds

  // Notice is NEW if current time is within 15 days starting from start date
  return diffMs >= -86400000 && diffMs <= fifteenDaysMs;
}

/**
 * Component to render notice title along with additional_title in red brackets if present.
 */
export const NoticeTitle = ({ title, additionalTitle, className = "" }) => {
  return (
    <span className={className}>
      <span>{title}</span>
      {additionalTitle ? (
        <span className="block text-red-600 font-semibold mt-0.5">
          ({additionalTitle})
        </span>
      ) : null}
    </span>
  );
};

/**
 * Component to render blinking NEW badge if notice is within 15 days,
 * or Star icon if older than 15 days and marked important.
 */
export const NoticeBadge = ({
  notice,
  openDate,
  timestamp,
  important,
  imp,
  starType = "lucide",
  className = "",
}) => {
  const noticeObj =
    typeof notice === "object" && notice !== null
      ? notice
      : { openDate, timestamp, important: important ?? (imp ? 1 : 0) };

  const isNew = isNoticeNew(noticeObj);
  const isImp =
    noticeObj.important === 1 ||
    noticeObj.important === true ||
    imp === 1 ||
    imp === true;

  if (isNew) {
    return (
      <span
        className={`animate-pulse bg-red-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded flex-shrink-0 uppercase tracking-wider ${className}`}
      >
        NEW
      </span>
    );
  }

  if (isImp) {
    if (starType === "fi") {
      return (
        <FiStar
          className={`h-3.5 w-3.5 flex-shrink-0 text-red-500 fill-red-500 ${className}`}
        />
      );
    }
    return (
      <Star
        className={`h-4 w-4 flex-shrink-0 text-yellow-500 fill-yellow-500 ${className}`}
      />
    );
  }

  return null;
};

/**
 * Safely parse notice link (handles objects, JSON strings, and direct URL strings).
 */
export function parseNoticeLink(link) {
  if (!link) return "";
  if (typeof link === "object") {
    return link.url || link.link || "";
  }
  if (typeof link === "string") {
    const trimmed = link.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        const parsed = JSON.parse(trimmed);
        return parsed?.url || parsed?.link || "";
      } catch (e) {
        return "";
      }
    }
    return trimmed;
  }
  return "";
}
