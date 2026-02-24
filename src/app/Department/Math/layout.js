"use client";
import { useState } from "react";
import Sidebar from "../../components/department/Sidebar.jsx";
import {
  Users,
  FileText,
  Calendar,
  BookOpen,
  Building,
  Scroll,
  Award,
  Menu,
  Microscope as Labs,
  X,
} from "lucide-react";

const dept = "Math"; // Replace with the actual department name or variable

const navItems = [
  { name: "Mathematics and Computing Technology" },
  { name: "Overview", url: `/Department/${dept}`, icon: <BookOpen size={20} /> },
  {
    name: "About",
    icon: <BookOpen size={18} />,
    url: "#",
    dropdown: [
      {
        name: "About Your Department",
        url: `/Department/${dept}/about`,
        icon: <BookOpen size={18} />,
      },
      {
        name: "Mission & Vision",
        url: `/Department/${dept}/mission`,
        icon: <FileText size={18} />,
      },
      // {
      //   name: "PO & PEO",
      //   url: `/Department/${dept}/po`,
      //   icon: <BookOpen size={18} />,
      // },
    ],
  },
  {
    name: "People",
    icon: <Users size={18} />,
    url: "#",
    dropdown: [
      {
        name: "Faculty",
        url: `/Department/${dept}/faculty`,
        icon: <Scroll size={18} />,
      },
      // {
      //   name: "Staff",
      //   url: `/Department/${dept}/staff`,
      //   icon: <FileText size={18} />,
      // },
      {
        name: "Research Students",
        url: `/Department/${dept}/researchStudents`,
        icon: <Building size={18} />,
      },
    ],
  },
  {
    name: "Research",
    icon: <FileText size={18} />,
    url: "#",
    dropdown: [
      {
        name: "Journal",
        url: `/Department/${dept}/journal`,
        icon: <Scroll size={18} />,
      },
      {
        name: "Conference",
        url: `/Department/${dept}/conference`,
        icon: <FileText size={18} />,
      },
      // {
      //   name: "Patents",
      //   url: `/Department/${dept}/patents`,
      //   icon: <Building size={18} />,
      // },
      {
        name: "Projects",
        url: `/Department/${dept}/projects`,
        icon: <Building size={18} />,
      },
    ],
  },
  // {
  //   name: "Syllabus",
  //   icon: <GraduationCap size={18} />,
  //   url: `/Department/${dept}/syllabus`,
  // },
  {
    name: "Time Table",
    icon: <Calendar size={18} />,
    url: `/Department/${dept}/timeTable`,
  },
  {
    name: "Academic Programs",
    icon: <Award size={18} />,
    url: `/Department/${dept}/acadProgram`,
  },
  // {
  //   name: "Labs",
  //   icon: <Labs size={18} />,
  //   url: `/Department/${dept}/labs`,
  // },
];

export default function Layout({ children }) {
  const [isMenuOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full mb-8 relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-full md:w-1/4 lg:w-64 mb-6 h-full md:mb-0">
        <Sidebar
          onLinkClick={() => setIsOpen(false)}
          isMenuOpen={isMenuOpen}
          dept={dept}
          navItems={navItems}
        />
      </div>

      <div className="flex flex-col w-full md:w-3/4 lg:w-[85%] items-center">
        {/* Department Name */}
        <div className="px-5 pt-10 max-sm:pt-6 max-sm:px-0 text-black w-full">
          <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 text-center bg-transparent">
            Mathematics and Computing Technology
          </div>
        </div>

        {/* Mobile Menu - Below Department Name */}
        <div className="md:hidden w-full mt-6">
          <Sidebar
            onLinkClick={() => setIsOpen(false)}
            isMenuOpen={isMenuOpen}
            dept={dept}
            navItems={navItems}
          />
        </div>

        {/* Content */}
        <div className="w-[100%]">{children}</div>
      </div>
    </div>
  );
}
