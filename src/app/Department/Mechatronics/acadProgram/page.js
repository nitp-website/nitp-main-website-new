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
  {
    title: "Ph.D. in Mechatronics and Automation Engineering",
    degree: "Ph.D.",
    // duration: "4 Years",
    description:
      "The Department offers a Ph.D. in Mechatronics and Automation Engineering. Admission to this program is through an institute-level examination conducted by NIT Patna, followed by an interview as per institute norms. This is a purely research-oriented program, designed to promote advanced interdisciplinary research integrating mechanical systems, electronics, control engineering, robotics, sensors and actuators, embedded systems, artificial intelligence, and industrial automation. Scholars undertake independent and original research in emerging and application-driven areas of mechatronics and automation under the guidance of experienced faculty members. The program aims to develop researchers capable of contributing to advanced manufacturing, robotics, smart systems, Industry 4.0, autonomous systems, and intelligent automation, with outcomes relevant to academia, research organizations, and high-end industrial applications.",
    // syllabus:
    //   "https://drive.google.com/file/d/1IQFqpo9jTHIBNgS8o2zeyv5xIZYWcQ7p/view",
    // courseStructure: "https://drive.google.com/file/d/107lkKUTm9Yoilr_RiP2BpnkAy_VU1soJ/view",
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
