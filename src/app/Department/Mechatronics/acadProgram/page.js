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
    title: "B.Tech in Mechatronics and Automation Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "The B.Tech in Mechatronics and Automation Engineering program integrates mechanical, electronics, computer science, and control engineering to prepare students for careers in designing and managing automated systems.",
    syllabus:
      "https://drive.google.com/file/d/1IQFqpo9jTHIBNgS8o2zeyv5xIZYWcQ7p/view",
    courseStructure: "https://drive.google.com/file/d/107lkKUTm9Yoilr_RiP2BpnkAy_VU1soJ/view",
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
