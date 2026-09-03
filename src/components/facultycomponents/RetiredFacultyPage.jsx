"use client";
import React, { useEffect, useState } from "react";
import FacultyCard from "./Facultycard";
import Loading from "@/app/Loading";

const RetiredFacultyPage = ({ branch }) => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!branch) return;
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v2/faculty?type=${branch}`;

    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const retiredOnly = data.filter(
            (f) => String(f.is_retired) === "1" || f.is_retired === 1 || f.is_retired === true
          );
          const sorted = retiredOnly.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
          setFacultyData(sorted);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching retired faculty data:", err);
        setLoading(false);
      });
  }, [branch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col py-10 max-sm:p-2 text-black w-full">
      <h2 className="text-red-900 w-full text-xl lg:text-3xl font-bold text-center mb-6">
        RETIRED FACULTIES
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
          No retired faculties found for this department.
        </div>
      )}
    </div>
  );
};

export default RetiredFacultyPage;
