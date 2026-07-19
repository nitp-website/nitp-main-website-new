"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faEnvelope,
  faBuilding,
  faPhone,
  faFlask,
  faGraduationCap,
  faBriefcase,
  faCalendarDays,
  faLightbulb,
  faXmark,
  faUsers,
  faLayerGroup,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { getDepartmentName } from "../../../lib/Staffdeptlist"; 

const formatDate = (value) => (value ? value.toString().split("T")[0] : null);

const parseBatchYear = (batchStr) => {
  const [start] = (batchStr || "").split("-").map((v) => v?.trim());
  return start || "";
};

const groupLabsByLevelAndYear = (labs) => {
  const grouped = {};
  labs.forEach((lab) => {
    const level = (lab.level || "OTHER").toUpperCase();
    const year =
      parseBatchYear(lab.batch) ||
      (lab.start_date ? lab.start_date.toString().slice(0, 4) : "N/A");

    if (!grouped[level]) grouped[level] = {};
    if (!grouped[level][year]) grouped[level][year] = [];
    grouped[level][year].push(lab);
  });

  Object.keys(grouped).forEach((level) => {
    const sortedYears = Object.keys(grouped[level]).sort((a, b) => b.localeCompare(a));
    const sortedObj = {};
    sortedYears.forEach((y) => (sortedObj[y] = grouped[level][y]));
    grouped[level] = sortedObj;
  });

  return grouped;
};

const LEVEL_ORDER = ["UG", "PG", "PHD"];

// Renders nothing if value is missing, so the field simply doesn't appear
function StatTile({ icon, label, value }) {
  if (!value) return null;

  return (
    <div className="flex items-start gap-3">
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-50 text-red-700 shrink-0">
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <span className="block text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
          {label}
        </span>
        <span className="block text-sm text-gray-800 font-medium break-words">
          {value}
        </span>
      </div>
    </div>
  );
}

// Reusable collapsible section - click the red header to expand/collapse
function CollapsibleSection({ icon, title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-bold text-sm px-4 py-2.5 flex items-center justify-between gap-2"
      >
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className="w-4 h-4" />
          {title}
        </span>
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className="w-3.5 h-3.5" />
      </button>
      {open && children}
    </div>
  );
}

