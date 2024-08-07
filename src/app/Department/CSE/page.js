"use client"
import BackDepartment from "../../../components/BackDepartment";
import { DepartmentNavigationButton } from "../../../components/DepartmentNavigationButton"
import DepartmentNotify from "../../../components/DepartmentNotify";
import Image from "next/image"
import {useRouter} from 'next/navigation';
import { useEffect, useState } from "react";

const Notices = [
  
  {
    id:1,
    notice:"B.Tech(CSE) 1st semester Group Division",
    link:"https://web.nitp.ac.in/uploads20/NOTICEforB.TechDivison.pdf"
  },
  {
    id:2,
    notice:"M.Tech CSE 3rd and PhD 2nd End Sem Exam July_Dec2020.",
    link:"https://web.nitp.ac.in/uploads20/M.Tech%20and%20PhD%20Notice_Dissertation.pdf"
  },
  {
    id:3,
    notice:"M Tech CSE and PhD CSE 1st semester End Sem Viva Voice schedule.",
    link:"https://web.nitp.ac.in/uploads20/m.tech_phd%20notice.jpeg"
  },
  {
    id:4,
    notice:"Notice : Open PhD Viva-Voice Examination of Kriti Kumari(Roll NO. 155CS07) Dept. of CSE .",
    link:"https://web.nitp.ac.in/uploads20/WhatsApp%20Image%202021-03-17%20at%2014.58.36.jpeg"
  },
  {
    id:5,
    notice:"End Sem Viva Voice Jan-June 2021 For 4th and 8th Semester (CSE Department)",
    link:"https://web.nitp.ac.in/uploads20/Notice%20of%20End%20sem%20Viva-19.04.2021.pdf"
  },
  {
    id:6,
    notice:"Revised M.Tech 4th Semester End Sem Viva Voce schedule (CSE Department)",
    link:"https://web.nitp.ac.in/uploads20/M.Tech%204th%2011May%202021_Revised-09.05.2021.pdf"
  },
  {
    id:7,
    notice:"Schedule of End Sem Viva Voice for M Tech 2nd and B Tech 6th(CSE Department)",
    link:"https://web.nitp.ac.in/uploads20/NOTICE_Mtech2nd%20&%20btech%206th-13.05.2021.pdf"
  },
  {
    id:8,
    notice:"Schedule of PhD Seminar & Technical report writing presentation(CSE Department).",
    link:"https://web.nitp.ac.in/uploads20/PhD_NOTICE-23.05.2021.pdf"
  },
  {
    id:11,
    notice:"CSE Dept. End Sem Viva-Voce Exam (Even semester) 2023",
    link:"https://drive.google.com/file/d/1z-C5GgZ7VHwW_nWS9uTq_vWXiJ4H7hYh/view"
  },
  {
    id:12,
    notice:"EndSem Viva Schedule July2023",
    link:"https://drive.google.com/file/d/1phtAAvzX98wR-sE1RtIAgsz16uS4cDDf/view"
  },
  {
    id:13,
    notice:"Summer Special End Sem Viva-Voce July 2023",
    link:"https://drive.google.com/file/d/1pGa3yDMuDDqFNTO-_WBB48_4-Vh68YHT/view"
  },
  {
    id:14,
    notice:"PG(M.Tech/MURP) syllabus course",
    link:"https://drive.google.com/file/d/1SM0SXL_8ZBi6V9L4VHPeRDptfZYHbj9M/view"
  },
  {
    id:15,
    notice:"Summer Special End Sem Viva-Voce August 2023",
    link:"https://drive.google.com/file/d/1RlfVf3eTXbGYGZwIKd5ImpKaPUlm1oKE/view"
  },
  {
    id:16,
    notice:"CSE Dept: Summer Special End Semester Viva-Voce August 2023",
    link:"https://drive.google.com/file/d/1h5C-NkYONeHe2Fo3eae_KpA_0t32hQl6/view"
  },
  {
    id:17,
    notice:"End Sem Viva-Voce Exam July-Dec, 2023",
    link:"https://drive.google.com/file/d/1703br8LKXmOLombfm2ggjTDkA2Mpbovq/view"
  },
  {
    id:18,
    notice:"CSE End Sem Viva-Voce Exam Schedule, Jan-Jun 2024",
    link:"https://drive.google.com/file/d/1V-MHhLibIMhJlvVVzidfZL1HzTWgIjhI/view"
  },
  
]


