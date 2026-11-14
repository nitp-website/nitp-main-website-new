"use client";

import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "./styles/Details.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiDownload } from 'react-icons/fi';
import { Calendar, MapPin, Download, ExternalLink, Star, FileText, Users, Megaphone } from 'lucide-react';
import { extractApiArray } from "@/lib/apiHelpers";
import { NoticeBadge, NoticeTitle, parseNoticeLink, getValidAttachments, getNoticeStartDate, fetchNoticeUrl } from "@/lib/noticeHelpers";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const FALLBACK_IMAGES = {
  event: "/feature-fallbacks/event.svg",
  lecture: "/feature-fallbacks/lecture.svg",
};

const FallbackImage = ({ source, fallback, alt, ...props }) => {
  const imageSource = typeof source === "string" && source.trim() ? source.trim() : fallback;

  return (
    <img
      key={imageSource}
      src={imageSource}
      alt={alt}
      onError={(event) => {
        if (event.currentTarget.src !== new URL(fallback, window.location.origin).href) {
          event.currentTarget.src = fallback;
        }
      }}
      {...props}
    />
  );
};

const NoDataState = () => (
  <div className="flex h-full min-h-[180px] items-center justify-center py-8">
    <div className="text-center">
      <svg
        width="120px"
        height="120px"
        viewBox="0 0 16.00 16.00"
        fill="#e85e5e"
        stroke="#e85e5e"
        strokeWidth="0.00016"
        aria-hidden="true"
      >
        <path
          d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136719 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570313 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0"
          fill="#e85e5e"
        />
      </svg>
      <p className="text-sm text-red-500">Sorry, No Data available.</p>
    </div>
  </div>
);

// FormatDate component
const FormatDate = ({ time }) => {
  // Validate the time value
  if (!time || time === null || time === undefined) {
    return <>Invalid Date</>;
  }

  // Convert to number if it's a string
  const timestamp = typeof time === 'string' ? parseInt(time) : time;


  // Check if the timestamp is valid
  if (isNaN(timestamp) || timestamp <= 0) {
    return <>Invalid Date</>;
  }

  const date = new Date(timestamp);


  // Check if the date is valid
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

const LectureDetails = ({ lecture, dateTimeSeparator, venuePrefix = "" }) => {
  const timestamp = Number(lecture.date);
  const date = Number.isFinite(timestamp) && timestamp > 0 ? new Date(timestamp) : null;
  const formattedDate = date && !isNaN(date.getTime())
    ? new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(date)
    : null;
  const time = typeof lecture.time === "string" ? lecture.time.trim() : "";
  const venue = typeof lecture.venue === "string" ? lecture.venue.trim() : "";

  if (!formattedDate && !time && !venue) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-100 pb-5">
      {(formattedDate || time) && (
        <div className="flex items-center gap-2 text-sm text-gray-800 font-medium">
          <Calendar className="h-5 w-5 text-red-800" />
          <span>{formattedDate}{formattedDate && time ? dateTimeSeparator : ""}{time}</span>
        </div>
      )}
      {venue && (
        <div className="flex items-center gap-2 text-sm text-gray-800 font-medium">
          <MapPin className="h-5 w-5 text-red-800" />
          <span>{venuePrefix}{venue}</span>
        </div>
      )}
    </div>
  );
};

