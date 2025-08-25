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
    title: "B. Tech and M. Tech Dual Degree (Materials Science and Engineering) ",
    degree: "Integrated B.Tech and M.Tech",
    duration: "5 Years",
    description:
      "The admission to the 5-year B. Tech and M. Tech Dual Degree (Materials Science and Engineering) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/18KDRtfDx_gUm7PUf3f2bLiQe_ekargSB/view?usp=sharing",
  },
  {
    title:
      "Ph.D. in Applied Physics and Materials Engineering",
    degree: "Ph.D.",
    duration: "",
    description:
      "The Department offers Ph. D in Applied Physics and Materials Engineering. Admission to this program is through an Institute Examination conducted by NIT Patna itself. This program is solely research based where students conduct their own work in an area of Applied Physics and Materials Engineering under the guidance of faculty members.",
    syllabus:
      "https://drive.google.com/file/d/18KDRtfDx_gUm7PUf3f2bLiQe_ekargSB/view?usp=sharing",
  },
 
];

const PhyAcadProgrampage = () => {
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

export default PhyAcadProgrampage;
