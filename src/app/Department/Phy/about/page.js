"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "Phy";

const about = `The Department of Physics was established in the year 1924 and since then has been functioning as an important unit of the institute. As of now, the Department has nine faculty members who are actively involved in both teaching and research and three supporting staffs including one Technical Assistant for Labs. The Department of Materials Science and Engineering started in the year 2022. The Department has started a new Dual degree program B.Tech-M.Tech in Material Science and Engineering from the session 2022-23. There are 08 candidates enrolled in dual degree program in the session 2022-23 and 09 candidates enrolled in the session 2023-24 and 10 candidates enrolled in the session 2024-25. In the year of 2024-25 the department has been merged with Physics department and thereafter new department has started and named as “Applied Physics and Materials Engineering”. The Department of Applied Physics and Materials Engineering also offers Ph.D program (Full time and Part time research program) in Engineering to provide a platform for bright graduates and post graduates to conduct research in the diversified area of Applied Physics. The faculty is also involved in producing good number of high quality research publications each year. The new department is an interdisciplinary department which draws attention from all other engineering applications with basic understanding of Materials science. The different laboratories of the  department mainly focuses on the study of the development of new materials and its advanced manufacturing methods and modification of its properties by suitable compositional and heat treatment methods by altering the physical and mechanical behaviour materials for its widespread application.`;

const Aboutpage = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=phy`);
        // console.log("Counts Response:", countsResponse.data);
        setCounts([
          { label: "Faculty", value: countsResponse.data?.user, icon: <UserSquare size={40} />, link: '/faculty' },
          { label: "Research Scholars", value: countsResponse.data?.phd_candidates || 0, icon: <Users size={40} />, link: '/researchStudents' },
          { label: "Journal Papers", value: countsResponse.data?.journal_papers || 0, icon: <FileText size={40} />, link: '/journal' },
          { label: "Conference Papers", value: countsResponse.data?.conference_papers || 0, icon: <Award size={40} />, link: '/conference' },
          { label: "Patents", value: countsResponse.data?.ipr || 0, icon: <ShieldCheck size={40} />, link: '/patents' },
          { label: "Projects", value: countsResponse.data?.sponsored_projects || 0, icon: <Briefcase size={40} />, link: '/projects' },
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
            <h2 className="text-center text-4xl text-red-700 mt-2">
              About The Department
            </h2>

            <div className="w-full mx-auto px-2 py-5 text-justify text-black">
              {about.split("\n").map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {
            counts.length && (
              <DepartmentCounter counts={counts} dept={dept} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
