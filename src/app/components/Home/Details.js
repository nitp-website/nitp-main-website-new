"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./styles/Details.css"
import AOS from 'aos';
import 'aos/dist/aos.css';;

// Noticecard Component
const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div className={`notice ${imp ? "important" : ""}`}>
    <h3>{detail}</h3>
    <p>{new Date(time).toLocaleDateString()}</p>
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
    {link && <a href={link}>Read more</a>}
  </div>
);

// Eventcard Component
const Eventcard = ({ detail, time, attachments, location, event_link, link }) => (
  <div className="eventcard" >
    <h3>{detail}</h3>
    <p>{time}</p>
    <p>{location}</p>
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
    {link && <a href={link}>Read more</a>}
  </div>
);

const Details = () => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
         offset: 50,
       })
 }, [])
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/events/active`;
        const response = await axios.get(eventsUrl);
        setEvents(response.data);
      } catch (e) {
        console.error("Error fetching events:", e);
      }
    };

    const fetchNotices = async () => {
      try {
        const noticesUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice/active`;
        const response = await axios.get(noticesUrl);
        setNotices(response.data.filter(notice => notice.isVisible === 1));
      } catch (e) {
        console.error("Error fetching notices:", e);
      }
    };

    const fetchAcademics = async () => {
      try {
        const academicsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice/academics`;
        const response = await axios.get(academicsUrl);
        setAcademics(response.data.filter(notice => notice.isVisible === 1));
      } catch (e) {
        console.error("Error fetching academic notices:", e);
      }
    };

    fetchEvents();
    fetchNotices();
    fetchAcademics();
  }, []);

  return (
    <div className="container1">
      <div className="section">
        <div className="section-header">
          <h2>Notice</h2>
          <Link href="/Notices/All">View all</Link>
        </div>
        <div className="section-content">
          {notices.length === 0 ? (
            <div className="flex justify-center items-center">
            <div className="text-center justify-center items-center">
            <svg width="120px" className=" m-auto" height="120px" viewBox="0 0 16.00 16.00" fill="#e85e5e" stroke="#e85e5e" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="#e85e5e"></path> </g></svg>
            <div className="pt-10">
            <p className="text-red-500">Sorry, No Data available.</p>
            </div>
              
            </div>
          </div>
          ) : (
            notices.map(notice => (
              <Noticecard
                detail={notice.title}
                time={notice.timestamp}
                key={notice.id}
                attachments={notice.attachments}
                imp={notice.important}
                link={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : ""}
              />
            ))
          )}
        </div>
      </div>
      <div className="section1" >
      <div >
        <div className="section-header">
          <h2>Events</h2>
          <Link href="/Notices/Events">View all</Link>
        </div>
        
      
      
        <div className="section-content" >
          {events.length === 0 ? (
            <div className="flex justify-center items-center">
            <div className="text-center justify-center items-center">
            <svg width="120px" className=" m-auto" height="120px" viewBox="0 0 16.00 16.00" fill="#e85e5e" stroke="#e85e5e" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="#e85e5e"></path> </g></svg>
            <div className="pt-10">
            <p className="text-red-500">Sorry, No Data available.</p>
            </div>
              
            </div>
          </div>
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
                  time={`${day}-${month}-${year} - ${cday}-${cmonth}-${cyear}`}
                  attachments={event.attachments}
                  location={event.venue.substring(0, 60)}
                  event_link={event.event_link && JSON.parse(event.event_link).url || ""}
                  link={event.attachments.length !== 0 ? event.attachments[0].url : ""} 
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
        <div className="section-content">
          {academics.length === 0 ? (
           <div className="flex justify-center items-center">
           <div className="text-center justify-center items-center">
           <svg width="120px" className=" m-auto" height="120px" viewBox="0 0 16.00 16.00" fill="#e85e5e" stroke="#e85e5e" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 3 2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 4 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2 3 c -1.429688 0 -2.75 0.761719 -3.464844 2 c -0.136718 0.238281 -0.054687 0.546875 0.183594 0.683594 c 0.238281 0.136718 0.546875 0.054687 0.683594 -0.183594 c 0.535156 -0.929688 1.523437 -1.5 2.597656 -1.5 s 2.0625 0.570312 2.597656 1.5 c 0.136719 0.238281 0.445313 0.320312 0.683594 0.183594 c 0.238281 -0.136719 0.320312 -0.445313 0.183594 -0.683594 c -0.714844 -1.238281 -2.035156 -2 -3.464844 -2 z m -3 7 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z m 0 0" fill="#e85e5e"></path> </g></svg>
           <div className="pt-10">
           <p className="text-red-500">Sorry, No Data available.</p>
           </div>
             
           </div>
         </div>
          ) : (
            academics.map(notice => (
              <Noticecard
                detail={notice.title}
                time={notice.timestamp}
                key={notice.id}
                attachments={notice.attachments}
                imp={notice.important}
                link={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : ""}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
