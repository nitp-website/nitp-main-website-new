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
        <div className=" flex flex-col p-5 text-black">
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
                    <BackDepartment navigate={'/Department/Archi'} />
                </div>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="ml-10">
                    {/* <ActComp
                        content={['B.Arch All Semester course structure',
                            'M.Arch.(Sustainable Architecture) Syllabus',
                            'MURP Syllabus'
                        ]}
                    /> */}
                    <ol>
                        <li><a href="https://docs.google.com/spreadsheets/d/1Et1TS21Rk3esAWdWaAyt2nYGeR6oY9TX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true">B.Arch All Semester course structure</a>
                        </li>
                        <li><a href="https://docs.google.com/document/d/1d1mzOzYLzPL8QSY6BJws69dGHe6_zl9w/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true">M.Arch.(Sustainable Architecture) Syllabus</a></li>
                        <li><a href="https://docs.google.com/document/d/1jTFrdVph3WQXdKf1Qu48yfGCeZdYbbTR/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true">MURP Syllabus</a></li>
                    </ol>
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
                                    url={"https://docs.google.com/document/d/1yovUf2R7D48OUBjUqyg0jLOttboUJGsS/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1fKA1LaZWC_nhT4mk-9kPkyQvMN8TPA23/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1tMzqGbBuZq0nFTU3vExVj1pfSUaTtlfC/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"Basic Design 1"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1HXvPQsPB-E3OlOEaT209swqtHuSshnkl/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"Architectural Graphics 1"}
                                    L={"1"} T={"0"} P={"6"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1F0V6bW_IyiIwymUaKWFYpm-4B2wHXQcN/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"1"}
                                    code={""}
                                    title={"History of Art,Architectural & Culture"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1K_S6fMOkqqnPtn2SWeYuxjMCSckNNNUE/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Communication Skills Development & Technical Writing"}
                                    L={"0"} T={"1"} P={"3"}
                                    cred={"2"}
                                    url={"https://docs.google.com/document/d/1ZadIQN89DVS7bPTLcCY56WqbBC215wyE/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Enginlring Mechanics"}
                                    L={"3"} T={"1"} P={"0"}
                                    cred={"4"}
                                    url={"https://docs.google.com/document/d/1CMz8Z2jDSIc-XJkwrVxhNfbcf35EFGVX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Science Society and Ethical Values"}
                                    L={"1"} T={"1"} P={"0"}
                                    cred={"2"}
                                    url={"https://docs.google.com/document/d/12s-v9Oe43IEiVUNG21-C-jjKsPG-YTkx/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Basic Design II"}
                                    L={"1"} T={"1"} P={"6"}
                                    cred={"4"}
                                    url={"https://docs.google.com/document/d/1_KmHWN8afcOn6lXM_HQqWbG50u2mV-uc/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Architectural Graphics II"}
                                    L={"1"} T={"0"} P={"6"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1v4cmJY5tPE_eSv8WjkB1cf2pLnjPS6SY/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Architectural workshop"}
                                    L={"0"} T={"0"} P={"4"}
                                    cred={"1"}
                                    url={"https://docs.google.com/document/d/1_J-sM7CWCB9k05SZJKy2cQW0O75fumkQ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"History of Architecture-I"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1jCu-gPm7gYLFVI-2y3deK9CDEZtGmo8O/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Principal of Architecture"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1JMthMkX0nxn7jL01mHlLXFNuat3hA-Hb/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"2"}
                                    code={""}
                                    title={"Seminar/Educational Tour/NASA/Zonasa-I"}
                                    L={"0"} T={"0"} P={"0"}
                                    cred={"0"}
                                    url={"https://docs.google.com/document/d/1_iRNKW7gN2uG9EMH8d-zefklAD4R3YXI/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1eGwFMrNeqA8RiPbTFcux3qBmRwSrGo5X/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Building Construction-I"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1dL8zTSEMzK0jdfYKJxxi6NZPp-CtNDLP/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"History of Architecture-II"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1xohM0odcurLTgxkpx3FT-jTvl_DheLPS/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Building Materials(Material Science & Technology)"}
                                    L={"1"} T={"1"} P={"0"}
                                    cred={"2"}
                                    url={"https://docs.google.com/document/d/1JTaYzLcegZpvK9YZX2TZGYqYmxptxU9M/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Climatology and Solar Passive Architecture"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1gl2LpCdNpkn9zJnjqR5Voa_kGcImLhGe/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Structure,Form & Architecture"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1-Pf3KZOSfCipRYLxCNl3p_ypd2QugsAM/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"3"}
                                    code={""}
                                    title={"Computer Application in Architecture"}
                                    L={"0"} T={"0"} P={"4"}
                                    cred={"1"}
                                    url={"https://docs.google.com/document/d/18x1WhIUKHs7tG0DtBmTh70ZL7quNiuAi/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1LWXY5zX_dczKdQUT9WkN-dGVC9mRYXjZ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Building Construction - II"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1OBrNEFi2lNk2tQCZdmz4hV258JqwhhLx/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Contemporary Architecture"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/18xuXYm2dLWRPR3xRvd5Ko3tb7qg-R0Wi/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Building Services(Water Supply and Sanitation)"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1IgO43OASIIYXm3kif8jOeyeq2zNEGuL8/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Seminar/Educational Tour/NASA/Zonasa-II"}
                                    L={"0"} T={"0"} P={"1"}
                                    cred={"0"}
                                    url={"https://docs.google.com/document/d/13ZwZNcNjRC0e98XJYp89IJN5guKjWR90/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Basic Surveying"}
                                    L={"3"} T={"0"} P={"3"}
                                    cred={"4"}
                                    url={"https://docs.google.com/document/d/15fnQ0xPO_eEi7rOMhjClPrr_bHKQ6-M5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"4"}
                                    code={""}
                                    title={"Structural Mechanics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1WBHEpc3YzApeHp8uI07v3vl_9aH1TZhx/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1g2Rtw-Vs10lrN9M5LErrRX68zWmRdFFO/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Building Construction - III"}
                                    L={"1"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={"https://docs.google.com/document/d/1GKkknoLfLTorwy7t6YsCnaGoMjtk9VZY/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/11yat3Qta6sJV0gGA2kMb3KEvZ4HFmiwq/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Quantity Survey & Specifications"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/16YhtI36jl6LZxbpSqHpgUoWJQ53aPe64/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Sociology and Building Economics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1lhkt6TWBoNFL-kmv-8yqblvuEYhpCKL_/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"5"}
                                    code={""}
                                    title={"Indeterminate Structures"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1jG4-eM4G-u5RUGAj4JUvZQuhBo45V7Oy/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1amMm_nArGyAdE-IXwENwqQEzL2te9gXj/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Building Construction-IV"}
                                    L={"1"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={"https://docs.google.com/document/d/14DVWz4R1Z1hoH9Ialo8QcTW5iDgP6aPA/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Housing"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1lryHQVNchgeUycinRTjUhTBG7vkQDBpY/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Departmental Elective-I"}
                                    L={"2"} T={"1"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1MHqbsbdXOwxDFvfynXzfQrCWG5ZJXGs1/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Building Services (HVAC)"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1EOoZ2rkSXItnGCKSop1dGP-SbIosi3_L/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Building Byelaws and Codes of Practice"}
                                    L={"2"} T={"0"} P={"0"}
                                    cred={"2"}
                                    url={"https://docs.google.com/document/d/14FKgcnSbDv__6amv87wr1ZFDtaQBDF1s/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"6"}
                                    code={""}
                                    title={"Concrete Structure"}
                                    L={"0"} T={"0"} P={"2"}
                                    cred={"1"}
                                    url={"https://docs.google.com/document/d/1Vjwhh34rTZP5gkz2_4oQEUMy16ZwlG_1/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1c5OjplI2vPcA5eSQc38b7Z9MmzabNkWT/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"Architectural Detailing"}
                                    L={"2"} T={"0"} P={"4"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1GR75mjdDuzLRvYrB9HwvsnRGXDP4PeUp/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"City Planning"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1Dy7-4Z3oLG18movjpoVw1XeWiyloUufU/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"Urban Design"}
                                    L={"2"} T={"0"} P={"3"}
                                    cred={"4"}
                                    url={"https://docs.google.com/document/d/1rsuVv7ndklgjhAx_8WI1Ob4RNbB1N4BN/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"7"}
                                    code={""}
                                    title={"Design of Stll Structure / Concrete str."}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1BjCCbhpPOeSG7W_7WUV1SjeqvbbKXkzz/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1ODVAewY5mF78IspcQAu-Zt3BQjtCsVPY/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Working Drawing"}
                                    L={"1"} T={"0"} P={"4"}
                                    cred={"2"}
                                    url={"https://docs.google.com/document/d/1RaXacaG6AFgUi56K-0Y3n23NrRt8WE97/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"8"}
                                    code={""}
                                    title={"Landscape Design & Ecological Architecture"}
                                    L={"2"} T={"0"} P={"2"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1_kkdm0aCt5Nn0gfMk0IFotiAUWBxhh7k/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1R-E8q5dSyu-SvIiMwj89En-eR4h4SQwb/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1hPr9qx0CQCRXh5WdIw5tiiX-fGPMyPDs/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1dBYlpMVcEQSClEsLsh6QrgHhpafcNp6n/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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
                                    url={"https://docs.google.com/document/d/1H3Ejgl6n4xxSS7zCRi753EJIuPSiscjV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL I"}
                                    code={""}
                                    title={"Building Software lab"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1C80gXFLKDrDqxdC0AqBlLSjKPboTfqyi/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL I"}
                                    code={""}
                                    title={"Vastushastra"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/12TWz6jLdtCcbEvrTV2DhLmZylrD5vq8e/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL II"}
                                    code={""}
                                    title={"Art In Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1UETz5og4i-9ma9uWKGwj1XZg0GSPmtYu/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL II"}
                                    code={""}
                                    title={"Architectural Conservation"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1ccstBY03ZQ0LnakJomB87yCfGI8TP4n_/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL II"}
                                    code={""}
                                    title={"Sustainable Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1fZo1RF0wMda-9PoRXiicWKssnUTCQaBe/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Visual Semantics"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1q_LNBU70cUEcymU9Sy4DU64OcCBlt8N_/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Modular Co-ordination"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1DmeyysASRoUJ_1bDOWcjB1BYPVhN2BXZ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Facility planning and Specialized Building Design"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/19bFaXT2cXADOOw5q-kj95Myu5rCAGNnN/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Interior Design"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1-Fy7ePhAjxwmVQgnEYH3ZzHBEOhS3-D8/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Intelligent Buildings"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1k_9w9IPzD5Z_lvyQzoxje7u1laSQ1cYn/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Building Automation and Management System"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1ZiQMp18a-nIYTsL97niZKy8Wu_uTsk6P/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Behavioral Studies in Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1UY1Kau9WMuJtk1Ng1mAO80xezTbocQR4/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Ergonomics and Product Design"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1euXdV3m40SLhqAFP__kWFAfYhJ9YxZKM/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL IV"}
                                    code={""}
                                    title={"Energy Conscious Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/10rvWZjP8hTCZCbA-rAaCD48R_MPf2LoE/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL IV"}
                                    code={""}
                                    title={"Appropriate Building Technology"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1N8_3470vJtaSpdM9wZRzjQezZKOoTclR/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL IV"}
                                    code={""}
                                    title={"Futuristic Architecture"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/1dHuLvvLnYkCxsZujTwvKy1xBqOEuMi5h/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
                                />
                                <SyallbusComp
                                    dep={"ARUG"}
                                    sem={"EL III"}
                                    code={""}
                                    title={"Marketing skill"}
                                    L={"3"} T={"0"} P={"0"}
                                    cred={"3"}
                                    url={"https://docs.google.com/document/d/14VMOVZy38wxsxxdy4fEsilKy-HGSqrpc/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
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