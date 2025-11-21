"use client"
import React, { useState } from "react";
import Link from "next/link";
import AdmissionsSidebar from "./Sidebar"
import { 
  GraduationCap, 
  Settings,
  Frown,
  BookOpen,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
 import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const admissionData = {
  btech: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2025 admissions",
        image:"https://mis.nitp.ac.in/admission/images/Header.jpg",
        link:"https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink:"https://drive.google.com/file/d/1pmD3CpyFUdmyhIEmr3YtdSqgakAUl6jA/view"
      },
      {
        name: "JoSAA",
        image: "https://cdnbbsr.s3waas.gov.in/s313111c20aee51aeb480ecbd988cd8cc9/uploads/2022/09/2022091261.png",
        link: "https://josaa.nic.in",
        description: "Joint Seat Allocation Authority for IITs, NITs, IIITs, and Other GFTIs"
      },
      {
        name: "DASA",
        image: "https://dasanit.org/dasa2025/images/dasa_new.png",
        link: "https://www.dasanit.org",
        description: "Direct Admission of Students Abroad for NRIs and International Students"
      },
    ],
    notices: [
      {
        title: "Admission link is live (18/08/2025; 3 PM to 23/08/2025) for those who have confirmed their seat during JoSAA-2025 counselling and have not participated in CSAB special Round. Same Admission link will be used for those who have participated in CSAB special round and confirmed their seat during CSAB special round from live from 20/08/2025 to 23/08/2025.",
        date: "2025-08-18",
        content: " UG Admission",
        href:""
      },
      {
        title: "Notice regarding the schedule of the Orientation programme and commencement of classes for newly admitted UG students.",
        date: "2025-08-02",
        content: " UG Admission",
        href:"https://drive.google.com/file/d/1wUoxMAfqSBmz1-E7j8QvFK_Ywgcb-JoC/view?usp=sharing"
      },
      {
        title: "Physical reporting notice for Admission to B.Tech./B.Arch./Dual Degree (B.Tech+M.Tech) Programmes through JoSAA/CSAB/DASA/Study in India (SII)-2025",
        date: "2025-07-25",
        content: "UG Admission",
        href:"https://drive.google.com/file/d/1Nd4LmG-jk-L-H4SoV9lH2uTzww_pHM21/view?usp=sharing"
      },
      {
        title: "Physical reporting schedule for admission to UG Programme through JoSAA/CSAB/DASA/SII for the Academic year 2025-26",
        date: "2025-07-10",
        content: "UG Admission",
        href:"https://drive.google.com/file/d/1Evk3oz1InhdbUPRK9isTvncuXhBT7P4I/view"
      }
      // {
      //   title: "DASA 2023 Important Dates",
      //   date: "2023-05-20",
      //   content: "DASA application deadline extended to June 10th for international candidates."
      // }
    ]
  },
  mtech: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2025 admissions",
        image:"https://mis.nitp.ac.in/admission/images/Header.jpg",
        link:"https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink:"https://drive.google.com/file/d/1pmD3CpyFUdmyhIEmr3YtdSqgakAUl6jA/view"
      },
      {
        name: "CCMT",
        image: "https://cdnbbsr.s3waas.gov.in/s301894d6f048493d2cacde3c579c315a3/uploads/2022/02/2022022590.png",
        link: "https://ccmt.admissions.nic.in",
        description: "Centralized Counselling for M.Tech/M.Arch/M.Plan Admissions"
      },
    ],
    notices: [
      {
        title: "Notice regarding the schedule of commencement of classes for newly admitted PG/MCA/Ph.D. students",
        date: "2025-08-01",
        content: "Notice regarding the schedule of commencement of classes for newly admitted PG/MCA/Ph.D. students",
        href:"https://drive.google.com/file/d/1rpNmcxqzTfzoonelUydZLel6bMEZ-K_k/view"
      },
       {
        title: "Physical reporting notice for admission to M.Tech/M.Arch/MURP through CCMT 2025 and DRDO Sponsored candidates",
        date: "2025-07-24",
        content: "PG Admission",
        href:"https://drive.google.com/file/d/1FctrG7liIhq3rQO7ViRKYFrs6PYeAjFh/view?usp=sharing"
      },
        {
        title: "Physical reporting schedule for admission to PG Programme through CCMT and NIMCET for the Academic year 2025-26",
        date: "2025-07-10",
        content: "PG Admission",
        href:"https://drive.google.com/file/d/1xUpA4rWNtrHlTEzRxI_AEwHPjkyIzN5z/view"
      }
    ]
  },

  phd: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2025 admissions",
        image:"https://mis.nitp.ac.in/admission/images/Header.jpg",
        link:"https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink:"https://drive.google.com/file/d/1pmD3CpyFUdmyhIEmr3YtdSqgakAUl6jA/view"
      },
      {
        name: "PhD Admissions NITP Portal",
        image: "https://mis.nitp.ac.in/AdmissionPHD/images/Header.jpg",
        link: "https://mis.nitp.ac.in/AdmissionPHD/Default.aspx",
        // description: "Centralized Counselling for M.Tech/M.Arch/M.Plan Admissions"
      },
    ],
    notices: [
      //  {
      //   title: "Physical reporting notice for admission to PhD ( July_Dec'2025)",
      //   date: "2025-07-24",
      //   content: "PhD Admission",
      //   href:"https://drive.google.com/file/d/1VpDmpYqowP6kqoP1ZVyGd0gBwSqiJ9PO/view?usp=sharing"
      // },

      //  {
      //   title: "List of Eligible Candidates for PhD admission July-Dec'2025",
      //   date: "2025-07-24",
      //   content: "PhD Admission",
      //   href:"https://drive.google.com/file/d/1X8zagb-MA7rEJOlJLpJIuXE5hJNo3J2B/view?usp=sharing"
      // },

      
      //  {
      //   title: "Provisional list of candidates for Interview to PhD Program(July-Dec'2025)",
      //   date: "2025-07-21",
      //   content: "PhD Admission",
      //   href:"https://drive.google.com/file/d/1pP42caNC3qgjX19mba9E1hyAWD2boavY/view?usp=sharing"
      // },
      // {
      //   title: "List of Provisionally Eligible Candidates for Admission Test for PhD Admission(July-Dec 2025 semester)",
      //   date: "2025-07-16",
      //   content: "PhD Admission",
      //   href:"https://drive.google.com/file/d/1IyO4eewagzeUitqI-3YXCNjirFwmDedt/view"
      // },
      {
        title: "Applications are invited for admission to the Ph.D. programme, Academic Year 2025-26 (Even Semester: Jan–June 2026). Last date: 30th December 2025",
        date: "2025-11-21",
        content: "PhD Admission",
        href:"https://drive.google.com/file/d/1LF_8jQygx-Xp4xFP51m0KCYDfHmNlMW8/view?usp=sharing"
      }
      //     {
      //   title: "SOP for PhD admission Academic Year 2025-26.",
      //   date: "2025-06-10",
      //   content: "PhD Admission",
      //   href:"https://drive.google.com/file/d/1FGeVnEinF1Fp5pTHTPNcZUbskSfyyj5S/view?usp=sharing"
      // }
    ]
  },

  mca: {
    portals: [
     {
        name: "SOP and Admission Form link for the Academic Year 2025 admissions",
        image:"https://mis.nitp.ac.in/admission/images/Header.jpg",
        link:"https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink:"https://drive.google.com/file/d/1pmD3CpyFUdmyhIEmr3YtdSqgakAUl6jA/view"
      },
      {
        name: "NIMCET",
        image: "https://cdnbbsr.s3waas.gov.in/s33e6260b81898beacda3d16db379ed329/uploads/2025/03/2025031961.png",
        link: "https://nimcet.admissions.nic.in/",
        description: "Centralized Counselling for MCA Admissions"
      },
    ],
    notices: [
      {
        title: "Notice regarding the schedule of commencement of classes for newly admitted PG/MCA/Ph.D. students",
        date: "2025-08-01",
        content: "Notice regarding the schedule of commencement of classes for newly admitted PG/MCA/Ph.D. students",
        href:"https://drive.google.com/file/d/1rpNmcxqzTfzoonelUydZLel6bMEZ-K_k/view"
      },
      {
        title: "Physical reporting notice for admission to MCA through  NIMCET-2025",
        date: "2025-07-23",
        content: "Physical reporting notice for admission to MCA through  NIMCET-2025",
        href:"https://drive.google.com/file/d/1wlBUzmL-ZFq8-_4_uG20qtQFEp0qGUEo/view?usp=sharing"
      },
        {
        title: "Physical reporting schedule for admission to PG Programme through CCMT and NIMCET for the Academic year 2025-26",
        date: "2025-07-10",
        content: "PG Admission",
        href:"https://drive.google.com/file/d/1xUpA4rWNtrHlTEzRxI_AEwHPjkyIzN5z/view"
      }
    ]
  },

  study_in_india: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2025 admissions",
        image:"https://mis.nitp.ac.in/admission/images/Header.jpg",
        link:"https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink:"https://drive.google.com/file/d/1pmD3CpyFUdmyhIEmr3YtdSqgakAUl6jA/view"
      },
      {
        name: "Study in India",
        image: "https://studyinindia.gov.in/Content/images/logo_SII_new_2023_darkGlobe1.webp",
        link: "https://studyinindia.gov.in/",
        // description: "Study in India"
      },
    ],
    notices: [
        {
        title: "Admission link is live (18/08/2025; 3 PM to 23/08/2025) for those who have confirmed their seat during JoSAA-2025 counselling and have not participated in CSAB special Round. Same Admission link will be used for those who have participated in CSAB special round and confirmed their seat during CSAB special round from live from 20/08/2025 to 23/08/2025.",
        date: "2025-08-18",
        content: " UG Admission",
        href:""
      },
     {
        title: "Notice regarding the schedule of the Orientation programme and commencement of classes for newly admitted UG students.",
        date: "2025-08-02",
        content: " UG Admission",
        href:"https://drive.google.com/file/d/1wUoxMAfqSBmz1-E7j8QvFK_Ywgcb-JoC/view?usp=sharing"
      },
        {
        title: "List of provisionally shortlisted Candidates for admission through Study in India (SII) for the session 2025-26 at NIT Patna.",
        date: "2025-06-30",
        content: "List of provisionally shortlisted Candidates for admission through Study in India (SII) for the session 2025-26 at NIT Patna.",
        href:"https://drive.google.com/file/d/1cPyNk71PmxjLQ1qkgHCuLDv1EvyhYWi5/view?usp=sharing"
      },
      {
        title: "Schedule for the Admission through Study in India(SII) at NIT Patna for the Academic Year 2025-26",
        date: "2025-05-08",
        content: "Schedule for the Admission of the Academic Year 2025-26",
        href:"https://drive.google.com/file/d/12zbdMzfMwcjLybK3PNZV6R8Zyi6tfAJb/view"
      }
    ]
  }
};

