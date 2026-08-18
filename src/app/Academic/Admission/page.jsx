"use client"
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  Settings,
  Frown,
  BookOpen,
  AlertCircle,
  ExternalLink,
  Laptop,
  Award,
  Globe,
  Library
} from 'lucide-react';
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const admissionOptions = {
  btech: { label: "B.Tech/B. Arch Admissions", icon: GraduationCap },
  mtech: { label: "M.Tech/PGPAP Admissions", icon: Settings },
  phd: { label: "PhD Admissions", icon: Award },
  mca: { label: "MCA Admissions", icon: Laptop },
  study_in_india: { label: "Study in India", icon: Globe },
  qip: { label: "QIP Admissions", icon: Library },
};
const admissionData = {
  btech: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2026 admissions",
        image: "/logo.png",
        link: "https://erp.nitp.ac.in/",
        sopLink: "https://drive.google.com/file/d/1AEJbQeqAhS0LCnU7ggD-1hlBhCTjUjn9/view?usp=drive_link"
      },
      {
        name: "JoSAA",
        image: "https://cdnbbsr.s3waas.gov.in/s313111c20aee51aeb480ecbd988cd8cc9/uploads/2022/09/2022091261.png",
        link: "https://josaa.nic.in",
        description: "Visit the portal for the Information Brochure, Schedule, Opening and Closing Ranks, Seat Matrix, and other relevant details."
      },
      
      {
        name: "DASA",
        image: "https://dasanit.org/assets/images/dasa_new.png",
        link: "https://dasanit.org",
        description: "Visit the portal for the Information Brochure, Schedule, Opening and Closing Ranks, Seat Matrix, and other relevant details."
      },
        {
        name: "CSAB Admissions Portal",
        image: "https://cdnbbsr.s3waas.gov.in/s305a70454516ecd9194c293b0e415777f/uploads/2022/08/2022081238.png",
        link: "https://CSAB.aicte.gov.in/",
        // description: "Study in India"
      },
    ],
    notices: [
           {
        title: "The admission portal link is currently live.",
        date: "2026-08-13",
        content: " UG Admission",
        href: ""
      },
           {
        title: "Student Induction Programme 2026–27 for Newly Admitted Students of B.Tech., B.Arch. & Dual Degree Programmes – Tentative Schedule (18–23 August 2026)",
        date: "2026-08-11",
        content: " UG Admission",
        href: "https://drive.google.com/file/d/1ycmbSeSFxGEWEGsUWRSpp7eHrAnZYCes/view?usp=drive_link"
      },
            
                 {
        title: "Notice for the Commencement of Classes for Newly Admitted UG Students (Academic Year 2026–27)",
        date: "2026-07-31",
        content: " UG Admission",
        href: "https://drive.google.com/file/d/1Z523SWGkvZ-jdotsNWLTjPPylSeGlKmt/view?usp=sharing"
      },
      
        {
        title: "Admissions AY 2026–27 | CSAB Special Rounds & DASA (UG) Admissions",
        date: "2026-07-20",
        content: " UG Admission",
        href: "https://drive.google.com/file/d/1Jod0hJqfxAX4wYT3wWxU67T1iQw9UhO4/view?usp=sharing"
      },
      {
        title: "Fee Structre",
        date: "2026-07-20",
        content: "UG Admission",
        href: "https://drive.google.com/file/d/1krBrlVqdOMlvzz5t7mMmW5mqmecGbLQH/view?usp=sharing"
      },
      {
        title: "Physical reporting schedule for admission to UG Programme through JoSAA/CSAB/DASA/SII for the Academic year 2026-27",
        date: "2026-07-20",
        content: "UG Admission",
        href: "https://drive.google.com/file/d/1i8x0a5taSUYaSsnlgus7wlc_Tqsa1jG1/view?usp=sharing"
      },
    ]
  },
  mtech: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2026 admissions",
        image: "/logo.png",
        link: "https://erp.nitp.ac.in/",
        sopLink: "https://drive.google.com/file/d/1_aSWr7OwjLrpekiNUzVZVxUuYo-dNiJF/view?usp=sharing"
      },
       {
        name: "CCMT",
        image: "https://cdnbbsr.s3waas.gov.in/s301894d6f048493d2cacde3c579c315a3/uploads/2022/02/2022022590.png",
        link: "https://ccmt.admissions.nic.in",
        description: "Visit the portal for the Information Brochure, Schedule, Opening and Closing Ranks, Seat Matrix, and other relevant details."
      },
    ],
    notices: [
  
      {
        title: "Notice for Start of Classes for M.Tech/MURP through CCMT 2026",
        date: "2026-07-24",
        content: "PG Admission",
        href: "https://drive.google.com/file/d/1KuCYKLAID5yWWeo7RLba-U7Kd16mK5mq/view?usp=drive_link"
      },
      {
        title: "Physical Verification notice for admission to M.Tech/MURP through CCMT 2026",
        date: "2026-07-14",
        content: "PG Admission",
        href: "https://drive.google.com/file/d/18Lc9u6HkJeD7tp3ROjmF_hBGorxKN4OY/view?usp=sharing"
      },
      {
        title: "Fee Structre",
        date: "2026-07-15",
        content: "PG Admission",
        href: "https://drive.google.com/file/d/1pnEtbYSy_OTSn98MkZivpOYXfwD_sP0S/view?usp=sharing"
      },
      
    ]
  },

  phd: {
    portals: [
      {
        name: "PhD Admissions NITP Portal",
        image: "/logo.png",
        link: "https://erp.nitp.ac.in/",
         sopLink:"https://drive.google.com/file/d/1zGO9OefmbdyK_k4KLqfK4YdrtmUNMZVw/view?usp=sharing"
      },
    ],
    notices: [
          {
        title: "List of Candidates Selected for Admission to the Ph.D. Programme Odd Semester (July–December 2026), Academic Year 2026–27",
         date: "2026-07-31",
       content: "PhD Admission",
        href: "https://drive.google.com/file/d/1oL1g_MjZ7sX-D3J2Hl0hSAfsy0dhKdsb/view?usp=sharing"
       },
        {
        title: "Physical Verification Notice with Enclosures for Ph.D. Admission (July–December 2026)",
         date: "2026-07-31",
       content: "PhD Admission",
        href: "https://drive.google.com/file/d/1FCymcp8Lx5GEa4s3-urd4yth0ukXrkTy/view?usp=sharing"
       },
      
          {
        title: "Ph.D. Fee Structure ",
         date: "2026-07-31",
       content: "PhD Admission",
        href: "https://drive.google.com/file/d/1n6AkZ0K_TXuSkzbCbvzUb8ucXV3omR5Y/view?usp=sharing"
       },
      
         {
        title: "Provisionally eligible list of candidates for PhD Interview July - Dec 2026",
         date: "2026-07-27",
       content: "PhD Admission",
        href: "https://drive.google.com/file/d/1QBzJcDd-6H-ScRAbEJ619ao8nW-ATYuC/view?usp=sharing"
       },
       {
        title: "Written Test Notice for PhD Programme (July-December 2026) Admissions, Ay- 2026-27",
         date: "2026-06-21",
       content: "PhD Admission",
        href: "https://drive.google.com/file/d/1T4fY5H-PXQO4A4Jeg-4byebd7vrXVBLG/view?usp=sharing"
       },
       {
        title: "Applications are invited for admission to the Ph.D. programme, Academic Year 2026-27 (Odd Semester: July–Dec 2026). Last date: 20th July 2026",
         date: "2026-06-04",
       content: "PhD Admission",
        href: "https://drive.google.com/file/d/1YX-EYmuH241Nae5Rx2hOPEMactJJsxzQ/view?usp=sharing"
       },
      {
       title: "SOP for PhD admission Academic Year 2026-27(July-Dec).",
       date: "2026-06-04",
       content: "PhD Admission",
       href:"https://drive.google.com/file/d/1_6KDnWDRffj5Ywf04hETmtc5OG9_CAM2/view?usp=sharing"
      }
    ]
  },

  mca: {
    portals: [
          {
        name: "SOP and Admission Form link for the Academic Year 2026 admissions",
        image: "/logo.png",
        link: "https://erp.nitp.ac.in/",
        sopLink: "https://drive.google.com/file/d/1eL1GvquHslgbrpOiMTU9upGqdo6lkzHa/view?usp=sharing"
      },
      {
        name: "NIMCET",
        image: "https://cdnbbsr.s3waas.gov.in/s33e6260b81898beacda3d16db379ed329/uploads/2025/03/2025031961.png",
        link: "https://nimcet.admissions.nic.in/",
        description: "Visit the portal for the Information Brochure, Schedule, Opening and Closing Ranks, Seat Matrix, and other relevant details."
      },
    ],
    notices: [
        {
        title: "Notice for Physical Reporting and Start of Classes for MCA through NIMCET 2026",
        date: "2026-07-24",
        content: "PG Admission",
        href: "https://drive.google.com/file/d/176aLUtrEOw0bAAbqmbFaTe2orE7zlApP/view?usp=sharing"
      },
      {
        title: "Physical reporting notice for admission to MCA through  NIMCET-2026",
        date: "2026-07-16",
        content: "Physical reporting notice for admission to MCA through  NIMCET-2026",
        href: "https://drive.google.com/file/d/1nBQudzAYVjiuNkL8AGHG3iwAhbPrI_Tn/view?usp=sharing"
      },
        {
        title: "Fee Structure ",
        date: "2026-07-16",
        content: "Fee Structure",
        href: "https://drive.google.com/file/d/1AMDgWbxCCpoY43auIROB7WdtJFm64yIw/view?usp=sharing"
      },
        {
        title: "Fee Structure for Self Finance",
        date: "2026-07-16",
        content: "Fee Structure for Self Finance",
        href: "https://drive.google.com/file/d/1_fT2Wb_ouSIeke-jx-BK5wcarjgsbWxH/view?usp=sharing"
      }
    ]
  },
  


  study_in_india: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2026 admissions",
        image: "/logo.png",
       // link: "https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink: "https://drive.google.com/file/d/1PdsHeOkaeAvIWvQMeZFCTkQzsAf-LuX6/view?usp=sharing"
      },
      // {
      //   name: "Study in India",
      //   image: "https://studyinindia.gov.in/Content/images/logo_SII_new_2023_darkGlobe1.webp",
      //   link: "https://studyinindia.gov.in/",
      //   // description: "Study in India"
      // },
    ],
    notices: [
      // {
      //   title: "Admission link is live (18/08/2025; 3 PM to 23/08/2025) for those who have confirmed their seat during JoSAA-2025 counselling and have not participated in CSAB special Round. Same Admission link will be used for those who have participated in CSAB special round and confirmed their seat during CSAB special round from live from 20/08/2025 to 23/08/2025.",
      //   date: "2025-08-18",
      //   content: " UG Admission",
      //   href: ""
      // },
      // {
      //   title: "Notice regarding the schedule of the Orientation programme and commencement of classes for newly admitted UG students.",
      //   date: "2025-08-02",
      //   content: " UG Admission",
      //   href: "https://drive.google.com/file/d/1wUoxMAfqSBmz1-E7j8QvFK_Ywgcb-JoC/view?usp=sharing"
      // },
      {
        title: "List of provisionally shortlisted Candidates for admission through Study in India (SII) for the session 2026-27 at NIT Patna.",
        date: "2026-07-10",
        content: "List of provisionally shortlisted Candidates for admission through Study in India (SII) for the session 2026-27 at NIT Patna.",
        href: "https://drive.google.com/file/d/1AWfyiP_za1HQTqomsDpU11Gg8AFg8JZX/view?usp=sharing"
      },
      {
        title: "Schedule for the Admission through Study in India (SII) at NIT Patna for the Academic Year 2026-27",
        date: "2026-06-10",
        content: "Schedule for the Admission of the Academic Year 2026-27",
        href: "https://drive.google.com/file/d/1OoYi_YjQFKxP7Fw7AgZ3LsVwIC2FbIJh/view?usp=drive_link"
      }
    ]
  },

  qip: {
    portals: [
      {
        name: "QIP Admissions Portal",
        image: "https://qip.aicte.gov.in/assets/images/logoLogin.png",
        link: "https://qip.aicte.gov.in/",
        // description: "Study in India"
      },
    ],
    notices: [
      {
        "title": "Quality Improvement Programme (QIP) Admission 2026-27",
        "date": "2026-03-06",
        "content": "The Quality Improvement Programme (QIP) offers admission for sponsored, full-time regular faculty from AICTE-approved institutions to pursue Master’s and Ph.D. degrees.",
        "href": "https://drive.google.com/file/d/17OkvWximJ5fkKRqM3rWIMyz6gc22u_VY/view"
      }
    ]
  },

};

