// import React from "react";
// import Link from "next/link";
// import { FaHome } from "react-icons/fa";
// import { MdEvent } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";
// import { RxActivityLog } from "react-icons/rx";
// import { IoIosPeople } from "react-icons/io";

// const Sidebar = ({ onLinkClick }) => {
//   const items = [
//     { title: "Home", link: "", icon: <FaHome size={20} /> },
//     {
//       title: "Hostels",
//       link: "/Hostels",
//       icon: <RxActivityLog size={20} />,
//     },
//     { title: "Rules", link: "/Rules", icon: <IoIosPeople size={20} /> },
//     {
//       title: "Facilities",
//       link: "/Facilities",
//       icon: <MdEvent size={20} />,
//     },
//     {
//       title: "Contacts",
//       link: "/Contacts",
//       icon: <SlCalender size={20} />,
//     },
//     {
//       title: "Official Forms",
//       link: "/Official_Forms",
//       icon: <SlCalender size={20} />,
//     }
//   ];

//   return (
//     <div className="text-black">
//       <div className="flex flex-col gap-4">
//         {items.map((item, index) => {
//           const newPath = `/Facilities/Hostel/${item.link}`;

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
import { RxActivityLog } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { SiGoogleforms } from "react-icons/si";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
  };

  const basePath = '/Facilities/Hostel';
  const baseRoute = pathname.replace(basePath, '');

  return (
    <aside className="md:w-64 min-h-screen bg-gradient-to-b from-white via-red-50 to-red-100 shadow-xl rounded-xl p-4 md:p-6 flex flex-col">
      <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
        HMC
      </h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${baseRoute === ''
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${baseRoute === '/ItServices'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'hover:bg-red-100 text-red-900'
                }`}
              onClick={() => handleNavigation(`${basePath}/Hostels`)}
            >
              <RxActivityLog className="text-lg" />
              Hostels
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${baseRoute === '/people'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'hover:bg-red-100 text-red-900'
                }`}
              onClick={() => handleNavigation(`${basePath}/Rules`)}
            >
              <IoIosPeople className="text-lg" />
              Rules
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${baseRoute === '/notice'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'hover:bg-red-100 text-red-900'
                }`}
              onClick={() => handleNavigation(`${basePath}/Facilities`)}
            >
              <MdEvent className="text-lg" />
              Facilities
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${baseRoute === '/people'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'hover:bg-red-100 text-red-900'
                }`}
              onClick={() => handleNavigation(`${basePath}/Office_Orders`)}
            >
              <IoDocumentText className="text-lg" />
              Office Order
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${baseRoute === '/people'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'hover:bg-red-100 text-red-900'
                }`}
              onClick={() => handleNavigation(`${basePath}/Official_Forms`)}
            >
              <SiGoogleforms className="text-lg" />
              Official Forms
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${baseRoute === '/people'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'hover:bg-red-100 text-red-900'
                }`}
              onClick={() => handleNavigation(`${basePath}/Contacts`)}
            >
              <TiContacts className="text-lg" />
              Contacts
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
