import React from 'react';

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
      <h1 className="text-xl mt-3 font-bold mb-6 text-neutral-800 text-center">PhD</h1>
      <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg mt-4">
        <thead>
          <tr>
            <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Format</th>
            <th className="text-center px-1 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
            <th className="text-center px-1 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">Download Now</th>
          </tr>
        </thead>
        <tbody>
          {phd.map((item, index) => (
            <tr key={index}>
              <td className="text-left px-4 py-2 border-b border-gray-300 text-black">{item.para}</td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a
                  href={item.link}
                  download={`${item.filename}.pdf`}
                  className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs"
                >
                  Download PDF
                </a>

              </td>
              <td className="text-center px-4 py-3 border-b border-gray-300">
                <a
                  href={item.doclink}
                  download={`${item.filename}.docx`}
                  className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs"
                >
                  Download DOC
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