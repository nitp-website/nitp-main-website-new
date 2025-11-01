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
    title: "B.Tech in Electrical Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "Admission to the 4-year B.Tech (Electrical Engineering) is through IIT-JEE (Main). The program covers core courses in electrical engineering, electives, and practical training in state-of-the-art laboratories.",
    syllabus: "btech",
  },
  {
    title: "Dual Degree Programme in B.Tech (Electrical Engineering) and  M.Tech. (Power Systems Engineering)",
    degree: "Integrated B.Tech and M.Tech",
    duration: "2 Years",
    description:
      "Admission to the 2-year M.Tech (Power Systems Engineering) is through GATE. The program focuses on advanced topics in power systems, including generation, transmission, distribution, and protection, with research and project work.",
    syllabus: "mtech-power",
  },
  {
    title: "M.Tech in Control Systems Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "Admission to the 2-year M.Tech (Control Systems Engineering) is through GATE. The program covers modern control theory, automation, instrumentation, and applications in industry, with emphasis on research and innovation.",
    syllabus: "mtech-control",
  },
  {
    title: "Ph.D. in Electrical Engineering",
    degree: "Ph.D.",
    duration: "",
    description:
      "The Department offers Ph.D. in Electrical Engineering. Admission is through an institute-level examination. The program is research-based, allowing students to work on cutting-edge topics under faculty guidance.",
    syllabus: "phd",
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
