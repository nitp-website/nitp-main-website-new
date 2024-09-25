'use client'
import BackDepartment from '../../components/department/BackDepartment'
import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
import DepartmentNotify1 from '../../components/department/DepartmentNotify1'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios';



export default function ECE() {
  const router = useRouter()
  const [Notices, setNotices] = useState([]);
  useEffect(()=>{
    const getData = async()=>{
      const response =await axios.get("https://admin.nitp.ac.in/api/notice/ece");
      console.log(response.data);
      setNotices(response.data);
    }
    getData();
  },[])
  return (
    <div className="p-10 max-sm:px-0  text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-3">
        ELECTRONICS AND COMMUNICATION ENGINEERING
      </div>
      <div>
        <BackDepartment navigate={'/Department'} />
      </div>

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
          The Department of Electronics and Communication Engineering is one of the established and largest department in the institute. It was established in
          the year 1978 with an intake of 10 students only. The Department offers
          B.Tech programme in "Electronics & Communication Engineering" with 161 intake
          capacity, and M.Tech programme in "Communication System, Microelectronics and
          VLSI System Design" with 22 intake capacity for each specialization.
          Department introduces dual degree program in "Microelectronics and VLSI
          System Design" in the year 2022 onwards with 22 intake capacity. The
          department is also offering Ph.D. program (Full time and Part time research
          program) in Electronics and Communication Engineering since 2012 provides a
          platform for bright graduates and postgraduates to conduct research in the
          following areas:
            <button
                onClick={() => router.push('/Department/ECE/about')}
                className="text-blue-600 ml-2"
              >
                more..
            </button>
          </div>
        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/mission')}
            Title={'MISSION AND VISSION'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/faculty')}
            Title={'FACULTY'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/syllabus')}
            Title={'SYLLABUS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/timeTable')}
            Title={'TIME TABLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/labs')}
            Title={'LABS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/activities')}
            Title={'ACTIVITIES'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/achivments')}
            Title={'ACHIEVEMENTS'}
          />

        </div>
      </div>
    </div>
  )
}
