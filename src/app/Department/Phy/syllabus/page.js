"use client"

import BackDepartment from "../../../components/department/BackDepartment"

import { useState } from 'react';

function SyllabusComp({ dept, sem, code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{dept}</div>
            <div className="col-span-1 border border-black flex flex-col  pl-2 py-2"><p className='w-full overflow-auto'>{sem}</p></div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <a href={url} className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer">{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}
function ActComp({ content }) {
    return (
        <div className="flex flex-col mt-8 lg:ml-10 text-sm lg:text-base text-black">
            <ul>
                {content.map((points, i) => {
                    return (
                        <li key={i} className="list-disc ml-4 md:text-lg
                        pb-2">
                            {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Page() {
    const [msc, setMsc] = useState(true);
    const [pg, setPg] = useState(false);
    const [dual, setdual] = useState(false);
    const [phd, setphd] = useState(false);
    return (
        <div className=" flex flex-col p-5 text-black">
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Physics
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Phy"}/>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div>
                    <ActComp
                        content={['Course structure for of Minor courses floated by ECE Dept. for B.Tech. (CSE, EE, CE, ME)',
                            'B.Tech. Detailed syllabus wef 2021-2022 ( As per NEP )',
                            'Detailed syllabus Dual Degree Programme B.Tech-ECE and M.Tech. (Microelectronics & VLSI Design) ( As per NEP )',
                            'M.Tech. (Communication systems) wef 2021-2022 ( As per NEP )',
                            'M.Tech. (Microelectronics & VLSI Design) wef 2021-2022'
                        ]}
                    />
                </div>
                <div className="mt-6">
                    <div className="mb-10 flex space-x-1 max-sm:text-[10px]">
                        <button onClick={() => {
                            setMsc(true);
                            setPg(false);
                            setdual(false);
                            setphd(false);
                        }} className={`border border-black rounded ${(msc) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Int. Msc.</button>
                        <button onClick={() => {
                            setMsc(false);
                            setPg(true);
                            setdual(false);
                            setphd(false);
                        }} className={`border border-black rounded ${(pg) ? "text-white bg-red-900" : "text-red-900"} px-2`}>M.Tech-Nano Technology</button>
                        <button onClick={() => {
                            setMsc(false);
                            setPg(false);
                            setdual(false);
                            setphd(true);
                        }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Int. PhD</button>
                        <button onClick={() => {
                            setMsc(false);
                            setPg(false);
                            setdual(true);
                            setphd(false);
                        }} className={`border border-black rounded ${(dual) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual Degree</button>
                    </div>
                    {/* Msc PROGRAM */}
                    <div className={`mb-10 ${(msc == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Int. Msc. PROGRAM :-</div>
                        <div className=" overflow-x-auto">
                            <div className="border grid grid-cols-12 min-w-[1100px]">
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1HS101"}
                                    title={"English Literature"}
                                    L={"2"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"MA101"}
                                    title={"Engineering Mathematics - I"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1PH101"}
                                    title={"Engineering Physics TH"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1PH102"}
                                    title={"Engineering Physics Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1CS101"}
                                    title={"Introduction to Computing"}
                                    L={"2"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1CS102"}
                                    title={"Computing Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1EE101"}
                                    title={"Elements of Electrical Engg"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1EE102"}
                                    title={"Elements of Electrical Engg Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1ME102"}
                                    title={"Workshop Practice"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2HS102"}
                                    title={"Communication Skill Development & Technical Writing"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2MA102"}
                                    title={"Engineering Mathematics -II"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2CH101"}
                                    title={"Chemical Science"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2CH102"}
                                    title={"Chemical Science Lab"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2HS105"}
                                    title={"Science, Society & Ethical Values"}
                                    L={"1"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2CE101"}
                                    title={"Engineering Mechanics"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2EC101"}
                                    title={"Elements of Electronics Engg"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2EC102"}
                                    title={"Elements of Electronics Engg Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"2EC101"}
                                    title={"Engineering Graphics"}
                                    L={"1"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"3MA111"}
                                    title={"Complex Variable and Partial Differential Equation: Mathematics-III"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"CH106"}
                                    title={"Physical Chemistry I: Physical Properties"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"3CH107"}
                                    title={"Physical Chemistry Lab I"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"PH104"}
                                    title={"Mechanics, Waves & Oscillation, Continuum Mechanics"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"3PH105"}
                                    title={"Computational Physics-I"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"3PH106"}
                                    title={"Computational Physics LAB-I"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"3PH107"}
                                    title={"Fundamentals of Bio-Science"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"3PH108"}
                                    title={"Physics Lab-II"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"4"}
                                    code={"4MA115"}
                                    title={"Numerical Technique, Statistical Methods: Mathematics -IV"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"4"}
                                    code={"4MA116"}
                                    title={"Mathematics- IV Computing LAB"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"4"}
                                    code={"4CH104"}
                                    title={"Green Technology (Environmental Science)"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"4"}
                                    code={"4PH164"}
                                    title={"Electricity & Magnetism"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"4"}
                                    code={"4CH110"}
                                    title={"Quantum Mechanics-I"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"4"}
                                    code={"4PH111"}
                                    title={"Thermodynamics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"4"}
                                    code={"4PH114"}
                                    title={"Advanced Physics Lab-II"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"5"}
                                    code={"5PH115"}
                                    title={"Chemical Mechanics"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"5"}
                                    code={"5PH116"}
                                    title={"Quantum Mechanics-II"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"5"}
                                    code={"5PH117"}
                                    title={"Mathematical Methods In Physics-I"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"5"}
                                    code={"5PH118"}
                                    title={"Material Science"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"5"}
                                    code={"5DD1Coursecode"}
                                    title={"Open Elective"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"5"}
                                    code={"5PH120"}
                                    title={"Advanced Physics Lab-II"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"6"}
                                    code={"6PH121"}
                                    title={"Statistical Mathematics"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"6"}
                                    code={"6PH122"}
                                    title={"Mathematical Methods Physics II"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"6"}
                                    code={"6PH123"}
                                    title={"Modern Optics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"6"}
                                    code={"6PH124"}
                                    title={"Electronics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"6"}
                                    code={"6PH125"}
                                    title={"Condensed Matter Physics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"6"}
                                    code={"6CH126"}
                                    title={"Advanced Physics Lab-III"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"6"}
                                    code={"6PH128"}
                                    title={"Physics Lab IV (Electronics)"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"6"}
                                    code={"6GE103"}
                                    title={"Industrial Interaction and Soft Skill Development"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"0"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"7"}
                                    code={"7PH131"}
                                    title={"Computational Physics-II"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"7"}
                                    code={"7PH132"}
                                    title={"Computational Physics Lab-II"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"7"}
                                    code={"7PH133"}
                                    title={"Nuclear Physics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"7"}
                                    code={"7PH134"}
                                    title={"Atomic & Molecular Spectroscopy"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"7"}
                                    code={"7PH135"}
                                    title={"Electrodynamics"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"7"}
                                    code={"7PH1Coursecode1Coursecode"}
                                    title={"Elective-I"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"7"}
                                    code={"7PH38"}
                                    title={"Advanced Physics Lab-V"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"7"}
                                    code={"7MA190"}
                                    title={"Industrial Training (4 to 6 weeks after 6th Sem)"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"8"}
                                    code={"8PH141"}
                                    title={"Particle Physics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"8"}
                                    code={"8PH142"}
                                    title={"Modern Analytical Techniques"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"8"}
                                    code={"8PH143"}
                                    title={"Material Synthesis"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"8"}
                                    code={"8PH144"}
                                    title={"Material Synthesis Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"8"}
                                    code={"8PH146"}
                                    title={"Modelling & Simulation Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"8"}
                                    code={"PH190"}
                                    title={"Seminar and Comprehensive Viva-I"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"8"}
                                    code={"8PH149"}
                                    title={"Advanced Physics Lab-VI"}
                                    L={"0"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"8"}
                                    code={"8PH190"}
                                    title={"Minor Project"}
                                    L={"0"}
                                    T={"0"}
                                    P={"15"}
                                    cred={"5"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"9"}
                                    code={"9PH191"}
                                    title={"Seminar and Comprehensive Viva-II"}
                                    L={"0"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"9"}
                                    code={"9PH192"}
                                    title={"Thesis (To be contd...)"}
                                    L={"0"}
                                    T={"0"}
                                    P={"15"}
                                    cred={"5"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"10"}
                                    code={"10PH193"}
                                    title={"Seminar and Comprehensive viva-III"}
                                    L={"0"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"10"}
                                    code={"10PH194"}
                                    title={"Thesis"}
                                    L={"0"}
                                    T={"0"}
                                    P={"54"}
                                    cred={"18"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Semester Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Grand Total"}
                                    code={""}
                                    title={"-"}
                                    L={"-"}
                                    T={"-"}
                                    P={"-"}
                                    cred={"-"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH151"}
                                    title={"Smart Material"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH152"}
                                    title={"Nano Technology"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH153"}
                                    title={"Synthesis & Characteristic of Functional Material"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH154"}
                                    title={"Material Characteristic Techniques"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH155"}
                                    title={"Ion Beam Patterning & Nano-bio Technology"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH156"}
                                    title={"Quantum Information Computation & Cryptography"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH157"}
                                    title={"Physics of the Universe"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH158"}
                                    title={"General Relativity and Black Hole Physics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH159"}
                                    title={"Quantum Field Theory and its Applications"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH160"}
                                    title={"Advanced Statistical Mechanics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH161"}
                                    title={"Membrane Separations: Principles, Design & Application"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"EL"}
                                    code={"PH162"}
                                    title={"Electrochemical Energy Conversion and Storage"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />





                            </div>
                        </div>
                    </div>
                    {/* PG PROGRAM  */}
                    <div className={`mb-10 ${(pg == false) ? "hidden" : ""}`}>
                        <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PG PROGRAM :-</div>
                        <div className=" overflow-x-auto">
                            <div className="border grid grid-cols-12 min-w-[1100px]">
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST"}
                                    code={""}
                                    title={""}
                                    L={""} T={""} P={""}
                                    cred={""}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST"}
                                    code={"PH601"}
                                    title={"Applied Solid State Physics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST"}
                                    code={"PH602"}
                                    title={"Introduction to Nano Technology"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST"}
                                    code={"PH603"}
                                    title={"Introduction to Nano Photonic & Plastics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST"}
                                    code={"PH603"}
                                    title={"Semiconductor Devices and IC Technology"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST"}
                                    code={"PH604"}
                                    title={"Nano Mechanics & Micro Mechanics for MEMS Technology"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST"}
                                    code={"PH605"}
                                    title={"Nano Material Synthesis & Characteristic Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST"}
                                    code={"PH6XX"}
                                    title={"Open Elective - I"}
                                    L={"0"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"4"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NST Semester-II"}
                                    code={""}
                                    title={""}
                                    L={""} T={""} P={""}
                                    cred={""}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"PH610"}
                                    title={"Micro & Nano Characterization Techniques"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"PH612"}
                                    title={"Advanced MEMS Packing"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"PH611"}
                                    title={"Material Synthesis: Quantum Dots to Bulk Crystals"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"PHxx"}
                                    title={"Elective-I"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"xxPG"}
                                    title={"Elective-II"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"HS6XX"}
                                    title={"Ethical Values & Knowledge Transfer"}
                                    L={"0"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"PH615"}
                                    title={"Device Fabrication Lab Modules"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"PH616"}
                                    title={"Modulating Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Computational Mathematics Semester-III"}
                                    code={""}
                                    title={""}
                                    L={""} T={""} P={""}
                                    cred={""}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"xxPG"}
                                    title={"Seminar & Comprehensive Viva"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"xxPG"}
                                    title={"Dissertation"}
                                    L={"0"}
                                    T={"0"}
                                    P={"12"}
                                    cred={"8"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"Computational Mathematics Semester-IV"}
                                    code={""}
                                    title={""}
                                    L={""} T={""} P={""}
                                    cred={""}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"xxPG"}
                                    title={"Seminar & Comprehensive Viva"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"xxPG"}
                                    title={"Dissertation"}
                                    L={"0"}
                                    T={"0"}
                                    P={"15"}
                                    cred={"10"}
                                    url={""}
                                />



                            </div>
                        </div>
                    </div>
                    {/* PhD  */}
                    <div className={`mb-10 ${(phd == false) ? "hidden" : ""}`}>
                        <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">M.Tech PROGRAM :-</div>
                        <div className=" overflow-x-auto">
                            <div className="border grid grid-cols-12 min-w-[1100px]">
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NANOSCIENCE & TECHNOLOGY"}
                                    code={""}
                                    title={""}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"xxPG"}
                                    title={"Core Subject-I"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"xxPG"}
                                    title={"Core Subject-II"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"xxPG"}
                                    title={"Specialization Elective-I"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"xxPG"}
                                    title={"Specialization Elective-II"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1CS101"}
                                    title={"Specialization Elective-VI"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"1"}
                                    code={"1CS102"}
                                    title={"Advance Engineering Lab-I"}
                                    L={"0"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NANOSCIENCE & TECHNOLOGY Semester-II"}
                                    code={""}
                                    title={""}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"xxPG"}
                                    title={"Core Subject-III"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"xxPG"}
                                    title={"Specialization Elective-III"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"xxPG"}
                                    title={"Specialization Elective-IV"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"xxPG"}
                                    title={"Specialization Elective-V"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"xxPG"}
                                    title={"Specialization Elective-V"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"xx692"}
                                    title={"Advanced Engineering Lab-II"}
                                    L={"0"}
                                    T={"0"}
                                    P={"6"}
                                    cred={"4"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"2"}
                                    code={"xx694"}
                                    title={"Seminar"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NANOSCIENCE & TECHNOLOGY Semester-III"}
                                    code={""}
                                    title={""}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"xxPG"}
                                    title={"Seminar & Comprehensive Viva"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"xxPG"}
                                    title={"Dissertation"}
                                    L={"0"}
                                    T={"0"}
                                    P={"12"}
                                    cred={"8"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"NANOSCIENCE & TECHNOLOGY Semester-IV"}
                                    code={""}
                                    title={""}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"xxPG"}
                                    title={"Seminar & Comprehensive Viva"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"Physics"}
                                    sem={"3"}
                                    code={"xxPG"}
                                    title={"Dissertation"}
                                    L={"0"}
                                    T={"0"}
                                    P={"15"}
                                    cred={"10"}
                                    url={""}
                                />

                            </div>
                        </div>
                    </div>
                    {/* dual degree */}
                    <div className={`mb-10 ${(dual == false) ? "hidden" : ""}`}>
                        <div className=" overflow-x-auto">
                            <p>
                                Material Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Page