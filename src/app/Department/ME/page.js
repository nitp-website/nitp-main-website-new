"use client"
import BackDepartment from "../../components/department/BackDepartment";
import { DepartmentNavigationButton } from "../../components/department/DepartmentNavigationButton"
import DepartmentNotify from "../../components/department/DepartmentNotify";
import Image from "next/image"
import { useRouter } from 'next/navigation';

const Notices = [
  {
    id: 1,
    notice: "Lab viva schedule of ME_UG_1st semester",
    link: "https://drive.google.com/file/d/1mhVc_W1HORQAHEUcFoAwoqBFA2B96nLE/view"
  },
  {
    id: 2,
    notice: "Lab viva schedule of ME",
    link: "https://drive.google.com/file/d/1a1bPf-cwduGqyPJBTCf8XjEW2_ODObZn/view"
  },
  {
    id: 3,
    notice: "Lab Viva-voce Schedule of B.Tech: 2nd Sem 2022 Batch Students.",
    link: "https://drive.google.com/file/d/18o-IMapYIWkUDOdSZFCNPYA7G_0zUO0z/view"
  },
  {
    id: 4,
    notice: "Schedule of Practical Exam Viva - voce Jan_June-2024",
    link: "https://drive.google.com/file/d/1pgfw_k7rSY0NUxqWd4tzX83y9N2lh3E7/view"
  },

]

export default function ME() {
  const router = useRouter();
  return (
    <div className="p-10 max-sm:px-0 border border-red-700  text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-10">
        MECHANICAL ENGINEERING
      </div>
      <BackDepartment navigate={"/Department"} />
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
            Title={'FACULTY'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/syllabus')}
            Title={'SYLLABUS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/ME/timeTable')}
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

