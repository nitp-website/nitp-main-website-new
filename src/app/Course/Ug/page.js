"use client"

import { useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter();
    return (
        <div>
            <div className="my-10 mx-2 flex space-x-1 overflow-x-auto ">
                <div className="min-w-[800px] flex space-x-1 text-sm lg:text-base">
                    <button onClick={() => {
                        router.push("/Course")
                    }} className={`border border-black rounded text-red-900  px-2`}>ALL Courses</button>

                    <button onClick={() => {
                        router.push("/Course/Ug")
                    }} className={`border border-black rounded text-white bg-red-900 px-2`}>UG Courses</button>

                    <button onClick={() => {
                        router.push("/Course/Pg")
                    }} className={`border border-black rounded text-red-900 px-2`}>PG (M.tech/MURP) Course</button>

                    <button onClick={() => {
                        router.push("/Course/MTech")
                    }} className={`border border-black rounded text-red-900 px-2`}>M.tech/MURP-PHD (DD)</button>

                    <button onClick={() => {
                        router.push("/Course/MSc")
                    }} className={`border border-black rounded text-red-900 px-2`}>Integrated M.sc</button>

                    <button onClick={() => {
                        router.push("/Course/MCA")
                    }} className={`border border-black rounded text-red-900 px-2`}>MCA program</button>
                </div>
            </div>
            
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* LINKS */}
                <div className="mb-10">

                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm text-black">
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ARUG.pdf" target="_blank" >Bachelor Of Architecture (ARUG)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CEUG.pdf" target="_blank" >Bachelor Of Civil Engineering (CEUG)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CSUG.pdf" target="_blank" >Bachelor Of Computer Science And Engineering (CSUG)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CSUG_2018_19.pdf" target="_blank" >CSUG 2018-19</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ECUG.pdf" target="_blank" >Bachelor of Electronics & Communication Engineering (ECUG)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ECUG_2018_19.pdf" target="_blank" >ECUG 2018-19</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/EEUG.pdf" target="_blank" >Bachelor of Electrical Engineering (EEUG) for 2014 & 2015 Batch</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MEUG.pdf" target="_blank" >Bachelor of Mechanical Engineering (MEUG)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MEUG_2018_19.pdf" target="_blank">MEUG 2018-19</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ITUG.pdf" target="_blank">Bachelor of Information Technology (ITUG)</a></li>

                    </ul>
                </div>
            </div>

        </div>
    )
}