const degreeMap = {
  btech: "Bachelor of Technology",
  mtech: "Master of Technology",
  mca: "Master of Computer Application",
  phd: "PhD",
  study_in_india: "Study in India",
  qip: "Quality Improvement Programme",
};

function AdmissionsPage() {
  const [selected, setSelected] = useState("btech");
  const [expandedNotices, setExpandedNotices] = useState({});
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const initialSelected = typeParam || "btech";
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    if (typeParam) {
      setSelected(typeParam);
    }
  }, [typeParam]);

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

  // If no type parameter is in URL, show the grid layout (like Job Opportunities)
  if (!typeParam) {
    return (
      <div className="bg-[#f0f0f0] min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-3xl text-center pb-12 text-[#4d1418] font-bold">
            <h2>Admissions</h2>
          </div>

          {/* Category Boxes */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
            {Object.entries(admissionOptions).map(([key, cfg]) => {
              const Icon = cfg.icon;
              return (
                <Link
                  href={`/Academic/Admission?type=${encodeURIComponent(key)}`}
                  key={key}
                  className={`relative w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center p-3 gap-3 rounded-2xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden group border border-[#e6b3b3] bg-[#f0caca] text-[#ba210e] hover:bg-[#ba210e] hover:text-[#ffe5e5] hover:border-transparent`}
                >
                  {/* Background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#ba210e] to-[#911a0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                  
                  <Icon className={`w-10 h-10 md:w-12 md:h-12 text-[#ba210e] group-hover:text-[#f7cece] transition-colors z-10 mb-1`} strokeWidth={2} />
                  <p className="text-[11px] md:text-xs font-black text-center uppercase z-10 leading-snug tracking-wider">{cfg.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white text-red-900 relative">
      <div className="flex flex-col xl:flex-row">
        {/* Main content */}
        <main className="flex-1 p-3.5 sm:p-6 md:p-8 xl:ml-6 w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto">

            <div className="mb-6">
              <Link href="/Academic/Admission" className="inline-flex items-center gap-2 text-sm font-medium text-[#8c1c1c] hover:text-[#5b1e22] transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50">
                <ArrowLeft className="w-4 h-4" />
                Back to Categories
              </Link>
            </div>

            <h1 className="hidden md:block text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-red-800 relative pb-4">
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
                    {admissionData[selected]?.notices?.length > 0 ? (
                      admissionData[selected]?.notices?.map((notice, index) => (
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
