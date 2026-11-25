"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

const deptToBranch = {
  CSE: "cse",
  ECE: "ece",
  EE: "ee",
  ME: "me",
  CE: "ce",
  Archi: "arch",
  Chem: "che",
  Humanities: "hss",
  Math: "maths",
  Mechatronics: "mae",
  Phy: "phy",
  Material: "mse",
};

// Module-level caches to prevent duplicate fetches across multiple component mounts/renders
const facultyDeductionCache = new Map();
const facultyDeductionPromises = new Map();

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
  const branch =
    deptToBranch[dept] ||
    deptToBranch[dept?.toUpperCase()] ||
    (dept ? String(dept).toLowerCase() : "");

  const [deduction, setDeduction] = useState(() => {
    if (!branch) return 0;
    return facultyDeductionCache.get(branch) ?? 0;
  });

  useEffect(() => {
    if (!branch) return;

    if (facultyDeductionCache.has(branch)) {
      setDeduction(facultyDeductionCache.get(branch));
      return;
    }

    if (!facultyDeductionPromises.has(branch)) {
      const baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
      const p = fetch(`${baseUrl}/api/v2/faculty?type=${branch}`)
        .then((res) => res.json())
        .then((facultyList) => {
          let count = 0;
          if (Array.isArray(facultyList)) {
            facultyList.forEach((f) => {
              const isMemoriam =
                String(f.in_memoriam) === "1" ||
                f.in_memoriam === 1 ||
                f.in_memoriam === true;
              const isRetired =
                String(f.is_retired) === "1" ||
                f.is_retired === 1 ||
                f.is_retired === true;
              if (isMemoriam || isRetired) {
                count++;
              }
            });
          }
          facultyDeductionCache.set(branch, count);
          return count;
        })
        .catch((err) => {
          console.error("Error fetching faculty deduction count:", err);
          return 0;
        })
        .finally(() => {
          facultyDeductionPromises.delete(branch);
        });

      facultyDeductionPromises.set(branch, p);
    }

    let isMounted = true;
    facultyDeductionPromises.get(branch)?.then((count) => {
      if (isMounted) {
        setDeduction(count);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [branch]);

  const rawFacultyCount = Number(data?.user || 0);
  const facultyCount = Math.max(0, rawFacultyCount - deduction);

  const counts = [
    { label: "Faculty", value: facultyCount, icon: <UserSquare size={40} />, link: '/faculty' },
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
