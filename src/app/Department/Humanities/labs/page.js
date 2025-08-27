"use client"
import BackDepartment from "../../../components/department/BackDepartment"
import { useEffect, useState } from "react"


function Page() {

    const [img, setImg] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setImg((img + 1) % 3);
        }, 2500)
        return () => clearInterval(interval);
    }, [img])
    return (
        <div className=" flex flex-col p-10 pt-4 max-sm:p-2 h-screen text-black">
            <div className="w-full">
                <h2 className="text-center text-4xl text-red-700 mt-2">LABS</h2>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* lab */}
                <div className=" flex justify-center py-2 h-[300px]">
                    <img className={`${(img === 0) ? "flex" : "hidden"} rounded-lg`} height={300} width={300} alt="Loading.." src="https://web.nitp.ac.in/dept/hss/labs/01.jpg" loading="lazy" />
                    <img className={`${(img === 1) ? "flex" : "hidden"} rounded-lg`} height={300} width={300} alt="Loading.." src="https://web.nitp.ac.in/dept/hss/labs/02.jpg" loading="lazy" />
                    <img className={`${(img === 2) ? "flex" : "hidden"} rounded-lg`} height={300} width={300} alt="Loading.." src="https://web.nitp.ac.in/dept/hss/labs/03.jpg" loading="lazy" />
                </div>
                <div className=" mb-6 flex justify-center space-x-2">
                    <button onClick={() => setImg(0)} className={`${(img === 0) ? "bg-slate-600" : "bg-white"} border border-black rounded-full h-[16px] w-[16px]`}></button>
                    <button onClick={() => setImg(1)} className={`${(img === 1) ? "bg-slate-600" : "bg-white"} border border-black rounded-full h-[16px] w-[16px]`}></button>
                    <button onClick={() => setImg(2)} className={`${(img === 2) ? "bg-slate-600" : "bg-white"} border border-black rounded-full h-[16px] w-[16px]`}></button>
                </div>
                <div className="mb-10">
                    <p>Language Laboratory is a designated space for English language learning where students access audio-visual materials. It adapts a perfect blend of Instructor-Led-Training and Computer-Based-Training. The assessment on speaking and listening programme along with reading and writing, listening and speaking skills to promote proficiency of language.</p>
                </div>
            </div>
        </div>
    )
}




export default Page