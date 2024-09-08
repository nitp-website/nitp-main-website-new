'use client'
import BackDepartment from '../../components/department/BackDepartment'
import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
import DepartmentNotify from '../../components/department/DepartmentNotify'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Notices = [
  {
    id: 1,
    notice: "No any notice for now",
    link: ""
  },

]

export default function ECE() {
  const router = useRouter()
  return (
    <div className="p-10 max-sm:px-0 border border-red-700 text-black">
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
            The Department of Computer Science and Engineering offers courses
            leading to Bachelor of Technology in Computer Science and
            Engineering. The department has a very good infrastructure and
            faculty to provide excellent education. The curriculum is updated
            regularly to keep up with the growing demands and the changing
            trends of the software industry and research laboratories. The
            department provides a wide range of courses. The prominent among
            them includes Data Structures, Design and Analysis of Algorithms,
            System Programming, Computer Networks, Data Mining and Warehousing,
            Distributed and Parallel Computing, Mobile and Wireless Computing,
            Real-time Systems, Cryptography, Genetic Algorithm and Artificial
            Intelligence. Apart from these, students are also offered a wide
            variety of electives.
            <button
                onClick={() => router.push('/Department/ECE/about')}
                className="text-blue-600"
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
