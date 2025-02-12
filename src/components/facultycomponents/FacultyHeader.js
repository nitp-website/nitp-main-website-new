"use client";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";
import {
  FaBook,
  FaGraduationCap,
  FaIndustry,
  FaLaptopCode,
} from "react-icons/fa"; // Example for new icons
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import FacultyDropdown from "./FacultyDropdown";

const FacultyHeader = ({ Data }) => {
  const [facultyData, setFacultyData] = useState(Data);
  const [qrCode, setQrCode] = useState("");

  // Destructuring profile directly from facultyData
  const {
    profile,
    phd_candidates,
    journal_papers,
    conference_papers,
    textbooks,
    edited_books,
    book_chapters,
    sponsored_projects,
    consultancy_projects,
    ipr,
    patents,
    startups,
    teaching_engagement,
    project_supervision,
    workshop_conferences,
    institute_activities,
    department_activities,
    memberships,
    education,
    work_experience,
    internships,
  } = facultyData || {};
  // Extract name and email from profile
  const { name, email, designation, cv, department, ext_no } = profile || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(name, email, designation); // Logs the updated name and email
    if (facultyData) setLoading(false);
  }, [name, email, designation, cv, department, phd_candidates]);

  useEffect(() => {
    if (cv) {
      QRCode.toDataURL(cv).then(setQrCode).catch(setError);
    }
  }, [cv]);

  const [error, setError] = useState(null);

  if (loading) return <p className="text-black">Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="bg-slate-100 w-full">
      <div className="flex flex-col justify-between gap-4 p-6 bg-white text-black rounded-lg shadow-lg">
        <div className="flex flex-col min-[475px]:flex-row justify-between bg-white gap-4">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="font-semibold">{designation}</p>
            <p className="font-semibold">{department}</p>
            <p>
              <MdEmail className="inline-block" size={25} />:{" "}
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
            </p>
            <p className="flex items-center">
              <IoMdCall className="inline-block mt-2" size={25} />:{" "}
              <a href={`tel:${ext_no}`}>{ext_no}</a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            {qrCode && <img src={qrCode} alt="QR Code" className="w-32 h-32" />}
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
        <div className="flex flex-col md:flex-row gap-4 mt-6 items-center">
          <div className="flex gap-4">
            {journal_papers?.length > 0 && (
              <div className="w-24 h-24 text-center flex items-center justify-center text-white font-bold bg-red-500 rounded-lg">
                <h3>
                  <span className="text-4xl">{journal_papers.length}</span>
                  <br />
                  Journal Papers
                </h3>
              </div>
            )}
            {consultancy_projects?.length > 0 && (
              <div className="w-24 h-24 flex text-sm text-center items-center justify-center text-white font-bold bg-blue-500 rounded-lg">
                <h3>
                  <span className="text-4xl">
                    {consultancy_projects.length}
                  </span>
                  <br />
                  Consultancy Projects
                </h3>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            {project_supervision?.length > 0 && (
              <div className="w-24 h-24 flex text-center items-center justify-center text-white font-bold bg-green-500 rounded-lg">
                <h3>
                  <span className="text-4xl">{project_supervision.length}</span>
                  <br />
                  Projects
                </h3>
              </div>
            )}
            {project_supervision?.length > 0 && (
              <div className="w-24 h-24 flex items-center text-center justify-center text-black font-bold bg-yellow-400 rounded-lg">
                <h3>
                  <span className="text-4xl">{patents.length}</span>
                  <br />
                  Patents
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <FacultyDropdown facultyData={facultyData} />
      </div>
    </div>
  );
};

export default FacultyHeader;
