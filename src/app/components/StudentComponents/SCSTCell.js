"use client"
import { useState } from "react"
import React from 'react'

const SCSTCell = () => {
    const [state, setstate] = useState("Home");
    const tags = ["Home", "People"]
    return (
        <div>
            <div className="block md:hidden ">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap justify-center items-center ">
                        {
                            tags.map((item, i) => {
                                return <span key={i} className={`m-2 p-2  cursor-pointer rounded-lg ${state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"}`} onClick={() => setstate(item)}>{item}</span>
                            })
                        }
                    </div>
                    <div className=" flex flex-col">
                        {
                            state === "Home" ?

                                <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold text-black">
                                    The Institute is committed to maintain a work environment wherein faculty members, staff and students from different communities can work in a coherent environment. It is the Institute's endeavor to ensure that no discrimination takes place at the workplace or inside the Institute campus.

                                    The Institute has appointed a Liaison Officer who can be contacted in the event of any incident of discrimination. Particulars of Liaison Officer are as under <span className="font-bold text-red-800">Prof. Fulena Rajak.</span>
                                    <div className="mt-4">
                                        For reporting any grievance related to SC / ST community of NIT Patna, kindly use this email ID:
                                        <span className="font-bold text-red-800">sc.st.cell@nitp.ac.in</span>
                                        </div>
                                </div>

                                :
                                <></>
                        }
                        {
                            state === "People" ?
                                <>
                                    <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold text-black">
                                        <div className="border shadow-2xl p-5 text-black flex flex-col">
                                            <span className="text-lg font-semibold">Liaison Officer</span>
                                            <span className="text-2xl font-bold text-red-800">Prof. Fulena Rajak</span>
                                            <span>Professor, Department of Architecture & Planning</span>
                                            <span>Email: sc.st.cell@nitp.ac.in</span>
                                        </div>
                                    </div>
                                </>
                                :
                                <></>
                        }


                    </div>

                </div>
            </div>

            <div className="md:block hidden">
                <div className="w-full flex">
                    <div className="flex flex-col justify-center w-[20%] ">
                        {
                            tags.map((item, i) => {
                                return <span key={i} className={`m-2 p-2 w-[150px] cursor-pointer text-sm font-bold border-2px shadow-md ${state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"}`} onClick={() => setstate(item)}>{item}</span>
                            })
                        }
                    </div>
                    <div className="ml-8 flex flex-col w-[70%]">
                        {
                            state === "Home" ?
                                <>
                                    <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold text-black">
                                        The Institute is committed to maintain a work environment wherein faculty members, staff and students from different communities can work in a coherent environment. It is the Institute's endeavor to ensure that no discrimination takes place at the workplace or inside the Institute campus.
                                        The Institute has appointed a Liaison Officer who can be contacted in the event of any incident of discrimination. Particulars of Liaison Officer are as under <span className="font-bold text-red-800">Prof. Fulena Rajak.</span>
                                        <div className="mt-4">
                                        For reporting any grievance related to SC / ST community of NIT Patna, kindly use this email ID:
                                        <span className="font-bold text-red-800">sc.st.cell@nitp.ac.in</span>
                                        </div>
                                    </div>
                                </>
                                :
                                <></>
                        }
                        {
                            state === "People" ?
                                <>
                                    <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold text-black">
                                        <div className="border shadow-2xl p-5 text-black flex flex-col">
                                            <span className="text-lg font-semibold">Liaison Officer</span>
                                            <span className="text-2xl font-bold text-red-800">Prof. Fulena Rajak</span>
                                            <span>Professor, Department of Architecture & Planning</span>
                                            <span>Email: sc.st.cell@nitp.ac.in</span>
                                        </div>
                                    </div>
                                </>
                                :
                                <></>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SCSTCell
