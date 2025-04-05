import React from 'react';
import { Download } from 'lucide-react';

const DocumentsTable = () => {
  const data = [
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
        "https://drive.google.com/file/d/1qM6BOW8YP31Wy2eWvJ6uyzYvPbDbJfSi/view?usp=drive_link",
    },
    {
      para: "2-SOP to issue Institute Leaving/Transfer Cum Migration Certificate",

      link:
        "https://drive.google.com/file/d/18Np6gdfMuJoJKgZbKUy8zIh5D3YDR8Sw/view?usp=drive_link",
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
        "https://drive.google.com/file/d/14yzsDNeIUsbrY6IY1uXRES323Bvww6j3/view?usp=drive_link",
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
  const phd = [
    {
      para: "1-Format of Application Undertaking to be submitted by M. Tech/MURP/Ph.D Scholar",
      link: "https://drive.google.com/uc?export=download&id=1g5EKJIpNhLeUNqfioKYzaWTPra8jz3Kr",
      doclink: "https://docs.google.com/document/d/1td9vx4ajEs91zwnmpHPC82aClFj9jEkx/export?format=docx",
      filename: "Application_Undertaking"
    },
    {
      para: "2-Format of Application Choice of Ph.D Supervisor",
      link: "https://drive.google.com/uc?export=download&id=1CoHol7qGM6UexBx87s4-mPNGn3c-9vl4",
      doclink: "https://docs.google.com/document/d/1PuRNgwS1hxEmmXgvr_uZ9L4QHSVOzhS_/export?format=docx",
      filename: "Choice_of_Ph.D_Supervisor"
    },
    {
      para: "3-Format of Course Work Registration Form [Ph.D]",
      link: "https://drive.google.com/uc?export=download&id=1KkZ_M3_oGDL_K245pdEy_80DO8_0Gpng",
      doclink: "https://docs.google.com/document/d/1e-CH3TL08IwgRZ5bCBHJhbYieHOq8KmB/export?format=docx",
      filename: "Course_Work_Registration_Form"
    },
    {
      para: "4-Format of List of Publications Based on Ph. D. Research Work",
      link: "https://drive.google.com/uc?export=download&id=17IfUmicvFCiK5RVeOuQpl3DpecSjrVUw",
      doclink: "https://docs.google.com/document/d/1cHIr-0rfFVMWKG8lLuM8jDIW-U-_pgZZ/export?format=docx",
      filename: "List_of_Publications"
    },
    {
      para: "5-Format of Report of the PhD thesis Examiner",
      link: "https://drive.google.com/uc?export=download&id=1jHjC71_meJ4u-KYXOeqDKKtVBCLWitY8",
      doclink: "https://docs.google.com/document/d/1Yp4KTaG6zXGHwAklHlXI5ww4PfNkB7GQ/export?format=docx",
      filename: "Thesis_Examiner_Report"
    },
    {
      para: "6-Format of Application Request for Change of Research Supervisor or inclusion of Additional Supervisor",
      link: "https://drive.google.com/uc?export=download&id=1Q7SqKkavqmPAzZ3SNTRJ_03zctz5pCpL",
      doclink: "https://docs.google.com/document/d/1hG6j5MVJeEsFb_-v4HGDu5GB73WLuTsV/export?format=docx",
      filename: "Change_of_Research_Supervisor"
    },
    {
      para: "7-Format of Semester Progress Application and Research Seminar Report",
      link: "https://drive.google.com/uc?export=download&id=1ls4o7n0vB04haEbk0uyS8qESKkYyXm8N",
      doclink: "https://docs.google.com/document/d/1sy7c3HsUNjA6N2RIqxWd8LPbDqNatle-/export?format=docx",
      filename: "Semester_Progress_Report"
    },
    {
      para: "8-Format of Plagiarism Report of Final Thesis",
      link: "https://drive.google.com/uc?export=download&id=12U5J3LvThzzNg5Oob5SIBtiVkzSS59yf",
      doclink: "https://docs.google.com/document/d/1RDX5jODJ9CT5OmvITbRuftJatVZkewnu/export?format=docx",
      filename: "Plagiarism_Report"
    },
    {
      para: "9-Format of Report of Final Viva-Voce Examination Board",
      link: "https://drive.google.com/uc?export=download&id=1XFm-BTOUKubFflu1BhN6GK57lU3Ug9gr",
      doclink: "https://docs.google.com/document/d/1tafbYzUohCZ3AtlMMkkoE_fXwIXTWFfB/export?format=docx",
      filename: "Viva_Voce_Report"
    },
    {
      para: "10-Format of Application Form for Enhancement of Scholarship",
      link: "https://drive.google.com/uc?export=download&id=1FhT6tnZqF2Lq4orVwL3nBp4S8k6Mvm26",
      doclink: "https://docs.google.com/document/d/1tl7gNTrexOtAfb7NWsa5gxccpJTt5-5l/export?format=docx",
      filename: "Scholarship_Enhancement_Form"
    },
  ];

  const SingleDownloadTable = ({ data, title }) => (
    <>
      {title && (
        <h2 className="text-xl font-bold mb-6 text-red-950 text-center">{title}</h2>
      )}
      <div className="overflow-hidden rounded-lg shadow-md border border-gray-100 mb-8">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#421010] text-white">
              <th className="text-left px-6 py-4 font-semibold">Format</th>
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
                <td className="text-left px-6 py-4 text-gray-800">{item.para}</td>
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

  const DualDownloadTable = ({ data, title }) => (
    <>
      {title && (
        <h2 className="text-xl font-bold mb-6 text-red-950 text-center">{title}</h2>
      )}
      <div className="overflow-hidden rounded-lg shadow-md border border-gray-100 mb-8">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#421010] text-white">
              <th className="text-left px-6 py-4 font-semibold">Format</th>
              <th className="text-center px-6 py-4 font-semibold w-48">PDF</th>
              <th className="text-center px-6 py-4 font-semibold w-48">DOC</th>
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
                <td className="text-left px-6 py-4 text-gray-800">{item.para}</td>
                <td className="text-center px-6 py-4">
                  <a
                    href={item.link}
                    download={`${item.filename}.pdf`}
                    className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    PDF
                  </a>
                </td>
                <td className="text-center px-6 py-4">
                  <a
                    href={item.doclink}
                    download={`${item.filename}.docx`}
                    className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    DOC
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
          Format of Official Documents
        </h1>
        
        <SingleDownloadTable data={data} />
        <DualDownloadTable data={phd} title="PhD" />
      </div>
    </div>
  );
};

export default DocumentsTable;
