'use client'
import BackDepartment from '../../components/department/BackDepartment'
import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
import DepartmentNotify1 from '../../components/department/DepartmentNotify1'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Humanities() {
  const router = useRouter();
  const [Notices, setNotices] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
      const response =await axios.get("https://admin.nitp.ac.in/api/notice/mae");
      console.log(response.data);
      setNotices(response.data);
    }
    getData();
  },[])
  return (
    <div className="p-10 max-sm:px-0 text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-2">
        Mechatronics and Automation
      </div>
      <BackDepartment navigate={"/Department"} />
      {/* Section 1 */}
      <div className="grid grid-cols-6 max-md:grid-cols-1">
        {/* Department Picture */}
        <div className="h-[500px] flex justify-start py-10 col-span-3 mr-4 max-sm:mr-0">
          <Image
            src="/nit-patna-003.jpg"
            className="rounded-lg max-sm:rounded-none shadow-lg shadow-slate-600 h-full"
            alt="Logo"
            width={700}
            height={1000}
          />
        </div>
        {/* Notice  */}
        <div className=" py-10  col-span-3 max-lg:col-span-3 flex flex-col max-md:mb-10">
          <div className="bg-white rounded-lg shadow-lg shadow-slate-600 px-4 h-[420px] overflow-y-auto">
            <div className="flex justify-between mb-4 text-lg font-semibold text-slate-500">
              <div>Announcement</div>
              <button className="hover:text-blue-500">View All</button>
            </div>
            <div className="overflow-hidden flex flex-col-reverse">
            {Notices.map((notice, id) => {
                  if(notice.isVisible === 1){
                    return (
                      <DepartmentNotify1
                        key={id}
                        title={notice.title}
                        attachments = {notice.attachments}
                        important = {notice.important}
                        link={notice.notice_link? notice.notice_link : ""}
                    />
                  )
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="grid grid-cols-2 max-md:grid-cols-1">

        {/* About */}

        <div className="px-6 max-sm:px-2 ">
          <div className="mb-4 text-2xl max-sm:text-lg font-semibold text-red-950">
            About
          </div>
          <div className="text-justify max-sm:text-[12px]">
            Welcome to the Department of Mechatronics and Automation Engineering at the National Institute of Technology Patna. Established in 2024, the Department of Mechatronics and Automation Engineering at NIT Patna is one of the institution's newest departments, committed to delivering a premier educational experience aimed at preparing students to be industry-ready through its four-year full-time B.Tech. program. The Mechatronics and Automation Programme is committed to prepare the graduates to synergistically integrate mechanical engineering, electronics, and intelligent computer control systems seamlessly in the design and manufacturing of industrial products and processes. The department is dedicated to preparing graduates with strong team skills to solve multi-disciplinary problems using the Mechatronics approach. Graduates of this program will have the opportunity to work in a variety of sectors, including aviation, electronics, automotive, manufacturing, oil and gas, mining, transportation, defense, robotics, and aerospace industries, as well as pursue advanced degrees. A meticulously designed curriculum aims to enhance self-reliance, soft skills, and leadership qualities, empowering our graduates to build successful careers and emerge as ethical entrepreneurs serving the nation and society. It is tailored to keep pace with rapidly changing technologies and industrial environments, considering both global and Indian contexts.<br></br>

            The Department maintains strong industrial interactions and significantly contributes to the industry by providing consultancy services and undertaking sponsored research projects. The increasing number of patents and publications in leading multidisciplinary journals highlights the department's thriving research environment.
            {/* <button
              onClick={() => router.push('/Department/Mechatronics/about')}
              className="text-blue-600"
            >
              more...
            </button> */}
          </div>
        </div>

        {/* Navigation Button  */}

        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10 h-[20vh]">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/faculty')}
            Title={'PEOPLE'}
          />
          {/* <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/labs')}
            Title={'LABS'}
          /> */}
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/syllabus')}
            Title={'SYLLABUS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/timeTable')}
            Title={'Time Table'}
          />
          {/* <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/activities')}
            Title={'ACTIVITIES'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/achivments')}
            Title={'ACHIEVMENTS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/research')}
            Title={'RESEARCH HIGHLIGHT'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/usefullLinks')}
            Title={'USEFULL LINKS'}
          /> */}
        </div>
      </div>
    </div>
  )
}
