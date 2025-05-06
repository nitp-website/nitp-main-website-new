import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdEvent } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { IoMdPhotos } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { RxActivityLog } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";

const Sidebar = ({ onLinkClick }) => {
  const items = [
    { title: "Home", link: "", icon: <FaHome size={20} /> },
    {
      title: "Functions",
      link: "/Functions",
      icon: <RxActivityLog size={20} />,
    },
    { title: "Members", link: "/Members", icon: <IoIosPeople size={20} /> },
    {
      title: "Events",
      link: "/Events",
      icon: <MdEvent size={20} />,
    },
    {
      title: "Calendar",
      link: "/Calendar",
      icon: <SlCalender size={20} />,
    },
    {
      title: "Gallery",
      link: "/Gallery",
      icon: <IoMdPhotos size={20} />,
    },
  ];

  return (
    <div className="text-black">
      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const newPath = `/Student/NSS/${item.link}`;

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
