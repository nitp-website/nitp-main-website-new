"use client";
import React, { useState, useCallback } from "react";
import {
  FaBook, FaBriefcase, FaBuilding, FaCertificate,
  FaChalkboardTeacher, FaGraduationCap, FaIdBadge,
  FaIndustry, FaLaptopCode, FaProjectDiagram,
  FaUniversity, FaUserGraduate, FaUserTie,
} from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";

import PhdCandidates from "./menuItems/PhdCandidates";
import JournalPapers from "./menuItems/JournalPapers";
import ConferencePapers from "./menuItems/ConferencePapers";
import SponsoredProjects from "./menuItems/SponsoredProjects";
import TeachingEngagement from "./menuItems/TeachingEngagement";
import Textbooks from "./menuItems/Textbooks";
import EditedBooks from "./menuItems/EditedBooks";
import Internships from "./menuItems/Internships";
import WorkExperience from "./menuItems/WorkExperience";
import Memberships from "./menuItems/Memberships";
import DepartmentActivities from "./menuItems/DepartmentActivities";
import InstituteActivities from "./menuItems/InstituteActivities";
import WorkshopsConferences from "./menuItems/WorkshopsConferences";
import ProjectSupervision from "./menuItems/ProjectSupervision";
import BookChapters from "./menuItems/BookChapters";
import IPR from "./menuItems/IPR";
import Startups from "./menuItems/Startups";
import ConsultancyProjects from "./menuItems/ConsultancyProjects";
import Education from "./menuItems/Education";
import TalksAndLecture from "./menuItems/TalkAndLecture";
import ConferenceChairs from "./menuItems/ConferenceChair";
import InternationalJournalReviewer from "./menuItems/InternationalJournal";
import MoocCourses from "./menuItems/MoocCourses";
import EditorialBoards from "./menuItems/Editorial";
import VisitsAbroad from "./menuItems/VisitAbroad";
import SpecialLectures from "./menuItems/SpecialLecture";
import HonoursAwards from "./menuItems/Awards";

const SECTION_CONFIG = [
  { key: "work_experience",               title: "Work Experience",                   icon: <FaBriefcase />,         Component: WorkExperience },
  { key: "education",                     title: "Education",                         icon: <FaUserTie />,           Component: Education },
  { key: "teaching_engagement",           title: "Teaching Engagement",               icon: <FaLaptopCode />,        Component: TeachingEngagement },
  { key: "memberships",                   title: "Memberships",                       icon: <FaIdBadge />,           Component: Memberships },
  { key: "journal_papers",                title: "Journal Papers",                    icon: <FaBook />,              Component: JournalPapers },
  { key: "conference_papers",             title: "Conference Papers",                 icon: <FaBook />,              Component: ConferencePapers },
  { key: "sponsored_projects",            title: "Sponsored Projects",                icon: <FaIndustry />,          Component: SponsoredProjects },
  { key: "consultancy_projects",          title: "Consultancy Projects",              icon: <TbFileCertificate />,   Component: ConsultancyProjects },
  { key: "ipr",                           title: "Intellectual Property Rights",      icon: <FaCertificate />,       Component: IPR, filterIpr: true },
  { key: "startups",                      title: "Startups",                          icon: <FaBuilding />,          Component: Startups },
  { key: "book_chapters",                 title: "Book Chapters",                     icon: <FaBook />,              Component: BookChapters },
  { key: "textbooks",                     title: "Textbooks",                         icon: <FaBook />,              Component: Textbooks },
  { key: "edited_books",                  title: "Edited Books",                      icon: <FaBook />,              Component: EditedBooks },
  { key: "workshops_conferences",         title: "Workshops & Conferences",           icon: <FaChalkboardTeacher />, Component: WorkshopsConferences },
  { key: "phd_candidates",               title: "PhD Candidates",                    icon: <FaGraduationCap />,     Component: PhdCandidates },
  { key: "project_supervision",           title: "Project Supervision",               icon: <FaProjectDiagram />,    Component: ProjectSupervision },
  { key: "internships",                   title: "Internships",                       icon: <FaUserGraduate />,      Component: Internships },
  { key: "institute_activities",          title: "Institute Activities",              icon: <FaBuilding />,          Component: InstituteActivities },
  { key: "department_activities",         title: "Department Activities",             icon: <FaUniversity />,        Component: DepartmentActivities },
  { key: "talks_and_lectures",            title: "Talks and Lectures",                icon: <FaUniversity />,        Component: TalksAndLecture },
  { key: "conference_session_chairs",     title: "Conference Session Chairs",         icon: <FaUniversity />,        Component: ConferenceChairs },
  { key: "international_journal_reviewers", title: "International Journal Reviewers", icon: <FaUniversity />,        Component: InternationalJournalReviewer },
  { key: "mooc_courses",                  title: "NPTEL/MOOC Courses",               icon: <FaUniversity />,        Component: MoocCourses },
  { key: "editorial_boards",              title: "Editorial Boards",                  icon: <FaUniversity />,        Component: EditorialBoards },
  { key: "visits_abroad",                 title: "Visit Abroad",                      icon: <FaUniversity />,        Component: VisitsAbroad },
  { key: "special_lectures",              title: "Special Lectures",                  icon: <FaUniversity />,        Component: SpecialLectures },
  { key: "honours_awards",               title: "Honours and Awards",                icon: <FaUniversity />,        Component: HonoursAwards },
];

