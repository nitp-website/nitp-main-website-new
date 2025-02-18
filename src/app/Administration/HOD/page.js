"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loading from "../../Loading";

const FacultyCard = dynamic(
  () => import("../../components/faculty/Facultycard"),
  {
    loading: () => (
      <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">
        <Loading />
      </div>
    ),
  }
);

const FacultyList = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=all`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
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
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const renderHODFaculties = () => {
    const hodDesignations = [
      "Professor & HOD",
      "Associate Professor & HOD",
      "Professor & HoD",
      "Associate Professor & HoD",
      "HoD & Professor",
      "HoD & Associate Professor",
      "HoD and Professor",
    ];

    const hodFaculties = facultyData.filter((faculty) =>
      hodDesignations.includes(faculty.designation)
    );

    const uniqueHODFaculties = new Map();

    hodFaculties.forEach((faculty) => {
      if (!uniqueHODFaculties.has(faculty.name) || faculty.image) {
        uniqueHODFaculties.set(faculty.name, faculty);
      }
    });

    const filteredHODFaculties = Array.from(uniqueHODFaculties.values());

    if (filteredHODFaculties.length === 0) return null;

    return (
      <div>
        <h6 className="font-bold text-black text-2xl mt-4 px-4">Head of Departments</h6>
        <div className="flex flex-wrap justify-center gap-4 p-4 mt-4">
          {filteredHODFaculties.map((faculty) => (
            <FacultyCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
              department={faculty.department}
              designation={faculty.designation}
              qualification={faculty.qualification}
              researchInterests={faculty.research_interest}
              email={faculty.email}
              phone={faculty.ext_no}
              profileLink={`/profile/${faculty.email}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-2">
      <div>{renderHODFaculties()}</div>
    </div>
  );
};

export default FacultyList;