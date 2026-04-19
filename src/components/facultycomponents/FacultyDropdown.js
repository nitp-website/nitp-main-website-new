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

// Maps section key → the data key inside the API response + the component to render
const SECTION_CONFIG = [
  { key: "work_experience",      dataKey: "work_experience",      title: "Work Experience",           icon: <FaBriefcase />,         Component: WorkExperience },
  { key: "education",            dataKey: "education",            title: "Education",                 icon: <FaUserTie />,           Component: Education },
  { key: "teaching_engagement",  dataKey: "teaching_engagement",  title: "Teaching Engagement",       icon: <FaLaptopCode />,        Component: TeachingEngagement },
  { key: "memberships",          dataKey: "memberships",          title: "Memberships",               icon: <FaIdBadge />,           Component: Memberships },
  { key: "journal_papers",       dataKey: "journal_papers",       title: "Journal Papers",            icon: <FaBook />,              Component: JournalPapers },
  { key: "conference_papers",    dataKey: "conference_papers",    title: "Conference Papers",         icon: <FaBook />,              Component: ConferencePapers },
  { key: "sponsored_projects",   dataKey: "sponsored_projects",   title: "Sponsored Projects",        icon: <FaIndustry />,          Component: SponsoredProjects },
  { key: "consultancy_projects", dataKey: "consultancy_projects", title: "Consultancy Projects",      icon: <TbFileCertificate />,   Component: ConsultancyProjects },
  { key: "ipr",                  dataKey: "ipr",                  title: "Intellectual Property Rights", icon: <FaCertificate />,    Component: IPR },
  { key: "startups",             dataKey: "startups",             title: "Startups",                  icon: <FaBuilding />,          Component: Startups },
  { key: "book_chapters",        dataKey: "book_chapters",        title: "Book Chapters",             icon: <FaBook />,              Component: BookChapters },
  { key: "textbooks",            dataKey: "textbooks",            title: "Textbooks",                 icon: <FaBook />,              Component: Textbooks },
  { key: "edited_books",         dataKey: "edited_books",         title: "Edited Books",              icon: <FaBook />,              Component: EditedBooks },
  { key: "workshops_conferences",dataKey: "workshops_conferences",title: "Workshops & Conferences",   icon: <FaChalkboardTeacher />, Component: WorkshopsConferences },
  { key: "phd_candidates",       dataKey: "phd_candidates",       title: "PhD Candidates",            icon: <FaGraduationCap />,     Component: PhdCandidates },
  { key: "project_supervision",  dataKey: "project_supervision",  title: "Project Supervision",       icon: <FaProjectDiagram />,    Component: ProjectSupervision },
  { key: "internships",          dataKey: "internships",          title: "Internships",               icon: <FaUserGraduate />,      Component: Internships },
  { key: "institute_activities", dataKey: "institute_activities", title: "Institute Activities",      icon: <FaBuilding />,          Component: InstituteActivities },
  { key: "department_activities",dataKey: "department_activities",title: "Department Activities",     icon: <FaUniversity />,        Component: DepartmentActivities },
];

const FacultyDropdown = ({ counts, email }) => {
  const [openKey, setOpenKey] = useState(null);
  // Cache: { [sectionKey]: data[] | 'loading' | 'error' }
  const [cache, setCache] = useState({});

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  const fetchSection = useCallback(async (key) => {
    if (cache[key] && cache[key] !== 'error') return; // already loaded or loading
    setCache(prev => ({ ...prev, [key]: 'loading' }));
    try {
      const res = await fetch(`${baseUrl}/api/v2/profile?email=${encodeURIComponent(email)}&section=${key}`);
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      // API returns { [dataKey]: rows[] }
      const config = SECTION_CONFIG.find(s => s.key === key);
      setCache(prev => ({ ...prev, [key]: json[config.dataKey] || [] }));
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

  // Only show sections where count > 0 (ipr: filter for granted/published)
  const visibleSections = SECTION_CONFIG.filter(({ key }) => {
    const count = Number(counts[key] || 0);
    return count > 0;
  });

  return (
    <div className="w-full mt-6">
      {visibleSections.map(({ key, title, icon, dataKey, Component }) => {
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
                    data={key === 'ipr'
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
