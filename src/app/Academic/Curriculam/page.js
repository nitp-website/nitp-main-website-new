import React from 'react';

const DocumentsTable = () => {

     const dataUG= [
      {
        link:
         "https://drive.google.com/file/d/1NLUkqhhwj_ytZL1Rq4T2pASMcKok2nEt/view?usp=sharing",
        para:
         "Notification regarding Multiple Exit option,UG.",
       },
      {
       link:
        "https://drive.google.com/file/d/1Jobn8OBYPUf1ekffjTS0ZIzXuzfQ8CNa/view?usp=sharing",
       para:
        "UG Regulation 2022(Effective from academic session 2021-22 and onwards)",
      },
      {
       link:
        "https://drive.google.com/file/d/1aW72cez0wwGQ5N29U2mj2zK2RgW682dv/view?usp=sharing",
       para:
        "UG Regulation 2020 (Effective for Academic Session 2020-21 )",
      },
      {
       link:
        "https://drive.google.com/file/d/14Q4K9hvmK9iOi2GWrh0tNsFW91R-ShwU/view?usp=sharing",
       para:
        "UG Regulation 2016 (Effective for the Academic session 2016-17 to 2019-20)",
      },
      {
       link: "https://drive.google.com/file/d/1fP3jFeeWI1E3hSSOhL6vj37TIZYzk8U2/view?usp=sharing",
       para: "UG Regulation 2013 (Effective from the Academic session 2013-14 to 2015-16)",
      },
     ]
   
    const dataPG=[
      {
       link:
        "https://drive.google.com/file/d/1MkSM_cgd1ZIF-zqUAE1TFJIf42idIpyp/view?usp=sharing",
       para: "Postgraduate Program Regulation",
      },
      
     ]

     
     const dataPhD=[
      {
       link:
        "https://drive.google.com/file/d/17IzwBvYtiyR8iEV27fXr6rBMQGHOHCeb/view?usp=sharing",
       para: "Regulation for PhD Programme",
      },
        {
       link:
        "https://drive.google.com/file/d/1c7AUJbIH3J7Bh0KBfk2lgIKFngZ5CwwF/view?usp=sharing",
       para: "PhD updated D-1 to D-10 forms",
      },
     ]
   
     const datatrans= [
      {
       link:
        "https://drive.google.com/file/d/1iytqtAcQRWSVdg_s3bbfa01dITJB5vUr/view?usp=sharing",
       para:
        "Notice: regarding Declaration and Copyright transfer certificate (UG,PG & Ph.D) required to be included in the dissertation/thesis",
      },
     
   ]

   

  return (
    <div className=" mx-auto px-4 py-8 w-11/12 md:w-4/5">
      <h1 className="text-3xl font-bold mb-6 text-red-800 text-center">Regulation & Curriculum</h1>
      <h1 className="text-xl font-bold mb-6 text-neutral-800 text-center">UG</h1>
      
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg p-0 m-0">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Document</th>
            <th className="text-center px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {dataUG.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.para}</td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      <h1 className="text-xl font-bold mb-6 text-neutral-800 text-center">PG</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg">
        <thead>
         <tr>
           <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Document</th>
            <th className="text-center px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
         </tr>
       </thead>
       <tbody>
         {dataPG.map((item, index) => (
           <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.para}</td>
             <td className="text-center px-4 py-3 border-b border-gray-300">
               <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                 Download
               </a>
             </td>
           </tr>
         ))}
       </tbody>
      </table> 
      <h1 className="text-xl font-bold mb-6 text-neutral-800 text-center">PhD</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Document</th>
            <th className="text-center px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {dataPhD.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.para}</td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className="text-xl font-bold mb-6 text-neutral-800 text-center">Notice related to Copyright transfer certificate (UG,PG & Ph.D)</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Document</th>
            <th className="text-center px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {datatrans.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.para}</td>
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

export default DocumentsTable;
