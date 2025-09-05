// import React from "react";
// import Link from "next/link";
// import { FaHome } from "react-icons/fa";
// import { MdEvent } from "react-icons/md";
// import { IoMdPhotos } from "react-icons/io";
// import { SlCalender } from "react-icons/sl";
// import { RxActivityLog } from "react-icons/rx";
// import { IoIosPeople } from "react-icons/io";

// const Sidebar = ({ onLinkClick }) => {
//   const items = [
//     { title: "Home", link: "", icon: <FaHome size={20} /> },
//     {
//       title: "Functions",
//       link: "/Functions",
//       icon: <RxActivityLog size={20} />,
//     },
//     { title: "Members", link: "/Members", icon: <IoIosPeople size={20} /> },
//     {
//       title: "Events",
//       link: "/Events",
//       icon: <MdEvent size={20} />,
//     },
//     {
//       title: "Calendar",
//       link: "/Calendar",
//       icon: <SlCalender size={20} />,
//     },
//     {
//       title: "Gallery",
//       link: "/Gallery",
//       icon: <IoMdPhotos size={20} />,
//     },
//   ];

//   return (
//     <div className="text-black">
//       <div className="flex flex-col gap-4">
//         {items.map((item, index) => {
//           const newPath = `/Student/NSS/${item.link}`;

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
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { RxActivityLog } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
  };

  const basePath = '/Student/NSS';
  const baseRoute = pathname.replace(basePath, '');

  return (
    <aside className="md:w-64 min-h-screen bg-gradient-to-b from-white via-red-50 to-red-100 shadow-xl rounded-xl p-4 md:p-6 flex flex-col">
      <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
        NSS
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
              onClick={() => handleNavigation(`${basePath}/Functions`)}
            >
              <RxActivityLog className="text-lg" />
              Functions
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/people'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/Members`)}
            >
              <IoIosPeople className="text-lg" />
              Members
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/notice'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/Events`)}
            >
              <MdEvent className="text-lg" />
              Events
            </button>
          </li>
            <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/people'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/Calendar`)}
            >
              <SlCalender className="text-lg" />
              Calendar
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                baseRoute === '/people'
                  ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                  : 'hover:bg-red-100 text-red-900'
              }`}
              onClick={() => handleNavigation(`${basePath}/Gallery`)}
            >
              <IoMdPhotos className="text-lg" />
              Gallery
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
