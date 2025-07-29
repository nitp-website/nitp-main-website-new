"use client"
import { useEffect, useState } from 'react'
import BackDepartment from "../../components/department/BackDepartment";
import { DepartmentNavigationButton } from "../../components/department/DepartmentNavigationButton"
import DepartmentNotify1 from "../../components/department/DepartmentNotify1";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import timeTableData from '../TimeTable.json';

export default function ME() {
  const router = useRouter();
  const [Notices, setNotices] = useState([]);
  const meTimeTable = timeTableData.find(
    (item) => item.name === 'Mechanical Engineering'
  );
  useEffect(()=>{
    const getData = async()=>{
      const response =await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=me`);
      console.log(response.data);
      setNotices(response.data);
    }
    getData();
  },[])
  return (
    <div className="p-10 max-sm:px-0   text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-10">
        Mechanical Engineering 
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
            The Department of Mechanical Engineering was established in 1952
            with B. Tech program during the era of Bihar College of
            Engineering (BCE) which is well-known since 1924 as the sixth
            oldest Engineering College in India. In 1978, M. Tech Program was
            started with specializations in &quot;Thermal Turbo
            Machinery&quot; and &quot;Refrigeration, Air Conditioning and Heat
            Transfer&quot;. The Bihar College of Engineering was converted to
            National Institute of Technology Patna in 2004.{' '}
            <button
              onClick={() => router.push('/Department/ME/about')}
              className="text-blue-600"
            >
              more..
            </button>
          </div>
        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/mission')}
            Title={'MISSION AND VISSION'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/faculty')}
            Title={'PEOPLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/syllabus')}
            Title={'SYLLABUS'}
          />

          <DepartmentNavigationButton
            onClick={() => window.open(meTimeTable?.url, '_blank')}
            Title={'TIME TABLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/labs')}
            Title={'LABS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/activities')}
            Title={'ACTIVITIES'}
          />

          

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/achivments')}
            Title={'ACHIVEMENTS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/research')}
            Title={'RESEARCH'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/staff')}
            Title={'STAFF'}
          />
        </div>
      </div>
    </div>
  )
}

