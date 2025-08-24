"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../DeptCounter";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const about = `The Department of Mechanical Engineering was established in 1952 with B. Tech program during the era of Bihar College of Engineering (BCE) which is well-known since 1924 as the sixth oldest Engineering College in India. In 1978, M. Tech Program was started with specializations in 'Thermal Turbo Machinery' and 'Refrigeration, Air Conditioning and Heat Transfer'. The Bihar College of Engineering was converted to National Institute of Technology Patna in 2004.`;

const Aboutpage = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=me`);
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
            <div className="mb-10">
              <div className="text-red-900 font-bold text-2xl max-sm:text-2xl mb-8">The Department offers the following academic programs:</div>
                <ol className="list-decimal list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                  <li>B. Tech in Mechanical Engineering</li>
                  <li>M.Tech in Mechanical Engineering with specialization in Design Engineering</li>
                  <li>M.Tech in Mechanical Engineering with specialization in Thermal Engineering</li>
                  <li>M.Tech in Mechanical Engineering with specialization in Production Engineering</li>
                  <li>Dual Degree (B.Tech + M.Tech) in Mechanical Engineering with specialization in Manufacturing and Industrial Engineering</li>
                  <li>Ph.D.</li>
                </ol>
            </div>
            <p className="text-justify my-4">Initially, B.Tech program was started with intake of 20 which has now become 131. M.Tech program is running with a total intake of around 50 for all specializations and the 5 years Dual Degree (B.Tech + M.Tech) program is executing with an intake of 24, whereas, over 200 students are performing research in various fields of Mechanical Engineering in the Ph.D. program. Some prominent research topics in the department are Materials, solid mechanics, product design, manufacturing processes, thermodynamics, heat transfer, gas dynamics, renewable energy, surface engineering, dynamics and control, fluid power systems and operation management.</p>
            <p className="text-justify my-4">The Department has an excellent industrial interaction and contributes to the industry by offering consultancy services and sponsored research projects. Continuously growing numbers of patents and publications in various top multidisciplinary journals is indication of the thriving research environment in the department</p>
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