function DetailModal({ staff, onClose }) {
  const {
    name,
    designation,
    image,
    email,
    department,
    mobile_number,
    research_interest,
    date_of_joining,
    labs = [],
    education = [],
    work_experience = [],
  } = staff || {};

  // close on Escape, lock body scroll while open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const getExperienceYears = (dateOfJoining) => {
    if (!dateOfJoining) return null;

    const joiningDate = new Date(dateOfJoining);
    const today = new Date();

    // date_of_joining is in the future - not yet joined, so there's no experience to show
    if (joiningDate > today) return "Not yet joined";

    let years = today.getFullYear() - joiningDate.getFullYear();

    const hasNotCompletedYear =
      today.getMonth() < joiningDate.getMonth() ||
      (today.getMonth() === joiningDate.getMonth() &&
        today.getDate() < joiningDate.getDate());

    if (hasNotCompletedYear) {
      years--;
    }

    years = Math.max(years, 0);

    return years === 0 ? "Less than a year" : `${years} ${years === 1 ? "Year" : "Years"}`;
  };

  const formattedJoiningDate = formatDate(date_of_joining);
  const experience = getExperienceYears(date_of_joining);
  const departmentName = getDepartmentName(department);

  const hasLabs = labs.length > 0;
  const hasEducation = education.length > 0;
  const hasWorkExperience = work_experience.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
        >
          <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-b from-red-50 to-white px-8 pt-10 pb-6 flex flex-col items-center text-center rounded-t-2xl">
          <div className="w-[120px] h-[120px] rounded-full p-2 bg-red-100/40 border-2 border-red-400/40 shadow-md mb-3">
            <img
              src={image || "/faculty.jpeg"}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          {designation && (
            <div className="flex items-center gap-2 mt-2 py-1.5 px-4 bg-white rounded-full border border-red-200">
              <FontAwesomeIcon icon={faIdCard} className="w-3.5 h-3.5 text-red-700" />
              <span className="text-sm font-medium text-gray-700">{designation}</span>
            </div>
          )}
          {email && (
            <a
              href={"mailto:" + email}
              className="flex items-center gap-2 mt-3 text-sm text-gray-600 hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
              {email}
            </a>
          )}
        </div>

        <div className="px-8 py-6 space-y-5">
          {/* Stat grid - each tile hides itself automatically if its value is empty */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 pb-2">
            <StatTile icon={faBuilding} label="Department" value={departmentName} />
            <StatTile icon={faPhone} label="Mobile Number" value={mobile_number} />
            <StatTile icon={faCalendarDays} label="Date of Joining" value={formattedJoiningDate} />
            <StatTile icon={faBriefcase} label="Experience" value={experience} />
            <StatTile icon={faLightbulb} label="Expertise" value={research_interest} />
          </div>

          {/* Laboratory Handled - collapsible, only rendered if there's data */}
          {hasLabs && (
            <CollapsibleSection icon={faFlask} title="Laboratory Handled">
              <div className="bg-blue-50 p-5">
                {(() => {
                  const grouped = groupLabsByLevelAndYear(labs);
                  const levels = Object.keys(grouped).sort(
                    (a, b) => LEVEL_ORDER.indexOf(a) - LEVEL_ORDER.indexOf(b)
                  );
                  return levels.map((level) => (
                    <div key={level} className="mb-5 last:mb-0">
                      <p className="font-bold text-gray-800 text-sm mb-2">{level} LEVEL</p>
                      {Object.keys(grouped[level]).map((year) => (
                        <div key={year} className="mb-3">
                          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md mb-2">
                            {year}
                          </span>
                          <div className="space-y-1">
                            {grouped[level][year].map(function (lab, i) {
                              return (
                                <p key={lab.id || i} className="text-sm text-gray-800">
                                  {lab.course_code && (
                                    <span className="font-semibold">{lab.course_code} - </span>
                                  )}
                                  {lab.lab_name && (
                                    <span className="font-bold">{lab.lab_name}</span>
                                  )}
                                  {lab.semester && <span>, Semester {lab.semester}</span>}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </CollapsibleSection>
          )}

          {/* Education - collapsible, only rendered if there's data */}
          {hasEducation && (
            <CollapsibleSection icon={faGraduationCap} title="Education">
              <div className="bg-purple-50 p-5">
                <div className="space-y-3">
                  {education.map(function (edu, i) {
                    return (
                      <p key={edu.id || i} className="text-sm text-gray-800">
                        {edu.certification && (
                          <span className="font-bold">{edu.certification}</span>
                        )}
                        {edu.specialization && <span> ({edu.specialization})</span>}
                        {edu.institution && (
                          <>
                            <span> from </span>
                            <span className="text-blue-700 font-semibold">{edu.institution}</span>
                          </>
                        )}
                        {edu.passing_year && <span className="font-bold"> ({edu.passing_year})</span>}
                      </p>
                    );
                  })}
                </div>
              </div>
            </CollapsibleSection>
          )}

          {/* Experience - collapsible, only rendered if there's data */}
          {hasWorkExperience && (
            <CollapsibleSection icon={faBriefcase} title="Experience">
              <div className="bg-indigo-50 p-5">
                <div className="space-y-3">
                  {work_experience.map(function (we, i) {
                    const start = formatDate(we.start_date);
                    const end = formatDate(we.end_date);
                    return (
                      <p key={we.id || i} className="text-sm text-gray-800">
                        {we.work_experiences && (
                          <span className="font-bold">{we.work_experiences}</span>
                        )}
                        {we.institute && <span> - {we.institute}</span>}
                        {(start || end) && (
                          <span>
                            {" "}
                            ({start || "?"} to {end || "?"})
                          </span>
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            </CollapsibleSection>
          )}
        </div>
      </div>
    </div>
  );
}

function Staffcard({ staff }) {
  const [open, setOpen] = useState(false);

  const { name, designation, image, email } = staff || {};

  return (
    <>
      <div className="w-[320px] mx-4 bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100">
        {/* Header with clean background */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-10 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-red-700 rounded-b-lg opacity-70"></div>

          <div className="w-[150px] h-[150px] mx-auto mb-2 relative">
            <div className="absolute inset-0 rounded-full bg-white p-1">
              <div className="w-full h-full rounded-full p-3 bg-red-100/30 backdrop-blur-sm border-2 border-red-400/40 shadow-lg">
                <img
                  src={image || "/faculty.jpeg"}
                  alt={name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover rounded-full transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="text-black px-6 py-5 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>

          {designation && (
            <div className="flex items-center justify-center py-2 px-4 bg-gray-50 rounded-lg mb-4 border-l-4 border-red-700">
              <FontAwesomeIcon icon={faIdCard} className="w-4 h-4 text-red-700 mr-2" />
              <h4 className="text-md font-medium text-gray-700">{designation}</h4>
            </div>
          )}

          {email && (
            <a
              href={"mailto:" + email}
              className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-700 hover:text-blue-600 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-blue-500" />
              <span className="truncate">{email}</span>
            </a>
          )}

          <button
            onClick={() => setOpen(true)}
            className="mt-4 px-5 py-1.5 text-sm font-medium rounded-lg border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-colors"
          >
            More Info
          </button>
        </div>
      </div>

      {open && <DetailModal staff={staff} onClose={() => setOpen(false)} />}
    </>
  );
}

export default Staffcard;