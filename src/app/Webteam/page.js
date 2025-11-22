"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Webcard from "../components/Webteam/Webcard";
import Collapsible from "./Collapsible";

const currentYear = 2024;
const oldyears = [2023, 2022, 2021];

const picData = [
  {
    name: "Dr. B Balaji Naik",
    email: "balaji.cs@nitp.ac.in",
    interests: "Cloud Computing, Nature Inspired Algorithms, Edge Computing.",
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C",
    desg: "Assistant Professor",
    url: "https://www.nitp.ac.in/profile/?id=balaji.cs@nitp.ac.in",
  },
];

const Webteam = () => {
  const [webteam, setWebteam] = useState([]);
  const [filteredteam, setFilteredteam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [oldData, setOldData] = useState([]);
  const [certificateNo, setCertificateNo] = useState("");

  const webteamUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/webteam`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(webteamUrl)
      .then((res) => {
        const web = res.data;
        setWebteam(web);
        const currentMembers = web.filter(
          (member) => member.year === currentYear && member.role === "volunteer"
        );
        setFilteredteam(currentMembers);
        const oldMembers = web.filter((member) => oldyears.includes(member.year));
        setOldData(oldMembers);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [webteamUrl]);

  const handleCertificateVerification = (e) => {
    e.preventDefault();
    if (certificateNo.trim()) {
      window.location.href = `/Webteam/certificate/${certificateNo.trim()}`;
    }
  };

  return (
    // WRAPPER: Relative positioning for background layers
    <div className="min-h-screen w-full relative bg-white selection:bg-red-100 font-sans overflow-hidden">
      
      {/* --- BACKGROUND LAYER 1: Technical Grid Pattern --- */}
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* --- BACKGROUND LAYER 2: Soft Gradient Blobs (Micro-interaction) --- */}
      {/* Top Left Red Glow (Breathing) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-100/40 blur-[100px] animate-pulse z-0"></div>
      {/* Bottom Right Gray/Blue Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gray-100/60 blur-[100px] z-0"></div>

      {/* --- MAIN CONTENT (z-10 to sit above background) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest mb-6 border border-red-100 uppercase">
            Official Tech Team
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-gray-900">
            Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">Cell</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            The creative minds and technical hands behind NIT Patna's digital ecosystem. 
            We <span className="font-semibold text-gray-800">Design</span>, <span className="font-semibold text-gray-800">Develop</span>, and <span className="font-semibold text-gray-800">Deploy</span>.
          </p>
        </div>

        {/* PIC Section */}
        <div className="mb-24 relative">
          <div className="flex items-center justify-center mb-12">
             <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
             <h2 className="mx-6 text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">Mentors & Guides</h2>
             <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {picData.map((member, index) => (
              <Webcard key={`pic-${index}`} {...member} />
            ))}
          </div>
        </div>

        {/* Current Team Section */}
        <div className="mb-24">
           <div className="flex items-center justify-center mb-12">
             <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
             <h2 className="mx-6 text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">Current Developers</h2>
             <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
            {filteredteam.map((member) => (
              <Webcard
                key={member.email}
                name={member.name}
                email={member.email}
                extn={member.ext_no}
                id={member.email}
                interests={member.interests}
                image={member.image}
                desg={member.desg}
                url={member.url}
              />
            ))}
          </div>
        </div>

        {/* Previous Years (Glassmorphism Card) */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden mb-20 ring-1 ring-gray-100">
          <div className="p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 flex items-center justify-center gap-2">
             <i className="ri-history-line text-gray-400"></i>
             <h3 className="text-center font-bold text-gray-700">Legacy & Alumni</h3>
          </div>
          <div className="p-8">
             {!loading && (
               <Collapsible title="View Previous Tenures 🔽" data={oldData} years={oldyears} />
             )}
          </div>
        </div>

        {/* Certificate Verification (Modern Floating Card) */}
        <div className="max-w-3xl mx-auto relative">
          {/* Glow behind verification */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-200 to-gray-200 rounded-2xl blur opacity-25"></div>
          
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-50">
            <div className="text-center mb-8">
               <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 text-2xl">
                 <i className="ri-shield-check-fill"></i>
               </div>
               <h2 className="text-2xl font-bold text-gray-900">Certificate Verification</h2>
               <p className="text-gray-500 mt-2 text-sm">Verify the authenticity of documents issued by WDC NIT Patna.</p>
            </div>

            <form onSubmit={handleCertificateVerification} className="relative flex items-center">
              <i className="ri-barcode-line absolute left-4 text-gray-400 text-xl"></i>
              <input
                type="text"
                value={certificateNo}
                onChange={(e) => setCertificateNo(e.target.value)}
                placeholder="Enter Certificate ID (e.g. wdc-2024-001)"
                className="w-full pl-12 pr-32 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-gray-800 placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-6 bg-gray-900 hover:bg-red-700 text-white font-medium rounded-lg transition-all shadow-md"
              >
                Verify
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export const dynamic = 'force-dynamic';
export default Webteam;