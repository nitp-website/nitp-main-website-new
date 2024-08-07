"use client"

import Image from "next/image"


export const DepartmentNavigateButton = ({department, onClick, icon})=>{
    return(
        <button onClick={()=>onClick()}  className="mt-10">
            <div className="flex justify-center">
                <div className="w-[80%] h-[300px] max-sm:w-full py-2 rounded-lg shadow-lg shadow-slate-600 backdrop-blur-sm border-red-900 hover:border active:text-white text-1xl font-semibold text-red-900 flex flex-col justify-center">
                    <div className="flex justify-center mb-2">
                        <Image className="" width={100} height={100} alt="" src={`${icon}`}/>
                    </div>
                    <div>{department}</div>
                </div>
            </div>
        </button>
    )
}