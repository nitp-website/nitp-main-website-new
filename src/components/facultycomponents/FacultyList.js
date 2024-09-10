"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const FacultyCard=dynamic(()=>import("./Facultycard"),{
  loading:()=><div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">Loading</div>
})
const FacultyList = ({url,branch}) => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Actual API endpoint
    const apiEndpoint = `https://admin.nitp.ac.in/api/faculty/${branch}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        console.log(data)
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderFacultiesByDesignation = (designations, title) => {
    const filteredFaculties = facultyData.filter(faculty =>
      designations.includes(faculty.designation)
    );

    if (filteredFaculties.length === 0) return null;

    return (
      <div key={title}>
        <h6 className='font-bold'>{title}</h6>
        <div className="grid md:grid-cols-2 gap-1 ">
          {filteredFaculties.map(faculty => (
            <FacultyCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image} 
              designation={faculty.designation}
              // qualification={faculty.qualification}
              researchInterests={faculty.research_interest}
              email={faculty.email}
              phone={faculty.ext_no}
              profileLink={`${url}/${faculty.email}`} // 
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
        <h6 className='font-bold'>Others</h6>
        <div className="grid md:grid-cols-2 gap-1 ">
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
              profileLink={`${url}/${faculty.email}`} 
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
