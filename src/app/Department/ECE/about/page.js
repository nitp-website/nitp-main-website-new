"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const aboutContent = (
  <div className="space-y-4 text-justify text-black">
    <p>
      The Department of Electronics and Communication Engineering at the National Institute of
      Technology Patna began its journey in 1978 with just 10 undergraduate students. The department is
      dedicated to providing quality education at both undergraduate (UG) and postgraduate levels.
    </p>

    <p>Currently, it offers the following programs:</p>

    <ol className="list-decimal list-inside space-y-2">
      <li>
        <strong>B.Tech</strong> in "Electronics & Communication Engineering" with an intake of 161.
      </li>
      <li>
        <strong>Dual degree (B.Tech + M.Tech)</strong> in "Microelectronics and VLSI System Design" with an intake of 22.
      </li>
      <li>
        <strong>M.Tech in:</strong>
        <ul className="list-disc list-inside ml-5 space-y-1">
          <li>"Next Generation Wireless Technologies" with an intake of 15.</li>
          <li>"Microelectronics and VLSI System Design" with an intake of 15.</li>
        </ul>
      </li>
      <li>
        <strong>Ph.D.</strong> (Full-time and Part-time) in Electronics and Communication Engineering.
      </li>
    </ol>

    <p>
      All courses are regularly updated by academic and industry experts to meet the needs of today&apos;s
      industry. The undergraduate program is accredited by the National Board of Accreditation (NBA) for
      six years, from July 2021 to June 2027. The department received a grant of ₹3.52 Crore from DST under the FIST scheme for upgrading the Antenna Engineering Laboratory.
      The VLSI Lab has also been upgraded with the support of the SMDP-C2SD project.
    </p>

    <p>The department has a group of young, competent, and dedicated faculty members engaged in quality research in the following areas:</p>

    <ul className="list-disc list-inside ml-5 space-y-2">
      <li>High Power RF / Microwave Devices, Antennas, Filters, Metamaterials and Metasurfaces, Microwave Imaging, Computational Electromagnetics.</li>
      <li>Signal Processing, Image Processing, Speech Analysis, Biomedical Signal Processing, Machine Learning, Soft Computing Techniques, Pattern Recognition.</li>
      <li>Analog, Digital and Mixed Signal IC Design, FPGA-based System Design, Synthesis and characterization of nanomaterials, Nano-electronics.</li>
      <li>Wireless Communications and Networks, Quantum Cryptographic Algorithms, Physical Layer, Cognitive Radio Network (CRN), Optical Fiber Communication.</li>
    </ul>

    <p>
      We continually engage in exploring promising research areas to prepare our students to lead in their
      respective fields, making impactful contributions in their professional life.
    </p>
  </div>
);
const Aboutpage = () => {
  const [counts, setCounts] = useState([]); // Initialize state with an empty array

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=ece`);
        // console.log("Counts Response:", countsResponse.data);

        // The error was here. You were passing an array of objects directly.
        // The setCounts function expects a single argument, which is the new state.
        // Since you are already passing a literal array, this is correct.
        // However, the original code had an issue with the syntax, where the brackets were not properly structured.

        setCounts([
          { label: "Faculvsty", value: countsResponse.data?.user, icon: <UserSquare size={40} /> },
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
          counts.length > 0 && (
            <DepartmentCounter counts={counts} />
          )
        }
      </div>
    </div>
  );
};

export default Aboutpage;