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
                <BackDepartment navigate={'/Department/CSE'}/>
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
                        }} className={`border border-black rounded ${(ug) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Courses</button>
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
                        }} className={`border border-black rounded ${(pgd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>M.Tech data science</button>
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
                    }} className={`border border-black rounded ${(pgc) ? "text-white bg-red-900" : "text-red-900"} px-2`}>M.Tech Cyber Security</button>
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
                        }} className={`border border-black rounded ${(dualCyber) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual Degree (Cyber Security)</button>
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
                        }} className={`border border-black rounded ${(dualData) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual Degree (Data Science and Engineering)</button>
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
                    }} className={`border border-black rounded ${(mcad) ? "text-white bg-red-900" : "text-red-900"} px-2`}>MCA (DS & AI)</button>
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
                    }} className={`border border-black rounded ${(mcaai) ? "text-white bg-red-900" : "text-red-900"} px-2`}>MCA(AI & IOT)</button>
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
                            url="https://docs.google.com/document/d/1Laetf_V2obTG6UuyRObSpBjbnbeNQ4Ug/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://drive.google.com/file/d/1PqRPghnNBMyU9Mz22AJIKWt2bt2V2pYG/view?usp=sharing"
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
                            url="https://docs.google.com/document/d/1Kb8c-AWBe32jR5Hkk9ThzpWAWvG7XnfV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1pawxJaXFRBxaSvKfbYDbAIuau_NBMMc5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/19MQXNBQcV-WrtjN07o5ZF2RzyS3K8sgf/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1J4-POYcGi0EjoK0bl7MFrmYj7y-ma7ZD/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1RSWe4Ol_OzUJZ_Xnw1aBx7oRgOtFBnGJ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1AcIFHwdg-TjrxGE9ydHR03KJgR_LOsQ3/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1XmBsCdlZZ1R6hVx5yxvHAAfak8MK6n7N/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1ieTOepzsLN47AIcbMPAvrICt1Ee_91cm/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/17S9_8GLb7BVUeA72VeC172dbBSLjP8wV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1qxTfzoloOXHFzcar7gHBBGjXk6of46Ie/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1m3-hcz_J_Gy3ZgEpLdmmgmL_7_n9r4RF/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1b2fKT61VoInfgfdYE2hfqQN6NaCfni5y/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1cFVD0jPIkMKl5_U56ADKeC088VzF2NFG/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1Ly-i_E97RWD-CnpK9rOP46zuc9uKGF2n/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1UZI9kjg2W73ANTPhIumW2jLb_p1o5lRT/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1HmwRemL1TZKZvJwDls7KrZ_5y9Eanf6n/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1MTJLtyNnuurT5g77toJOMroncmjcBFjw/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1nP4g9zgMIsg9Z-Z_YMl-wfT4tgkqXuFy/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1bcXC_1-9K_yRR-RpvjHYqI6TOr4KDNOM/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1l65d9AUyYad4SX_C05PhvxFzhbcqKluI/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1SMdn4Dlszgv9aB97GfP8SSPo4NinGI6b/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1gxUT-PfAQEAYuJ6egXShByW8X2T7tRU6/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/14nJ0D2cXbO9QcTNxBQleRnVaUhnf6Hne/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1qZ1t0PUOUljOw19JOW5kNcoYa93hbcmj/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url={"https://docs.google.com/document/d/1YL2rJGcfookQ7xnX0eRXQ9TJu7E0rSz9/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1JOarJ7Yt1Y6Sz72R80YMOgxuCzIpEc1Q/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1CZJKqsgYSZ3ZkCT9GDCkBfR-ZKA_13WS/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1A69iHWwZpSZnv3IXzNgJAk1Rkg1sqheq/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1Nl7iOnagsXHAeZrr9Zefh3MPVjjD2EQZ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1QRNtJpewM3GyXcNvxNwhkobXwOE1seR2/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/14DKdLQoEUJp7LoEmsDkV8RFYBRPfeDkQ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1bcMLi4k5ZFqsBAY6qTikHcQcAhnBKXaX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1EMlH-ckCc06Kh8tTBJ1qd6b9WNV513HE/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1gAqAZIIZrREhSE4h85efeqgmouYLkAe2/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/19gB-WwR_AW59vdjUrb4Rstbq6620j9Nj/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1e3FUKMS6uF0suqwg7oNpnz7aGeMgksJK/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/12yx2A54mJK0V_wOGyofy8HNWVtszJngE/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1ciPxkdXRfDyNW4mwkroOi5XSXIaXleOg/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/10GfpuVyUl1SE8erm7eTK8A5qcsisGURM/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1sxsTWXYjaows_Iv8bSvyRCGgODGHmy8J/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1Dt68ddGSW_1uF-EzFnOSOePf02qgLaaO/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1-2xt39Nny462tcyOYdbYQUf-vag37ftn/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1U0YNTBGw375B8V-aBDYF25QNu6bq6DrC/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true">Digital Signal Processing  </a>}
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
                            url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1R3FigmRSFBRRXdZBq2z1LCVcMk45SfpB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true">IOT Systems </a>}
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
                            url={<a href="https://docs.google.com/document/d/1K7KEaFieY18TibIK2fUKdNAoNjpQ8Nbh/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Nature Inspired Computing</a>}
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
                            url={<a href="https://docs.google.com/document/d/1miIX9l7SZBTfB8LRDAjl2KWcc0dD8orN/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Image Processing Techniques</a>}
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
                            url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1eMJ5ISZCCL88a5MatCmkDm6PINGqqh4q/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true">Bioinformatics</a>}
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
                            url="https://docs.google.com/document/d/1KCXKqgy9REBafSRt2BwHRRJuX6RUZiSc/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1X4gz-aloliMvHRcKoRADamwQ996II6eN/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1ty5cVwLoFtZUbjCq3eP5xTxmCrE0wFF5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1gYd_G-esxH4MFpCDMk2IvszNvRzrLAK2/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1hwLgXncyaViDFfFJv8T4IR96PRuelZJJ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1jz8G1Sa35OvY3zQF4-AtT7lGm2IlFDAr/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1Fh3GfZuqFMzkO7SQvpJHZSy2RlgwKde5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1YSSBl6bX5etTV23kXT2nm1pl36NTmVbX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1Z7mghmRukFoQCyUuLhdRCQcWDIlKWflR/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1y6bTaesesALe8LMmJt_rUprn3ZKcWRHQ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1mFKJt-b3wB2Z9iamL7afmm_ZDq4R4V3T/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url={"https://docs.google.com/document/d/1OEnWO0_xJ3hLVOiBVP29sFJQeY5KasCO/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url="https://docs.google.com/document/d/1EhWC2uIWE1hA85QvmspTCCFzHLh6zsVm/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1VLIlM1YX8cdjIO_Sw751R7cogm2DpxrI/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1HqRTRrFRZKAbD60VSgzOYpEzBc3_UexD/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1o6lfGSbmQdO9kw7u-wRn1a0bCZZI2xY5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1IrZ9aRn7IpNo4AI_eFFz7cE8LiREgYY2/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1TJR89VDIpmlILB-G7dbhWVbf8ABrz4UV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1shUg9uOiPycMGj3xOuMDcNoovXnZW1ev/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1iwsa5RqOc0DTwLMfI5uiltc4lnDw-ftn/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url="https://docs.google.com/document/d/1j3ft9g3DKeGvj60mO4V7mvb_u7rxCcxh/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"
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
                            url={"https://docs.google.com/document/d/10pwkrKzpK8YK6FFyUCW3r7291-zs9xS_/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1ftET6LAOoxixZEMsZc4Mh6Hv1rryk7LS/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1tEMO9w4AA3Fp57suQ4-QRFxhaTUVWouw/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1esRjPnXyMoFka_eOmKpvaBH2eCyiwCM4/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1UmOi2k0Z-jBbwXnM9mZH2oHMXYBfZpPX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1oD30Q_Ix31f4eSWzuq1mhVemriiKmJTM/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1bqmy27VUjzWR2p0i_NyjSY4zE3C2ua_r/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1d4bUJwQvsOBC_tww9Kh9pHl4wzvoYziK/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1WfK0HsPEg0HI5YLgmjLFkRExJ3KuEHrH/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1myfSFHGRbvMCRQR1JAajOLOLbms1ATMv/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1DA2GOZXtzKdVLIyagPWar9V3aoUhoc_1/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1YuDUg5YpD6Jdq3zw6yfTvl856FgZFPFj/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1gwC-83z24lw3afgqFkJbCmEwNpi-dIhf/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1Tq4nLaeHan2DObRFfcjUdJYjOVkiRo4b/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1PXdX-tEq21RiwHsES6xQmB6MMcv5FfXw/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1wr2yl0kC-3GH_z0rQt8Z1o6d-wfjvYU5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1IqPLXgz1Wlx6E2c74qAeWpqqbU5GGG4_/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1Z-J6TY5QdH97ETNeGi2opFJLbaLDfMbB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/16A7uezJcbx3IEQuqKSIKMH6TTb9GHIMK/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1E2jMs7RXCepPOPHoDtp8u5dkF-pftjB8/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            code={"CS550101"}
                            title={"Applied Cryptography"}
                            L={"3"}
                            T={"0"}
                            P={"2"}
                            cred={"4"}
                            url={'https://docs.google.com/document/d/13nsqg0_VRjwQkMHt2RBgLyuFzWzYkTao/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
                        />
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
                            url={"https://docs.google.com/document/d/1Laetf_V2obTG6UuyRObSpBjbnbeNQ4Ug/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/MA14102_Engineering Mathematics I.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CH14101_Engineering Chemistry.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/EC14102_Digital Design.docx"}
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
                            url={"https://docs.google.com/document/d/1Kb8c-AWBe32jR5Hkk9ThzpWAWvG7XnfV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/EAA14102_EAA -II Swachha Bharat Mission (SBM).docx"}
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
                            url={"https://docs.google.com/document/d/1pawxJaXFRBxaSvKfbYDbAIuau_NBMMc5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/19MQXNBQcV-WrtjN07o5ZF2RzyS3K8sgf/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/PH24101_Engineering Physics.docx"}
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
                            url={"https://docs.google.com/document/d/1J4-POYcGi0EjoK0bl7MFrmYj7y-ma7ZD/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/MA24102_Engineering Mathematics II.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/EAA24101_EAA - I Sports/Innovative Project/NCC/NSS.docx"}
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
                            url={"https://docs.google.com/document/d/1RSWe4Ol_OzUJZ_Xnw1aBx7oRgOtFBnGJ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1AcIFHwdg-TjrxGE9ydHR03KJgR_LOsQ3/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1XmBsCdlZZ1R6hVx5yxvHAAfak8MK6n7N/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1ieTOepzsLN47AIcbMPAvrICt1Ee_91cm/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/17S9_8GLb7BVUeA72VeC172dbBSLjP8wV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/HS34151_Social and Professional Ethics.docx"}
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
                            url={"https://docs.google.com/document/d/1qxTfzoloOXHFzcar7gHBBGjXk6of46Ie/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1m3-hcz_J_Gy3ZgEpLdmmgmL_7_n9r4RF/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1b2fKT61VoInfgfdYE2hfqQN6NaCfni5y/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1cFVD0jPIkMKl5_U56ADKeC088VzF2NFG/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/OP44XXX_Open Electives-1 .docx"}
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
                            url={"https://docs.google.com/document/d/1Ly-i_E97RWD-CnpK9rOP46zuc9uKGF2n/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1UZI9kjg2W73ANTPhIumW2jLb_p1o5lRT/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1HmwRemL1TZKZvJwDls7KrZ_5y9Eanf6n/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1MTJLtyNnuurT5g77toJOMroncmjcBFjw/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS54XXX_Dept Elective - I.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/OP54XXX_MOOC.docx"}
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
                            url={"https://docs.google.com/document/d/1nP4g9zgMIsg9Z-Z_YMl-wfT4tgkqXuFy/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1bcXC_1-9K_yRR-RpvjHYqI6TOr4KDNOM/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS641XX_Dept. Elective - II.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/OP64XXX_MOOC.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS64123_Project.docx"}
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
                            url={"https://docs.google.com/document/d/1n4DxgPfJlmVSM0supB9XKyXwCJWKgxc_/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1uaGmw_I-FrhMnzC2LQfo3fdb_fvMri58/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS74XXX_"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS74XXX_Dept. Elective-II.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/OP74XXX_MOOC.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS74137_Technical Seminar and Report Writing.docx"}
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
                            url={"https://docs.google.com/document/d/1Mt_db_mMNxMgr_Ah0Pr5mA05NgTxmLpw/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/14ZqQt4PPndjFaQZMXejF0QxkB7v_uNll/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1o9AgSJ8HCdj-YKLMKuHewamHU1TYGMyz/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS84XXX_Dept. Elective-III.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS84XXX_Dept. Elective-IV.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS84XXX_MOOC.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS94141_Industrial Training / Project (to be continued in 10th Sem).docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS104142_Industrial Training / Project.docx"}
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
                            url={"https://docs.google.com/document/d/1TJR89VDIpmlILB-G7dbhWVbf8ABrz4UV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1iwsa5RqOc0DTwLMfI5uiltc4lnDw-ftn/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1ftET6LAOoxixZEMsZc4Mh6Hv1rryk7LS/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1WfK0HsPEg0HI5YLgmjLFkRExJ3KuEHrH/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1DA2GOZXtzKdVLIyagPWar9V3aoUhoc_1/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1YuDUg5YpD6Jdq3zw6yfTvl856FgZFPFj/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1PXdX-tEq21RiwHsES6xQmB6MMcv5FfXw/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1wr2yl0kC-3GH_z0rQt8Z1o6d-wfjvYU5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1IqPLXgz1Wlx6E2c74qAeWpqqbU5GGG4_/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1Z-J6TY5QdH97ETNeGi2opFJLbaLDfMbB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/16A7uezJcbx3IEQuqKSIKMH6TTb9GHIMK/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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

