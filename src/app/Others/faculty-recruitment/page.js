// src/app/Others/faculty-recruitment/page.js

'use client';
import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';

const RecruitmentProcess = () => {
  const posts = [
    {
      title: "Assistant Professor Grade-II (on Contract Basis)",
      level: "Level-10 (Entry pay ₹70,900/-) (Pre-revised pay in PB-3, AGP ₹ 6000)",
      vacancies: "Total Vacancies: [UR:10, EWS:02, OBC-NCL:07, SC:04, ST:07]"
    },
    {
      title: "Assistant Professor Grade-I",
      level: "Level-12 (Entry pay ₹1,01500/-) (Pre-revised pay in PB-3, AGP ₹ 8000)",
      vacancies: "Total Vacancies: [UR:04, OBC-NCL:04, SC:01, ST:01]"
    },
    {
      title: "Associate Professor",
      level: "Level-13A2 (Entry Pay ₹1,39,600/-) (Pre-revised pay in PB-4, AGP ₹ 9500)",
      vacancies: "Total Vacancies: [UR:03, OBC-NCL:03, SC:01, ST:01]"
    },
    {
      title: "Professor",
      level: "Level-14A (Entry pay ₹1,59,100/-) (Pre-revised pay in PB-4, AGP ₹ 10500)",
      vacancies: "Total Vacancies: [UR:02, OBC-NCL:02, SC:01, ST:01]"
    }
  ];

  const advertisementLink = "https://drive.google.com/file/d/1EpGdiFn6uNhsCyC20J3DRKEck3bIAiq1/view?usp=drivesdk";
  
  return (
    <div className="bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-950 text-center">
          Advertisement For Faculty Positions March 2025
        </h1>

        {/* Registration Button */}
        {/* <div className="flex justify-center mb-8">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium border-2 border-blue-700"
          >
            For Registration - Click Here
          </Link>
        </div> */}

        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100 mb-8">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#421010] text-white">
                <th className="text-left px-6 py-4 font-semibold">Name of Post</th>
                <th className="text-left px-6 py-4 font-semibold">Level of Pay & Vacancies</th>
                <th className="text-center px-6 py-4 font-semibold w-1/4">Documents</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index} 
                    className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}>
                  <td className="text-left px-6 py-4 text-gray-800">
                    {post.title}
                  </td>
                  <td className="text-left px-6 py-4 text-gray-800">
                    <div>
                      <p className="mb-2">{post.level}</p>
                      <p>{post.vacancies}</p>
                    </div>
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
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-red-950 mb-4">Important Notes:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Out of total vacancies indicated, Posts are reserved for PwD as per GoI norms</li>
            <li>The candidate must have prescribed credit-points.</li>
            <li>Detailed information is available on subsequent pages of the advertisement.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
