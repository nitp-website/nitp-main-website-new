import React from "react";
import { Download } from "lucide-react";

const Syllabus = {
  "B.Tech and Dual Degree": {
    url: "https://drive.google.com/drive/folders/1Dg-6ZXhk33eQmyxrShkBKFXX1tU7uW5I",
  },
  "MCA (AI and IoT)": {
    url: "https://drive.google.com/drive/folders/1JcglNm6uYu9WMQLe3p76uLwbc7xXSjM4",
  },
  "MCA (Data Science and Informatics)": {
    url: "https://drive.google.com/drive/folders/1cnvZcBMpWVfj6CmWRp1ThxUqk0Hl8eCF",
  },
  "M.Tech (Data Science and Engineering)": {
    url: "https://drive.google.com/drive/folders/1_qdZhMWZf_dyX0_xphs4vYGfpJiO-PEv",
  },
  "M.Tech (Cyber Security)": {
    url: "https://drive.google.com/drive/folders/1NLX3Sul-RJO-gYX9R9EMGNgMNI2ii_Iz",
  },
  "Ph.D.": {
    url: "",
  },
};

const CSESyllabuspage = () => {
  const syllabusArray = Object.entries(Syllabus).map(([title, { url }]) => ({
    para: title,
    engineering: url,
    overall: url, // Placeholder: same link for both
  }));

  return (
    <div className="py-6">
      <div className="w-full xs:px-0 md:w-[90%] mx-auto">
        <h2 className="text-center text-4xl text-red-700 mb-6">Syllabus</h2>

        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#421010] text-white">
              <th className="text-left px-6 py-4 font-semibold">Program</th>
              <th className="text-center px-6 py-4 font-semibold w-48">
                Syllabus
              </th>
            </tr>
          </thead>
          <tbody>
            {syllabusArray.length > 0 ? (
              syllabusArray.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="text-left px-6 py-4 text-gray-800">
                    {item.para}
                  </td>
                  <td className="text-center px-6 py-4">
                    {item.engineering ? (
                      <a
                        href={item.engineering}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    ) : (
                      <p className="text-gray-500">Not Available</p>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center px-6 py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CSESyllabuspage;
