"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const about = `The Department of Computer Science and Engineering offers courses leading to Bachelor of Technology in Computer Science and Engineering. The department has a very good infrastructure and faculty to provide excellent education. The curriculum is updated regularly to keep up with the growing demands and the changing trends of the software industry and research laboratories. The department provides a wide range of courses. The prominent among them includes Data Structures, Design and Analysis of Algorithms, System Programming, Computer Networks, Data Mining and Warehousing, Distributed and Parallel Computing, Mobile and Wireless Computing, Real-time Systems, Cryptography, Genetic Algorithm, Quantum Algorithms and Artificial Intelligence. Apart from these, students are also offered a wide variety of electives.`;

const Aboutpage = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=cse`);
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
