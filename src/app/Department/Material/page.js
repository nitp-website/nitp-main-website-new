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
      Material Science & Engineering
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
            
   The Department of Materials Science and Engineering started in the year 2022. The Department has started a new Dual degree program B.Tech-M.Tech in Material Science and Engineering from the session 2022-23. There are 08 candidates enrolled in dual degree program in the session 2022-23 and 09 candidates enrolled in the session 2023-24. As of now, the department has been jointly supervised by the head of the physics, two faculties of Materials Science and Engineering department and existing faculties of the physics department. The two faculties of Material Science and Engineering department are very young and dynamic in nature and have good number of publications in different areas of Materials research. The new department is an interdisciplinary department which draws attention from all other engineering applications with basic understanding of Materials science. The different laboratories of Materials and Engineering  department mainly focuses on the study of the development of new materials and its advanced manufacturing methods and modification of its properties by suitable compositional and heat treatment methods by altering the physical and mechanical behaviour materials for its widespread application.  The department is aiming to develop its own ceramic and composite laboratories for the application of these materials in high temperature and structural areas of civil construction. Further aim is to develop materials modelling section for optimising and predicting materials deformation and rupture behaviour in the design context. 


                {/* <button
                onClick={() => router.push('/Department/Material/about')}
                className="text-blue-600"
                >
                more...
                </button> */}
          </div>
        </div>

        {/* Navigation Button  */}

        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/faculty')}
            Title={'FACULTY'}
          />
          {/* <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/labs')}
            Title={'LABS'}
          /> */}
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/syllabus')}
            Title={'SYLLABUS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/timeTable')}
            Title={'Time Table'}
          />
          {/* <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/activities')}
            Title={'ACTIVITIES'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/achivments')}
            Title={'ACHIEVMENTS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/research')}
            Title={'RESEARCH HIGHLIGHT'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Material/usefullLinks')}
            Title={'USEFULL LINKS'}
          /> */}
        </div>
      </div>
    </div>
  )
}
