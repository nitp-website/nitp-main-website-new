"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loading from "../../loading";

const FacultyCard = dynamic(() => import("./Facultycard"), {
  loading: () => <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]"><Loading/></div>
});

const FacultyList = ({ department }) => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!department) return;

    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty/${department}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        setFacultyData(sortedData);
        console.log(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [department]);

  if (loading) {
    return <div><Loading/></div>;
  }

  const renderFacultiesByDesignation = (designations, title) => {
    const filteredFaculties = facultyData.filter(faculty =>
      designations.includes(faculty.designation)
    );

    if (filteredFaculties.length === 0) return null;

    return (
      <div key={title}>
        <h6 className='font-bold text-black'>{title}</h6>
        <div className="grid grid-cols-2 gap-1 text-black">
          {filteredFaculties.map(faculty => (
            <FacultyCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
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

  const renderRemainingFaculties = () => {
    const classifiedDesignations = [
      "Professor & HOD",
      "Associate Professor & HOD",
      "Professor & HoD",
      "Associate Professor & HoD",
      "HoD & Professor",
      "HoD & Associate Professor",
      "HoD and Professor",
      "Professor",
      "Associate Professor",
      "Assistant Professor",
      "Registrar"
    ];

    const remainingFaculties = facultyData.filter(
      faculty => !classifiedDesignations.includes(faculty.designation)
    );

    if (remainingFaculties.length === 0) return null;

    return (
      <div key="Others">
        <h6 className='font-bold text-black'>Others</h6>
        <div className="grid grid-cols-2 gap-1">
          {remainingFaculties.map(faculty => (
            <FacultyCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
              designation={faculty.designation}
              qualification={faculty.qualification}
              researchInterests={faculty.researchInterests}
              email={faculty.email}
              phone={faculty.ext_no}
              profileLink={`/${faculty.email}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col p-2">
        <div>
          <p className="text-red-900 ml-10 text-3xl font-bold">Faculty</p>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-xl ml-10 font-semibold">
            {department}
          </p>
        </div>
        <div>
          {renderFacultiesByDesignation(
            [
              "Professor & HOD",
              "Associate Professor & HOD",
              "Professor & HoD",
              "Associate Professor & HoD",
              "HoD & Professor",
              "HoD & Associate Professor",
              "HoD and Professor"
            ],
            "Head of Department"
          )}
          {renderFacultiesByDesignation(["Professor"], "Professor")}
          {renderFacultiesByDesignation(["Associate Professor"], "Associate Professor")}
          {renderFacultiesByDesignation(["Assistant Professor"], "Assistant Professor")}
          {renderRemainingFaculties()}
        </div>
      </div>
    </>
  );
};

export default FacultyList;
