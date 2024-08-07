import React from 'react';

const DocumentsTable = () => {
  const data=[
    
    {
     para: "Guidelines cum checklist to get process of academic document",
     link:
      "https://drive.google.com/file/d/1RWpLyN6uVWrvfQBfbhKstRRXEVsNLejk/view?usp=drive_link",
    },
    {
     para:
      "Format for issue of Grade Card / Provisional / Transcript from Exam Section",
     link:
      
      "https://drive.google.com/file/d/1AhtQCtdBLB-FG-JldD3_j8NPTsj4EONp/view?usp=drivesdk",
    },
    {
     para: "Attestation form for grade cards",
     link:
      
      "https://drive.google.com/file/d/1AjHBBA3ca9s-T_jgtocOz5EYaJOzhbHa/view?usp=drivesdk",
    },
    {
     para: "1-SOP to issue Original Degree Certificate",
    
     link:
      "https://drive.google.com/file/d/1ojThnsLJgSUHY4Zr0QCTGHdxOUvLfY6t/view?usp=sharing",
    },
    {
     para: "2-SOP to issue Institute Leaving/Transfer Cum Migration Certificate",
     
     link:
      "https://drive.google.com/file/d/1AymHBdkagkjfUfklSer4pg-3iaqlXhjN/view?usp=sharing",
    },
    {
     para:
      "3-SOP for Refund of DRCC Education Loan under Bihar Student Credit Card Scheme",
  
     link:
      "https://drive.google.com/file/d/1KXs3dru2FJZ5q_kV1h36TK6E7EkOO0n9/view?usp=drivesdk",
    },
    {
     para:
      "4-SOP for Adjustment of DRCC Education Loan under Bihar Student Credit Card Scheme",
   
     link:
      "https://drive.google.com/file/d/1t7NsBr6xqNqgUyuuxW-l-vFE35zrc3vi/view?usp=sharing",
    },
    {
 
     para: "5-SOP for Educational Verification",
    
     link:
      " https://drive.google.com/file/d/1m5VB8SMkkllmXRZjaxWi8xc8E7PMGfkB/view?usp=sharing",
    },
    {
     
     para: "6-Format of Application to Dean(Academic)",
     
     link:
      "https://drive.google.com/file/d/19ZBDsaDluGRBJO-LgBtdKYqo_8CQrbmx/view?usp=sharing",
    },
    {
 
     para: "7-Format of Application for Demand Letter",
     
     link:
      "https://drive.google.com/file/d/18F1po6Nxh7ashYBG4C4A9exOaaB5-Jy2/view?usp=sharing",
    },
    {
 
     para:
      "8-Format of Application for Fee Receipt for Bank Loan and DRCC Adjustment Only",
     
     link:
      "https://drive.google.com/file/d/1XHKMmDhheGwL67m-q42FqPMAU-a4X0Hu/view?usp=sharing",
    },
    {
     para: "9-Format of Application for Cancellation of Admission",
     link:
      "https://drive.google.com/file/d/1p60py5fKWJ_iWn9s17NCtStlhfOTRqea/view?usp=sharing",
    },
   ]

  

  return (
    <div className=" md:mx-auto px-4 py-8 w-4/5">
      <h1 className="text-3xl font-bold mb-6 text-red-800 text-center">Format of Official Documents</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Format</th>
            <th className="text-center px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
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