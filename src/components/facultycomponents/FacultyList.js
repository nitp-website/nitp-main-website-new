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

        // Sorting the faculty data based on the order of designations
        const sortedData = data.sort((a, b) => {
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
    return <div>Loading...</div>;
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
              email={faculty.email}
              phone={faculty.ext_no}
              profileLink={`${url}/${faculty.email}`}
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
