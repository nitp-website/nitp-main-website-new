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
    title: "B.Tech in Mechanical Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "The admission to the 4-year B. Tech. (Mechanical Engineering) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "/Department/ME/syllabus/btech",
  },
  {
    title:
      "B.Tech and M.Tech Dual Degree (Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering)",
    degree: "Integrated B.Tech and M.Tech",
    duration: "5 Years",
    description:
      "The admission to the 5-year B.Tech and M.Tech Dual Degree (Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "/Department/ME/syllabus/dual",
  },
  {
    title: "M.Tech in Mechanical Engineering with specialization in Design Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Design Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1bkIRc4IHy-qQjDuWowa5Ce7soLEmOlBZ/view",
    courseStructure: "https://drive.google.com/file/d/10uU7XcX9Y9kMZnVDGvi8M8gi9dJ1yab9/view",
    from: [
      {
        time: "2025 Onwards",
        courseStructure: "https://drive.google.com/file/d/1iRFw82OdHHnm4tRs1BKeBf2sa9_XJT8F/view"
      }
    ]
  },
  {
    title: "M.Tech in Mechanical Engineering with specialization in Thermal Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Thermal Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1bkIRc4IHy-qQjDuWowa5Ce7soLEmOlBZ/view",
    courseStructure: "https://drive.google.com/file/d/10uU7XcX9Y9kMZnVDGvi8M8gi9dJ1yab9/view",
  },
  {
    title: "M.Tech in Mechanical Engineering with specialization in Thermal & Fluid Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Thermal & Fluid Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    from: [
      {
        time: "2025 Onwards",
        courseStructure: "https://drive.google.com/file/d/1GXT4bOI55McJxuP2URd2gWMqJTASzDGx/view"
      }
    ]
  },
  {
    title: "M.Tech in Mechanical Engineering with specialization in Smart Manufacturing",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Smart Manufacturing is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    from: [
      {
        time: "2025 Onwards",
        courseStructure: "https://drive.google.com/file/d/1MdW-T0SwVLwEqB6cP4FsRuKL4novmg6V/view"
      }
    ]
  },
  {
    title: "Ph.D. in Mechanical Engineering",
    degree: "Ph.D.",
    duration: "",
    description:
      "The Department offers Ph. D in Mechanical Engineering. Admission to this program is through an Institute Examination conducted by NIT Patna itself. This program is solely research based where students conduct their own work in an area of Mechanical Engineering and its applications under the guidance of faculty members.",
    syllabus: "phd",
  },
];

const MEAcadProgrampage = () => {
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

export default MEAcadProgrampage;
