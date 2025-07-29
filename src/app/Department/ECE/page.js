'use client'
import BackDepartment from '../../components/department/BackDepartment'
import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
import DepartmentNotify1 from '../../components/department/DepartmentNotify1'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios';
import timeTableData from '../TimeTable.json';






export default function ECE() {
  const router = useRouter()
  const [Notices, setNotices] = useState([]);
  const eceTimeTable = timeTableData.find(
    (item) => item.name === 'Electronics and Communication Engineering'
  );
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=ece`);
      console.log(response.data);
      setNotices(response.data);
    }
    getData();
  }, [])
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
          <img
            src="https://i.postimg.cc/RhqK6ZWb/ECE-Front-View-1.jpg"
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
                    attachments={notice.attachments}
                    important={notice.important}
                    link={notice.notice_link ? notice.notice_link : ""}
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
            The Department of Electronics and Communication Engineering at the National Institute of Technology Patna began its journey in 1978 with just 10 undergraduate students. The department is dedicated to providing quality education at both undergraduate (UG) and postgraduate levels. Currently, it offers the following programs:
            <br />
            1.B.Tech in "Electronics & Communication Engineering" with an intake of 100.
            <br />
            2.B.Tech in Electronics Engineering (VLSI Design and Technology) with an intake of 80.
            <br />
            3.Dual degree (B.Tech + M.Tech) in "Microelectronics and VLSI System Design" with an intake of 22.
            <br />
            4. M.Tech in:
            <br />
            &nbsp;&nbsp;&nbsp;(a) Next Generation Wireless Technologies" with an intake of 15.
            <br />
            &nbsp;&nbsp;&nbsp;(b) Microelectronics and VLSI System Design" with an intake of 15.
            <br />
            5.Ph.D. (Full-time and Part-time) in Electronics and Communication Engineering.
            <br />
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
            Title={'PEOPLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/syllabus')}
            Title={'SYLLABUS'}
          />

          <DepartmentNavigationButton
            onClick={() => window.open(eceTimeTable?.url, '_blank')}
            Title={'TIME TABLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/PO')}
            Title={'PO'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ECE/PEO')}
            Title={'PEO'}
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
