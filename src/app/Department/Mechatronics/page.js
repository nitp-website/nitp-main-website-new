'use client'
import BackDepartment from '../../components/department/BackDepartment'
import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
import DepartmentNotify from '../../components/department/DepartmentNotify'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Notices = [
  {
    id: 1,
    notice: 'Data to be updated soon',
    link: '',
  },
  
]

export default function Humanities() {
  const router = useRouter()
  return (
    <div className="p-10 max-sm:px-0 text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-2">
      Mechatronics & Automation
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
                return (
                  <DepartmentNotify
                    key={id}
                    title={notice.notice}
                    link={notice.link? notice.link : ""}
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
            About
                <button
                onClick={() => router.push('/Department/Mechatronics/about')}
                className="text-blue-600"
                >
                more...
                </button>
          </div>
        </div>

        {/* Navigation Button  */}

        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Mechatronics/faculty')}
            Title={'FACULTY'}
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
