"use client"

import Image from "next/image";
import { useRouter } from "next/navigation"

export default function Page() {  
  const router = useRouter();
 return (
  <div className="flex justify-center py-10 px-0">
    <div className="flex flex-col w-full">
        {/* heading */}
        <div className="font-bold text-3xl text-red-900 flex justify-center">DEPARTMENTS</div>
          <div className="mt-10 mx-0 max-sm:mx-2 grid grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1">
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Archi");}}department={"Architecture & Planning"} icon={"/architecture_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Chem");}}department={"Chemistry"} icon={"/chemistry_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Chemical");}}department={"Chemical Engineering and Technology"} icon={"/chemical_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/CE");}}department={"Civil"} icon={"/civil_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/CSE");}}department={"Computer Science"} icon={"/computer_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/EE");}}department={"Electrical"} icon={"/electric_icon.png"} />
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/ECE");}}department={"Electronics And Comunication"} icon={"/electronics_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Humanities");}}department={"Humanities & Social Sciences"} icon={"/humanities_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Material");}}department={"Material Science & Engineering"} icon={"/mathematics-icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Math");}}department={"Mathmatics And Computing"} icon={"/mathematics-icon.png"}/>
            {/* <DepartmentNavigateButton onClick={()=>{router.push("/Department/MCA");}}department={"Master of Computer Applications"} icon={"/mathematics-icon.png"}/> */}
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/ME");}}department={"Mechanical"} icon={"/mechanical_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Mechatronics");}}department={"Mechatronics & Automation"} icon={"/mechatronics_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Phy");}}department={"Physics"} icon={"/physics_icon.png"}/>
          </div>                      
      </div>
  </div>
 )
}

function DepartmentNavigateButton({department, onClick, icon}){
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