"use client"

export const DepartmentNavigationButton = ({Title , onClick})=>{
    return (
        <div className="flex justify-center mb-10 border-sky-200 " >
            <button onClick={()=>onClick()} className="w-[80%] py-5 rounded-lg bg-white border border-red-200 hover:border-red-900 shadow-lg  text-red-900 hover:text-neutral-800  font-semibold active:text-white text-center text-sm">{Title}</button>
        </div>
    )
}