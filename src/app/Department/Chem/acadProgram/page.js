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
    title: "Dual Degree in Chemical technology- For 2023-2028/2024-2029 batches",
    degree: "B.Tech And M.Tech Dual Degree",
    duration: "5 Years",
    description:
      "The Department of Chemical Science and Technology offers the 5-year integrated B. Tech and M. Tech Dual Degree program in Chemical Technology. Admission to the program is granted through prestigious IIT- JEE (Main) examination. The curriculum comprises a blend of core courses along with a selection of electives, allowing students to tailor their studies to specific areas of interest. Following are the course structure and syllabus.",
    syllabus:
      "CST_Syllabus_ DD_BTech+MTech",
      link: "https://drive.google.com/file/d/1rVXDNibkoMZ2LA53pWxF6ONLq_cDIrP6/view?usp=sharing"
  },

  {
    title: "Dual degree in Chemical Technology- For 2025 Onwards.",
    degree: "B.Tech And M.Tech Dual Degree",
    duration: "5 Years",
    description:
      "The Department of Chemical Science and Technology offers the 5-year integrated B. Tech and M. Tech Dual Degree program in Chemical Technology. Admission to the program is granted through prestigious IIT- JEE (Main) examination. The curriculum comprises a blend of core courses along with a selection of electives, allowing students to tailor their studies to specific areas of interest. Following are the course structure and syllabus.",
    syllabus:
      "CST_Syllabus_ DD_BTech+MTech",
      link: "https://drive.google.com/file/d/1UxEymB3Bis7rhaIMpp7vSydJ5JppLzGs/view?usp=sharing"
  },

  {
    title: "PhD Courses",
    degree: "Ph.D.",    
    duration: "",
    description:
      "The Department offers a Ph.D. program, with admissions based on an entrance examination and interview conducted by NIT Patna. This is a research-intensive program where students carry out independent research in a specialized area of Chemical Science and Technology under the mentorship of faculty members.",
    // syllabus: "",
  }
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
