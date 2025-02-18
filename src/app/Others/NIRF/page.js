"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        para: "NIRF Data 2024-25",
        link: "https://drive.google.com/file/d/1SLsT-sa8sSynXtTQ-jMR5seoIsMT1Vft/view?usp=sharing",
      },
      {
        para: "NIRF Data 2023-24",
        link: "https://drive.google.com/file/d/1F85taARFc0uM-NX4Dg8CIbe8m9HwcRi1/view",
      },
    ]);
  }, []);

  return (
    <div className="text-center text-black mt-14">
      <h1 className="text-3xl font-extrabold text-red-900">NIRF Data</h1>

      {/* <h3 className="text-xl pt-8 text-red-800 font-bold">
        <span className="text-lg text-neutral-700 pb-5">Coordinator :</span> Prof. Prakash Chandra
      </h3> */}
      {/* <h4 className="text-lg text-neutral-700 pb-5">
        <span className="text-lg text-neutral-700 pb-5"> Email:</span>
        <a
          href="mailto:prakash@nitp.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl pt-8 text-red-800 font-bold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          prakash@nitp.ac.in
        </a>
      </h4> */}

      <div className="w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white flex justify-center">
        <div className="w-full max-w-4xl">
          <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg p-0 m-0 mt-4">
            <thead>
              <tr>
                <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Document</th>
                <th className="text-center w-[10vw] px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.para}</td>
                    <td className="text-center px-4 py-3 border-b border-gray-300">
                      <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                        Download
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center px-4 py-3 border-b border-gray-300 text-gray-500">No data available</td>
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
