"use client";
import axios, { all } from "axios";
import { DepartmentNavigationButton } from "../../components/department/DepartmentNavigationButton";
import DepartmentNotify1 from "../../components/department/DepartmentNotify1";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";
import DepartmentCounter from "./DeptCounter";
import DeptNotice from "./DeptNotice";

const about = `The Department of Computer Science and Engineering offers courses leading to Bachelor of Technology in Computer Science and Engineering. The department has a very good infrastructure and faculty to provide excellent education. The curriculum is updated regularly to keep up with the growing demands and the changing trends of the software industry and research laboratories. The department provides a wide range of courses. The prominent among them includes Data Structures, Design and Analysis of Algorithms, System Programming, Computer Networks, Data Mining and Warehousing, Distributed and Parallel Computing, Mobile and Wireless Computing, Real-time Systems, Cryptography, Genetic Algorithm, Quantum Algorithms and Artificial Intelligence. Apart from these, students are also offered a wide variety of electives.`;

const picture = ["/ee-feature1.png", "/ee-feature2.png", "/ee-feature3.png"];

export default function Chem() {
  const router = useRouter();
  const [feature, setFeature] = useState(picture[0]);
  const [it, setIt] = useState(0);
  const [Notices, setNotices] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=che`);
  const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=che`);
        // console.log("Counts Response:", countsResponse.data);
        setNotices(response.data);
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
            <Image
              src={feature}
              className="h-full w-full object-cover rounded-lg max-sm:rounded-none shadow-lg"
              alt="Department Image"
              width={800}
              height={420}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />

            {/* Navigation Buttons */}
            <button
              onClick={() => setIt((prev) => (prev === 0 ? picture.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full z-10"
            >
              &#8249;
            </button>
            <button
              onClick={() => setIt((prev) => (prev === picture.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full z-10"
            >
              &#8250;
            </button>
          </div>
        </div>


        {/* Notice */}
        <div className="md:w-1/2 h-full flex items-center justify-center">
          <DeptNotice dept="Chem" />
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
                {about.split("\n").map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full mb-10 lg:mb-0">
            {
              counts.length > 0 && (
                <DepartmentCounter counts={counts} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}