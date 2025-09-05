"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import { RiAdminFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { SiGoogleforms } from "react-icons/si";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const basePath = '/Facilities/Emu';
  const baseRoute = pathname.replace(basePath, '');

  const handleNavigation = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
  };

  return (
    <aside className="md:w-64 min-h-screen bg-gradient-to-b from-white via-red-50 to-red-100 shadow-xl rounded-xl p-4 md:p-6 flex flex-col">
      <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
        EMU
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
                baseRoute === '/ItServices'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/Administration`)}
            >
              <RiAdminFill className="text-lg" />
              Administration
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/people'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/Helpline`)}
            >
              <FaPhone className="text-lg" />
              Helpline
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/notice'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/Gallery`)}
            >
              <IoMdPhotos className="text-lg" />
              Gallery
            </button>
          </li>
            <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/people'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/Complaint`)}
            >
              <SiGoogleforms className="text-lg" />
              Complaint Form
            </button>
          </li>
        </ul>
      </nav>

    </aside>
  );
};

export default Sidebar;