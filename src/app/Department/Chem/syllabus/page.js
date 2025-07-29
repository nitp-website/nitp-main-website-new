"use client"

import BackDepartment from "../../../components/department/BackDepartment"
import { useState } from "react";

function ActComp({ title, content }) {
    return (
        <div className="flex flex-col mt-8 lg:ml-10">
            <p className="text-xl lg:text-2xl font-semibold mb-4">
                {title}
            </p>
            <ul>
                {content.map((points, i) => {
                    return (
                        <li key={i} className="list-disc ml-4 text-sm lg:text-base
                        pb-2">
                            {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function SyllabusComp({ sem, code, title, L, T, P, cred, url, semH }) {
    return (
        <>
            <div className={semH ? `font-semibold col-span-1 border border-black flex flex-col justify-start pl-2 py-2 text-sm text-black` :
                `col-span-1 border border-black flex flex-col justify-center pl-4 py-2`}>{sem}</div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <a href={url} className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer">{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}

function SyllabusComp2({ code, title, L, T, P, cred, url, titleH }) {
    return (
        <>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <a href={url} className={titleH ? ` font-semibold col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer` :
                `col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer`
            }>{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}
function Page() {
    const [msc, setMsc] = useState(false);
    const [phd, setPhd] = useState(false);
    const [batch2020,setBatch2020] = useState(false);
    const [batch2023,setBatch2023] = useState(true);
    return (
        <div className=" flex flex-col p-5 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl  font-bold">
                        Syllabus
                    </p>
                </div>
                <div className="mt-1 lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                    Chemical Science and Technology
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Chem"}/>

            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <ActComp
                    title={'Chemistry'}
                    
                    content={['Engineering Chemistry Course for ALL Engg. Branches(B.Tech NewSyllabus) 2021',
                        'B. Tech. 1st year (1st and 2nd Semester) General Chemistry course (600 students) Chemical Sciences (1CH101)',
                        'B. Tech. 1st year (1st and 2nd Semester) General Chemistry Lab (600 students) Chemical Sciences Lab (1CH102)',
                        'B. Tech. 3rd and 4th Semester UG Course (600 students) Green Technology (CH104)',
                        'B. Tech. 3rd and 4th Semester UG Course (600 students) Bio-Science',
                        '5 year Integrated MSc Chemistry (30 students)',
                        'PhD',
                    ]}
                />
                <div className="mt-6">
                    <div className="mb-10 flex space-x-1 max-sm:text-[13px]">
                        {/* <button onClick={() => {
                            setMsc(true);
                            setPhd(false);
                            setBatch2020(false);
                            setBatch2023(false);
                        }} className={`border border-black rounded ${(msc) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Integrated M.Sc Course</button> */}
                        <button onClick={() => {
                            setMsc(false);
                            setPhd(false);
                            setBatch2023(true);
                            setBatch2020(false);
                        }} className={`border border-black rounded ${(batch2023) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual Degree in Chemical technology- For 2023-2028/2024-2029 batches</button>
                        <button onClick={() => {
                            setMsc(false);
                            setPhd(false);
                            setBatch2020(true);
                            setBatch2023(false);
                        }} className={`border border-black rounded ${(batch2020) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual degree in Chemical Technology- For 2025 - 2030 batch</button>
                             <button onClick={() => {
                            setMsc(false);
                            setPhd(true);
                            setBatch2020(false);
                            setBatch2023(false);
                        }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PhD Courses</button>
                    </div>
                    {/* Msc PROGRAM */}
                    <div className={`mb-10 ${(msc == false) ? "hidden" : ""}`}>
                        <div className=" overflow-x-auto mr-10">
                            <div className="border grid grid-cols-11 min-w-[1100px]">
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                                <SyllabusComp
                                    sem={"1"}
                                    code={"HS19101"}
                                    title={"Communicative English"}
                                    L={"3"} T={"0"} P={"2"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"1"}
                                    code={"MA101"}
                                    title={"Engineering Mathematics"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"1"}
                                    code={"CH19101"}
                                    title={"Engineering Chemistry"}
                                    L={"3"} T={"0"} P={"2"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"1"}
                                    code={"CS19101"}
                                    title={"Introduction to Computing"}
                                    L={"3"} T={"0"} P={"2"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"1"}
                                    code={"ME19101"}
                                    title={"Workshop Practice"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"1"}
                                    code={"EAA19101"}
                                    title={"EAA-Sports/Innovative Project"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"1"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"2"}
                                    code={"HS29101"}
                                    title={"Science, Society and Ethical Values"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"2"}
                                    code={"MA29101"}
                                    title={"Differential Equations and Linear Algebra"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"2"}
                                    code={"CH29101"}
                                    title={"Fluid Flow Operations"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"2"}
                                    code={"EE29101"}
                                    title={"Elements of Electrical Engineering"}
                                    L={"3"} T={"0"} P={"2"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"2"}
                                    code={"PH29101"}
                                    title={"Engineering Physics"}
                                    L={"3"} T={"0"} P={"2"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"2"}
                                    code={"EAA29101"}
                                    title={"EAA-Swachcha Bharat Mission (SBM)"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"1"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"3"}
                                    code={"CH39101"}
                                    title={"Principles of Organic Chemistry"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"3"}
                                    code={"CH39102"}
                                    title={"Engineering Thermodynamics"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"3"}
                                    code={"CH39103"}
                                    title={"Energy Resources & Utilization"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"3"}
                                    code={"CH39104"}
                                    title={"Chemical Process Calculations"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"3"}
                                    code={"CH39105"}
                                    title={"Fluid Particle Mechanics and Mechanical Operations"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"3"}
                                    code={"MA39101"}
                                    title={"Probability & Statistics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"3"}
                                    code={"CHL39101"}
                                    title={"Fluid Flow Operation Lab"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"4"}
                                    code={"CH49101"}
                                    title={"Chemical Engineering Thermodynamics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"4"}
                                    code={"CH49102"}
                                    title={"Heat Transfer Operations"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"4"}
                                    code={"CH49103"}
                                    title={"Principles of Inorganic Chemistry"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"4"}
                                    code={"CH49104"}
                                    title={"Principles of Physical Chemistry"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"4"}
                                    code={"CH49105"}
                                    title={"Material Science"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"4"}
                                    code={"MA49101"}
                                    title={"Numerical Analysis"}
                                    L={"3"} T={"0"} P={"2"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"4"}
                                    code={"CHL49101"}
                                    title={"Heat Transfer Operation Lab"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"5"}
                                    code={"CH59101"}
                                    title={"Mass Transfer Operations"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"5"}
                                    code={"CH59102"}
                                    title={"Chemical Process Instrumentation"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"5"}
                                    code={"CH59103"}
                                    title={"Unit Processes of Organic Synthesis"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"5"}
                                    code={"CH59104"}
                                    title={"Chemical Technology – I (Inorganic)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"5"}
                                    code={"CH59105"}
                                    title={"Chemical & Instrumental Method"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"5"}
                                    code={"OE5XXXX"}
                                    title={"Open Elective – I"}
                                    L={"X"} T={"X"} P={"X"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"5"}
                                    code={"CHL59101"}
                                    title={"Chemical Technology Lab - I"}
                                    L={"0"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"6"}
                                    code={"CH69101"}
                                    title={"Chemical Reaction Engineering"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"6"}
                                    code={"CH69102"}
                                    title={"Process Equipment Design"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"6"}
                                    code={"CH69103"}
                                    title={"Chemical Process Control"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"6"}
                                    code={"CH69104"}
                                    title={"Chemical Technology – II (Organic)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"6"}
                                    code={"CHL69101"}
                                    title={"Mass Transfer Operation Lab"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"6"}
                                    code={"CHL69102"}
                                    title={"Chemical Reaction Engineering Lab"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"6"}
                                    code={"OE6XXXX"}
                                    title={"MOOCS-I"}
                                    L={"X"} T={"X"} P={"X"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"6"}
                                    code={"OE6XXXX"}
                                    title={"MOOCS-II"}
                                    L={"X"} T={"X"} P={"X"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"7"}
                                    code={"CH79101"}
                                    title={"Industrial Pollution and Control"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"7"}
                                    code={"CH79102"}
                                    title={"Petroleum Refining Technology"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"7"}
                                    code={"CH79103"}
                                    title={"Digital Technologies"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"7"}
                                    code={"CH79***"}
                                    title={"Department Elective – I"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"7"}
                                    code={"CH79***"}
                                    title={"Department Elective – II"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"7"}
                                    code={"CHL79101"}
                                    title={"Chemical Technology Lab - II"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"7"}
                                    code={"CHL79102"}
                                    title={"Industrial Pollution and Control Lab"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"7"}
                                    code={"CHL79103"}
                                    title={"Process Control Lab"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"7"}
                                    code={"CHL79104"}
                                    title={"Industrial Academic Training"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={""}
                                />


                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"8"}
                                    code={"CH89101"}
                                    title={"Safety & Hazard in Process Industries"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"8"}
                                    code={"CH89102"}
                                    title={"Sustainable Practices"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"8"}
                                    code={"CH89103"}
                                    title={"Biochemical Engineering"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"8"}
                                    code={"CH89104"}
                                    title={"Engineering Economics & Management"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"8"}
                                    code={"CH89***"}
                                    title={"Department Elective – III"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"8"}
                                    code={"OE8XXXX"}
                                    title={"Open Elective – II"}
                                    L={"X"} T={"X"} P={"X"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"8"}
                                    code={"CH89105"}
                                    title={"Seminar Presentation & Technical Writing"}
                                    L={"0"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"8"}
                                    code={"CH89106"}
                                    title={"B. Tech. Major Project"}
                                    L={"0"} T={"0"} P={"8"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"9"}
                                    code={"CH99101"}
                                    title={"M. Tech. Project (To continue in 10th Sem)"}
                                    L={"0"} T={"0"} P={"36"}
                                    cred={"18"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"9"}
                                    code={"CH99102"}
                                    title={"Comprehensive Viva"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"10"}
                                    code={"CH109101"}
                                    title={"M. Tech Project & Dissertation"}
                                    L={"0"} T={"0"} P={"40"}
                                    cred={"20"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={"Semester Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyllabusComp
                                    sem={"Semester Grand Total"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"-"} P={"-"}
                                    cred={"200"}
                                    url={""}
                                />



                                {/* add semH={true} wherever you want to write semester in bold */}

                            </div>
                        </div>
                    </div>
                    {/** Dual degree in Chemical Technology- For 2025-2020 batch */}
                     <div className={`mb-10 ${(batch2020 == false) ? "hidden" : ""}`}>
                        <div className=" overflow-x-auto mr-10">
                            <div className="border grid grid-cols-11 min-w-[1100px]">
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>

                                <SyllabusComp sem={"1"} code={"HS010301"} title={"Professional Communication and Technical Writing"} L={"2"} T={"1"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"1"} code={"MC010301"} title={"Engineering Mathematics I"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"1"} code={"CT010301"} title={"Engineering Chemistry"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"1"} code={"CS010301"} title={"Introduction to Computing"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"1"} code={"ME010301"} title={"Workshop Practice"} L={"2"} T={"0"} P={"2"} cred={"3"} url={""} />
                                <SyllabusComp sem={"1"} code={"EA010301"} title={"EAA-Sports/Innovative Project"} L={"0"} T={"0"} P={"3"} cred={"1"} url={""} />
                                <SyllabusComp sem={"1"} code={"ME010302"} title={"Engineering Graphics"} L={"2"} T={"0"} P={"2"} cred={"3"} url={""} />

                                <SyllabusComp sem={"2"} code={"HS020301"} title={"Science, Society and Ethical Values"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"2"} code={"MC020301"} title={"Engineering Mathematics II"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"2"} code={"CT020301"} title={"Fluid Flow Operations"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"2"} code={"EE020301"} title={"Elements of Electrical Engineering"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"2"} code={"AP020301"} title={"Engineering Physics"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"2"} code={"EA020301"} title={"EAA-Swachcha Bharat Mission (SBM)"} L={"0"} T={"0"} P={"3"} cred={"1"} url={""} />

                                <SyllabusComp sem={"3"} code={"CT030301"} title={"Principles of Organic Chemistry"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"CT030302"} title={"Engineering Thermodynamics"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"CT030303"} title={"Energy Resources & Utilization"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"CT030304"} title={"Chemical Process Calculations"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"3"} code={"CT030305"} title={"Fluid Particle Mechanics and Mechanical Operations"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"MC030301"} title={"Probability & Statistics"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"CT030306"} title={"Fluid Flow and Mechanical Operation Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"3"} code={"CT030307"} title={"Energy Resources Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />

                                <SyllabusComp sem={"4"} code={"CT040301"} title={"Chemical Engineering Thermodynamics"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"4"} code={"CT040302"} title={"Heat Transfer Operations"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"4"} code={"CT040303"} title={"Principles of Inorganic Chemistry"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"4"} code={"CT040304"} title={"Principles of Physical Chemistry"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"4"} code={"CT040305"} title={"Materials Science"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"4"} code={"MC040301"} title={"Numerical Analysis"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"4"} code={"CT040306"} title={"Heat Transfer Operation Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />

                                <SyllabusComp sem={"5"} code={"CT050301"} title={"Mass Transfer Operations I"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"5"} code={"CT050302"} title={"Chemical Reaction Engineering I"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"5"} code={"CT050303"} title={"Chemical Process Instrumentation"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"5"} code={"CT050304"} title={"Chemical Technology – I"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"5"} code={"CT050305"} title={"Chemical & Instrumental Methods for Analysis"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"5"} code={"CT050300"} title={"Open Elective – I"} L={"X"} T={"X"} P={"X"} cred={"3"} url={""} />
                                <SyllabusComp sem={"5"} code={"CT050306"} title={"Chemical Technology Lab – I"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />

                                <SyllabusComp sem={"6"} code={"CT060301"} title={"Mass Transfer Operations II"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"6"} code={"CT060302"} title={"Chemical Reaction Engineering II"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"6"} code={"CT060303"} title={"Chemical Process Control"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"6"} code={"CT060304"} title={"Chemical Technology – II"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"6"} code={"CT060305"} title={"Mass Transfer Operation Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"6"} code={"CT060306"} title={"Chemical Reaction Engineering Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"6"} code={"CT060307"} title={"Chemical Technology Lab – II"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"6"} code={"XXXXXX"} title={"MOOCS-I"} L={"X"} T={"X"} P={"X"} cred={"3"} url={""} />
                                <SyllabusComp sem={"6"} code={"XXXXXX"} title={"MOOCS-II"} L={"X"} T={"X"} P={"X"} cred={"3"} url={""} />

                                <SyllabusComp sem={"7"} code={"CT070301"} title={"Industrial Pollution and Control"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"7"} code={"CT070302"} title={"Artificial Intelligence in Chemical Technology"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"7"} code={"CT070303"} title={"Process Modelling and Simulation"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"7"} code={"CT070304"} title={"Industrial Pollution and Control Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"7"} code={"CT070305"} title={"Chemical Process Control and Instrumentation Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"7"} code={"CT070306"} title={"Industrial Academic Training"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"7"} code={"CT070307"} title={"Department Elective – I"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"7"} code={"CT070308"} title={"Department Elective – II"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />

                                <SyllabusComp sem={"8"} code={"CT080301"} title={"Safety & Hazard in Process Industries"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CT080302"} title={"Introduction to Sustainability"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CT080303"} title={"Biochemical Engineering"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CT080304"} title={"Engineering Economics & Management"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CT080305"} title={"Department Elective – III"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"8"} code={"CT080300"} title={"Open Elective – II"} L={"X"} T={"X"} P={"X"} cred={"3"} url={""} />
                                <SyllabusComp sem={"8"} code={"CT080305"} title={"Seminar Presentation & Technical Writing"} L={"0"} T={"0"} P={"4"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CT080306"} title={"B. Tech. Major Project"} L={"0"} T={"0"} P={"8"} cred={"4"} url={""} />

                                <SyllabusComp sem={"9"} code={"CT090301"} title={"M. Tech. Project (To continue in 10th Sem)"} L={"0"} T={"0"} P={"32"} cred={"16"} url={""} />
                                <SyllabusComp sem={"9"} code={"CT090302"} title={"Comprehensive Viva"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />

                                <SyllabusComp sem={"10"} code={"CT100301"} title={"M. Tech Project & Dissertation"} L={"0"} T={"0"} P={"36"} cred={"18"} url={""} />

                                {/* Department Electives - Group I */}
                                <SyllabusComp sem={"EL-1"} code={"CT0703XX"} title={"Advanced Polymer Processing Technologies"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"EL-1"} code={"CT0703XX"} title={"Thermal & Catalytic Processes in Petroleum Refining"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"EL-1"} code={"CT0703XX"} title={"Petroleum Refining Technology and Petrochemicals"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />

                                {/* Department Electives - Group II */}
                                <SyllabusComp sem={"EL-2"} code={"CT0703XX"} title={"Solar Energy Engineering"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"EL-2"} code={"CT0703XX"} title={"Electrochemical Energy Conversion and Storage"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"EL-2"} code={"CT0703XX"} title={"Hydrogen and Bio Energy"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />

                                {/* Department Electives - Group III */}
                                <SyllabusComp sem={"EL-3"} code={"CT0803XX"} title={"Medicinal Chemistry"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"EL-3"} code={"CT0803XX"} title={"Drug Delivery Technology"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"EL-3"} code={"CT0803XX"} title={"Fine Chemicals Production Processes"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />

                                {/* add semH={true} wherever you want to write semester in bold */}

                            </div>
                            <div className="my-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-base text-gray-700">
                                    Click the link below to view or download the full syllabus for all semesters, including core, foundation, electives, and lab courses.
                                </p>
                                <a
                                    href="https://drive.google.com/file/d/1yKjAyWHe9bvevQ37e9z3_Uncatzq1nwj/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                                >
                                    View Complete Syllabus
                                </a>
                            </div>
                        </div>
                    </div>

                    {/** Dual degree in Chemical Technology- For 2023 batch */}
                     <div className={`mb-10 ${(batch2023 == false) ? "hidden" : ""}`}>
                        <div className=" overflow-x-auto mr-10">
                            <div className="border grid grid-cols-11 min-w-[1100px]">
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>

                                <SyllabusComp sem={"1"} code={"HS19101"} title={"Communicative English"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"1"} code={"MA19101"} title={"Engineering Mathematics"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"1"} code={"CH19101"} title={"Engineering Chemistry"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"1"} code={"CS19101"} title={"Introduction to Computing"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"1"} code={"ME19101"} title={"Workshop Practice"} L={"2"} T={"0"} P={"2"} cred={"3"} url={""} />
                                <SyllabusComp sem={"1"} code={"EAA19101"} title={"EAA-Sports/Innovative Project"} L={"0"} T={"0"} P={"3"} cred={"1"} url={""} />

                                <SyllabusComp sem={"2"} code={"HS29101"} title={"Science, Society and Ethical Values"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"2"} code={"MA29101"} title={"Differential Equations and Linear Algebra"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"2"} code={"CH29101"} title={"Fluid Flow Operations"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"2"} code={"EE29101"} title={"Elements of Electrical Engineering"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"2"} code={"PH29101"} title={"Engineering Physics"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"2"} code={"EAA29101"} title={"EAA-Swachcha Bharat Mission (SBM)"} L={"0"} T={"0"} P={"3"} cred={"1"} url={""} />

                                <SyllabusComp sem={"3"} code={"CH39101"} title={"Principles of Organic Chemistry"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"CH39102"} title={"Engineering Thermodynamics"} L={"2"} T={"1"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"CH39103"} title={"Energy Resources & Utilization"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"CH39104"} title={"Chemical Process Calculations"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"3"} code={"CH39105"} title={"Fluid Particle Mechanics and Mechanical Operations"} L={"2"} T={"1"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"MA39101"} title={"Probability & Statistics"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"3"} code={"CHL39101"} title={"Fluid Flow Operation Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />

                                <SyllabusComp sem={"4"} code={"CH49101"} title={"Chemical Engineering Thermodynamics"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"4"} code={"CH49102"} title={"Heat Transfer Operations"} L={"2"} T={"1"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"4"} code={"CH49103"} title={"Principles of Inorganic Chemistry"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"4"} code={"CH49104"} title={"Principles of Physical Chemistry"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"4"} code={"CH49105"} title={"Material Science"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"4"} code={"MA49101"} title={"Numerical Analysis"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"4"} code={"CHL49101"} title={"Heat Transfer Operation Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />

                                <SyllabusComp sem={"5"} code={"CH59101"} title={"Mass Transfer Operations I"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"5"} code={"CH59102"} title={"Chemical Reaction Engineering I"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"5"} code={"CH59103"} title={"Chemical Process Instrumentation"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"5"} code={"CH59104"} title={"Chemical Technology – I"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"5"} code={"CH59105"} title={"Chemical & Instrumental Method for Analysis"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"5"} code={"OE5XXXX"} title={"Open Elective – I"} L={"X"} T={"X"} P={"X"} cred={"3"} url={""} />
                                <SyllabusComp sem={"5"} code={"CHL59101"} title={"Chemical Technology Lab – I"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />

                                <SyllabusComp sem={"6"} code={"CH69101"} title={"Mass Transfer Operations II"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"6"} code={"CH69102"} title={"Chemical Reaction Engineering II"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"6"} code={"CH69103"} title={"Chemical Process Control"} L={"3"} T={"1"} P={"0"} cred={"4"} url={""} />
                                <SyllabusComp sem={"6"} code={"CH69104"} title={"Chemical Technology – II"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"6"} code={"CHL69101"} title={"Mass Transfer Operation Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"6"} code={"CHL69102"} title={"Chemical Reaction Engineering Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"6"} code={"CHL69103"} title={"Chemical Technology Lab – II"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"6"} code={"OE6XXXX"} title={"MOOCS-I"} L={"X"} T={"X"} P={"X"} cred={"3"} url={""} />
                                <SyllabusComp sem={"6"} code={"OE6XXXX"} title={"MOOCS-II"} L={"X"} T={"X"} P={"X"} cred={"3"} url={""} />

                                <SyllabusComp sem={"7"} code={"CH79101"} title={"Industrial Pollution and Control"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"7"} code={"CH79102"} title={"Artificial Intelligence in Chemical Technology"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"7"} code={"CH79103"} title={"Process Modelling and Simulation"} L={"3"} T={"0"} P={"2"} cred={"4"} url={""} />
                                <SyllabusComp sem={"7"} code={"CH79***"} title={"Department Elective – I"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"7"} code={"CH79***"} title={"Department Elective – II"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"7"} code={"CHL79101"} title={"Industrial Pollution and Control Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"7"} code={"CHL79102"} title={"Chemical Process Control and Instrumentation Lab"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />
                                <SyllabusComp sem={"7"} code={"CHL79103"} title={"Industrial Academic Training"} L={"0"} T={"0"} P={"2"} cred={"1"} url={""} />

                                <SyllabusComp sem={"8"} code={"CH89101"} title={"Safety & Hazard in Process Industries"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CH89102"} title={"Introduction to Sustainability"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CH89103"} title={"Biochemical Engineering"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CH89104"} title={"Engineering Economics & Management"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CH89***"} title={"Department Elective – III"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"8"} code={"OE8XXX"} title={"Open Elective – II"} L={"X"} T={"X"} P={"X"} cred={"3"} url={""} />
                                <SyllabusComp sem={"8"} code={"CH89105"} title={"Seminar Presentation & Technical Writing"} L={"0"} T={"0"} P={"4"} cred={"2"} url={""} />
                                <SyllabusComp sem={"8"} code={"CH89106"} title={"B. Tech. Major Project"} L={"0"} T={"0"} P={"8"} cred={"4"} url={""} />

                                <SyllabusComp sem={"9"} code={"CH99101"} title={"M. Tech. Project (To continue in 10th Sem)"} L={"0"} T={"0"} P={"32"} cred={"16"} url={""} />
                                <SyllabusComp sem={"9"} code={"CH99102"} title={"Comprehensive Viva"} L={"2"} T={"0"} P={"0"} cred={"2"} url={""} />

                                <SyllabusComp sem={"10"} code={"CH109101"} title={"M. Tech Project & Dissertation"} L={"0"} T={"0"} P={"38"} cred={"19"} url={""} />

                                <SyllabusComp sem={"El-1"} code={"CHDE101"} title={"Advanced Polymer Processing Technologies"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"El-1"} code={"CHDE102"} title={"Thermal & Catalytic Processes in Petroleum Refining"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"El-1"} code={"CHDE103"} title={"Petroleum Refining Technology and Petrochemicals"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />

                                <SyllabusComp sem={"El-2"} code={"CHDE201"} title={"Solar Energy Engineering"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"El-2"} code={"CHDE202"} title={"Electrochemical Energy Conversion and Storage"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"El-2"} code={"CHDE203"} title={"Hydrogen and Bio Energy"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />

                                <SyllabusComp sem={"El-3"} code={"CHDE301"} title={"Medicinal Chemistry"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"El-3"} code={"CHDE302"} title={"Drug Delivery Technology"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />
                                <SyllabusComp sem={"El-3"} code={"CHDE303"} title={"Fine Chemicals Production Processes"} L={"3"} T={"0"} P={"0"} cred={"3"} url={""} />




                                {/* add semH={true} wherever you want to write semester in bold */}


                            </div>
                            <div className="my-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-base text-gray-700">
                                    Click the link below to view or download the full syllabus for all semesters, including core, foundation, electives, and lab courses.
                                </p>
                                <a
                                    href="https://drive.google.com/file/d/11SKrA-hGK-HwsBWxJLeIWFZyGlgH3mF3/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                                >
                                    View Complete Syllabus
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className={`mb-10 ${(msc == false) ? "hidden" : ""}`}>
                        <div className=" overflow-x-auto mr-10">
                            <div className="border grid grid-cols-10 min-w-[1100px]">
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>

                                <SyllabusComp2
                                    code={""}
                                    title={"Group 1(Polymer, Petroleum & Petrochemical Technology):"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                    url={""}
                                    titleH={true}
                                />
                                <SyllabusComp2
                                    code={""}
                                    title={"Advanced Polymer Processing Technologies"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp2
                                    code={""}
                                    title={"Thermal & Catalytic Processes"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp2
                                    code={""}
                                    title={"Petrochemicals"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyllabusComp2
                                    code={""}
                                    title={"Group 2(Renewable energy Technology):"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                    url={""}
                                    titleH={true}
                                />
                                <SyllabusComp2
                                    code={""}
                                    title={"Solar Energy Engineering"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp2
                                    code={""}
                                    title={"Electrochemical Energy Conversion and Storage"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp2
                                    code={""}
                                    title={"Hydrogen and Bio Energy"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp2
                                    code={""}
                                    title={"Group 3(Pharmaceutical & Fine Chemical Technology):"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                    url={""}
                                    titleH={true}
                                />
                                <SyllabusComp2
                                    code={""}
                                    title={"Medicinal Chemistry"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp2
                                    code={""}
                                    title={"Drug Delivery Technology"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp2
                                    code={""}
                                    title={"Fine Chemicals Production Processes"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />


                            </div>
                        </div>
                    </div>
                    {/* Phd PROGRAM  */}
                    <div className={`mb-10 ${(phd == false) ? "hidden" : ""}`}>
                        <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PhD PROGRAM :-</div>
                        <div className=" overflow-x-auto">
                            <div className="border grid grid-cols-11 min-w-[1100px]">
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                                <SyllabusComp
                                    sem={""}
                                    code={"PDME0101"}
                                    title={"RESEARCH METHODOLOGY"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX01"}
                                    title={"RESEARCH SEMINAR"}
                                    L={""}
                                    T={""}
                                    P={""}
                                    cred={""}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX02"}
                                    title={"SEMINAR AND TECHNICAL REPORT WRITING"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX03"}
                                    title={"COMPREHENSIVE VIVA"}
                                    L={""}
                                    T={""}
                                    P={""}
                                    cred={""}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX04"}
                                    title={"SPECTROSCOPIC METHODS LABORATORY"}
                                    L={"0"}
                                    T={"0"}
                                    P={"4"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX05"}
                                    title={"COORDINATION CHEMISTRY"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX06"}
                                    title={"ART IN ORGANIC SYNTHESIS"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX07"}
                                    title={"CHEMISTRY OF NATURAL PRODUCTS"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX08"}
                                    title={"PLASMONIC NANOMATERIALS: PROPERTIES & APPLICATION"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX09"}
                                    title={"PHOTOPHYSICS"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX10"}
                                    title={"BIOPHYSICAL CHEMISTRY"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX11"}
                                    title={"SUPRAMOLECULAR CHEMISTRY"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX12"}
                                    title={"CHEMISTRY OF HETEROCYCLIC COMPOUNDS"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX13"}
                                    title={"ADVANCED QUANTUM MECHANICS"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX14"}
                                    title={"MEDICINAL CHEMISTRY"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"PDCHXX15"}
                                    title={"SYNTHETIC & PURIFICATION METHODS LABORATORY"}
                                    L={"3"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    sem={""}
                                    code={"CH109101"}
                                    title={"M. Tech Project & Dissertation"}
                                    L={"0"}
                                    T={"0"}
                                    P={"40"}
                                    cred={"20"}
                                    url={""}
                                />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}




export default Page