// src/app/Others/faculty-recruitment/annexures/page.js

'use client';
import React from 'react';
import { FileText } from 'lucide-react';

const Annexures = () => {
  const annexures = [
    { 
      id: 1, 
      name: "Annexure I (NITSER Act, 2007)", 
      link: "https://drive.google.com/file/d/1u5nISgtuyP78cG_MAoivaniXy3r2nyPl/view?usp=drivesdk" 
    },
    { 
      id: 2, 
      name: "Annexure II (First Statutes of NIT)", 
      link: "https://drive.google.com/file/d/1yPg3mcurceUDENcsnDqG_YDkblL0luye/view?usp=drivesdk" 
    },
    { 
      id: 3, 
      name: "Annexure III (MoE F.No.33-9/2011/TS.III dated 16th April 2019)", 
      link: "https://drive.google.com/file/d/1zCY0Uf3zcZ-VzLBf9--wWS27IENKka2p/view?usp=drivesdk" 
    },
    { 
      id: 4, 
      name: "Annexure IV (MoEF.No. 33-9/2011-TS.III dated 30th November 2017)", 
      link: "https://drive.google.com/file/d/1KLxAiyxHeUMwGrwrK3yvtBhPsqUZ9n0D/view?usp=drivesdk" 
    },
    { 
      id: 5, 
      name: "Annexure V (MoEF.No. 33-9/2011-TS.III dated 20th April 2018)", 
      link: "https://drive.google.com/file/d/1PEu5W3MogQBITk5QA11TVCA5ejBHyWLy/view?usp=drivesdk" 
    },
    { 
      id: 6, 
      name: "Annexure VI (MoEF.No. 33-9/2011-TS.III dated 13th September 2017)", 
      link: "https://drive.google.com/file/d/1RIp6fujRvMxTn-049eNu6eqWQZCtBm7I/view?usp=drivesdk" 
    },
    { 
      id: 7, 
      name: "Annexure VII (Gazette Notification dated 07th March 2019 of CEI (Reservation in Annexure VII Teachers’ Cadre) Ordinance, 2019)", 
      link: "https://drive.google.com/file/d/1owLv1vykSBoZktMjI74v0Ju1ZF2I-1dq/view?usp=drivesdk" 
    },
    { 
      id: 8, 
      name: "Annexure VIII (Prescribed format for Category Certificate (SC/ST/OBC-NCL/EWS/PwD))", 
      link: "https://drive.google.com/file/d/1YhRsQCALYpJJX2MLAOxMQTf_kVv8JzyF/view?usp=drivesdk" 
    },
    {
      id: 9,
      name: "Annexure IX (NIT (Amendment) Statutes 2023)",
      link: "https://drive.google.com/file/d/1XWBLB-dGWhC8FMzGmrmEppscdwC0EXex/view?usp=drive_link"
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
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                    >
                      <FileText className="w-4 h-4" />
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
};

export default Annexures;

