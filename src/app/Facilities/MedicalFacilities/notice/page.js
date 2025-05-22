"use client";

import React from "react";
import Sidebar from "../components/Sidebar";

const downloadsList = [
  {
    name: "SOP",
    link: "https://drive.google.com/file/d/1_6KN00R1HR6x9YfgV85XXs3ns9oZqPpY/view?usp=sharing",
  },
  {
    name: "List of Empanelled Hospitals",
    link: "https://drive.google.com/file/d/1YC839XCnkbgAfpW9pFLqko6t135i1kD1/view?usp=drivesdk",
  },
];

const DownloadsPage = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto p-6 min-h-screen bg-gray-50 text-gray-700">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 mb-6 md:mb-0">
        <Sidebar />
      </aside>

      {/* Content Section */}
      <main className="flex-1 bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-semibold mb-6 text-center text-red-700">
          Medical Claim Form
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="border border-gray-300 px-6 py-3 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-6 py-3 text-center">
                  Download Form
                </th>
              </tr>
            </thead>
            <tbody>
              {downloadsList.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="border border-gray-300 px-4 py-3">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Download ${item.name}`}
                        className="bg-red-700 text-white font-medium px-4 py-2 rounded-md hover:bg-red-800 transition text-sm"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-gray-500 italic">Unavailable</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DownloadsPage;
