import React from 'react';
import { Download } from 'lucide-react';

const FeeStructureTable = () => {
  const phdmca = [
    { name: 'PhD: Fee Structure', 
      link: 'https://drive.google.com/file/d/1b6bsHkVHfPa0gsG3Z9vhUKrsrGb3Sw4h/view' },
    { name: 'Fee structure for MCA programme (3 years) Regular.',
      link: 'https://drive.google.com/file/d/1lqdJOpCSKd3qby9H91XhE8vefpIr4hBs/view?usp=drivesdk' },
    { name: 'Fee structure for MCA programme (3 years)  Self-financed.',
      link: 'https://drive.google.com/file/d/1lqWSLl3w1NNDKf9TtrIA5MZH4OohReY-/view?usp=drivesdk' },
  ];

  const ug = [
    { name: 'Fee Structure  2024-25 onwords',
      link: 'https://drive.google.com/file/d/1MhS_UIYkOF2G3h0ms_kk8ZRjidr0IvGZ/view?usp=sharing' },
    { name: 'fee structure effective from session 2023-24 and onwards',
      link: 'https://drive.google.com/file/d/10zxZd3mxCp-ypZhgAY1ShcagD_NweXbe/view?usp=drivesdk' },
    { name: 'Fee refund policy notification', 
      link: 'https://web.nitp.ac.in//uploads23/UG%20Refund%20Policy%20Notification.pdf' },
    { name: 'Fee Structure (2018-19)', 
      link: 'http://web.nitp.ac.in/uploads/Fee_Structure_All.pdf' },
    { name: 'UG/PG Dual Degree: Fee notification for B.Tech and M.Tech Dual Degree',
      link: 'http://web.nitp.ac.in/uploads22/FeeNotification_Dual.pdf' },
  ];

  const pg = [
    { name: 'Fee Structure',
      link: 'https://drive.google.com/file/d/1qSQMYVRWFoWXad4Z765LtsPMXBofYKzK/view' },
    { name: 'Revised fee component for M.Tech./M.Arch/MURP Programme from the Academic Session 2021-22 onwards', 
      link: 'http://web.nitp.ac.in/uploads20/Fee%20Notification%2026.04.2021-26.04.2021.pdf' },
    { name: 'Fee Structure for M.Tech./M.Arch/MURP for (Jan-June\'2021)', 
      link: 'http://web.nitp.ac.in/uploads20/Notification.pdf' },
  ];

  const TableComponent = ({ data, title }) => (
    <>
      {title && (
        <h2 className="text-xl font-bold mb-6 text-red-950 text-center">{title}</h2>
      )}
      <div className="overflow-hidden rounded-lg shadow-md border border-gray-100 mb-8">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#421010] text-white">
              <th className="text-left px-6 py-4 font-semibold">Fee Structure</th>
              <th className="text-center px-6 py-4 font-semibold w-48">Download Now</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="text-left px-6 py-4 text-gray-800">{item.name}</td>
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
    </>
  );

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Fee Structure
        </h1>
        
        <TableComponent data={ug} title="UG" />
        <TableComponent data={pg} title="PG" />
        <TableComponent data={phdmca} title="PhD & MCA" />
      </div>
    </div>
  );
};

export default FeeStructureTable;
