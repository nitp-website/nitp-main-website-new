// src/app/Others/faculty-recruitment/page.js

'use client';
import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';

const RecruitmentProcess = () => {

  const advertisementLink = "https://drive.google.com/file/d/16v2OsI19FGdFGJa02mUAg6HTo_Zbk3-Q/view";
  const sopLink="https://drive.google.com/file/d/13eb1I3HKKwwD5WhvfuswAQVx3yNEgqOB/view"
  return (
    <div className="bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-950 text-center">
          Advertisement For Faculty Positions March 2025
        </h1>

        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100 mb-8">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#421010] text-white">
                <th className="text-left px-6 py-4 font-semibold">Name of Posts</th>
                <th className="text-center px-6 py-4 font-semibold w-1/4">Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Professor, Associate Professor, Assistant Professor Grade-I, Assistant Professor Grade-II (on Contract Basis)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href={advertisementLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Advertisement
                    </a>
                    <Link
                      href="/Others/faculty-recruitment/annexures"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Annexures
                    </Link>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                 SOP Faculty Recruitment (Online Application form and Related Annexures)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href={sopLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      SOP
                    </a>
                    <Link
                      href="/Others/faculty-recruitment/SOP/annexures"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Annexures
                    </Link>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Corrigendum to Advertisement for Faculty Positions 
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1kBRuNhxo8gm-Zz-balhXd4ByJjjJETV4"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
