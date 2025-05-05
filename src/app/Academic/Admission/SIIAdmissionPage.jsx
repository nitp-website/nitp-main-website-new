"use client";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faGlobe,
  faBoxArchive,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const noticesData = [
  {
    label: "Schedule for the Admission through Study in India(SII) at NIT Patna for the Academic Year 2025-26",
    link: "https://drive.google.com/file/d/1xID19xJNQasFixwF5fR4OxnD-5RzFMpj/view",
  },
];

const SIIPage = () => {
  const [activeSection, setActiveSection] = useState("Admission");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <header className="px-4 lg:px-5 h-14 flex items-center justify-between mb-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4 justify-center w-full">
            <div
              className={`cardacad cardacad1 ${
                activeSection === "Admission" ? "active" : ""
              }`}
              onClick={() => handleNavigation("Admission")}
              style={{
                backgroundColor:
                  activeSection === "Admission" ? "white" : "initial",
              }}
            >
              <FontAwesomeIcon
                icon={faUserGraduate}
                size="2x"
                color="#d62a39"
              />
              <p className="heading">Admission</p>
            </div>
            <div
              className={`cardacad cardacad1 ${
                activeSection === "Notices" ? "active" : ""
              }`}
              onClick={() => handleNavigation("Notices")}
              style={{
                backgroundColor:
                  activeSection === "Notices" ? "white" : "initial",
              }}
            >
              <FontAwesomeIcon icon={faBoxArchive} size="2x" color="#d62a39" />
              <p className="heading">Notices</p>
            </div>
          </div>
        </div>
      </header>
      <div className="text-black mb-10">
        {activeSection === "Admission" && (
          <section className=" text-black">
            <div className="admission-info">
              <h1 className="section-title-heading text-red-800 ">
                Admission in UG/PG/PhD programme through Study In India (SII)
              </h1>
              <h2 className="section-title text-red-950">
                Admission Requirements
              </h2>
              <div className="requirements-container">
                <div className="requirement">
                  <h3>Minimum Qualifications</h3>
                  <ul>
                    <li className="pt-3">
                      <strong>
                        B.Tech/DD(B.Tech+M.Tech)/B.Arch Programme:
                      </strong>{" "}
                      PCM with 65% or Diploma in Relevant branch with 65% Valid
                      JEE(Main) score or Institute level Written Test/Interview
                    </li>
                    <li className="pt-2">
                      <strong>M.Tech/M.Arch/MURP Programme:</strong> UG in any
                      branch with 65% along with Valid GATE Score in relevant
                      GATE paper or Institute level Written Test/Interview
                    </li>
                    <li className="pt-2">
                      <strong>PhD:</strong> PG in any branch with 65% along with
                      Valid GATE Score in relevant GATE paper or Institute level
                      Written Test/Interview
                    </li>
                  </ul>
                </div>

                <div className="requirement">
                  <h3 className="section-title text-red-950">
                    Admission Schedule
                  </h3>
                  <ul>
                    <li>Last date of registration: 25 June 2024</li>
                    <li>
                      Last date of Scrutiny of applications (select/Reject): 27
                      June 2024, 5 PM
                    </li>
                    <li>
                      Missing documents to be uploaded: 28 June 2024, 5 PM
                    </li>
                    <li>
                      Last date of confirmation for sending admission letter: 28
                      June 2024
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="section-title pt-9 text-red-950">Course Fees</h2>

              <table className="course-fees">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Annual Tuition Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B.Tech / BArch / MTech / March / MURP / PhD</td>
                    <td>
                      <div className="fee-container">
                        <div>SAARC Country: $5000 per annum</div>
                        <div>Non-SAARC Country: $8000 per annum</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Annual Tuition Fee*</td>
                    <td>
                      <div className="fee-container">
                        <div>SAARC Country: $6779 per annum</div>
                        <div>Non-SAARC Country: $9779 per annum</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Miscellaneous Cost (if any)</td>
                    <td>$100 for all</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex mt-4">
                <h1 className="mt-4 ml-16 font-bold">
                  International Student Registration -
                </h1>
                <a
                  href="https://www.studyinindia.gov.in/admission/registrations "
                  className="  text-red-700 font-bold py-2 px-4 rounded-lg shadow-md  ml-5 mt-2 mb-3"
                >
                  Click Here
                </a>
              </div>
            </div>
          </section>
        )}

        {activeSection === "Notices" && (
          <section className="w-full max-w-7xl mx-auto px-4 py-8 mt-5">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
              Notices
            </h1>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#421010] text-white">
                    <th className="text-left px-6 py-4 font-semibold">
                      Document
                    </th>
                    <th className="text-center px-6 py-4 font-semibold w-48">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {noticesData.length > 0 ? (
                    noticesData.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="text-left px-6 py-4 text-gray-800">
                          {item.label}
                        </td>
                        <td className="text-center px-6 py-4">
                          {item.link ? (
                            <a
                              href={item.link}
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
                      <td
                        colSpan="3"
                        className="text-center px-6 py-4 text-gray-500"
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SIIPage;
