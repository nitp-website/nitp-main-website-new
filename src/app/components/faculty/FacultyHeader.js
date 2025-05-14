"use client";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import FacultyDropdown from "./FacultyDropdown";

const FacultyHeader = ({ Data }) => {
  const [facultyData, setFacultyData] = useState(Data);
  const [qrCode, setQrCode] = useState("");

  const {
    profile,
    phd_candidates,
    journal_papers,
    conference_papers,
    sponsored_projects,
    consultancy_projects,
    startups,
    ipr,
    book_chapters,
  } = facultyData || {};

  const { name, email, designation, cv, department, ext_no } = profile || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  // Filter the ipr array
  const filteredIpr = ipr?.filter((item) => item.grant_date || item.registration_date || item.publication_date) || [];

  // console.log(filteredIpr);

  const dataSections = [
    {
      label: "Journal Papers",
      count: journal_papers?.length,
      bgColor: "bg-red-800",
    },
    {
      label: "Consultancy Projects",
      count: consultancy_projects?.length,
      bgColor: "bg-red-700",
    },
    {
      label: "Intellectual Property Rights",
      count: filteredIpr.length,
      bgColor: "bg-red-600",
    },
    {
      label: "PhD Candidates",
      count: phd_candidates?.length,
      bgColor: "bg-red-700",
    },
    {
      label: "Conference Papers",
      count: conference_papers?.length,
      bgColor: "bg-red-800",
    },
    {
      label: "Sponsored Projects",
      count: sponsored_projects?.length,
      bgColor: "bg-red-900",
    },
    { label: "Startups", count: startups?.length, bgColor: "bg-pink-500" },
    {
      label: "Book Chapters",
      count: book_chapters?.length,
      bgColor: "bg-teal-500",
    },
  ]
    .filter((section) => section.count > 0)
    .slice(0, 5);

  return (
    <div className="bg-slate-100 w-full">
      <div className="hidden md:flex flex-col justify-between gap-4 p-6 bg-white text-black rounded-lg shadow-lg">
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
            {dataSections.slice(2, 6).map((section, index) => (
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
      <div>
        <FacultyDropdown facultyData={facultyData} />
      </div>
    </div>
  );
};

export default FacultyHeader;