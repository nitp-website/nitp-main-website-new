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
//// not sure about degree and course structure
const programs = [
  {
    title: "B. Tech and M. Tech Dual Degree in Chemical Technology",
    degree: "B.Tech And M.Tech Dual Degree",
    duration: "5 Years",
    description:
      "The Department of Chemical Science and Technology offers the 5-year integrated B. Tech and M. Tech Dual Degree program in Chemical Technology. Admission to the program is granted through prestigious IIT- JEE (Main) examination. The curriculum comprises a blend of core courses along with a selection of electives, allowing students to tailor their studies to specific areas of interest. Following are the course structure and syllabus.",
    syllabus:
      "CST_Syllabus_ DD_BTech+MTech",
      link: "https://drive.google.com/file/d/16Ooym161sd77HZHEw3bRMd87zsgTfwzy/view?usp=sharing"
  },

  {
    title: "Ph.D. in Chemistry",
    degree: "Ph.D.",    
    duration: "",
    description:
      "The Department offers Ph.D. in Chemistry. Admission to this program is through an Examination and Interview conducted by NIT Patna itself. This program is solely research based where students conduct their own work in an area of Chemistry under the guidance of faculty members.",
    syllabus: "CST_Syllabus_PhD-Chemisty",
    link: "https://drive.google.com/file/d/165cz5NQOVI-Hkyubmb5BKJgq_dZA5rZF/view?usp=sharing"
  },

  {
    title: "Ph.D. in Chemical Engineering",
    degree: "Ph.D.",    
    duration: "",
    description:
      "The Department offers a Ph.D. program in Chemical Engineering, with admissions based on an entrance examination and interview conducted by NIT Patna. This is a research-intensive program where students carry out independent research in a specialized area of Chemical Engineering under the mentorship of faculty members.",
    syllabus: "",
  },
];

const cheAcadProgrampage = () => {
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

export default cheAcadProgrampage;