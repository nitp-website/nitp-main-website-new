"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaUserFriends, FaCalendarAlt, FaPhotoVideo } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    
    if (pathname !== path) {
      router.push(path);
    }
  };

  const basePath = '/Administration/CVO';
  const baseRoute = pathname.replace(basePath, ''); 

  return (
    <div className="md:w-64 text-black bg-white shadow-md p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">CVO</h2>
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
            baseRoute === '/gallary' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/gallary`)}
        >
          <FaPhotoVideo className="mr-2 md:mr-3" />
          <span>Gallery</span>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
