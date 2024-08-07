import React from 'react';

const DocumentsTable = () => {

     const dataUG= [
      {
       link:
        "http://web.nitp.ac.in/downloads/firstyear/Curricula%202022%20_B.Tech,%20B.Arch%20and%20Dual%20Degree%20Programmes.pdf",
       para:
        "UG_Curricula_2022(Effective from academic session 2021-22 and onwards)",
      },
      {
       link:
        "http://web.nitp.ac.in/downloads/firstyear/UG%20Program%20Curricula%20Approved%20in%2032nd%20Senate%20on%2021092020-1.pdf",
       para:
        "UG Curricula 2020. (Application for Academic Session 2020-21 and onward)",
      },
      {
       link:
        "http://web.nitp.ac.in/downloads/firstyear/UG%20Regulation%20&%20Curiculla%20amended%20upto%2018th%20Senate%20with%20effect%20from%20session%202016-17.pdf",
       para:
        "UG REGULATION 2016. (to be effective from the Academic session 2016-17 and onwards)",
      },
      {
       link: "http://web.nitp.ac.in/downloads/firstyear/UG%20Curricula%202013.pdf",
       para: "UG REGULATION 2013. (UG CURRICULA' 2013 FOR B.TECH, B.ARCH PROGRAM",
      },
     ]
   
     const dataPG= [
      {
       link:
        "http://web.nitp.ac.in/downloads/M.Tech%20&%20MURP%20Regulation%202013-14%20-%20Scanned%20%20copy.pdf",
       para:
        "M.Tech/MURP (PG) REGULATION 2013. ( Effective from Session 2013-14 to 2016-2017)",
      },
      {
       link:
        "http://web.nitp.ac.in/downloads/firstyear/PG%20Regulation%20&%20Curiculla%20amended%20upto%2022nd%20Senate%20with%20effect%20from%20session%202017-18.pdf",
       para:
        "M.Tech/MURP (PG) REGULATION 2017. (to be effective from the Academic session 2017-18 and onwards)",
      },
     ]
    
     const dataPhD=[
      {
       link:
        "https://drive.google.com/file/d/1c7AUJbIH3J7Bh0KBfk2lgIKFngZ5CwwF/view?usp=sharing",
       para: "PhD updated D-1 to D-10 forms",
      },
      {
       link:
        "http://web.nitp.ac.in/uploads22/Notice_Thesis printing on both sides_19_10_22.pdf",
       para: "Notice regarding printing of Ph.D thesis on both sides of the paper",
      },
      {
       link:
        "http://web.nitp.ac.in/uploads/Notice%20regarding%20DSC_02_03_2020.jpg",
       para:
        "Notice: PhD Supervisor will be Chairman DSC irrespective of admission date",
      },
      {
       link: "http://web.nitp.ac.in/uploads/Ph.D%20Regulation%202018-(FINAL).pdf",
       para: "Ph.D. REGULATION",
      },
      {
       link:
        "http://web.nitp.ac.in/uploads/Ph.D.%20Offline%20Registration%20Form%20(Tripilicate)%20Format%20(1)%20in%20PDF.pdf",
       para: "Ph.D. Registration Form (Triplicate)",
      },
     ]
   
     const datatrans= [
      {
       link:
        "http://web.nitp.ac.in/uploads20/Declaration_copyright_transfer_certificate.pdf",
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