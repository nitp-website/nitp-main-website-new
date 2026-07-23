"use client"
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import AdmissionsSidebar from "./Sidebar"
import {
  BookOpen,
  AlertCircle,
  ExternalLink,
  Bell,
  Globe,
  FileText,
  Sparkles
} from 'lucide-react';
import { useSearchParams } from "next/navigation";const admissionData = {
  btech: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2026 admissions",
        image: "https://mis.nitp.ac.in/admission/images/Header.jpg",
        link: "https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink: "https://drive.google.com/file/d/1PdsHeOkaeAvIWvQMeZFCTkQzsAf-LuX6/view?usp=sharing"
      },
      {
        name: "JoSAA",
        image: "https://cdnbbsr.s3waas.gov.in/s313111c20aee51aeb480ecbd988cd8cc9/uploads/2022/09/2022091261.png",
        link: "https://josaa.nic.in",
        description: "Visit the portal for the Information Brochure, Schedule, Opening and Closing Ranks, Seat Matrix, and other relevant details."
      },
      
      {
        name: "DASA",
        image: "https://dasanit.org/dasa2025/images/dasa_new.png",
        link: "https://www.dasanit.org",
        description: "Visit the portal for the Information Brochure, Schedule, Opening and Closing Ranks, Seat Matrix, and other relevant details."
      },
    ],
    notices: [
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
      
      //     {
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
      // {
      //   title: "Physical reporting notice for Admission to B.Tech./B.Arch./Dual Degree (B.Tech+M.Tech) Programmes through JoSAA/CSAB/DASA/Study in India (SII)-2025",
      //   date: "2025-07-25",
      //   content: "UG Admission",
      //   href: "https://drive.google.com/file/d/1Nd4LmG-jk-L-H4SoV9lH2uTzww_pHM21/view?usp=sharing"
      // },
      {
        title: "Physical reporting schedule for admission to UG Programme through JoSAA/CSAB/DASA/SII for the Academic year 2026-27",
        date: "2026-07-20",
        content: "UG Admission",
        href: "https://drive.google.com/file/d/1i8x0a5taSUYaSsnlgus7wlc_Tqsa1jG1/view?usp=sharing"
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
        name: "SOP and Admission Form link for the Academic Year 2026 admissions",
        image: "https://mis.nitp.ac.in/admission/images/Header.jpg",
        link: "https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink: "https://drive.google.com/file/d/1PdsHeOkaeAvIWvQMeZFCTkQzsAf-LuX6/view?usp=sharing"
      },
       {
        name: "CCMT",
        image: "https://cdnbbsr.s3waas.gov.in/s301894d6f048493d2cacde3c579c315a3/uploads/2022/02/2022022590.png",
        link: "https://ccmt.admissions.nic.in",
        description: "Visit the portal for the Information Brochure, Schedule, Opening and Closing Ranks, Seat Matrix, and other relevant details."
      },
    ],
    notices: [
  
      // {
      //   title: "Physical reporting notice for admission to M.Tech/M.Arch/MURP through CCMT 2026 and DRDO Sponsored candidates",
      //   date: "2026-07-14",
      //   content: "PG Admission",
      //   href: "https://drive.google.com/file/d/18Lc9u6HkJeD7tp3ROjmF_hBGorxKN4OY/view?usp=sharing"
      // },
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
        image: "https://mis.nitp.ac.in/AdmissionPHD/images/Header.jpg",
        link: "https://mis.nitp.ac.in/AdmissionPHD/Default.aspx ",
         sopLink:"https://drive.google.com/file/d/1_6KDnWDRffj5Ywf04hETmtc5OG9_CAM2/view?usp=sharing"
      },
      // {
      //   name: "PhD Admissions NITP Portal",
      //   image: "https://mis.nitp.ac.in/AdmissionPHD/images/Header.jpg",
      //   link: "https://mis.nitp.ac.in/admissionphd/",
      //   // description: "Centralized Counselling for M.Tech/M.Arch/M.Plan Admissions"
      // },
    ],
    notices: [
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
        image: "https://mis.nitp.ac.in/admission/images/Header.jpg",
        link: "https://mis.nitp.ac.in/admission/Default.aspx",
        sopLink: "https://drive.google.com/file/d/1PdsHeOkaeAvIWvQMeZFCTkQzsAf-LuX6/view?usp=sharing"
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
      // {
      //   title: "Physical reporting schedule for admission to PG Programme through CCMT and NIMCET for the Academic year 2025-26",
      //   date: "2025-07-10",
      //   content: "PG Admission",
      //   href: "https://drive.google.com/file/d/1xUpA4rWNtrHlTEzRxI_AEwHPjkyIzN5z/view"
      // }
    ]
  },

  study_in_india: {
    portals: [
      {
        name: "SOP and Admission Form link for the Academic Year 2026 admissions",
        image: "https://mis.nitp.ac.in/admission/images/Header.jpg",
        link: "https://mis.nitp.ac.in/admission/Default.aspx",
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
  }
};

const degreeMap = {
  btech: "Bachelor of Technology",
  mtech: "Master of Technology",
  mca: "Master of Computer Application",
  phd: "PhD",
  study_in_india: "Study in India",
  qip: "Quality Improvement Programme"
};

const degreeShortMap = {
  btech: "B.Tech",
  mtech: "M.Tech",
  mca: "MCA",
  phd: "PhD",
  study_in_india: "Study in India",
  qip: "QIP"
};

function formatNoticeDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-red-200 bg-gradient-to-b from-red-50/80 to-white px-6 py-12 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-500">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-slate-500">{description}</p>
    </div>
  );
}

