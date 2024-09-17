"use client"

import BackDepartment from "../../../components/department/BackDepartment";
import { useState } from "react"


export default function Page() {
    const [ug, setUg] = useState(true);

    const [pg, setPg] = useState(false);
 
    const [phd, setphd] = useState(false);
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
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
                <BackDepartment navigate={"/Department/Humanities"} />
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mt-2 mb-10 flex space-x-1">
                    <button onClick={() => {
                        setUg(true);
                        setPg(false);
                        setphd(false);
                    }} className={`border border-black rounded ${(ug) ? "text-white bg-red-900" : "text-red-900"} px-2`}>UG & DD Course</button>
            
                    <button onClick={() => {
                        setUg(false);
                       
                        setPg(true);
                      
                        setphd(false);
                    }} className={`border border-black rounded ${(pg) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PG Course</button>
                    <button onClick={() => {
                        setUg(false);
                       
                        setPg(false);
                     
                        setphd(true);
                    }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PhD Course</button>
                    
                </div>
                {/* UG PROGRAM */}
                <div className={`mb-10 ${(ug == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">UG PROGRAM :-</div>
                    <div className="border grid grid-cols-12">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sr No.</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Branch</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-3 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>

                        <SyallbusComp
                            srno={"1"}
                            branch={"ME-UG & DD"}
                            sem={"1"}
                            code={"HS12101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"2"}
                            branch={"CE-UG & DD"}
                            sem={"1"}
                            code={"HS13101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"3"}
                            branch={"EE-UG & DD"}
                            sem={"1"}
                            code={"HS16101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"4"}
                            branch={"MA-DD"}
                            sem={"1"}
                            code={"HS17101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"5"}
                            branch={"MS&E-DD"}
                            sem={"1"}
                            code={"HS18101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"6"}
                            branch={"CE&T-DD"}
                            sem={"1"}
                            code={"HS19101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"7"}
                            branch={"M&AE-DD"}
                            sem={"1"}
                            code={"HS111101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"8"}
                            branch={"AR-UG"}
                            sem={"2"}
                            code={"HS21121"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"9"}
                            branch={"CSE-UG & DD"}
                            sem={"2"}
                            code={"HS24101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"10"}
                            branch={"ECE-UG & DD"}
                            sem={"2"}
                            code={"HS25101"}
                            title={"Communicative English"}
                            L={"3"} T={"0"} P={"2"}
                            cred={"4"}
                        />

                        <SyallbusComp
                            srno={"11"}
                            branch={"MA-UG & DD"}
                            sem={"2"}
                            code={"HS27101"}
                            title={"Science, Society and Ethical Values"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                        />

                        <SyallbusComp
                            srno={"12"}
                            branch={"MS&E-DD"}
                            sem={"2"}
                            code={"HS28101"}
                            title={"Science, Society and Ethical Values"}
                            L={"2"} T={"1"} P={"0"}
                            cred={"3"}
                        />

                        <SyallbusComp
                            srno={"13"}
                            branch={"CE&T-DD"}
                            sem={"2"}
                            code={"HS29101"}
                            title={"Science, Society and Ethical Values"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                        />

                        <SyallbusComp
                            srno={"14"}
                            branch={"CSE-UG & DD"}
                            sem={"3"}
                            code={"HS34151"}
                            title={"Social and Professional Ethics"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                        />

                        <SyallbusComp
                            srno={"15"}
                            branch={"ME-UG & DD"}
                            sem={"5"}
                            code={"HS52101"}
                            title={"Universal Human Values & Ethics"}
                            L={"2"} T={"0"} P={"0"}
                            cred={"2"}
                        />

                        <SyallbusComp
                            srno={"16"}
                            branch={"EE-UG & DD"}
                            sem={"5"}
                            code={"HS56101"}
                            title={"Professional Ethics"}
                            L={"2"} T={"0"} P={"0"}
                            cred={"2"}
                        />

                        <SyallbusComp
                            srno={"17"}
                            branch={"MS&E-DD"}
                            sem={"5"}
                            code={"HS58105"}
                            title={"Industrial Economics and Financial Management"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                        />

                        <SyallbusComp
                            srno={"18"}
                            branch={"All Branches"}
                            sem={"5"}
                            code={"OEHSXXX"}
                            title={"Open Elective-I"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                        />

                        <SyallbusComp
                            srno={"19"}
                            branch={"AR-UG"}
                            sem={"8"}
                            code={"HS81153"}
                            title={"Sociology and Building Economics"}
                            L={"2"} T={"0"} P={"0"}
                            cred={"2"}
                        />

                        <SyallbusComp
                            srno={"20"}
                            branch={"AR-UG & All DD Courses"}
                            sem={"8"}
                            code={"OEHSXXX"}
                            title={"Open Elective-II"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                        />



                    </div>
                    <div className={`mb-10 mt-3`}>
                    <div className="text-gray-500 font-semibold lg:text-xl text-xs mb-5 ml-3">List of Open Elective-I & II</div>
                    <div className="border grid grid-cols-11">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sr no.</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                        <SyllabusComp
                            srno={"1"}
                            code={"OEHSXXX"}
                            title={"Industrial Economics and Financial Management"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            srno={"2"}
                            code={"OEHSXXX"}
                            title={"Organisational Behaviour & Industrial Psychology"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />
                        <SyllabusComp
                            srno={"3"}
                            code={""}
                            title={"History of Science & Technology"}
                            L={""} T={""} P={""}
                            cred={""}
                            url={""}
                        />
                        <SyllabusComp
                            srno={"4"}
                            code={""}
                            title={"Introduction to Intellectual Property Rights"}
                            L={""} T={""} P={""}
                            cred={""}
                            url={""}
                        />
                        <SyllabusComp
                            srno={"5"}
                            code={""}
                            title={"Business Environment & Indian Economy"}
                            L={""} T={""} P={""}
                            cred={""}
                            url={""}
                        />

                    </div>
                </div>
                </div>
              
      
                <div className={`mb-10 ${(pg == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PG PROGRAM :-</div>
                    <div className="border grid grid-cols-12">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sr no.</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Branch</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-3 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>

                        <SyallbusComp
                            srno={"1"}
                            branch={"MCA-DS &I"}
                            sem={"1"}
                            code={"MC460104"}
                            title={"Technical Communication"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={""}
                        />
                        <SyallbusComp
                            srno={"2"}
                            branch={"MCA-AI & IOT"}
                            sem={"1"}
                            code={"MC470104"}
                            title={"Technical Communication"}
                            L={"2"} T={"0"} P={"2"}
                            cred={"3"}
                            url={""}
                        />

                    </div>
                </div>
                {/* PhD  */}
                <div className={`mb-10 ${(phd == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PhD PROGRAM :-</div>
                    <div className="border grid grid-cols-11">
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sr no.</div>
                        <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                        <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                        <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                        <SyllabusComp
                            srno={"1"}
                            code={"PDMEXX01 / PDHSXX01"}
                            title={"Research Methodology"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"2"}
                            code={"PDHSXX02"}
                            title={"Seminar and Technical Report Writing"}
                            L={"0"} T={"0"} P={"3"}
                            cred={"2"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"3"}
                            code={"PDHSXX03"}
                            title={"Comprehensive Viva"}
                            L={"-"} T={"-"} P={"-"}
                            cred={"1S"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"4"}
                            code={"PDHSXX04"}
                            title={"Research Seminar"}
                            L={"-"} T={"-"} P={"-"}
                            cred={"4S"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"5"}
                            code={"PDHSXX05"}
                            title={"Human Resource Management"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"6"}
                            code={"PDHSXX06"}
                            title={"Industrial Relations and Labour Legislations"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"7"}
                            code={"PDHSXX07"}
                            title={"Introduction to British Romantic Poetry"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"8"}
                            code={"PDHSXX08"}
                            title={"Twentieth Century Poetry"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"9"}
                            code={"PDHSXX09"}
                            title={"Twentieth Century Novel/Short Story and Drama"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"10"}
                            code={"PDHSXX10"}
                            title={"Introduction to Non-British Literature in English"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"11"}
                            code={"PDHSXX11"}
                            title={"Advanced Microeconomics"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"12"}
                            code={"PDHSXX12"}
                            title={"Advanced Macroeconomics"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"13"}
                            code={"PDHSXX13"}
                            title={"Intellectual Property Rights"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"14"}
                            code={"PDHSXX14"}
                            title={"Indian Rural Development"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"15"}
                            code={"PDHSXX15"}
                            title={"Sociology: Development & Environment"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"16"}
                            code={"PDHSXX16"}
                            title={"Econometrics"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"17"}
                            code={"PDHSXX17"}
                            title={"Postcolonial Literature"}
                            L={"3"} T={"0"} P={"0"}
                            cred={"3"}
                            url={""}
                        />

                        <SyllabusComp
                            srno={"18"}
                            code={"PDHSXX18"}
                            title={"Computer Application Lab"}
                            L={"0"} T={"0"} P={"6"}
                            cred={"4"}
                            url={""}
                        />


                    </div>
                </div>
       
            </div>
        </div>
    )
}

function SyallbusComp({ srno, branch, sem, code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{srno}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{branch}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{sem}</div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <a href={url} className="col-span-3 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer">{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}
function SyllabusComp({ srno, code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{srno}</div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <a href={url} className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer">{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}