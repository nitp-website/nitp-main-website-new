import React from 'react';

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
    <div className='text-black mt-14 mb-14 mx-5 md:mx-20 '>
      <h1 className='text-2xl md:text-3xl font-extrabold text-red-900 text-center pl-5 pr-5'>
        NIT Act and Statutes
      </h1>
      <table className='min-w-full mt-8 border border-red-300'>
        <thead className='bg-red-200'>
          <tr>
            <th className='text-left text-neutral-800 text-xs md:text-xl pl-5 pr-5 md:pl-20 md:pr-20 border border-red-300'>Name</th>
            <th className='text-left text-neutral-800 text-xs md:text-xl pl-5 pr-5 md:pl-20 md:pr-20 border border-red-300'>View File</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index} className='border-b border border-red-300'>
              <td className='text-neutral-800 text-xs md:text-xl pl-5 pr-5 md:pl-20 md:pr-20 border border-red-300'>{doc.name}</td>
              <td className='text-neutral-800 text-xs md:text-xl pl-5 pr-5 md:pl-20 md:pr-20 border border-red-300'>
                <a href={doc.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NITActTable;