const degreeMap = {
  btech: "Bachelor of Technology",
  mtech: "Master of Technology",
  mca: "Master of Computer Application",
  phd: "PhD",
  study_in_india: "Study in India"
};

function AdmissionsPage() {
  const [selected, setSelected] = useState("btech");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedNotices, setExpandedNotices] = useState({});
  const searchParams = useSearchParams();
  const initialSelected = searchParams.get("type") || "btech";
  const router = useRouter();
  const pathname = usePathname();
  useEffect(()=>{
    setSelected(initialSelected);
  },[initialSelected]);

  const toggleNotice = (index) => {
    setExpandedNotices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

function handleClick(type) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', type);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white text-red-900 relative">
      {/* Mobile menu button */}
      <div className="xl:hidden fixed top-5 left-4 z-[1001000]">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-red-600 text-white shadow-md hover:bg-red-700 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile sidebar */}
      <aside
        className={`xl:hidden fixed inset-0 z-[1001000] backdrop-blur-sm transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-80 h-full bg-gradient-to-b from-red-800 to-red-700 shadow-2xl px-6 py-8 text-white overflow-y-auto">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-red-400">Admissions Portal</h2>
          <ul className="space-y-4">
            <li
              className={`cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-md ${
                selected === "btech" ? "bg-white text-red-800 font-bold shadow-lg" : "hover:text-white"
              }`}
              onClick={() => {
                setSelected("btech");
                setMobileMenuOpen(false);
                handleClick("btech");
              }}
            >
              <span className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-3" />
                B.Tech Admissions
              </span>
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-md ${
                selected === "mtech" ? "bg-white text-red-800 font-bold shadow-lg" : "hover:text-white"
              }`}
              onClick={() => {
                setSelected("mtech");
                setMobileMenuOpen(false);
                handleClick("mtech");
              }}
            >
              <span className="flex items-center">
                <Settings className="w-5 h-5 mr-3" />
                M.Tech Admissions
              </span>
            </li>

            <li
              className={`cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-md hover:text-white ${
                selected === "mca" ? "bg-white text-red-800 font-bold shadow-lg" : "hover:text-white"
              }`}
              onClick={() => { setSelected("mca"); setMobileMenuOpen(false); handleClick("mca"); }}
            >
              <span className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-3" />
                MCA Admissions
              </span>
            </li>

            <li
              className={`cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-md hover:text-white ${
                selected === "study_in_india" ? "bg-white text-red-800 font-bold shadow-lg" : "hover:text-white"
              }`}
              onClick={() => { setSelected("study_in_india"); setMobileMenuOpen(false);handleClick("study_in_india"); }}
            >
              <span className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-3" />
                Study in india
              </span>
            </li>

            <li
              className={`cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-md  hover:text-white ${
                selected === "phd" ? "bg-white text-red-800 font-bold shadow-lg" : "hover:text-white"
              }`}
              onClick={() => { setSelected("phd"); setMobileMenuOpen(false);handleClick("phd"); }}
            >
              <span className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-3" />
                PhD Admissions
              </span>
            </li>

          </ul>
        </div>
      </aside>

      <div className="flex flex-col xl:flex-row">
      <AdmissionsSidebar />

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8 xl:ml-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-red-800 relative pb-4">
              {degreeMap[selected] || ""} Admissions
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></span>
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Notices Section */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-md p-6 border border-red-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-red-800 flex items-center">
                      <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
                      Important Notices
                    </h2>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                      <span className="animate-pulse h-2 w-2 bg-red-600 rounded-full mr-2"></span>
                      Latest Updates
                    </span>
                  </div>
                  <div className="space-y-6">
                    {admissionData[selected].notices.length > 0 ? (
                      admissionData[selected].notices.map((notice, index) => (
                        <div 
                          key={index}
                          className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-red-600 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="relative">
                            {/* Date badge */}
                            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                              {new Date(notice.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                            
                            {/* Notice icon */}
                            <div className="absolute top-4 left-4 bg-red-50 p-2 rounded-full">
                              <AlertCircle className="w-5 h-5 text-red-600" />
                            </div>
                            
                            {/* Notice content */}
                            <div 
                              className="pl-16 pr-4 pt-4 pb-4 cursor-pointer"
                              onClick={() => toggleNotice(index)}
                            >
                              <Link 
                                className="font-bold text-gray-800 hover:text-red-700 block text-sm md:text-base leading-tight mb-2 transition-colors pt-2" 
                                href={notice.href ? notice.href : "#"} 
                                target="_blank"
                              >
                                {notice.title}
                              </Link>
                              
                              <div className="flex justify-between items-center">
                                <p className="text-xs text-gray-600">
                                  {notice.content}
                                </p>                                 
                                <Link 
                                  href={notice.href ? notice.href : "#"}
                                  target="_blank"
                                  className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-800 transition-colors bg-red-50 hover:bg-red-100 py-1 px-3 rounded-full"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center p-6 bg-red-50 rounded-xl">
                        <Frown className="w-12 h-12 mx-auto text-red-400 mb-4" />
                        <p className="text-red-600">No notices available at this time.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Portals Section */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-md p-6 border border-red-100">
                  <h2 className="text-2xl font-semibold mb-6 text-red-800 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-red-600" />
                    Admission Portals
                  </h2>
                  {admissionData[selected]?.portals?.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {admissionData[selected].portals.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-red-100 group"
                        >
                          <div className="h-40 flex items-center justify-center bg-red-50 rounded-lg mb-4 p-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="max-h-full max-w-full object-contain"
                              loading="lazy"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_189b8a7a1f6%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_189b8a7a1f6%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                              }}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-center text-red-800 mb-2">{item.name}</h3>
                          <p className="text-gray-600 text-center mb-4 text-sm">{item.description}</p>

                          {item.sopLink && (
                            <div className="text-center">
                            <a
                              href={item.sopLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-sm hover:shadow-md mb-4"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View SOP
                            </a>
                          </div>
                          )}

                          <div className="text-center">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Portal
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-6 bg-red-50 rounded-xl">
                      <Frown className="w-12 h-12 mx-auto text-red-400 mb-4" />
                      <h3 className="text-xl font-semibold text-red-700 mb-2">No Admission Portals Available</h3>
                      <p className="text-red-600">
                        Currently there are no active admission portals for this category.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}





export default AdmissionsPage;
