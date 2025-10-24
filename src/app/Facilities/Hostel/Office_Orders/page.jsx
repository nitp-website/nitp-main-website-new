import React from 'react'
import { Download } from 'lucide-react';  

const HostelOfficeOrders = () => {
  const dataOdd = [
    {
      link: "https://drive.google.com/file/d/18WcQeCvuQnYInXmnQh0bgPuV1tADe9VR/view",
      para: "Office Order for Anti-Ragging Committee for the session 2025-26",
    },
    {
      link: "https://drive.google.com/file/d/11m0cBdsZMovPX5yAocJ8UEVpZts00MV_/view",
      para: "Notification for Anti-Ragging Squad for Hostel 2025-26",
    }
  ];

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Office Orders
        </h1>
        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#421010] text-white">
                <th className="text-left px-6 py-4 font-semibold">
                  Document
                </th>
                <th className="text-center px-6 py-4 font-semibold w-48">
                  Download Now
                </th>
              </tr>
            </thead>
            <tbody>
              {dataOdd.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                >
                  <td className="text-left px-6 py-4 text-gray-800">
                    {item.para}
                  </td>
                  <td className="text-center px-6 py-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HostelOfficeOrders