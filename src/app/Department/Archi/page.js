"use client"

import BackDepartment from "../../components/department/BackDepartment"
import { DepartmentNavigationButton } from "../../components/department/DepartmentNavigationButton"
import DepartmentNotify1 from "../../components/department/DepartmentNotify1";
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
// const Notices = [
//   {
//     id: 1,
//     notice: 'Scheduled of End Sem Viva-Voce of B.Arch. 9th Semester-July-Dec 2022',
//     link: 'https://drive.google.com/file/d/1AY3MC3BVrjz8RiFk3UTe97W-06RGji_s/view',
//   },
//   {
//     id: 2,
//     notice: 'Scheduled of End Sem Viva-Voce of B.Arch. 3rd, 5th & 7th semester_July-Dec 2022',
//     link: 'https://drive.google.com/file/d/1NL3MXJbn0FKQ4fCGQyIRUp86XAil_rZh/view',
//   },
//   {
//     id: 3,
//     notice: 'Scheduled of End Sem Viva-Voce of PG PG 1st and 4th Semester_July-Dec 2022',
//     link: 'https://drive.google.com/file/d/1nvkrxgSEAxF5mm2J9zTHrZi9l-ojJSo4/view',
//   },
//   {
//     id: 4,
//     notice: 'End Semester Viva-Voce of PG 3rd Semester_July-Dec 2022',
//     link: 'https://drive.google.com/file/d/1iecnGLUzdOVJmZbTFDhVqBHEvzR3atB0/view',
//   },
//   {
//     id: 5,
//     notice: 'Scheduled of End Semester Viva-Voce_B.Arch._Jan-June 2023',
//     link: 'https://drive.google.com/file/d/15uAvGugY6w28Owq5M0YE4pHa_-2gnUGU/view',
//   },
//   {
//     id: 6,
//     notice: 'Scheduled of End Semester Viva-Voce_MURP/ M.Arch/ Ph.D_Jan-June 2023',
//     link: 'https://drive.google.com/file/d/1w2NtfpnD4EgnZ1jRBbKL-ReZMqTuWQza/view',
//   },

// ]

export default function Archi() {
  const router = useRouter();
  const [Notices, setNotices] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=arch`);
      console.log(response.data);
      setNotices(response.data);
    }
    getData();
  }, [])
  return (
    <div className="p-10 max-sm:px-0   text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-10">
        ARCHITECTURE & PLANNING
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
                if (notice.isVisible === 1) {
                  return (
                    <DepartmentNotify1
                      key={id}
                      title={notice.title}
                      attachments={notice.attachments}
                      important={notice.important}
                      link={notice.notice_link ? notice.notice_link : ""}
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
            The Department of Architecture was established at the Bihar College of Engineering (BCE) Patna in 1979 under Patna University. It was the first time that architectural education had commenced in Bihar. When BCE Patna was rechristened as the National Institute of Technology Patna on 28th January 2004, it came under the control of the Ministry of Human Resource Development (MHRD), Government of India. The Department of Architecture and Planning offers programmes in Bachelor of Architecture (B.Arch.), Master of Urban and Regional Planning (MURP),  and Ph.D. in Architecture and Planning.
            <button
              onClick={() => router.push('/Department/Archi/about')}
              className="text-blue-600"
            >
              more..
            </button>
          </div>
        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Archi/mission')}
            Title={'MISSION AND VISSION'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Archi/faculty')}
            Title={'PEOPLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Archi/syllabus')}
            Title={'SYLLABUS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Archi/timeTable')}
            Title={'TIME TABLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Archi/labs')}
            Title={'LABS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Archi/research')}
            Title={'RESEARCH HIGHLIGHTS'}
          />
        </div>
      </div>
    </div>
  )
}
