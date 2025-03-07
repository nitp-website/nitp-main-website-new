import React from 'react';
import { Download } from 'lucide-react';

const AnnualReportsPage = () => {
  const AnnualReports = [
    {
      heading: "Annual Reports",
      data: [
        {
          para: "Annual Report 2019-20(Hindi Version)",
          link:
            "https://drive.google.com/file/d/143anlPYa2GdEsRDNT6APGEX7RXYUgXuK/view?usp=drive_link",
        },
        {
          para: "Annual Report 2019-20(English Version)",
          link:
            "https://drive.google.com/file/d/1MnuYPPEln2UNVeYNDS137Bd9uAks6_Q-/view?usp=drive_link",
        },
        {
          para: "Annual Report 2018-19(Hindi Version)",
          link:
            "https://drive.google.com/file/d/1ibIlfkbI8tScyCfxuokrjVKYfVhr9g1S/view?usp=drive_link",
        },
        {
          para: "Annual Report 2018-19(English Version)",
          link:
            "https://drive.google.com/file/d/1CgoyEykM4YkqMMK-WbvuWfvGyQ3i_6JM/view?usp=drive_link",
        },
        {
          para: "Annual Report 2017-18",
          link:
            "https://drive.google.com/file/d/1IDk_1u0nLQw6cNBGk51aynWuXZhq4Tsb/view?usp=drive_link",
        },
        {
          para: "Annual Report 2016-17",
          link:
            "https://drive.google.com/file/d/1hz-gKnduzkMo_H8Gl-F9GMTJ9bj842d3/view?usp=drive_link",
        },
        {
          para: "Annual Report 2015-16",
          link:
            "https://drive.google.com/file/d/1yk0zhlx6E_jrVadEg_La_n8z_FRVsDF7/view?usp=drive_link",
        },
        {
          para: "Annual Report 2014-15",
          link:
            "https://drive.google.com/file/d/14ssl9RbPeXntGANv7m5UY1D4y5Yxlshz/view?usp=drive_link",
        },
        {
          para: "Annual Report 2013-14",
          link:
            "https://drive.google.com/file/d/1rKl-x5GAmWGADz2U7OvU1T5UMIaGC7jB/view?usp=drive_link",
        },
        {
          para: "Annual Report 2012-13",
          link:
            "https://drive.google.com/file/d/12ucyxJAIfwC1B3mGBHz95CUmXBeWGDlX/view?usp=drive_link",
        },
        {
          para: "Annual Report 2011-12",
          link:
            "https://drive.google.com/file/d/1MXCJJXeCI_kVc_MkveUieZPrrBuJneWg/view?usp=drive_link",
        },
        {
          para: "Annual Report 2010-11",
          link:
            "https://drive.google.com/file/d/1ILUTChm2aZ_Y45dJkllizd5IPNtH_oL8/view?usp=drive_link",
        },
        {
          para: "Annual Report 2009-10",
          link:
            "https://drive.google.com/file/d/1FoJy3nITB3j5SBzCIYTuN9H6ngK6NN-k/view?usp=drive_link",
        },
        {
          para: "Annual Report 2008-09",
          link:
            "https://drive.google.com/file/d/1Od5lXthly7izI7d_OGiL8HltmyflA4iY/view?usp=drive_link",
        },
        {
          para: "Annual Report 2007-08",
          link:
            "https://drive.google.com/file/d/1BiQszH1Z_x7ntx8Jw0GiQJrmW1ofYGei/view?usp=drive_link",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        {AnnualReports.map((report, reportIndex) => (
          <div key={reportIndex}>
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
              {report.heading}
            </h1>
            <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#421010] text-white">
                    <th className="text-left px-6 py-4 font-semibold">
                      Document
                    </th>
                    <th className="text-center px-6 py-4 font-semibold w-48">
                      Download Now
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {report.data.map((item, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="text-left px-6 py-4 text-gray-800">
                        {item.para}
                      </td>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnualReportsPage;