// src/app/Others/faculty-recruitment/page.js

'use client';
import React from 'react';
import { FileText } from 'lucide-react';

const NonFacultyRecruitmentProcess = () => {

  const applyLink = "https://mis.nitp.ac.in/Rec2026/";
  const sopLink = "https://drive.google.com/file/d/1czvaSUaOpkcFTyPPijr_fu3aKYo09mcj/view";

  return (
    <div className="bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-950 text-center">
          Advertisement For Non Teaching Cadre Officer / Staff Recruitment 2026
        </h1>

        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100 mb-8">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#421010] text-white">
                <th className="text-left px-6 py-4 font-semibold">Name of Posts</th>
                <th className="text-center px-6 py-4 font-semibold w-1/4">Documents</th>
                <th className="text-center px-6 py-4 font-semibold w-1/4">Important Links</th>
              </tr>
            </thead>
            <tbody>


              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Advertisement for the Post (Assistant Registrar)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1-VrNJExa8VEedIH1ftFL9zpZ9pV7WM0p/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
                <td rowSpan={6} className="text-center px-6 py-4 align-middle">
                  <div className="flex flex-col items-center justify-center gap-2 h-full min-h-[240px]">
                    <a
                      href={sopLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gray-100 text-red-900 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium w-40"
                    >
                      SOP
                    </a>
                    <a
                      href={applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      Apply
                    </a>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Advertisement for the Post (Assistant Librarian)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1kiGqV_SM6kxcosG8PmCNsehBZ8smvQCO/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Advertisement for the Post (Technician)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1VmZ6LZlUgZwuIFVXkI6WeQrBVusuf1-i/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>


              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Advertisement for the Post (Technical Assistant)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1EZhZHZiSxMMfLlPXGZflv737lDxTaKXP/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Advertisement for the Post (Junior Assistant)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1s2me-tY47tCns8yAm3Vf_GDiBIETUNdU/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Advertisement for the Post (Superintendent)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1HQ33cE31UfC-mBRRERsk97HcE3nSOiCt/view?usp=sharing"
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

export default NonFacultyRecruitmentProcess;
