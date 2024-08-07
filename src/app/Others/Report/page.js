import React from 'react';

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
    <div className="mx-auto px-4 py-8 w-11/12 md:w-4/5">
      {AnnualReports.map((report, reportIndex) => (
        <div key={reportIndex}>
          <h1 className="text-3xl font-bold mb-6 text-red-800 text-center">
            {report.heading}
          </h1>
          <table className="w-full border-collapse border border-neutral-600 bg-white rounded-lg p-0 m-0">
            <thead>
              <tr>
                <th className="text-left px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">
                  Document
                </th>
                <th className="text-center px-4 py-4 bg-gradient-to-r from-blue-200 to-cyan-200 text-black">
                  Download Now
                </th>
              </tr>
            </thead>
            <tbody>
              {report.data.map((item, index) => (
                <tr key={index}>
                  <td className="text-left px-4 py-2 border-b border-gray-300 text-black">
                    {item.para}
                  </td>
                  <td className="text-center px-4 py-3 border-b border-gray-300">
                    <a
                      href={item.link}
                      className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AnnualReportsPage;