import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";


export const CounterCard = ({ item, dept }) => {
  const router = useRouter();
  const url = item.link || '';

  const handleOnClick = () => {
    if (url) {
      router.push(`/Department/${dept}/${url}`);
    }
  };

  return (
    <div
      onClick={handleOnClick}
      className={`
        ${url ? "cursor-pointer" : ""} bg-white w-40 h-40 rounded-lg shadow-lg
         p-6 flex flex-col items-center text-center transition-transform hover:scale-105`}
    >
      <div className="text-[#8B3A32] overflow-hidden shrink-0 flex items-center justify-center">
        {item.icon}
      </div>
      <div className="text-3xl font-bold text-red-700">{item.value}</div>
      <h2 className="text-[#8B3A32] mt-1 text-sm">{item.label}</h2>
    </div>
  );
};

const DepartmentCounter = ({ data, dept }) => {
  const counts = [
    { label: "Faculty", value: data?.user || 0, icon: <UserSquare size={40} />, link: '/faculty' },
    { label: "Research Scholars", value: data?.phd_candidates || 0, icon: <Users size={40} />, link: '/researchStudents' },
    { label: "Projects", value: data?.sponsored_projects || 0, icon: <Briefcase size={40} />, link: '/projects' },
    { label: "Patents", value: data?.ipr || 0, icon: <ShieldCheck size={40} />, link: '/patents' },
    { label: "Journal Papers", value: data?.journal_papers || 0, icon: <FileText size={40} />, link: '/journal' },
    { label: "Conference Papers", value: data?.conference_papers || 0, icon: <Award size={40} />, link: '/conference' },
  ];

  return (
    <>
      <div className="w-full flex justify-center mt-4 flex-wrap md:flex-row mb-10 lg:mb-0 gap-4">
        {counts.map((item, index) =>
          item.value > 0 ? <CounterCard key={index} item={item} dept={dept} /> : null
        )}
      </div>

    </>
  );
};


export default DepartmentCounter;
