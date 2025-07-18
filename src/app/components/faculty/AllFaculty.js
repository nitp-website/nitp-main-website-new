"use client";
import { useState, useEffect } from "react";
import React from "react";
import Loading from "../../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const FacultyCard = ({
  name,
  image,
  designation,
  department,
  email,
  phone,
  profileLink,
  academic_responsibility,
}) => {
  return (
    <div className="w-[300px] h-[325px] mx-4 my-4">
      <div className="py-8 pb-10 mb-8 bg-[#f7f5ec] text-center overflow-hidden relative rounded-[20px] group h-full">
        <div className="inline-block h-[130px] w-[130px] mb-8 z-[1] relative">
          <div className="absolute w-full h-0 rounded-full bg-[rgb(153,27,27)] bottom-[135%] right-0 left-0 opacity-90 scale-[3] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute w-full h-full rounded-full bg-[rgb(153,27,27)] top-0 left-0 -z-[1]"></div>
          <img
            src={image || "/faculty.jpeg"}
            alt={name}
            width={130}
            height={130}
            className="w-[130px] h-[130px] object-cover rounded-full transform scale-100 transition-all duration-900 ease-in-out group-hover:shadow-[0_0_0_14px_#f7f5ec] group-hover:scale-[0.7]"
            loading="lazy"
          />
        </div>

        <div className="px-4">
          <h3 className="text-md text-black font-bold">{name}</h3>
          {academic_responsibility && (
            <h4 className="block text-[15px] text-[rgb(153,27,27)] font-medium capitalize">
              {academic_responsibility}
            </h4>
          )}
          <h4 className="block text-[15px] text-[#4e5052] capitalize">
            {designation}
          </h4>
          <h4 className="block text-sm text-black capitalize">{department}</h4>
        </div>

        <ul className="w-full flex justify-between p-0 m-0 bg-[rgb(153,27,27)] absolute -bottom-[100px] left-0 transition-all duration-500 ease-in-out group-hover:bottom-0">
          {phone && (
            <li className="inline-block">
              <a
                href={`tel:${phone}`}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="w-8" />
              </a>
            </li>
          )}
          {email && (
            <li className="inline-block">
              <a
                href={`mailto:${email}`}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-8" />
              </a>
            </li>
          )}
          {profileLink && (
            <li className="inline-block">
              <a
                href={profileLink}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                View Profile
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const AllFaculty = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [organizedFaculty, setOrganizedFaculty] = useState({
    deans: [],
    hods: [],
    professors: [],
    associateProfessors: [],
    assistantProfessors: []
  });
  const excludedDepartments = ["Other Employees", "Officers","developer","Developer"];

  useEffect(() => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=all`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        const filteredFaculty = data.filter(
          (item) => !excludedDepartments.includes(item.department)
        );
        const sortedData = filteredFaculty.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setFacultyData(sortedData);
        
        // Organize faculty into categories
        const deans = sortedData.filter(faculty => 
          faculty.academic_responsibility && 
          faculty.academic_responsibility.toLowerCase().startsWith("dean")
        );
        
        // Get IDs of faculty who are deans
        const deanIds = new Set(deans.map(faculty => faculty.id));
        
        // Filter faculty by designation, excluding those who are already counted as deans
        const hods = sortedData.filter(faculty => 
          !deanIds.has(faculty.id) && 
          [
            "Professor & HOD",
            "Associate Professor & HOD",
            "Professor & HoD",
            "Associate Professor & HoD",
            "HoD & Professor",
            "HoD & Associate Professor",
            "HoD and Professor",
          ].includes(faculty.designation)
        );
        
        // Get IDs of faculty who are either deans or HODs
        const renderedIds = new Set([
          ...deans.map(faculty => faculty.id),
          ...hods.map(faculty => faculty.id)
        ]);
        
        // Filter remaining faculty by designation
        const professors = sortedData.filter(faculty => 
          !renderedIds.has(faculty.id) && faculty.designation === "Professor"
        );
        
        const associateProfessors = sortedData.filter(faculty => 
          !renderedIds.has(faculty.id) && faculty.designation === "Associate Professor"
        );
        
        const assistantProfessors = sortedData.filter(faculty => 
          !renderedIds.has(faculty.id) && faculty.designation === "Assistant Professor"
        );
        
        setOrganizedFaculty({
          deans,
          hods,
          professors,
          associateProfessors,
          assistantProfessors
        });
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Render a section of faculty
  const renderFacultySection = (facultyList, title) => {
    if (!facultyList || facultyList.length === 0) return null;

    return (
      <div key={title} className="mb-8">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <div className="flex flex-wrap justify-center gap-4 p-4 mt-2">
          {facultyList.map((faculty) => (
            <FacultyCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
              department={faculty.department}
              designation={faculty.designation}
              academic_responsibility={faculty.academic_responsibility}
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
    <div className="mx-auto px-4 py-8">
      {renderFacultySection(organizedFaculty.deans, "Deans")}
      {renderFacultySection(organizedFaculty.hods, "Head of Department")}
      {renderFacultySection(organizedFaculty.professors, "Professor")}
      {renderFacultySection(organizedFaculty.associateProfessors, "Associate Professor")}
      {renderFacultySection(organizedFaculty.assistantProfessors, "Assistant Professor")}
    </div>
  );
};

export default AllFaculty;
