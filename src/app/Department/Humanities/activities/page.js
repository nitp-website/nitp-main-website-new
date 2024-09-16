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
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">2</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">3</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">4</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">5</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">6</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">7</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">8</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">9</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">10</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">11</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>

                        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">12</div>
                            <div className="flex flex-col justify-center col-span-4 border-r border-black">
                                <div className="h-10 flex flex-col justify-center col-span-4 border-b border-black"></div>
                                <div className="h-10 flex flex-col justify-center col-span-4  border-black"></div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-5 border-r border-black"></div>
                            <div className="px-2  flex flex-col justify-center col-span-2 "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}