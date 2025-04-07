"use client"

import BackDepartment from "../../../components/department/BackDepartment";
import { useState } from "react"
export default function Page() {
    const [ug, setUg] = useState(true);
    const [ug2021, setUg2021] = useState(false);
    const [dualCyber, setDualCyber] = useState(false);
    const [phd, setPhd] = useState(false);
    const [ug2022, setUg2022] = useState(false);
    const [dualData, setDualData] = useState(false);
    const [mcad, setmcad] = useState(false);
    const [mcaai, setmcaai] = useState(false);
    const [pgd, setPgd] = useState(false);
    const [pgc, setPgc] = useState(false);
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
                    <BackDepartment navigate={'/Department/CSE'} />
                </div>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10 flex space-x-1 overflow-x-auto ">
                    <div className="min-w-[800px] flex space-x-1 text-sm lg:text-base">
                        <button onClick={() => {
                            setUg2021(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setPgc(false);
                            setPgd(false);
                            setmcad(false)
                            setmcaai(false)
                            setUg(true)
                        }} className={`border border-black rounded ${(ug) ? "text-white bg-red-900" : "text-red-900"} px-2`}>B.Tech (Computer Science and Engineering)</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(true);
                            setPgc(false);
                            setPgd(false);
                            setmcad(false)
                            setmcaai(false)
                            setUg(false)
                        }} className={`border border-black rounded ${(ug2022) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Courses-2022 Onwards</button>
                        <button onClick={() => {
                            setUg2021(true);
                            setPgc(false);
                            setPgd(false);
                            setmcad(false)
                            setmcaai(false)
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false)
                        }} className={`border border-black rounded ${(ug2021) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Course-2021</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setPgc(false);
                            setPgd(true);
                            setmcad(false)
                            setmcaai(false)
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false);
                        }} className={`border border-black rounded ${(pgd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>M.Tech (Data Science and Engineering)</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setPgc(true);
                            setPgd(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false);
                            setmcad(false)
                            setmcaai(false)
                        }} className={`border border-black rounded ${(pgc) ? "text-white bg-red-900" : "text-red-900"} px-2`}>M.Tech (Cyber Security)</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setDualCyber(false);
                            setDualData(false);
                            setPhd(true);
                            setPgc(false);
                            setPgd(false);
                            setmcad(false)
                            setmcaai(false)
                            setUg2022(false);
                            setUg(false);
                        }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PhD Course</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setDualCyber(true);
                            setPgc(false);
                            setPgd(false);
                            setmcad(false)
                            setmcaai(false)
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false);
                        }} className={`border border-black rounded ${(dualCyber) ? "text-white bg-red-900" : "text-red-900"} px-2`}> B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security)</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(true);
                            setPgc(false);
                            setPgd(false);
                            setmcad(false)
                            setmcaai(false)
                            setUg2022(false);
                            setUg(false);
                        }} className={`border border-black rounded ${(dualData) ? "text-white bg-red-900" : "text-red-900"} px-2`}> B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science)</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setPgc(false);
                            setPgd(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false);
                            setmcad(true)
                            setmcaai(false)
                        }} className={`border border-black rounded ${(mcad) ? "text-white bg-red-900" : "text-red-900"} px-2`}>MCA with specialization in AI & IoT</button>
                        <button onClick={() => {
                            setUg2021(false);
                            setPgc(false);
                            setPgd(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setUg(false);
                            setmcad(false)
                            setmcaai(true)
                        }} className={`border border-black rounded ${(mcaai) ? "text-white bg-red-900" : "text-red-900"} px-2`}>MCA with specialization in Data Science & Informatics</button>
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
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">  DUAL DEGREE PROGRAM (DATA SCIENCE):-</div>
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
                                url={"https://docs.google.com/document/d/1ZS47H6woMm-k1JOrEUaOABv54m_BGPLq/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}

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
                                url={" "}
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
                                url={" "}
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
                                url={" "}
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
                                url={"https://docs.google.com/document/d/1ojZ3t_rDHdECjIm1Na_aslGvAlAptpTU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={" "}
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
                                url={"https://docs.google.com/document/d/1J_5es_851r7JOhAAS0pEgpVFteKLWzXn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={" "}
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
                                url={" "}
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
                                url={"https://docs.google.com/document/d/1LXRXv4u0CMRuuAv5L64GrtVZgJOoGqKM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={" "}
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
                                url={" "}
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
                                url={"https://docs.google.com/document/d/1LXRXv4u0CMRuuAv5L64GrtVZgJOoGqKM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1c0pdJlSw_ypGh0fHVwUBiiKoxI0LmUlZ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/13elSM7_bC9GFkz4Te1wdG5-5eG4_wirA/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/17edpg_Yt6zAInqarjIV9k7clML-EtE1_/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1c-VT3p4o0I14s1edOGz2KcWqQdfYKJbO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1fAl7I8oNnBK3NRAtE97a337190aTN24h/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1dyKiZlE7mv5cm57Jt0ywCtS5t0YWCl4M/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS44114"}
                                title={"Automata Theory and Compiler Design"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1d2WR7LWgxMX_AUw-9_AwkzuV9JtzWxAB/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1F8V6YysmHaZJ9nGO3YiZpdQoP5bWgYok/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1ZFgtyFYH-cWB8ee5zMS9c7HLbKsJcz6i/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1nTN1X_BRkzfYSMd8-pYlXopjRJ6GV1Bu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1bZTv5mdaUHOwJcCngeBMUzEMRZK2sAIk/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1uhPTb9_qLPpQRmH_WzBR1nul2B0qr3lj/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1IpW_8tqNdXz5CYLyryu29ZIhzdLQgdXx/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1bAoGGN-hqz1XyjgLS7Kg5wOWEIcM4raX/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
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
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74127"}
                                title={"Mathematical Foundations of Data Science"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1ffY6ipYoUIFfQnH1XcD49hhciavdxBd-/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74128"}
                                title={"Pattern Recognition"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1Z_h0Bczt1SZQlVBBlH5Z7sbIOf4ntOlg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS74129"}
                                title={"Technical Seminar and Report Writing"}
                                L={"0"}
                                T={"0"}
                                P={"4"}
                                cred={"2"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84130"}
                                title={"Natural Language Processing"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1qUq1I1rlyoUZkE9mTXXEqF_2CtOJ_yxf/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84131"}
                                title={"Deep Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1HFoTHostekgf1NZIQo4EFXn3eRYNg9t3/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84132"}
                                title={"Data Visualization Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1atHOqXBV3MnR7DOIOUa_8Crcs1rJ94dR/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS84XXX"}
                                title={"Dept Elective-IV"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={""}
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
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4171"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1S5WUgD15RPXt9mmqpZZxLUh1sUGgpKiy/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4172"}
                                title={"Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/19x2GJDwjKXUs0hf9l9HHbXHtFgCZRjbe/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4173"}
                                title={"IOT Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1__FzFOryXPTIgNs8L4mr5iK7wrRD3bim/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4174"}
                                title={"Nature Inspired Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1BRlcFtqQ6MNC2o1VubS-Xui3O3y5u0yd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4175"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ySgtdvdpgZ11yHHZac0xZ7FY8AUQnuVU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4176"}
                                title={"Bioinformatics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ATF-z1CqnhcP3WStJ1NF0WHEEDy7SYAl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4177"}
                                title={"Information Retrieval"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1MSTQT82DN4Hsz-p0bqmLEhHcJxpQLJzD/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4178"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1WjKhL9XUkt6ceJxILzAbB_fuZUbf2vAn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4179"}
                                title={"Reinforcement Learning"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1M0poIMuSnTjzz7qJFTZ2VJPKnFcQFi7w/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4180"}
                                title={"Social Networks"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1bjTmo8qFMRoPS6n0ZYMjAR87IhbubWCI/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4181"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Av3k8j7dKXMU-4wzZXG-xC4dtpIC_7dW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4182"}
                                title={"Speech Processing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1dFyE71zXIe0ACAMpMDuPYV8tH9x8W3HJ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4183"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1GQjE6lBIL4Z-qHK4cEk4PZCiud4jk9kq/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4184"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ily4ehPTWOAgic6r75xiILCHWnrxU2Ug/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4185"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1aMiXuihrDJTyt2U3dwO9D7Fvo4PFxlsc/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4186"}
                                title={"Time Series Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1m_bcJswg8MdtzObwx61cgMekndH1X8Cy/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4187"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1p66-Ihn_FyTdIUmC8TAyOQi_mZPdoM01/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4188"}
                                title={"Multimedia Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1A9wohyFyPddlD2KBKS3662m6R0Y4dV7U/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4189"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1FtyV2XWKYNDnAlpa6W61i5Ak60amOqMH/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4190"}
                                title={"Federated Learning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1hWgm8ETwI-pbjRT-WPJiKNl5VdyGOdoU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4191"}
                                title={"Knowledge Representation & Reasoning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1JQx5ITa2eARL0PB0hFm50-9TYWefUYRk/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4192"}
                                title={"Decision Support Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1UQ2q8JYRcLvWv_Wo0skTrHWTZdUc2NuU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://drive.google.com/file/d/1B2lsjm_vOEwYCSTB6lOcjL7Lg8PJp6EE/view?usp=drive_link"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4260"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/15qyCDMiYpkF8jkg32aD4lV9F1h7CincF/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4261"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1qchKU19UhaUKf933cNYgjWVrtqWmld7k/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4262"}
                                title={"Cyber laws and rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1hMoGZzUWLPRBd8mvcem-rZDLr8ap3rrd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4263"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1sv_MRVz7jsX8zbjHcKLvJUeNeHPTv9cV/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4264"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/14GbqFnR2v9BTZN6PEaFf-a2I6hXrQqdo/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4265"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1M8ZcQ7PKrQfcIi1rQNx3z6FYmSE4Vhrl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4266"}
                                title={"Digital Watermarking and Steganography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1P0_HF6hjmrMfDPYxbZqhpa_bMDwjKEun/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4267"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1b11NpjhC_5hKwrxid7QJjeiaGsFHSYWD/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4268"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1i4VeUmDRcPlSdMQmdDpfmf32LiAkdilW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4269"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1s112w4TMnmSLD4D8U3tilPEUwVhv5sxu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4270"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1TUnaAOBCZj9JkO-kd0MBx2L-vtooFOaP/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4271"}
                                title={"Mathematical Foundations for Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1AlRlTB8MOUmluidn8QGZ-rcrLUK-7nVZ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4272"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1WL-xbB35VRYnVfgS3W6JAtCmXHJiU8kp/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4273"}
                                title={"Pattern Recognition Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1YXdX9UOHUZfNWTslaHEPSHvHkRWGoGVx/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4274"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Oy7PUgBwyDTt9nno3q3pWX3t52jsdnk1/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4275"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/187zl26VzGbsiffQnkKHSLJipfubSoT7A/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4276"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1GiJ9GotxaQSJwCq-uC87Jh9Y4Toy-Qhl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4277"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1qOSIAd5Dy2ENxoRriYABncgGeUct8YG5/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4278"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/18R8XlqRQ9HFTlSYm6DCYeps4jAN10-me/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4279"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1MX9MSv24klzZWdHiwFtPaNI9EH622RLR/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4280"}
                                title={"Human Computer Interaction"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1lQuJMN-bzM-pxQ9hYNF5NjwjQZ7PVFPr/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4281"}
                                title={"Approximation Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1GMl-yBv7qNaQFgg8a2ym3RLTOggsTJaM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4282"}
                                title={"Mobile Applications Development"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1QtpOMOfCg8GIXaqfEVbCF0yNMnc_S7xs/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4283"}
                                title={"Game Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1TH0Rzj4WWrQsurXF1Vq07C5PO9hWQ1GM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4284"}
                                title={"Computational Geometry"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1jyFGE46oRuHdJ-0rDEyxmkh3D0DITmZT/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS14102_Programming in C.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/MA14102_Engineering Mathematics I.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CH14101_Engineering Chemistry.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/EC14102_Digital Design.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS14106_Information Technology  Workshop.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/EAA14102_EAA -II Swachha Bharat Mission (SBM).docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS24107_Web Technology.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/HS24101_Communicative English.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/PH24101_Engineering Physics.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS24108_Computer Organization.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/MA24102_Engineering Mathematics II.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/EAA24101_EAA - I Sports/Innovative Project/NCC/NSS.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS34104_Data Structures.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS34105_Object Oriented Programming.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS34109_Database Management Systems.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS34110_Discrete Mathematics and Graph Theory.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS34111_Operating Systems.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/HS34151_Social and Professional Ethics.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS44112_Artificial Intelligence.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS44113_Computer Networks.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS44114_Automata Theory and compiler design.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS44115_Design and Analysis of Algorithms.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/OP44XXX_Open Electives - I.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS54116_Software Enginnering.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS54117_Internet of Things.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS54118_Machine Learning.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS54119_Information Security.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS54XXX_Dept Elective - I.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/OP54XXX_MOOC.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS64120_Data Mining.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS64121_Cloud Computing.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS641XX_Dept. Elective - II.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/OP64XXX_MOOC.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS64123_Project.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74144_Optimization Techniques.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74XXX_Dept. Elective-I.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74XXX_Dept. Elective-II.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/OP74XXX_MOOC.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74124_Research Project-I.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74125_Research Seminar.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS84126_Research Project-II*.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4145_Distributed Database Systems.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4146_Operations Research.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4147_Digital Image Processing.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4148_Intrusion Detection.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4149_Real Time Systems.docx"
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4150_Computer Vision.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4151_Social Networks.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4152_Big Data Analytics.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4153_Network Security.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4154_Object Oriented Systems Development.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4155_Computer Graphics.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4156_Malware Analysis.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4157_Microprocesor and Microcontrollers.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4158_Distributed Systems.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4159_Virtual Reality.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4160"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4161_Blockchain Technology.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4162_Biometrics.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4163_Recommendation Systems.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4164_Computer System Parallelism.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4165_Advanced Algorithms.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4166_File System Forensic .docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4167_Distributed Operating Systems .docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4171_Adversarial ML.docx"}
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
                                url={<a target="_blank" rel="noopener noreferrer" href="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4172_Digital Signal Processing  .docx">Digital Signal Processing  </a>}
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
                                url={<a target="_blank" rel="noopener noreferrer" href="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4173_IOT Systems .docx">IOT Systems </a>}
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
                                url={<a href="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4174_Nature Inspired Computing.docx" target="_blank" rel="noopener noreferrer">Nature Inspired Computing</a>}
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
                                url={<a href="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4175_Image Processing Techniques.docx" target="_blank" rel="noopener noreferrer">Image Processing Techniques</a>}
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
                                url={<a target="_blank" rel="noopener noreferrer" href="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4176_Bioinformatics.docx">Bioinformatics</a>}
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4177_Information Retrieval.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4178_Computer Vision.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4179_Reinforcement Learning.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4180_Social Networks.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4181_Recommendation Systems.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4182_Speech Processing.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4183_Malware Analysis.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4184_Network Security .docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4185_Intrusion Detection .docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4186_Time Series Analysis.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4187_Big Data Analytics.docx"
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4188_Multimedia Systems.docx"}
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4189_Biometric Security.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4190_Federated Learning.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/HSXXXXX_Intellectual Property Rights.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4201_Adversarial ML.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4202_Deep Learning Algorithms.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4203_Mathematical Foundations for Information Security.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4204_Information Theory and Coding.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4205_Wireless & Mobile Security.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4206_Image Processing Techniques.docx"
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
                                url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4207_Cyber Security.docx"
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4208_Multimedia System.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4209_Computer Vision.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4210_Big Data Analytics.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4211_Cloud Computing Security.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4212_Biometric Security.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4213_Ethical Hacking.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4214_Blockchain Technology.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4215_Cyber laws and rights.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4216_Digital Watermarking and Steganography.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4217_Privacy and Security for Online Social Networks.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4218_Malware Analysis.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4219_Soft Computing.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4220_Ubiquitous Computing.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4221_Embedded System and Hardware Security.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4222_Distributed System Design.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4223_Software Defined Networks.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4224_Secure Software Systems.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4225_Pattern Recognition Technique.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4226_Natural Language Processing Technique.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CSX4227_Data Visualization.docx"}
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
                                url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/HSXXXXX_Intellectual Property Rights.docx"}
                            />
                        </div>
                    </div>
                </div>
                {/* mtech data science  */}
                <div className={`mb-10 ${(pgd == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">M.tech data Science :-</div>
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
    code={"CS540101"}
    title={"Mathematical Foundations of Data Science"}
    L={"3"}
    T={"0"}
    P={"2"}
    cred={"4"}
    url={"https://docs.google.com/document/d/1hJ_cQC8PN9ckw3HpPAoMOzUQENv-aSRi/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"1"}
    code={"CS540102"}
    title={"Pattern Recognition"}
    L={"3"}
    T={"0"}
    P={"2"}
    cred={"4"}
    url={"https://docs.google.com/document/d/18d3oZp03-eG0JzpdytLQs5Ji0QoW9-ZC/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"1"}
    code={"CS5401XX"}
    title={"Elective-I/MOOC"}
    L={"X"}
    T={"X"}
    P={"X"}
    cred={"3"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"1"}
    code={"CS5401XX"}
    title={"Elective-II/MOOC"}
    L={"X"}
    T={"X"}
    P={"X"}
    cred={"3"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"1"}
    code={"CS5401XX"}
    title={"Elective-III/MOOC"}
    L={"X"}
    T={"X"}
    P={"X"}
    cred={"3"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"1"}
    code={"CS540103"}
    title={"EAA-Sports/Innovative Project"}
    L={"0"}
    T={"0"}
    P={"2"}
    cred={"1"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"1"}
    code={"CS540104"}
    title={"Technical Seminar and Report Writing"}
    L={"0"}
    T={"0"}
    P={"2"}
    cred={"1"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"2"}
    code={"CS540201"}
    title={"Natural Language Processing"}
    L={"3"}
    T={"0"}
    P={"2"}
    cred={"4"}
    url={"https://docs.google.com/document/d/1ecjcLfro6S6OliRQBv3Dmn5Cc3dBEMWQ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"2"}
    code={"CS540202"}
    title={"Deep Learning"}
    L={"3"}
    T={"0"}
    P={"2"}
    cred={"4"}
    url={"https://docs.google.com/document/d/1D3x4gB-ut09zswb2sZOj2qV2U_fI_f-B/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"2"}
    code={"CS540203"}
    title={"Data Visualization Techniques"}
    L={"2"}
    T={"0"}
    P={"2"}
    cred={"3"}
    url={"https://docs.google.com/document/d/1D3x4gB-ut09zswb2sZOj2qV2U_fI_f-B/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"2"}
    code={"CS5402XX"}
    title={"Elective-IV/MOOC"}
    L={"X"}
    T={"X"}
    P={"X"}
    cred={"3"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"2"}
    code={"CS5402XX"}
    title={"Elective-V/MOOC"}
    L={"X"}
    T={"X"}
    P={"X"}
    cred={"3"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"2"}
    code={"CS5402XX"}
    title={"Elective-VI/MOOC"}
    L={"X"}
    T={"X"}
    P={"X"}
    cred={"3"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"2"}
    code={"CS540204"}
    title={"EAA-Swachha Bharat Mission (SBM)"}
    L={"0"}
    T={"0"}
    P={"2"}
    cred={"1"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"3"}
    code={"CS540301"}
    title={"Project/Dissertation (to be continued in 4th Sem)"}
    L={"0"}
    T={"0"}
    P={"20"}
    cred={"10"}
    url={""}
/>
<SyllabusComp
    dep={"CSE"}
    sem={"4"}
    code={"CS540401"}
    title={"Project/Dissertation"}
    L={"0"}
    T={"0"}
    P={"24"}
    cred={"12"}
    url={""}
/>
<SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX05"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1S5WUgD15RPXt9mmqpZZxLUh1sUGgpKiy/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX06"}
                                title={"Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/19x2GJDwjKXUs0hf9l9HHbXHtFgCZRjbe/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX07"}
                                title={"IOT Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1__FzFOryXPTIgNs8L4mr5iK7wrRD3bim/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX08"}
                                title={"Nature Inspired Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1BRlcFtqQ6MNC2o1VubS-Xui3O3y5u0yd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX09"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ySgtdvdpgZ11yHHZac0xZ7FY8AUQnuVU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX10"}
                                title={"Bioinformatics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ATF-z1CqnhcP3WStJ1NF0WHEEDy7SYAl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX11"}
                                title={"Information Retrieval"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1MSTQT82DN4Hsz-p0bqmLEhHcJxpQLJzD/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX12"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1WjKhL9XUkt6ceJxILzAbB_fuZUbf2vAn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX13"}
                                title={"Reinforcement Learning"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1M0poIMuSnTjzz7qJFTZ2VJPKnFcQFi7w/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX14"}
                                title={"Social Networks"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1bjTmo8qFMRoPS6n0ZYMjAR87IhbubWCI/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX15"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Av3k8j7dKXMU-4wzZXG-xC4dtpIC_7dW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX16"}
                                title={"Speech Processing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1dFyE71zXIe0ACAMpMDuPYV8tH9x8W3HJ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX17"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1GQjE6lBIL4Z-qHK4cEk4PZCiud4jk9kq/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX18"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ily4ehPTWOAgic6r75xiILCHWnrxU2Ug/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX19"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1aMiXuihrDJTyt2U3dwO9D7Fvo4PFxlsc/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX20"}
                                title={"Time Series Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1m_bcJswg8MdtzObwx61cgMekndH1X8Cy/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX21"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1p66-Ihn_FyTdIUmC8TAyOQi_mZPdoM01/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX22"}
                                title={"Multimedia Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1A9wohyFyPddlD2KBKS3662m6R0Y4dV7U/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX23"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1FtyV2XWKYNDnAlpa6W61i5Ak60amOqMH/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX0747"}
                                title={"Federated Learning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1hWgm8ETwI-pbjRT-WPJiKNl5VdyGOdoU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX50"}
                                title={"Knowledge Representation & Reasoning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1JQx5ITa2eARL0PB0hFm50-9TYWefUYRk/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX46"}
                                title={"Decision Support Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1UQ2q8JYRcLvWv_Wo0skTrHWTZdUc2NuU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://drive.google.com/file/d/1B2lsjm_vOEwYCSTB6lOcjL7Lg8PJp6EE/view?usp=drive_link"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX24"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/15qyCDMiYpkF8jkg32aD4lV9F1h7CincF/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX25"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1qchKU19UhaUKf933cNYgjWVrtqWmld7k/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX26"}
                                title={"Cyber laws and rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1hMoGZzUWLPRBd8mvcem-rZDLr8ap3rrd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX27"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1sv_MRVz7jsX8zbjHcKLvJUeNeHPTv9cV/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX28"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/14GbqFnR2v9BTZN6PEaFf-a2I6hXrQqdo/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX29"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1M8ZcQ7PKrQfcIi1rQNx3z6FYmSE4Vhrl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX30"}
                                title={"Digital Watermarking and Steganography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1P0_HF6hjmrMfDPYxbZqhpa_bMDwjKEun/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX31"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1b11NpjhC_5hKwrxid7QJjeiaGsFHSYWD/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX32"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1i4VeUmDRcPlSdMQmdDpfmf32LiAkdilW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX33"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1s112w4TMnmSLD4D8U3tilPEUwVhv5sxu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX34"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1TUnaAOBCZj9JkO-kd0MBx2L-vtooFOaP/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX35"}
                                title={"Mathematical Foundations for Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1AlRlTB8MOUmluidn8QGZ-rcrLUK-7nVZ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX36"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1WL-xbB35VRYnVfgS3W6JAtCmXHJiU8kp/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX37"}
                                title={"Pattern Recognition Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1YXdX9UOHUZfNWTslaHEPSHvHkRWGoGVx/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX38"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Oy7PUgBwyDTt9nno3q3pWX3t52jsdnk1/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX39"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/187zl26VzGbsiffQnkKHSLJipfubSoT7A/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX40"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1GiJ9GotxaQSJwCq-uC87Jh9Y4Toy-Qhl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX41"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1qOSIAd5Dy2ENxoRriYABncgGeUct8YG5/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX42"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/18R8XlqRQ9HFTlSYm6DCYeps4jAN10-me/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX43"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1MX9MSv24klzZWdHiwFtPaNI9EH622RLR/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX49"}
                                title={"Human Computer Interaction"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1lQuJMN-bzM-pxQ9hYNF5NjwjQZ7PVFPr/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX50"}
                                title={"Approximation Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1GMl-yBv7qNaQFgg8a2ym3RLTOggsTJaM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX51"}
                                title={"Mobile Applications Development"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1QtpOMOfCg8GIXaqfEVbCF0yNMnc_S7xs/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX48"}
                                title={"Game Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1TH0Rzj4WWrQsurXF1Vq07C5PO9hWQ1GM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CS54XX45"}
                                title={"Computational Geometry"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1jyFGE46oRuHdJ-0rDEyxmkh3D0DITmZT/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                        </div>
                    </div>
                </div>
                {/* PG cyber PROGRAM  */}
                <div className={`mb-10 ${(pgc == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">M.tech Cyber Security :-</div>
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
                                code={"CS550102"}
                                title={"Network Security System"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={'https://docs.google.com/document/d/1I0MJ3dr4t58lTLB0eZAIWDXrfkDp_aeJ/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS5501XX"}
                                title={"Elective-I/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS5501XX"}
                                title={"Elective-II/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS5501XX"}
                                title={"Elective-III/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS550103"}
                                title={"EAA-Sports/Innovative Project"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS550104"}
                                title={"Technical Seminar and Report Writing"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS550201"}
                                title={"Intrusion Detection and Prevention"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={'https://docs.google.com/document/d/1A4xRoXiIVqqmZcQPPuDwvoZgCmLeu0Ub/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS550202"}
                                title={"Advanced Internet of Things (IoT)"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={'https://docs.google.com/document/d/1Zd4qDbCYWT8ocC30DQZ84n3wWsRjnvl_/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS550203"}
                                title={"Cyber Forensics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/13_BHG_KI4kVn2t6EXlWuyyjVOBx2doBD/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS5502XX"}
                                title={"Elective-IV/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS5502XX"}
                                title={"Elective-V/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS5502XX"}
                                title={"Elective-VI/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS550204"}
                                title={"EAA-Swachha Bharat Mission (SBM)"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS550301"}
                                title={"Project/Dissertation (to be continued in 4th Sem)"}
                                L={"0"}
                                T={"0"}
                                P={"20"}
                                cred={"10"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS550401"}
                                title={"Project/Dissertation"}
                                L={"0"}
                                T={"0"}
                                P={"24"}
                                cred={"12"}
                                url={''}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX05"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1EdZu91332hjDrxntIEZp82vRLu9HQBLU/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX06"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1QhwpDinOy1FXeEEHq61OrklcmjL3Pg7l/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX07"}
                                title={"Mathematical Foundations for Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1xhvHinDxW_0YnqcXXH9zSOsCJD_juN-p/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX08"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/134dzdXQIvu9XSYRElOAgVYuJjIc4PHJm/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX09"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Q4NnF1GiID1RU5js9oG34Z95nBZetdpG/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX10"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1VgMlWRXpf46S5x2lVZwcxgLYBsnJXKmG/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}

                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX11"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1hYCXWv4BaLJF3Vp_KY9ljZdiWt-6Dg8l/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX12"}
                                title={"Multimedia System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1HZ7FvqGgPvEwiOevgXRGeKept1YLgCNT/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX13"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/179_YIy8RV_SXec4uWT_CkvjxiB9p-myJ/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX14"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Zo6XiPBiCR2-2iRXw-DeFpGN6rz1Wphg/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX15"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1YaNMFedF6tLzd5mVnHn0MIa-JF-h1jLn/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX16"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/14YGko8K1lu6f5P5ES-MU7q2DKX7jmwOD/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX17"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Bzi0SFDJeA5j3BzbZJKD2aXp6G9AKLTV/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX18"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Bzi0SFDJeA5j3BzbZJKD2aXp6G9AKLTV/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX19"}
                                title={"Cyber laws and rights in the digital age"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/19oAnc1j64lN9IEUkC1Y_6HS9xO5D_Lhl/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX20"}
                                title={"Digital Watermarking and Steganography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/17L0XBrMoKU0R0tQsBIBx3nMN3Uj9sbgC/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX21"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Shii64QvMQ2tG__oC1_ljuiNhIQK1PEx/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX22"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/11EY58hevJ-zAU6N83mwIrJR_k__U4e9N/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX23"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Wfz350fPyxDRic-NAdXezKYzEBUP9Vxr/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX24"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1C_kCCcEzH-ygzXtuVPVEyncSBQkzQscu/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"HSXXXXXX"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={''}

                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX26"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1hepcq3sdGCn4omShtc_j1vSIypqPreTe/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX27"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1iDIZttuYQlRQDmXECWqDlh6W4aIDJN-w/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX28"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1EoNJaAf4QtmRDgkrzdqmp-V0IJdJkAqi/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX29"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1bv7myOc9-l6npdehpWwHgooMgUzx1yHo/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX30"}
                                title={"Pattern Recognition Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/13_Z62Zr4OVfAkczlndnfALyWehChLqgG/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX31"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1RHiIFgWrNo0Kd617jm5ajono46s_qqgB/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX32"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1ZiPts7SlqGEbU9w2SAaDSOkVx0LLvpVN/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX33"}
                                title={"Bioinformatics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1yxwlC1o7kXRbA971tKgIrF84OC_PGLPH/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX34"}
                                title={"Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1UiiepA9ueSZyHd2TUNKMhPPQ9HkLAw_E/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX35"}
                                title={"Information Retrieval"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1lpMGnxoxC7jSZn0DR9k00I0kF2EPjRQG/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX36"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1fNet1b4fy995qCg-eRFFGb0LI7Itwr0K/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX37"}
                                title={"IOT Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1wtgtKKP0ShlMgsI653zIq_Tni7fOgCGy/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX38"}
                                title={"Nature Inspired Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Er7O1zr0vfYdzeqA-QktmwhuYG3QSciD/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX39"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1ZblLshtnjq85UZKFRDSAIQZe_r_0TeQ3/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX40"}
                                title={"Recommendation Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1RW2TqHu63bO7a9XQ28tpdD3B5S_ATE93/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX41"}
                                title={"Reinforcement Learning"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1mpau99Nbhntav3lHl_My9FRsc23PMaRN/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX42"}
                                title={"Security Testing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1sY_r9JmOTKAuust_GVzbsnptXASMbiky/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX43"}
                                title={"Social Computing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/14W1EH8mPLTTM38eoLo6IJzCW62j5DRhy/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CS55XX44"}
                                title={"Quantum Information Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1lEB2LQmA3iZjcxyvPAIpN_QRcc6Udyfg/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
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
                {/* Dual cyber PROGRAM  */}
                <div className={`mb-10 ${(dualCyber == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">DUAL DEGREE PROGRAM (CYBER SECURITY):-</div>
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
                                url={"https://docs.google.com/document/d/1cav6BoEE52zqkGXn-94Toky10sCRKqs4/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1RbLIyCp71KOuDtNYisYeCgXFssOhlGBB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1RbLIyCp71KOuDtNYisYeCgXFssOhlGBB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1FQafm1mKbZ0YUGJaejiPN1t9aK2bHS2t/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1vXvH4sakwoZfsA-xhz_v9fyF9B-5RwqQ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1vtY34YA2zsnT_lBY3S45IeSujM_923Pb/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1U_DwW-h4XksotWQ75cmewDfidKk_VHWB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1U_DwW-h4XksotWQ75cmewDfidKk_VHWB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1y0m-jwIsJQWDEcXoB7sab9-HJY922lm7/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1RlvAuKl0LWCBcS-GjIJNdGZX3QGSyPQV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1wdu6T74Zk5OEnYv8boUUPvCGVMighso4/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1hUcd3YI2NTrbMK4387EgfPQL_4fpd8L6/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1pUbN0A7mL6-mKapxhwo3mMwfVKTngGsY/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1QqD4UW2uVJbij9Db9dC3n4mi96ZPwWWl/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1fn9TIn5w3RsC9DTgWEGa8UqqC2zY1HhR/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1QwM7P4xxqpr2hULu6IJkYLX8xDYupxV7/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1wLoxetb2TWA1CQGnIG-dXeDpMsNHZ-UX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1dLT1GcSantAqKxiMdUnax_PMqjaIL5rW/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1Sh6QNteSdoNVlzSFvBPzCKoJCsGZjqEM/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1ss-IHoBQd-kXDHBrahGd3EVqebF2gezX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1cQurwLHGjmmL9k3SnrsN8OI5lXVx1h7T/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1WUfdRoj6IEK8VrU1kE86371oKpXomRBD/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={""}
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
                                url={""}
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
                                url={""}
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
                                url={"https://docs.google.com/document/d/1WUfdRoj6IEK8VrU1kE86371oKpXomRBD/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1hKC61IdyATJOe0xeH_cvA2k4zWN7D7GA/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/14n6eimr8AnBr7L45Hvj-a25SXWqwgYD9/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={" https://docs.google.com/document/d/1WxrELLlZGBbn72YZmGvNqgHLyVYJIiVW/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1sYMxDLMkHpAE7mPnJ3wQoh-6k2CYnwVs/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1-_wM9JJlil8j1ud49qXU_SIWD2NjCz0B/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1W_WlGkA-jF9nmj6810HhUmgy0V5wlN1U/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/11gZTjTrDjYTe9BsK1_9wM-qNG9b5B5Jt/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1N-d5Ej2IyKpTpxE3k6GwECJ9Z469bIHu/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={" https://docs.google.com/document/d/1NmuTn33UMavITzB_uUYrsiM398RHSZWt/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={" https://docs.google.com/document/d/1OzmcqkbmVXXeCmEMfJAvHVuNIxGxsJDg/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1MQcnkMjYNFnvCb67TuiDIaUID5IS7Hsp/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/18GDL8d0s2m0kzec1luDETtoPTDN7gWMU/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1wxfwu4joi825jxNnlqXERqBHHjkyqU_M/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1K5yQgvvBboCmZ_WalJXhLCzPZZQR7F52/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/103JYb2hIMMHboaV_qbucgGP2Liyn2Z7y/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/1-6xHRs4tnKSd5IVLgU5QX8EmiPARbbE5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1-VtiyUXj9KG1zUoAyURQSgZ9pGPlge1D/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1l_s5jZk7Diu903HNouytG5f79Ifx60pN/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1HKtDtO60yTG5OMexuPI3X834XJq2Cnls/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1gmE7h5d7vHabqIJYDLzCi1WY_cmpqIjE/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1Y-zvh5V4colyXy4LTz2DvzHYDGNtleV3/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1RlPXzeJM8S01C_xP4mn63U2FgYp7Ciyu/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                url={"https://docs.google.com/document/d/17jucjrP87ecWn0e6-8zeYgQOL_Jp_QiT/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1w22gCFIFZbdTduFiLW5decDfMwZaArcn/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1LCIM1vE2FJUV7618ZiGlMRWzniIUScJv/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1oZY2Ho0pJlvm-ErahFHUr2jvhZNLSIqx/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1UVgpCHE_ovRaPr8m3Sly2FM6thfH8c6W/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1sWLOYBNnx4ui1_a0i7D6kJjcJdUs7mcH/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://docs.google.com/document/d/1ZovbNdCrKEXQYPmv7CkxHoPljLpXorSS/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
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
                                url={"https://drive.google.com/file/d/1W8sld7ejfOWYTxTc-OVibS1ULzDkzW28/view?usp=drive_link "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4228"}
                                title={"Information Retrieval"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1qo9FJhmsKbM1zOUW7Q0dZDPMsrnOXCRH/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4229"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1BQrINbqEPg03HcXhZEiero-KIKksv8fu/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4230"}
                                title={"IOT Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1WKDaDR7bwL_nW9jsqYFGmbzqh9_e4h_A/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4231"}
                                title={"Nature Inspired Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1REnocL0I3VkRjjqUrzJIvAONPzwignpP/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4232"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1dyXlvbIYfu4QKYfv25VeMsPQx01O5Sy8/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4233"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ZB71S3DFUGX1ACctivvEaYDXsFqVbGOo/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4234"}
                                title={"Reinforcement Learning"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/171cbB3e10DcC7xAjvFPNMMud8zJTJ5q4/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4235"}
                                title={"Social Networks"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ke4pX6rtyqUJQKsVNqY6zAfMl8cMkbo2/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4236"}
                                title={"Speech Processing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1y9KX14tChsbPIEkeAjbALSQQ5CkcyYAf/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4237"}
                                title={"Time Series Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1vU6OlOvtoamRG7XqSB4cu8rmxsMyQGO0/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4238"}
                                title={"Human Computer Interaction"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1K2dIQRAEQfK3H4lVky2udQAztm-EJStd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4239"}
                                title={"Approximation Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1L0ltgHdKLtoG0qUjTBUTGnu7MZtpHdCu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4240"}
                                title={"Mobile Applications Development"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1xFdNl9Kx1X8fEvhD_hZw5XoGGn3WtccM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4241"}
                                title={"Game Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1CgYskDrWcEGze-kuaErEfo28S2d5jL7q/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4242"}
                                title={"Computational Geometry"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1A4OExxrM-wDt9m09QNQrn4CiTbf-16Q0/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4243"}
                                title={"Decision Support Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1_GURD6wGRIHhZHpPBW_b8RhXy--wSxFX/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4244"}
                                title={"Federated Learning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1is9C1MmsNnvfPPYquwgsdCfzikyadh56/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4245"}
                                title={"Knowledge Representation & Reasoning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1TaMZjCv_foHY_UjKCk3Y7EOZdBrKI9w1/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4246"}
                                title={"Bioinformatics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1iFYjQcdBa0sowP3473Goz_ZgRXvNTtK3/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSX4247"}
                                title={"Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1EHZkkrk6SRXIf0zwWIG00x9XekoKKEa-/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
                            />


                        </div>
                    </div>
                </div>
                {/* MCA(DS & I) */}
                <div className={`mb-10 ${(mcad == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">MCA (DS & I):-</div>
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
                                code={"MC460101"}
                                title={"Mathematics for Data Science"}
                                L={"3"} T={"1"} P={"0"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/15PacB_x_Z1zhd4s4nGcZVV8uK9fBWOzF/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC460102"}
                                title={"Introduction to Programming & Problem Solving"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1uG_lL0dbQqlkNIwsF1P31QM2EmkjQaRT/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC460103"}
                                title={"Computing with Python"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1tvSUqOdffHdAXt6j9W3bnLp41nxcUxWF/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC460104"}
                                title={"Technical Communication"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC460105"}
                                title={"Introduction to Informatics"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1EwDykCXuXvAJaQmzKaoQk2NwoVBs-trn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC460106"}
                                title={"EAA-II Swachha Bharat Mission (SBM)"}
                                L={"0"} T={"0"} P={"2"}
                                cred={"1"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC460201"}
                                title={"Data Communication and Networks"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1PJBUU50zuQ6Jn4js_SRE_5BCYMbjd1gw/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC460202"}
                                title={"Data Structures"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/14KpllkAco3LwmyBJP4XvAb2vA0JxO0zl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC460203"}
                                title={"Database Management Systems"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1WR349G54m62-T_y3Bw2ZiptSAe0-a-du/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC460204"}
                                title={"Object Oriented Programming using Java"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1ivhOdmtDt7YSSm0jru_lu_zTXFls08sa/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC460205"}
                                title={"Discrete Mathematics & Graph Theory"}
                                L={"3"} T={"1"} P={"0"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/12qQuqOJ9mL4L-upIhhAC8VRK90wfz_jb/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC460206"}
                                title={"EAA-I Sports/Innovative Project/NCC/NSS"}
                                L={"0"} T={"0"} P={"2"}
                                cred={"1"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC460301"}
                                title={"Artificial Intelligence"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1j8jBvWwQ7-5nFZFVcK0BcoNren0UeZw6/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC460302"}
                                title={"Operating Systems"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1QmT3YerSIhA9rqzIJFglEoDKhAIk21j-/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC460303"}
                                title={"Machine Learning"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1OHgm7MJifvA0Fy_PBq8Rwsk-Esb1W8Wv/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC460304"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1SAPPqtzll06DY9NmCP2_Jk3dabVZSMlL/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC460305"}
                                title={"Data Preparation & Visualization"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/14ezMq5L5faidMaGIH3L9JMmKdnM0GETR/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC460401"}
                                title={"Big Data Analytics"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/16pUrDDA4Icvo_jXIXwu_JDNbnNIK05EJ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC460402"}
                                title={"Bioinformatics"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1l8Q6AIi1w70PO4_IN21FqxEyCRLjxYvt/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC460403"}
                                title={"Deep Learning"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1mG4ssfeZJUEKXwEkIiIelWVGj-Nu2dRx/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC460404"}
                                title={"Information Retrieval"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/13Qkt2N2E1BpazvR01fPcj0Fe0ZNgOUzX/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC460405"}
                                title={"Computer Vision"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1Fwmoz4vrnj4Pw4fwL6Y9ZR-I-dAuV193/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC460406"}
                                title={"Seminar & Presentation"}
                                L={"0"} T={"0"} P={"2"}
                                cred={"1"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"MC460501"}
                                title={"Human Computer Interaction"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1uDgZ3KeyuYzejJl-82KeetP87k_xWjJT/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"MC460502"}
                                title={"Minor Project I"}
                                L={"0"} T={"0"} P={"22"}
                                cred={"11"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"MC4605XX"}
                                title={"Elective – I/MOOC"}
                                L={"0"} T={"0"} P={"0"}
                                cred={"3"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"MC4605XX"}
                                title={"Elective – II/MOOC"}
                                L={"0"} T={"0"} P={"0"}
                                cred={"3"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"MC460601"}
                                title={"Major Project/Internship"}
                                L={"0"} T={"0"} P={"40"}
                                cred={"20"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX10"}
                                title={"Generative Deep Model"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX11"}
                                title={"Explainable AI"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1KjiTARXwV3dtKdL1GQQFTepp3sAaRCuw/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX12"}
                                title={"Internet of Things"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1qqxKsvpXn3Xt6J2H5hWlEuKTeXQnG4u7/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX13"}
                                title={"Game Theory"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1vSciwSNByKSgld9ntm1At19TkEaYH_pO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX14"}
                                title={"Augmented Reality/Virtual Reality"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/18UaBQc4kVPVKtYDk4Q4Z5f6SxKZhv5RM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX15"}
                                title={"Intrusion Detection"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1eBD4WveWHS3GNTscblF3m8jxy67NbHmW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX16"}
                                title={"Malware Analysis"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1bbtI5laHbsBncqpAazSut-ALPZ6ZE49M/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX17"}
                                title={"Digital Forensic"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1LnJ78iOUKUtRSaApdYdXmgUExR4z1KYP/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX18"}
                                title={"Text Analytics"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1b3D8nOlDVIQpiK8Gjtxn80E087q1PgQK/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX20"}
                                title={"Reinforcement Learning"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1H48hURtZjatIUtM4UrpE8APR4MK8C4nb/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX21"}
                                title={"Blockchain Technology"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1j5xuNoXbTgPwnQN7W9ztzfiHdZh2hm-l/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX22"}
                                title={"Data Mining and Warehousing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1oSd28W5RdZ_NVndmbd6oX1L7GcABpKjB/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX23"}
                                title={"Recommendation Systems"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1PtMufhG3s4TDVpt3E_F3wpcip9KhJIEm/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX24"}
                                title={"Cloud Computing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1GIAJG-s7ZmHr_RMm_Q2yUHfNrOyhMxua/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX25"}
                                title={"Computer System and Security"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ruALr7BirbLfmkT0-C0UB4kXHHd1Ow5J/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX26"}
                                title={"Biomedical Engineering"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1HQqPUvJJ7KvIj51vzk6DxNCKs1_R7uVg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX27"}
                                title={"Soft Computing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Z8bOGgslFVcxZE2cq8v_nWSR9y4uU0O3/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX28"}
                                title={"Distributed and Parallel Computing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1oOuIoGGNrrx4te1EpW4jgk2MTViGi6Sd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX29"}
                                title={"Federated Learning"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1hSk3wVPAFxDJ8R9Na7nsDthqZ50HHyQB/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX30"}
                                title={"Quantum Computing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1OaHjjsViSHsVCYyUebhAs1h4v6wgWJAg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX31"}
                                title={"Pattern Recognition"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1gWCe30OFE-g7BZo_C8WE8vNGStx79Rjj/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX32"}
                                title={"Nature-Inspired Computing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1dXqvD8FcVhpYzT9ZkZkQL4V86oIbd8Lb/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX33"}
                                title={"Optimization Techniques"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1wNW7-_F1ZkPuhdIa_PDkVW9MHGxrYyvI/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX34"}
                                title={"Health Informatics"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/17WMutXk5XSsvZUzNVPWPcIzXKDh4RMnw/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC46XX35"}
                                title={"Image Processing Techniques"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1hshrZ1axwaf7hsbwT8LYdo6-AIDVDnHN/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />

                        </div>
                    </div>
                </div>
                {/* MCA(DS & I) */}
                <div className={`mb-10 ${(mcaai == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">MCA (AI & IOT):-</div>
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
                                code={"MC470101"}
                                title={"Problem Solving through C"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1FV1oOQYuIZ2V_mIjTy03sGI_61pjReHe/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC470102"}
                                title={"Mathematical Foundations of Computer Applications"}
                                L={"3"} T={"1"} P={"0"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1rvOt5qrTRMpMIRI43RNWsy55SG7UcUDL/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC470103"}
                                title={"Computer Networks"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/16tnFG5QhraUox3TYYvCBr1_kXRqk7359/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC470104"}
                                title={"Technical Communication"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1r0Auj-Z9BUN91NphxqNjnrvrbLC2HLZf/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC470105"}
                                title={"Computer Organization and Architecture"}
                                L={"3"} T={"1"} P={"0"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1yC4wpsK1jzKUHQg_YxmtfVYj89oLO0KB/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"MC470106"}
                                title={"EAA -II Swachha Bharat Mission (SBM)"}
                                L={"0"} T={"0"} P={"2"}
                                cred={"1"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC470201"}
                                title={"Data Structures"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/16k64wYC83vzOdqnKdahUw-E0UARnsapf/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC470202"}
                                title={"Computing with Python"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1mttudLuSXrWk3uZI9xiuUa6jxzPxarTu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC470203"}
                                title={"Database Management Systems"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1yYLYR_Z8tP5F0FcC5QebQfryfzA_e3Hn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC470204"}
                                title={"Operating Systems"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1tcrTuUCCSBgTh6SqwemI50Fq7YH6GzEc/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC470205"}
                                title={"Ad-hoc & Sensor Networks"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1NtNu0-gRLUb1kYO_EDI_mtEti9alODsA/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"MC470206"}
                                title={"EAA - I Sports/Innovative Project/NCC/NSS"}
                                L={"0"} T={"0"} P={"2"}
                                cred={"1"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC470301"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1EORwBA86cVS6RvzaJbWxdyAEUQnCSp37/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC470302"}
                                title={"Artificial Intelligence"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1Cxb6ytGbaPPsGSd1ic2SHscNQmwXNO6y/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC470303"}
                                title={"Object Oriented Programming using JAVA"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1KY0yEMR3BY5UM7CPpceYUDLS02FO-SqO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC470304"}
                                title={"Internet of Things"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1f2a1dNGuy-xiPSKGS4C3YBjdkoqY6ZpM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"MC470305"}
                                title={"Machine Learning"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/16x1uez62ptwFn-3KuGEPukDnuB8ubNix/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC470401"}
                                title={"Deep Learning"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1zAGN8fR3J-7QX17-1iKpWIL2_QKNU3zh/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC470402"}
                                title={"Artificial Intelligence of Things"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1YxrOLNDayJ6_C5E9BIeMINHBdV2DHoFM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC470403"}
                                title={"Data Visualization"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1X8mv-lKL_Y8B_S7Cj06eomkyvDNrkPmQ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC470404"}
                                title={"Web Programming"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1pTSzQauz4zjtRhgeDfHWmnad6a4iOtqg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC470405"}
                                title={"Natural Language Processing"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC470406"}
                                title={"Mobile Applications Development"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1EYUscj_LWiWNFhwLaBUNl2nNSMWKqpc_/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"MC470407"}
                                title={"Seminar & Presentation"}
                                L={"0"} T={"0"} P={"2"}
                                cred={"1"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"MC470501"}
                                title={"Information Security"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1eYDBWHnOAXUOX0e6dF21HHNhTTvBUlzA/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"MC470502"}
                                title={"Minor Project"}
                                L={"0"} T={"0"} P={"22"}
                                cred={"11"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"MC4705XX"}
                                title={"Elective-I/MOOC"}
                                L={"0"} T={"0"} P={"0"}
                                cred={"3"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"MC4705XX"}
                                title={"Elective-II/MOOC"}
                                L={"0"} T={"0"} P={"0"}
                                cred={"3"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"MCXX0601"}
                                title={"Project / Industrial Training"}
                                L={"0"} T={"0"} P={"40"}
                                cred={"20"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX10"}
                                title={"Generative Deep Models"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1XD5scsobfqtqq-MrAZX7_Qabh8H0L8Md/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX11"}
                                title={"Explainable AI"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/10RXR8pYih1_oQGNgLJBC2H4wbg8ZBPWg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX12"}
                                title={"Information Retrieval"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/18qaM83QmYyQAoY6IIqAMHovAq3iwuMjO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX13"}
                                title={"Game Theory"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1MDFOhtE_LVjfpxN5QBW6M1OlPn-RY_Cq/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX14"}
                                title={"Augmented Reality (AR) and Virtual Reality (VR)"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1P5FhovipLcJyDojRgX6ohOK42ZwAUfJJ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX15"}
                                title={"Intrusion Detection"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Hn0Nxik3PU0iwrNq4umiBnbC9Nn2cHkH/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX16"}
                                title={"Malware Analysis"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1bi_OU13XYC9yG496WrWb0A6lYrhNXylO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX17"}
                                title={"Digital Forensic"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/18OsoyNsgrirX5NHddVpLBvWUKffLCz0j/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX18"}
                                title={"Text Analytics"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1gXNxUGZREP4i3NaIVLxzVHhdM-9O3a3J/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX19"}
                                title={"Computer Vision"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1EHskGa1oJyDm0FGbCqU-r6VQzbM_064x/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX20"}
                                title={"Reinforcement Learning"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1gczkVV2yA5bDvtrRafSmbe1n4BJSpXC9/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX21"}
                                title={"Blockchain Technology"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1uhjjBoaKjmd7BiJVsJEdPbBGgA_OAp8R/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX22"}
                                title={"Data Mining and Warehousing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1juciqJ33CwhcD7QKynIax_OXik5uSxOs/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX23"}
                                title={"Recommendation Systems"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1O-x-b_Wzu_PdSIimQg0sjavP4fqXLXSs/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX24"}
                                title={"Cloud Computing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1oiciDT_511AjsYdPFlW1VVN6VhQfNVUN/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX25"}
                                title={"Image Processing Techniques"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/19xR8HraOPVy7p1cH5xgLNKm7267w5k7J/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX26"}
                                title={"Computer System and Security"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1DkP_kXBUycqU7G0ubITXrE0OjNg5do7P/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX27"}
                                title={"Smart Agriculture"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1i776pUS1_glxH83qVWTmGcEHgeYogSSi/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX28"}
                                title={"Human Computer Interaction"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1LcP5ZRTCoVwaHmCOXXDIx1HaxN51aIBL/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"MC47XX29"}
                                title={"Social IoT"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1WVcCufZiel02dQz9aYydX9ujE9uYvGkK/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
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
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 overflow-auto ">{dep}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{sem}</div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2 ">{code}</div>
            <a href={url} target="_blank" className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer">{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{cred}</div>
        </>
    )
}

