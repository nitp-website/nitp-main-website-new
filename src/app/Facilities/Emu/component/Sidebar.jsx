// import React from "react";
// import Link from "next/link";
// import { FaHome } from "react-icons/fa";
// import { RiAdminFill } from "react-icons/ri";
// import { FaPhone } from "react-icons/fa6";
// import { SiGoogleforms } from "react-icons/si";
// import { IoMdPhotos } from "react-icons/io";

// const Sidebar = ({ onLinkClick }) => {
//   const items = [
//     { title: "Home", link: "", icon: <FaHome size={20} /> },
//     {
//       title: "Administration",
//       link: "/Administration",
//       icon: <RiAdminFill size={20} />,
//     },
//     { title: "Helpline", link: "/Helpline", icon: <FaPhone size={20} /> },
//     { title: "Gallery", link: "/Gallery", icon: <IoMdPhotos size={20} /> },
//     {
//       title: "Complaint Form",
//       link: "/Complaint",
//       icon: <SiGoogleforms size={20} />,
//     },
//   ];

//   return (
//     <div className="text-black">
//       <div className="flex flex-col gap-4">
//         {items.map((item, index) => {
//           const newPath = `/Facilities/Emu${item.link}`;

//           return (
//             <Link
//               key={index}
//               href={newPath}
//               className="flex items-center gap-2 text-lg hover:text-red-800"
//               onClick={onLinkClick}
//             >
//               {item.icon}
//               {item.title}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



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

  const handleNavigation = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
  };

  const basePath = '/Facilities/Emu';
  const baseRoute = pathname.replace(basePath, '');

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
