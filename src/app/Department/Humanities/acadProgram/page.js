"use client";

import React from "react";
import { AcadProgramCard } from "./AcadProgramCard";

const programs = [
  {
    title: "UG & DD Courses",
    degree: "UG & DD",
    duration: "",
    description: "The Department of Humanities and Social Sciences offers various undergraduate and dual degree courses. Following are the course structure and syllabus.",
    links: [
      { name: "Course Structure & Syllabus (2025 onwards)", url: "https://drive.google.com/file/d/12eMQpf-rzXmCspOMD1mp7sxXu7aGzX63/view?usp=sharing" }
    ],
  },
  {
    title: "PG Course",
    degree: "PG",
    duration: "",
    description: "The Department of Humanities and Social Sciences offers postgraduate courses. Following are the course structure and syllabus.",
    links: [
      { name: "Course Structure & Syllabus (2025 onwards)", url: "https://drive.google.com/file/d/12eMQpf-rzXmCspOMD1mp7sxXu7aGzX63/view?usp=sharing" }
    ],
  },
  {
    title: "Ph.D. in Humanities and Social Sciences",
    degree: "Ph.D.",
    duration: "",
    description: "The Department offers Ph.D. programs in various disciplines of Humanities and Social Sciences. Following are the course structure and syllabus.",
    links: [
      { name: "Course Structure & Syllabus", url: "https://drive.google.com/file/d/12eMQpf-rzXmCspOMD1mp7sxXu7aGzX63/view?usp=sharing" }
    ],
  },
];

const HumanitiesAcadProgramPage = () => {
  return (
    <div>
      <div className="py-1 mt-2">
        <div className="xs:px-0 w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              Academic Programs
            </h2>
            <div className="flex flex-wrap justify-between mt-8">
              {programs.map((program, index) => (
                <AcadProgramCard program={program} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanitiesAcadProgramPage;