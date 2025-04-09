'use client';
import React from 'react';
import { FileText } from 'lucide-react';

const Annexures = () => {
  const annexures = [
    { 
      id: 1, 
      name: "Annexure A -Background Details", 
      // docLink:"https://drive.google.com/file/d/1m0jzIOr2INBbWd-PQXDbTq6zQjes8uKx/view",
      docLink:"/docs/Annexure A -BackgroundDetails.docx",
      pdfLink: "https://drive.google.com/uc?export=download&id=1JEFKzbzKTWl5XSh_SBMNJKYQSx4KIPIl"
    },
    { 
      id: 2, 
      name: "Annexure-B - Credit Point Summary", 
      // docLink:"https://drive.google.com/file/d/1EQOVKXf-PXRLXjSlGi8OygnWlOcBQ4pq/view",
      docLink:"/docs/Annexure-B (Credit Point Summary).docx",
      pdfLink: "https://drive.google.com/uc?export=download&id=1-PTkeQR6wU5HPqBijaPAE9fXWqg0NiHq"
    },
    { 
      id: 3, 
      name: "Annexure-C - Carry Forward Credit Point Summary", 
      // docLink:"https://drive.google.com/file/d/1lTfCfd_lIukUi1sF73Zd0C_KxM6AbjBq/view",
      docLink:"/docs/Annexure-C(Carry Forward Credit Point Summary).docx",
      pdfLink: "https://drive.google.com/uc?export=download&id=1kLcDbPRkOUowTc1_jqE5t6tV3GZpB0X3"
    },
    { 
      id: 4, 
      name: "Annexure D - Career Highlights", 
      // docLink:"https://drive.google.com/file/d/159RYFlEF57ySGYPVn2WckdDDGKk5nPIR/view",
      docLink:"/docs/Annexure D - Career Highlights.docx",
      pdfLink: "https://drive.google.com/uc?export=download&id=1r8o1YvM1BE3X5PjbNghSHirvu49g4d7l"
    }
  ];

  return (
    <div className="bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Annexures
        </h1>
        
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#421010] text-white">
                <th className="text-left px-6 py-4 font-semibold w-24">S.No.</th>
                <th className="text-left px-6 py-4 font-semibold">Annexure</th>

                <th className="text-center px-6 py-4 font-semibold w-48">Download</th>
                <th className="text-center px-6 py-4 font-semibold w-48">DOC</th>
              </tr>
            </thead>
            <tbody>
            {annexures.map((item, index) => (
                <tr key={item.id} 
                    className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}>
                  <td className="text-left px-6 py-4 text-gray-800">{item.id}</td>
                  <td className="text-left px-6 py-4 text-gray-800">{item.name}</td>
                  <td className="text-center px-6 py-4">
                    <a
                      href={item.pdfLink}
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      PDF
                    </a>
                  </td>
                  <td className="text-center px-6 py-4">
                    <a
                      href={item.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      DOC
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

export default Annexures;