const picture = ["/ee-feature1.png","/ee-feature2.png","/ee-feature3.png"]
export default function CSE() {
    const router=useRouter();
    const [feature , setFeature] = useState("/ee-feature1.png")
    const [it, setIt]= useState(0);
    useEffect(()=>{
      const interval = setInterval(()=>{
        setFeature(picture[it]);
        setIt(it+1);
        if(it == picture.length-1){
          setIt(0);
        }
      },2500)
      return ()=> clearInterval(interval)
    },[it])

    return (
      <div className="p-10 max-sm:px-0 border border-red-700">
        {/* heading */}
        <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-3">
          COMPUTER SCIENCE AND ENGINEERING
        </div>
        <div>
        <BackDepartment navigate={'/'}/>
        </div>
        {/* Section one */}
        <div className="grid grid-cols-6 max-md:grid-cols-1">
          {/* Department Picture */}
          <div className="flex flex-col py-10 col-span-3 mr-4 max-sm:mr-0">
            <Image
              src={`${feature}`}
              className="h-[420px] rounded-lg max-sm:rounded-none shadow-lg shadow-slate-600"
              alt="Logo"
              width={700}
              height={1000}
            />
            <div className="flex justify-center relative top-[-40px] space-x-1">
              <button onClick={()=>{setIt(0)}} className={`h-[18px] w-[18px] border ${(it == 0)?"bg-black":"bg-slate-400"} rounded-full`}></button>
              <button onClick={()=>{setIt(1)}} className={`h-[18px] w-[18px] border ${(it == 1)?"bg-black":"bg-slate-400"} rounded-full`}></button>
              <button onClick={()=>{setIt(2)}} className={`h-[18px] w-[18px] border ${(it == 2)?"bg-black":"bg-slate-400"} rounded-full`}></button>
            </div>
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
              The Department of Computer Science and Engineering offers courses
              leading to Bachelor of Technology in Computer Science and
              Engineering. The department has a very good infrastructure and
              faculty to provide excellent education. The curriculum is updated
              regularly to keep up with the growing demands and the changing
              trends of the software industry and research laboratories. The
              department provides a wide range of courses. The prominent among
              them includes Data Structures, Design and Analysis of Algorithms,
              System Programming, Computer Networks, Data Mining and
              Warehousing, Distributed and Parallel Computing, Mobile and
              Wireless Computing, Real-time Systems, Cryptography, Genetic
              Algorithm and Artificial Intelligence. Apart from these, students
              are also offered a wide variety of electives.
              <button
              onClick={() => router.push('/Department/CSE/about')}
              className="text-blue-600"
            > more...
            </button>
            </div>

          </div>
          {/* Navigation Button  */}
          <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
            <DepartmentNavigationButton
              onClick={() => router.push('/Department/CSE/mission')}
              Title={'MISSION AND VISSION'}
            />
              <DepartmentNavigationButton
                onClick={() => router.push('/Department/CSE/faculty')}
                Title={'FACULTY'}
              />
            <DepartmentNavigationButton
              onClick={() => router.push('/Department/CSE/syllabus')}
              Title={'SYLLABUS'}
            />
              <DepartmentNavigationButton
                onClick={() => router.push('/Department/CSE/timeTable')}
                Title={'TIME TABLE'}
              />
            <DepartmentNavigationButton
              onClick={() => router.push('/Department/CSE/labs')}
              Title={'LABS'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/Department/CSE/activities')}
              Title={'ACTIVITIES'}
            />
            
            <DepartmentNavigationButton
              onClick={() => router.push('/Department/CSE/achivments')}
              Title={'ACHIEVEMENTS'}
            />
          </div>
        </div>
      </div>
    )
   }