const FacultyDropdown = ({ counts, email }) => {
  const [openKey, setOpenKey] = useState(null);
  const [cache, setCache] = useState({});
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  const fetchSection = useCallback(async (key) => {
    if (cache[key] && cache[key] !== 'error') return;
    setCache(prev => ({ ...prev, [key]: 'loading' }));
    try {
      const res = await fetch(
        `${baseUrl}/api/v2/profile?email=${encodeURIComponent(email)}&section=${key}`
      );
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setCache(prev => ({ ...prev, [key]: json[key] || [] }));
    } catch {
      setCache(prev => ({ ...prev, [key]: 'error' }));
    }
  }, [cache, email, baseUrl]);

  const toggleDropdown = (key) => {
    const isOpening = openKey !== key;
    setOpenKey(isOpening ? key : null);
    if (isOpening) {
      fetchSection(key);
      setTimeout(() => {
        const el = document.getElementById(`dropdown-${key}`);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 200);
    }
  };

  const visibleSections = SECTION_CONFIG.filter(({ key }) => Number(counts[key] || 0) > 0);

  return (
    <div className="w-full mt-6">
      {visibleSections.map(({ key, title, icon, Component, filterIpr }) => {
        const isOpen = openKey === key;
        const sectionData = cache[key];

        return (
          <div key={key} id={`dropdown-${key}`} className="mb-4">
            <button
              className="w-full flex justify-between items-center px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300 bg-red-600 text-white"
              onClick={() => toggleDropdown(key)}
            >
              <div className="flex items-center gap-2">
                {icon}
                <span className="font-semibold">{title}</span>
              </div>
              <span className="text-lg">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
              <div className="mt-2 p-4 border shadow-lg rounded-lg bg-white">
                {sectionData === 'loading' && (
                  <div className="text-center py-6 text-gray-500 animate-pulse">Loading...</div>
                )}
                {sectionData === 'error' && (
                  <div className="text-center py-4 text-red-500">Failed to load data.</div>
                )}
                {Array.isArray(sectionData) && sectionData.length === 0 && (
                  <div className="text-center py-4 text-gray-400">No records found.</div>
                )}
                {Array.isArray(sectionData) && sectionData.length > 0 && (
                  <Component
                    data={filterIpr
                      ? sectionData.filter(i => i.grant_date || i.registration_date || i.publication_date)
                      : sectionData
                    }
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FacultyDropdown;
