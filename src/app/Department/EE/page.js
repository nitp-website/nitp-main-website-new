'use client'
import { useEffect, useState } from 'react'
import BackDepartment from '../../components/department/BackDepartment'
import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
import DepartmentNotify1 from '../../components/department/DepartmentNotify1'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios';



export default function EE() {
  const router = useRouter()
  const [Notices, setNotices] = useState([]);
    useEffect(()=>{
      const getData = async()=>{
        const response =await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=ee`);
        console.log(response.data);
        setNotices(response.data);
      }
      getData();
    },[])
  return (
    <div className="p-10 max-sm:px-0  text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-2">
        ELECTRICAL ENGINEERING
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
              <div className="overflow-hidden flex flex-col">
                {Notices.map((notice, id) => {
                  return (
                    <DepartmentNotify1
                        key={id}
                        title={notice.title}
                        attachments = {notice.attachments}
                        important = {notice.important}
                        link={notice.notice_link? notice.notice_link : ""}
                    />
                 )
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
            The Department of Electrical Engineering in National Institute of
            Technology Patna (Formerly known as Bihar College of Engineering)
            was established in 1945 under Patna University with an intake of 45
            students leading to a Bachelor of Science (Engineering) degree of
            four-year duration. In the year 1978 AICTE approved Post Graduate
            (PG) course leading to M.Sc. (Engg.) Degree in two specializations:
            (i) Power System Engineering and (ii) Control System Engineering.
            The department is also offering the Ph.D. research program since
            2009.{' '}
            <button
              onClick={() => router.push('/Department/EE/about')}
              className="text-blue-600"
            >
              more...
            </button>
          </div>
        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/EE/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/EE/faculty')}
            Title={'PEOPLE'}
          />
            <DepartmentNavigationButton
              onClick={() => router.push('/Department/EE/syllabus')}
              Title={'SYLLABUS'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/Department/EE/syllabus')}
              Title={'Time Table'}
            />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/EE/labs')}
            Title={'LABS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/EE/activities')}
            Title={'ACTIVITIES'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/EE/achivments')}
            Title={'ACHIEVEMENTS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/EE/research')}
            Title={'RESEARCH HIGHLIGHT'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/EE/usefullLinks')}
            Title={'USEFULL LINKS'}
          />
          
        </div>
      </div>
    </div>
  )
}
