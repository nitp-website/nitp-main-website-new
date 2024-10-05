"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Import from next/navigation
import { FaHome, FaUserFriends, FaCalendarAlt, FaPhotoVideo } from 'react-icons/fa';

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname (parent route)
  const router = useRouter(); // Get the router for client-side navigation

  const handleNavigation = (path) => {
    router.push(`${pathname}/${path}`); // Navigate by appending to the current route
  };

  return (
    <div className="md:w-64 text-black bg-white shadow-md p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Sports</h2>
      <ul className="space-y-3 md:space-y-4">
        <li
          className="flex items-center p-2 rounded-lg bg-red-100 text-red-600 cursor-pointer"
          onClick={() => handleNavigation('home')} // Handle client-side navigation
        >
          <FaHome className="mr-2 md:mr-3" />
          <span className="font-semibold">Home</span>
        </li>
        <li
          className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => handleNavigation('people')}
        >
          <FaUserFriends className="mr-2 md:mr-3" />
          <span>People</span>
        </li>
        <li
          className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => handleNavigation('events')}
        >
          <FaCalendarAlt className="mr-2 md:mr-3" />
          <span>Events</span>
        </li>
        <li
          className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => handleNavigation('gallery')}
        >
          <FaPhotoVideo className="mr-2 md:mr-3" />
          <span>Photo Gallery</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
