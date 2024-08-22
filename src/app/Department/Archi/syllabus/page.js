"use client"

import BackDepartment from "../../../components/department/BackDepartment";
import { useState } from "react";



function SyallbusComp({ dep, sem, code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{dep}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{sem}</div>
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
        <div className="flex flex-col mt-8 lg:ml-10">
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
    const [ug, setUg] = useState(true);
    const [pg, setPg] = useState(false);
    return (
        <div className=" flex flex-col p-5">
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Architecture
                    </p>
                </div>
                <div>
                    <BackDepartment navigate={'/Department/Archi'}/>
                </div>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div>
                    <ActComp
                        content={['B.Arch All Semester course structure',
                            'M.Arch.(Sustainable Architecture) Syllabus',
                            'MURP Syllabus'
                        ]}
                    />
                </div>
                <div className="mt-6">
                    <div className="mb-10 flex space-x-1 max-sm:text-[14px]">
                        <button onClick={() => {
                            setUg(true);
                            setPg(false);
                        }} className={`border border-black rounded ${(ug) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Course</button>
                        <button onClick={() => {
                            setUg(false);
                            setPg(true);
                        }} className={`border border-black rounded ${(pg) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PG (M.Tech/MURP) Courses</button>
                    </div>
                    {/* UG PROGRAM */}
                    <div className={`mb-10 ${(ug == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">UG Courses :-</div>
                        <div className=" overflow-x-auto mr-10">
                            <div className="border grid grid-cols-12 min-w-[1100px]">
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                                <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                                <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                                <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"PARICHAY"}
                                    L={"0"} T={"0"} P={"1"}
                                    cred={"0"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"English Literature"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/HS101.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"Enginlring Mathematics"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/MA101.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"Introduction to computing"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/CS101.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"Computing Lab"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/CS102.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"Workshop Practice"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/ME102.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"Basic Design 1"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR101.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"Architectural Graphics 1"}
                                    L={"1"} T={"0"} P={"6"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR102.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"History of Art,Architectural & Culture"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR103.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Communication Skills Development & Technical Writing"}
                                    L={"0"} T={"1"} P={"3"}
                                    cred={"2"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/HS102.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Enginlring Mechanics"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/CE101.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Science Society and Ethical Values"}
                                    L={"1"} T={"1"} P={"0"}
                                    cred={"2"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/HS105.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Basic Design II"}
                                    L={"1"} T={"1"} P={"6"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR111.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Architectural Graphics II"}
                                    L={"1"} T={"0"} P={"6"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR112.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Architectural workshop"}
                                    L={"0"} T={"0"} P={"4"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR113.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"History of Architecture-I"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR114.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Principal of Architecture"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR115.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Seminar/Educational Tour/NASA/Zonasa-I"}
                                    L={"0"} T={"0"} P={"0"}
                                    cred={"0"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR119.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"E\"dept\"-II NSS"}
                                    L={"0"} T={"0"} P={"1"}
                                    cred={"0"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Architectural Design-I & Field Study"}
                                    L={"3"} T={"0"} P={"6"}
                                    cred={"5"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR121.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Building Construction-I"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR122.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"History of Architecture-II"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR123.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Building Materials(Material Science & Technology)"}
                                    L={"1"} T={"1"} P={"0"}
                                    cred={"2"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR124.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Climatology and Solar Passive Architecture"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR125.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Structure,Form & Architecture"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR127.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Computer Application in Architecture"}
                                    L={"0"} T={"0"} P={"4"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR126.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Grln Technology(Environmental Science)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"E\"dept\"-III NSS"}
                                    L={"0"} T={"0"} P={"1"}
                                    cred={"0"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Architectural Design - II & field study"}
                                    L={"3"} T={"0"} P={"6"}
                                    cred={"5"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR131.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Building Construction - II"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR132.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Contemporary Architecture"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR133.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Building Services(Water Supply and Sanitation)"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR142.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Seminar/Educational Tour/NASA/Zonasa-II"}
                                    L={"0"} T={"0"} P={"1"}
                                    cred={"0"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR149.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Basic Surveying"}
                                    L={"3"} T={"0"} P={"3"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/CE108.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Structural Mechanics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/CE116.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Bio Science"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"E\"dept\"-IV NSS"}
                                    L={"0"} T={"0"} P={"1"}
                                    cred={"0"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Architectural Design - III & Field Study"}
                                    L={"3"} T={"0"} P={"6"}
                                    cred={"5"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR141.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Building Construction - III"}
                                    L={"1"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR143.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Human Settlement & Vernacular Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR144.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Building Services(Illumination,Electrical Services and Acoustics)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR145.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Quantity Survey & Specifications"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR146.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Sociology and Building Economics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/HS106.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Indeterminate Structures"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/CE107.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"E\"dept\"-V NSS"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"0"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Architectural Design - IV & Field Study"}
                                    L={"3"} T={"0"} P={"6"}
                                    cred={"5"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR151.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Building Construction-IV"}
                                    L={"1"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR152.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Housing"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR153.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Departmental Elective-I"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR154.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Building Services (HVAC)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://www.nitp.ac.in/arch/syllabus/%20./archi/ME120.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Building Byelaws and Codes of Practice"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR155.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Concrete Structure"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/CE123.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Enginlring/HSS/Science/department (Elective-1)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/XX1XX.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"E\"dept\"-VI NSS"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"0"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"Architectural Design - V & Field Study"}
                                    L={"3"} T={"0"} P={"6"}
                                    cred={"5"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR161.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"Architectural Detailing"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR162.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"City Planning"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR163.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"Urban Design"}
                                    L={"2"} T={"0"} P={"3"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR164.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"Design of Stll Structure / Concrete str."}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/CE129.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"Enginlring/HSS/Science/Department (elective-2)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Architectural Design - VI & Field Study"}
                                    L={"3"} T={"0"} P={"6"}
                                    cred={"5"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR171.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Working Drawing"}
                                    L={"1"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR172.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Landscape Design & Ecological Architecture"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR173.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Disaster Resistant Architecture & Management"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Departmental Elective-III"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Project Planning & Management"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR175.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Enginlring/HSS/Science/Department (Elective-3)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"E\"dept\"-III NSS"}
                                    L={"0"} T={"0"} P={"0"}
                                    cred={"0"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"9"}
                                    code={""}
                                    title={"Architectural Training"}
                                    L={"0"} T={"0"} P={"60"}
                                    cred={"20"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR192.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"10"}
                                    code={""}
                                    title={"Project (Thesis)"}
                                    L={"0"} T={"0"} P={"60"}
                                    cred={"20"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"10"}
                                    code={""}
                                    title={"Professional Practice,Valuation & Management"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR193.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"10"}
                                    code={""}
                                    title={"Departmental elective-IV"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL I"}
                                    code={""}
                                    title={"Design for Barrier Frl Environment"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR201.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL I"}
                                    code={""}
                                    title={"Building Software lab"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/Ar202.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL I"}
                                    code={""}
                                    title={"Vastushastra"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR203.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL II"}
                                    code={""}
                                    title={"Art In Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR204.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL II"}
                                    code={""}
                                    title={"Architectural Conservation"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR211.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL II"}
                                    code={""}
                                    title={"Sustainable Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR212.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Visual Semantics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/Ar213.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Modular Co-ordination"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/Ar214.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Facility planning and Specialized Building Design"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR215.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Interior Design"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR221.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Intelligent Buildings"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR222.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Building Automation and Management System"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR223.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Behavioral Studies in Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR224.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Ergonomics and Product Design"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR225.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL IV"}
                                    code={""}
                                    title={"Energy Conscious Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR231.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL IV"}
                                    code={""}
                                    title={"Appropriate Building Technology"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR232.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL IV"}
                                    code={""}
                                    title={"Futuristic Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR233.docx"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Marketing skill"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/arch/syllabus/AR234.docx"}
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
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={""}
                                    title={"MURP Semester-I"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR601"}
                                    title={"Planning Principles & Techniques"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR602"}
                                    title={"Infrastructure Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR605"}
                                    title={"Traffic and Transportation Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"MA6xx/AR6ww"}
                                    title={"Elective-I"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR6xx"}
                                    title={"Elective-II"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR691"}
                                    title={"Urban & Regional Planning Workshop-I"}
                                    L={"0"} T={"0"} P={"6"}
                                    cred={"4"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={""}
                                    title={"MURP Semester-II"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR604"}
                                    title={"Urban & Regional Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR648"}
                                    title={"Planning Legislation and Professional Practice"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR608"}
                                    title={"Development Management and Finance"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR6YY"}
                                    title={"Elective-III"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR6zz"}
                                    title={"Elective-IV"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR692"}
                                    title={"Urban and Planning Workshop-II"}
                                    L={"0"} T={"0"} P={"6"}
                                    cred={"4"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR693"}
                                    title={"Seminar"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"2"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"3"}
                                    code={""}
                                    title={"MURP Semester-III"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"3"}
                                    code={"AR694"}
                                    title={"Seminar and Comprehensive Viva-I"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"2"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"3"}
                                    code={"ME701"}
                                    title={"Research Methodology"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"3"}
                                    code={"AR695"}
                                    title={"Dissertation (to be continued in 4th Sem)"}
                                    L={"0"} T={"0"} P={"12"}
                                    cred={"8"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"4"}
                                    code={""}
                                    title={"MURP Semester-IV"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"4"}
                                    code={"AR696"}
                                    title={"Seminar and Comprehensive Viva-II"}
                                    L={"3"} T={"0"} P={"3"}
                                    cred={"2"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"4"}
                                    code={"AR697"}
                                    title={"Dissertation"}
                                    L={"0"} T={"0"} P={"15"}
                                    cred={"10"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={""}
                                    title={"Elective-I (WW)"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"MA603"}
                                    title={"Statics and Computer Programming"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"MA604"}
                                    title={"Probability and Statics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"MA605"}
                                    title={"Linear Programming"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR641"}
                                    title={"Demography and Quantitative Techniques"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={""}
                                    title={"Elective-II (XX)"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR644"}
                                    title={"Settlement System Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR648"}
                                    title={"Rural Area Planning and Management"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR650"}
                                    title={"Regional Analysis and Programming"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR651"}
                                    title={"Urban Design and Landscape Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={""}
                                    title={"Elective-III (YY)"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR649"}
                                    title={"City and Metropolitan Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR652"}
                                    title={"Housing and Community Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR653"}
                                    title={"Heritage and Urban Conservation"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={""}
                                    title={"Elective-IV (ZZ)"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR654"}
                                    title={"Sustainable Development"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"1"}
                                    code={"AR655"}
                                    title={"Remote Sensing and GIS in Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={"2"}
                                    code={"AR656"}
                                    title={"Resilient Urban Planning"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyallbusComp
                                    dep={""}
                                    sem={""}
                                    code={""}
                                    title={"Audit Course"}
                                    L={""} T={""} P={""}
                                    cred={""}
                                />
                                <SyallbusComp
                                    dep={"MURP"}
                                    sem={""}
                                    code={""}
                                    title={"Refer notes at**"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
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