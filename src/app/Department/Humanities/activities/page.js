"use client"
import BackDepartment from "../../../components/department/BackDepartment";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Activities
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Humanities & Social Sciences
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Humanities"} />
            </div>
            {/* LINKS */}
            <div className=" border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10 text-black overflow-x-auto">
                    <div className="w-[1300px]">
                        <div className="font-bold mb-2 text-red-900">List of Short - Term Courses / Faculty Development Program / Workshop Seminar/Conferences/Guest Lectures organised:</div>
                        <div className=" grid grid-cols-12  border border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">S.no.</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">Name of the Faculty</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-5 border-r border-black font-bold">Programme Name</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-2  font-bold">Duration</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">1</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black text-left pl-2">Dr. Deepak K Behera (Convener)</div>
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black text-left pl-2">Dr. Ashish R Sinha (Convener)</div>
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black text-left pl-2">Dr. Manish Tiwari (Coordinator)</div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black text-left pl-2">Dr. Zeeshan Ali (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">Five Day Workshop (Hybrid) on “Data Analysis in Research”</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">08-12 July 2024</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">2</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black text-left pl-2">Dr. Ashish Ranjan Sinha (Chairman)</div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black text-left pl-2">Dr. Zeeshan Ali (Secretary)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">International Conference on “The Intersection of Language and Literature: Current Trends and Future Directions”</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">17-18 May 2024</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">3</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black text-left pl-2">Dr. Ashish Ranjan Sinha (Chairman)</div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black text-left pl-2">Dr. Zeeshan Ali (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">FDP on “Emerging Trends and Commercialisation of Intellectual Property Rights”</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">08-12 January 2024</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">4</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black text-left pl-2">Dr. Deepak K Behera
                                    (Course Director)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">ICSSR Sponsored Ten Days “Research Methodology Course”</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">22-31 August 2023</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">5</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black text-left pl-2">Dr. Deepak K Behera (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">Five Days STC (Hybrid) on “Academic Research Writing & Publishing”</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">17-21 July 2023</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">6</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black text-left pl-2">Dr. Ashish Ranjan Sinha (Chairman)</div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black text-left pl-2">Dr. Zeeshan Ali (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">FDP on “Research Methodology for Social Sciences, Engineering and Management: NEP 2020”</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">10-14 July 2023</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">7</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black text-left pl-2">Dr. Deepak K Behera (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">One Day Guest Lecture on “Multidisciplinary Research in Humanities and Social Sciences”</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">5 June 2023</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black text-left pl-2">8</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black px-2">Dr. Ashish Ranjan Sinha
                                    (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">One Day National Workshop on ‘Proactive Approach to Build Life Skills'</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">17 November 2022</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">9</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black text-left pl-2">
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black">Dr. Ashish Ranjan Sinha (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">Webinar on “Role of Teachers in National Education Policy in collaboration with NITI Aayog & BSM”</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">21 February 2021</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black text-left pl-2">10</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black px-2">Dr. Deepak K Behera (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">AICTE Training and Learning (ATAL) Academy sponsored Five Days online FDP on “Capacity Building on Research Methods and Effective Teaching Methodology” </div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">14-18 December 2020</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black text-left pl-2">11</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-4  border-black ">Dr. Deepak K Behera (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">Webinar on “Aatmanirbhar Bharat: A Roadmap for Inclusive Growth” </div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">2 October 2020</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black text-left pl-2">12</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black px-2">Dr. Deepak K Behera (Coordinator)</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black">Online Expert Lecture on “Understanding New National Education Policy” </div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">5 September 2020</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}