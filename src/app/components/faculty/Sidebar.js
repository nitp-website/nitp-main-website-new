import React, { useEffect, useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";

import { CgProfile } from "react-icons/cg";

import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import Link from "next/link";
const Sidebar = ({ Data }) => {
  const [facultyData, setFacultyData] = useState(Data);

  const {
    phd_candidates,
    journal_papers,
    conference_papers,
    sponsored_projects,
    consultancy_projects,
    startups,
    ipr,
    book_chapters,
  } = facultyData || {};
  const [qrCode, setQrCode] = useState("");
  const ongoingStatuses = [
    "Admission",
    "Comprehension",
    "Presubmission",
    "Thesis Submitted",
    "Ongoing",
  ];

  const ongoingPhdCandidates =
    phd_candidates?.filter((candidate) =>
      ongoingStatuses.includes(candidate.current_status)
    ) || [];

  // console.log(phd_candidates);
  // console.log(ongoingPhdCandidates);

  const dataSections = [
    {
      label: "Journal Papers",
      count: journal_papers?.length,
      bgColor: "bg-red-500",
    },
    {
      label: "Conference Papers",
      count: conference_papers?.length,
      bgColor: "bg-blue-500",
    },
    {
      label: "PhD Candidates",
      count: ongoingPhdCandidates?.length,
      bgColor: "bg-green-500",
    },
    {
      label: "Sponsored Projects",
      count: sponsored_projects?.length,
      bgColor: "bg-yellow-500",
    },
    {
      label: "Consultancy Projects",
      count: consultancy_projects?.length,
      bgColor: "bg-purple-500",
    },
    { label: "Startups", count: startups?.length, bgColor: "bg-pink-500" },
    {
      label: "Intellectual Property Rights",
      count: ipr?.length,
      bgColor: "bg-orange-500",
    },
    {
      label: "Book Chapters",
      count: book_chapters?.length,
      bgColor: "bg-teal-500",
    },
  ]
    .filter((section) => section.count > 0)
    .slice(0, 4);

  const [profile, setProfile] = useState(facultyData.profile);

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
  } = profile || {};

  const [aboutMeData, setAboutMeData] = useState(Data.about_me);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cv) {
      QRCode.toDataURL(cv).then(setQrCode).catch(setError);
    }
  }, [cv]);
  // console.log(profile);

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
        <div className="md:hidden flex flex-col justify-between gap-4 p-6 text-black rounded-lg">
          <div className="flex flex-col min-[475px]:flex-row justify-between bg-white gap-4">
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="font-semibold">{designation}</p>
              <p className="font-semibold">{department}</p>
              {email && (
                <p>
                  <MdEmail className="inline-block" size={25} />:{" "}
                  <a
                    href="#"
                    className="underline"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`,
                        "_blank"
                      );
                    }}
                  >
                    {email}
                  </a>
                </p>
              )}
              {ext_no && (
                <p className="flex items-center">
                  <IoMdCall className="inline-block mt-2" size={25} />:{" "}
                  <a href={`tel:${ext_no}`}>{ext_no}</a>
                </p>
              )}
            </div>

            <div className="flex flex-col items-center">
              {qrCode && (
                <img src={qrCode} alt="QR Code" className="w-32 h-32" />
              )}
              {cv && (
                <a
                  href={cv}
                  className="text-xs text-center md:text-normal mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                  download
                >
                  Download CV
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
            <div className="flex gap-4 flex-wrap justify-center">
              {dataSections.slice(0, 2).map((section, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 flex text-center items-center justify-center text-white font-bold ${section.bgColor} rounded-lg`}
                >
                  <h3 className="text-sm">
                    <span className="text-4xl">{section.count}</span>
                    <br />
                    {section.label}
                  </h3>
                </div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              {dataSections.slice(2, 4).map((section, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 flex text-center items-center justify-center text-white font-bold ${section.bgColor} rounded-lg`}
                >
                  <h3 className="text-sm">
                    <span className="text-4xl">{section.count}</span>
                    <br />
                    {section.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex p-2 justify-evenly gap-2 h-fit text-black">
          {vidwan ? (
            <div className="w-16 h-16 bg-slate-200 flex justify-center rounded-md items-center">
              <Link href={`${vidwan}`} className="flex flex-col items-center">
                <img src={`/vidwan.svg`} className="rounded-full h-8 w-8" />
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
                  className="bg-blue-600 rounded-full h-8 w-8"
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
                  className="bg-yellow-600 rounded-full h-8 w-8"
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
        {aboutMeData?.length > 0 && aboutMeData[0]?.content && (
          <div className="mt-6 p-3 bg-white rounded-md shadow-sm">
            <h2 className="text-2xl font-bold border-b pb-2 uppercase">
              About
            </h2>
            <p className="text-gray-700 mt-2 text-justify">
              {aboutMeData[0].content}
            </p>
          </div>
        )}

        {research_interest ? (
          <div className="mt-6 p-3 bg-white rounded-md shadow-sm">
            <h2 className="text-2xl font-bold border-b pb-2 uppercase">
              Expertise
            </h2>
            <p className="text-gray-700 mt-2 text-justify">
              {research_interest}
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
