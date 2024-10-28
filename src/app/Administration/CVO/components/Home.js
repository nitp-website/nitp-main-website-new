"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import cvo_officer_img from "../../../../../public/amitsingh.webp";

const BlinkingNewText = () => {
  const [color, setColor] = useState("rgb(255,0,0)");
  let x = 1;

  const blink = () => {
    if (x % 2) {
      setColor("rgb(255,0,0)");
    } else {
      setColor("rgb(0,0,255)");
    }
    x++;
    if (x > 2) {
      x = 1;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      blink();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span style={{ color }}> new</span>;
};

const BlinkingListItem = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
      <BlinkingNewText className="text-[20px]" />
    </li>
  );
};

const RegistrarPage = () => {
  return (
    <div className="p-4 md:p-4 flex flex-col  h-auto">
      <h1 className="text-2xl text-center pt-5 pb-7 mb-2 md:pb-0  text-red-900 font-bold">
        Chief Vigilance Officer - NIT Patna
      </h1>
      <div className=" flex flex-col items-center p-2 ">
        <div className="flex flex-col gap-8 h-auto">
          <div className="flex flex-col">
            <div className="border shadow-xl w-full  p-4 text-md font-semibold text-black">
              <div className="md:text-sm text-xs p-2">
                The Chief Vigilance Officers are extended hands of the CVC. The
                Chief Vigilance Officers are considerably higher level officers
                who are appointed in each and every Department/Organisation to
                assist the Head of the Department/Organisation in all vigilance
                matters.
              </div>
              <div className="flex flex-col mt-3 p-3">
                <h1 className="text-red-800 font-bold text-xl pb-2">
                  Notification
                </h1>
                <ul className="list-disc cursor-pointer p-3 ml-2 md:text-sm text-xs">
                  <BlinkingListItem href="https://pledge.mygov.in/cvc/">
                    TAKE INTEGRITY ePLEDGE
                  </BlinkingListItem>
                  <BlinkingListItem href="https://cvc.gov.in/vaw.html">
                    Vigilance Awareness Week 2024
                  </BlinkingListItem>
                  <BlinkingListItem href="https://drive.google.com/file/d/1cGKocBxoYu2yYqBjyNpBeZST5WWZCNms/view?usp=drive_link">
                    Jingles for Vigilance Awareness Week 2024
                  </BlinkingListItem>
                </ul>
              </div>

              <div className="border-2 rounded-xl pl-4 mt-4 pb-2">
                <div className="grid md:grid-cols-2 p-3  md:gap-20">
                  <div>
                    <span className="text-red-800 text-xl font-bold mt-4">
                      Contact Details
                    </span>

                    <div className="flex flex-col mb-2 mt-4 md:text-sm text-xs">
                      <span className="text-md font-bold">
                        Dr. Amit Kumar Singh
                      </span>
                      <span className="text-sm font-semibold">
                        Chief Vigilance Officer
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        Associate Professor
                      </span>
                      <span className="text-sm font-semibold">
                        Department of Computer Science & Engineering
                      </span>
                      <span className="text-sm font-semibold">
                        National Institute of Technology Patna
                      </span>
                      <span className="text-sm font-semibold">
                        Ashok Rajpath, Patna, Bihar, 800005, India
                      </span>
                    </div>
                    <div className="flex flex-col mt-4">
                      <span className="text-md font-bold">Official Email:</span>
                      <span>
                        amit.singh@nitp.ac.in , amit_245singh@yahoo.com
                      </span>
                      <span className="text-md font-bold">
                        Telephone Details
                      </span>
                      <span>(+91) 612-2371715 extn. 225</span>
                    </div>
                  </div>
                  <div className="p-5" >
                    <Image className="rounded-lg" 
                      height={270}
                      src={cvo_officer_img} 

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarPage;
