import React, { useState } from "react";
import {
  FaBook,
  FaBriefcase,
  FaBuilding,
  FaCertificate,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaIdBadge,
  FaIndustry,
  FaLaptopCode,
  FaProjectDiagram,
  FaUniversity,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { TbCertificate, TbFileCertificate } from "react-icons/tb";

// import facultyData from "../data/facultyData";
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
import Patents from "./menuItems/Patents";
import ConsultancyProjects from "./menuItems/ConsultancyProjects";
import Education from "./menuItems/Education";

const FacultyDropdown = ({ facultyData }) => {
  //   console.log(facultyData);

  const {
    phd_candidates,
    education,
    journal_papers,
    conference_papers,
    textbooks,
    edited_books,
    book_chapters,
    sponsored_projects,
    consultancy_projects,
    ipr,
    patents,
    startups,
    teaching_engagement,
    project_supervision,
    workshops_conferences,
    institute_activities,
    department_activities,
    memberships,
    work_experience,
    internships,
  } = facultyData || {};

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const menuItems = [
    {
      condition: education?.length > 0,
      title: "Education",
      icon: <FaUserTie />,
      id: 1,
      component: <Education data={education} />,
    },
    {
      condition: phd_candidates?.length > 0,
      title: "PhD Candidates",
      icon: <FaGraduationCap />,
      id: 11,
      component: <PhdCandidates data={phd_candidates} />,
    },
    {
      condition: journal_papers?.length > 0,
      title: "Journal Papers",
      icon: <FaBook />,
      id: 6,
      component: <JournalPapers data={journal_papers} />,
    },
    {
      condition: conference_papers?.length > 0,
      title: "Conference Papers",
      icon: <FaBook />,
      id: 7,
      component: <ConferencePapers data={conference_papers} />,
    },
    {
      condition: sponsored_projects?.length > 0,
      title: "Sponsored Projects",
      icon: <FaIndustry />,
      id: 13,
      component: <SponsoredProjects data={sponsored_projects} />,
    },
    {
      condition: consultancy_projects?.length > 0,
      title: "Consultancy Projects",
      icon: <TbFileCertificate />,
      id: 14,
      component: <ConsultancyProjects data={consultancy_projects} />,
    },
    {
      condition: teaching_engagement?.length > 0,
      title: "Teaching Engagement",
      icon: <FaLaptopCode />,
      id: 18,
      component: <TeachingEngagement data={teaching_engagement} />,
    },
    {
      condition: textbooks?.length > 0,
      title: "Textbooks",
      icon: <FaBook />,
      id: 8,
      component: <Textbooks data={textbooks} />,
    },
    {
      condition: edited_books?.length > 0,
      title: "Edited Books",
      icon: <FaBook />,
      id: 9,
      component: <EditedBooks data={edited_books} />,
    },
    {
      condition: internships?.length > 0,
      title: "Internships",
      icon: <FaUserGraduate />,
      id: 19,
      component: <Internships data={internships} />,
    },
    {
      condition: work_experience?.length > 0,
      title: "Work Experience",
      icon: <FaBriefcase />,
      id: 20,
      component: <WorkExperience data={work_experience} />,
    },
    {
      condition: memberships?.length > 0,
      title: "Memberships",
      icon: <FaIdBadge />,
      id: 21,
      component: <Memberships data={memberships} />,
    },
    {
      condition: department_activities?.length > 0,
      title: "Department Activities",
      icon: <FaUniversity />,
      id: 22,
      component: <DepartmentActivities data={department_activities} />,
    },
    {
      condition: institute_activities?.length > 0,
      title: "Institute Activities",
      icon: <FaBuilding />,
      id: 23,
      component: <InstituteActivities data={institute_activities} />,
    },
    {
      condition: workshops_conferences?.length > 0,
      title: "Workshops & Conferences",
      icon: <FaChalkboardTeacher />,
      id: 24,
      component: <WorkshopsConferences data={workshops_conferences} />,
    },
    {
      condition: project_supervision?.length > 0,
      title: "Project Supervision",
      icon: <FaProjectDiagram />,
      id: 27,
      component: <ProjectSupervision data={project_supervision} />,
    },
    {
      condition: book_chapters?.length > 0,
      title: "Book Chapters",
      icon: <FaBook />,
      id: 10,
      component: <BookChapters data={book_chapters} />,
    },
    {
      condition: ipr?.length > 0,
      title: "Intellectual Property Rights",
      icon: <FaCertificate />,
      id: 28,
      component: <IPR data={ipr} />,
    },
    {
      condition: startups?.length > 0,
      title: "Startups",
      icon: <FaBuilding />,
      id: 29,
      component: <Startups data={startups} />,
    },
    {
      condition: patents?.length > 0,
      title: "Patents",
      icon: <TbCertificate />,
      id: 30,
      component: <Patents data={patents} />,
    },
  ].filter((item) => item.condition);

  return (
    <div className="w-full mt-6">
      {menuItems.map((item) => (
        <div key={item.id} className="mb-4">
          <button
            className={`w-full flex justify-between items-center px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300 bg-red-600 text-white`}
            onClick={() => toggleDropdown(item.id)}
          >
            <div className="flex items-center">
              <div className="mr-2">{item.icon}</div>
              <span className="font-semibold">{item.title}</span>
            </div>
            <span className="text-lg">
              {openDropdown === item.id ? "▲" : "▼"}
            </span>
          </button>

          {openDropdown === item.id && (
            <div className="mt-2 p-4 border shadow-lg rounded-lg bg-white">
              {item.component}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FacultyDropdown;
