"use client"

import Image from "next/image";
import { useRouter } from "next/navigation"

export default function Page() {  
  const router = useRouter();
 return (
  <div className="flex justify-center py-10 px-0 text-black bg-[url('https://i.postimg.cc/GtvY6WhY/6402687-3274764.jpg')] bg-cover bg-center ">
    <div className="flex flex-col w-full bg-transparent">
        {/* heading */}
        <div className="font-bold text-3xl text-red-900 flex justify-center">DEPARTMENTS</div>
          <div className="mt-2 md:mt-10 mx-0 max-sm:mx-2 grid grid-cols-5 max-md:grid-cols-3  max-sm:grid-cols-2 gap-3">
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Archi");}}department={"Architecture & Planning"} icon={"/architecture_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Chem");}}department={"Chemistry"} icon={"/chemistry_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Chemical");}}department={"Chemical Engineering and Technology"} icon={"/chemical_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/CE");}}department={"Civil Engineering"} icon={"/civil_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/CSE");}}department={"Computer Science and Engineering"} icon={"/computer_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/EE");}}department={"Electrical Engineering"} icon={"/electric_icon.png"} />
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/ECE");}}department={"Electronics And Comunication Engineering"} icon={"/electronics_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Humanities");}}department={"Humanities & Social Sciences"} icon={"/humanities_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Material");}}department={"Material Science & Engineering"} icon={"/mse-icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Math");}}department={"Mathmatics And Computing"} icon={"/mathematics-icon.png"}/>
            {/* <DepartmentNavigateButton onClick={()=>{router.push("/Department/MCA");}}department={"Master of Computer Applications"} icon={"/mathematics-icon.png"}/> */}
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/ME");}}department={"Mechanical Engineering"} icon={"/mechanical_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Mechatronics");}}department={"Mechatronics & Automation Engineering"} icon={"/mechatronics_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/Department/Phy");}}department={"Physics"} icon={"/physics_icon.png"}/>
          </div>                      
      </div>
  </div>
 )
}

function DepartmentNavigateButton({department, onClick, icon}){
    return(
      <button onClick={()=>onClick()}  className="mt-1 md:mt-10">
            <div className="flex justify-center">
                <div className="w-[90%] h-[230px] max-sm:w-full py-1 md:py-2 rounded-lg shadow-lg  bg-white border-2 border-re-50 hover:border-red-900 active:text-white text-1xl font-semibold text-red-900 flex flex-col justify-center">
                    <div className="flex justify-center mb-2">
                        <Image className="" width={100} height={100} alt="" src={`${icon}`}/>
                    </div>
                    <div>{department}</div>
                </div>
            </div>
        </button>
    )
}