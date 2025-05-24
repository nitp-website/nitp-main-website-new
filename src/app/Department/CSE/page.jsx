"use client"
import axios from "axios";
import BackDepartment from "../../components/department/BackDepartment";
import { DepartmentNavigationButton } from "../../components/department/DepartmentNavigationButton"
import DepartmentNotify1 from "../../components/department/DepartmentNotify1";
import Image from "next/image"
import {useRouter} from 'next/navigation';
import { useEffect, useState } from "react";



const picture = ["/ee-feature1.png","/ee-feature2.png","/ee-feature3.png"]
export default function CSE() {
    const router=useRouter();
    const [feature , setFeature] = useState("/ee-feature1.png")
    const [it, setIt]= useState(0);
    const [Notices, setNotices] = useState([]);
    useEffect(()=>{
      const getData = async()=>{
        const response =await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=cse`);
        console.log(response.data);
        setNotices(response.data);
      }
      getData();
    },[])
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
      <div className="p-10 max-sm:px-0  text-black bg-[url('https://i.postimg.cc/2jnZjfrL/6359670-3258484-removebg-preview.png')] bg-cover bg-center">
        {/* heading */}
        <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-3 text-center bg-transparent">
          COMPUTER SCIENCE AND ENGINEERING
        </div>
        <div>
        <BackDepartment navigate={'/Department'}/>
        </div>
        {/* Section one */}
        <div className="grid grid-cols-6 max-md:grid-cols-1">
          {/* Department Picture */}
          <div className="flex flex-col py-10 col-span-3 mr-4 max-sm:mr-0">
            <Image
              src={`${feature}`}
              className="h-[420px] rounded-lg max-sm:rounded-none shadow-lg "
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
          <div className=" py-10  col-span-3 max-lg:col-span-3 flex flex-col max-md:mb-10 ">
            <div className="bg-white rounded-lg shadow-lg  px-4 h-[420px] overflow-y-auto border border-red-200">
              <div className="flex justify-between mb-4 text-lg font-semibold text-slate-500">
                <div>Announcement</div>
                <button className="hover:text-blue-500">View All</button>
              </div>
              <div className="overflow-hidden flex flex-col">
                {Notices.map((notice, id) => {
                  if(notice.isVisible === 1){
                    return (
                      <DepartmentNotify1
                        key={id}
                        title={notice.title}
                        attachments = {notice.attachments}
                        important = {notice.important}
                        link={notice.notice_link? notice.notice_link : ""}
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
              className="text-red-900"
            >  Read More
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
                Title={'PEOPLE'}
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