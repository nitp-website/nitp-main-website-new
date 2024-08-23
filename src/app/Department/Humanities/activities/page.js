"use client"
import BackDepartment from "../../../components/department/BackDepartment";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Page() {
    const [img, setImg] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setImg((img + 1) % 5);
        }, 2500)
        return () => clearInterval(interval);
    }, [img])
    return (
        <div className=" flex flex-col p-10 max-sm:p-2">
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
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className=" flex justify-center py-2 h-[300px] object-contain">
                    <Image className={`${(img === 0) ? "flex" : "hidden"} rounded-lg w-[500px]`} height={300} width={300} alt="Loading.." src={"https://web.nitp.ac.in/dept/hss/01.jpg"}></Image>
                    <Image className={`${(img === 1) ? "flex" : "hidden"} rounded-lg w-[500px]`} height={300} width={300} alt="Loading.." src={"https://web.nitp.ac.in/dept/hss/02.jpg"}></Image>
                    <Image className={`${(img === 2) ? "flex" : "hidden"} rounded-lg w-[500px]`} height={300} width={300} alt="Loading.." src={"https://web.nitp.ac.in/dept/hss/03.jpg"}></Image>
                    <Image className={`${(img === 3) ? "flex" : "hidden"} rounded-lg w-[500px]`} height={300} width={300} alt="Loading.." src={"https://web.nitp.ac.in/dept/hss/04.jpg"}></Image>
                    <Image className={`${(img === 4) ? "flex" : "hidden"} rounded-lg w-[500px]`} height={300} width={300} alt="Loading.." src={"https://web.nitp.ac.in/dept/hss/05.jpg"}></Image>
                </div>
                <div className=" mb-6 flex justify-center space-x-2">
                    <button onClick={() => setImg(0)} className={`${(img === 0) ? "bg-slate-600" : "bg-white"} border border-black rounded-full h-[16px] w-[16px]`}></button>
                    <button onClick={() => setImg(1)} className={`${(img === 1) ? "bg-slate-600" : "bg-white"} border border-black rounded-full h-[16px] w-[16px]`}></button>
                    <button onClick={() => setImg(2)} className={`${(img === 2) ? "bg-slate-600" : "bg-white"} border border-black rounded-full h-[16px] w-[16px]`}></button>
                    <button onClick={() => setImg(3)} className={`${(img === 3) ? "bg-slate-600" : "bg-white"} border border-black rounded-full h-[16px] w-[16px]`}></button>
                    <button onClick={() => setImg(4)} className={`${(img === 4) ? "bg-slate-600" : "bg-white"} border border-black rounded-full h-[16px] w-[16px]`}></button>
                </div>
                {/* list */}
                <div className="mb-10">
                    <ul className="list-disc list-inside ml-5 space-y-4 text-sm lg:text-base">
                        <li>One Day National Seminar on “Women Health: Mental and Physical” on 15th September 2022.</li>
                        <li>One Day National Workshop on “National Education Policy 2020” on 2nd September 2022.</li>
                        <li>AICTE Training and Learning (ATAL) Academy sponsored Five Days online FDP on Capacity Building, 14-18 December 2020.</li>
                        <li>Webinar on “Aatmanirbhar Bharat: A Roadmap for Inclusive Growth” on 2nd October 2020.</li>
                        <li>Online Expert Lecture on “Understanding New National Education Policy” on 5th September 2020.</li>
                        <li>Expert Lecture on “The Humanities for Scientists & Engineers: The Relationship between the Natural & Social Sciences” on 28 August 2017.</li>
                        <li>Expert Lecture on “Human Resource Management” on 28th January 2017.</li>
                        <li>Expert Lecture on “Sampling Methods in Statistics” on 28th January 2015.</li>
                        <li>Expert Lecture on “Communication Skills: An Important Employability Skill for Workplace Success” on 28th August, 2014.</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}