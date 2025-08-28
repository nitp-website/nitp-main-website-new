"use client";
import React from "react";
import { FaUserGraduate, FaLaptopCode, FaBook, FaGlobeAsia, FaFlask } from "react-icons/fa";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SidebarItem = ({ icon, text, isActive, onClick }) => (
  <li
    className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all font-medium text-base ${
      isActive
        ? "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg"
        : "hover:bg-red-100 text-red-900"
    }`}
    onClick={onClick}
  >
    <span className="mr-3">{icon}</span>
    <span>{text}</span>
  </li>
);

const Sidebar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const admissionItems = [
    {
      title: "B.Tech Admissions",
      link: "/Academic/Admission?type=btech",
      icon: <FaUserGraduate size={20} className="text-blue-700" />,
      type: "btech",
    },
    {
      title: "M.Tech Admissions",
      link: "/Academic/Admission?type=mtech",
      icon: <FaLaptopCode size={20} className="text-green-700" />,
      type: "mtech",
    },
    {
      title: "MCA Admissions",
      link: "/Academic/Admission?type=mca",
      icon: <FaBook size={20} className="text-purple-700" />,
      type: "mca",
    },
    {
      title: "Study in India",
      link: "/Academic/Admission?type=study_in_india",
      icon: <FaGlobeAsia size={20} className="text-orange-700" />,
      type: "study_in_india",
    },
    {
      title: "PhD Admissions",
      link: "/Academic/Admission?type=phd",
      icon: <FaFlask size={20} className="text-red-700" />,
      type: "phd",
    },
  ];

  const currentType = searchParams.get("type"); // ✅ read query param

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <aside className="sticky top-4 w-64 bg-white shadow-xl rounded-xl p-6 border border-gray-200 transition-all">
      <h2 className="text-xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
        Admissions
      </h2>
      <ul className="space-y-2">
        {admissionItems.map((item) => (
          <SidebarItem
            key={item.title}
            icon={item.icon}
            text={item.title}
            isActive={pathname === "/Academic/Admission" && currentType === item.type} // ✅ proper active check
            onClick={() => handleNavigation(item.link)}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
