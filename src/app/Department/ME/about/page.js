"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "ME";

const about = `The Department of Mechanical Engineering was established in 1952 with the B.Tech. program during the era of Bihar College of Engineering (BCE), which has been well known since 1924 as the sixth oldest engineering college in India. In 1978, the M.Tech. program was introduced with specializations in Thermal Turbo Machinery and Refrigeration, Air Conditioning, and Heat Transfer. Later, in 2004, Bihar College of Engineering was converted into the National Institute of Technology Patna. At present, the Department offers B.Tech. in Mechanical Engineering, M.Tech. programs with specializations in Design Engineering, Thermal Engineering, and Production Engineering, a Dual Degree (B.Tech. + M.Tech.) program in Mechanical Engineering with specialization in Manufacturing and Industrial Engineering, and Ph.D. programs. The B.Tech. program, which initially started with an intake of 20 students, now admits 120 students. The M.Tech. program has an intake of around 50 students across all specializations, while the five-year Dual Degree program admits 24 students. In addition, more than 200 students are pursuing research in diverse areas of Mechanical Engineering under the Ph.D. program. The department’s research covers a wide range of topics including materials, solid mechanics, product design, manufacturing processes, thermodynamics, heat transfer, gas dynamics, renewable energy, surface engineering, dynamics and control, fluid power systems, and operations management. With excellent industry interaction, the Department contributes significantly to industry through consultancy services and sponsored research projects. The continuously growing number of patents and publications in top multidisciplinary journals further highlights the thriving research culture of the Department.`;

const MEAboutPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=me`);
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
            data && (
              <DepartmentCounter data={data} dept={dept} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MEAboutPage;
