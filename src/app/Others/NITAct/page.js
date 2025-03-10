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
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          NIT Act and Statutes
        </h1>

        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#421010] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Document</th>
                  <th className="text-center px-6 py-4 font-semibold w-48">Download Now</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="text-left px-6 py-4 text-gray-800">
                      {doc.name}
                    </td>
                    <td className="text-center px-6 py-4">
                      <a 
                        href={doc.link}
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
    </div>
  );
};

export default NITActTable;