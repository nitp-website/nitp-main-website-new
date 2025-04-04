import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import { IoMdPhotos } from "react-icons/io";

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

  return (
    <div className="text-black">
      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const newPath = `/Facilities/Emu${item.link}`;

          return (
            <Link
              key={index}
              href={newPath}
              className="flex items-center gap-2 text-lg hover:text-red-800"
              onClick={onLinkClick}
            >
              {item.icon}
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
