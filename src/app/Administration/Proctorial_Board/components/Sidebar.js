// "use client";
// import React from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { FaHome, FaUserFriends } from 'react-icons/fa';

// const Sidebar = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleNavigation = (path) => {
    
//     if (pathname !== path) {
//       router.push(path);
//     }
//   };

//   const basePath = '/Administration/Proctorial_Board';
//   const baseRoute = pathname.replace(basePath, ''); 

//   return (
//     <div className="md:w-64 text-black bg-white shadow-md p-4 md:p-6">
//       <ul className="space-y-3 md:space-y-4">
//         <li
//           className={`flex items-center p-2 rounded-lg cursor-pointer ${
//             baseRoute === '' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleNavigation(basePath)}
//         >
//           <FaHome className="mr-2 md:mr-3" />
//           <span className="font-semibold">Home</span>
//         </li>
       
//         <li
//           className={`flex items-center p-2 rounded-lg cursor-pointer ${
//             baseRoute === '/people/deputy' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleNavigation(`${basePath}/people/deputy`)}
//         >
//           <FaUserFriends className="mr-2 md:mr-3" />
//           <span>Deputy Proctor</span>
//         </li>
       
//         <li
//           className={`flex items-center p-2 rounded-lg cursor-pointer ${
//             baseRoute === '/people' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleNavigation(`${basePath}/people`)}
//         >
//           <FaUserFriends className="mr-2 md:mr-3" />
//           <span>Proctor</span>
//         </li>

        
        
       
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaUserFriends } from 'react-icons/fa';


const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
  };

  const basePath = '/Administration/Proctorial_Board';
  const baseRoute = pathname.replace(basePath, '');

  return (
    <aside className="md:w-64 min-h-screen bg-gradient-to-b from-white via-red-50 to-red-100 shadow-xl rounded-xl p-4 md:p-6 flex flex-col">
      <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
        Proctorial Board
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
              onClick={() => handleNavigation(`${basePath}/people/deputy`)}
            >
              <FaUserFriends className="text-lg" />
              Deputy Proctor
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
              Proctor
            </button>
          </li>
          
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;