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
                    }} className={`border border-black rounded text-red-900 px-2`}>Integrated M.sc</button>
                    
                    <button onClick={() => {
                        router.push("/Course/MCA")
                    }} className={`border border-black rounded px-2 bg-red-900 text-white`}>MCA program</button>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* LINKS */}
                <div className="mb-10">
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm text-neutral-700">
                        <li className="hover:text-blue-800"><a href="">Study Materials</a></li>
                        <li className="hover:text-blue-800"><a href="">Sample Question Papers</a></li>
                        <li className="hover:text-blue-800"><a href="">Lab Manuals</a></li>
                        <li className="hover:text-blue-800"><a href="">Placement</a></li>
                        <li className="hover:text-blue-800"><a href="">E-Learning Resources</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}