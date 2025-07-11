import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RxActivityLog } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";

const Sidebar = ({ onLinkClick }) => {
  const items = [
    { title: "Home", link: "", icon: <FaHome size={20} /> },
    {
      title: "Hostels",
      link: "/Hostels",
      icon: <RxActivityLog size={20} />,
    },
    { title: "Rules", link: "/Rules", icon: <IoIosPeople size={20} /> },
    {
      title: "Facilities",
      link: "/Facilities",
      icon: <MdEvent size={20} />,
    },
    {
      title: "Contacts",
      link: "/Contacts",
      icon: <SlCalender size={20} />,
    },
  ];

  return (
    <div className="text-black">
      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const newPath = `/Facilities/Hostel/${item.link}`;

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
