import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPersonChalkboard, faUserTie, faUsersCog, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
  const subtypeConfig = {
    'REGULAR TEACHING': { label: "Regular Teaching", icon: faChalkboardTeacher },
    'REGULAR NON-TEACHING': { label: "Regular Non-Teaching", icon: faUserTie },
    'CONTRACTUAL/TEMPORARY FACULTY': { label: "Contractual / Temporary Faculty", icon: faPersonChalkboard },
    'CONTRACTUAL/TEMPORARY NON-TEACHING': { label: "Contractual / Temporary Non-Teaching", icon: faUsersCog },
    'JDRF/SRF': { label: "JRF / SRF", icon: faUserGraduate },
  };

  return (
    <div className="bg-[#f0f0f0] min-h-screen py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-3xl text-center pb-10 md:pb-12 text-[#4d1418] font-bold">
          <h2>Job Opportunities</h2>
        </div>

        {/* Category Boxes */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {Object.entries(subtypeConfig).map(([key, cfg]) => {
            return (
              <Link
                href={`/Others/recruitment/positions?category=${encodeURIComponent(key)}`}
                key={key}
                className="relative w-36 h-36 sm:w-36 sm:h-36 md:w-40 md:h-40 flex flex-col items-center justify-center p-3 sm:p-4 gap-2 rounded-2xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden group border border-[#e6b3b3] bg-[#f0caca] text-[#ba210e] hover:bg-[#ba210e] hover:text-[#ffe5e5] hover:border-transparent"
              >
                {/* Optional background effect similar to Home page */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ba210e] to-[#911a0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <FontAwesomeIcon icon={cfg.icon} className="text-2xl sm:text-3xl text-[#ba210e] group-hover:text-[#f7cece] transition-colors z-10" />
                <p className="text-[11px] sm:text-xs font-bold text-center z-10 leading-tight break-words max-w-full px-1">{cfg.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;

