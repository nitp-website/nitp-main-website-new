"use client";
import React, { useEffect, useState } from "react";
import FacultyCard from "./Facultycard";
import Loading from "@/app/Loading";
import { fetchCollegeJoiningDate } from "@/utils/experienceCalculator";

const InMemoriamPage = ({ branch }) => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!branch) return;
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
    const apiEndpoint = `${backendUrl}/api/v2/faculty?type=${branch}`;

    fetch(apiEndpoint)
      .then((res) => res.json())
      .then(async (data) => {
        if (Array.isArray(data)) {
          const inMemoriamOnly = data.filter(
            (f) => String(f.in_memoriam) === "1" || f.in_memoriam === 1 || f.in_memoriam === true
          );

          // If joining date is not given, fetch from work_experience to determine when they joined our college
          const enriched = await Promise.all(
            inMemoriamOnly.map(async (faculty) => {
              if (faculty.date_of_joining || !faculty.email) return faculty;
              const joining = await fetchCollegeJoiningDate(faculty.email, backendUrl);
              return joining ? { ...faculty, date_of_joining: joining } : faculty;
            })
          );

          const sorted = enriched.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
          setFacultyData(sorted);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching in-memoriam faculty data:", err);
        setLoading(false);
      });
  }, [branch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col py-10 max-sm:p-2 text-black w-full">
      <div className="text-center mb-8 px-4">
        <h2 className="text-[#5D1A14] w-full text-2xl lg:text-3xl font-serif font-bold tracking-wide">
          IN MEMORIAM
        </h2>
        <div className="w-20 h-1 bg-[#5D1A14] mx-auto my-3 rounded-full opacity-70" />
        <p className="text-gray-600 max-w-2xl mx-auto text-sm italic">
          Honoring the enduring legacy, distinguished contributions, and cherished memory of our departed faculty members whose dedication enriched our department and institute.
        </p>
      </div>
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
              in_memoriam={faculty.in_memoriam}
              service_end_date={faculty.service_end_date}
              date_of_joining={faculty.date_of_joining}
              gender={faculty.gender}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 my-8">
          No records found for this department.
        </div>
      )}
    </div>
  );
};

export default InMemoriamPage;
