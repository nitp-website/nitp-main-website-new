"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DepartmentNotify1 from "./DepartmentNotify1.js";
import { extractApiArray, getBackendApiUrl } from "@/lib/apiHelpers";
import { getNoticeStartDate, isNoticeEndCrossed } from "@/lib/noticeHelpers";
// import { Button } from "@/components/ui/button";

const DepartmentNotice = ({ dept }) => {
  const [Notices, setNotices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          getBackendApiUrl(`/api/notice?type=${dept.toLowerCase()}`)
        );
        const raw = extractApiArray(response).filter((notice) => notice.isVisible === 1 || notice.isVisible === undefined);
        const sorted = raw.sort((a, b) => {
          const timeA = getNoticeStartDate(a) || 0;
          const timeB = getNoticeStartDate(b) || 0;
          return timeB - timeA;
        });
        const activeNotices = sorted.filter((n) => !isNoticeEndCrossed(n));
        const passedNotices = sorted.filter((n) => isNoticeEndCrossed(n));
        const displayNotices = activeNotices.length > 0 ? activeNotices : passedNotices.slice(0, 5);
        setNotices(displayNotices);
      } catch (error) {
        setNotices([]);
      }
    };
    getData();
  }, [dept]);

  return (
    <div className="w-full flex flex-col max-sm:mr-0">
      <div className="bg-white rounded-lg shadow-md p-6 py-2 border border-red-200">
        <h2 className="text-2xl font-bold text-[#5D1A14] mb-4">Announcements</h2>
        <ul className="space-y-3 overflow-y-auto max-h-80">
          {Notices.map((notice, id) => {
            if (notice.isVisible === 1) {
              return (
                <DepartmentNotify1
                  key={id}
                  notice={notice}
                  title={notice.title}
                  attachments={notice.attachments}
                  important={notice.important}
                  link={notice.notice_link ? notice.notice_link : ""}
                  date={notice.openDate || notice.updatedAt || notice.timestamp}
                />
              );
            }
            return null;
          })}
        </ul>
        <button
          variant="outline"
          className="mt-4 text-[#8B3A32] border-[#8B3A32] hover:bg-[#F8F0EE] hover:text-[#5D1A14]"
        >
          View All Annoncements
        </button>
      </div>
    </div>
  );
};

export default DepartmentNotice;
