"use client";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faGlobe,
  faBoxArchive,
  faIndianRupeeSign,
  faHome,
  faBuilding,
  faGavel,
  faToolbox,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import RulesTab from "./Rules/page";
import FacilitiesTab from "./Facilities/page";
import ContactTab from "./Contacts/page";


const AboutHMC = `NIT Patna is a fully residential institute that provides comprehensive accommodation facilities for its students. Each hostel is equipped with essential amenities, including a common room, indoor recreation area, lounge, and a spacious dining hall with a mess facility. The hostel system is overseen by the Chairman of the Hostel Management Committee (HMC), who serves as the head of the hostel administration. Assisting the Chairman are the Wardens, who are responsible for the day-to-day management of individual hostels, supported further by Assistant Wardens.`;


const boysHostels = [
  "Aryabhatta Hostel",
  "Brahmaputra Hostel",
  "Ganga Hostel",
  "Kosi Hostel",
  "Kosi Extension Hostel",
  "Sone Hostel"
];

const girlsHostels = [
  "Bagmati Hostel",
  "Kadimbini Hostel"
];

const HMCOfficeContacts = [
  {
    name: "Dr. Bambam Kumar",
    designation: "Chairman, HMC",
    mobile: "7895717492",
    email: "bambam.ec@nitp.ac.in"
  },
  {
    name: "Yash Sinha",
    designation: "Jr. Assistant",
    mobile: "6200579307",
    email: "yash.ja@nitp.ac.in"
  },
  {
    name: "Sunil Kumar",
    designation: "Office Clerk",
    mobile: "9973031233",
    email: ""
  },
  {
    name: "Ajit Kumar",
    designation: "Office Assistant",
    mobile: "6207272377",
    email: ""
  },
];

const HomeTab = () => {
  return (
    <div className="text-black mt-2 w-full text-sm md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-red-950 text-center">
        About HMC
      </h1>
      <p className="text-red-950 text-justify text-base">{AboutHMC}</p>

      <div className="mt-5 mx-auto w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Hostel Details
        </h1>
        <p className="text-red-950 text-justify mb-2">Currently, NIT Patna has Six Boys Hostel and Two Girls' Hostels.</p>
        <div className="mx-auto bg-gray-500">
          <table className="min-w-full bg-white border border-gray-300 text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-100 text-lg">Boys Hostels</th>
                <th className="py-2 px-4 border-b bg-gray-100 text-lg">Girls Hostels</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(boysHostels.length, girlsHostels.length) }).map((_, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">
                    {boysHostels[index] || ""}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {girlsHostels[index] || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-red-950 text-center mt-6">
        HMC Office Contacts
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100 mb-6">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#421010] text-white">
              <th className="text-left px-6 py-4 font-semibold">
                Name
              </th>
              <th className="text-center px-6 py-4 font-semibold w-48">
                Designation
              </th>
              <th className="text-center px-6 py-4 font-semibold w-48">
                Mobile
              </th>
              <th className="text-center px-6 py-4 font-semibold w-48">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {HMCOfficeContacts.length > 0 ? (
              HMCOfficeContacts.map((contact, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                >
                  <td className="text-left px-6 py-4 text-gray-800">
                    {contact.name}
                  </td>
                  <td className="text-center px-6 py-4 text-gray-800">
                    {contact.designation}
                  </td>
                  <td className="text-center px-6 py-4 text-gray-800">
                    {contact.mobile}
                  </td>
                  <td className="text-center px-6 py-4 text-gray-800">
                    {contact.email}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center px-6 py-4 text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const HMCPage = () => {

  return (
    <div>
      <HomeTab />
    </div>
  );
};

export default HMCPage;