
"use client";

import React from "react";
import { AcadProgramCard } from "./AcadProgramCard";

const programs = [
  {
    title: "B.Tech in Electrical Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "Admission to the 4-year B.Tech (Electrical Engineering) is through IIT-JEE (Main). The program includes core courses and electives to help students specialize in their interests. See the course structure and syllabus below.",
    syllabus: "https://drive.google.com/file/d/1ODel2GhRzNrA5r3PLUMTQldowoWYt-Cn/view",
  },
  {
    title: "M.Tech in Power System Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "Admission to the 2-year M.Tech in Power System Engineering is through GATE. The program focuses on advanced topics in power systems, with a strong research and project component.",
    syllabus: "https://drive.google.com/file/d/1AV9XSasRFC3fTm7FCKhyiTPefii9u7Cd/view",
  },
  {
    title: "M.Tech in Control System Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "Admission to the 2-year M.Tech in Control System Engineering is through GATE. The program covers advanced control theory, applications, and research.",
    syllabus: "https://drive.google.com/file/d/1AV9XSasRFC3fTm7FCKhyiTPefii9u7Cd/view",
  },
  {
    title: "Ph.D. in Electrical Engineering",
    degree: "Ph.D.",
    duration: "",
    description:
      "The department offers a Ph.D. in Electrical Engineering. Admission is through an institute examination. The program is research-based, allowing students to work in various areas of electrical engineering under faculty guidance.",
     syllabus: "https://drive.google.com/file/d/1KdqphtQwIuWrC_gdYxjuAcG9TaxaUVf-/view",
 
  },
];

const EEAcadProgrampage = () => {
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

export default EEAcadProgrampage;