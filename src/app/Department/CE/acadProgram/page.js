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
    syllabus:
      "https://drive.google.com/file/u/1/d/1TTblz48XLiUYs5JRHlqa37VWqpyWXb_w/view",
  },
  {
    title: "M.Tech Water Resources Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Water Resources Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/16XTey9OYvtOJFERcuBfNXlzZU_NskNEg/view",
  },
  {
    title:
      "M.Tech Transportation Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Transportation Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1fXR4RROFC2UQo461jiNn7--ZQJoN384i/view",
  },
  {
    title:
      "M.Tech Structural Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Structural Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1q8Wndh5pM4EcILaTqfafpnag20XqOtS6/view",
  },
  {
    title:
      "M.Tech Geotechnical Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Geotechnical Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1-r7SS3hmSbMl52e2VIqJnti8yPlLWiLa/view",
  },
  {
    title: "M.Tech Environmental Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "The admission to the 2-year M. Tech. in Environmental Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1X57Lq9nCBjK7Db8m990hYBuj_81tRfkE/view",
  },
  {
    title: "Dual Degree (B.Tech (Civil Engineering) + M.Tech (Construction Technology Management))",
    degree: "Dual Degree",
    duration: "5 Years",
    description:
      "The admission to the 5-year Dual Degree (B.Tech + M.Tech) in Civil Engineering is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
    syllabus:
      "https://drive.google.com/file/d/1jsKFA6qu4OGyIJSAf8Bp6Ow8Wz2houq0/view",
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
