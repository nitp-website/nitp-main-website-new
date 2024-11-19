import React from 'react';

const CalenderTable = () => {

     const dataOdd= [
      
       {
        link:
         "https://drive.google.com/file/d/1DGBVauEQaQ1zC6iryZ41-nIPv6Gvx9em/view?usp=sharing",
        para:
         " Academic Calendar for Even(Spring) Semester, Academic Session 2024-25 ",
       },
       {
        link:
         "https://drive.google.com/file/d/1tVgQSygS8GRTZIglbVWVClasegdd6BCi/view",
        para:
         "Academic Calendar for Odd(Autumn) Semester, Academic Session 2024-25 ",
       },
      
     ]
   
    
  return (
    <div className=" mx-auto px-4 py-8 w-11/12 md:w-4/5">
      <h1 className="text-3xl font-bold mb-6 text-red-800 text-center">Academic  Calender</h1>      
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg p-0 m-0">
        <thead>
          <tr>
          <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black"></th>
            <th className=" text-center px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Open Now</th>
          </tr>
        </thead>
        <tbody>
          {dataOdd.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.para}</td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a href={item.link} className="bg-blue-400 text-white font-bold px-3 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                  Open
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>      
      
    </div>
  );
};

export default CalenderTable;
