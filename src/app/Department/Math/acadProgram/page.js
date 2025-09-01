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
    title:
      "Integrated B.Tech and M.Tech Dual Degree",
    degree: "Integrated B.Tech and M.Tech",
    duration: "5 Years",
    description:
      "The Department of Mathematics and Computing Technology offers the 5-year integrated B.Tech and M.Tech Dual Degree program in Mathematics and Computing Technology. Admission to the program is granted through the prestigious JEE (Main) examination. The program is designed in accordance to NEP, 2020 of India with a blend of both courses and research. The curriculum comprises a number of core courses along with a selection of electives, allowing students to tailor their studies to specific areas of interest as per their choice.",
    syllabus: "https://drive.google.com/file/d/1MPFriB_DYxQwIA99uRKgBfj-fwGVcU24/view",
  },
  {
    title:
      "Ph.D.",
    degree: "Ph.D.",
    duration: "",
    description:
      "Admissions to the Ph.D.  program is based on an entrance examination and interview conducted by the NIT Patna based on their valid GATE score. Students having JRF form other funding agencies (CSIR/ NBHM/ UGC/ INSPIRE etc.) are also allowed to get admission through personal interview. This is a research-intesive program where students carry out independent research in a specialized area of Mathematics under the mentorship of faculty members.",
    // syllabus: "phd",
  },
];

const MathAcadProgrampage = () => {
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

export default MathAcadProgrampage;
