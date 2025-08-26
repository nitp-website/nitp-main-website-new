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
    title: "IMSc",
    degree: "",
    duration: "",
    description:
      "The Department offers IMSc (Integrated M.Sc.) in Computer Science and Engineering. Admission to this program is through an Institute Examination conducted by NIT Patna itself. This program is solely research based where students conduct their own work in an area of Computer Science and its applications under the guidance of faculty members.",
    syllabus: "imsc",
  },
  {
    title:
      "Ph.D.",
    degree: "Ph.D.",
    duration: "",
    description:
      "The Department offers Ph. D in Computer Science and Engineering. Admission to this program is through an Institute Examination conducted by NIT Patna itself. This program is solely research based where students conduct their own work in an area of Computer Science and its applications under the guidance of faculty members.",
    // syllabus: "phd",
  },
  {
    title:
      "Integrated B.Tech and M.Tech Dual Degree",
    degree: "Integrated B.Tech and M.Tech",
    duration: "5 Years",
    description:
      "The Department offers B.Tech and M.Tech Dual Degree in Computer Science and Engineering. Admission to this program is through JEE (Main) examination. This program is solely research based where students conduct their own work in an area of Computer Science and its applications under the guidance of faculty members.",
    syllabus: "https://drive.google.com/file/d/1MPFriB_DYxQwIA99uRKgBfj-fwGVcU24/view",
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
