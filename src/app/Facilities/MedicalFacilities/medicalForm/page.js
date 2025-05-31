

"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import { FaFilePdf } from "react-icons/fa"; // changed icon

const content = [
  {
    title: "Medical Claim Form",
    link: "https://drive.google.com/file/d/1Rx2FxIqoWBsxqFbmBTvWCl52ZLN_DfMy/view?usp=drivesdk",
  },
  {
    title: "Medical Certificate (A)",
    link: "https://drive.google.com/file/d/1pHaYlHR2PJW29pUAfaLTJ_fnoEOuu4Iv/view?usp=drivesdk",
  },
  {
    title: "Medical Certificate (B)",
    link: "https://drive.google.com/file/d/1hXLAzspVCDdoQt9pKQ9WuTCpOOQZPZTu/view?usp=drivesdk",
  },
  {
    title: "Medical Emergency Certificate",
    link: "https://drive.google.com/file/d/1K2Cjbiuhl9_X-vyvWwxqA324ry5ViiGX/view?usp=drivesdk",
  },
  {
    title: "Medical Nursing Certificate",
    link: "https://drive.google.com/file/d/1MUC3NgNuUT8ebaGbIx1qTRsJvMfp-KPG/view?usp=drivesdk",
  },
  {
    title: "List of Empaneled Hospitals",
    link: "https://drive.google.com/file/d/1qvxRHrPGMCOiS7Nrt4SRE_0so8BkXd0C/view?usp=sharing",
  },
];

const DownloadsPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar Section */}
      <div className="md:w-1/4 p-6 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Content Section */}
      <div className="md:w-3/4 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Download Forms</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <FaFilePdf className="text-5xl text-red-600 mb-2" />
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline font-semibold"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
