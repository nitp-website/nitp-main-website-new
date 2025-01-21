"use client"
import BackDepartment from '../../../components/department/BackDepartment';
import Image from 'next/image';
import {useState,useEffect} from "react";

function Carousel({children:pics,
    autoSlideInterval=3000,
    autoSlide=true,}){
    const [curr,setCurr]=useState(0)
    const prev=()=>{
        setCurr((curr)=>(curr===0?pics.length-1:curr-1))
    }
    const next=()=>{
        setCurr((curr)=>(curr===pics.length-1?0:curr+1))
    }
    useEffect(()=>{
        if(!autoSlide) return 
        const slideInterval=setInterval(next,autoSlideInterval)
        return ()=>clearInterval(slideInterval)
    },[])
    return(
        <div className=' relative overflow-hidden'>
            <div className='flex transition-transform ease-out duration-1000'
            style={{transform:`translateX(-${curr*100}%)`}}>
                {pics}
            </div>
        </div>
    )
}

function Page(){
    var labUrl = [
        "/alab1.jpg",
        "/alab2.jpg",
        "/alab3.jpg",
        "/alab4.jpg",
        "/alab5.jpg",
    ]
    return (
        <div className=" flex flex-col p-5 text-black">  
            <div className="flex flex-col md:ml-10">
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-2xl lg:text-3xl font-bold">
                        Labs
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Architecture
                    </p>
                </div>
                <div>
                    <BackDepartment navigate={'/Department/Archi'}/>
                </div>
            </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10 flex flex-col lg:flex-row mt-6">
                    <div className="flex flex-col lg:w-3/4">
                        <p className="text-red-900 font-semibold lg:text-2xl text-xl mb-4">
                            Departmental Laboratories
                        </p>
                        <div className="lg:w-3/4">
                            <p className="text-justify font-semibold pl-6">
                            The Department has 4 lecture room, 8 Studios and 5 laboratories. 
                            Apart from these there are a number of common class rooms, laboratories 
                            and infrastructure of the Institute which are as per Council of Architecture 
                            norms. Besides these Department has enough spaces, which are available for the 
                            meet the requirements of all the faculty members, staff, office and students.
                            </p>
                            <br/><br/>
                            Architecture Department, NIT Patna has well-equipped laboratories for the academic and research requirements of UG and PG students.
                            <ol className="mt-4 list-decimal ml-4">
                                <li>
                                    Building Material Lab
                                </li>
                                <li>
                                    Climatology Lab
                                </li>
                                <li>
                                    Computer Lab
                                </li>
                            </ol>
                            

                        </div>
                    </div>
                    <div className='w-[300px] sm:w-[400px]  lg:w-1/2 m-auto mt-8 xl:mr-20'>
                    <Carousel autoSlide={true}>
                    {labUrl.map((img,i)=>(
                        
                        <Image src={img} alt='image' width={500}
                        height={500} key={i} className='object-fill'
                        />
                        
                    ))}
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Page