function AdmissionsPage() {
  const searchParams = useSearchParams();
  const selected = searchParams.get("type") || "btech"; 
   const currentData = admissionData[selected];
  const noticeCount = currentData?.notices?.length || 0;
  const portalCount = currentData?.portals?.length || 0;

  const latestNoticeDate = useMemo(() => {
    if (!currentData?.notices?.length) return null;
    const sorted = [...currentData.notices].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    return formatNoticeDate(sorted[0].date);
  }, [currentData]);

  return (
    <div className="min-h-screen bg-[#faf8f8] text-slate-800">
      {/* Subtle background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-5 px-3 py-5 sm:px-5 md:px-6 md:py-8 xl:flex-row xl:items-start xl:gap-8">
        <AdmissionsSidebar />

        <main className="min-w-0 flex-1 w-full">
          {/* Hero */}
          <section className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#811919] via-[#9b1f1f] to-[#5c1010] px-5 py-7 text-white shadow-xl shadow-red-900/20 sm:px-8 sm:py-9">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 left-1/3 h-32 w-32 rounded-full bg-amber-400/10 blur-2xl" />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-100 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Academic Year 2026–27
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                {degreeMap[selected] || ""}
                <span className="block text-lg font-medium text-red-100 sm:text-xl md:mt-1">
                  Admissions at NIT Patna
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-red-100/90 sm:text-base">
                Official notices, admission portals, and important documents for {degreeShortMap[selected] || "this programme's"} candidates.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                  <Bell className="h-4 w-4 text-amber-200" />
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-red-200">Notices</p>
                    <p className="text-sm font-bold">{noticeCount} active</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                  <Globe className="h-4 w-4 text-sky-200" />
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-red-200">Portals</p>
                    <p className="text-sm font-bold">{portalCount} linked</p>
                  </div>
                </div>
                {latestNoticeDate && (
                  <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                    <FileText className="h-4 w-4 text-emerald-200" />
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wide text-red-200">Latest update</p>
                      <p className="text-sm font-bold">{latestNoticeDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Notices */}
            <section className="rounded-2xl border border-red-100/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-[#811919]">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Important Notices</h2>
                    <p className="text-xs text-slate-500">Official announcements & updates</p>
                  </div>
                </div>
                {noticeCount > 0 && (
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Live updates
                  </span>
                )}
              </div>

              <div className="space-y-3">
                {noticeCount > 0 ? (
                  currentData.notices.map((notice, index) => (
                    <article
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-200 hover:border-red-200 hover:bg-white hover:shadow-md"
                    >
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center rounded-lg bg-[#811919] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                          {notice.content?.trim() || "Notice"}
                        </span>
                        <time className="text-xs font-medium text-slate-500">
                          {formatNoticeDate(notice.date)}
                        </time>
                      </div>

                      <Link
                        href={notice.href || "#"}
                        target="_blank"
                        className="block text-sm font-semibold leading-snug text-slate-800 transition-colors group-hover:text-[#811919] sm:text-base"
                      >
                        {notice.title}
                      </Link>

                      <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                        <p className="line-clamp-2 text-xs text-slate-500 sm:text-sm">
                          {notice.content}
                        </p>
                        <Link
                          href={notice.href}
                          target="_blank"
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#811919] shadow-sm ring-1 ring-red-100 transition-all hover:bg-[#811919] hover:text-white hover:ring-[#811919]"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Open
                        </Link>
                      </div>
                    </article>
                  ))
                ) : (
                  <EmptyState
                    icon={Bell}
                    title="No notices right now"
                    description="Check back soon for the latest admission announcements and schedules."
                  />
                )}
              </div>
            </section>

            {/* Portals */}
            <section className="rounded-2xl border border-red-100/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-[#811919]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Admission Portals</h2>
                  <p className="text-xs text-slate-500">Apply & access official counselling links</p>
                </div>
              </div>

              {portalCount > 0 ? (
                <div className="space-y-4">
                  {currentData.portals.map((item, i) => (
                    <article
                      key={i}
                      className="group overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-red-50/30 transition-all duration-200 hover:border-red-200 hover:shadow-lg"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex h-36 items-center justify-center bg-white p-5 sm:h-auto sm:w-40 sm:shrink-0 sm:border-r sm:border-slate-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_189b8a7a1f6%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_189b8a7a1f6%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
                            }}
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-5">
                          <div>
                            <h3 className="text-base font-bold leading-snug text-slate-900 group-hover:text-[#811919] sm:text-lg">
                              {item.name}
                            </h3>
                            {item.description && (
                              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                {item.description}
                              </p>
                            )}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.sopLink && (
                              <a
                                href={item.sopLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-[#811919] transition-all hover:bg-red-50"
                              >
                                <FileText className="h-4 w-4" />
                                View SOP
                              </a>
                            )}
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#811919] to-[#a32222] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-red-900/20 transition-all hover:shadow-lg hover:brightness-110"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Visit Portal
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={Globe}
                  title="No portals available"
                  description="Admission portals for this programme will be listed here when they go live."
                />
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}




export default AdmissionsPage;
