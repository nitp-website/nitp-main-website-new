import React from 'react';
import { Download } from 'lucide-react';

const NITActTable = () => {
  const documents = [
    {
      name: "Amendments in the First Statutes of National Institute of Technology (NITs)",
      link: "http://www.nitp.ac.in/downloads/NIT_Act/Amendments_First_Statutes.pdf"
    },
    {
      name: "First Statutes of NIT Act 2007",
      link: "http://www.nitp.ac.in/downloads/NIT_Act/First_Statutes_NIT_Act_2007.pdf"
    },
    {
      name: "NIT Act 2007",
      link: "http://www.nitp.ac.in/downloads/NIT_Act/NIT-ACT-2007.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-white/90 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#421010] text-center mb-8">
          NIT Act and Statutes
        </h1>
        
        <div className="overflow-hidden rounded-lg border border-red-200 shadow-sm">
          <table className="min-w-full divide-y divide-red-200">
            <thead className="bg-[#421010]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white w-32">
                  Download
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-red-200 bg-white">
              {documents.map((doc, index) => (
                <tr 
                  key={index}
                  className="hover:bg-red-50 transition-colors duration-200"
                >
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {doc.name}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#421010] hover:text-red-700 transition-colors duration-200"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
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
};

export default NITActTable;