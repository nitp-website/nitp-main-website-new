"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../DeptCounter";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";
import axios from "axios";
import BackDepartment from "../../../components/department/BackDepartment";

const about = `The Chemistry department was established in 1924, at the same time the institute was founded. The Department has expanded significantly since 2014 and offers several compulsory and elective courses to B.Tech. and B.Arch. students of the Institute in 1st, 2nd and 3rd years of the UG and UG-PG dual degree programs. The department has offered a UG-PG 5-year Integrated M.Sc. in Chemistry degree from 2015 where the curriculum offers students an excellent theoretical foundation in both traditional as well as contemporary areas of chemistry along with extensive hands on training in experiments. Several of the pass out students have cleared GATE and NET examinations and have pursued higher studies in Institutes of repute like IITs, NIT and IISER. Some of the students have received placements through Institute T&P in teaching institutes, banks and IT companies. From the academic session of 2023, the department has started a 5-year UG-PG program - B. Tech.-M. Tech. dual degree in Chemical Technology. The expected outcome of the curriculum is to promote R&D in Chemistry with technological advancements and equip students to contribute effectively for the enhancement of both industry and academia in the country.

The department has an active Ph.D. program since 2010 where the number of research scholars have been steadily rising with new admission every semester. To promote the ongoing and future research activities, DST has recently granted research funds under FIST programme with a total grant amount of Rs. 220 Lakhs for the period of 2023 – 2028. Currently, the department has 26 full-time Ph.D. students and 19 part-time Ph.D. students. With the increase in motivated researchers, the research output in terms of both quality and quantity has escalated in the recent years. The department has 8 regular faculty members who are PIs of independent research groups and focus on different areas of chemistry like synthetic glycochemistry, supramolecular chemistry, graphene chemistry, hetereocycles, nanomaterials, spectroscopy, co-ordination complexes. Capital fund received from Institute, TEQIP and externally funded projects have facilitated in installation of advanced small equipment necessary to execute day to day research work. The research groups are also collaborating within the department as well as with other Institutions to encourage inter-disciplinary work. Collaborative work with faculty/scientists in IIT Patna, CSIR-NML, IIT Gandhinagar, CSIR-CSIO, NIPER Hajipur, IACS Kolkata, NIT Rourkela, Algappa University Karaikudi is currently under way to carry out characterization work, theoretical study, and extend the application of synthesized products. The research facilities in the department are frequently extended to students from Civil Engg., Mechanical Engg., Physics departments to enable their UG and PG thesis works. Further, UG and PG students from nearby Universities/Institutions like Mahatma Gandhi Central University Motihari, Central University South Bihar Gaya, NIPER Hajipur, Patna University have visited our department for carrying out research work mandatory in their curricula.

The department has been and will remain committed to quality teaching and research with a conscious effort to achieve excellence.`;

const Aboutpage = () => {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=che`);
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
          {counts.length > 0 && (
            <DepartmentCounter counts={counts} />
          )}
          <div className="mt-4">
            <BackDepartment navigate={'/Department/Chem'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;