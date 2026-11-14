"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Download, ExternalLink } from 'lucide-react';
import { extractApiArray } from "@/lib/apiHelpers";

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

  // Parse attachments from JSON string
  const parsedAttachments = Array.isArray(attachments)
    ? attachments
    : typeof attachments === "string"
      ? safeParseJSON(attachments, [])
      : [];

  const imageSource = typeof banner === "string" && banner.trim()
    ? banner.trim()
    : "/feature-fallbacks/event.svg";

  // Parse event_link if it exists
  const parsedEventLink = event_link && typeof event_link === "object"
    ? event_link
    : event_link && event_link !== "null"
      ? safeParseJSON(event_link, null)
      : null;

  return (
    <article className="group/item flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <img
          src={imageSource}
          alt={`${detail || "Event"} banner`}
          className="h-full w-full object-cover transition duration-300 group-hover/item:scale-105"
          onError={(event) => {
            const fallback = "/feature-fallbacks/event.svg";
            if (!event.currentTarget.src.endsWith(fallback)) {
              event.currentTarget.src = fallback;
            }
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-4 line-clamp-2 min-h-[3.5rem] text-lg font-semibold leading-7 text-slate-900">
          {detail || "Untitled event"}
        </h3>
        <div className="mb-2 flex items-start gap-3 text-sm text-slate-600">
          <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-red-800" />
          <span>{time}</span>
        </div>
        {location && (
          <div className="mb-4 flex items-start gap-3 text-sm text-slate-600">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-800" />
            <span>{location}</span>
          </div>
        )}

        {parsedAttachments && parsedAttachments.length > 0 && (
          <div className="mb-4 flex flex-col gap-2 border-t border-slate-100 pt-3">
            {parsedAttachments.map((attachment, index) => (
              <a
                key={index}
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-red-800 hover:text-red-950"
              >
                <Download className="h-4 w-4 shrink-0" />
                <span className="truncate">{attachment.caption || "Event attachment"}</span>
              </a>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-3">
          {doclink && (
            <a
              href={doclink.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-red-800 hover:text-red-950"
            >
              <ExternalLink className="h-4 w-4" />
              Registration
            </a>
          )}
          {parsedEventLink?.url && (
            <a
              href={parsedEventLink.url.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-red-800 hover:text-red-950"
            >
              <ExternalLink className="h-4 w-4" />
              Event link
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Page = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/events?type=active`;
        const response = await axios.get(eventsUrl);
        const eventsData = extractApiArray(response);
        
        // Sort events by updatedAt timestamp in descending order (most recent first)
        const sortedEvents = eventsData.sort((a, b) => {
          const dateA = new Date(parseInt(a.updatedAt));
          const dateB = new Date(parseInt(b.updatedAt));
          
          // Check if dates are valid
          if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) return 0;
          if (isNaN(dateA.getTime())) return 1;
          if (isNaN(dateB.getTime())) return -1;
          
          return dateB - dateA;
        });

        setEvents(sortedEvents);
        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching Events notices:", e);
        setIsLoading(false);
        setFetchError(true);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="events-page min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-800">NIT Patna</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Events</h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-red-800" />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center ">
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
                className=" m-auto"
                height="120px"
                viewBox="0 0 16.00 16.00"
                fill="#e85e5e"
                stroke="#e85e5e"
                strokeWidth="0.00016"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.128"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0"
                    fill="#e85e5e"
                  ></path>{" "}
                </g>
              </svg>
              <div className="pt-10">
                <p className="text-red-500">
                  Sorry, failed to fetch the latest events.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {events.length === 0 ? (
              <p className="col-span-full rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">No events available.</p>
            ) : (
              events.map((event, index) => {
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
                  <Eventcard
                    key={index}
                    detail={event.title}
                    time={`${dayStart}-${monthStart}-${yearStart} - ${dayEnd}-${monthEnd}-${yearEnd}`}
                    attachments={event.attachments}
                    location={event.venue}
                    event_link={event.event_link}
                    doclink={event.doclink}
                    banner={event.banner_image || event.banner || event.image || event.profile_image}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </main>
  );
};





export default Page;
