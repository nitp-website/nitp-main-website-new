import React from "react";
import { Download } from 'lucide-react';

const EmuComplaintPage = () => {
  const format = {
    "Complaint Form": {
      document:
        "https://docs.google.com/document/d/19nTpbUfNG2ffa2bW3UtigpPfiq4apgUV/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1k-aT3M0NyGSrhkc2SaHsEFXItDhb7xdw/view?usp=sharing",
    },
  };
  const data = Object.entries(format);
  return (
    <div className="bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Complaint Form
        </h1>
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#421010] text-white">
                <th className="text-left px-6 py-4 font-semibold">Language</th>
                <th className="text-center px-6 py-4 font-semibold w-48">
                  Word
                </th>
                <th className="text-center px-6 py-4 font-semibold w-48">
                  PDF
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map(([language, files], index) => (
                  <tr
                    key={language}
                    className={`border-b hover:bg-red-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-800 capitalize">
                      {language}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {files.document ? (
                        <a
                          href={files.document}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      ) : (
                        <p className="text-gray-500">Not Available</p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {files.pdf ? (
                        <a
                          href={files.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      ) : (
                        <p className="text-gray-500">Not Available</p>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center px-6 py-4 text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmuComplaintPage;
