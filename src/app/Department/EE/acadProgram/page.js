// "use client";

// import { useState } from "react";
// import {
//   BookOpen,
//   Clock,
//   Calendar,
//   Users,
//   GraduationCap,
//   FileText,
// } from "lucide-react";
// import React from "react";
// import { AcadProgramCard } from "./AcadProgramCard";

// const programs = [
//   {
//     title: "B.Tech in Computer Science and Engineering",
//     degree: "B.Tech",
//     duration: "4 Years",
//     description:
//       "The admission to the 4-year B. Tech. (Computer Science and Engineering) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
//     syllabus:
//       "btech",
//   },
//   {
//     title:
//       "B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security)",
//     degree: "Integrated B.Tech and M.Tech",
//     duration: "5 Years",
//     description:
//       "The admission to the 5-year B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
//     syllabus:
//       "dual-cs",
//   },
//   {
//     title:
//       "B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science)",
//     degree: "Integrated B.Tech and M.Tech",
//     duration: "5 Years",
//     description:
//       "The admission to the 5-year B. Tech and M. Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science) is through prestigious IIT-JEE (Main). The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
//     syllabus:
//       "dual-ds",
//   },
//   {
//     title:
//       "MCA with specialization in Artificial Intelligence and Internet of Thing",
//     degree: "MCA",
//     duration: "3 Years",
//     description:
//       "The admission to the 3-year MCA with specialization in Artificial Intelligence and Internet of Thing is through prestigious NIMCET. The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
//     syllabus:
//       "mca-ai",
//   },
//   {
//     title: "MCA with specialization in Data Science and Informatics",
//     degree: "MCA",
//     duration: "3 Years",
//     description:
//       "The admission to the 3-year MCA with specialization in Data Science and Informatics is through prestigious NIMCET. The programme includes a set of core courses together with few electives so that the students can specialize their interests. Following are the course structure and syllabus.",
//     syllabus:
//       "mca-ds",
//   },
//   {
//     title: "M.Tech in Data Science and Engineering",
//     degree: "M.Tech",
//     duration: "2 Years",
//     description:
//       "The admission to the 2-year M. Tech. in Data Science and Engineering is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
//     syllabus:
//       "mtech-ds",
//   },
//   {
//     title: "M.Tech in Cyber Security",
//     degree: "M.Tech",
//     duration: "2 Years",
//     description:
//       "The admission to the 2-year M. Tech. in Cyber Security is through GATE examination. Although the research/dissertation is the main component of the programme, due emphasis is also given to the course works. Following are the course structure and syllabus.",
//     syllabus:
//       "mtech-cs",
//   },
//   {
//     title: "Ph.D. in Computer Science and Engineering",
//     degree: "Ph.D.",    
//     duration: "",
//     description:
//       "The Department offers Ph. D in Computer Science and Engineering. Admission to this program is through an Institute Examination conducted by NIT Patna itself. This program is solely research based where students conduct their own work in an area of Computer Science and its applications under the guidance of faculty members.",
//     syllabus: "phd",
//   },
// ];

// const CSEAcadProgrampage = () => {
//   return (
//     <div>
//       <div className="py-1 mt-2">
//         <div className="xs:px-0 w-[90%] mx-auto">
//           <div className="w-full">
//             <h2 className="text-center text-4xl text-red-700 mt-2">
//               Academic Programs
//             </h2>
//             <div className="flex flex-wrap justify-between mt-8">
//               {programs.map((program, index) => (
//                 <AcadProgramCard program={program} key={index} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CSEAcadProgrampage;
"use client";

import React from "react";
import { AcadProgramCard } from "./AcadProgramCard";

const programs = [
  {
    title: "B.Tech in Electrical Engineering",
    degree: "B.Tech",
    duration: "4 Years",
    description:
      "Admission to the 4-year B.Tech (Electrical Engineering) is through IIT-JEE (Main). The program includes core courses and electives to help students specialize in their interests. See the course structure and syllabus below.",
    syllabus: "https://drive.google.com/file/d/1ODel2GhRzNrA5r3PLUMTQldowoWYt-Cn/view",
  },
  {
    title: "M.Tech in Power System Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "Admission to the 2-year M.Tech in Power System Engineering is through GATE. The program focuses on advanced topics in power systems, with a strong research and project component.",
    syllabus: "https://drive.google.com/file/d/1AV9XSasRFC3fTm7FCKhyiTPefii9u7Cd/view",
  },
  {
    title: "M.Tech in Control System Engineering",
    degree: "M.Tech",
    duration: "2 Years",
    description:
      "Admission to the 2-year M.Tech in Control System Engineering is through GATE. The program covers advanced control theory, applications, and research.",
    syllabus: "https://drive.google.com/file/d/1AV9XSasRFC3fTm7FCKhyiTPefii9u7Cd/view",
  },
  {
    title: "Ph.D. in Electrical Engineering",
    degree: "Ph.D.",
    duration: "",
    description:
      "The department offers a Ph.D. in Electrical Engineering. Admission is through an institute examination. The program is research-based, allowing students to work in various areas of electrical engineering under faculty guidance.",
     syllabus: "https://drive.google.com/file/d/1KdqphtQwIuWrC_gdYxjuAcG9TaxaUVf-/view",
 
  },
];

const EEAcadProgrampage = () => {
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

export default EEAcadProgrampage;