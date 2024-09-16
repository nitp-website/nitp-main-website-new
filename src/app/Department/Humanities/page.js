'use client'
import BackDepartment from '../../components/department/BackDepartment'
import { DepartmentNavigationButton } from '../../components/department/DepartmentNavigationButton'
import DepartmentNotify from '../../components/department/DepartmentNotify'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Notices = [
  {
    id: 1,
    notice: 'Master Time-Table July-Dec.2023',
    link: 'https://drive.google.com/file/d/15MN9uSLnkBhyibh4BjxZ7nDun97LrO5v/a',
  },
  {
    id: 2,
    notice: 'Communicative English Lab Viva-Vove Schedule (UG & DD.1st Semester) July-Dec 2022',
    link: 'https://drive.google.com/file/d/1a9GhlTCxBzWOpvHqLfLjyAWk4_Bw30d2/view',
  },
  {
    id: 3,
    notice: 'UG_6th & M.SC 8th Sem OPEN Elective Time-Table_HSS Dept (Jan-June 2023)',
    link: 'https://drive.google.com/file/d/1BzW9dupGBPKRVQ6iWvISY8kUgb7U0WLQ/view',
  },
  {
    id: 4,
    notice: 'MTech-PhD Time Table_HSS Dept ( JAN -JUNE 2023)',
    link: 'https://drive.google.com/file/d/1lgdJlHUIJKrPqxgC2sTS0lJ3m6RqpCXD/view',
  },
  {
    id: 5,
    notice: 'Schedule of Comprehensive Viva of Saraswati Keshri, Roll no 215HS008',
    link: 'https://drive.google.com/file/d/1bSsERrTDGUKNJqOk9an116lEEqTDyH0d/view',
  },
  {
    id: 6,
    notice: 'Schedule of Comprehensive Viva of Sneha Das, Roll no 215HS002',
    link: 'https://drive.google.com/file/d/1UNVjS2cHEJeEtBNyxGULjO-EDiDa-bCe/view',
  },

  {
    id: 7,
    notice: 'Schedule of Open Viva-Voce Examination of Maryam Sabreen, Roll no. 165HS01',
    link: 'https://drive.google.com/file/d/1AObYsaKVMew-ZnqWSZ1y4qYbxz1TTOd6/view',
  },
  {
    id: 8,
    notice: 'Schedule of End Sem Viva-Voce Examination for UG (AR, CSE, ECE) 2nd Semester.',
    link: 'https://drive.google.com/file/d/1KfJqDtLwCvyRgz0SI-tV1mxW44EyUc7y/view',
  },
]

export default function Humanities() {
  const router = useRouter()
  return (
    <div className="p-10 max-sm:px-0  text-black">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-2">
        Humanities & Social Sciences
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
            With an interdisciplinary perspective at the heart of its approach, the Department of Humanities and Social Sciences at NIT Patna provides intellectual and cultural foundations for the study of human relations with society interaction and teaching towards problem solving of the nation in contemporary contexts. The Department, with its diverse expertise offers students to various courses like communicative english with language lab, social and professional ethics, professional ethics, universal human value, sociology and building economics, industrial economics and financial management, business environment and Indian economy, intellectual property right etc. in the UG programme that aimed at developing essential skills in critical thinking and writing along with the knowledge of literature, society, economic value, and philosophies of the mind and body. The Department offers Doctoral programmes in Economics, English and Sociology. Department has also actively involved in conducting research projects, publishing research papers in SCI/SCIE/ESCI/Scopus indexed journals, organising expert lecture, workshops, short-term course and FDPs for the students and aspiring participants.

            {/* <button
              onClick={() => router.push('/Department/EE/about')}
              className="text-blue-600"
            >
              more...
            </button> */}
          </div>
        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/PO')}
            Title={'P O'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/faculty')}
            Title={'FACULTY'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/syllabus')}
            Title={'SYLLABUS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/time-table')}
            Title={'Time Table'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/labs')}
            Title={'LABS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/activities')}
            Title={'ACTIVITIES'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/achivements')}
            Title={'ACHIVEMENTS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/Department/Humanities/moreInfo')}
            Title={'MORE INFO'}
          />

        </div>
      </div>
    </div>
  )
}
