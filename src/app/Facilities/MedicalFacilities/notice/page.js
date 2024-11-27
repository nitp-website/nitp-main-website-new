"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';

const content = [
  {
    "Downloads": "SOP",
    "DLink": "https://drive.google.com/file/d/1_6KN00R1HR6x9YfgV85XXs3ns9oZqPpY/view?usp=sharing",
    "Office order": ""
  },
  {
    "Downloads": "List of Empanelled  Hospitals",
    "DLink": "https://drive.google.com/file/d/1YC839XCnkbgAfpW9pFLqko6t135i1kD1/view?usp=drivesdk",
    "Office order": ""
  },

];

const DownloadsPage = () => {
  return (
    <div className="mx-auto p-4 text-neutral-600 bg-white/70 flex">
      <div className="mt-14 mb-12 md:mt-10  ml-14">
        <Sidebar />
      </div>
      <div className='mt-4'>

      <h1 className="text-3xl font-bold mb-6 text-red-900 text-center">Medical Claim Form</h1>
      
      <table className="table-auto border-collapse border border-gray-300 mx-0 md:mx-80">
        <thead>
          <tr>
            <th className="border border-gray-300 px-24 py-2 w-1/6">Name</th>
            <th className="border border-gray-300 px-24 py-2 w-1/12">Download Form</th>
           
          </tr>
        </thead>
        <tbody>
          {content.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 w-1/6 text center">{item.Downloads}</td>
              <td className="border border-gray-300 px-4 py-2 w-1/12 text-center">
                {item.DLink ? (
                  <a href={item.DLink} target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                    Download
                  </a>
                ) : (
                 
                    <span></span>
                )}
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DownloadsPage;
