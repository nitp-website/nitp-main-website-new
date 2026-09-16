"use client";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import FacultyDropdown from "./FacultyDropdown";
import { getExperience } from "../../../utils/experienceCalculator";

const FacultyHeader = ({ summary, email, Data, workExperience }) => {
  const facultyData = summary || Data || {};
  const counts = facultyData.counts || {};
  const { profile } = facultyData;
  const { name, designation, cv, department, ext_no, academic_responsibility, email: profileEmail } = profile || {};

  const joiningDate = profile?.joining_date || profile?.date_of_joining || profile?.date_of_joining_nitp || facultyData?.joining_date || facultyData?.date_of_joining;
  const workExpList = workExperience || facultyData?.work_experience || [];
  const experience = getExperience(joiningDate, workExpList);

  const [qrCode, setQrCode] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cv) QRCode.toDataURL(cv).then(setQrCode).catch(setError);
  }, [cv]);

  const getCount = (key) => Number(counts[key] || 0);
  const iprCount = getCount('ipr');

  const dataSections = [
    { label: "Journal Papers",       count: getCount('journal_papers'),      bgColor: "bg-red-800" },
    { label: "Sponsored Projects",    count: getCount('sponsored_projects'),  bgColor: "bg-red-900" },
    { label: "PhD Candidates",        count: getCount('phd_candidates'),      bgColor: "bg-red-700" },
    { label: "Intellectual Property Rights", count: iprCount,                 bgColor: "bg-red-600" },
    { label: "Conference Papers",     count: getCount('conference_papers'),   bgColor: "bg-red-800" },
    { label: "Consultancy Projects",  count: getCount('consultancy_projects'),bgColor: "bg-red-700" },
    { label: "Startups",              count: getCount('startups'),            bgColor: "bg-pink-500" },
    { label: "Book Chapters",         count: getCount('book_chapters'),       bgColor: "bg-teal-500" },
  ]
    .filter(s => s.count > 0)
    .slice(0, 5);

  const displayEmail = email || profileEmail;

  return (
    <div className="bg-slate-100 w-full">
      <div className="hidden md:flex flex-col justify-between gap-4 p-6 bg-white text-black rounded-lg shadow-lg">
        <div className="flex flex-col min-[475px]:flex-row justify-between bg-white gap-4">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            {academic_responsibility && (
              <p className="text-[rgb(153,27,27)] font-medium">{academic_responsibility}</p>
            )}
            <p className="font-semibold">{designation}</p>
            <p className="font-semibold">{department}</p>
            {displayEmail && (
              <p>
                <MdEmail className="inline-block" size={25} />:{" "}
                <a href="#" className="underline" onClick={(e) => {
                  e.preventDefault();
                  window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${displayEmail}`, "_blank");
                }}>
                  {displayEmail}
                </a>
              </p>
            )}
            {ext_no && (
              <p className="flex items-center">
                <IoMdCall className="inline-block mt-2" size={25} />:{" "}
                <a href={`tel:${ext_no}`}>{ext_no}</a>
              </p>
            )}
            {experience && (
              <p className="flex items-center gap-2 mt-3 px-3 py-1.5 bg-red-50 text-red-900 border border-red-200 rounded-md w-fit text-sm font-semibold shadow-sm">
                <FaBriefcase className="text-red-700 shrink-0" size={16} />
                <span>Experience: {experience}</span>
              </p>
            )}
          </div>
          <div className="flex flex-col items-center">
            {qrCode && <img src={qrCode} alt="QR Code" className="w-32 h-32" />}
            {cv && (
              <a href={cv} className="text-xs text-center md:text-normal mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition" download>
                Download CV
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6 items-center">
          <div className="flex gap-4 flex-wrap justify-center">
            {dataSections.slice(0, 2).map((s, i) => (
              <div key={i} className={`w-24 h-24 flex text-center items-center justify-center text-white font-bold ${s.bgColor} rounded-lg`}>
                <h3 className="text-sm"><span className="text-4xl">{s.count}</span><br />{s.label}</h3>
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {dataSections.slice(2, 6).map((s, i) => (
              <div key={i} className={`w-24 h-24 flex text-center items-center justify-center text-white font-bold ${s.bgColor} rounded-lg`}>
                <h3 className="text-sm"><span className="text-4xl">{s.count}</span><br />{s.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <FacultyDropdown counts={counts} email={displayEmail} />
      </div>
    </div>
  );
};

export default FacultyHeader;
