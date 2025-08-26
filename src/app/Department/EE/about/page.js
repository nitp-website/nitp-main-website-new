"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const about = `The Department of Electrical Engineering was established in 1945 under Patna University with an intake of 20 students leading to Bachelor of Science (Engineering) degree of four-year duration. The four-year course was later changed to five-year integrated course in 1960 with an intake of 30 students and it continued up to 1972. Again, a four-year course was introduced in 1972 with the same intake capacity of 30 students. The intake was increased from 30 to 40 students in the sessions of 2005-06 and further in 2006-07 the intake capacity was increased to 60 students.

Earlier in 1978, AICTE approved a Post Graduate (PG) course in the department leading to M. Tech. Degree in two specializations:

Power System Engineering and
Control System Engineering with an intake capacity of 10 in each specialization. The intake in the PG program was further increased to 18 students per specialization in 2004-05. The intake has been revised at the UG level in 2019-20 session to 110 and for PG, M. Tech. (Control Systems) – 22, and M. Tech. (Power Systems)- 23 making a total of 45.
Department owns 13 different laboratories, namely Elements of Electrical Engg. Lab., Electrical M/C Lab, Power System Protection Lab, Power Electronics Lab, Computer Lab, Microprocessor and Microcontroller Lab, Network theory Lab, Control System Lab, Measurement Lab, High Voltage Lab, SCADA Lab, Industrial Drives and Control Lab, and Advanced Instrumentation Lab. The Electrical Engineering Department, NIT Patna is one of the established departments of academic excellence of NIT Patna, known for its research and technological innovation in its domain. At present, the Electrical Engineering Department, comprising 26 dedicated members, has established itself as a formidable force in the realm of electrical engineering education and research. Their collective expertise spans a diverse array of specialties, reflecting the department's commitment to both breadth and depth in its academic offerings. One of the hallmarks of the department is its robust research ecosystem, characterized by eight broad research groups. These groups delve into areas of critical importance such as Power and Energy Systems, Electrical Machine & Drives, Control Theory & Practices, Power Electronics & its Application, Electric Vehicles & Energy Storage System, Instrumentation & Signal Processing, Semiconductor Devices & Circuit System and Robotics & Automation. Through their pioneering research endeavours, faculty members have amassed an impressive track record, boasting more than 330 publications in SCI/SCIE indexed Journals and securing 23 patents to date. Beyond the realm of pure research, the department actively engages with industry partners through 15 externally sponsored projects, which serve as conduits for translating theoretical knowledge into practical applications. These projects, whether ongoing or completed, represent the department's commitment to bridging the gap between academia and industry, fostering innovation that resonates beyond the confines of the university campus. Moreover, the department's influence resonates worldwide as it mentored 33 Ph.D scholars who have attained their degrees, with many more in pipeline, embodying the forefront of future innovation in electrical engineering. Through rigorous academic training and personalized guidance, these scholars are equipped with the tools and knowledge necessary to address the pressing challenges of the 21st century. In essence, the Electrical Engineering Department, NIT Patna serves as a beacon of excellence, driving forward the frontiers of knowledge and innovation in the field of electrical engineering. Through its multifaceted approach to education, research, and industry collaboration, the department continues to make profound contributions to both academia and society at large.`;
const Aboutpage = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=ee`);
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
