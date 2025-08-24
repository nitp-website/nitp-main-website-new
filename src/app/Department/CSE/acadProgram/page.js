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
    title: "B.Tech in Computer Science and Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "The admission to the 4-year B. Tech. (Computer Science and Engineering) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "btech",
  },
  {
    title: "B.Tech in Artificial Intelligence and Data Science",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "The admission to the 4-year B. Tech. (Artificial Intelligence and Data Science) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "btech-ai-ds",
  },
  {
    title:
      "B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security)",
    degree: "Integrated B.Tech and M.Tech",
    duration: "5 Years",
    description:
      "The admission to the 5-year B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "dual-cs",
  },
  {
    title:
      "B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science)",
    degree: "Integrated B.Tech and M.Tech",
    duration: "5 Years",
    description:
      "The admission to the 5-year B. Tech and M. Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "dual-ds",
  },
  {
    title:
      "MCA with specialization in Artificial Intelligence and Internet of Thing",
    degree: "MCA",
    duration: "3 Years",
    description:
      "The admission to the 3-year MCA with specialization in Artificial Intelligence and Internet of Thing is through prestigious NIMCET. The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "mca-ai",
  },
  {
    title: "MCA with specialization in Data Science and Informatics",
    degree: "MCA",
    duration: "3 Years",
    description:
      "The admission to the 3-year MCA with specialization in Data Science and Informatics is through prestigious NIMCET. The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "mca-ds",
  },
  {
    title: "M.Tech in Data Science and Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Data Science and Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "mtech-ds",
  },
  {
    title: "M.Tech in Cyber Security",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Cyber Security is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "mtech-cs",
  },
  {
    title: "Ph.D. in Computer Science and Engineering",
    degree: "Ph.D.",    
    duration: "",
    description:
      "The Department offers Ph. D in Computer Science and Engineering. Admission to this program is through an Institute Examination conducted by NIT Patna itself. This program is solely research based where students conduct their own work in an area of Computer Science and its applications under the guidance of faculty members.",
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
