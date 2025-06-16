// 'use client'
// import { useEffect, useState } from 'react'
// import BackDepartment from '../../components/department/BackDepartment'
// import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
// import DepartmentNotify1 from '../../components/department/DepartmentNotify1'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import axios from 'axios';



// export default function EE() {
//   const router = useRouter()
//   const [Notices, setNotices] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=ee`);
//       console.log(response.data);
//       setNotices(response.data);
//     }
//     getData();
//   }, [])
//   return (
//     <div className="p-10 max-sm:px-0  text-black">
//       {/* heading */}
//       <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-2">
//         ELECTRICAL ENGINEERING
//       </div>
//       <BackDepartment navigate={"/Department"} />
//       {/* Section 1 */}
//       <div className="grid grid-cols-6 max-md:grid-cols-1">
//         {/* Department Picture */}
//         <div className="h-[500px] flex justify-start py-10 col-span-3 mr-4 max-sm:mr-0">
//           <Image
//             src="/nit-patna-003.jpg"
//             className="rounded-lg max-sm:rounded-none shadow-lg shadow-slate-600 h-full"
//             alt="Logo"
//             width={700}
//             height={1000}
//           />
//         </div>

//         {/* Notice  */}
//         <div className=" py-10  col-span-3 max-lg:col-span-3 flex flex-col max-md:mb-10">
//           <div className="bg-white rounded-lg shadow-lg shadow-slate-600 px-4 h-[420px] overflow-y-auto">
//             <div className="flex justify-between mb-4 text-lg font-semibold text-slate-500">
//               <div>Announcement</div>
//               <button className="hover:text-blue-500">View All</button>
//             </div>
//             <div className="overflow-hidden flex flex-col">
//               {Notices.map((notice, id) => {
//                 return (
//                   <DepartmentNotify1
//                     key={id}
//                     title={notice.title}
//                     attachments={notice.attachments}
//                     important={notice.important}
//                     link={notice.notice_link ? notice.notice_link : ""}
//                   />
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Section 2 */}
//       <div className="grid grid-cols-2 max-md:grid-cols-1">
//         {/* About */}
//         <div className="px-6 max-sm:px-2 ">
//           <div className="mb-4 text-2xl max-sm:text-lg font-semibold text-red-950">
//             About
//           </div>
//           <div className="text-justify max-sm:text-[12px]">
//             The Department of Electrical Engineering in National Institute of
//             Technology Patna (Formerly known as Bihar College of Engineering)
//             was established in 1945 under Patna University with an intake of 45
//             students leading to a Bachelor of Science (Engineering) degree of
//             four-year duration. In the year 1978 AICTE approved Post Graduate
//             (PG) course leading to M.Sc. (Engg.) Degree in two specializations:
//             (i) Power System Engineering and (ii) Control System Engineering.
//             The department is also offering the Ph.D. research program since
//             2009.{' '}
//             <button
//               onClick={() => router.push('/Department/EE/about')}
//               className="text-blue-600"
//             >
//               more...
//             </button>
//           </div>
//         </div>
//         {/* Navigation Button  */}
//         <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/mission')}
//             Title={'MISSION AND VISSION'}
//           />
//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/faculty')}
//             Title={'PEOPLE'}
//           />
//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/syllabus')}
//             Title={'SYLLABUS'}
//           />

//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/timeTable')}
//             Title={'Time Table'}
//           />

//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/PO')}
//             Title={'PO'}
//           />

//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/PEO')}
//             Title={'PEO'}
//           />

//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/labs')}
//             Title={'LABS'}
//           />
//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/activities')}
//             Title={'ACTIVITIES'}
//           />
//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/achivments')}
//             Title={'ACHIEVEMENTS'}
//           />
//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/research')}
//             Title={'RESEARCH HIGHLIGHT'}
//           />
//           <DepartmentNavigationButton
//             onClick={() => router.push('/Department/EE/usefullLinks')}
//             Title={'USEFULL LINKS'}
//           />

//         </div>
//       </div>
//     </div>
//   )
// }
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Users, FileText, Award, Briefcase, ShieldCheck, UserSquare } from "lucide-react";
import { DepartmentNavigationButton } from "../../components/department/DepartmentNavigationButton";
import DepartmentCounter from "./DeptCounter";
import DeptNotice from "./DeptNotice";

const about = `The Department of Electrical Engineering was established in 1945 under Patna University with an intake of 20 students leading to Bachelor of Science (Engineering) degree of four-year duration. The four-year course was later changed to five-year integrated course in 1960 with an intake of 30 students and it continued up to 1972. Again, a four-year course was introduced in 1972 with the same intake capacity of 30 students. The intake was increased from 30 to 40 students in the sessions of 2005-06 and further in 2006-07 the intake capacity was increased to 60 students.
`;

const picture = ["/ee-feature1.png", "/ee-feature2.png", "/ee-feature3.png"];

export default function EE() {
  const router = useRouter();
  const [feature, setFeature] = useState(picture[0]);
  const [it, setIt] = useState(0);
  const [counts, setCounts] = useState([]);
  
  useEffect(() => {
    const getCounts = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=ee`);
        setCounts([
          { label: "Faculty", value: countsResponse.data?.user, icon: <UserSquare size={40} /> },
          { label: "Research Scholars", value: countsResponse.data?.phd_candidates || 0, icon: <Users size={40} /> },
          { label: "Journal Papers", value: countsResponse.data?.journal_papers || 0, icon: <FileText size={40} /> },
          { label: "Conference Papers", value: countsResponse.data?.conference_papers || 0, icon: <Award size={40} /> },
          { label: "Patents", value: countsResponse.data?.ipr || 0, icon: <ShieldCheck size={40} /> },
          { label: "Projects", value: countsResponse.data?.sponsored_projects || 0, icon: <Briefcase size={40} /> },
        ]);
      } catch (error) {
        console.error("Error fetching EE counts:", error);
      }
    };
    getCounts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIt((prev) => (prev + 1) % picture.length);
    }, 5000);
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
          <DeptNotice dept="EE" />
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
            {counts.length > 0 && (
              <DepartmentCounter counts={counts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}