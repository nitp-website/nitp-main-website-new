"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "Humanities";

const aboutContent = (
  <div className="space-y-4 text-justify text-black">
    <p>
      With an interdisciplinary perspective at the heart of its approach, the Department of Humanities and Social Sciences at NIT Patna provides intellectual and cultural foundations for the study of human relations with society interaction and teaching towards problem-solving of the nation in contemporary contexts. The Department, with its diverse expertise, offers various courses like Communicative English with Language Lab, Social and Professional Ethics, Universal Human Value, Sociology and Building Economics, Industrial Economics and Financial Management, Business Environment and Indian Economy, Organizational Behaviour and Industrial Psychology, Intellectual Property Right etc. in the UG programme that aimed at developing essential skills in critical thinking and writing along with the knowledge of literature, society, economic value, organizational behavior and philosophies of the mind and body. The Department offers Doctoral programmes in Economics, English, Sociology and Psychology in their emerging fields. Department has also actively involved in undertaking research projects, publishing research papers in SCI/SCIE/ESCI/Scopus indexed journals, organizing expert lectures, workshops, short-term courses and FDPs for the students and aspiring participants.
    </p>
  </div>
);

const Aboutpage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=hss`);
        // console.log("Counts Response:", countsResponse.data);
        setData(countsResponse.data);
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
            data && (
              <DepartmentCounter data={data} dept={dept} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
