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
    title: "B.Arch in Architecture and Planning",
    degree: "B.Arch",
    duration: "5 Years",
    description: "The admission to the 5-year B.Arch in Architecture and Planning is through prestigious JEE (Main) Paper-2. The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "https://docs.google.com/spreadsheets/d/1Et1TS21Rk3esAWdWaAyt2nYGeR6oY9TX/edit?rtpof=true&sd=true&gid=1071549573#gid=1071549573",
  },
  {
    title:
      "M.Arch (Sustainable Architecture)",
    degree: "Integrated B.Tech and M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M.Arch (Sustainable Architecture) is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://docs.google.com/document/d/1d1mzOzYLzPL8QSY6BJws69dGHe6_zl9w/edit?rtpof=true&sd=true&tab=t.0",
  },
  {
    title: "M.Tech/ MURP",
    degree: "Postgraduate",    
    duration: "",
    description:
      "The admission to the 2-year M.Tech/ MURP in Urban and Regional Planning is through GATE examination. The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "https://docs.google.com/document/d/1jTFrdVph3WQXdKf1Qu48yfGCeZdYbbTR/edit?rtpof=true&sd=true&tab=t.0",
  },
];

const ArchiAcadProgrampage = () => {
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

export default ArchiAcadProgrampage;
