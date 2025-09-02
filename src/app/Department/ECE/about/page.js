"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "ECE";

const aboutContent = (
  <div className="space-y-4 text-justify text-black">
    <p>
      The Department of Electronics and Communication Engineering at the National Institute of Technology Patna began its journey in 1978 with just 10 undergraduate students and is dedicated to providing quality education at both undergraduate (UG) and postgraduate (PG) levels. Currently, the department offers a B.Tech. program in Electronics and Communication Engineering with an intake of 100, B. Tech in Electronics Engineering (VLSI Design and Technology) with an intake of 80, a Dual Degree (B.Tech. + M.Tech.) in Microelectronics and VLSI System Design with an intake of 22, M.Tech. programs in Next Generation Wireless Technologies and in Microelectronics and VLSI System Design with an intake of 15 each, and Ph.D. programs (both Full-time and Part-time) in Electronics and Communication Engineering. All courses are regularly updated by academic and industry experts to align with the evolving needs of today’s industry. The undergraduate program has been accredited by the National Board of Accreditation (NBA) for six years, from July 2021 to June 2027. The department has also received significant funding, including a grant of ₹3.52 Crore from DST under the FIST scheme for upgrading the Antenna Engineering Laboratory, while the VLSI Laboratory has been upgraded with support from the SMDP-C2SD project.
    </p>

    <p>
      The department is supported by a group of young, competent, and dedicated faculty members actively engaged in quality research in diverse areas such as High Power RF/Microwave Devices, Antennas, Filters, Metamaterials and Metasurfaces, Microwave Imaging, and Computational Electromagnetics; Signal Processing, Image Processing, Speech Analysis, Biomedical Signal Processing, Machine Learning, Soft Computing Techniques, and Pattern Recognition; Analog, Digital, and Mixed Signal IC Design, FPGA-based System Design, Synthesis and Characterization of Nanomaterials, and Nano-electronics; as well as Wireless Communications and Networks, Quantum Cryptographic Algorithms, Physical Layer, Cognitive Radio Networks (CRN), and Optical Fiber Communication. By continually exploring promising research areas, the department prepares its students to excel in their respective fields and make meaningful contributions in their professional careers
    </p>
  </div>
);
const Aboutpage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=ece`);
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
      <div className="py-1 mt-2 text-black">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              About The Department
            </h2>
            <div className="w-full mx-auto px-2 py-5 text-justify text-black">
              {aboutContent}
            </div>
          </div>
        </div>

        {
          data && (
            <DepartmentCounter data={data} dept={dept} />
          )
        }
      </div>
    </div>
  );
};

export default Aboutpage;
