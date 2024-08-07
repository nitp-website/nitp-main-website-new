"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../../components/Home/styles/Details.css";
import Downloadicon from "../../../../public/downloadicon.png"; 

const Eventcard = ({ detail, time, attachments, location, event_link, link }) => (
  <div className="eventcard" >
    <h3 className="text-black  text-xs md:text-base">{detail}</h3>
    <p className="text-neutral-500 text-xs md:text-base">{time}</p>
    <p className="text-neutral-500 text-xs md:text-base">{location}</p>
    {attachments && attachments.length > 0 && (
      <ul>
        {attachments.map((attachment, index) => (
          <li key={index}>
            {attachment.typeLink ? (
              <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                <div className="download-icon inline-block"></div>
                {attachment.caption}
              </a>
            ) : (
              <a href={attachment.url} download>
                <div className="download-icon inline-block"></div>
                {attachment.caption}
              </a>
            )}
          </li>
        ))}
      </ul>
    )}
    {event_link && <a href={event_link}>Event link</a>}
    {link && <a href={link}>View Details</a>}
  </div>
);
const Page = () => {
  const[events,setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/events/active`;
        const response = await axios.get(eventsUrl);
        setEvents(response.data);
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
    <div>
      <div className="p-5 md:p-10 md:pl-28 md:pr-28">
        <div className="text-2xl text-center pb-7 md:pb-10 text-red-950 font-bold">
          <h2>Events</h2>
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
              <circle
                fill="none"
                stroke="#f87171"
                stroke-width="1"
                stroke-miterlimit="10"
                stroke-dasharray="10,10"
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
            <svg width="120px" className=" m-auto" height="120px" viewBox="0 0 16.00 16.00" fill="#e85e5e" stroke="#e85e5e" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="#e85e5e"></path> </g></svg>
            <div className="pt-10">
            <p className="text-red-500">Sorry, failed to fetch the latest events.</p>
            </div>
              
            </div>
          </div>
        ) : (
          <div className="section-content p-0 m-0">
            {events.length === 0 ? (
            <p>No events available.</p>
          ) : (
            events.map((event, index) => {
              const date = new Date(event.eventStartDate);
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              const cdate = new Date(event.eventEndDate);
              const cday = cdate.getDate();
              const cmonth = cdate.getMonth() + 1;
              const cyear = cdate.getFullYear();
              const monthname = date.toLocaleString("default", { month: "short" }).toUpperCase();
              return (
                <Eventcard
                  key={index}
                  detail={event.title}
                  time={`${day}-${month}-${year} to ${cday}-${cmonth}-${cyear}`}
                  attachments={event.attachments}
                  location={event.venue.substring(0, 60)}
                  event_link={event.event_link && JSON.parse(event.event_link).url || ""}
                  link={event.attachments.length !== 0 ? event.attachments[0].url : ""} 
                />
              );
            })
          )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;