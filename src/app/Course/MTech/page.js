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

                    }} className={`border border-black rounded  text-red-900 px-2`}>ALL Courses</button>

                    
                    <button onClick={() => {
                        router.push("/Course/Ug")
                    }} className={`border border-black rounded  text-red-900 px-2`}>UG Courses</button>
                    
                    <button onClick={() => {
                        router.push("/Course/Pg")
                    }} className={`border border-black rounded  text-red-900 px-2`}>PG (M.tech/MURP) Course</button>
                    
                    <button onClick={() => {
                        router.push("/Course/MTech")

                    }} className={`border border-black rounded text-white bg-red-900 px-2`}>M.tech/MURP-PHD (DD)</button>

                    
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
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ARPG%20DD.pdf" target="_blank" >Master of Urban & Regional Planning (MURP)-DD</a></li>
                        <li className="hover:text-blue-800"><a href="http://web.nitp.ac.in/downloads/course_structure/CEPG%20(Enviormental)%20DD.pdf" target="_blank" >Master of Civil Engineering (CEPG) Enviormental-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CEPG%20(Geotechnical)%20DD.pdf" target="_blank" >Master of Civil Engineering (CEPG) Geotechnical-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CEPG%20(Structural)%20DD.pdf" target="_blank" >Master of Civil Engineering (CEPG) Structural-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CEPG%20(Transportation)%20DD.pdf" target="_blank" >Master of Civil Engineering (CEPG) Transportation-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CEPG%20(Water%20Resources)%20DD.pdf" target="_blank" >Master of Civil Engineering (CEPG) Water Resources-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CSPG-%20DD.pdf" target="_blank" >Master of Computer Science & Engineering (CSPG)-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ECPG%20(Communication)%20DD.pdf" target="_blank" >Master of Electronics & Communication (ECPG) Communication System-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ECPG%20(VLSI)%20DD.pdf" target="_blank">Master of Civil Engineering (ECPG) Microelectronics & VLSI-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/EE%20(Control%20System)%20DD.pdf" target="_blank">Master of Electrical Engineering (EEUG) Control System- DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/EE%20(Power)%20DD.pdf" target="_blank" >Master of Electrical Engineering (EEUG) Power System- DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ITPG%20DD.pdf" target="_blank" >Master of Information Technology (ITPG)-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ME%20(Design)%20DD.pdf" target="_blank" >Master of Mechanical Engineering (MEPG) Design-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ME%20(Production)%20DD.pdf" target="_blank" >Master of Mechanical Engineering (MEPG) Production-DD</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ME%20(Thermal)%20DD.pdf" target="_blank" >Master of Mechanical Engineering (MEPG) Thermal Engineering-DD</a></li>

                    </ul>
                </div>

            </div>
        </div>
    )
}