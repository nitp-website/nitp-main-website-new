"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";
import { useInfiniteQuery } from "@tanstack/react-query";

const FacultyCard = dynamic(() => import("./FacultyCard"), {
  loading: () => (
    <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">Loading</div>
  ),
});

const AllFaculty = () => {
  const [facultys, setFacultys] = useState([]);
  const [error, setError] = useState(false);
  const api = "https://admin.nitp.ac.in/api/faculty/all";
  const excludedDepartments = ["Other Employees", "Officers"];

  useEffect(() => {
    const fetchFaculty =async () => {
      try {
        const { data } = await axios.get(api);
        const filteredFaculty = data.filter(
          (item) => !excludedDepartments.includes(item.department)
        );
        setFacultys(filteredFaculty);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchFaculty();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-center">
          <p className="text-red-500">Sorry, failed to fetch the faculty data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-black">
      {facultys?.map((faculty)=>
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
        />)
      }
    </div>
  );
};

export default AllFaculty;
