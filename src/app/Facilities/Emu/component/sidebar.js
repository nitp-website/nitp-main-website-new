"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaUserFriends, FaCalendarAlt, FaPhotoVideo } from 'react-icons/fa';
import { RiPagesLine } from "react-icons/ri";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    
    if (pathname !== path) {
      router.push(path);
    }
  };

  const basePath = '/Facilities/Emu';
  const baseRoute = pathname.replace(basePath, ''); 
  const drivepath='https://drive.google.com/file/d/1TMqJ2opb8O7OwGfkSd8xRhrn7aAbMyCm/view?usp=drivesdk'
  return (
    <div className="md:w-64 text-black bg-white shadow-md p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">EMU</h2>
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
            baseRoute === '/form' ? 'bg-red-100 text-red-600' : 'hover:bg-red-50'
          }`}
          onClick={() => handleNavigation(`${drivepath}`)}
        >
            <RiPagesLine className="mr-2 md:mr-3" />
          <span className='font-semibold'>Form</span>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
