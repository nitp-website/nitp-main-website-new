import React, { useState } from "react";
import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglescholar, SiScopus, SiOrcid, SiLinkedin } from "react-icons/si";
import { TbLetterV } from "react-icons/tb";
import { FaFileAlt, FaFilePdf, FaRegFile } from "react-icons/fa";

import Link from "next/link";
const Sidebar = ({ profileData, aboutMe }) => {
  const [profile, setProfile] = useState(profileData);
  const {
    name,
    email,
    designation,
    cv,
    ext_no,
    department,
    image,
    linkedin,
    vidwan,
    scopus,
    orcid,
    google_scholar,
    research_interest,
    about,
  } = profile || {};

  // console.log(profile);

  const aboutMeData = aboutMe || {};
  // console.log(aboutMeData[0]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="h-fit w-full flex-col shadow-lg text-black rounded-md">
      <div className="h-fit w-full rounded-md">
        <div className="relative">
          <div className="flex justify-center p-2 rounded-md">
            {image ? (
              <div className="relative h-[200px] w-auto max-w-full">
                <Image
                  src={image}
                  alt="Profile Image"
                  height={200} // Fixed height
                  width={200} // A default width (will be overridden)
                  className="mx-auto rounded-3xl w-auto max-w-full"
                  loading="lazy"
                  style={{ objectFit: "cover", height: "200px", width: "auto" }}
                />
              </div>
            ) : (
              <CgProfile className="rounded-full h-32 w-32 md:h-44 md:w-52 md:mx-8" />
            )}
          </div>

          {linkedin ? (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 flex flex-col gap-2 bg-red-600 items-center justify-center rounded-l-lg px-2">
              <Link href={`${linkedin}`} className="flex flex-col items-center">
                <img
                  src={`/linkedin.svg`}
                  className="bg-black rounded-full h-8 w-8"
                />
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex p-2 justify-evenly gap-2 h-fit text-black">
          {vidwan ? (
            <div className="w-16 h-16 bg-slate-200 flex justify-center rounded-md items-center">
              <Link href={`${vidwan}`} className="flex flex-col items-center">
                <TbLetterV className="w-8 h-8" />
                Vidwan
              </Link>
            </div>
          ) : (
            <></>
          )}

          {scopus ? (
            <div className="w-16 h-16 bg-slate-200 flex justify-center rounded-md items-center">
              <Link href={`${scopus}`} className="flex flex-col items-center">
                <img
                  src={`/scopus.svg`}
                  className="bg-red-600 rounded-full h-8 w-8"
                />
                <h3>scopus</h3>
              </Link>
            </div>
          ) : (
            <></>
          )}

          {google_scholar ? (
            <div className="w-16 h-16 bg-slate-200 flex justify-center rounded-md items-center">
              <Link
                href={`${google_scholar}`}
                className="flex flex-col items-center"
              >
                <img
                  src={`/googleScholar.svg`}
                  className="bg-red-600 rounded-full h-8 w-8"
                />
                <h3>Scholar</h3>
              </Link>
            </div>
          ) : (
            <></>
          )}

          {orcid ? (
            <div className="w-16 h-16 bg-slate-200 flex justify-center rounded-md items-center">
              <Link href={`${orcid}`} className="flex flex-col items-center">
                <img
                  src={`/orcid.svg`}
                  className="bg-red-600 rounded-full h-8 w-8"
                />
                <h3>ORCID</h3>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="w-full px-4">
        {aboutMeData[0]?.content && (
          <div className="mt-6 p-3 bg-white rounded-md shadow-sm">
            <h2 className="text-2xl font-bold border-b pb-2 uppercase">
              About
            </h2>
            <p className="text-gray-700 mt-2 text-justify">{aboutMeData[0].content}</p>
          </div>
        )}

        {research_interest ? (
          <div className="mt-6 p-3 bg-white rounded-md shadow-sm">
            <h2 className="text-2xl font-bold border-b pb-2 uppercase">
              Expertise
            </h2>
            <p className="text-gray-700 mt-2 text-justify">{research_interest}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
