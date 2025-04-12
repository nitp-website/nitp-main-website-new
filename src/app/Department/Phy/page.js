"use client"
import BackDepartment from "../../components/department/BackDepartment";
import { DepartmentNavigationButton } from "../../components/department/DepartmentNavigationButton"
import DepartmentNotify1 from "../../components/department/DepartmentNotify1";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useEffect, useState } from "react";


export default function ME() {
  const router = useRouter();
  const [Notices, setNotices] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
      const response =await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=phy`);
      console.log(response.data);
      setNotices(response.data);
    }
    getData();
  },[])
  return (
    <div className="p-10 max-sm:px-0  text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-4">
      Applied Physics and Materials Engineering
      </div>
      <BackDepartment navigate={"/Department"} />
      {/* Section one */}
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
            {/* The Department of Physics was established in 1924 and since then
            has been functioning as an important part of the institute. As of
            now, the Department has eight faculty members and four support
            staffs at different levels. At present, there are 12 students
            enrolled in Integrated M. Sc. And 8 students enrolled in the Ph.
            D. program.The Department is mentored by Prof. K.L.Chopra, Ex-Director, IIT Kharagpur. */}
            The Department of Physics was established in the year 1924 and since then
            has been functioning as an important unit of the institute. As of 
            now, the Department has nine faculty members who are actively involved 
            in both teaching and research and three supporting staffs including one Technical Assistant 
            for Labs. The Department of Materials Science and Engineering started in the year 2022. 
            The Department has started a new Dual degree program B.Tech-M.Tech
            in Material Science and Engineering from the session 2022-23. 
            There are 08 candidates enrolled in dual degree program in the session 2022-23 and 09 candidates 
            enrolled in the session 2023-24 and 10 candidates enrolled in the session 2024-25. 
            In the year of 2024-25 the department has been merged with Physics department 
            and thereafter new department has started and named as “Applied Physics and Materials Engineering”. 
            The Department is mentored by Prof. K.L.Chopra, Ex-Director, IIT Kharagpur.
            <button
              onClick={() => router.push('/Department/Phy/about')}
              className="text-blue-600"
            >
              more...
            </button>
          </div>
        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/faculty')}
            Title={'PEOPLE'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/syllabus')}
            Title={'SYLLABUS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/timeTable')}
            Title={'TIME TABLE'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/PO')}
            Title={'PO'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/PEO')}
            Title={'PEO'}
          />
          {/* <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/lab')}
            Title={'LABS'}
          /> */}
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/activities')}
            Title={'ACTIVITIES'}
          />


          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/achievements')}
            Title={'ACHIEVEMENTS'}
          />
          {/* <DepartmentNavigationButton
            onClick={() => router.push('/Department/Phy/research')}
            Title={'Research Highlights'}
          /> */}
        </div>
      </div>
    </div>
  )
}



