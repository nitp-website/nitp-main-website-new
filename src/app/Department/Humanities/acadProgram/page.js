"use client";

import { useState } from "react";
import {
  BookOpen,
  Clock,
  Calendar,
  Users,
  GraduationCap,
  FileText,
} from "lucide-react";
import React from "react";
import { AcadProgramCard } from "./AcadProgramCard";

const programs = [
  {
    title: "B.Tech in Humanities and Social Science",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "The admission to the 4-year B.Tech in Humanities and Social Science is through IIT-JEE (Main). The program integrates core engineering education with interdisciplinary studies in humanities and social sciences, allowing students to develop critical thinking, communication skills, and a broader understanding of societal issues. It includes core and elective courses to help students specialize according to their interests.",
    syllabus: "btech",
  },
  {
    title: "M.C.A in Humanities and Social Science",
    degree: "MCA",  
    duration: "2 Years",
    description:
      "The Department offers a Ph.D. program in Humanities and Social Science, focusing on interdisciplinary research in areas such as philosophy, sociology, psychology, economics, and literature. Admission is based on an institute-level examination and interview process. The program emphasizes original research under the mentorship of experienced faculty members.",
    syllabus: "mca",
  },
  {
    title: "Ph.D. in Humanities and Social Science",
    degree: "Ph.D.",
    duration: "",
    description:
      "This Ph.D. program in Humanities and Social Science at NIT Patna supports advanced research across diverse disciplines including language studies, cultural studies, economics, history, political science, and more. Students are selected through a rigorous examination and interview process, and are expected to contribute original research under faculty guidance.",
    syllabus: "phd",
  },
];


const CSEAcadProgrampage = () => {
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

export default CSEAcadProgrampage;