// Noticecard Component
const Noticecard = ({ notice, detail, time, attachments, imp, link }) => {
  const parsedLink = link || parseNoticeLink(notice?.notice_link);
  const validAttachments = getValidAttachments(attachments || notice?.attachments);
  const hasAttachments = validAttachments.length > 0;
  const normalizeUrl = (u) => (u ? String(u).trim().replace(/\/+$/, "") : "");

  const isLinkInAttachments =
    hasAttachments &&
    parsedLink &&
    validAttachments.some(
      (att) => att?.url && normalizeUrl(att.url) === normalizeUrl(parsedLink)
    );

  const showLink = Boolean(parsedLink && !isLinkInAttachments);

  const admissionFallbackLink =
    !hasAttachments && !showLink && notice?.notice_type === "admissions"
      ? notice?.notice_sub_type
        ? `/Academic/Admission?type=${notice.notice_sub_type}`
        : "/Academic/Admission"
      : null;

  return (
    <div className="notice flex items-start gap-2 bg-transparent hover:bg-purple-50 rounded-md py-3 px-2 mr-2">
      <NoticeBadge notice={notice || { timestamp: time, important: imp }} className="mt-1" />
      <div className="flex-1">
        <h3>
          <NoticeTitle title={detail} additionalTitle={notice?.additional_title} />
        </h3>
        <p>
          <span className="text-neutral-400 text-xs">
            <FormatDate time={time} />
          </span>
        </p>
        {hasAttachments && (
          <ul className="text-xs">
            {validAttachments.map((attachment, index) => {
              const displayCaption =
                attachment.caption ||
                attachment.name ||
                attachment.filename ||
                (validAttachments.length > 1 ? `View Notice ${index + 1}` : "View Notice");

              return (
                <li key={index} className="mb-1">
                  <a
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-800 hover:text-red-900"
                  >
                    <FiDownload className="inline-block text-red-800 hover:text-red-900" />
                    <span className="text-red-800 hover:text-red-900">
                      {displayCaption}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
        {showLink && (
          <a
            href={parsedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-red-800 hover:text-red-900 inline-block mt-1"
          >
            <span className="text-red-800 hover:text-red-900">View Notice</span>
          </a>
        )}
        {admissionFallbackLink && (
          <Link
            href={admissionFallbackLink}
            className="text-xs text-red-800 hover:text-red-900 inline-block mt-1"
          >
            <span className="text-red-800 hover:text-red-900">View Admission</span>
          </Link>
        )}
      </div>
    </div>
  );
};

// Eventcard Component
const Eventcard = ({
  detail,
  time,
  attachments,
  location,
  event_link,
  doclink,
  banner,
}) => {
  // Helper function to safely parse JSON
  const safeParseJSON = (data, fallback) => {
    try {
      const parsed = JSON.parse(data);
      return parsed;
    } catch (e) {
      return fallback;
    }
  };

  // Parse attachments - handle both array objects and JSON strings
  let parsedAttachments = [];
  if (attachments) {
    if (Array.isArray(attachments)) {
      // If attachments is already an array (new format)
      parsedAttachments = attachments;
    } else if (typeof attachments === "string") {
      // If attachments is a JSON string (old format)
      parsedAttachments = safeParseJSON(attachments, []);
    }
  }

  // Parse event_link if it exists - handle both object and JSON string
  let parsedEventLink = null;
  if (event_link) {
    if (typeof event_link === "object" && event_link !== null && !Array.isArray(event_link)) {
      // If event_link is already an object
      parsedEventLink = event_link;
    } else if (typeof event_link === "string" && event_link !== "null") {
      // If event_link is a JSON string
      parsedEventLink = safeParseJSON(event_link, null);
    }
  }

  return (
    <div className="group/item rounded-lg p-3 transition-all hover:bg-purple-50 h-full w-full flex flex-col bg-white border border-gray-100 shadow-sm box-border">
      <div className="w-full aspect-[16/9] mb-3 shrink-0 overflow-hidden rounded-md bg-gray-50 flex items-center justify-center">
        <FallbackImage
          source={banner}
          fallback={FALLBACK_IMAGES.event}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mb-2 text-sm text-gray-800 font-semibold line-clamp-2 shrink-0" title={detail}>{detail}</p>

      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-1.5 min-h-[60px]">
        <div className="flex items-start gap-2 text-xs text-gray-600 shrink-0">
          <Calendar className="h-3.5 w-3.5 shrink-0 mt-0.5" />
          <span className="line-clamp-2 leading-tight">{time}</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-gray-600 shrink-0">
          <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
          <span className="line-clamp-2 leading-tight">{location}</span>
        </div>

        {/* Display attachments */}
        {parsedAttachments && parsedAttachments.length > 0 && (
          <div className="flex flex-col gap-2 mb-3 shrink-0">
            {parsedAttachments.map((attachment, index) => (
              <a
                key={index}
                href={attachment.url ? attachment.url.trim() : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
              >
                <Download className="h-4 w-4 shrink-0" />
                <span className="truncate">
                  {attachment.caption ? attachment.caption.trim() : "Event Attachment"}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Display links in flex-col to ensure vertical layout */}
      <div className="flex flex-col gap-2 mt-auto pt-3 border-t border-gray-50 shrink-0">
        {doclink && doclink.trim() !== "" && (
          <a
            href={doclink.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            Event Registration
          </a>
        )}
        {parsedEventLink?.url && parsedEventLink.url.trim() !== "" && (
          <a
            href={parsedEventLink.url.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="truncate">
              {parsedEventLink.caption && parsedEventLink.caption.trim() !== ""
                ? parsedEventLink.caption.trim()
                : "Event Link"}
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

const InstituteLectureCard = ({ lecture, isExpanded, onToggleExpanded }) => {
  return (
    <div className="group/item rounded-xl p-6 transition-all hover:bg-white bg-white/80 border border-gray-200 shadow-sm w-full flex flex-col gap-6 relative items-start mx-auto box-border h-full overflow-y-auto scrollbar-hide">
      {/* Lecturer Info */}
      <div className="flex flex-col items-center gap-3 w-full border-b border-gray-100 pb-4">
        <div className="w-32 h-32 shrink-0 overflow-hidden rounded-full border-4 border-red-800/10 shadow-sm">
          <FallbackImage
            source={lecture.lecturer_photo}
            fallback={FALLBACK_IMAGES.lecture}
            alt={lecture.lecturer_photo ? lecture.lecturer_name || "Lecturer" : ""}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center w-full">
          <span className="inline-block px-3 py-1 border border-red-800 text-red-800 rounded-full text-xs font-semibold mb-2">
            {lecture.category || 'Institute Lecture'}
          </span>
          <p className="text-red-800 font-bold text-lg md:text-xl">{lecture.lecturer_name}</p>
        </div>
      </div>
      
      {/* Lecture Info */}
      <div className="flex flex-col flex-1 min-w-0 w-full h-full text-left">
        <div>
          <h3 className="font-bold text-gray-900 leading-tight">
            {lecture.lecture_title}
          </h3>
        </div>

        <LectureDetails lecture={lecture} dateTimeSeparator=" | " venuePrefix="Venue: " />

        {/* Biography Section */}
        {lecture.biography && (
          <div className="mt-5 text-left">
            <button 
              onClick={onToggleExpanded}
              className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded-md font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              Biography
              <svg className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isExpanded && (
              <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-700 max-h-[250px] overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                {lecture.biography}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const GuestLectureCard = ({ lecture, isExpanded, onToggleExpanded }) => {
  return (
    <div className="group/item rounded-xl p-6 transition-all hover:bg-white bg-white/80 border border-gray-200 shadow-sm w-full flex flex-col gap-6 relative items-start mx-auto box-border h-full overflow-y-auto scrollbar-hide">
      {/* Lecturer Info */}
      <div className="flex flex-col items-center gap-3 w-full border-b border-gray-100 pb-4">
        <div className="w-32 h-32 shrink-0 overflow-hidden rounded-full border-4 border-red-800/10 shadow-sm">
          <FallbackImage
            source={lecture.lecturer_photo}
            fallback={FALLBACK_IMAGES.lecture}
            alt={lecture.lecturer_photo ? lecture.lecturer_name || "Lecturer" : ""}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center w-full">
          <p className="text-red-800 font-bold text-lg md:text-xl">{lecture.lecturer_name}</p>
          <p className="text-gray-600 text-sm font-medium mt-1">{lecture.subject}</p>
          {lecture.supervisor_email && (
            <p className="text-gray-500 text-xs mt-2">
              Supervisor:{" "}
              <a
                href={`mailto:${lecture.supervisor_email.trim()}`}
                className="text-red-800 hover:text-red-900 underline underline-offset-2"
              >
                {lecture.supervisor_name?.trim() || "Contact supervisor"}
              </a>
            </p>
          )}
        </div>
      </div>
      
      {/* Seminar Info */}
      <div className="flex flex-col flex-1 min-w-0 w-full h-full text-left">
        <div>
          <h3 className=" font-bold text-gray-900 mb-3 leading-tight">
            {lecture.seminar_name}
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            {lecture.description}
          </p>
        </div>

        <LectureDetails lecture={lecture} dateTimeSeparator=" at " />

        {/* Abstract Section */}
        {lecture.abstract && (
          <div className="mt-5 text-left">
            <button 
              onClick={onToggleExpanded}
              className="text-red-800 hover:text-red-900 font-semibold text-sm flex items-center gap-1.5 transition-colors"
            >
              {isExpanded ? 'Hide Abstract' : 'Read Abstract'}
              <svg className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isExpanded && (
              <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-700 max-h-[250px] overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                {lecture.abstract}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const TenderCard = ({ tender }) => {
  let parsedNoticeLink = null;
  if (tender.notice_link) {
    try {
      parsedNoticeLink = typeof tender.notice_link === 'string' ? JSON.parse(tender.notice_link) : tender.notice_link;
    } catch (e) {
      parsedNoticeLink = null;
    }
  }

  let parsedAttachments = [];
  if (tender.attachments) {
    if (Array.isArray(tender.attachments)) {
      parsedAttachments = tender.attachments;
    } else if (typeof tender.attachments === 'string') {
      try {
        parsedAttachments = JSON.parse(tender.attachments);
      } catch (e) {
        parsedAttachments = [];
      }
    }
  }

  const dateObj = tender.openDate ? new Date(Number(tender.openDate)) : null;
  const formattedDate = dateObj && !isNaN(dateObj.getTime())
    ? dateObj.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
    : '';

  return (
    <div className="w-full flex flex-col py-4 border-b-2 border-gray-100 last:border-b-0">
      <div className="text-left">
        <h3 className="text-gray-900 font-semibold text-sm md:text-base leading-relaxed">
          <Link href="/Others/Tenders" className="text-gray-900 hover:text-red-800 focus-visible:underline">
            <span className="inline-block mr-2 align-text-bottom">
              <FileText className="w-4 h-4 text-[#c11e1e]" fill="currentColor" />
            </span>
            {tender.title}
          </Link>
        </h3>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 font-medium">
          <Calendar className="h-4 w-4 text-gray-400" />
          <span>{formattedDate}</span>
        </div>

        <div className="flex flex-col gap-1 mt-2">
          {parsedAttachments.filter(att => att && att.url && att.url.trim() !== '').map((attachment, index) => (
            <a
              key={index}
              href={attachment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#c11e1e] hover:text-red-800 transition-colors w-fit"
            >
              <Download className="w-4 h-4" />
              <span>{attachment.caption || "Download Attachment"}</span>
            </a>
          ))}
          {parsedNoticeLink && parsedNoticeLink.url && parsedNoticeLink.url.trim() !== '' && (
            <a
              href={parsedNoticeLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#c11e1e] hover:text-red-800 transition-colors w-fit"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Notice</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const WorkshopCard = ({ event }) => {
  const parseEventDate = (dateValue) => {
    if (!dateValue) return null;
    const date = new Date(dateValue);
    return isNaN(date.getTime()) ? null : date;
  };

  const startDate = parseEventDate(event.start_date);
  const formattedStartDate = startDate ? startDate.toLocaleDateString('en-CA') : '';

  return (
    <div className="w-full flex flex-col py-4 border-b-2 border-gray-100 last:border-b-0">
      <div className="group text-left">
        <h3 className="font-semibold text-sm md:text-base">
          <Link href="/Others/Workshops-Conferences" className="text-[#c11e1e] hover:text-red-800 focus-visible:underline">
            {event.event_name}
            <span className="inline-block ml-1.5 align-text-bottom">
              <Megaphone className="w-4 h-4 text-[#c11e1e]" fill="currentColor" />
            </span>
          </Link>
        </h3>
        <p className="text-gray-800 text-sm mt-1.5 font-medium leading-relaxed">
          {event.faculty_name ? <span className="font-bold text-gray-900">{event.faculty_name} : </span> : null}
          {event.event_type || 'Workshop'}
          {event.sponsored_by ? ` Sponsored by ${event.sponsored_by}` : ''}
          {event.department ? ` (${event.department})` : ''}
          {event.start_date ? ` from ${new Date(event.start_date).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}` : ''}
          {event.end_date && event.start_date !== event.end_date ? ` to ${new Date(event.end_date).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}` : ''}
        </p>
      </div>
      
      <div className="flex justify-end mt-2">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold bg-gray-50 px-2 py-1 rounded shadow-sm border border-gray-100">
          <Calendar className="h-4 w-4 text-purple-400" />
          <span>{formattedStartDate}</span>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [homenotices, setnoticies] = useState([]);
  const [academics, setAcademics] = useState([]);
  const [homeacad, sethomeacad] = useState([]);
  const [guestLectures, setGuestLectures] = useState([]);
  const [instituteLectures, setInstituteLectures] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [tenders, setTenders] = useState([]);
  const [activeLectureTab, setActiveLectureTab] = useState('institute');
  const [expandedLecture, setExpandedLecture] = useState(null);
  const lectureSwiperRef = useRef(null);
  const [scrollingNotices, setScrollingNotices] = useState(true); // Start scrolling
  const [scrollingAcademics, setScrollingAcademics] = useState(true); // Start scrolling
  const [scrollingevents, setScrollingevents] = useState(true);
  const [scrollingWorkshops, setScrollingWorkshops] = useState(true);
  const [scrollingTenders, setScrollingTenders] = useState(true);
  const noticesRef = useRef(null);
  const academicsRef = useRef(null);
  const eventsRef = useRef(null);
  const workshopsRef = useRef(null);
  const tendersRef = useRef(null);

  useEffect(() => {
    const autoplay = lectureSwiperRef.current?.autoplay;
    if (!autoplay) return;

    if (expandedLecture) {
      autoplay.stop();
    } else {
      autoplay.start();
    }
  }, [expandedLecture, activeLectureTab]);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 50 });

    const base = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";

    const fetchEvents = async () => {
      try {
        const eventsUrl = `${base}/api/events?type=active`;
        const response = await axios.get(eventsUrl);
        const eventsData = extractApiArray(response);
        // Filter the events to include only those with type "general"
        const filteredEvents = eventsData.filter(
          (event) => event.type === "general"
        );
        setEvents(filteredEvents);
      } catch (e) {
        console.error("Error fetching events:", e);
      }
    };

    const fetchNotices = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
        const urls = [
          `${base}/api/notice?type=active`,
          `${base}/api/notice?type=job`,
          `${base}/api/notice?type=convocation`,
          `${base}/api/notice?type=facultystaffjob`,
          `${base}/api/notice?type=admissions&limit=50`,
        ];

        const responses = await Promise.allSettled(urls.map((url) => fetchNoticeUrl(url)));
        const combined = [];
        responses.forEach((res) => {
          if (res.status === "fulfilled") {
            const arr = extractApiArray(res.value);
            if (Array.isArray(arr)) combined.push(...arr);
          }
        });

        // Deduplicate notices by id
        const byId = new Map();
        combined.forEach((notice) => {
          if (notice && (notice.id !== undefined && notice.id !== null)) {
            byId.set(String(notice.id), notice);
          }
        });

        const sortedNotices = Array.from(byId.values())
          .filter((notice) => notice.isVisible === 1 || notice.isVisible === undefined)
          .sort((a, b) => {
            const impA = a.important === 1 || a.important === true ? 1 : 0;
            const impB = b.important === 1 || b.important === true ? 1 : 0;
            if (impB !== impA) return impB - impA;
            const timeA = getNoticeStartDate(a) || 0;
            const timeB = getNoticeStartDate(b) || 0;
            return timeB - timeA;
          });

        let data = sortedNotices.slice(0, 21);
        setnoticies(data);
        setNotices(sortedNotices);
      } catch (e) {
        console.error("Error fetching notices:", e);
      }
    };

    const fetchAcademics = async () => {
      try {
        const academicsUrl = `${base}/api/notice?type=academics`;
        const response = await axios.get(academicsUrl);
        const academicsData = extractApiArray(response);
        const sortedAcademics = academicsData
          .filter((notice) => notice.isVisible === 1)
          .sort((a, b) => b.important - a.important);
        let data = sortedAcademics.slice(0, 21);
        // console.log(data)
        sethomeacad(data);
        setAcademics(sortedAcademics);
      } catch (e) {
        console.error("Error fetching academic notices:", e);
      }
    };

    const fetchGuestLectures = async () => {
      try {
        const guestLecturesUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/guest-lectures?page=1&limit=20`;
        const response = await axios.get(guestLecturesUrl);
        if (response.data && response.data.data) {
          setGuestLectures(response.data.data);
        }
      } catch (e) {
        console.error("Error fetching guest lectures:", e);
      }
    };

    const fetchInstituteLectures = async () => {
      try {
        const instituteLecturesUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/institute-lectures?page=1&limit=20`;
        const response = await axios.get(instituteLecturesUrl);
        if (response.data && response.data.data) {
          setInstituteLectures(response.data.data);
        }
      } catch (e) {
        console.error("Error fetching institute lectures:", e);
      }
    };

    const fetchWorkshopsConferences = async () => {
      try {
        const workshopsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/workshops-conferences?page=1&limit=20`;
        const response = await axios.get(workshopsUrl);
        if (response.data && response.data.data) {
          setWorkshops(response.data.data);
        }
      } catch (e) {
        console.error("Error fetching workshops:", e);
      }
    };

    const fetchTenders = async () => {
      try {
        const tendersUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=tender`;
        const response = await axios.get(tendersUrl);
        const tenderData = extractApiArray(response);
        setTenders(tenderData.filter((notice) => notice.notice_type === "tender" && notice.isVisible === 1).slice(0, 10));
      } catch (e) {
        console.error("Error fetching tenders:", e);
      }
    };

    fetchEvents();
    fetchNotices();
    fetchAcademics();
    fetchGuestLectures();
    fetchInstituteLectures();
    fetchWorkshopsConferences();
    fetchTenders();
  }, []);

  useEffect(() => {
    const noticeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set scrolling to true when in view, false when out of view
          setScrollingNotices(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    const eventObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrollingevents(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const academicObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set scrolling to true when in view, false when out of view
          setScrollingAcademics(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    const workshopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrollingWorkshops(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    const tenderObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrollingTenders(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (noticesRef.current) {
      noticeObserver.observe(noticesRef.current);
    }
    if (eventsRef.current) {
      eventObserver.observe(eventsRef.current);
    }
    if (academicsRef.current) {
      academicObserver.observe(academicsRef.current);
    }
    if (workshopsRef.current) {
      workshopObserver.observe(workshopsRef.current);
    }
    if (tendersRef.current) {
      tenderObserver.observe(tendersRef.current);
    }

    return () => {
      if (noticesRef.current) {
        noticeObserver.unobserve(noticesRef.current);
      }
      if (eventsRef.current) {
        eventObserver.unobserve(eventsRef.current);
      }
      if (academicsRef.current) {
        academicObserver.unobserve(academicsRef.current);
      }
      if (workshopsRef.current) {
        workshopObserver.unobserve(workshopsRef.current);
      }
      if (tendersRef.current) {
        tenderObserver.unobserve(tendersRef.current);
      }
    };
  }, [noticesRef, eventsRef, academicsRef, workshopsRef, tendersRef]);

  useEffect(() => {
    const scrollSection = (ref, scrolling) => {
      if (!ref.current) return () => { }; // return a no-op function instead of undefined

      const scroll = () => {
        if (scrolling && ref.current) {
          ref.current.scrollTop += 1;
          if (
            ref.current.scrollTop >=
            ref.current.scrollHeight - ref.current.clientHeight
          ) {
            ref.current.scrollTop = 0;
          }
        }
      };

      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    };

    const noticeScroll = scrollSection(noticesRef, scrollingNotices);
    const eventScroll = scrollSection(eventsRef, scrollingevents);
    const academicScroll = scrollSection(academicsRef, scrollingAcademics);
    const workshopScroll = scrollSection(workshopsRef, scrollingWorkshops);
    const tenderScroll = scrollSection(tendersRef, scrollingTenders);

    return () => {
      if (noticeScroll) noticeScroll();
      if (eventScroll) eventScroll();
      if (academicScroll) academicScroll();
      if (workshopScroll) workshopScroll();
      if (tenderScroll) tenderScroll();
    };
  }, [scrollingNotices, scrollingevents, scrollingAcademics, scrollingWorkshops, scrollingTenders]);

  const handleMouseEnterNotices = () => setScrollingNotices(false);
  const handleMouseLeaveNotices = () => setScrollingNotices(true);

  const handleMouseEnterEvents = () => setScrollingevents(false);
  const handleMouseLeaveEvents = () => setScrollingevents(true);

  const handleMouseEnterAcademics = () => setScrollingAcademics(false);
  const handleMouseLeaveAcademics = () => setScrollingAcademics(true);

  const handleMouseEnterWorkshops = () => setScrollingWorkshops(false);
  const handleMouseLeaveWorkshops = () => setScrollingWorkshops(true);

  const handleMouseEnterTenders = () => setScrollingTenders(false);
  const handleMouseLeaveTenders = () => setScrollingTenders(true);

  return (
    <>
    <div className="container1">
      <div className="section">
        <div className="section-header">
          <h2>Notice</h2>
          <Link href="/Notices/All">View all</Link>
        </div>
        <div
          className="section-content text-red-950 scrollbar-hide"
          ref={noticesRef}
          onMouseEnter={handleMouseEnterNotices}
          onMouseLeave={handleMouseLeaveNotices}
          style={{ overflowY: "auto", maxHeight: "300px" }} // Set max height for scrolling
        >
          {homenotices.length === 0 ? (
            <div className="flex justify-center items-center">
              <div className="text-center">
                <svg
                  width="120px"
                  height="120px"
                  viewBox="0 0 16.00 16.00"
                  fill="#e85e5e"
                  stroke="#e85e5e"
                  strokeWidth="0.00016"
                >
                  <path
                    d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0"
                    fill="#e85e5e"
                  ></path>
                </svg>
                <p className="text-red-500">Sorry, No Data available.</p>
              </div>
            </div>
          ) : (
            homenotices.map((notice) => (
              <Noticecard
                notice={notice}
                detail={notice.title}
                time={notice.timestamp || notice.openDate}
                key={notice.id}
                attachments={notice.attachments}
                imp={notice.important}
                link={parseNoticeLink(notice.notice_link)}
              />
            ))
          )}
        </div>
      </div>

      <div className="section">
        <div>
          <div className="section-header">
            <h2>Events</h2>
            <Link href="/Notices/Events">View all</Link>
          </div>
          <div
            className="section-content text-red-950 scrollbar-hide h-full pb-6"
            style={{ width: "100%" }}
          >
            {events.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <div className="text-center">
                  <svg
                    width="120px"
                    height="120px"
                    viewBox="0 0 16.00 16.00"
                    fill="#e85e5e"
                    stroke="#e85e5e"
                    strokeWidth="0.00016"
                  >
                    <path
                      d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0"
                      fill="#e85e5e"
                    ></path>
                  </svg>
                  <p className="text-red-500">Sorry, No Data available.</p>
                </div>
              </div>
            ) : (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="w-full h-full py-2 px-1"
              >
                {events
                  .sort((a, b) => {
                    // Sort by updatedAt in descending order (most recent first)
                    const dateA = new Date(parseInt(a.updatedAt));
                    const dateB = new Date(parseInt(b.updatedAt));

                    // Check if dates are valid
                    if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) return 0;
                    if (isNaN(dateA.getTime())) return 1;
                    if (isNaN(dateB.getTime())) return -1;

                    return dateB - dateA;
                  })
                  .map((event, index) => {
                    // Safely parse event dates
                    const parseEventDate = (dateValue) => {
                      if (!dateValue) return new Date();
                      const timestamp = typeof dateValue === 'string' ? parseInt(dateValue) : dateValue;
                      const date = new Date(timestamp);
                      return isNaN(date.getTime()) ? new Date() : date;
                    };

                    const startDate = parseEventDate(event.eventStartDate);
                    const endDate = parseEventDate(event.eventEndDate);
                    const dayStart = startDate.getDate();
                    const monthStart = startDate.getMonth() + 1;
                    const yearStart = startDate.getFullYear();
                    const dayEnd = endDate.getDate();
                    const monthEnd = endDate.getMonth() + 1;
                    const yearEnd = endDate.getFullYear();

                    return (
                      <SwiperSlide key={index} className="!h-auto">
                        <Eventcard
                          detail={event.title}
                          time={`${dayStart}-${monthStart}-${yearStart} - ${dayEnd}-${monthEnd}-${yearEnd}`}
                          attachments={event.attachments}
                          location={event.venue}
                          event_link={event.event_link}
                          doclink={event.doclink}
                          banner={event.banner_image || event.banner || event.image || event.profile_image}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            )}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2>Academic Notices</h2>
          <Link href="/Notices/Academic">View all</Link>
        </div>
        <div
          className="section-content text-red-950 scrollbar-hide"
          ref={academicsRef}
          onMouseEnter={handleMouseEnterAcademics}
          onMouseLeave={handleMouseLeaveAcademics}
          style={{ overflowY: "auto", maxHeight: "300px" }} // Set max height for scrolling
        >
          {homeacad.length === 0 ? (
            <div className="flex justify-center items-center">
              <div className="text-center">
                <svg
                  width="120px"
                  height="120px"
                  viewBox="0 0 16.00 16.00"
                  fill="#e85e5e"
                  stroke="#e85e5e"
                  strokeWidth="0.00016"
                >
                  <path
                    d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0"
                    fill="#e85e5e"
                  ></path>
                </svg>
                <p className="text-red-500">Sorry, No Data available.</p>
              </div>
            </div>
          ) : (
            homeacad.map((notice) => (
              <Noticecard
                notice={notice}
                detail={notice.title}
                time={notice.timestamp}
                key={notice.id}
                attachments={notice.attachments}
                imp={notice.important}
                link={parseNoticeLink(notice.notice_link)}
              />
            ))
          )}
        </div>
      </div>
    </div>

    <div className="container1" style={{ position: 'relative', zIndex: 10, height: 'auto', padding: '40px 0', marginTop: '20px' }}>
          
          {/* Column 1: Lectures & Seminars */}
          <div className="section" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
            <div className="section-header !bg-transparent mb-4 border-b border-gray-200" style={{ position: 'relative' }}>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setExpandedLecture(null);
                    setActiveLectureTab('institute');
                  }}
                  className={`text-lg md:text-xl font-bold pb-2 transition-colors whitespace-nowrap ${
                    activeLectureTab === 'institute'
                      ? 'text-red-800 border-b-2 border-red-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Institute Lectures
                </button>
                <button
                  onClick={() => {
                    setExpandedLecture(null);
                    setActiveLectureTab('seminar');
                  }}
                  className={`text-lg md:text-xl font-bold pb-2 transition-colors whitespace-nowrap ${
                    activeLectureTab === 'seminar'
                      ? 'text-red-800 border-b-2 border-red-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Seminars
                </button>
              </div>
            </div>
            <div className="w-full flex-1 min-w-0 mt-2">
              {activeLectureTab === 'institute' && instituteLectures.length > 0 && (
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  onSwiper={(swiper) => { lectureSwiperRef.current = swiper; }}
                  onSlideChange={() => setExpandedLecture(null)}
                  className="w-full h-full pb-8"
                >
                  {instituteLectures.map((lecture, index) => {
                    const lectureKey = `institute-${lecture.id ?? index}`;
                    return (
                      <SwiperSlide key={lectureKey} className="!h-full !w-full flex px-1 pb-2">
                        <InstituteLectureCard
                          lecture={lecture}
                          isExpanded={expandedLecture === lectureKey}
                          onToggleExpanded={() => setExpandedLecture((current) => current === lectureKey ? null : lectureKey)}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}

              {activeLectureTab === 'seminar' && guestLectures.length > 0 && (
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  onSwiper={(swiper) => { lectureSwiperRef.current = swiper; }}
                  onSlideChange={() => setExpandedLecture(null)}
                  className="w-full h-full pb-8"
                >
                  {guestLectures.map((lecture, index) => {
                    const lectureKey = `seminar-${lecture.id ?? index}`;
                    return (
                      <SwiperSlide key={lectureKey} className="!h-full !w-full flex px-1 pb-2">
                        <GuestLectureCard
                          lecture={lecture}
                          isExpanded={expandedLecture === lectureKey}
                          onToggleExpanded={() => setExpandedLecture((current) => current === lectureKey ? null : lectureKey)}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}

              {activeLectureTab === 'institute' && instituteLectures.length === 0 && (
                <NoDataState />
              )}
              {activeLectureTab === 'seminar' && guestLectures.length === 0 && (
                <NoDataState />
              )}
            </div>
          </div>

          {/* Column 2: Workshops & Conferences */}
          <div className="section" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
            <div className="section-header !bg-transparent mb-4 border-b border-gray-200" style={{ position: 'relative' }}>
              <div className="flex gap-6">
                <h2 className="feature-section-title font-bold pb-2 text-red-800 border-b-2 border-red-800 whitespace-nowrap">
                  <Link href="/Others/Workshops-Conferences">
                    Workshops & Conferences
                  </Link>
                </h2>
              </div>
            </div>
            <div 
              className="w-full flex-1 mt-2 overflow-y-auto scrollbar-hide px-5 mb-4 bg-white rounded-xl shadow-sm border border-gray-100"
              ref={workshopsRef}
              onMouseEnter={handleMouseEnterWorkshops}
              onMouseLeave={handleMouseLeaveWorkshops}
            >
              {workshops.length > 0 ? (
                <div className="flex flex-col w-full h-full">
                  {workshops.map((workshop, index) => (
                    <WorkshopCard key={index} event={workshop} />
                  ))}
                </div>
              ) : (
                <NoDataState />
              )}
            </div>
          </div>

          {/* Column 3: Tenders */}
          <div className="section" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
            <div className="section-header !bg-transparent mb-4 border-b border-gray-200" style={{ position: 'relative' }}>
              <div className="flex gap-6">
                <h2 className="feature-section-title font-bold pb-2 text-red-800 border-b-2 border-red-800 whitespace-nowrap">
                  <Link href="/Others/Tenders">Tenders</Link>
                </h2>
              </div>
            </div>
            <div 
              className="w-full flex-1 mt-2 overflow-y-auto scrollbar-hide px-5 mb-4 bg-white rounded-xl shadow-sm border border-gray-100"
              ref={tendersRef}
              onMouseEnter={handleMouseEnterTenders}
              onMouseLeave={handleMouseLeaveTenders}
            >
              {tenders.length > 0 ? (
                <div className="flex flex-col w-full h-full">
                  {tenders.map((tender, index) => (
                    <TenderCard key={index} tender={tender} />
                  ))}
                </div>
              ) : (
                <NoDataState />
              )}
            </div>
          </div>

      </div>
    </>
  );
};

export default Details;
