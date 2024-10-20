"use client"
import React, { useState } from "react";
import Admincard from "../Admincard";
import "../style.css"
import Link from "next/link";
const RegistrarPage = () => {
  const [state, setstate] = useState("Home");
  const tags = ["Home", "People", "Notification", "Photo Gallery"]
  const RegistrarData = [
    {
      name: "Dr. Amit Kumar Singh",
      designation: "Chief Vigilance Officer - NIT Patna",
      type: "amit.singh@nitp.ac.in"
    }
  ]

  return (
    <div className=" p-4 md:p-4 ">
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold	">Chief Vigilance Officer - NIT Patna</h1>
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
                <div className="border shadow-xl w-full h-[80vh] p-3 text-md font-semibold text-black">
                  <div>The Chief Vigilance Officers are extended hands of the CVC. The Chief Vigilance Officers are considerably higher level officers who are appointed in each and every Department/Organisation to assist the Head of the Department/Organisation in all vigilance matters.</div>
                  <div className="flex flex-col">
                    <span className="text-red-800 text-xl font-bold mt-4">Contact Details</span>
                    <div className="flex flex-col mb-2 mt-4">
                      <span className=" text-md font-bold">Dr. Amit Kumar Singh
                      </span>
                      <span className=" text-sm font-semibold">Chief Vigilance Officer</span>
                    </div>
                    <div className="flex flex-col">
                      <span className=" text-sm font-semibold">Associate Professor</span>
                      <span className=" text-sm font-semibold">Department of Computer Science & Engineering</span>
                      <span className=" text-sm font-semibold">National Institute of Technology Patna</span>
                      <span className=" text-sm font-semibold">Ashok Rajpath, Patna, Bihar, 800005, India</span>
                    </div>
                    <div className="flex flex-col mt-4">
                      <span className="text-md font-bold">Official Email:</span>
                      <span>amit.singh@nitp.ac.in , amit_245singh@yahoo.com</span>
                      <span className="text-md font-bold">TelePhone Details</span>
                      <span>(+91) 612-2371715 extn. 225</span>
                    </div>
                  </div>
                </div>
                :
                <></>
            }
            {
              state === "People" ?
                <>
                  <div className="admincarddiv items-center justify-center ">
                    {RegistrarData.map((item, idx) => (
                      <Link key={idx} href={"/Department/CSE/faculty/amit.singh@nitp.ac.in"}>
                        <Admincard
                          name={item.name}
                          designation={item.designation}
                          type={item.type}

                        />
                      </Link>
                    ))}
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Notification" ?
                <>
                  <div className="border shadow-xl w-full h-[70vh] p-5 text-md font-semibold text-black">
                    <ul className="list-disc cursor-pointer underline">
                      <li><Link href="https://pledge.mygov.in/cvc/">TAKE INTEGRITY ePLEDGE</Link></li>
                      <li><Link href="https://cvc.gov.in/vaw.html">Vigilance Awareness Week 2024</Link></li>
                      <li><Link href="https://drive.google.com/file/d/1cGKocBxoYu2yYqBjyNpBeZST5WWZCNms/view?usp=drive_link">Jingles for Vigilance Awareness Week 2024</Link></li>
                    </ul>
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
                  <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold text-black">
                    <div>The Chief Vigilance Officers are extended hands of the CVC. The Chief Vigilance Officers are considerably higher level officers who are appointed in each and every Department/Organisation to assist the Head of the Department/Organisation in all vigilance matters.</div>
                    <div className="flex flex-col">
                    <span className="text-red-800 text-xl font-bold mt-4">Contact Details</span>
                    <div className="mb-2 flex flex-col mt-4">
                      <span className=" text-md font-bold">Dr. Amit Kumar Singh
                      </span>
                      <span className=" text-md font-semibold">Chief Vigilance Officer</span>
                    </div>
                    <div className="flex flex-col">
                      <span className=" text-sm font-semibold">Associate Professor</span>
                      <span className=" text-sm font-semibold">Department of Computer Science & Engineering</span>
                      <span className=" text-sm font-semibold">National Institute of Technology Patna</span>
                      <span className=" text-sm font-semibold">Ashok Rajpath, Patna, Bihar, 800005, India</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold">Official Email:</span>
                      <span><Link href={"mailto:amit.singh@nitp.ac.in"} >amit.singh@nitp.ac.in</Link> ,<Link href={"mailto:amit_245singh@yahoo.com"} > amit_245singh@yahoo.com</Link></span>
                      <span className="text-lg font-bold">TelePhone Details</span>
                      <span>(+91) 612-2371715 extn. 225</span>
                    </div>
                  </div>
                  </div>
                  
                </>
                :
                <></>
            }
            {
              state === "People" ?
                <>
                  <div className="admincarddiv items-center justify-center ">
                    {RegistrarData.map((item, idx) => (
                      <Link key={idx} href={"/Department/CSE/faculty/amit.singh@nitp.ac.in"}>
                        <Admincard
                          name={item.name}
                          designation={item.designation}
                          type={item.type}

                        />
                      </Link>
                    ))}
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Notification" ?
                <>
                  <div className="border shadow-xl w-full h-[70vh] p-7 text-md font-semibold text-black ">
                    <ul className="list-disc cursor-pointer underline">
                      <li className="hover:text-red-800"><Link target="blank" href="https://pledge.mygov.in/cvc/">TAKE INTEGRITY ePLEDGE</Link></li>
                      <li className="hover:text-red-800"><Link target="blank" href="https://cvc.gov.in/vaw.html">Vigilance Awareness Week 2024</Link></li>
                      <li className="hover:text-red-800"><Link target="blank" href="https://drive.google.com/file/d/1cGKocBxoYu2yYqBjyNpBeZST5WWZCNms/view?usp=drive_link">Jingles for Vigilance Awareness Week 2024</Link></li>
                    </ul>
                  </div>
                </>
                :
                <></>
            }
          </div>
        </div>

      </div>

    </div>
  );
};

export default RegistrarPage;
