import React from "react";
import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";
import { SiScopus } from "react-icons/si";
import { FaFileAlt, FaFilePdf, FaRegFile } from "react-icons/fa";

import Link from "next/link";
const FacultyHeader = ({
  name,
  image,
  research,
  designation,
  email,
  linkedin,
  orcid,
  personal_webpage,
  google_scholar,
  vidwan,
  scopus,
  resume,
}) => {
  return (
    <div className="h-fit md:h-5/6 md:rounded-lg bg-[#941B0C] p-2 md:flex md:mx-2 shadow-2xl">
      {/* image of professor */}

      <div className="w-full flex justify-center items-center md:w-fit">
        {image ? (
          <Image
            alt="blank"
            src={image}
            className="rounded-full h-32 w-32 md:h-44 md:w-52 md:mx-8 md:hover:h-48 md:hover:w-60"
            width={250}
            height={250}
            loading="lazy"
          />
        ) : (
          <CgProfile className="rounded-full h-32 w-32 md:h-44 md:w-52 md:mx-8"></CgProfile>
        )}
      </div>

      <div
        className="w-full flex flex-col  mt-5 border hover:shadow-3xl hover:bg-[#ac4b3c] shadow-xl rounded-md p-2 md:mt-2 md:mx-4"
        style={{ boxShadow: "2px 2px 2px 1px black" }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* name designation reserch interest */}
          <div className="flex flex-col lg:w-[60%] gap-2 text-sm md:text-lg">
            <div className="flex font-semibold text-white">
              <span className="flex  md:w-[200px]">
                <CgProfile className="mt-1 mx-2" /> Name{" "}
              </span>
              <span>: {name}</span>
            </div>
            <div className="flex font-semibold text-white">
              <span className="flex  md:w-[200px]">
                <CgProfile className="mt-1 mx-2" />
                Designation{" "}
              </span>
              <span>: {designation}</span>
            </div>
            <div className="flex font-semibold text-white">
              <span className="flex  md:w-[200px]">
                <MdOutlineMail className="mt-1 mx-2" />
                Email{" "}
              </span>
              <span>
                <Link href={`mailto:${email ? email : ""}`}>: {email}</Link>
              </span>
            </div>
            {research ? (
              <div className="flex flex-col font-semibold text-white">
                <span className="flex w-fit">
                  <SiGooglescholar className="mt-1 mx-2 " /> Research Interest :
                </span>
                <span className="ml-8"> {research}</span>
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* links of vidwan scopus linkedin google_scholar orcid and personal website of professor */}

          <div className="flex flex-col lg:w-[30%]  mt-2 ml-3">
            <div className="flex mt-2 ">
              {vidwan ? (
                <Link
                  href={`${vidwan}`}
                  className=" w-[30px] h-[30px]  pl-2 bg-blue-400 rounded-full font-semibold mx-2"
                >
                  V
                </Link>
              ) : (
                <></>
              )}
              {scopus ? (
                <Link href={`${scopus}`} className="w-[30px] h-[30px] mx-2">
                  <Image
                    src="/scopus.svg"
                    width={100}
                    height={100}
                    alt="blank"
                  />
                </Link>
              ) : (
                <></>
              )}
              {linkedin ? (
                <Link href={`${linkedin}`} className="w-[30px] h-[30px] mx-2">
                  <Image
                    src="/linkedin.png"
                    width={100}
                    height={100}
                    alt="blank"
                  ></Image>
                </Link>
              ) : (
                <></>
              )}
              {google_scholar ? (
                <Link
                  href={`${google_scholar}`}
                  className="w-[30px] h-[30px] mx-2"
                >
                  <Image
                    src="/googleScholar.svg"
                    width={100}
                    height={100}
                    alt="blank"
                  />
                </Link>
              ) : (
                <></>
              )}
              {orcid ? (
                <Link href={`${orcid}`} className="w-[30px] h-[30px] mx-2">
                  <Image
                    src="/orcid.svg"
                    width={100}
                    height={100}
                    alt="blank"
                  ></Image>
                </Link>
              ) : (
                <></>
              )}
            </div>
            {personal_webpage ? (
              <Link
                href={`${personal_webpage}`}
                className="  bg-red-700 border p-2 text-sm w-fit rounded-md hover:shadow-2xl  m-3 shadow-xl font-semibold text-white"
              >
                Personal Webpage
              </Link>
            ) : (
              <></>
            )}
            {resume ? (
              <Link
                href={resume}
                className="mt-2 flex items-center justify-center bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFilePdf className="mr-2" /> Resume
              </Link>
            ) : (
              <></>
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyHeader;
