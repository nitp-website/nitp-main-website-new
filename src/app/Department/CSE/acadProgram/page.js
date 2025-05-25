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
    courseStructure:
      "https://docs.google.com/document/d/1Y_eQ_d8oMMN4PMcVKzcu34BQPkrfOpOE/edit",
    syllabus:
      "https://drive.google.com/drive/folders/1Dg-6ZXhk33eQmyxrShkBKFXX1tU7uW5I",
  },
  {
    title:
      "B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security)",
    degree: "Integrated B.Tech and M.tech",
    duration: "5 Years",
    description:
      "The admission to the 5-year B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    courseStructure:
      "https://docs.google.com/document/d/1Y_eQ_d8oMMN4PMcVKzcu34BQPkrfOpOE/edit",
    syllabus:
      "https://drive.google.com/drive/folders/1Dg-6ZXhk33eQmyxrShkBKFXX1tU7uW5I",
  },
  {
    title:
      "B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science)",
    degree: "Integrated B.Tech and M.tech",
    duration: "5 Years",
    description:
      "The admission to the 5-year B. Tech and M. Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    courseStructure:
      "https://docs.google.com/document/d/1Y_eQ_d8oMMN4PMcVKzcu34BQPkrfOpOE/edit",
    syllabus:
      "https://drive.google.com/drive/folders/1Dg-6ZXhk33eQmyxrShkBKFXX1tU7uW5I",
  },
  {
    title:
      "MCA with specialization in Artificial Intelligence and Internet of Thing",
    degree: "MCA",
    duration: "3 Years",
    description:
      "The admission to the 3-year MCA with specialization in Artificial Intelligence and Internet of Thing is through prestigious NIMCET. The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    courseStructure:
      "https://drive.google.com/drive/folders/16sldjbZ9afbwptOAlhGnGT4IKIoGaHgs",
    syllabus:
      "https://drive.google.com/drive/folders/1vYlnxzysCronUIhcbRjC9QOIyexc-QDn",
  },
  {
    title: "MCA with specialization in Data Science and Informatics",
    degree: "MCA",
    duration: "3 Years",
    description:
      "The admission to the 3-year MCA with specialization in Data Science and Informatics is through prestigious NIMCET. The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    courseStructure:
      "https://drive.google.com/drive/folders/1FshRnNcQa2xSdcNxI5qeIGIw3oNXP6rv",
    syllabus:
      "https://drive.google.com/drive/folders/1DiSTnBwx9Zxz3SGRsAEt05e5ZNKkqDv2",
  },
  {
    title: "M.Tech in Data Science and Engineering",
    degree: "M.tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Data Science and Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    courseStructure:
      "https://drive.google.com/drive/folders/1un2qr0DceEoHmbPhKYv5sIZR9wwLXmH_",
    syllabus:
      "https://drive.google.com/drive/folders/1TUFmHWhdut5G8edA4wwZj_5Dinh_qDMz",
  },
  {
    title: "M.Tech in Cyber Security",
    degree: "M.tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Cyber Security is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    courseStructure:
      "https://drive.google.com/drive/folders/1fx1nzhYGIzg6gilpmfJZbCoFPOcNfNT5",
    syllabus:
      "https://drive.google.com/drive/folders/1J_aYVyB83B9koE6OrK_bCsS_GCV4YX9g",
  },
  {
    title: "Ph.D. in Computer Science and Engineering",
    degree: "M.tech",
    duration: "2 Years",
    description:
      "The Department offers Ph. D in Computer Science and Engineering. Admission to this program is through an Institute Examination conducted by NIT Patna itself. This program is solely research based where students conduct their own work in an area of Computer Science and its applications under the guidance of faculty members.",
    courseStructure: "",
    syllabus: "",
  },
];

const CSEAcadProgrampage = () => {
  return (
    <div>
      <div className="py-1 mt-2">
        <div className="w-full xs:px-0 md:w-[90%] mx-auto">
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
