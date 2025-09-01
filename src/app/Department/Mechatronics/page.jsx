"use client";
import axios, { all } from "axios";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";
import DepartmentCounter from "../../components/department/DepartmentCounter.js";
import DepartmentNotice from "./../../components/department/DeptartmentNotice.js";

const dept = "Mechatronics";

const about = `Welcome to the Department of Mechatronics and Automation Engineering at the National Institute of Technology Patna. Established in 2024, the Department of Mechatronics and Automation Engineering at NIT Patna is one of the institution's newest departments, committed to delivering a premier educational experience aimed at preparing students to be industry-ready through its four-year full-time B.Tech. program. The Mechatronics and Automation Programme is committed to prepare the graduates to synergistically integrate mechanical engineering, electronics, and intelligent computer control systems seamlessly in the design and manufacturing of industrial products and processes. The department is dedicated to preparing graduates with strong team skills to solve multi-disciplinary problems using the Mechatronics approach. Graduates of this program will have the opportunity to work in a variety of sectors,`;

const picture = ["https://i.postimg.cc/hGFcVRpp/IMG-20250825-WA0016.jpg", "https://i.postimg.cc/9FW4qZrr/IMG-20250825-WA0018.jpg","https://i.postimg.cc/2yXf6s1d/IMG-20250825-WA0019.jpg", "https://i.postimg.cc/5NFrLYTW/IMG-20250825-WA0017.jpg"];

export default function Mechatronics() {
  const router = useRouter();
  const [feature, setFeature] = useState(picture[0]);
  const [it, setIt] = useState(0);
  const [Notices, setNotices] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=mae`);
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
          <DepartmentNotice dept="mae" />
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
                        onClick={() => router.push('/Department/Mechatronics/about')}
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
              data && (
                <DepartmentCounter data={data} dept={dept} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
