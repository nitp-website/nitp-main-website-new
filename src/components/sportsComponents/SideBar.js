"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaUserFriends, FaCalendarAlt, FaPhotoVideo, FaBuilding } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    // Only push to the router if the path is not the current path
    if (pathname !== path) {
      router.push(path);
    }
  };

  // Define the base path
  const basePath = '/Facilities/SportsFacilities';
  const baseRoute = pathname.replace(basePath, ''); // Get the current route after the base path

  return (
    <div className="md:w-64 text-black bg-white shadow-md p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Sports</h2>
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
            baseRoute === '/people' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/people`)}
        >
          <FaUserFriends className="mr-2 md:mr-3" />
          <span>People</span>
        </li>
        <li
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            baseRoute === '/events' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/events`)}
        >
          <FaCalendarAlt className="mr-2 md:mr-3" />
          <span>Events</span>
        </li>
        <li
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            baseRoute === '/facilities' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/facilities`)}
        >
          <FaBuilding className="mr-2 md:mr-3" />
          <span>Facilities</span>
        </li>
        <li
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            baseRoute === '/facilities' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/facilities`)}
        >
          <FaBuilding className="mr-2 md:mr-3" />
          <span>Facilities</span>
        </li>
        <li
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            baseRoute === '/gallery' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => handleNavigation(`${basePath}/gallery`)}
        >
          <FaPhotoVideo className="mr-2 md:mr-3" />
          <span>Photo Gallery</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
