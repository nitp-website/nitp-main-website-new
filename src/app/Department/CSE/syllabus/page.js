"use client"

import BackDepartment from "../../../components/department/BackDepartment";
import { useState } from "react"
import normalizeGoogleDriveUrl from "../../../../utils/normalizeUrl";



export default function Page() {
    const [ug, setUg] = useState(false);
    const [ug2021, setUg2021] = useState(false);
    const [dualCyber, setDualCyber] = useState(false);
    const [phd, setPhd] = useState(false);
    const [ug2022, setUg2022] = useState(true);
    const [dualData, setDualData] = useState(false);
    const [mcad, setmcad] = useState(false);
    const [mcaai, setmcaai] = useState(false);
    const [pgd, setPgd] = useState(false);
    const [pgc, setPgc] = useState(false);
    const [ugai_ds, setUgai_ds] = useState(false);
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="text-3xl font-bold text-red-800 mb-6">
                    SYLLABUS
                </div>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10 flex space-x-1 overflow-x-auto ">
                    <div className="min-w-[800px] flex space-x-1 text-sm lg:text-base">
                        <button onClick={() => {
                            setUgai_ds(false);
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
                        }} className={`border border-black rounded ${(ug2022) ? "text-white bg-red-900" : "text-red-900"} px-2`}>B.Tech (Computer Science and Engineering)</button>
                        <button onClick={() => {
                            setUgai_ds(true);
                            setUg2021(false);
                            setDualCyber(false);
                            setPhd(false);
                            setDualData(false);
                            setUg2022(false);
                            setPgc(false);
                            setPgd(false);
                            setmcad(false)
                            setmcaai(false)
                            setUg(false)
                        }} className={`border border-black rounded ${(ugai_ds) ? "text-white bg-red-900" : "text-red-900"} px-2`}>B.Tech (Artificial Intelligence & Data Science)</button>
                        <button onClick={() => {
                            setUgai_ds(false);
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
                            setUgai_ds(false);
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
                            setUgai_ds(false);
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
                            setUgai_ds(false);
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
                            setUgai_ds(false);
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
                        }} className={`border border-black rounded ${(mcad) ? "text-white bg-red-900" : "text-red-900"} px-2`}>MCA with specialization in Data Science & Informatics</button>
                        <button onClick={() => {
                            setUgai_ds(false);
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
                        }} className={`border border-black rounded ${(mcaai) ? "text-white bg-red-900" : "text-red-900"} px-2`}>MCA with specialization in AI & IoT</button>
                        <button onClick={() => {
                            setUgai_ds(false);
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
                    </div>
                </div>
                {/* dual degree data science */}
                <div className={`mb-10 ${(dualData == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8"> B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science):-</div>
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
                                title={"MOOC-I"}
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
                                title={"MOOC-II"}
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
                                sem={"7"}
                                code={"CS74130"}
                                title={"Industrial Training"}
                                L={""}
                                T={""}
                                P={""}
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
                                sem={"9"}
                                code={"CS94133"}
                                title={" Research Project (to be continued in 10th Sem) /Internship  "}
                                L={"0"}
                                T={"0"}
                                P={"40"}
                                cred={"20"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"10"}
                                code={"CS104134"}
                                title={"Research Project (to be continued in 10th Sem) /Internship"}
                                L={"0"}
                                T={"0"}
                                P={"40"}
                                cred={"20"}
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

                {/**B.Tech (Artificial Intelligence and Data Science) */}

                <div className={`mb-10 ${(ugai_ds == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">B.Tech (Artificial Intelligence & Data Science):-</div>
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
                                code={"CS010201"}
                                title={"Programming in C"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/13Mm5_MvJ-a0wn1-HSqmg4BhLPUEAe2g7/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"MCT"}
                                sem={"1"}
                                code={"MC010201"}
                                title={"Mathematical Foundation for AI"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1VUsFUlrrmXHypdGGeahvirO0NSJxIMhb/view"}
                            />
                            <SyllabusComp
                                dep={"ME"}
                                sem={"1"}
                                code={"ME010201"}
                                title={"Engineering Graphics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1qnkkblnhVCWdFdIk4mYVWhY3EpgTBRX0/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"ECE"}
                                sem={"1"}
                                code={"EC010201"}
                                title={"Digital Design"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1ExNsVTYlOEAug4fYFVixfMjkJvuuUiGF/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"HSS"}
                                sem={"1"}
                                code={"HS010201"}
                                title={"Professional Communication and Technical Writing"}
                                L={"2"}
                                T={"1"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1EBtfdou__5PAHZRyUnrD6E16U1DtFQhS/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"EA010201"}
                                title={"EAA-II Swachha Bharat Mission (SBM)"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS020201"}
                                title={"Introduction of Data Science"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/10p_Dn1D36l7PyFa0ieEAc7myKSL5AS-R/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS020202"}
                                title={"Software Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1OFZuEfroQ4vBq5jeQOD2Vx-FeAonQPqZ/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"APME"}
                                sem={"2"}
                                code={"PH020201"}
                                title={"Engineering Physics"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1BffCTV8iP593uBKtxburfsGrbukVtdLw/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS020203"}
                                title={"Computer Organization"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1y3MJahUawZsk68XIYI0z0oLXVmSRDd0Q/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"MCT"}
                                sem={"2"}
                                code={"MC020201"}
                                title={"Probability and Statistics for AI"}
                                L={"3"}
                                T={"1"}
                                P={"0"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1wUtfg4rRTkEn8_egKOlwo_sNZEVxJEon/view?usp=drive_open"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"EA020201"}
                                title={"EAA - I Sports/Innovative Project/NCC/NSS"}
                                L={"0"}
                                T={"0"}
                                P={"2"}
                                cred={"1"}
                                url={"#"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS030201"}
                                title={"Data Structures"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1khCncJlIsPOku6SCIEi_odxFPq4x4u_j/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS030202"}
                                title={"Python for AI and Data Science"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1qvKoFtnnD6XWUPw-R0cF4wBhUTPjNjEE/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS030203"}
                                title={"Database Management Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1qDy7YFEhaK2GhoaHtsOAFtIudexbI06C/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS030204"}
                                title={"Discrete Mathematics and Graph Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1lPH2omL5rMGZu8Xg4tDLzL7xsdalLOdt/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS030205"}
                                title={"Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/11xFzkgdSlaS7JNkd5Sfm-wCRVjfnOYqW/view"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS040201"}
                                title={"Artificial Intelligence"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1sc_bhjeEChp6zsfRY6LKXIWi-v4ULyrZ/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS040202"}
                                title={"Optimization Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1-uE5oL4sCt0vCu6IFQ7rT30bWvhhQk6o/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS040203"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1pQbf__KButeCk94zIAyv_mJuVMaytM2B/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS040204"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1-YQP7IyM-LLu_kWVKv4K2AHk6SCY3Kcm/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS0402XX"}
                                title={"Deptt. Elective-I"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS040205"}
                                title={"Professional Ethics and AI"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1jaUplWDA0sHNQG6kN_Q9zZVK15_7Rc9O/view"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS050201"}
                                title={"Computer Networks"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/13-axVprOVboJuUwSs4mDdjWtS6zEnGGy/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS050202"}
                                title={"Natural Language Processing"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1UK7jutsUWYB87byEDROTm6EzxNOdkIPE/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS050203"}
                                title={"Machine Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1Mz49yv4zOVw1i0HeA-nbpals0XUvUtVm/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS050204"}
                                title={"Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1AuBWEe5TQS5Kixh0kTbed8Uqb07NAT2f/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"OP0502XX"}
                                title={"Open Elective -I"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS0502XX"}
                                title={"Dept. Elective - II / MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"#"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS060201"}
                                title={"Pattern and Visual Recognition"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1zOvjjKtKynRowA_cOxkzJ3r57mSpkFd0/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS060202"}
                                title={"Deep Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1FVi6_82Vt2OTBRxx-3lTWuvGqqV0exxY/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS0602XX"}
                                title={"Dept. Elective - III"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS0602XX"}
                                title={"Dept. Elective - IV /MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"6"}
                                code={"CS060203"}
                                title={"Project"}
                                L={"0"}
                                T={"0"}
                                P={"12"}
                                cred={"6"}
                                url={"#"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS070201"}
                                title={"Generative AI"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/1NL5-7iCcQMjMS5SqIEkMAAxlISqIZUyI/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS070202"}
                                title={"Reinforcement Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://drive.google.com/file/d/19DLnaPVfvcoHd1egno540NYq-q3MnEO1/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS0702XX"}
                                title={"Dept Elective -V"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS0702XX"}
                                title={"Dept Elective -VI/ MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS070203"}
                                title={"Industrial Training"}
                                L={"-"}
                                T={"-"}
                                P={"-"}
                                cred={"2"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"7"}
                                code={"CS070204"}
                                title={"Research Project - I"}
                                L={"0"}
                                T={"0"}
                                P={"8"}
                                cred={"4"}
                                url={"#"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS080201"}
                                title={"Research Project - II*"}
                                L={"0"}
                                T={"0"}
                                P={"36"}
                                cred={"18"}
                                url={"#"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"8"}
                                code={"CS080202"}
                                title={"Comprehensive Viva Voce"}
                                L={"-"}
                                T={"-"}
                                P={"-"}
                                cred={"2"}
                                url={"#"}
                            />

                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0231"}
                                title={"Statistical Learning Theory"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1skN-BZcUxd2Qur0CUTZlv36T0Udn37wk/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0232"}
                                title={"Kernel Methods for ML"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1rE3vY0kVedepbTgzO3vOLXZBgof2tqgV/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0233"}
                                title={"Bayesian Data Analysis"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1LJXZ8wbdnHxA6t_5WuyZvBbR4qJqgHqk/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0234"}
                                title={"Nonlinear Control Techniques"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1lFLrF7bqN1-WNTj5U1WSNjR0iV1T7lbD/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0235"}
                                title={"Game Theory and Mechanism Design"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/147VuhEy8pK-JRhsIwzz4aXQMf34cmdWg/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0236"}
                                title={"Submodular Functions"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1JgtIMCuPx1jTI6ntGjE75niYsVNsMBkD/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0237"}
                                title={"Explainability in AI"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1vryf2AYXOPSE0OdQCvSMjJzZ60rKfSGc/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0238"}
                                title={"Theory of Learning and Kernel Methods"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/13yah0GA4Dk9COuL6ROnm_L8HyvIAM7Ay/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0239"}
                                title={"Probability in Computing"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1vJsIkilCq49iZbXWFPwqRvkijUJXUAEw/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0240"}
                                title={"Information Retrieval"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ZkGgxM_oRXTN5g50-zMrgVFZOi3UjIlf/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0241"}
                                title={"Advanced Topics in Natual Language Processing"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1B3ayTi_swZ_m_42TSVK1T_ZGFTX6AcKa/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0242"}
                                title={"Time Series Analysis"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1HkEw-M6VNImXnEAttiWvU8tJXlFLKI9w/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0243"}
                                title={"Video Content Analysis"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1_0ouhINevL_onSMt5PT4DrYcy6QfzbdK/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0244"}
                                title={"Digital Image Processing"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1t7rGpyjkYsKgvhHjQCjBIpsly4MF1MXO/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0245"}
                                title={"Fraud Analytics Using Predictive and Social Network Techniques"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/16BpLH7bLrLjnfiP40UgDLn32dkZnzktC/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0246"}
                                title={"Data Mining"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1JSc_FJErBkbh-4yNy3NceOJKuYRJ3j2h/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0247"}
                                title={"Text-to-Speech Systems for Indian Languages"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1O8gJApDRqJxeigIXrBpogmknVQSaQMVV/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0248"}
                                title={"Advanced Topics in Machine Learning"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1EBe9I34LomVdlTAQ0OiRdolwZfhAwIC4/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0249"}
                                title={"Visual Big Data Analytics"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/17m6m_ZBUdSfppKUKEj4RnwhtZMFqfgh0/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0250"}
                                title={"Distributed Computing"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1vK72Cu3NU-ABuB6ndP7FUQgNQMU1-yyK/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0251"}
                                title={"Sclable Algorithms for data Analysis"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/12mbblq9ZAGlL2xgGxjHBPOIvUJiX3UPu/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0252"}
                                title={"Algebro-Geometric Methods in Data Analysis: Theory, Applications and Algorithms"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1szGmC1naJro0HOfjL4ldu5aeOuGnq1Mo/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0253"}
                                title={"Tensor: Techniques, Algorithms and Applications"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1zS30DNC5QuuRKnNHlGSWlMv_RmsViW_o/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0254"}
                                title={"Mobile Robotics"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/12p7IuxLSoQJ4CI3nwgbxmKXngtsVxSym/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0255"}
                                title={"Artificial Intelligence in Biomedicine and Healthcare"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1f8_rzTcZsBwCgrLvx04NRsDawNAgItl4/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0256"}
                                title={"Machine Learning for Bioinformatics"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1gzZG2wuG_737j2TvLfiwtzLlkf66Pgya/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0257"}
                                title={"Statistical Inference Methods in Bioengineering"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1YIEre7kkR-Swi7BDcA4EJo_jxqEoTPiF/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0258"}
                                title={"Autonomous Navigation"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1SCqKX_z_veqMTmk19rGrB5oBDwpwrnxz/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0259"}
                                title={"Theoritical and Computational Neuroscience"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ZVB3Pm7TcLtUDfQahX6rSt2bpIqdWbCS/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0260"}
                                title={"Cyber Security and AI"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1XOGEe7aKN8aGJuVz6TvkZbMoxCRwUlLw/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0261"}
                                title={"Information Theory and Coding"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1wxWshnA6C23HGLZyzGVEZGT6GR1WNUNF/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0262"}
                                title={"Digital Signal Processing"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/13RAOAUycnVuREAoqP67YJtq1YtwMDTkC/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0263"}
                                title={"Advanced DSP"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1kEqAWAI69OLSSRRiccxxJouXU1tTmpvG/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0264"}
                                title={"Speech Processing"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1i0mF0B1M4_SQX-GKZlVBaSxRT5iRwIRr/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0265"}
                                title={"Predictive Analysis"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1JvuJ_tNSRTVevHGf8-3PYduKlNiBf6GQ/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0266"}
                                title={"Robotics"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1P_7LblfzNKA08sm2zmi69jDJ0ZGtv2-G/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0267"}
                                title={"Probabilistic Graphical Models"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/14loj0HYGX2s2yuK5dsE3eIKwTrlIsY-3/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0268"}
                                title={"Autonomous MultiAgent Systems"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1DYD-WD-MJNUAX90KmpTOzXGF-nAlF7MS/edit?rtpof=true"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0269"}
                                title={"Security Analytics"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1yonNyL6zERcSQLa35LESqyVPArSrqlIY/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0270"}
                                title={"Computer Graphics"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1_d2dIzKjCoGTR9cnOHZqIBLGB3IzvYeu/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0271"}
                                title={"Biomedical Image Processing & Analysis"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1cku_wT-YrKqcaPFyHgfPHISkWBwTvWO1/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0272"}
                                title={"Affective Computing and Interaction"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1TiFcUl483xO9nmR4YITSkJG8_47W_kTy/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0273"}
                                title={"Multimedia Surveillance Systems"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Luzys3e9j_EIYiyENXtf_YVqvWyorLX3/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0274"}
                                title={"IOT"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ulciljqhlkGQjUv7lbs328UZd6frQ2fW/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0275"}
                                title={"Design of Conversational Experiences"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1z7RiCvrIsyINXfdeDuRUdZrMMicGbuJv/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0276"}
                                title={"Edge AI and Federated Learning"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ed0rtiJPLH8hFsRwgh1K5EvTN4DVTBnL/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0277"}
                                title={"MLOps"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1WBsM-BL6fNY6aHZKJO6gx_y3sJDcsI3c/edit?rtpof=true&tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0278"}
                                title={"Big Data Systems"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1CFCGCCZDwTNevXj3F4VQSfIB7tDBvvUd/view?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0279"}
                                title={"Computer Vision"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1CDWBI3fHKvX8vs0L3yCJChOpwvWmyslX/view?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"Elective"}
                                code={"CSXX0280"}
                                title={"AI Security and Ethics"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ThpmwSqen5PZDjOjfdJly_p_5lDfyl7v/view?tab=t.0"}
                            />
                        </div>
                    </div>
                </div>

                {/**B.Tech (Computer Science and Engineering) */}
                <div className={`mb-10 ${(ug2022 == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">B.Tech(Computer Science and Engineering):-</div>
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
                                url="https://docs.google.com/document/d/10LKdSo8w-A2EsIh5NIOZFVjy4CtZX-Vq/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://drive.google.com/file/d/1vqv7bi5wbPk80c3eIBpxRJBtrIt_IZAs/view?usp=drivesdk"
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
                                url="https://drive.google.com/file/d/1_849FlFORiBMwbo2vQA_gzetoJDDP-iH/view?usp=drivesdk"
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
                                url="https://docs.google.com/document/d/1ngT0zmqppXtHzvjIPnn2-9c-_1Sd3RjA/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1FemjSAeB-JtHvH28B6c0YziLut5DqPtc/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1j_Nbng2Th95csKOydw4pndfpQ1uNlywh/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://drive.google.com/file/d/1hL-bynZFDZFWZ5QpUPNjKfemB62lV3W_/view?usp=drivesdk"
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
                                url="https://docs.google.com/document/d/1SnZkEaSWpkA7trG7UcnfN5K58A4Ac2YY/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url=""
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
                                url=""
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
                                url="https://docs.google.com/document/d/1OPdWbOD5gF7IUKplhow4if1ICJuToAYX/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1nrio72JG5cOHG55BxfDMReZIrIZAvwKt/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1_q02qMFZyMXMkN7Z7VR-PMwIP0bvh9zJ/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/10AhQkjov0iSJ1nbZmSoatLJKe2PzKYjR/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1e3qHzoQGIlWngv4DQ3HFjU3xFa3tC2Wb/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url=""
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
                                url="https://docs.google.com/document/d/1lloVmthAUzQq0B6OU4J5Mcdcx9Se0zhI/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1GBPyaWjitwSdLnkKrqkt62F4rBDiIGbJ/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/18BcEz9pVXxCe26EyUnAPHvvVef1CCb1m/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1FJKjJt08RINoTXY6ZwR-q70Qbp8sjTBC/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url=""
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
                                url="https://docs.google.com/document/d/1193uRmx_xLvrarJuVlCP8TqJhROzbvvu/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1RTVFAo4-l4GzjxG1z6M2nBV_qVXgDSM0/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/13iGCnzwpqMLE2CjKmhuZ5SZXVftNTXiD/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1QK-nBY6EwGKgGl1zyTS7ZVyJVLFhZtvo/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url=""
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"6"}
                                code={"OP54XXX"}
                                title={"MOOC"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url=""
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
                                url="https://docs.google.com/document/d/1_fJjcCSafXjJrcALfcSiE2YHTxLgHMUj/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1SKpEJ3ZOzWllK03lUGYizy3qQiLxlEil/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url=""
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
                                url=""
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
                                url=""
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74144"}
                                title={"Applied Cryptography"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url="https://docs.google.com/document/d/1ME1UC4IZFPovdQz9dUTmsrdKCMWMWpsu/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
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
                                url="https://docs.google.com/document/d/1G3sQOirIkoFwzYpDssowGS1-xU10VpTq/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"Dept. Elective-III(Minor in IOT/AI)"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url=""
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74XXX"}
                                title={"Dept. Elective-IV"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"3"}
                                url=""
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
                                url=""
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74124"}
                                title={"Research Project-I"}
                                L={"0"}
                                T={"0"}
                                P={"8"}
                                cred={"4"}
                                url=""
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"7"}
                                code={"CS74124"}
                                title={"Industrial Training"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"2"}
                                url=""
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
                                url=""
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"8"}
                                code={"CS84126"}
                                title={"Research Project-II*"}
                                L={"0"}
                                T={"0"}
                                P={"36"}
                                cred={"18"}
                                url=""
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"8"}
                                code={"CS84126"}
                                title={"Comprehensive Viva-Voce"}
                                L={"X"}
                                T={"X"}
                                P={"X"}
                                cred={"2"}
                                url=""
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4145"}
                                title={"Distributed Database Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1UT831fVhjIyUsZe3l6pWpKCXVemCMzjQ/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4146"}
                                title={"Operations Research"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1cNE2-cXbSJl8W0rso0OVIBc6S89gk_sY/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4147"}
                                title={"Digital Image Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1K_l1l1wrO_DBsyvvyCVk8v2_HgijVnwb/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4148"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1zPPl_dHa130Y6-ckIhBXHyB1zd53LbwI/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4149"}
                                title={"Real Time Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/15UCcuLZ9BKh75prfIZa18-o4IqePTi_b/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4150"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1oEu1gtW-nXzR3lJaAwf-AegjY3N0VQ9G/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4151"}
                                title={"Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1iEeNbXDwGOkuOk6SQ8vNRBcQIBhc7t_9/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4152"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1t3oj_TniTbM771tB-nuXE3EbWZ9c5yom/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4153"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/19_1MGDaeU2VYUIjun38xXHaafzgM2pkN/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4154"}
                                title={"Object Oriented Systems Development"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ly06huRq_UrYy4jWaP-y8AwmxYwQRo2L/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4155"}
                                title={"Computer Graphics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1lDTPYrdRtm8p_ijcu4p__Xq0NmVdaspi/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4156"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1T11iSkwOfgEz0wMdz5HABmYqjU654X90/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4157"}
                                title={"Microprocessor and Microcontrollers"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1KwsxSnwwpEQWJMY9Na12jajzibjIIzky/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4158"}
                                title={"Distributed Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1LiFkNXO8jQTf2KYAZaAlCyv3rNYDfy26/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4159"}
                                title={"Virtual Reality"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1vSnCcEonJL00z3o2-UlPu_NfHq2lLnTz/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4160"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1L70hxedl6t4xmd9P8zsG_7Ryrb6MevTk/view?usp=drivesdk"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4161"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1UyN_bU0DMuVPHvDyr_2UrB8kqDZkxwub/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4162"}
                                title={"Biometrics"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ur8vVSqbGwu5RS9YMu6pE3wjnm-HXROA/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4163"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/105pi7YPY8CkNO1njfBe5KgH3zzrXBUwb/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4164"}
                                title={"Computer System Parallelism"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1XqdEK8pepC7wFRpYYIB5GT24GIsBJZTr/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4165"}
                                title={"Advanced Algorithms"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1OqWUN2btOoQrBZM8JEaXp1T5nI_lFi7p/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4166"}
                                title={"File System Forensic"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1AbqoGx_ahtV9pmrhJIV92f68iPdibwZD/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-1"}
                                code={"CSX4167"}
                                title={"Distributed Operating Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1PTo6KVDnQ430tEqOwhHdIj9AubCEIHj2/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4171"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1fvWBfhadpvQYblqKpgl9byemBDg4p63a/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4172"}
                                title={"Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1eRVDb2Xk-9xKQ-d-jrhG-RoS2ncqLNHy/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true">Digital Signal Processing  </a>}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4173"}
                                title={"IOT Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1FeXhUNTuhy00xR6O7Lb4lT8HujEZ1Xf9/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true">IOT Systems </a>}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4174"}
                                title={"Nature Inspired Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={<a href="https://docs.google.com/document/d/1hh0DxVx7nsPHUENa4KuZtmnv3d6z1l6z/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Nature Inspired Computing</a>}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4175"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={<a href="https://docs.google.com/document/d/16YSqGw-vLtKtIx_1rNURE1AcqDo5sgoL/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Image Processing Techniques</a>}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4176"}
                                title={"Bioinformatics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1xlv-BqAUYBPlIRaFZa62SDlgQrSTOuGY/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true">Bioinformatics</a>}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4177"}
                                title={"Information Retrieval"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1bj4cu3ovgTJY8cZsC7TwESlHmHdFSpBy/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4178"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1jIxJGlHgy0Xd4DsAuikQHkN6GOMF56UH/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4179"}
                                title={"Reinforcement Learning"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1g4rSw94mXuCmF4l1GAYgWrkq53bjNhPM/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4180"}
                                title={"Social Networks"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1aDU9S1IGyWe6XIJ4dOMmYJebbMaHAeT5/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4181"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1I3ulbGdcgKDVORx-lcO_svyrVaL9EEJi/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4182"}
                                title={"Speech Processing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1BkTFsrxDU9jsh55XpJTRzssZasqSkNF8/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4183"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1LZXyIHNcXeZZnrjn5UzoTsRfYat_TLkt/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4184"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1kph2cxMA8O4Adv5mHpQnxrn7qF48aKig/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4185"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1j_aWjuSZq2gFh9mjKE6C4_dDANIB4DVy/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4186"}
                                title={"Time Series Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1zUkjkZguY2zFNqkqfShVTEFXYtf-fYMh/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4187"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/13yi8DEGBwC5j7DsPxAHQOJSEoMTNlifN/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4188"}
                                title={"Multimedia Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/122rqrtsk0HqkFPQTMbkAMI1LpUKb4Zdw/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4189"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1HTPEOy1xAhLCqPNQsa7OafPBYLoyDqeM/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"CSX4190"}
                                title={"Federated Learning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1X8wmagqNjR9JkjdBUYhwulTHZJ9zbSdW/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />{/**2 */}
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-2"}
                                code={"HSXXXXX"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://drive.google.com/file/d/1L70hxedl6t4xmd9P8zsG_7Ryrb6MevTk/view?usp=drivesdk"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4201"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1qw8A1ozOk4pA-P-XXkN2y-Rt-rVkvd29/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4202"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1OoM_FihORG_5DdhTXGXIjOEfGxIUB3Z1/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4203"}
                                title={"Mathematical Foundations for Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1YCa2aWQ1m4dcDCTQmMGk7xS1Ip1KIikq/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4204"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1wzHoA3vaNEt2nQxb2bpy73JglkMjPraE/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4205"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1KrxsgH6-7wSHGfCFikmfGuH2Ae1X4SNM/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4206"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1DB9-s0MN8OH7ISsDrBfWV3UUxQsdR9Ha/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4207"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url="https://docs.google.com/document/d/1TRNffZAZ0S5rr4A9Xaza4CwWSmzQYd5Z/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4208"}
                                title={"Multimedia System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1gtNFHqUJI1DwJ_raa9qeMSTcOrhGF63j/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4209"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1b8O5QYvkLmBZBnbcGDpdPOs-EGg_uHg9/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4210"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1DumEmxy35fRho1Tsv3ARwikpGgL6m3pi/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4211"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1PrKknHMAn9vyGW5MjbFHAiGkQmTW6B4-/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4212"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1FWXJaDdh7a9giVQV3cglTn7fjGrd-55b/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4213"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Rjgzyoy5TwEuCfzveMHK2fqRYWqtwziW/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4214"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1KvIa73OND-T1RtDHldxuhOt__DzzBwV9/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4215"}
                                title={"Cyber laws and rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1iMK09GuiMICZUcotOqSPbGHPbE-FdJK-/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4216"}
                                title={"Digital Watermarking and Steganography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1CJLXTzXrQ9vvCPH9GyzPbho1ihK9q9QI/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4217"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1PsU0CQ_iMXU9mI-BnApJxjWUsgybdoXs/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4218"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1EKkRqKWa5CxN4sr4nKxswTsl0RZ3jDkG/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4219"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ojdWdCBoxCIv7HsuYvLBoXQzk7edK-6G/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4220"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1UmaxXOo3hW61h5UVFBGvwxfTkiODVZp_/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4221"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/122zC40rfbbbO38n09raxh6B8BDGUocJx/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4222"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1oEopeGbsQXEC14BUPcAYL-utLKNXHxuN/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4223"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ZpHH4GDSw1Qe5-81udosax9KOMmpqiSl/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4224"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1h7BMZnsPjcH7qLSB-wLcnFpHn_b3z0pD/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4225"}
                                title={"Pattern Recognition Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1EarYN-13cr-Dwi016WuMBiUXrTDDAIaX/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4226"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1-CoaNa5HHaf3DjZLcyAmg3Axk0g1Awlv/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"CSX4227"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1QaqhoiVuzIQTvIQkdp2Wu-3UhOGDNvdE/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
                            />
                            <SyllabusComp
                                dep={"CSUG"}
                                sem={"EL-3"}
                                code={"HSXXXXX"}
                                title={"Intellectual Property Rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://drive.google.com/file/d/1L70hxedl6t4xmd9P8zsG_7Ryrb6MevTk/view?usp=drivesdk"}
                            />
                        </div>
                    </div>
                </div>
                {/**============================================================================================================= */}
                {/* mtech data science  */}
                <div className={`mb-10 ${(pgd == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">M.Tech (Data Science and Engineering):-</div>
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
                                code={"CS012801"}
                                title={"Mathematical Foundations of Data Science"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1RWX-Ybkg1bVGNmHiU4Fu7jQEkn330Zdv/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS012802"}
                                title={"Pattern Recognition"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1wAKOh_8w4iWFPIk-U8PQI3nmRJer4GiE/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS0128XX"}
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
                                code={"CS0128XX"}
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
                                code={"CS0128XX"}
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
                                code={"EA012801"}
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
                                code={"CS012803"}
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
                                code={"CS022801"}
                                title={"Natural Language Processing"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1Q6HJvULMIIRjBnsvgLssN5fKqmYHJOi0/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS022802"}
                                title={"Deep Learning"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1_CBseJ1ceYCzRb6g5nr-3gubvGtBZdnR/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS022803"}
                                title={"Data Visualization Techniques"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1MP7D_6vJuNmOKIacnhCdscC8EiZsSW4_/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS0228XX"}
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
                                code={"CS0228XX"}
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
                                code={"CS0228XX"}
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
                                code={"EA022801"}
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
                                code={"CS032801"}
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
                                code={"CS042801"}
                                title={"Project/Dissertation"}
                                L={"0"}
                                T={"0"} f
                                P={"24"}
                                cred={"12"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2805"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1K2FjqsA58moz26IlMY9ybZ-pYiQg8WV7/edit#heading=h.2rdji9wpcvjf"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2806"}
                                title={"Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1QCux8RrPbSGkhEdr5sr2pBEa1p6fMkod/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2807"}
                                title={"IOT Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/10MO-C68mzoas2QwfnRKdhDzlEKXQIpGV/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2808"}
                                title={"Nature Inspired Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1_3n1PXEA4m7_SySmPWgYIn9OA-CvDaD7/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2809"}
                                title={"Image Processing Techniques"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Tm1St9rTmAn3z35HI8_xWIO1D3ypnlUj/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2810"}
                                title={"Bioinformatics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1o29mElqcqt9qzJteDJ97euM7O_4__Gxa/view#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2811"}
                                title={"Information Retrieval"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1kHUIpxhK-8eTPEcn7ujInnSJj1A1vHPt/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2812"}
                                title={"Computer Vision"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/14nN2sdlZSk1_va4sfVLc2iLsTYthSi15/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2813"}
                                title={"Reinforcement Learning"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ltFJrwQiFgdlAGb9rN8vL3bpQacYv7rK/edit#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2814"}
                                title={"Social Networks"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Vq6U6O6MhSbG-o0z8vTdoyUVOfmN8JB0/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2815"}
                                title={"Recommendation Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/16bVIDbDhvgvVPxcDcG-ujhrF3s9TBQut/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2816"}
                                title={"Speech Processing"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1j7ifn42mICp6Z1KrgBOF2cCQ-rmWHHxC/edit#heading=h.pfvvzz40m7y4"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2817"}
                                title={"Malware Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1va4-AfiMjH7uTcl6mR5Y_sczvFt1J3T7/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2818"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/12vQYREqFJ_l8YtBDdbTkW5GtIrbXxv_A/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2819"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/11dAtO2JyGh6Wg_Pmb48AlEz3PuPCONkf/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2820"}
                                title={"Time Series Analysis"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1angVuP8tZtG39sCMAaxeWm_VZBJBpMFx/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2821"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1D3bZDHUBI4mZCfkem3MB5XYzAG_8Q4q4/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2822"}
                                title={"Multimedia Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1haXY5hgOfGh2aJQwG8JaoLDLyVZast60/edit#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2823"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1EMqYmLHe0XWS2pNY92hmKpSCbzw36oI5/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2847"}
                                title={"Federated Learning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1QBk4z5DW_hVXUWrJR0HWEcNeBTEPy_pT/edit#heading=h.gb0x4v4erkkt"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2850"}
                                title={"Knowledge Representation & Reasoning"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1iCxALANTaT-S5KW7vHojo0kE78FOGo5_/edit#heading=h.egijqg7xo7uw"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2846"}
                                title={"Decision Support Systems"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1S95CSocmeJ2CAZkQNBALIt_rIxabki5B/edit#heading=h.gjdgxs"}
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
                                code={"CSXX2824"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1G-X1nNamJ-kFX5lbp5yzaQRLwCUeORUN/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2825"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1mqQYlu_UHlpHWLlgUTgQ8REOaQ5HrPcI/edit#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2826"}
                                title={"Cyber laws and rights"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1dVBLAXstoy6Q3unZaRVX-t7XiNuV0vUS/edit#heading=h.30j0zll"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2827"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1OyWVJDp43SA-ZB6SPLnMNIjsLiC19C_R/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2828"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1zidl95GAVMfivtzlEayU8QsYMzDdXStS/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2829"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/113wuZDem_-izA9qOY19TltPCuw4jf2v0/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2830"}
                                title={"Digital Watermarking and Steganography"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1DNNSoHfdiH7l1NBZh7z1RTyK6y7P8nCt/edit#heading=h.mrttpn31y99w"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2831"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1NFL8JOSJ9XjRwlvTXLNUp7Ryf74nT8rp/edit#heading=h.bp74tdanab02"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2832"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1rjZa6nF-jAK611FAXD1FlKmDARHykVpB/edit#heading=h.30j0zll"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2833"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1w5sTWxb7n5DngBNc7tfcLaG0syXWyhzF/view"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2834"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1f4JVhADGKNguAaDkmeuCeBg674DIimQC/edit#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2835"}
                                title={"Mathematical Foundations for Information Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1h6JertkeUAReZ5hvmFx0l-d0ioSEPjOP/edit#heading=h.fi1txyyyreo3"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2836"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Md4FHvYxzPGtNQ3IoUpk3WyalwyuGh6d/edit#heading=h.5opljn6ibfvw"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2837"}
                                title={"Pattern Recognition Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1-N7ET8yPw955S7ZVyuDJuqJYPEXey8Mo/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2838"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1awCiYJCrfgVc2oRVeZnRIOyBGl0l00vv/edit#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2839"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1AeGH88yeMDGNK6laNeOGAVti_hrKGZy-/edit#heading=h.aofqycvsjzx0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2840"}
                                title={"Soft Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1XR3w1bhYh9FNSgIFy5kq-884Labqaa1r/edit#heading=h.g8el6hieyxhx"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2841"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1XFAqsfxhTzvgPilDC7lG_-KAcxvmvEEY/edit#heading=h.ems9xxvatjok"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2842"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1OyWQelWlt4W35ZD7xyXC0lwXVexFssZ7/edit#heading=h.yizkkfahv610"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2843"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1mYTttrHhuhKfxsYjkD5fxW-JHLGf9cbp/edit#heading=h.c7u7z2pxoiom"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2849"}
                                title={"Human Computer Interaction"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1DUuW1XspgnBy6ATTe15QfgUAr7JRQiFO/edit"}
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
                                code={"CSXX2851"}
                                title={"Mobile Applications Development"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1UKefye3GSeh9VghVibcO2ga5sQtvDInd/edit#heading=h.dxz220fanfri"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2848"}
                                title={"Game Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1LSEU1Fg6zs6W1W4clhWZ9VCl54qTPCuW/edit"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2845"}
                                title={"Computational Geometry"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1bjcmKrjMpnxMu9gA9wAD1UOUkgtAfbUK/edit#heading=h.79ivdx8yy7hz"}
                            />
                        </div>
                    </div>
                </div>
                {/* PG cyber PROGRAM  */}
                <div className={`mb-10 ${(pgc == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">M.Tech (Cyber Security):-</div>
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
                                code={"CS012701"}
                                title={"Applied Cryptography"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={'https://docs.google.com/document/d/1xoYfBkzLJ6Q6HcREw-f-elq52qyUJ5Tf/view'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS012702"}
                                title={"Network Security System"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={'https://docs.google.com/document/d/185ga4rbGbtyV0mWjssFxeviiAHKmvB30/view'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS0127XX"}
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
                                code={"CS0127XX"}
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
                                code={"CS0127XX"}
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
                                code={"EA012701"}
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
                                code={"CS012703"}
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
                                code={"CS022701"}
                                title={"Intrusion Detection and Prevention"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={'https://docs.google.com/document/d/1PoFjQlcWk9gIUcPXn9UQbB0o-vYL9OYt/view'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS022702"}
                                title={"Advanced Internet of Things (IoT)"}
                                L={"3"}
                                T={"0"}
                                P={"2"}
                                cred={"4"}
                                url={'https://docs.google.com/document/d/1EmeFtIiTgMjHMTMH2_VyqrBBM6_uCC2j/view'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS022703"}
                                title={"Cyber Forensics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1x59HEiHif7G64kaf30Zysi1Ti_HEDP3M/view#heading=h.9i3tld9eytkt'}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS0227XX"}
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
                                code={"CS0227XX"}
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
                                code={"CS0227XX"}
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
                                code={"EA022701"}
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
                                code={"CS032701"}
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
                                code={"CS042701"}
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
                                code={"CSXX2705"}
                                title={"Adversarial ML"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1VTzzXbuMRtY2TrShOHUyPNAG0DSi5Yat/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2706"}
                                title={"Deep Learning Algorithms"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1q6A2w43DNciAUfhDoZo6SMELM5vA1ag_/view'}
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
                                code={"CSXX2708"}
                                title={"Information Theory and Coding"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1QqIe9P-G_VVc06Jf_xgCQXR_8pUSKtL1/edit#heading=h.gjdgxs'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2709"}
                                title={"Wireless & Mobile Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1mlzmUtjP9RbVPEt0-mQ5r3n1laDdevel/view'}
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
                                url={'https://docs.google.com/document/d/170DssqEl-NX52SybzEl14-tDaSY6zPWG/view'}

                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2742"}
                                title={"Social Networks"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/19314gP5WG-uBOa9X8Fh2koQL9ySveNaf/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2711"}
                                title={"Cyber Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1_9vZBnst5e-zjhffVlIfJq3j3LITwa1N/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2712"}
                                title={"Multimedia System"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1fr4pZW8-bF3QgbMh7nEi56CEKz9AtIsE/view'}
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
                                url={'https://docs.google.com/document/d/14ScD-8EYoA079FW0fNTtLFzESBooMitY/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2714"}
                                title={"Big Data Analytics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1RMALmnRMjG_KB1rNez9nW-4Bq5nSy0I9/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2715"}
                                title={"Cloud Computing Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1e3cOOYMzpT23Eauus4xnAk2Y_Sg7Uog8/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2716"}
                                title={"Biometric Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Mh9gsA6fop1UwiFnBd10mNOH5oo24COd/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2717"}
                                title={"Ethical Hacking"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1f51Ks7l0vRKtmHdY0MpuHta_Hz2lp1Ke/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2718"}
                                title={"Blockchain Technology"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1TSguCWrkmt6R-NmvadJBCW_vWNY9DYBw/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2719"}
                                title={"Cyber laws and rights in the digital age"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1tod5gmqKB3GQYvLgQGMSuhT2I7Kr57TQ/view'}
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
                                code={"CSXX2721"}
                                title={"Privacy and Security for Online Social Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1o-ENAd_dJwWpGkKSbu0MA5VuS8R-3mBw/view'}
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
                                url={'https://docs.google.com/document/d/1Htcgl74Cc_GWgmt_-E-UfXFNwhD3d_BG/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2724"}
                                title={"Ubiquitous Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1Xw4f5urYTablulffjuhKb0-j-quX8qbu/view'}
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
                                code={"CSXX2726"}
                                title={"Embedded System and Hardware Security"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1R84PnBdvbkX8hXyngMrsPJsDApYh0tDt/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2727"}
                                title={"Distributed System Design"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1b4ra_Islw0MhNPKlaej1XMB--3z593QR/view#heading=h.30j0zll'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2728"}
                                title={"Software Defined Networks"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1yTXI90txhaU7mUIu1_KaknHLHyThXJ-c/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2729"}
                                title={"Secure Software Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1NBOAKvOdiPLLFUEfQTp_0GyiHEEpEK5T/view'}
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
                                code={"CSXX2731"}
                                title={"Natural Language Processing Technique"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1AlE5MZtiT-WZMhVyGQuGZ6pw0nh6nSFA/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2749"}
                                title={"Game Theory"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1DGFMEZgMyOhNTofndz0dPprQim5E8Mvd/view#heading=h.c5tt0xsvp69d'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2732"}
                                title={"Data Visualization"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1J_nN4dYXigaalqKUv7fJI_OedRK2vjR4/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2733"}
                                title={"Bioinformatics"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1mm-dw9OqO07HSuD27GyQZTRmzBlVKY0P/view#heading=h.gjdgxs'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2734"}
                                title={"Digital Signal Processing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1RdWIHSwHrBzT8FEs25Inzm86LqCUjPz6/view'}
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
                                url={'https://docs.google.com/document/d/14bRrF_2C0fpxKGxuBcALAf0ld6Qqnho0/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2736"}
                                title={"Intrusion Detection"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1ogBIh96zDG2pBdNZadIBWutBleXEgZMh/edit#heading=h.gogiv5kdobwk'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2737"}
                                title={"IOT Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1JPgFOgrJDZYDdTfVlcA5yavexFJqdUPy/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2738"}
                                title={"Nature Inspired Computing"}
                                L={"3"}
                                T={"0"}
                                P={"0"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1nN4UTMDg9WCSbdy4kd050wFtFuhN9VMl/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2739"}
                                title={"Network Security"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1VrASN214BqRj1BXHdd-Hu6wYEUGqI95y/view#heading=h.x1nmfe73g7t9'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2740"}
                                title={"Recommendation Systems"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1I74nKZW2icb-jELT3KvNH3IW8sdS7e2z/view#heading=h.tin631xcjne5'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2752"}
                                title={"Mobile Applications Development"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1IdMxeVi1K8D16DwPuNoSlIWVNCa2h1sI/view'}
                            />
                            <SyllabusComp
                                dep={"Cyber Security"}
                                sem={"EL"}
                                code={"CSXX2741"}
                                title={"Reinforcement Learning"}
                                L={"2"}
                                T={"0"}
                                P={"2"}
                                cred={"3"}
                                url={'https://docs.google.com/document/d/1MEVaBzK2FRwIyHzL3Ij0UGJ9hr2rlaVI/edit#heading=h.gjdgxs'}
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
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">PhD Course :-</div>
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
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security):-</div>
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
                                url={"https://docs.google.com/document/d/10LKdSo8w-A2EsIh5NIOZFVjy4CtZX-Vq/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
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
                                title={"MOOC-I"}
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
                                title={"MOOC-II"}
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
                                sem={"7"}
                                code={"CS74138"}
                                title={"Industrial Training"}
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
                                sem={"9"}
                                code={"CS94141"}
                                title={"Industrial Training / Project (to be continued in 10th Sem)"}
                                L={"0"}
                                T={"0"}
                                P={"40"}
                                cred={"20"}
                                url={""}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"10"}
                                code={"CS104142"}
                                title={"Industrial Training / Project"}
                                L={"0"}
                                T={"0"}
                                P={"40"}
                                cred={"20"}
                                url={""}
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
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8"> MCA with specialization in Data Science & Informatics </div>
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
                {/* MCA(AI & IOT) */}
                <div className={`mb-10 ${(mcaai == false) ? "hidden" : ""}`}>
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">MCA with specialization in AI & IoT</div>
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
                                code={"CS012001"}
                                title={"Problem Solving through C"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1LhWnWlwZVAQLcBJJLq8kJpDshK34opF1/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS012002"}
                                title={"Mathematical Foundations of Computer Applications"}
                                L={"3"} T={"1"} P={"0"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1tp7jk5UyRUdysL4HS1b72aJ-pvGLl2TU/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS012003"}
                                title={"Computer Networks"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1WDyPjVWotH30sNCbB_4CQZI0qii20WqW/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"1"}
                                code={"CS012004"}
                                title={"Computer Organization and Architecture"}
                                L={"3"} T={"1"} P={"0"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1PZE_p2fCcMfm1B2VuREgPKgR_afe8oSb/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS022001"}
                                title={"Data Structures"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1SC43e_opccJEzNARYZGq9l7cgaw0Drh7/edit?tab=t.0#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS022002"}
                                title={"Computing with Python"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1tTZ_x5EEYMaIULXV6wafUOIWr32W62Tm/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS022003"}
                                title={"Database Management Systems"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1UR9wgSv2CLchSrp4ierSpjKSacSw_5Oo/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS022004"}
                                title={"Operating Systems"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1_TIPMo3kXcnIJiKj0-PxPeeEgUTA-giI/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"2"}
                                code={"CS02200"}
                                title={"Ad-hoc & Sensor Networks"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1qwFWCazP1WtuVvafRwkLQMCtBdiVXlY_/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS032001"}
                                title={"Design and Analysis of Algorithms"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1e3Ub35huRI3NNr4jd1SHmzFWFShMifZv/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS032002"}
                                title={"Artificial Intelligence"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1YMzUyTNyN3Jwq-UfMTqJWXqGVYt03yEb/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS032003"}
                                title={"Object Oriented Programming using JAVA"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Ia65cUdw2rWhCu8QfHJ5INfYi7IHe4BF/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS032004"}
                                title={"Internet of Things"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1W-crTcEOa0LnVeVmEruZTK93mUpMG0Cz/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"3"}
                                code={"CS032005"}
                                title={"Machine Learning"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1d5dZLdqwUI3QwiuFcQZZtcp2H4E3nccb/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS042001"}
                                title={"Deep Learning"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1HsVYTyO_ejk0pJjJ__KNh4TWhhYjeLzx/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS042002"}
                                title={"Artificial Intelligence of Things"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1PvTkXJM5_yqacLE1U0uRMaYt11u_tFBT/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS042003"}
                                title={"Data Visualization"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1c1saYLal0qyp_nY-HiPNnzSIL6lTSghB/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS042004"}
                                title={"Web Programming"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1UuwJqTDucbJlo06xuv0i3Mz2L6985-4d/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS042005"}
                                title={"Natural Language Processing"}
                                L={"3"} T={"0"} P={"2"}
                                cred={"4"}
                                url={"https://docs.google.com/document/d/1x_OjgI6XexvQzXYl8EQAR9-cvjb0JgOp/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"4"}
                                code={"CS042006"}
                                title={"Mobile Applications Development"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1WE683GSifbSVlpDCmq-ppVuDyVNPNnqv/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"5"}
                                code={"CS052001"}
                                title={"Information Security"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1NrHBCiDE5nZzpeH_ZvnqeF8a4GDSwfV7/edit?tab=t.0#heading=h.yiqhst5uozxp"}
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
                                code={"CSXX2008"}
                                title={"Generative Deep Models"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1tWUhCgRk3hPUWTYJdN2OClp25Bh6Fk6l/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2009"}
                                title={"Explainable AI"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/135nc5i8COlByVSQifUZyzqq6MvDoFBNs/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2010"}
                                title={"Information Retrieval"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1w5t0O_VSv2rbDaA2Mkk5fUCqOhfqgnue/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2011"}
                                title={"Game Theory"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1DcC91YFnFv-o079LvXBAPJC_XRtZKScY/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2012"}
                                title={"Augmented Reality (AR) and Virtual Reality (VR)"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1FGOrUc3v8ejEPVbhqqjl_NjgJriHHNnq/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2013"}
                                title={"Intrusion Detection"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1urkrAIY7bL5Hv3F09wLOOWxl6lx-w0KW/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2014"}
                                title={"Malware Analysis"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1_d7Lxx1Ijrzt4EEJofgTaf2AV55tOMja/edit?tab=t.0#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2015"}
                                title={"Digital Forensic"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1ziDWDQMQHL2tpSfDx-vrU6YIQJ1gsXMt/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2016"}
                                title={"Text Analytics"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1jr7en8oVkpYgncYJkoKSDcOnQpOZEz2V/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2017"}
                                title={"Computer Vision"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1y5KnICRtifB0yHM2tZqadBrg-IGBrnUY/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2018"}
                                title={"Reinforcement Learning"}
                                L={"2"} T={"0"} P={"2"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1saSYUj36tHqg5Ny6vco8e_BfVndw3Dxw/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2019"}
                                title={"Blockchain Technology"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1dbN3EfajYU94i8tpXeoubH-UXIEBsmuh/edit?tab=t.0#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2020"}
                                title={"Data Mining and Warehousing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1nicAbuUCIrgkGn8g-sTcARTc8T91GhwR/edit?tab=t.0#heading=h.gjdgxs"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2021"}
                                title={"Recommendation Systems"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1d3XcYtuouI0dFJ1E42771ByW1SDitN6B/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2022"}
                                title={"Cloud Computing"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/18kV1e-ax3qalWwp7k2xrVh1NEiuomRrC/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2023"}
                                title={"Image Processing Techniques"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/12u2vCiWMdBRROi__aGn6Etrv58NBnMP2/edit?tab=t.0#heading=h.vybwgpun7gww"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2024"}
                                title={"Computer System and Security"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1Vsx6sSePw0bXbx9wFcG8FYg7FwkVnVT_/edit?tab=t.0"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2025"}
                                title={"Smart Agriculture"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1mBIfgbp4U61OVABDL3cKFvXOLFokYFvH/edit?tab=t.0#heading=h.a0fq7ir1bgdw"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2026"}
                                title={"Human Computer Interaction"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/1u1tesPLpcwEBF3S_zsFxfccu5XGo-p0G/edit?tab=t.0#heading=h.sbzqc89vnwxb"}
                            />
                            <SyllabusComp
                                dep={"CSE"}
                                sem={"EL"}
                                code={"CSXX2027"}
                                title={"Social IoT"}
                                L={"3"} T={"0"} P={"0"}
                                cred={"3"}
                                url={"https://docs.google.com/document/d/13ixkMOyDmFBfffhtSnqww_mOztWbASjr/edit?tab=t.0#heading=h.e6qcbmdthx5k"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function SyllabusComp({ dep, sem, code, title, L, T, P, cred, url }) {
    const safeUrl = normalizeGoogleDriveUrl(url);
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 overflow-auto ">{dep}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{sem}</div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2 ">{code}</div>
            <a href={safeUrl || '#'} target="_blank" rel="noopener noreferrer" className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer">{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2 ">{cred}</div>
        </>
    )
}

