"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Movingbar.css';

const Movingbar = () => {
    const [importantNotices, setImportantNotices] = useState([]);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const noticesUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice/active`;
              

                const [noticesResponse, academicsResponse] = await Promise.all([
                    axios.get(noticesUrl),
                    
                ]);

                const allNotices = [
                    ...noticesResponse.data.filter(notice => notice.isVisible === 1 && notice.important),
                    
                ];

                setImportantNotices(allNotices);
            } catch (e) {
                console.error("Error fetching notices:", e);
            }
        };

        fetchNotices();
    }, []);

    return (
        <div className="moving-bar-container">
            <div className="moving-bar">
                {importantNotices.length === 0 ? (
                    <span>No important notices available.</span>
                ) : (
                    <>
                        {importantNotices.map((notice, index) => (
                            <a
                                href={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : "#"}
                                key={index}
                                className="notice-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-red-500 font-bold">Important Notice: </span>
                                {notice.title}
                            </a>
                        ))}
                        {/* Duplicate the notices to create a seamless loop */}
                        {importantNotices.map((notice, index) => (
                            <a
                                href={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : "#"}
                                key={index + importantNotices.length}
                                className="notice-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-red-500 font-bold">Important Notice: </span>
                                {notice.title}
                            </a>
                        ))}
                        {/* Duplicate the notices to create a seamless loop */}
                        {importantNotices.map((notice, index) => (
                            <a
                                href={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : "#"}
                                key={index + importantNotices.length}
                                className="notice-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-red-500 font-bold">Important Notice: </span>
                                {notice.title}
                            </a>
                        ))}
                        {/* Duplicate the notices to create a seamless loop */}
                        {importantNotices.map((notice, index) => (
                            <a
                                href={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : "#"}
                                key={index + importantNotices.length}
                                className="notice-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-red-500 font-bold">Important Notice: </span>
                                {notice.title}
                            </a>
                        ))}
                        {/* Duplicate the notices to create a seamless loop */}
                        {importantNotices.map((notice, index) => (
                            <a
                                href={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : "#"}
                                key={index + importantNotices.length}
                                className="notice-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-red-500 font-bold">Important Notice: </span>
                                {notice.title}
                            </a>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Movingbar;
