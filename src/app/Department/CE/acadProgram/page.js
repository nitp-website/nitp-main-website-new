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
    title: "B.Tech in Civil Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "The admission to the 4-year B. Tech. (Civil Engineering) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    links: [
      { name: "2022-2024", url: "https://drive.google.com/file/d/1zRdX14UvcKVhHE-hI8Xpk4e1oXRAwEZK/view" },
      { name: "2025 onwards", url: "https://drive.google.com/file/d/1tvqpo-tNTyiej9KaahrENmY9dK9poFOn/view" },
      { name: "2026 onwards", url: "https://drive.google.com/file/d/10zGLobhgGZymsx7sKZN0BkyOag9qyDPH/view" }
    ],
  },
  {
    title: "M.Tech Water Resources Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Water Resources Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    links: [
      { name: "2025 onwards", url: "https://drive.google.com/file/d/1Iuiz77Rg0dSqca51gDGWG6SVOq_-2-J8/view" },
      { name: "2026 onwards", url: "https://drive.google.com/file/d/1b0sepurY3chcBg0wRjsjY2c5YaDtZwvm/view" }
    ],
  },
  {
    title:
      "M.Tech Transportation Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Transportation Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    links: [
      { name: "2025 onwards", url: "https://drive.google.com/file/d/19f5Y0LacTy1a70y-sqvXXiISJpAaJIPj/view" },
      { name: "2026 onwards", url: "https://drive.google.com/file/d/1x2SeebDjSpjvCQGzSR8HJ1bLOCVpJHgR/view" }
    ],
  },
  {
    title:
      "M.Tech Structural Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Structural Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    links: [
      { name: "2025 onwards", url: "https://drive.google.com/file/d/1TEkbF3hnugFPINiLaM0LBOt6NU9B9FYE/view" },
      { name: "2026 onwards", url: "https://drive.google.com/file/d/1S6DoQ_Ye6znYCFdR7KtPqLDeD5gTTuOi/view" }
    ],
  },
  {
    title:
      "M.Tech Geotechnical Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Geotechnical Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    links: [
      { name: "2025 onwards", url: "https://drive.google.com/file/d/1TD5ZfeHPUjE20u1fUhEnion5Ngq0pNkp/view" },
      { name: "2026 onwards", url: "https://drive.google.com/file/d/1MM0eK3fnLXEoanYBN70jMCE0kyS5jeHb/view" }
    ],
  },
  {
    title: "M.Tech Environmental Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Environmental Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    links: [
      { name: "2025 onwards", url: "https://drive.google.com/file/d/11-0-Li2A4MRNxnT1QGjGmSfEyy9wBOAk/view" },
      { name: "2026 onwards", url: "https://drive.google.com/file/d/1XDD1pIO7yrWXKRYLfKjvHwFVfiaJMy7D/view" }
    ],
  },
  {
    title: "Dual Degree (B.Tech (Civil Engineering) + M.Tech (Construction Technology Management))",
    degree: "Dual Degree",
    duration: "5 Years",
    description:
      "The admission to the 5-year Dual Degree (B.Tech + M.Tech) in Civil Engineering is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    links: [
      { name: "2025 onwards", url: "https://drive.google.com/file/d/1eP4CLl1dtNLGSA37SoFKdGDc6z54PkJ0/view" },
      { name: "2026 onwards", url: "https://drive.google.com/file/d/1MBNPmDiW9kOPmQsFsZ79r4AQ_VRjscVQ/view" }
    ],
  },
];

const CEAcadProgrampage = () => {
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

export default CEAcadProgrampage;
