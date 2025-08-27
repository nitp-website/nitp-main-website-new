"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const aboutContent = (
  <div className="space-y-4 text-justify text-black">
    <p>
      Welcome to the Department of Mechatronics and Automation Engineering at the National Institute of Technology Patna. Established in 2024, the Department of Mechatronics and Automation Engineering at NIT Patna is one of the institution's newest departments, committed to delivering a premier educational experience aimed at preparing students to be industry-ready through its four-year full-time B.Tech. program. The Mechatronics and Automation Programme is committed to prepare the graduates to synergistically integrate mechanical engineering, electronics, and intelligent computer control systems seamlessly in the design and manufacturing of industrial products and processes. The department is dedicated to preparing graduates with strong team skills to solve multi-disciplinary problems using the Mechatronics approach. Graduates of this program will have the opportunity to work in a variety of sectors, including aviation, electronics, automotive, manufacturing, oil and gas, mining, transportation, defense, robotics, and aerospace industries, as well as pursue advanced degrees. A meticulously designed curriculum aims to enhance self-reliance, soft skills, and leadership qualities, empowering our graduates to build successful careers and emerge as ethical entrepreneurs serving the nation and society. It is tailored to keep pace with rapidly changing technologies and industrial environments, considering both global and Indian contexts.
    </p>
    <p>
      The Department maintains strong industrial interactions and significantly contributes to the industry by providing consultancy services and undertaking sponsored research projects. The increasing number of patents and publications in leading multidisciplinary journals highlights the department's thriving research environment.
    </p>
  </div>
);

const Aboutpage = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=mae`);
        // console.log("Counts Response:", countsResponse.data);
        setCounts([
          { label: "Faculty", value: countsResponse.data?.user, icon: <UserSquare size={40} /> },
          { label: "Research Scholars", value: countsResponse.data?.phd_candidates || 0, icon: <Users size={40} /> },
          { label: "Journal Papers", value: countsResponse.data?.journal_papers || 0, icon: <FileText size={40} /> },
          { label: "Conference Papers", value: countsResponse.data?.conference_papers || 0, icon: <Award size={40} /> },
          { label: "Patents", value: countsResponse.data?.ipr || 0, icon: <ShieldCheck size={40} /> },
          { label: "Projects", value: countsResponse.data?.sponsored_projects || 0, icon: <Briefcase size={40} /> },
        ]);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {/* About the department section */}
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-[#e30f0f] mt-2">
              About The Department
            </h2>

            <div className="w-full mx-auto px-2 py-5 text-justify text-black">
              {aboutContent}
            </div>
          </div>

          {
            counts.length && (
              <DepartmentCounter counts={counts} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
