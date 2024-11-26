"use client";
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaUserFriends, FaPhotoVideo } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [showOptions, setShowOptions] = useState(false);

  const handleNavigation = (path, query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    router.push(`${path}${queryString ? `?${queryString}` : ''}`);
  };

  const basePath = '/Facilities/MedicalFacilities';
  const baseRoute = pathname.replace(basePath, '');

  return (
    <div className="md:w-64 text-black bg-white shadow-md p-4 md:p-6">
      <ul className="space-y-3 md:space-y-4">
        <li
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            baseRoute === '' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(basePath)}
        >
          <FaHome className="mr-2 md:mr-3" />
          <span className="font-semibold">Home</span>
        </li>
        <li
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            baseRoute === '/objectives' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/objectives`)}
        >
          <FaPhotoVideo className="mr-2 md:mr-3" />
          <span>Objectives</span>
        </li>
        <li
          className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100"
          onClick={() => setShowOptions((prev) => !prev)} 
        >
          <FaUserFriends className="mr-2 md:mr-3" />
          <span>Doctor Timing</span>
        </li>
        {showOptions && ( 
          <ul className="pl-6 space-y-2">
            <li
              className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-red-400"
              onClick={() => handleNavigation(`${basePath}/components/patnacampus`, { option: 'patnacampus' })}
            >
              <FaUserFriends className="mr-2 md:mr-3" />
              <span>Patna Campus</span>
            </li>
            <li
              className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-red-400"
              onClick={() => handleNavigation(`${basePath}/components/bihtacampus`, { option: 'bihtacampus' })}
            >
              <FaUserFriends className="mr-2 md:mr-3" />
              <span>Bihta Campus</span>
            </li>
          </ul>
        )}
        <li
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            baseRoute === '/medicalForm' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/medicalForm`)}
        >
          <FaUserFriends className="mr-2 md:mr-3" />
          <span>Medical Form</span>
        </li>
        <li
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            baseRoute === '/notice' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/notice`)}
        >
          <FaPhotoVideo className="mr-2 md:mr-3" />
          <span>Notice</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
