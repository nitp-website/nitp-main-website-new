
"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaUserFriends, FaPhotoVideo, FaFileMedical } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showDoctorContact, setShowDoctorContact] = useState(false);
  const [showDoctorTiming, setShowDoctorTiming] = useState(false);

  const handleNavigation = (path, query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    router.push(`${path}${queryString ? `?${queryString}` : ""}`);
  };

  const basePath = "/Facilities/MedicalFacilities";

  return (
    <aside className="sticky top-4 w-64 bg-white shadow-xl rounded-xl p-6 border border-gray-200 transition-all">
      <h2 className="text-xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
        Medical
      </h2>
      <ul className="space-y-2">
        <SidebarItem
          icon={<FaHome />}
          text="Home"
          isActive={pathname === basePath}
          onClick={() => handleNavigation(basePath)}
        />
        <SidebarItem
          icon={<FaPhotoVideo />}
          text="Objectives"
          isActive={pathname === `${basePath}/objectives`}
          onClick={() => handleNavigation(`${basePath}/objectives`)}
        />
        <SidebarItem
          icon={<FaUserFriends />}
          text="Salient Features"
          isActive={pathname === `${basePath}/SailientFeature`}
          onClick={() => handleNavigation(`${basePath}/SailientFeature`)}
        />

        {/* Doctor Contact Dropdown */}
        <li
          className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all font-medium text-base ${
            showDoctorContact ? "bg-red-100 text-red-900" : "hover:bg-red-50 text-red-900"
          }`}
          onClick={() => setShowDoctorContact((prev) => !prev)}
        >
          <FaUserFriends className="mr-3" />
          <span>Doctor Contact</span>
          <span className="ml-auto text-xs">{showDoctorContact ? "▲" : "▼"}</span>
        </li>
        {showDoctorContact && (
          <ul className="pl-6 space-y-2 mt-2">
            <SidebarItem
              icon={<FaUserFriends />}
              text="Patna Campus"
              onClick={() =>
                handleNavigation(`${basePath}/components/patnacampusContact`, {
                  option: "patnacampus",
                })
              }
            />
            <SidebarItem
              icon={<FaUserFriends />}
              text="Bihta Campus"
              onClick={() =>
                handleNavigation(`${basePath}/components/bhitacampusContact`, {
                  option: "bihtacampus",
                })
              }
            />
          </ul>
        )}

        {/* Doctor Timing Dropdown */}
        <li
          className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all font-medium text-base ${
            showDoctorTiming ? "bg-red-100 text-red-900" : "hover:bg-red-50 text-red-900"
          }`}
          onClick={() => setShowDoctorTiming((prev) => !prev)}
        >
          <FaUserFriends className="mr-3" />
          <span>Doctor Timing</span>
          <span className="ml-auto text-xs">{showDoctorTiming ? "▲" : "▼"}</span>
        </li>
        {showDoctorTiming && (
          <ul className="pl-6 space-y-2 mt-2">
            <SidebarItem
              icon={<FaUserFriends />}
              text="Patna Campus"
              onClick={() =>
                handleNavigation(`${basePath}/components/patnacampus`, {
                  option: "patnacampus",
                })
              }
            />
            <SidebarItem
              icon={<FaUserFriends />}
              text="Bihta Campus"
              onClick={() =>
                handleNavigation(`${basePath}/components/bihtacampus`, {
                  option: "bihtacampus",
                })
              }
            />
          </ul>
        )}

        <SidebarItem
          icon={<FaFileMedical />}
          text="Medical Form"
          isActive={pathname === `${basePath}/medicalForm`}
          onClick={() => handleNavigation(`${basePath}/medicalForm`)}
        />

        <SidebarItem
          icon={<FaPhotoVideo />}
          text="Notice"
          isActive={pathname === `${basePath}/notice`}
          onClick={() => handleNavigation(`${basePath}/notice`)}
        />
      </ul>
    </aside>
  );
};

const SidebarItem = ({ icon, text, isActive, onClick }) => {
  return (
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
};

export default Sidebar;