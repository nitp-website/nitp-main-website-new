"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "Chem"

const aboutContent = (
  <div className="space-y-4 text-justify text-black">
    <p>
      The Department of Chemical Science and Technology at the National Institute of Technology Patna are committed to excellence in education and research, fostering innovation and collaboration across various disciplines. The Department of Chemistry, established in 1924, has significantly expanded its academic and research offerings. The Department has expanded to include the discipline of Chemical Engineering in 2023, to emerge as a leader in field of chemical sciences and engineering education as well as technological advancements.
    </p>
    <p>
      The department offers a five-year UG-PG B. Tech. - M. Tech dual degree program in Chemical Technology to bridge the gap between chemistry and technological applications, preparing students for careers in both academia and industry. The curriculum covers core subjects such as material and energy balance, thermodynamics, heat and mass transfer, fluid mechanics, chemical reaction engineering, process control, and computational systems. By integrating traditional chemical engineering principles with emerging specializations, the program aims to produce industry-ready professionals capable of addressing complex engineering challenges. The Department offers several compulsory and elective courses to B.Tech. and B.Arch. students of the Institute in 1st, 2nd and 3rd years of the UG and UG-PG dual degree programs. The department has been and will remain committed to quality teaching and research with a conscious effort to achieve excellence.
    </p>
    <p>
      The department has an active Ph.D. program since 2010 where the number of research scholars have been steadily rising with new admission every semester. Currently, the department has 26 full-time Ph.D. students and 19 part-time Ph.D. students. With the increase in motivated researchers, the research output in terms of both quality and quantity has escalated in the recent years. The department has 14 regular faculty members who are PIs of independent research groups and focus on different areas of chemistry like synthetic glycochemistry, supramolecular chemistry, graphene chemistry, heterocycles, nanomaterials, spectroscopy, co-ordination complexes.
    </p>
    <p>
      To promote the ongoing and future research activities, DST has recently granted research funds under FIST programme with a total grant amount of Rs. 220 Lakhs for the period of 2023 – 2028. Capital fund received from Institute, TEQIP and externally funded projects have facilitated in installation of advanced small equipment necessary to execute day to day research work. The research groups are also collaborating within the department as well as with other Institutions to encourage inter-disciplinary work. Collaborative work with faculty/scientists in IIT Patna, CSIR-NML, IIT Gandhinagar, CSIR-CSIO, NIPER Hajipur, IACS Kolkata, NIT Rourkela, Algappa University Karaikudi is currently under way to carry out characterization work, theoretical study, and extend the application of synthesized products. The research facilities in the department are frequently extended to students from Civil Engg., Mechanical Engg., Physics departments to enable their UG and PG thesis works. Further, UG and PG students from nearby Universities/Institutions like Mahatma Gandhi Central University Motihari, Central University South Bihar Gaya, NIPER Hajipur, Patna University have visited our department for carrying out research work mandatory in their curricula.
    </p>
  </div>
);

const Aboutpage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=che`);
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
