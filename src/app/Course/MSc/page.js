"use client"

import { useRouter } from "next/navigation";


export default function Page() {  
    const router = useRouter();
    return(
        <div>
            <div className="my-10 mx-2 flex space-x-1 overflow-x-auto ">
                <div className="min-w-[800px] flex space-x-1 text-sm lg:text-base">
                    <button onClick={() => {
                        router.push("/Course")
                    }} className={`border border-black rounded text-red-900 px-2`}>ALL Courses</button>
                    
                    <button onClick={() => {
                        router.push("/Course/Ug")
                    }} className={`border border-black rounded  text-red-900 px-2`}>UG Courses</button>
                    
                    <button onClick={() => {
                        router.push("/Course/Pg")
                    }} className={`border border-black rounded text-red-900 px-2`}>PG (M.tech/MURP) Course</button>
                    
                    <button onClick={() => {
                        router.push("/Course/MTech")
                    }} className={`border border-black rounded text-red-900 px-2`}>M.tech/MURP-PHD (DD)</button>
                    
                    <button onClick={() => {
                        router.push("/Course/MSc")

                    }} className={`border border-black rounded text-white bg-red-900 px-2`}>Integrated M.sc</button>

                    
                    <button onClick={() => {
                        router.push("/Course/MCA")
                    }} className={`border border-black rounded text-red-900 px-2`}>MCA program</button>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md text-neutral-700">
                {/* LINKS */}
                <div className="mb-10">
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm text-black">
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/Int.%20M.Sc.%20(Physics).pdf" target="_blank" >Course Structure: Five year Integrated M. Sc. in Physics</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/Int.%20M.Sc.%20(Mathematics).pdf" target="_blank" >Course Structure: Five year Integrated M. Sc. in Mathematics</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/Int.%20M.Sc.%20(Chemistry).pdf" target="_blank" >Course Structure: Five year Integrated M. Sc. in Chemistry</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}