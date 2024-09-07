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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS14102_Programming in C.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS14106_Information Technology Workshop.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS24107_Web Technology.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/HS24101_Communicative English.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS24108_Computer Organization.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS34104_Data Structures.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS34105_Object Oriented Programming.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS34109_Database Management Systems.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS34110_Discrete Mathematics and Graph Theory.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS34111_Operating Systems.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS44112_Artificial Intelligence.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS44113_Computer Networks.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS44114_Automata Theory and compiler design.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS44115_Design and Analysis of Algorithms.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS54116_Software Enginnering.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS54117_Internet of Things.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS54118_Machine Learning.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS54119_Information Security.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS64120_Data Mining.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS64121_Cloud Computing.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS74135_Applied Cryptography.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS74136_Network Security System.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS84138_Intrusion Detection and Prevention .docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS84139_Advanced Internet of Things (IoT).docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CS84140_Cyber Forensics.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4204_Information%20Theory%20and%20Coding.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4206_Image%20Processing%20Techniques.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4150_Computer%20Vision.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4216_Digital%20Watermarking%20and%20Steganography.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4218_Malware%20Analysis.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4219_Soft%20Computing.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4222_Distributed%20System%20Design.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4223_Software%20Defined%20Networks.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4224_Secure%20Software%20Systems.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4225_Pattern%20Recognition%20Technique.docx"}
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
                            url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_dual_degree_cyber_security/CSX4226_Natural%20Language%20Processing%20Technique.docx"}
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
                            url={"https://docs.google.com/document/d/1PpN5yLR15VwlRhL2B0F2faqw25T61v_v/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"1"}
                            code={"MC460102"}
                            title={"Introduction to Programming & Problem Solving"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/16CTMRhAvqZlBIW9JuMC_gxi3d-QJKRnm/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"1"}
                            code={"MC460103"}
                            title={"Computing with Python"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1YLOq94fsG48gya9FlaRFaDSrl9uXGSgf/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1zAzCjC_o6vLSSzRNudQCna7IIeUWIoeI/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/133-lw_PyZZ_gSx_nvUaeuZFVFunbqZKe/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"2"}
                            code={"MC460202"}
                            title={"Data Structures"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1qtJ3oOQgOK22-bgpWEouewhM3x689KMg/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"2"}
                            code={"MC460203"}
                            title={"Database Management Systems"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"2"}
                            code={"MC460204"}
                            title={"Object Oriented Programming using Java"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"2"}
                            code={"MC460205"}
                            title={"Discrete Mathematics & Graph Theory"}
                            L={"3"} T={"1"} P={"0"}
                            cred={"4"}
                            url={""}
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
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"3"}
                            code={"MC460303"}
                            title={"Machine Learning"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/15sEvDxr1uO4FW6wHt9mLYa9aAdlh0-UR/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"3"}
                            code={"MC460304"}
                            title={"Design and Analysis of Algorithms"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1OViNAmZtN0iDxVwnWBSZW7nDFQKesuhU/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"3"}
                            code={"MC460305"}
                            title={"Data Preparation & Visualization"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC460401"}
                            title={"Big Data Analytics"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC460402"}
                            title={"Bioinformatics"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC460403"}
                            title={"Deep Learning"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/14tRhe9UYlhZyabLrth9r3-QAet2bxp44/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC460404"}
                            title={"Information Retrieval"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC460405"}
                            title={"Computer Vision"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1DehuBC1_5Yqo67fcTXmxilnaeRV5suIx/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1rGFs0c5B3kJ0-feIBoZUrB_EKDktNl-m/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1MMh-AQmO93ynUSQhZfNdHOZ1pA9YJ3GU/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX12"}
                            title={"Internet of Things"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1l6cko5vCHklOGMbmTUks8y1lFqhkWMa3/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX13"}
                            title={"Game Theory"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1nn0W-Hk2wVx_oJ0gELxl3jwLHhadtcA6/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX14"}
                            title={"Augmented Reality/Virtual Reality"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX15"}
                            title={"Intrusion Detection"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1wBE-0B-J6f0CU6FIOBPHaBiVPCc7gSj3/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX16"}
                            title={"Malware Analysis"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1BZz1wjJ94xgjn6dlycM44ktI9REGG-4c/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX17"}
                            title={"Digital Forensic"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX18"}
                            title={"Text Analytics"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX20"}
                            title={"Reinforcement Learning"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/10jdQZX70Kim8-U0kYvz4fxGzqvSoPXrw/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX21"}
                            title={"Blockchain Technology"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1b1k9a1mbtKMLkqMLT7HZD09Y6xmSOSlt/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX22"}
                            title={"Data Mining and Warehousing"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1QRKLvJ3OKTlwg3DNoBcf1A2CRRnmSNB5/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX23"}
                            title={"Recommendation Systems"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/13ulTng6qu0A-CpfmUxWS2_AILdpKMRiU/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX24"}
                            title={"Cloud Computing"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX25"}
                            title={"Computer System and Security"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1Lwk2fR-NVaS4UNEiGDdMkgZ9suJtYotR/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX26"}
                            title={"Biomedical Engineering"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX27"}
                            title={"Soft Computing"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1WyUG19aPT01GTHtjbsIsR2CLk1joNQ5q/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX28"}
                            title={"Distributed and Parallel Computing"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1bK4a1OhAyKbSV8B9Gv72cN5IAfGG9ymA/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX29"}
                            title={"Federated Learning"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1wbZinUwlrvNk5raikf63kojTfsKpF59Q/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX30"}
                            title={"Quantum Computing"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1sP5JOxg4CUMDIm5ovLKRfpU01dPozJT2/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX31"}
                            title={"Pattern Recognition"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1Okc5hh-wg7NHGkcCq6nZP_xGo_8-s8yg/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX32"}
                            title={"Nature-Inspired Computing"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX33"}
                            title={"Optimization Techniques"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1tWnig9pGSZ3uXTplymV2ofeQmVUojuca/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX34"}
                            title={"Health Informatics"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC46XX35"}
                            title={"Image Processing Techniques"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1NPzYW9M01nsJjnpFtYbLuiRyFoXvG_XE/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1kndjcymXM29c7ZseZdEvhfRZNqHyY3od/edit?usp=drivesdk&amp;ouid=105912413414551043045&amp;rtpof=true&amp;sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"1"}
                            code={"MC470102"}
                            title={"Mathematical Foundations of Computer Applications"}
                            L={"3"} T={"1"} P={"0"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1whwb8xFRFesKmFasotgSFhovDkWJvwAN/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"1"}
                            code={"MC470103"}
                            title={"Computer Networks"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1XS0u_rhuhJ6MGlAic7kSj2PufiKkFLyE/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1eZ8JLS73CMB3Kn5tAgho0wL2vxMiN9Zk/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1eZ8JLS73CMB3Kn5tAgho0wL2vxMiN9Zk/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"2"}
                            code={"MC470202"}
                            title={"Computing with Python"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1Cmm7Z66gvehIeFFo9ul8LRdDW-AZbmVu/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"2"}
                            code={"MC470203"}
                            title={"Database Management Systems"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1I9Vs_zTLO8UrH6cgGarCmikysZA3Q6Nb/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"2"}
                            code={"MC470204"}
                            title={"Operating Systems"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/18PWt_0Owp7zQ2jTzPPcUyTO7Wvd3CPvm/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"2"}
                            code={"MC470205"}
                            title={"Ad-hoc & Sensor Networks"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1IuRtyGhQiwECYfnSz1BC85ZDjlscuu1F/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1V0zN7T_SBf16EZdwkL_bUovPOlPcOqoU/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"3"}
                            code={"MC470302"}
                            title={"Artificial Intelligence"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1ThEKAFLPz9_L6Lf507kDic93mCpeUAZE/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"3"}
                            code={"MC470303"}
                            title={"Object Oriented Programming using JAVA"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1hQTXNS3JPK1-Z1deC8L6Z847RnKQkUCo/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"3"}
                            code={"MC470304"}
                            title={"Internet of Things"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1m3ouhYcwRGPP7hHydH80rb3Xj0H-rUFd/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"3"}
                            code={"MC470305"}
                            title={"Machine Learning"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1cQRXm-MJlfYB-iV_3bG4njH3OMLU4HcA/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC470401"}
                            title={"Deep Learning"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                            url={"https://docs.google.com/document/d/1MN0ynoNDdA9rGgfE1NpfQGLJbX3SyGT2/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC470402"}
                            title={"Artificial Intelligence of Things"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1mK9ZvLJ9yJ-jtL4kvvDM7l-y7Nm_2BDk/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=truehttps://docs.google.com/document/d/1mK9ZvLJ9yJ-jtL4kvvDM7l-y7Nm_2BDk/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC470403"}
                            title={"Data Visualization"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1KvJJdpFISmfsb0O-CXoTHuhN1vy-pedn/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"4"}
                            code={"MC470404"}
                            title={"Web Programming"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1bL_DqI-5fok_ASsVCQyExhaX5lsdCgkm/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1hFe6SoFOcWWqS4HkUQHgGvjm7B26bfDe/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1YjSQzIx29EmbpiKI4x-GSuB5WjvD0M3k/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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
                            url={"https://docs.google.com/document/d/1jg9PPqH6WmQtegL9rtnJy2IJkS0qdcH0/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX11"}
                            title={"Explainable AI"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1aZiHyhEy2nrLFHXaG_KLxkqXb2J3upLD/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX12"}
                            title={"Information Retrieval"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1_6cVMA8fp6jVvjnSSgQfLLAvCg50RTZd/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX13"}
                            title={"Game Theory"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1Zi26rB-pzSgzCOqKcOPtYmmJMgz25H0u/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX14"}
                            title={"Augmented Reality (AR) and Virtual Reality (VR)"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1U6n8cOxRFribiEvtyGRP-JchdbYG-zdC/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX15"}
                            title={"Intrusion Detection"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1Be-Z3Uv4hymaVwV-gj5EDFwt8qiQCgp8/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX16"}
                            title={"Malware Analysis"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1wwHj6NEvCLClaS3ZVU3NDi4GZ9pAgzDi/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX17"}
                            title={"Digital Forensic"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1R7kdo8TmTLOp--zW39iwR7hUS3Jl20vf/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX18"}
                            title={"Text Analytics"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1ZKdLsQ24w1LwG5-1PDV5fTG8D5WyttFY/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX19"}
                            title={"Computer Vision"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1YonNhhVqGOgRvvPgpIzDEfY6MGf4h6Ev/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX20"}
                            title={"Reinforcement Learning"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1wUizdKt9hAIR-cK2SG0RnjjQXVBP8rV0/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX21"}
                            title={"Blockchain Technology"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1pvjzoUjBMIkUuG2Ci2yJOlHOlmbWMvHA/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX22"}
                            title={"Data Mining and Warehousing"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1XzeejKkbBSrUyVbpxXUzx-k24g_s8Hmg/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX23"}
                            title={"Recommendation Systems"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1CvKX3zJP4PFvydHEYtVl6JhjB7nHK-Gm/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX24"}
                            title={"Cloud Computing"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1Th2fRoTZES42Q4wC1sgy3WPNqv4YzTsI/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX25"}
                            title={"Image Processing Techniques"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1_GwbfJlaWvwMHGA6GNGIIBmU9tnfBxwS/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX26"}
                            title={"Computer System and Security"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1Ewv1FBngRA9PXZSZlo-7dqpm5Gm1dpQV/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX27"}
                            title={"Smart Agriculture"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1wyh2-VZXZqwusZ2paOGui8gialUe_Kiy/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX28"}
                            title={"Human Computer Interaction"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/15qZoKgaxzjk5MSHEEGvF4t-hZxO0Su0X/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
                        />
                        <SyllabusComp
                            dep={"CSE"}
                            sem={"EL"}
                            code={"MC47XX29"}
                            title={"Social IoT"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={"https://docs.google.com/document/d/1Vb88qKFjQ1Sc8Z55Tsf8JRizZdu5aSaZ/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
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

