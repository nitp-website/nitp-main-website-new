"use client";

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { AlertTriangle, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Info } from 'lucide-react';

const Movingbar = () => {
  const [importantNotices, setImportantNotices] = useState([]);
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticesUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=active`;
        const noticesResponse = await axios.get(noticesUrl);
        
        const allNotices = noticesResponse.data.filter(notice => notice.isVisible === 1 && notice.important);
        setImportantNotices(allNotices);
        console.info("Fetched important notices:", allNotices);
      } catch (e) {
        console.error("Error fetching notices:", e);
      }
    };

    fetchNotices();
  }, []);

  const handleScrollLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft -= 200;
    }
  };

  const handleScrollRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft += 200;
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="w-full bg-gradient-to-r from-red-700 to-red-800 py-3 shadow-lg border-b-2 border-yellow-400 mt-0 hidden sm:block">
      <div className="mx-auto px-4 flex items-center">

        <div className="flex items-center bg-yellow-400 px-4 py-1 rounded-md shadow-md mr-4 z-10 shrink-0">
          <Megaphone className="h-5 w-5 text-red-700 mr-2" />
          <span className="font-bold text-red-800 tracking-wide text-sm uppercase">
            IMPORTANT NOTICE
          </span>
        </div>

        <button 
          onClick={handleScrollLeft}
          className="p-1 text-yellow-300 hover:text-yellow-100 mr-2 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div 
          ref={marqueeRef}
          className="flex-1 overflow-x-auto scroll-smooth relative hide-scrollbar"
          onMouseEnter={togglePause}
          onMouseLeave={togglePause}
        >
          
          <div className={`flex whitespace-nowrap items-center ${isPaused ? '' : 'animate-marquee'}`}>
            {importantNotices.length === 0 ? (
              <span className="text-white/90 italic px-4">No important notices at this time</span>
            ) : (
              <>
                {[...Array(3)].map((_, repeatIndex) => (
                  <React.Fragment key={repeatIndex}>
                    {importantNotices.map((notice, index) => (
                      <React.Fragment key={`${repeatIndex}-${index}`}>
                        <a
                          href={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : notice?.attachments[0]?.url}
                          className="inline-flex items-center mx-6 text-white hover:text-yellow-300 transition-colors group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Info className="h-4 w-4 text-yellow-300 mr-2 flex-shrink-0" />
                          <span className="font-medium text-sm group-hover:underline decoration-yellow-300">
                            {notice.title}
                          </span>
                        </a>
                        <div className="h-4 w-0.5 bg-white/30 rounded-full"></div>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
        </div>

        <button 
          onClick={handleScrollRight}
          className="p-1 text-yellow-300 hover:text-yellow-100 ml-2 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: inline-block;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Movingbar;