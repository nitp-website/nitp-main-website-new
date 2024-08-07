"use client"

import BackDepartment from "../../../../components/BackDepartment";
import { useState } from "react"


export default function Page() {
    const [ug, setUg] = useState(true);
    const [ug21, setUg21] = useState(false);
    const [pg, setPg] = useState(false);
    const [dual, setdual] = useState(false);
    const [phd, setphd] = useState(false);
    return (
        <div className=" flex flex-col p-10 max-sm:p-2">
            <div className="flex flex-col mb-2">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className=" lg:mt-2">
                    <p className="text-gray-500 lg:text-base font-semibold">
                        Humanities & Social Sciences
                    </p>
                </div>
            <BackDepartment navigate={"/Department/Humanities"}/>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mt-2 mb-10 flex space-x-1">
                    <button onClick={() => {
                        setUg(true);
                        setUg21(false);
                        setPg(false);
                        setdual(false);
                        setphd(false);
                    }} className={`border border-black rounded ${(ug) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Course</button>
                    <button onClick={() => {
                        setUg(false);
                        setUg21(true);
                        setPg(false);
                        setdual(false);
                        setphd(false);
                    }} className={`border border-black rounded ${(ug21) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG Course-2021</button>
                    <button onClick={() => {
                        setUg(false);
                        setUg21(false);
                        setPg(true);
                        setdual(false);
                        setphd(false);
                    }} className={`border border-black rounded ${(pg) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PG Course</button>
                    <button onClick={() => {
                        setUg(false);
                        setUg21(false);
                        setPg(false);
                        setdual(false);
                        setphd(true);
                    }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PhD Course</button>
                    <button onClick={() => {
                        setUg(false);
                        setUg21(false);
                        setPg(false);
                        setdual(true);
                        setphd(false);
                    }} className={`border border-black rounded ${(dual) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Dual Degree</button>
                </div>
                {/* UG PROGRAM */}
                <div className={`mb-10 ${(ug == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">UG PROGRAM :-</div>
                    <div className="border grid grid-cols-12">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                        
                        <SyallbusComp
                            dep={""}
                            sem={""}
                            code={""}
                            title={""}
                            L={""} T={""} P={""}
                            cred={""}
                            url={""}
                        />
                    
                    </div>
                </div>
                <div className={`mb-10 ${(ug21 == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">UG PROGRAM-2021 :-</div>
                    <div className="border grid grid-cols-12">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                        
                        <SyallbusComp
                            dep={""}
                            sem={""}
                            code={""}
                            title={""}
                            L={""} T={""} P={""}
                            cred={""}
                            url={""}
                        />
                    
                    </div>
                </div>
                {/* PG PROGRAM  */}
                <div className={`mb-10 ${(pg == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PG PROGRAM :-</div>
                    <div className="border grid grid-cols-12">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                        
                        <SyallbusComp
                            dep={""}
                            sem={""}
                            code={""}
                            title={""}
                            L={""} T={""} P={""}
                            cred={""}
                            url={""}
                        />

                    </div>
                </div>
                {/* PhD  */}
                <div className={`mb-10 ${(phd == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PhD PROGRAM :-</div>
                    <div className="border grid grid-cols-12">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                        <SyallbusComp
                            dep={""}
                            sem={""}
                            code={""}
                            title={""}
                            L={""} T={""} P={""}
                            cred={""}
                            url={""}
                        />
                        
                    </div>
                </div>
                {/* Dual PROGRAM  */}
                <div className={`mb-10 ${(dual == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">DUAL DEGREE PROGRAM :-</div>
                    <div className="border grid grid-cols-12">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                        <SyallbusComp
                            dep={""}
                            sem={""}
                            code={""}
                            title={""}
                            L={""} T={""} P={""}
                            cred={""}
                            url={""}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

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
