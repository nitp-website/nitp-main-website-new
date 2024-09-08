"use client"

import BackDepartment from "../../../components/department/BackDepartment";
import { useState } from "react"
export default function Page() {
    const [ug, setUg] = useState(true);
    const [ug2021, setUg2021] = useState(false);
    const [pg, setPg] = useState(false);
    const [dualCyber, setDualCyber] = useState(false);
    const [phd, setPhd] = useState(false);
    const [ug2022, setUg2022] = useState(false);
    const [dualData, setDualData] = useState(false);
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col mb-3">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        COMPUTER SCIENCE ENGINEERING
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/CSE'}/>
                </div>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10 flex space-x-1 overflow-x-auto ">
                    <div className="min-w-[800px] flex space-x-1 text-sm lg:text-base">
                        <button onClick={() => {
                            setUg2021(false);
                            setPg(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(true)
                        }} className={`border border-black rounded ${(ug) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Courses</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setPg(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(true);
                            setUg(false)
                        }} className={`border border-black rounded ${(ug2022) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Courses-2022 Onwards</button>
                        <button onClick={() => {
                            setUg2021(true);
                            setPg(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false)
                        }} className={`border border-black rounded ${(ug2021) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Course-2021</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setPg(true);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false);
                        }} className={`border border-black rounded ${(pg) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PG (M.Tech/MURP) Course</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setDualCyber(false);
                            setPg(false);
                            setDualData(false);
                            setPhd(true);
                            setUg2022(false);
                            setUg(false);
                        }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PhD Course</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setPg(false);
                            setDualCyber(true);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false);
                        }} className={`border border-black rounded ${(dualCyber) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual Degree (Cyber Security)</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setPg(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(true);
                            setUg2022(false);
                            setUg(false);
                        }} className={`border border-black rounded ${(dualData) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual Degree (Data Science and Engineering)</button>
                    </div>
                </div>
                <div className={`mb-10 ${(ug == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">UG PROGRAM</div>
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
                                dep={"CSUG"}
                                sem={"1"}
                                code={"HS1401"}
                                title={"Science, Society and Ethical values"}
                                L={"2"}
                                T={"1"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"MA1401"}
                                title={"Engineering Mathematics I"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CH1401"}
                                title={"Engineering Chemistry"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CHL1401"}
                                title={"Chemistry Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"EC1401"}
                                title={"Elements of Electronics Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"ECL1401"}
                                title={"EC Workshop"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CS1401"}
                                title={"Introduction to computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CSL1401"}
                                title={"Computing lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"MEL1401"}
                                title={"Engineering Graphics Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"EAA1401"}
                                title={"EAA-Sports/Innovative project"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"HS2401"}
                                title={"Communicative English"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"HSL2401"}
                                title={"Language lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"MA2401"}
                                title={"Engineering Mathematics II"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"PH2401"}
                                title={"Engineering Physics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"PHL2401"}
                                title={"Physics Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"EE2401"}
                                title={"Elements of Electrical Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"EEL2401"}
                                title={"EE Workshop"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"CS2401"}
                                title={"Object Oriented Programming"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"CSL2401"}
                                title={"Object Oriented Programming Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"MEL2401"}
                                title={"Workshop practice"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"EAA2401"}
                                title={"EAA-Swachha Bharat Mission (SBM)"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS3401"}
                                title={"Data Structures"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS3402"}
                                title={"Discrete Mathematics and Graph Theory"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS3403"}
                                title={"Web Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"EC34XX"}
                                title={"Digital Logic and Computer Organization"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"MA34XX"}
                                title={"Probability & Statistics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CSL3401"}
                                title={"Data Structures Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CSL3403"}
                                title={"Web Technology Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"ECL34XX"}
                                title={"Digital Logic and Computer Organization Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CE34XX"}
                                title={"Environmental Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44XX"}
                                title={"Professional Elective I"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS4401"}
                                title={"Computer Architecture"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS4402"}
                                title={"Formal Languages and Automata Theory"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS4403"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS4404"}
                                title={"Operating Systems"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CSL4403"}
                                title={"Design & Analysis of Algorithms Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CSL4404"}
                                title={"Operating System Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS5401"}
                                title={"Database Management Systems"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS5402"}
                                title={"Artificial Intelligence"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS5403"}
                                title={"Computer Networks"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"XX54XX"}
                                title={"Open Elective IV/MOOCS"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54XX"}
                                title={"Professional Elective II"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS5404"}
                                title={"Compiler Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CSL5401"}
                                title={"Database Management Systems Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CSL5402"}
                                title={"Artificial Intelligence Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CSL5403"}
                                title={"Computer Networks Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CSL5404"}
                                title={"Compiler Design Lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS6401"}
                                title={"Computer Graphics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CSL6401"}
                                title={"Computer Graphics lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"XX64XX"}
                                title={"Open Elective II/MOOCS"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS6402"}
                                title={"Software Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CSL6402"}
                                title={"Software Engineering lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS6403"}
                                title={"Data Mining And Warehousing"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS6404"}
                                title={"Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS64XX"}
                                title={"Professional Elective III"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS6490"}
                                title={"Minor Project I"}
                                L={"-"}
                                T={"-"}
                                P={"-"}
                                cred={"6"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74XX"}
                                title={"Professional Elective IV"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS7401"}
                                title={"IOT"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS7401"}
                                title={"IOT lab"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74XX"}
                                title={"Professional Elective V"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"XX74XX"}
                                title={"Open Elective III/MOOCS"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS7491"}
                                title={"Minor Project II"}
                                L={"-"}
                                T={"-"}
                                P={"-"}
                                cred={"6"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS7492"}
                                title={"Industrial Training (4 to 6 weeks after 6th Sem)"}
                                L={"0"}
                                T={"0"}
                                P={"0"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS7493"}
                                title={"Seminar and Technical Writing"}
                                L={"-"}
                                T={"-"}
                                P={"-"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"8"}
                                code={"CS84XX"}
                                title={"Professional Elective VI"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"8"}
                                code={"CSL8494"}
                                title={"Major Project & Comprehensive Viva"}
                                L={"-"}
                                T={"-"}
                                P={"-"}
                                cred={"12"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX430"}
                                title={"Semantic Web"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX431"}
                                title={"Natural Language Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX432"}
                                title={"Computational Intelligence"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX433"}
                                title={"Pattern Recognition and Machine Learning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX434"}
                                title={"Mobile and Web Applications"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX435"}
                                title={"E-Governance"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX436"}
                                title={"Cryptography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX437"}
                                title={"Distributed Database Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX438"}
                                title={"Computational Geometry"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX439"}
                                title={"Machine Learning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}

                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX440"}
                                title={"Operations Research"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX441"}
                                title={"Digital Image Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX442"}
                                title={"Intrusion Detection"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX443"}
                                title={"Computational Biology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX444"}
                                title={"Real Time Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX445"}
                                title={"Distributed Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX446"}
                                title={"Advanced Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX447"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX448"}
                                title={"Text Mining"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX449"}
                                title={"Data Science"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX450"}
                                title={"Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX451"}
                                title={"Big Data"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX452"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX453"}
                                title={"Network Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX454"}
                                title={"Distributed Event Based Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX455"}
                                title={"Approximation Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX456"}
                                title={"Advanced Data Mining"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX457"}
                                title={"Cloud Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX458"}
                                title={"Wireless Sensor Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX459"}
                                title={"Web Mining"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX460"}
                                title={"Object Oriented Systems Development"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX461"}
                                title={"Wireless Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX462"}
                                title={"Mobile Communication"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX463"}
                                title={"Introduction to Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX464"}
                                title={"Introduction to Communication System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX465"}
                                title={"Introduction to Control System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX466"}
                                title={"Random Processes and Linear Algebra"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX467"}
                                title={"Microprocesor and Microcontrollers"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX468"}
                                title={"Introduction to Robotics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX469"}
                                title={"Virtual Reality"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX470"}
                                title={"Software Testing and Debugging"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX471"}
                                title={"Data Compression"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX472"}
                                title={"Ontology Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX473"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX474"}
                                title={"Biometrics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX475"}
                                title={"Data Analytics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX476"}
                                title={"Numerical Analysis"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"HSX413"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"3CS105"}
                                title={"Object Oriented Methodology"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CS171"}
                                title={"Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CS103"}
                                title={"Dara Structures and Algorithms"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />

                        </div>
                    </div>
                </div>
                {/* dual degree data science */}
                <div className={`mb-10 ${(dualData == false) ? "hidden" : ""}`}>
                <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">  DUAL DEGREE PROGRAM(DATA):-</div>
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
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS14102"}
                                title={"Programming in C"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MA14102"}
                                title={"Engineering Mathematics I"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CH14101"}
                                title={"Engineering Chemistry"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"EC14102"}
                                title={"Digital Design"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS14106"}
                                title={"Information Technology Workshop"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"EAA14102"}
                                title={"EAA -II Swachha Bharat Mission (SBM)"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS24107"}
                                title={"Web Technology"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"HS24101"}
                                title={"Communicative English"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"PH24101"}
                                title={"Engineering Physics"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS24108"}
                                title={"Computer Organization"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MA24102"}
                                title={"Engineering Mathematics II"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"EAA24101"}
                                title={"EAA - I Sports/Innovative Project/NCC/NSS"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34104"}
                                title={"Data Structures"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34105"}
                                title={"Object Oriented Programming"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34109"}
                                title={"Database Management Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34110"}
                                title={"Discrete Mathematics and Graph Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34111"}
                                title={"Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"HS34151"}
                                title={"Social and Professional Ethics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44112"}
                                title={"Artificial Intelligence"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44113"}
                                title={"Computer Networks"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44114"}
                                title={"Automata Theory and compiler design"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44115"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"OP44XXX"}
                                title={"Open Electives-1"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54116"}
                                title={"Software Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54117"}
                                title={"Internet of Things"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54118"}
                                title={"Machine Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54119"}
                                title={"Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54XXX"}
                                title={"Dept Elective - I"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"OP54XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS64120"}
                                title={"Data Mining"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS64121"}
                                title={"Cloud Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS641XX"}
                                title={"Dept. Elective - II"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"OP64XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS64123"}
                                title={"Project"}
                                L={"0"}
                                T={"0"}
                                P={"12"}
                                cred={"6"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74135"}
                                title={"Applied Cryptography"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74136"}
                                title={"Network Security System"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"Dept. Elective-I"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"Dept. Elective-II"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"OP74XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74137"}
                                title={"Technical Seminar and Report Writing"}
                                L={"0"}
                                T={"0"}
                                P={"4"}
                                cred={"2"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84138"}
                                title={"Intrusion Detection and Prevention"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84139"}
                                title={"Advanced Internet of Things (IoT)"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84140"}
                                title={"Cyber Forensics"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84XXX"}
                                title={"Dept. Elective-III"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84XXX"}
                                title={"Dept. Elective-IV"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"9"}
                                code={"CS94141"}
                                title={"Industrial Training / Project (to be continued in 10th Sem)"}
                                L={"0"}
                                T={"0"}
                                P={"20"}
                                cred={"10"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"10"}
                                code={"CS104142"}
                                title={"Industrial Training / Project"}
                                L={"0"}
                                T={"0"}
                                P={"24"}
                                cred={"12"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4145"}
                                title={"Distributed Database Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4146"}
                                title={"Operations Research"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4147"}
                                title={"Digital Image Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4148"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4149"}
                                title={"Real Time Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4150"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4151"}
                                title={"Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4152"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4153"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4154"}
                                title={"Object Oriented Systems Development"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4155"}
                                title={"Computer Graphics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4156"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4157"}
                                title={"Microprocesor and Microcontrollers"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4158"}
                                title={"Distributed Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4159"}
                                title={"Virtual Reality"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4160"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4161"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4162"}
                                title={"Biometrics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4163"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4164"}
                                title={"Computer System Parallelism"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4165"}
                                title={"Advanced Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4166"}
                                title={"File System Forensic"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4167"}
                                title={"Distributed Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4201"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4202"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4203"}
                                title={"Mathematical Foundations for Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4204"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4205"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4206"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4207"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4208"}
                                title={"Multimedia System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4209"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4210"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4211"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4212"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4213"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4214"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4215"}
                                title={"Cyber laws and rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4216"}
                                title={"Digital Watermarking and Steganography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4217"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4218"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4219"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4220"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4221"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4222"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4223"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4224"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4225"}
                                title={"Pattern Recognition Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4226"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4227"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"HSXXXXX"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />

                        </div>
                    </div>
                </div>
                <div className={`mb-10 ${(ug2021 == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">UG PROGRAM 2021 :-</div>
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
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CS14103"}
                                title={"Web Technology"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"MATH"}
                                sem={"1"}
                                code={"MA14102"}
                                title={"Engineering Mathematics"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CHEM"}
                                sem={"1"}
                                code={"CH14101"}
                                title={"Engineering Chemistry"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"ECE"}
                                sem={"1"}
                                code={"EC14102"}
                                title={"Digital Design"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CS14102"}
                                title={"Programming in C"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"EAA14102"}
                                title={"EAA -II Swachha Bharat Mission (SBM)"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={"1"}
                                code={""}
                                title={""}
                                L={"total"}
                                T={""}
                                P={""}
                                cred={"20"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"CS24102"}
                                title={"Information Technology Workshop Web"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"HSS"}
                                sem={"2"}
                                code={"HS24101"}
                                title={"Communicative English"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"PHY"}
                                sem={"2"}
                                code={"PH24101"}
                                title={"Engineering Physics"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"CS24108"}
                                title={"Computer Organization"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"MATH"}
                                sem={"2"}
                                code={"MA241XX"}
                                title={"Engineering Mathematics II"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"SAC"}
                                sem={"2"}
                                code={"EAA24101"}
                                title={"EAA - I Sports/Innovative Project/NCC/NSS"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={"2"}
                                code={""}
                                title={""}
                                L={"Total"}
                                T={""}
                                P={""}
                                cred={"20"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34104"}
                                title={"Data Structures"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34105"}
                                title={"Object Oriented Programming"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34109"}
                                title={"Database Management Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34110"}
                                title={"Discrete Maths and Graph Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34111"}
                                title={"Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"HS34151"}
                                title={"Professional Ethics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={""}
                                L={"Total"}
                                T={""}
                                P={""}
                                cred={"21"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44112"}
                                title={"Artificial Intelligence"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44113"}
                                title={"Computer Networks"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44114"}
                                title={"Automata Theory and compiler design"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44115"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"OP44XXX"}
                                title={"Open Electives-1 /MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={""}
                                L={"Total"}
                                T={""}
                                P={""}
                                cred={"19"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54116"}
                                title={"Software Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54117"}
                                title={"Internet of Things"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54118"}
                                title={"Machine Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54119"}
                                title={"Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54XXX"}
                                title={"Dept Elective -1/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"OP54XXX"}
                                title={"Open Elective - 2 MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={""}
                                L={"Total"}
                                T={""}
                                P={""}
                                cred={"21"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS64120"}
                                title={"Data Mining"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS64121"}
                                title={"Cloud Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS641XX"}
                                title={"Dept. Electives - 2/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"OP64XXX"}
                                title={"Open Elective- 3 / MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS64123"}
                                title={"Project"}
                                L={"0"}
                                T={"0"}
                                P={"12"}
                                cred={"6"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={""}
                                L={"Total"}
                                T={""}
                                P={""}
                                cred={"19"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={"Department Electives"}
                                L={""}
                                T={""}
                                P={""}
                                cred={""}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4131"}
                                title={"Cryptography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4132"}
                                title={"Distributed Database Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4133"}
                                title={"Operations Research"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4134"}
                                title={"Digital Image Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4135"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4136"}
                                title={"Real Time Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4137"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4138"}
                                title={"Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4139"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4140"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4141"}
                                title={"Object Oriented Systems Development"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4142"}
                                title={"Computer Graphics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4143"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4144"}
                                title={"Digital Signal Processing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4145"}
                                title={"Microprocessor and Microcontrollers"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4146"}
                                title={"Distributed Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4147"}
                                title={"Virtual Reality"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"HSXXXXX"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4149"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4150"}
                                title={"Biometrics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={"Open Elective other than CSE Minor(lot)"}
                                L={""}
                                T={""}
                                P={""}
                                cred={""}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CS34104"}
                                title={"Data Structures"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CS44113"}
                                title={"Computer Networks"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CS54117"}
                                title={"Internet of Things"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CSX41XX"}
                                title={"Dept Elective 1/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CSX41XX"}
                                title={"Dept Elective 2/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CSX41XX"}
                                title={"Dept Elective 3/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={""}
                                L={"Total"}
                                T={""}
                                P={""}
                                cred={"21"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={"Open Elective other than CSE Minor(AI)"}
                                L={""}
                                T={""}
                                P={""}
                                cred={""}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CS34104"}
                                title={"Data Structures"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CS44112"}
                                title={"Artificial Intelligence"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CS54118"}
                                title={"Machine Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CSX41XX"}
                                title={"Dept Elective 1/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CSX41XX"}
                                title={"Dept Elective 2/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"XX"}
                                sem={""}
                                code={"CSX41XX"}
                                title={"Dept Elective 3/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={""}
                                title={""}
                                L={"Total"}
                                T={""}
                                P={""}
                                cred={"21"}
                            />
                        </div>
                    </div>
                </div>
                <div className={`mb-10 ${(ug2022 == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">UG PROGRAM 2022:-</div>
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
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CS14102"}
                                title={"Programming in C"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"MA14102"}
                                title={"Engineering Mathematics I"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CH14101"}
                                title={"Engineering Chemistry"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"EC14102"}
                                title={"Digital Design"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"CS14106"}
                                title={"Information Technology Workshop"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"1"}
                                code={"EAA14102"}
                                title={"EAA -II Swachha Bharat Mission (SBM)"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"CS24107"}
                                title={"Web Technology"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"HS24101"}
                                title={"Communicative English"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"PH24101"}
                                title={"Engineering Physics"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"CS24108"}
                                title={"Computer Organization"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"MA24102"}
                                title={"Engineering Mathematics II"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"2"}
                                code={"EAA24101"}
                                title={"EAA - I Sports/Innovative Project/NCC/NSS"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34104"}
                                title={"Data Structures"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34105"}
                                title={"Object Oriented Programming"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34109"}
                                title={"Database Management Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34110"}
                                title={"Discrete Mathematics and Graph Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"CS34111"}
                                title={"Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"3"}
                                code={"HS34151"}
                                title={"Social and Professional Ethics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44112"}
                                title={"Artificial Intelligence"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44113"}
                                title={"Computer Networks"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44114"}
                                title={"Automata Theory and Compiler Design"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"CS44115"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"4"}
                                code={"OP44XXX"}
                                title={"Open Electives-1"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54116"}
                                title={"Software Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54117"}
                                title={"Internet of Things"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54118"}
                                title={"Machine Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54119"}
                                title={"Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"CS54XXX"}
                                title={"Dept Elective - I"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"5"}
                                code={"OP54XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS64120"}
                                title={"Data Mining"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS64121"}
                                title={"Cloud Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS641XX"}
                                title={"Dept. Elective - II"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"OP64XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"CS64123"}
                                title={"Project"}
                                L={"0"}
                                T={"0"}
                                P={"12"}
                                cred={"6"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74144"}
                                title={"Optimization Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"Dept. Elective-I"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"Dept. Elective-II"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"OP74XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74124"}
                                title={"Research Project-I"}
                                L={"X"}
                                T={"X"}
                                P={"12"}
                                cred={"6"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74125"}
                                title={"Research Seminar"}
                                L={"X"}
                                T={"X"}
                                P={"4"}
                                cred={"2"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"8"}
                                code={"CS84126"}
                                title={"Research Project-II*"}
                                L={"0"}
                                T={"0"}
                                P={"40"}
                                cred={"20"}
                            />

                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4145"}
                                title={"Distributed Database Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4146"}
                                title={"Operations Research"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4147"}
                                title={"Digital Image Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4148"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4149"}
                                title={"Real Time Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4150"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4151"}
                                title={"Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4152"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4153"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4154"}
                                title={"Object Oriented Systems Development"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4155"}
                                title={"Computer Graphics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4156"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4157"}
                                title={"Microprocessor and Microcontrollers"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4158"}
                                title={"Distributed Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4159"}
                                title={"Virtual Reality"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4160"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4161"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4162"}
                                title={"Biometrics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4163"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4164"}
                                title={"Computer System Parallelism"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4165"}
                                title={"Advanced Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4166"}
                                title={"File System Forensic"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4167"}
                                title={"Distributed Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4171"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4172"}
                                title={"Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4173"}
                                title={"IOT Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4174"}
                                title={"Nature Inspired Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4175"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4176"}
                                title={"Bioinformatics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4177"}
                                title={"Information Retrieval"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4178"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4179"}
                                title={"Reinforcement Learning"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4180"}
                                title={"Social Networks"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4181"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4182"}
                                title={"Speech Processing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4183"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4184"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4185"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4186"}
                                title={"Time Series Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4187"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4188"}
                                title={"Multimedia Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4189"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4190"}
                                title={"Federated Learning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"HSXXXXX"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4201"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4202"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4203"}
                                title={"Mathematical Foundations for Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4204"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4205"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4206"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4207"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4208"}
                                title={"Multimedia System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4209"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4210"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4211"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4212"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4213"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4214"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4215"}
                                title={"Cyber laws and rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4216"}
                                title={"Digital Watermarking and Steganography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4217"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4218"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4219"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4220"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4221"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4222"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4223"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4224"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4225"}
                                title={"Pattern Recognition Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4226"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"CSX4227"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL"}
                                code={"HSXXXXX"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />



                        </div>
                    </div>
                </div>
                {/* PG PROGRAM  */}
                <div className={`mb-10 ${(pg == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">PG PROGRAM :-</div>
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
                                dep={"CSPG"}
                                sem={"1"}
                                code={"1CS601"}
                                title={"Advanced Data Structure and File systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"1"}
                                code={"1CS602"}
                                title={"Advanced Computer Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"1"}
                                code={"1CS6xx"}
                                title={"Elective-I"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"1"}
                                code={"1CS6xx"}
                                title={"Elective-II"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"1"}
                                code={"CS6xx"}
                                title={"Elective-III"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"1"}
                                code={"1CS603"}
                                title={"Advanced Computer Lab-I"}
                                L={"0"}
                                T={"0"}
                                P={"6"}
                                cred={"4"}
                            />


                            <SyllabusComp
                                dep={"M.Tech(CSE) Semester -II"}
                                sem={""}
                                code={""}
                                title={""}
                                L={""}
                                T={""}
                                P={""}
                                cred={""}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"2"}
                                code={"2CS604"}
                                title={"Advanced Database Management System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"2"}
                                code={"2CS6xx"}
                                title={"Elective-IV"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"2"}
                                code={"2CS6xx"}
                                title={"Elective-V"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"2"}
                                code={"2CS6xx"}
                                title={"Elective-VI"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"2"}
                                code={"2CS6xx"}
                                title={"Elective - VII"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"2"}
                                code={"2CS605"}
                                title={"Advanced Computer Lab-II"}
                                L={"0"}
                                T={"0"}
                                P={"6"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"2"}
                                code={"2CS691"}
                                title={"Seminar"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"2"}
                            />


                            <SyllabusComp
                                dep={"M.Tech(CSE) Semsester-III"}
                                sem={""}
                                code={""}
                                title={""}
                                L={""}
                                T={""}
                                P={""}
                                cred={""}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"3"}
                                code={"3CS692"}
                                title={"Seminar and Comprehensive Viva"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"2"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"3"}
                                code={"3CS693"}
                                title={"Dissertation (to be continued in 4th Sem)"}
                                L={"0"}
                                T={"0"}
                                P={"16"}
                                cred={"8"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"3"}
                                code={"3Total Semester Credit"}
                                title={"Dissertation (to be continued in 4th Sem)"}
                                L={"0"}
                                T={"0"}
                                P={"19"}
                                cred={"10"}
                            />


                            <SyllabusComp
                                dep={"M.Tech(CSE) Semsester-IV"}
                                sem={""}
                                code={""}
                                title={""}
                                L={""}
                                T={""}
                                P={""}
                                cred={""}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"4"}
                                code={"CS694"}
                                title={"Seminar and Comprehensive Viva"}
                                L={"0"}
                                T={"0"}
                                P={"3"}
                                cred={"2"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"4"}
                                code={"4CS695"}
                                title={"Dissertation"}
                                L={"0"}
                                T={"0"}
                                P={"15"}
                                cred={"10"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={"4"}
                                code={""}
                                title={"Total Semester Credit"}
                                L={"0"}
                                T={"0"}
                                P={"18"}
                                cred={"12"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                sem={""}
                                code={""}
                                title={"Cumulative Total Credit"}
                                L={""}
                                T={""}
                                P={""}
                                cred={"62"}
                            />
                            <SyllabusComp
                                dep={"List of Elective I,II,III,IV,V,VI,VII"}
                                sem={""}
                                code={""}
                                title={""}
                                L={""}
                                T={""}
                                P={""}
                                cred={""}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS621"}
                                title={"Artificial Intelligence and Intelligent Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS622"}
                                title={"Real Time Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS623"}
                                title={"Data Encryption and Compression"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS624"}
                                title={"Analysis and Design of Information Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS625"}
                                title={"Information Retrieval"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS626"}
                                title={"Advanced Computer Graphics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS627"}
                                title={"Parallel Algorithm"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS628"}
                                title={"Advanced Software Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS629"}
                                title={"Theory of Computer Science"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS630"}
                                title={"Compiler Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS631"}
                                title={"Genetic Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS632"}
                                title={"Neural Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS633"}
                                title={"Ubiquitous and Pervasive Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS634"}
                                title={"VLSI Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS635"}
                                title={"Cryptography and Network Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS636"}
                                title={"Geographical Information Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS637"}
                                title={"Data Warehousing and Mining"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS638"}
                                title={"Multimedia Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS639"}
                                title={"Image Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS640"}
                                title={"Grid and Cluster Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS641"}
                                title={"Quantum Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS642"}
                                title={"DNA Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS643"}
                                title={"Advanced Software Project Management"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS644"}
                                title={"Semantic Web"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS645"}
                                title={"Advanced Graph Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS646"}
                                title={"Approximation Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS647"}
                                title={"Advanced Computer Architecture"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS648"}
                                title={"Distributed Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSPG"}
                                code={"CS649"}
                                title={"Object Oriented Modeling and Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />


                        </div>
                    </div>
                </div>
                {/* PhD  */}
                <div className={`mb-10 ${(phd == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">PhD PROGRAM :-</div>
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
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Research Methodology"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Seminar and Technical report Writing"}
                                L={"0"} T={"0"} P={"3"}
                                cred={"2"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Comprehensive Viva & Presentation"}
                                L={"0"} T={"0"} P={"2"}
                                cred={"1"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Course -I"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Course -II"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Lab Course"}
                                L={"0"} T={"0"} P={"6"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Course -III"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Course -IV"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={""}
                                sem={""}
                                code={"xxxx"}
                                title={"Course -V"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                            />
                        </div>
                    </div>
                </div>
                {/* Dual PROGRAM  */}
                <div className={`mb-10 ${(dualCyber == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">DUAL DEGREE PROGRAM(CYBER):-</div>
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
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS14102"}
                                title={"Programming in C"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MA14102"}
                                title={"Engineering Mathematics I"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CH14101"}
                                title={"Engineering Chemistry"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"EC14102"}
                                title={"Digital Design"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS14106"}
                                title={"Information Technology Workshop"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"EAA14102"}
                                title={"EAA -II Swachha Bharat Mission (SBM)"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS24107"}
                                title={"Web Technology"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"HS24101"}
                                title={"Communicative English"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"PH24101"}
                                title={"Engineering Physics"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS24108"}
                                title={"Computer Organization"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MA24102"}
                                title={"Engineering Mathematics II"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"EAA24101"}
                                title={"EAA - I Sports/Innovative Project/NCC/NSS"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34104"}
                                title={"Data Structures"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34105"}
                                title={"Object Oriented Programming"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34109"}
                                title={"Database Management Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34110"}
                                title={"Discrete Mathematics and Graph Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS34111"}
                                title={"Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"HS34151"}
                                title={"Social and Professional Ethics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44112"}
                                title={"Artificial Intelligence"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44113"}
                                title={"Computer Networks"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44114"}
                                title={"Automata Theory and compiler design"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44115"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"OP44XXX"}
                                title={"Open Electives-1"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54116"}
                                title={"Software Engineering"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54117"}
                                title={"Internet of Things"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54118"}
                                title={"Machine Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54119"}
                                title={"Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS54XXX"}
                                title={"Dept Elective - I"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"OP54XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS64120"}
                                title={"Data Mining"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS64121"}
                                title={"Cloud Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS641XX"}
                                title={"Dept. Elective - II"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"OP64XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS64123"}
                                title={"Project"}
                                L={"0"}
                                T={"0"}
                                P={"12"}
                                cred={"6"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74135"}
                                title={"Applied Cryptography"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74136"}
                                title={"Network Security System"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"Dept. Elective-I"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"Dept. Elective-II"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"OP74XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74137"}
                                title={"Technical Seminar and Report Writing"}
                                L={"0"}
                                T={"0"}
                                P={"4"}
                                cred={"2"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84138"}
                                title={"Intrusion Detection and Prevention"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84139"}
                                title={"Advanced Internet of Things (IoT)"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84140"}
                                title={"Cyber Forensics"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84XXX"}
                                title={"Dept. Elective-III"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84XXX"}
                                title={"Dept. Elective-IV"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"9"}
                                code={"CS94141"}
                                title={"Industrial Training / Project (to be continued in 10th Sem)"}
                                L={"0"}
                                T={"0"}
                                P={"20"}
                                cred={"10"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"10"}
                                code={"CS104142"}
                                title={"Industrial Training / Project"}
                                L={"0"}
                                T={"0"}
                                P={"24"}
                                cred={"12"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4145"}
                                title={"Distributed Database Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4146"}
                                title={"Operations Research"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4147"}
                                title={"Digital Image Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4148"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4149"}
                                title={"Real Time Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4150"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4151"}
                                title={"Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4152"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4153"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4154"}
                                title={"Object Oriented Systems Development"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4155"}
                                title={"Computer Graphics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4156"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4157"}
                                title={"Microprocesor and Microcontrollers"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4158"}
                                title={"Distributed Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4159"}
                                title={"Virtual Reality"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4160"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4161"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4162"}
                                title={"Biometrics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4163"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4164"}
                                title={"Computer System Parallelism"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4165"}
                                title={"Advanced Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4166"}
                                title={"File System Forensic"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4167"}
                                title={"Distributed Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4201"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4202"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4203"}
                                title={"Mathematical Foundations for Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4204"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4205"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4206"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4207"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4208"}
                                title={"Multimedia System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4209"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4210"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4211"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4212"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4213"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4214"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4215"}
                                title={"Cyber laws and rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4216"}
                                title={"Digital Watermarking and Steganography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4217"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4218"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4219"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4220"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4221"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4222"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4223"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4224"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4225"}
                                title={"Pattern Recognition Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4226"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4227"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"HSXXXXX"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function SyllabusComp({ dep, sem, code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 overflow-auto">{dep}</div>
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
