"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "EE";

const aboutContent = (
  <div className="space-y-4 text-justify text-black">
    <p>
      The Department of Electrical Engineering at NIT Patna stands as one of the pioneering centers of technical education in the country, tracing its origins back to 1945 when it was established under Patna University with a modest intake of just 20 students. Over the decades, the department has steadily expanded in scale, scope, and stature—transforming itself into a hub of academic excellence, cutting-edge research, and industry-driven innovation. From its early years of offering a four-year B.Sc. (Engineering) program, it evolved into a five-year integrated course in 1960, before reverting to a four-year format in 1972. Adapting to the changing needs of society and industry, the department has consistently grown in strength, increasing its intake from 30 students in the early years to 116 at present in the B.Tech. program. Alongside undergraduate education, postgraduate programs in Power Systems and Control Systems Engineering were introduced in 1978 with AICTE approval, paving the way for advanced specialization and research. Today, the department offers a comprehensive academic portfolio that includes B.Tech. in Electrical Engineering (Intake: 116), Dual Degree (B.Tech. in Electrical Engineering + M.Tech. in Power Systems) with an intake of 23, M.Tech. programs in Power System Engineering, Control System Engineering, and Intelligent Transport Systems (Intake: 10 each), as well as a Ph.D. program in Electrical Engineering across all allied domains.
    </p>
    <p>
      The department is equipped with 13 state-of-the-art laboratories that cover the full spectrum of electrical engineering education and research. From foundational facilities such as the Elements of Electrical Engineering Lab and Electrical Machines Lab to advanced setups like the SCADA Lab, High Voltage Lab, and Advanced Instrumentation Lab, these laboratories provide students with invaluable hands-on experience, enabling them to connect theoretical knowledge with practical applications.
    </p>
    <p>
      It is powered by 26 distinguished faculty members whose expertise spans across diverse specializations. Their collective efforts have nurtured a vibrant research ecosystem, organized into eight thematic research groups: Power & Energy Systems, Electrical Machines & Drives, Control Theory & Practices, Power Electronics & Applications, Electric Vehicles & Energy Storage Systems, Instrumentation & Signal Processing, Semiconductor Devices & Circuit Systems, and Robotics & Automation. This collaborative framework supports pioneering work that addresses both fundamental challenges and emerging technologies in the field.
    </p>
    <p>
      The department has consistently contributed impactful research to the global knowledge base. To date, it has produced over 330 publications in SCI/SCIE-indexed journals, filed 23 patents (15 of which were granted in AY 2024–25), and executed 15 externally sponsored research projects that bridge academia and industry. In addition, it organized 19 Faculty Development Programs (FDPs) in AY 2024–25, underlining its commitment to knowledge dissemination and capacity building. Beyond statistics, these achievements reflect a deeply ingrained culture of excellence, innovation, and societal relevance.
    </p>
    <p>
      It has also successfully guided 33 Ph.D. scholars to completion, with several more currently pursuing their research journeys. Through rigorous training, expert mentorship, and exposure to real-world challenges, these scholars are contributing to the next wave of innovation and leadership in electrical engineering.
    </p>
    <p>
      With a legacy spanning nearly eight decades, the Department of Electrical Engineering at NIT Patna has firmly established itself as a beacon of knowledge and innovation. By blending strong academic foundations with future-ready research and active industry engagement, the department continues to play a pivotal role in powering national progress and contributing to global technological advancement.
    </p>
  </div>
);

const Aboutpage = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=ee`);
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
            <h2 className="text-center text-4xl text-[#e30f0f] mt-2">
              About The Department
            </h2>

            <div className="w-full mx-auto px-2 py-5 text-justify text-black">
              {aboutContent}
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
