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
import { TbFileCertificate } from "react-icons/tb";

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
import ConsultancyProjects from "./menuItems/ConsultancyProjects";
import Education from "./menuItems/Education";
import TalksAndLecture from "./menuItems/TalkAndLecture";
import ConferenceChairs from "./menuItems/ConferenceChair";
import InternationalJournalReviewer from "./menuItems/InternationalJournal";
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
    startups,
    teaching_engagement,
    project_supervision,
    workshops_conferences,
    institute_activities,
    department_activities,
    memberships,
    work_experience,
    internships,
    talks_and_lectures,
    conference_session_chairs,
    international_journal_reviewers,
  } = facultyData || {};

  const filteredIpr = ipr?.filter((item) => item.grant_date || item.registration_date || item.publication_date) || [];

  // console.log(filteredIpr);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));

    setTimeout(() => {
      const element = document.getElementById(`dropdown-${id}`);
      if (element) {
        const yOffset = -100; // Adjust this value to control the offset
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 200);
  };

  const menuItems = [
    {
      condition: work_experience?.length > 0,
      title: "Work Experience",
      icon: <FaBriefcase />,
      id: 20,
      component: <WorkExperience data={work_experience} />,
    },
    {
      condition: education?.length > 0,
      title: "Education",
      icon: <FaUserTie />,
      id: 1,
      component: <Education data={education} />,
    },
    {
      condition: teaching_engagement?.length > 0,
      title: "Teaching Engagement",
      icon: <FaLaptopCode />,
      id: 18,
      component: <TeachingEngagement data={teaching_engagement} />,
    },
    {
      condition: memberships?.length > 0,
      title: "Memberships",
      icon: <FaIdBadge />,
      id: 21,
      component: <Memberships data={memberships} />,
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
      condition: filteredIpr?.length > 0,
      title: "Intellectual Property Rights",
      icon: <FaCertificate />,
      id: 28,
      component: <IPR data={filteredIpr} />,
    },
    {
      condition: startups?.length > 0,
      title: "Startups",
      icon: <FaBuilding />,
      id: 29,
      component: <Startups data={startups} />,
    },
    {
      condition: book_chapters?.length > 0,
      title: "Book Chapters",
      icon: <FaBook />,
      id: 10,
      component: <BookChapters data={book_chapters} />,
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
      condition: workshops_conferences?.length > 0,
      title: "Workshops & Conferences",
      icon: <FaChalkboardTeacher />,
      id: 24,
      component: <WorkshopsConferences data={workshops_conferences} />,
    },
    {
      condition: phd_candidates?.length > 0,
      title: "PhD Candidates",
      icon: <FaGraduationCap />,
      id: 11,
      component: <PhdCandidates data={phd_candidates} />,
    },
    {
      condition: project_supervision?.length > 0,
      title: "Project Supervision",
      icon: <FaProjectDiagram />,
      id: 27,
      component: <ProjectSupervision data={project_supervision} />,
    },
    {
      condition: internships?.length > 0,
      title: "Internships",
      icon: <FaUserGraduate />,
      id: 19,
      component: <Internships data={internships} />,
    },
    {
      condition: institute_activities?.length > 0,
      title: "Institute Activities",
      icon: <FaBuilding />,
      id: 23,
      component: <InstituteActivities data={institute_activities} />,
    },
    {
      condition: department_activities?.length > 0,
      title: "Department Activities",
      icon: <FaUniversity />,
      id: 22,
      component: <DepartmentActivities data={department_activities} />,
    },
    
    {
      condition: talks_and_lectures?.length > 0,
      title: "Talks and Lectures",
      icon: <FaUniversity />,
      id: 30,
      component: <TalksAndLecture data={talks_and_lectures} />,
    },
    {
      condition: conference_session_chairs?.length > 0,
      title: "Conference Session Chairs",
      icon: <FaUniversity />,
      id: 31,
      component: <ConferenceChairs data={conference_session_chairs} />,
    },
    {
      condition: international_journal_reviewers?.length > 0,
      title: "International Journal Reviewers",
      icon: <FaUniversity />,
      id: 32,
      component: <InternationalJournalReviewer data={international_journal_reviewers} />,
    },
  ].filter((item) => item.condition);

  return (
    <div className="w-full mt-6">
      {menuItems.map((item) => (
        <div key={item.id} id={`dropdown-${item.id}`} className="mb-4">
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
