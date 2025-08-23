"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const FacultyCard = dynamic(() => import("./Facultycard"), {
  loading: () => (
    <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">Loading</div>
  ),
});

const FacultyList = ({ url, branch }) => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=${branch}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        const order = [
          "HoD & Professor",
          "HoD & Associate Professor",
          "HoD and Professor",
          "Professor",
          "Associate Professor",
          "Assistant Professor",
          "Registrar",
          "Temporary Faculty"
        ];

        // Sorting the faculty data based on the order of designations and academic_responsibility
        const sortedData = data.sort((a, b) => {
          const aIsHoD = a.designation.includes("HoD");
          const bIsHoD = b.designation.includes("HoD");

          // HoD always comes first, regardless of academic responsibility
          if (aIsHoD && !bIsHoD) {
            return -1; // a (HoD) comes before b
          }
          if (!aIsHoD && bIsHoD) {
            return 1; // b (HoD) comes before a
          }

          // If neither is HoD or both are HoD, then check for Dean
          const aIsDean = a.academic_responsibility?.startsWith("Dean");
          const bIsDean = b.academic_responsibility?.startsWith("Dean");

          // If one is Dean and the other isn't, prioritize the Dean
          if (aIsDean && !bIsDean) {
            return -1; // Dean comes before non-Dean
          }
          if (!aIsDean && bIsDean) {
            return 1; // Dean comes before non-Dean
          }

          // If both are Deans or neither is Dean, use the regular designation order
          return order.indexOf(a.designation) - order.indexOf(b.designation);
        });

        setFacultyData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg text-gray-600 animate-pulse">
      Loading Faculties...
    </div>;
  }

  // Filter faculties that are not in the specified order
  const others = facultyData.filter(
    (faculty) => ![
      "HoD & Professor",
      "HoD & Associate Professor",
      "HoD and Professor",
      "Professor",
      "Associate Professor",
      "Assistant Professor",
      "Registrar",
      "Temporary Faculty"
    ].includes(faculty.designation)
  );

  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* Render faculty data based on the specified order */}
        {facultyData
          .filter((faculty) =>
            [
              "HoD & Professor",
              "HoD & Associate Professor",
              "HoD and Professor",
              "Professor",
              "Associate Professor",
              "Assistant Professor",
              "Registrar",
              "Temporary Faculty"
            ].includes(faculty.designation)
          )
          .map((faculty) => (
            <FacultyCard
              key={faculty.id}
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
            />
          ))}

        {/* Render other faculties not in the order list */}
        {others.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
            <h6 className="font-bold">Others</h6>
            {others.map((faculty) => (
              <FacultyCard
                key={faculty.id}
                name={faculty.name}
                image={faculty.image}
                designation={faculty.designation}
                department={faculty.department}
                researchInterests={faculty.research_interest}
                academic_responsibility={faculty.academic_responsibility}
                email={faculty.email}
                phone={faculty.ext_no}
                profileLink={`${url}/${faculty.email}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyList;
