"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DepartmentNotify1 from "./DepartmentNotify1.js";
// import { Button } from "@/components/ui/button";

const DeptNotice = ({ dept }) => {
  const [Notices, setNotices] = useState([]);

useEffect(() => {
  const getData = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    if (!apiUrl) {
      console.error('NEXT_PUBLIC_BACKEND_API_URL is not defined');
      return;
    }
    const response = await axios.get(
      `${apiUrl}/api/notice?type=${dept.toLowerCase()}`
    );
    setNotices(response.data);
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
                  title={notice.title}
                  attachments={notice.attachments}
                  important={notice.important}
                  link={notice.notice_link ? notice.notice_link : ""}
                  date={notice.updatedAt}
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

export default DeptNotice;