import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faPersonChalkboard, faUserTie, faUsersCog, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
  const subtypeConfig = {
    'REGULAR TEACHING': { label: "Regular Teaching", icon: faChalkboardTeacher },
    'REGULAR NON-TEACHING': { label: "Regular Non-Teaching", icon: faUserTie },
    'NON-REGULAR TEACHING': { label: "Non-Regular Teaching", icon: faPersonChalkboard },
    'NON-REGULAR NON-TEACHING': { label: "Non-Regular Non-Teaching", icon: faUsersCog },
    'JDRF/SRF': { label: "JRF/SRF", icon: faUserGraduate },
  };

  return (
    <div className="bg-[#f0f0f0] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-3xl text-center pb-12 text-[#4d1418] font-bold">
          <h2>Job Opportunities</h2>
        </div>

        {/* Category Boxes */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {Object.entries(subtypeConfig).map(([key, cfg]) => {
            return (
              <Link
                href={`/Others/recruitment/positions?category=${encodeURIComponent(key)}`}
                key={key}
                className={`relative w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center p-3 gap-3 rounded-2xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden group border border-[#e6b3b3] bg-[#f0caca] text-[#ba210e] hover:bg-[#ba210e] hover:text-[#ffe5e5] hover:border-transparent`}
              >
                {/* Optional background effect similar to Home page */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#ba210e] to-[#911a0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                
                <FontAwesomeIcon icon={cfg.icon} className={`text-4xl md:text-5xl text-[#ba210e] group-hover:text-[#f7cece] transition-colors z-10 mb-1`} />
                <p className="text-[11px] md:text-xs font-black text-center uppercase z-10 leading-snug tracking-wider">{cfg.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
