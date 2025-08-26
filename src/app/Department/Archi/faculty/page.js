"use client";
import FacultyList from "../../../../components/facultycomponents/FacultyList";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ArchiFacultyPage = () => {
  const [faculty, setFaculty] = useState(true);
  const [loading, setLoading] = useState(true);

  const hasFaculty = true;

  return (
    <div className="flex flex-col md:flex-row py-10 max-sm:p-2 text-black">
      {faculty && hasFaculty && (
        <div className="flex flex-col">
          <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">FACULTY</p>
          <FacultyList url={"/Department/Archi/Faculty"} branch={"arch"} />
        </div>
      )}
    </div>
  );
};

export default ArchiFacultyPage;
