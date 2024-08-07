"use client"

export const DepartmentNavigationButton = ({Title , onClick})=>{
    return (
        <div className="flex justify-center mb-10">
            <button onClick={()=>onClick()} className="w-[80%] py-5 rounded-lg backdrop-blur-lg border-red-900 hover:border shadow-lg shadow-slate-600 text-red-900 hover:text-slate-600  font-semibold active:text-white text-center text-sm">{Title}</button>
        </div>
    )
}