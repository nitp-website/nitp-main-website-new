
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

  const basePath = '/Facilities/SportsFacilities';
  const baseRoute = pathname.replace(basePath, '');

  return (
    <aside className="md:w-64 min-h-[60vh] bg-white shadow-xl rounded-xl p-4 md:p-6 flex flex-col">
      <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
        Sports
      </h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === ''
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(basePath)}
            >
              <FaHome className="text-lg" />
              Home
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/people'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/people`)}
            >
              <FaUserFriends className="text-lg" />
              People
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/events'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/events`)}
            >
              <FaCalendarAlt className="text-lg" />
              Events
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/facilities'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/facilities`)}
            >
              <FaPhotoVideo className="text-lg" />
              Facilities
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/gallery'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/gallery`)}
            >
              <FaPhotoVideo className="text-lg" />
              Photo Gallery
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;