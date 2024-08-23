"use client"
import BackDepartment from "../../components/department/BackDepartment";
import { DepartmentNavigationButton } from "../../components/department/DepartmentNavigationButton"
import DepartmentNotify from "../../components/department/DepartmentNotify";
import Image from "next/image"
import { useRouter } from 'next/navigation';

const Notices = [
  {
    id: 1,
    notice: "No any notice for now",
    link: ""
  },

]

export default function Chem() {
  const router = useRouter();
  return (
    <div className="p-10 max-sm:px-0 border border-red-700">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-3">
        CHEMISTRY
      </div>
      <div>
        <BackDepartment navigate={'/Department'} />
      </div>
      {/* Section one */}
      <div className="grid grid-cols-6 max-md:grid-cols-1">
        {/* Department Picture */}
        <div className="h-[500px] flex justify-start py-10 col-span-3 mr-4 max-sm:mr-0">
          <Image
            src="/cseimg.png"
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
                    link={notice.link ? notice.link : ""}
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
            The Chemistry department was established in 1924, at the same time
            the institute was founded. The Department has expanded
            significantly since 2014 and offers several compulsory and
            elective courses to B.Tech. and B.Arch. students of the Institute
            in 1st, 2nd and 3rd years of the UG and UG-PG dual degree
            programs. The department has offered a UG-PG 5-year Integrated
            M.Sc. in Chemistry degree from 2015 where the curriculum offers
            students an excellent theoretical foundation in both traditional
            as well as contemporary areas of chemistry along with extensive
            hands on training in experiments.{' '}
            <button
              onClick={() => router.push('/Department/Chem/about')}
              className="text-blue-600"
            >
              more..
            </button>
          </div>
        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chem/mission')}
            Title={'MISSION AND VISSION'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chem/faculty')}
            Title={'FACULTY'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chem/syllabus')}
            Title={'SYLLABUS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chem/timeTable')}
            Title={'TIME TABLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chem/labs')}
            Title={'LABS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chem/activities')}
            Title={'ACTIVITIES'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chem/achivments')}
            Title={'ACHIEVEMENTS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Chem/more')}
            Title={'MORE INFO'}
          />

        </div>
      </div>
    </div>
  )
}