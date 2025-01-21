"use client"
import Image from "next/image"
import BackDepartment from "../../../components/department/BackDepartment";
import { useEffect, useState } from "react";

export default function Labs(){
    const [feature , setFeature] = useState("/eelab1.jpg")
    const [it, setIt]= useState(0);
    var picture = [
        "/eelab1.jpg",
        "/eelab2.jpg",
        "/eelab3.jpg",
        "/eelab4.jpg",
       
    ]
    useEffect(()=>{
        const interval = setInterval(()=>{
          setFeature(picture[it]);
          setIt(it+1);
          if(it == picture.length-1){
            setIt(0);
          }
        },2500)
        return ()=> clearInterval(interval)
      },[it])



    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">  
            <div className="flex flex-col mb-6">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        LABS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        ELECTRICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"}/>
            </div>
            {/* Lab list */}
            
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Laboratory Facilities Available in the Department:-</div>
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <ol className="list-decimal list-inside ml-5 space-y-4 lg:text-base text-sm">
                            <li>Elements of Electrical Engg. Lab.</li>
                            <li>Electrical M/C Lab</li>
                            <li>Power System Protection Lab</li>
                            <li>Power Electronics Lab</li>
                            <li>Computer Lab</li>
                            <li>Microprocessor and Microcontroller Lab</li>
                            <li>Network theory Lab</li>
                            <li>Control System Lab</li>
                            <li>Measurement Lab</li>
                            <li>High Voltage Lab</li>
                            <li>SCADA Lab</li>
                            <li>Industrial Drives and Control Lab</li>
                            <li>Advanced Instrumentation Lab</li>
                            <li>Power system Lab (upcoming)</li>
                        </ol>
                        <div className=" flex justify-center max-md:hidden">
                            <div className="flex flex-col justify-center">
                                <Image src={`${feature}`} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg bg-rose-200" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className=" max-md:flex justify-center hidden">
                        <div className="flex flex-col justify-center">
                            <Image src={`${feature}`} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg bg-rose-200" />
                        </div>
                    </div>
                </div>
                {/* Research  */}
                <div className="mb-10">
                    <div className="font-semibold lg:text-2xl text-xl mb-4">Research Laboratories</div>
                    <p className="text-justify lg:text-base text-sm">The Department of Electrical Engineering has multiple laboratories/facilities which are engaged in interesting and cutting-edge research projects. The details of those laboratories are as follows:</p>
                </div>
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-2">1. Advanced Instrumentation Lab:</div>
                    <p className="text-justify lg:text-base text-sm">Dr. Arunangshu Ghosh with his team of students is working towards the development of a portable electronic tongue for estimation of tea quality and spoilage detection of food samples. The other work in progress is development of the Potentiostat System for General Purpose Electro-Chemical Applications. These systems are developed to develop automated systems for quality analysis of different agricultural and food samples. Besides, technology using near infrared spectroscopy based development (NIR) is also being carried out for developing non-invasive, portable and optical solutions for quality analysis of food samples. Software like Matlab, LABView, and MPLAB are regularly used to train students for carrying out researches in this lab. Two externally sponsored research projects have been completed successfully in this laboratory.</p>
                </div>
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-2">2. Control Lab:</div>
                    <p className="text-justify lg:text-base text-sm">A project design and development of low-cost BLDC motor drive for solar PV based irrigation system. One externally sponsored research project has been completed successfully in this laboratory</p>
                </div>
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-2">3. Industrial Drives and Control Lab:</div>
                    <p className="text-justify lg:text-base text-sm">The group of students led by Dr. Vimlesh Verma works towards the development of control techniques for electrical machine drives. High end hardware simulators like HIL, and software like DSpace are a part of this lab. One externally sponsored research project has been completed successfully in this laboratory.</p>
                </div>
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-2">4.SCADA Lab:</div>
                    <p className="text-justify lg:text-base text-sm">This space is equipped with the facilities where Interfacing of wind turbines with power systems and realization of hardware of grid using supervisory control can be done by masters and PhD students.</p>
                </div>
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-2">5. NIT Patna campus smart metered distribution system:</div>
                    <p className="text-justify lg:text-base text-sm">This enables us to get the real time measurement of power, current, frequency, voltage and other electrical parameters throughout the system at different nodes. The dataset created acts as an asset and allows us to work further on load forecasting, demand side management, generation and distribution planning, also renewable generation planning). One externally sponsored research project under Dr. Mala De has been completed successfully in this laboratory.</p>
                </div>
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-2">6. Power electronics Lab:</div>
                    <p className="text-justify lg:text-base text-sm">A team of students along with Dr. Ambarisha Mishra is working on a six-phase induction motor drive.</p>
                </div>        
            </div>
        </div>
    )
}