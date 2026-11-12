"use client";
import React, { useEffect, useState } from "react";
import FacultyCard from "./Facultycard";
import Loading from "@/app/Loading";

export const isAdjunctFaculty = (faculty) => {
  if (!faculty) return false;
  const isRetired =
    String(faculty.is_retired) === "1" ||
    faculty.is_retired === 1 ||
    faculty.is_retired === true;
  if (isRetired) return false;
  const d = (faculty.designation || "").trim().toLowerCase();
  return (
    d === "professor of practice" ||
    d === "associate professor of practice" ||
    d.includes("professor of practice") ||
    d.includes("adjunct")
  );
};

export const sortAdjunctFaculty = (a, b) => {
  const getRank = (f) => {
    const d = (f.designation || "").trim().toLowerCase();
    if (d.includes("associate professor of practice")) return 2;
    if (d.includes("professor of practice")) return 1;
    return 3;
  };
  const rankDiff = getRank(a) - getRank(b);
  if (rankDiff !== 0) return rankDiff;
  return (a.name || "").localeCompare(b.name || "");
};

const AdjunctFacultyPage = ({ branch }) => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!branch) return;
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in"}/api/v2/faculty?type=${branch}`;

    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const adjunctOnly = data.filter(isAdjunctFaculty);
          const sorted = adjunctOnly.sort(sortAdjunctFaculty);
          setFacultyData(sorted);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching adjunct faculty data:", err);
        setLoading(false);
      });
  }, [branch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col py-10 max-sm:p-2 text-black w-full">
      <h2 className="text-red-900 w-full text-xl lg:text-3xl font-bold text-center mb-6 uppercase">
        Adjunct Faculty / Professor of Practice
      </h2>
      {facultyData.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {facultyData.map((faculty) => (
            <FacultyCard
              key={faculty.id || faculty.email}
              name={faculty.name}
              image={faculty.image}
              designation={faculty.designation}
              department={faculty.department}
              researchInterests={faculty.research_interest}
              academic_responsibility={faculty.academic_responsibility}
              email={faculty.email}
              phone={faculty.ext_no}
              journalPublications={faculty.journal_papers_count}
              conferencePublications={faculty.conference_papers_count}
              patents={faculty.ipr_count}
              projects={faculty.sponsored_projects_count}
              research_students={faculty.phd_candidates_count}
              profileLink={`/profile/${faculty.email}`}
              is_retired={faculty.is_retired}
              gender={faculty.gender}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 my-8">
          No adjunct faculty or professor of practice found for this department.
        </div>
      )}
    </div>
  );
};

export default AdjunctFacultyPage;

