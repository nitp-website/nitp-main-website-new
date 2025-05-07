"use client";

import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "./styles/Details.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiDownload } from 'react-icons/fi';
import { Calendar, MapPin, Download, ExternalLink, Info, BellRing, AlertOctagon, CircleDot, Star } from 'lucide-react';


// FormatDate component
const FormatDate = ({ time }) => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(time));

  return <>{formattedDate}</>;
};

// Noticecard Component
const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div className="notice flex items-start gap-2 bg-transparent hover:bg-purple-50 rounded-md py-3 px-2 mr-2">
    {imp && (
      <Star className="h-3 w-3 mt-[6px] flex-shrink-0 text-yellow-500 fill-yellow-500" />
    )}
    <div className="flex-1">
      <h3>{detail}</h3>
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

// Eventcard Component
const Eventcard = ({
  detail,
  time,
  attachments,
  location,
  event_link,
  doclink,
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

  // Parse attachments from JSON string
  const parsedAttachments = typeof attachments === "string"
    ? safeParseJSON(attachments, [])
    : [];

  // Parse event_link if it exists
  const parsedEventLink = event_link
    ? safeParseJSON(event_link, null)
    : null;

  return (
    <div className="group/item rounded-lg p-3 transition-all hover:bg-purple-50">
      <p className="mb-3 text-sm text-gray-700">{detail}</p>
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
        <Calendar className="h-4 w-4" />
        <span>{time}</span>
      </div>
      <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
        <MapPin className="h-4 w-4" />
        <span>{location}</span>
      </div>

      {/* Display attachments */}
      {parsedAttachments && parsedAttachments.length > 0 && (
        <div className="flex flex-col gap-2 mb-3">
          {parsedAttachments.map((attachment, index) => (
            <a
              key={index}
              href={attachment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
            >
              <Download className="h-4 w-4" />
              {attachment.caption || "Event Attachment"}
            </a>
          ))}
        </div>
      )}

      {/* Display links in flex-col to ensure vertical layout */}
      <div className="flex flex-col gap-2">
        {doclink && (
          <a
            href={doclink.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
          >
            <ExternalLink className="h-4 w-4" />
            Event Registration
          </a>
        )}
        {parsedEventLink?.url && (
          <a
            href={parsedEventLink.url.trim()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
          >
            <ExternalLink className="h-4 w-4" />
            Event Link
          </a>
        )}
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
  const [scrollingNotices, setScrollingNotices] = useState(true); // Start scrolling
  const [scrollingAcademics, setScrollingAcademics] = useState(true); // Start scrolling
  const [scrollingevents, setScrollingevents] = useState(true);
  const noticesRef = useRef(null);
  const academicsRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 50 });

    const fetchEvents = async () => {
      try {
        const eventsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/events?type=active`;
        // console.log(eventsUrl);
        const response = await axios.get(eventsUrl);
        // Filter the events to include only those with type "general"
        const filteredEvents = response.data.filter(
          (event) => event.type === "general"
        );
        // console.log(filteredEvents);
        setEvents(filteredEvents);
      } catch (e) {
        console.error("Error fetching events:", e);
      }
    };

    const fetchNotices = async () => {
      try {
        const noticesUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=active`;
        const response = await axios.get(noticesUrl);
        const sortedNotices = response.data
          .filter((notice) => notice.isVisible === 1)
          .sort((a, b) => b.important - a.important);
        let data = sortedNotices.slice(0, 21);
        // console.log(data)
        setnoticies(data);
        setNotices(sortedNotices);
      } catch (e) {
        console.error("Error fetching notices:", e);
      }
    };

    const fetchAcademics = async () => {
      try {
        const academicsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=academics`;
        const response = await axios.get(academicsUrl);
        const sortedAcademics = response.data
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

    fetchEvents();
    fetchNotices();
    fetchAcademics();
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

    if (noticesRef.current) {
      noticeObserver.observe(noticesRef.current);
    }
    if (eventsRef.current) {
      eventObserver.observe(eventsRef.current);
    }
    if (academicsRef.current) {
      academicObserver.observe(academicsRef.current);
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
    };
  }, [noticesRef, eventsRef, academicsRef]);

  useEffect(() => {
    const scrollSection = (ref, scrolling) => {
      if (!ref.current) return;

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

    return () => {
      noticeScroll();
      eventScroll();
      academicScroll();
    };
  }, [scrollingNotices, scrollingevents, scrollingAcademics]);

  const handleMouseEnterNotices = () => setScrollingNotices(false);
  const handleMouseLeaveNotices = () => setScrollingNotices(true);

  const handleMouseEnterEvents = () => setScrollingevents(false);
  const handleMouseLeaveEvents = () => setScrollingevents(true);

  const handleMouseEnterAcademics = () => setScrollingAcademics(false);
  const handleMouseLeaveAcademics = () => setScrollingAcademics(true);

  return (
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
                detail={notice.title}
                time={notice.timestamp}
                key={notice.id}
                attachments={notice.attachments}
                imp={notice.important}
                link={
                  (notice.notice_link && JSON.parse(notice.notice_link).url) ||
                  ""
                }
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
            className="section-content text-red-950 scrollbar-hide"
            ref={eventsRef}
            onMouseEnter={handleMouseEnterEvents}
            onMouseLeave={handleMouseLeaveEvents}
            style={{ overflowY: "auto", maxHeight: "300px" }} // Set max height for scrolling
          >
            {events.length === 0 ? (
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
              events
                .sort((a, b) => {
                  // Sort by updatedAt in descending order (most recent first)
                  return new Date(b.updatedAt) - new Date(a.updatedAt);
                })
                .map((event, index) => {
                  const startDate = new Date(event.eventStartDate);
                  const endDate = new Date(event.eventEndDate);
                  const dayStart = startDate.getDate();
                  const monthStart = startDate.getMonth() + 1;
                  const yearStart = startDate.getFullYear();
                  const dayEnd = endDate.getDate();
                  const monthEnd = endDate.getMonth() + 1;
                  const yearEnd = endDate.getFullYear();

                  return (
                    <Eventcard
                      key={index}
                      detail={event.title}
                      time={`${dayStart}-${monthStart}-${yearStart} - ${dayEnd}-${monthEnd}-${yearEnd}`}
                      attachments={event.attachments}
                      location={event.venue}
                      event_link={event.event_link}
                      doclink={event.doclink}
                    />
                  );
                })
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
                detail={notice.title}
                time={notice.timestamp}
                key={notice.id}
                attachments={notice.attachments}
                imp={notice.important}
                link={
                  (notice.notice_link && JSON.parse(notice.notice_link).url) ||
                  ""
                }
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
