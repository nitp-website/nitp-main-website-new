import React from 'react';

const FeeStructureTable = () => {
  const phdmca = [
    { name: 'PhD: Fee Structure', 
      link: 'https://drive.google.com/file/d/1b6bsHkVHfPa0gsG3Z9vhUKrsrGb3Sw4h/view' },
    { name: 'Fee structure for MCA programme (3 years) Regular.',
      link: 'https://drive.google.com/file/d/1lqdJOpCSKd3qby9H91XhE8vefpIr4hBs/view?usp=drivesdk' },
    { name: 'Fee structure for MCA programme (3 years)  Self-financed.',
      link: 'https://drive.google.com/file/d/1lqWSLl3w1NNDKf9TtrIA5MZH4OohReY-/view?usp=drivesdk' },

  ];
   const ug=[
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
   const pg=[
    { name: 'Fee Structure',
       link: 'https://drive.google.com/file/d/1qSQMYVRWFoWXad4Z765LtsPMXBofYKzK/view' },
    { name: 'Revised fee component for M.Tech./M.Arch/MURP Programme from the Academic Session 2021-22 onwards', 
      link: 'http://web.nitp.ac.in/uploads20/Fee%20Notification%2026.04.2021-26.04.2021.pdf' },
    { name: 'Fee Structure for M.Tech./M.Arch/MURP for (Jan-June\'2021)', 
      link: 'http://web.nitp.ac.in/uploads20/Notification.pdf' },
 
   ];
  return (
    <div className=" md:mx-auto px-4 py-8 w-4/5">
      <h1 className="text-3xl font-bold mb-6 text-red-800 text-center">Fee Structure</h1>
      <h1 className="text-xl mt-3 font-bold mb-6 text-neutral-800 text-center">UG</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Fee Structure</th>
            <th className="text-center w-[10vw] px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {ug.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-2 py-2 border-b border-gray-300 text-black">{item.name}</td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-xl mt-3 font-bold mb-6 text-neutral-800 text-center">PG</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Fee Structure</th>
            <th className="text-center w-[10vw] px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {pg.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.name}</td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-xl mt-3 font-bold mb-6 text-neutral-800 text-center">PhD & MCA</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Fee Structure</th>
            <th className="text-center w-[10vw] px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {phdmca.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.name}</td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeStructureTable;
