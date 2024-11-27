"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';

const content = [
  {
    "Downloads": "Medical Claim Form",
    "DLink": "https://drive.google.com/file/d/1Rx2FxIqoWBsxqFbmBTvWCl52ZLN_DfMy/view?usp=drivesdk",
  },
  {
    "Downloads": "Medical Certificate (A) : Patients who are not admitted to hospital for treatment)",
    "DLink": "https://drive.google.com/file/d/1pHaYlHR2PJW29pUAfaLTJ_fnoEOuu4Iv/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Medical Certificate (B) : Patients who are admitted to hospital for treatment)",
    "DLink": "https://drive.google.com/file/d/1hXLAzspVCDdoQt9pKQ9WuTCpOOQZPZTu/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Medical Emergency Certificate",
    "DLink": "https://drive.google.com/file/d/1K2Cjbiuhl9_X-vyvWwxqA324ry5ViiGX/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Medical Nursing Certificate",
    "DLink": "https://drive.google.com/file/d/1MUC3NgNuUT8ebaGbIx1qTRsJvMfp-KPG/view?usp=drivesdk",
    "Office order": ""
  },
];

const DownloadsPage = () => {
  return (
    <div className="mx-auto p-4 text-neutral-600 bg-white/70 flex flex-col md:flex-row">
      <div className="md:mt-14 md:mb-12 md:ml-14">
        <Sidebar />
      </div>
      <div className="mt-6 md:mt-4 w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-red-900 text-center">
          Medical Claim Form
        </h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">Download Form</th>
              </tr>
            </thead>
            <tbody>
              {content.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-xs md:text-sm">
                    {item.Downloads}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {item.DLink ? (
                      <a
                        href={item.DLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-xs md:text-sm"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
