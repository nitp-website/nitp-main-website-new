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
                    }} className={`border border-black rounded text-red-900  px-2`}>ALL Courses</button>

                    <button onClick={() => {
                        router.push("/Course/Ug")
                    }} className={`border border-black rounded  text-red-900 px-2`}>UG Courses</button>

                    <button onClick={() => {
                        router.push("/Course/Pg")
                    }} className={`border border-black rounded text-white bg-red-900 px-2`}>PG (M.tech/MURP) Course</button>
                    
                    
                    
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
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MTech_Civil_%20ENV%20Syllabus%20wef%202020-05.10.2020.pdf" target="_blank" >M. Tech (Civil Engg.) in Environmental Engineering</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MTech_Civil_%20GET%20Syllabus%20wef%202020-05.10.2020.pdf" target="_blank" >M.TECH. IN CIVIL ENGINEERING</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CEPG%20(River).pdf" target="_blank" >Master in Civil Engineering (River)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MTech_Civil_%20STE%20Syllabus%20wef%202020-05.10.2020.pdf" target="_blank" >M. Tech (Civil Engg.) in Structural Engineering</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MTech_Civil_%20TRE%20Syllabus%20wef%202020-05.10.2020.pdf" target="_blank" >M.TECH. IN CIVIL ENGINEERING (TRANSPORTATION)</a></li>
                        <li className="hover:text-blue-800 cursor-pointer"onClick={() => router.push('/Course/Ug')}>CEPG (Water Resources)</li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/CSPG.pdf" target="_blank" >Master in Computer Science & Technology</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ECPG%20(Communication).pdf" target="_blank" >ECPG (Communication)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ECPG%20(VLSI).pdf" target="_blank">ECPG (VLSI)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/EE%20(Power%20System).pdf" target="_blank">EE (Power System)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/EEPG%20(Control%20System).pdf" target="_blank" >EEPG (Control System)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/ITPG.pdf" target="_blank" >Master in Information Technology</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MAPG.pdf" target="_blank" >MAPG</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MEPG%20(Production).pdf" target="_blank" >Master of Mechanical Engineering (MEPG) Production</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MEPG%20(Thermal).pdf" target="_blank" >MEPG (Thermal)</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MEUG%20(Design).pdf" target="_blank" >Master of Mechanical Engineering (MEPG) Design</a></li>
                        <li className="hover:text-blue-800"><a href="https://web.nitp.ac.in/downloads/course_structure/MURP.pdf" target="_blank" >Master of Urban & Regional Planning</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}