import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import { IoMdPhotos } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = ({ onLinkClick }) => {
  const items = [
    { title: "Home", link: "", icon: <FaHome size={20} /> },
    {
      title: "Administration",
      link: "/Administration",
      icon: <RiAdminFill size={20} />,
    },
    { title: "Helpline", link: "/Helpline", icon: <FaPhone size={20} /> },
    { title: "Gallery", link: "/Gallery", icon: <IoMdPhotos size={20} /> },
    {
      title: "Complaint Form",
      link: "/Complaint",
      icon: <SiGoogleforms size={20} />,
    },
  ];

  const basePath = "/Facilities/Emu";
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    if (onLinkClick) onLinkClick();
  };

  return (
    <aside className="sticky top-4 w-64 bg-white shadow-xl rounded-xl p-6 border border-gray-200 transition-all">
      <h2 className="text-xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
        EMU
      </h2>
      <ul className="space-y-2">
        {items.map((i) => {
          const fullPath = `${basePath}${i.link}`;
          const isActive = pathname === fullPath;
          return (
            <li
              key={i.title}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                isActive ? "bg-red-100 text-red-800 font-bold" : "hover:bg-gray-100"
              }`}
              onClick={() => handleNavigation(fullPath)}
            >
              {i.icon}
              <span>{i.title}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;