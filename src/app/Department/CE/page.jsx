"use client";
import axios, { all } from "axios";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";
import DepartmentCounter from "../../components/department/DepartmentCounter.js";
import DepartmentNotice from "./../../components/department/DeptartmentNotice.js";

const dept = "CE";

const about = ` The Department of Civil Engineering is the oldest and vibrant department of the institute, which was established along with the inception of the Institute in the year 1924. The Institute was formerly known as the Bihar College of Engineering Patna, a constituent engineering college under Patna University, until 27thJan 2004. It was rechristened to National Institute of Technology Patna on 28th Jan 2004 as an Autonomous Institute under MHRD, Govt. of India.

The Department of Civil Engineering is committed to provide quality teaching and research opportunities toits undergraduate, postgraduate and doctoral students. Apart from UG programme, the department also offers M. Tech and Doctoralprogrammes in the areas of Structural Engineering,`;

const picture = ["https://nitp-database-s3.s3.ap-south-1.amazonaws.com/MainEntrance.webp"];

export default function CE() {
  const router = useRouter();
  const [feature, setFeature] = useState(picture[0]);
  const [it, setIt] = useState(0);
  const [Notices, setNotices] = useState([]);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=ce`);
        // console.log("Counts Response:", countsResponse.data);
        setCounts([
          { label: "Faculty", value: countsResponse.data?.user, icon: <UserSquare size={40} />, link: '/faculty' },
          { label: "Research Scholars", value: countsResponse.data?.phd_candidates || 0, icon: <Users size={40} />, link: '/researchStudents' },
          { label: "Journal Papers", value: countsResponse.data?.journal_papers || 0, icon: <FileText size={40} />, link: '/journal' },
          { label: "Conference Papers", value: countsResponse.data?.conference_papers || 0, icon: <Award size={40} />, link: '/conference' },
          { label: "Patents", value: countsResponse.data?.ipr || 0, icon: <ShieldCheck size={40} />, link: '/patents' },
          { label: "Projects", value: countsResponse.data?.sponsored_projects || 0, icon: <Briefcase size={40} />, link: '/projects' },
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
            <img
              src={feature}
              className="h-full w-full object-cover rounded-lg max-sm:rounded-none shadow-lg"
              alt="Department Image"
            />

            {/* Navigation Buttons */}
            <button
              onClick={() => setIt((prev) => (prev === 0 ? picture.length - 1 : (picture.length + prev - 1) % picture.length))}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full z-10"
            >
              &#8249;
            </button>
            <button
              onClick={() => setIt((prev) => (prev === picture.length - 1 ? 0 : (prev + 1) % picture.length))}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-1 rounded-full z-10"
            >
              &#8250;
            </button>
          </div>
        </div>


        {/* Notice */}
        <div className="md:w-1/2 h-full flex items-center justify-center">
          <DepartmentNotice dept="CE" />
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
                        onClick={() => router.push('/Department/CE/about')}
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
            {
              counts.length && (
                <DepartmentCounter counts={counts} dept={dept} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
