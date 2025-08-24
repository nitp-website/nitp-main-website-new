"use client";
import BackDepartment from "../../../components/department/BackDepartment";
import FacultyList from "../../../../components/facultycomponents/FacultyList";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [faculty, setFaculty] = useState(true);
  const [loading, setLoading] = useState(true);

  const hasFaculty = true; // Faculty is always present

  return (
    <div className="flex flex-col px-3 py-10 max-sm:p-4 text-black">
      {faculty && hasFaculty && (
        <div className="flex flex-col">
          <p className="text-red-900 text-xl lg:text-2xl font-bold">FACULTY</p>
          <FacultyList url={"/Department/ME/faculty"} branch={"me"} />
        </div>
      )}
    </div>
  );
};

export default Home;