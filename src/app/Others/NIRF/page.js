"use client";

import React, { useState, useEffect } from "react";
import { Download } from 'lucide-react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        para: "NIRF Data 2024-25",
        engineering: "https://drive.google.com/file/d/1I6IGOqoRD_mch8UiSrSJ6rCTR15Ep39a/view",
        overall: "https://drive.google.com/file/d/1VcIgfFQYdH6iomXdtkjbx1374FaT5OCk/view",
      },
      {
        para: "NIRF Data 2023-24",
        engineering: "",
        overall: "https://drive.google.com/file/d/1OaR1bR1fLNddIOqD6pE_Xc_HJ8e4-_Vy/view",
      },
    ]);
  }, []);

  return (
    <div className="bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          NIRF Data
        </h1>
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#421010] text-white">
                <th className="text-left px-6 py-4 font-semibold">Document</th>
                <th className="text-center px-6 py-4 font-semibold w-48">Engineering</th>
                <th className="text-center px-6 py-4 font-semibold w-48">Overall</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                  >
                    <td className="text-left px-6 py-4 text-gray-800">{item.para}</td>
                    <td className="text-center px-6 py-4">
                      {
                        item.engineering ? (
                          <a
                            href={item.engineering}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        ) : (
                          <p className="text-gray-500">Not Available</p>
                        )
                      }
                    </td>
                    <td className="text-center px-6 py-4">
                      {
                        item.overall ? (
                          <a
                            href={item.overall}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        ) : (
                          <p className="text-gray-500">Not Available</p>
                        )
                      }
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center px-6 py-4 text-gray-500">
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

export default Page;