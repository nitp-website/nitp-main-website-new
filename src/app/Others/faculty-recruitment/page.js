// src/app/Others/faculty-recruitment/page.js

'use client';
import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';

const RecruitmentProcess = () => {

  const advertisementLink = "https://drive.google.com/file/d/16v2OsI19FGdFGJa02mUAg6HTo_Zbk3-Q/view";
  const sopLink="https://drive.google.com/file/d/13eb1I3HKKwwD5WhvfuswAQVx3yNEgqOB/view"
  return (
    <div className="bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-950 text-center">
          Faculty Positions
        </h1>

        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100 mb-8">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-[#421010] text-white">
                <th className="text-left px-6 py-4 font-semibold">Name of Posts</th>
                <th className="text-center px-6 py-4 font-semibold w-1/4">Documents</th>
              </tr>
            </thead>
            <tbody>

           <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                   Interview Schedule for Candidates Eligible for Interview for the Post of Assistant Professor (Grade II), Pay Level 11 (AGP: ₹7,000) (Only for Internal Faculty), in Various Departments
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1C1iMdtlvqCDxh9Qdwusc5U9-1pG-yyeU/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>

                        
            <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                 Interview Schedule for Candidates Eligible for Interview for the Posts of Professor of Practice and Associate Professor of Practice in Various Departments at NIT Patna.
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/15C1vMxTGIMgAi-zJZOaldHW2u6VlL4vG/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>



    
           <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                 Revised Interview Schedule for Candidates Who Became Eligible for Stage III in Various Departments
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1gdOZk0Zk2r19k2QKyHwqk549shInOGsf/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>

                        
       <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                 Advertisement for Faculty Recruitment to the Post of Assistant Professor (Grade II), Pay Level 11 (AGP: ₹7,000) (Only for Internal Faculty)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1xE7gejub95S_fzdYn3tTaLy1DF_4Nlrv/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                        
                    <Link
                      href="https://drive.google.com/file/d/1eqqMU4ctlceBvaED1mFNBu3HfIOZqczL/view?usp=sharing"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      SOP
                    </Link>
                        
                      <Link
                      href="https://forms.gle/JUFniPtJBgM3ypyQ8"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Apply Here
                    </Link>
                        
                     <Link
                      href="/Others/faculty-recruitment/annexures1"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Annexures
                    </Link>    
                        
                  </div>
                </td>
              </tr>

                        

       <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                  Schedule for Presentation of the candidates Shortlisted for Stage-II assessment for the post of Assistant Professor (Grade-II) Pay Level-10/AGP: Rs. 6000 in various Departments 
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1u1f37XApCTQ9X7Y55V3H4yNyJ2XRCLhD/view?usp=sharing"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>

                        
    
          <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                 List of candidates Shortlisted for Stage-ll assessment (Presentation) for the post of Assistant Professor (Grade-ll) Pay Leve!-10/AGP: Rs. 6000 in various Departments 
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1xoxWRtaMgWvx3fZ7j-vgfG5FdRNz2zhV/view?usp=drive_link"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>
    
              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Professor, Associate Professor, Assistant Professor Grade-I, Assistant Professor Grade-II (on Contract Basis)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href={advertisementLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Advertisement
                    </a>
                    <Link
                      href="/Others/faculty-recruitment/annexures"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Annexures
                    </Link>
                  </div>
                </td>
              </tr>

              {/* <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                 SOP Faculty Recruitment (Online Application form and Related Annexures)
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href={sopLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      SOP
                    </a>
                    <Link
                      href="/Others/faculty-recruitment/SOP/annexures"
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Annexures
                    </Link>
                  </div>
                </td>
              </tr> */}

              <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                    Corrigendum to Advertisement for Faculty Positions 
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/uc?



export=download&id=1kBRuNhxo8gm-Zz-balhXd4ByJjjJETV4"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>

                           <tr className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                <td className="text-left px-6 py-4 text-gray-800">
                  <p className="leading-relaxed">
                     Advertisement for recruitment of Professor/Associate Professor of Practice at NIT Patna
                  </p>
                </td>
                <td className="text-center px-6 py-4">
                  <div className="flex flex-col items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/1KLw2t70rzWy0M4_11i8YszUR4uVOxBmI/view?usp=drive_link"
                      download
                      className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium w-40"
                    >
                      <FileText className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </td>
              </tr>

                        
                        
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
