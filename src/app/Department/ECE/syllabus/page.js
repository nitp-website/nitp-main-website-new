"use client"

import BackDepartment from '../../../components/department/BackDepartment';
import { useState } from 'react';

function SyllabusComp({ dept, sem, code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{dept}</div>
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

function Page() {
    const [ug, setUg] = useState(true);
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
                <div className="mt-1 lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Electronics and Communications Engineering
                    </p>
                </div>
                <BackDepartment navigate={'/Department/ECE'}/>
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
                            setUg(true);
                            setPg(false);
                            setdual(false);
                            setphd(false);
                        }} className={`border border-black rounded ${(ug) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Course</button>
                        <button onClick={() => {
                            setUg(false);
                            setPg(true);
                            setdual(false);
                            setphd(false);
                        }} className={`border border-black rounded ${(pg) ? "text-white bg-red-900" : "text-red-900"} px-2`}>M.Tech Course</button>
                        <button onClick={() => {
                            setUg(false);
                            setPg(false);
                            setdual(false);
                            setphd(true);
                        }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PhD Course</button>
                        <button onClick={() => {
                            setUg(false);
                            setPg(false);
                            setdual(true);
                            setphd(false);
                        }} className={`border border-black rounded ${(dual) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual Degree</button>
                    </div>
                    {/* UG PROGRAM 2022*/}
                    <div className={`mb-10 ${(ug == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">UG Course :-</div>
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
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"HS1501"}
                                    title={"Science Society and Ethics"}
                                    L={"2"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/hs1052.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"MA1501"}
                                    title={"Engineering Mathematics-1"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ma12.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"CH1501"}
                                    title={"Engineering Chemistry"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ch1.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"EC1501"}
                                    title={"Elements of Electronics Engineering"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ec1.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"EE1501"}
                                    title={"Elements of Electrical Engineering"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ee1.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"CHL1501"}
                                    title={"Chemistry Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/chl1.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"ECL1501"}
                                    title={"Elements of Electronics Engg Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ecl1.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"EEL1501"}
                                    title={"Elements of Electrical Engg lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/egl1.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"ME1501"}
                                    title={"Engineering Graphics Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"2"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/egl1.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"1"}
                                    code={"EAA1501"}
                                    title={"EAA-Swachha Bharat Mission"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"HS2501"}
                                    title={"Communicative English"}
                                    L={"2"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/hs2.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"MA2501"}
                                    title={"Engineering Mathematics-II"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ma22.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"PH2501"}
                                    title={"Engineering Physics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ph2.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"CS2501"}
                                    title={"Introduction to Computing"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/cs2.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"EC2501"}
                                    title={"Semiconductor Devices and Circuits"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ec2.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"HSL2501"}
                                    title={"Language Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/hsl2.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"PHL2501"}
                                    title={"Physics Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/phl2.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"CSL2501"}
                                    title={"Computing Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/csl2.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"ECL2501"}
                                    title={"Semiconductor Devices and Circuits Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ecl2.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"2"}
                                    code={"EAA2501"}
                                    title={"EAA Sports/Innovative Projects"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"EC3501"}
                                    title={"Communication Engineering"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ce3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"EC3502"}
                                    title={"Electromagnetic Field Theory"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/eft3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"EC3503"}
                                    title={"Signals and Systems Analysis"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ssa3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"CS3501"}
                                    title={"Data Structure"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/cs3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"MA3501"}
                                    title={"Engineering Mathematics-III"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ma3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"EE3501"}
                                    title={"Network Analysis and Synthesis"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/nas3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"ECL3501"}
                                    title={"Analog Electronics Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ael3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"CSL3501"}
                                    title={"Data Structure Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/csl3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"3"}
                                    code={"ECL3502"}
                                    title={"Signal and System Analysis Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ssal3.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"4"}
                                    code={"EC4501"}
                                    title={"Digital Electronics"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/de4.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"4"}
                                    code={"EC4502"}
                                    title={"Communication Engineering"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/cs4.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"4"}
                                    code={"CS4501"}
                                    title={"Object Oriented Programming"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/oop4.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"4"}
                                    code={"EC45xx"}
                                    title={"Professional Electives-I"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/pe5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"4"}
                                    code={""}
                                    title={""}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"4"}
                                    code={"OE0xxx"}
                                    title={"Open Electives-I"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/OpenE.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"4"}
                                    code={"ECL4501"}
                                    title={"Digital Electronics Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/del4.docx"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"4"}
                                    code={"ECL4502"}
                                    title={"Communication Engineering Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/cel4.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"EC5501"}
                                    title={"VLSI Design"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/vlsi5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"EC5502"}
                                    title={"Advanced Communication Engineering"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ace5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"EC5503"}
                                    title={"Microprocessor & Microcontroller"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/mm5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"EC55xx"}
                                    title={"Professional Elective - II"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/pe5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"CH5501"}
                                    title={"Green Technology"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/gt5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"OE0xxx"}
                                    title={"Open Electives - II"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/OpenE.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"ECL5501"}
                                    title={"VLSI Design Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/vlsil5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"ECL5502"}
                                    title={"Advanced Communication Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/acl5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"5"}
                                    code={"ECL5503"}
                                    title={"Microprocessor & Microcontroller Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/mml5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"6"}
                                    code={"EC6501"}
                                    title={"Digital Signal Processing"}
                                    L={"3"}
                                    T={"1"}
                                    P={"0"}
                                    cred={"4"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/dsp6.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"6"}
                                    code={"EC6502"}
                                    title={"Antenna And Wave Propagation"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/awp6.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"6"}
                                    code={"EC65xx"}
                                    title={"Professional Elective - III"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/pe5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"6"}
                                    code={"EC65xx"}
                                    title={"Professional Elective - IV"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/pe5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"6"}
                                    code={"-"}
                                    title={""}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"6"}
                                    code={"OE0xxx"}
                                    title={"Open Elective - III"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/OpenE.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"6"}
                                    code={"ECL6501"}
                                    title={"Digital Signal Processing Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"6"}
                                    code={"ECL6502"}
                                    title={"Antenna And Wave Propagation Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/rf.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"7"}
                                    code={"EC7501"}
                                    title={"RF and Microwave Engineering"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"7"}
                                    code={"EC7502"}
                                    title={"Embedded System Design"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"7"}
                                    code={"EC75xx"}
                                    title={"Professional Elective - V"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/pe5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"7"}
                                    code={"EC75xx"}
                                    title={"Open Elective - V"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/OpenE.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"7"}
                                    code={"EC7503"}
                                    title={"Seminar and Technical Report Writing"}
                                    L={""}
                                    T={""}
                                    P={""}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"7"}
                                    code={"ECL7501"}
                                    title={"RF and Microwave Engineering Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/rfl.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"7"}
                                    code={"EC7504"}
                                    title={"Short term industrial research Experience"}
                                    L={""}
                                    T={""}
                                    P={""}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"7"}
                                    code={"EC7505"}
                                    title={"Project-I"}
                                    L={""}
                                    T={""}
                                    P={""}
                                    cred={"5"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"8"}
                                    code={"EC8501"}
                                    title={"Optical and Wireless Communication"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"8"}
                                    code={"EC85xx"}
                                    title={"Professional Elective - VI"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/pe5.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"8"}
                                    code={"EC8502"}
                                    title={"Seminar and Technical Report Writing"}
                                    L={""}
                                    T={""}
                                    P={""}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"8"}
                                    code={"EC8503"}
                                    title={"Comprehensive Viva"}
                                    L={""}
                                    T={""}
                                    P={""}
                                    cred={"2"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"8"}
                                    code={"ECL8501"}
                                    title={"Optical and Wireless Communication Lab"}
                                    L={"0"}
                                    T={"0"}
                                    P={"3"}
                                    cred={"1"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"8"}
                                    code={"EC8504"}
                                    title={"Project-II"}
                                    L={""}
                                    T={""}
                                    P={""}
                                    cred={""}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx510"}
                                    title={"Electronic Instrumentation"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/eipe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx511"}
                                    title={"Computer Organization and Architecture"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/coape.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx512"}
                                    title={"Semiconductor Device Modeling"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/sdmpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx513"}
                                    title={"Linear Integrated Circuits"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/licpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx514"}
                                    title={"Pulse and Digital Switching Circuits"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/pdswpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx515"}
                                    title={"Control System"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/cspe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx516"}
                                    title={"Sensors and Transducers"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx517"}
                                    title={"Telecommunication Switching Networks"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx518"}
                                    title={"Computer Communication"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx519"}
                                    title={"Statistical Signal Processing"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx520"}
                                    title={"IoT for Communication Engineering"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx521"}
                                    title={"Wireless Sensor Networks"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx522"}
                                    title={"Optoelectronics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/wsnpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx523"}
                                    title={"Biomedical Signal Processing"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx524"}
                                    title={"Digital Image Processing"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/dippe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx525"}
                                    title={"MIMO Communications"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx526"}
                                    title={"Computer Vision and its applications"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx527"}
                                    title={"Artificial Intelligence and Machine Learning"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx528"}
                                    title={"Information Theory and Coding"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/itcpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx529"}
                                    title={"Digital System Design"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx530"}
                                    title={"Low Power Techniques in VLSI Design"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/lptpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx531"}
                                    title={"Analysis and Design of Digital ICs"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx532"}
                                    title={"RF Circuit Design"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/rfpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx533"}
                                    title={"Micro Electro Mechanical Systems"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx534"}
                                    title={"Optical Networks and Photonic Switches"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx535"}
                                    title={"Satellite Communication"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/scpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx536"}
                                    title={"Analog VLSI Design"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/ape.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx537"}
                                    title={"Electromagnetic Interference and Compatibility"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx538"}
                                    title={"VLSI Technology"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx539"}
                                    title={"Speech Processing"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/sppe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx540"}
                                    title={"Optimization Techniques"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx541"}
                                    title={"Communication Network Security"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx542"}
                                    title={"Power Electronics"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={""}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx543"}
                                    title={"Nano Electronic Devices"}
                                    L={"3"}
                                    T={"0"}
                                    P={"0"}
                                    cred={"3"}
                                    url={"https://web.nitp.ac.in/dept/ece/syllabus/nedpe.docx"}
                                />

                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={"EL"}
                                    code={"ECx544"}
                                    title={"Detection And Estimation Theory"}
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
                                    dept={"ECE"}
                                    sem={"-"}
                                    code={"-"}
                                    title={"-"}
                                    L={"-"} T={"0"} P={"0"}
                                    cred={"-"}
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
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Research Methodology"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Seminar and Technical report Writing"}
                                    L={"0"} T={"0"} P={"3"}
                                    cred={"2"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Comprehensive Viva & Presentation"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Course -I"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Course -II"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Lab Course"}
                                    L={"0"} T={"0"} P={"6"}
                                    cred={"4"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Course -III"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Course -IV"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                />
                                <SyllabusComp
                                    dept={"ECE"}
                                    sem={""}
                                    code={"xxxx"}
                                    title={"Course -V"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                />
                            </div>
                        </div>
                    </div>
                    {/* dual degree */}
                    <div className={`mb-10 ${(dual == false) ? "hidden" : ""}`}>
                        <div className=" overflow-x-auto">
                            <p>
                                Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design (5 Years, Bachelor and Master of Technology (Dual Degree))
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Page