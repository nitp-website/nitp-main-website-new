"use client";
import axios, { all } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Users,
  BookOpen,
  FileText,
  Award,
  Briefcase,
  BarChart2,
  ShieldCheck,
  UserSquare,
} from "lucide-react";
import DepartmentCounter from "../../components/department/DepartmentCounter.js";
import DepartmentNotice from "./../../components/department/DeptartmentNotice.js";

const dept = "Chem";

const about = `The Department of Chemical Science and Technology at the National Institute of Technology Patna is committed to excellence in education and research, fostering innovation and collaboration across various disciplines. The Department of Chemistry, established in 1924,has significantly expanded its academic and research offerings. The Department expanded its academic scope in 2023 by incorporating the discipline of Chemical Technology. In 2024, it evolved into the Department of Chemical Science and Technology, with a vision to lead in chemical sciences education and technological innovation.

The department offers a five-year UG-PG B. Tech. - M. Tech dual degree program in Chemical Technology to bridge the gap between chemistry and technological applications, preparing students for careers in both academia and industry. The curriculum encompasses core subjects, including material and energy balance, thermodynamics, heat and mass transfer, fluid mechanics, chemical reaction engineering, process control, and computational systems. By integrating traditional chemical technology principles with emerging specialisations, the program aims to produce industry-ready professionals capable of addressing complex technology challenges. The Department offers several compulsory and elective courses to B.Tech. and B.Arch. students of the Institute in 1st, 2nd and 3rd years of the UG and UG-PG dual degree programs. The department has been and will remain committed to quality teaching and research with a conscious effort to achieve excellence.

The department has an active PhD program since 2010 where the number of research scholars have been steadily rising with new admissions every semester. Currently, the department has full-time PhD students and part-time PhD students. With the increase in motivated researchers, the research output in terms of both quality and quantity has escalated in recent years. The department has 13 regular faculty members who are PIs of independent research groups and focus on different areas of chemistry and chemical engineering like, supramolecular chemistry, graphene chemistry, heterocycles, nanomaterials, spectroscopy, co-ordination complexes, fuel cell, Nanofluids, Colloids, Catalysis, Rheology, and Energy storage devices.

To promote the ongoing and future research activities, DST has recently granted research funds under the FIST programme with a total grant amount of Rs. 220 Lakhs for the period of 2023 – 2028. Capital fund received from the Institute, TEQIP and externally funded projects have facilitated the installation of advanced small equipment necessary to execute day-to-day research work. The research groups are also collaborating within the department as well as with other Institutions to encourage interdisciplinary work. Collaborative work with faculty/scientists in IIT Patna, CSIR-NML, IIT Gandhinagar, CSIR-CSIO, NIPER Hajipur, IACS Kolkata, NIT Rourkela, Algappa University Karaikudi is currently underway to carry out characterisation work, theoretical study, and extend the application of synthesised products. The research facilities in the department are frequently extended to students from Civil Engg., Mechanical Engg., and Physics departments to enable their UG and PG thesis works. Further, UG and PG students from nearby Universities/Institutions like Mahatma Gandhi Central University, Motihari, Central University South Bihar, Gaya, NIPER Hajipur, Patna University have visited our department to carry out research work mandatory in their curricula.
`;

const picture = ["https://i.postimg.cc/fyY06783/nit-patna-005.jpg"];

export default function Che() {
  const router = useRouter();
  const [feature, setFeature] = useState(picture[0]);
  const [it, setIt] = useState(0);
  const [Notices, setNotices] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=che`,
        );
        // console.log("Counts Response:", countsResponse.data);
        setData(countsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIt((prev) => (prev + 1) % picture.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFeature(picture[it]);
  }, [it]);

  return (
    <div className="w-[90%] mx-auto text-black bg-[url('https://i.postimg.cc/2jnZjfrL/6359670-3258484-removebg-preview.png')] bg-cover bg-center">
      {/* Section one */}
      <div className="w-full flex flex-col md:flex-row gap-5 md:max-h-[420px] mx-auto shrink-0 mt-5">
        {/* Department Picture */}
        <div className="w-full h-[420px] overflow-hidden flex items-center justify-center relative">
          <div className="relative w-full h-full">
            <img
              src={feature}
              className="h-full w-full object-cover rounded-lg max-sm:rounded-none shadow-lg"
              alt="Department Image"
            />

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setIt((prev) =>
                  prev === 0
                    ? picture.length - 1
                    : (picture.length + prev - 1) % picture.length,
                )
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full z-10"
            >
              &#8249;
            </button>
            <button
              onClick={() =>
                setIt((prev) =>
                  prev === picture.length - 1 ? 0 : (prev + 1) % picture.length,
                )
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full z-10"
            >
              &#8250;
            </button>
          </div>
        </div>

        {/* Notice */}
        <div className="md:w-1/2 h-full flex items-center justify-center">
          <DepartmentNotice dept="Che" />
        </div>
      </div>

      {/* Section two */}
      <div className="px-2 mt-2 max-sm:px-2">
        <div className="flex flex-col lg:flex-row w-full xs:px-0 lg:w-full mx-auto">
          <div className="flex flex-col w-full lg:w-full mb-10 lg:mb-0">
            <div className="mx-auto text-2xl max-sm:text-lg font-semibold text-red-950">
              About
            </div>
            <div className="px-2 flex mx-auto gap-2 flex-1 shrink-0">
              <div className="w-[100%] mx-auto p-2 text-justify text-black">
                {about.split("\n").map((line, index, arr) => (
                  <p key={index} className="mb-2">
                    {line}
                    {index === arr.length - 1 && (
                      <button
                        onClick={() => router.push("/Department/Chem/about")}
                        className="text-blue-600 ml-2"
                      >
                        more..
                      </button>
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full mb-10 lg:mb-0">
            {data && <DepartmentCounter data={data} dept={dept} />}
          </div>
        </div>
      </div>
    </div>
  );
}
