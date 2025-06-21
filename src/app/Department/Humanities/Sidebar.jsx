import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Home,
  Briefcase,
  Settings,
  User,
  Code,
  Phone,
  Laptop,
  Smartphone,
  Brain,
  Info,
  Users,
  Building2 as Hostel,
  GraduationCap as Scholarship,
  Users as Clubs,
  ShieldAlert as Notice,
  CreditCard as Fee,
  Landmark as Bank,
  Library,
  HeartPulse as Hospital,
  Dumbbell as Sports,
  ShieldCheck as Women,
  BadgeCheck as SCST,
  Activity as Sac,
  Rocket as Fest,
  Handshake as NSS,
  Lightbulb as Ecell,
  Globe as Bharat,
  Network as Chankaya,
  Monitor as ComputerCentre,
  Microscope as Labs,
  Train as EMU,
  Atom as ESU,
  UserCheck,
  UserCircle,
  Shield,
  FileText,
  Calendar,
  Landmark,
  BookOpen,
  Building,
  Scroll,
  FilePlus,
  Newspaper,
  Atom,
  FlaskConical,
  HardHat,
  Zap,
  Radio,
  Globe,
  Sigma,
  Cpu,
  Network,
  Server,
  CalendarDays,
  ClipboardList,
  DollarSign,
  File,
  Bell,
  Award,
  PackageSearch,
  ChevronRight,
  ChevronUp,
  ShieldCheck,
  BarChart3,
  Gavel,
  ListChecks,
  BarChart,
  GraduationCap,
  Activity,
  ActivityIcon,
  Menu,
} from "lucide-react";

const dept = "Humanities"; 

const navItems = [
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
      {
        name: "PO & PEO",
        url: `/Department/${dept}/po`,
        icon: <BookOpen size={18} />,
      },
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
      {
        name: "Patents",
        url: `/Department/${dept}/patents`,
        icon: <Building size={18} />,
      },
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
  {
    name: "Labs",
    icon: <Labs size={18} />,
    url: `/Department/${dept}/labs`,
  },
];

const Sidebar = ({ onLinkClick, isMenuOpen }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      onLinkClick();
    }
  };
  return (
    <div className="text-black h-full">
      <div
        className={`fixed top-0 h-full z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:h-auto md:block`}
      >
        <nav className="p-2 overflow-y-auto h-[calc(100vh-64px)] md:h-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.name}
                      </span>
                      {openSubmenu === item.name ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </button>
                    <ul
                      className={`ml-6 mt-1 space-y-2 overflow-hidden transition-all duration-200 ${openSubmenu === item.name
                        ? "max-h-40 overflow-y-auto"
                        : "max-h-0"
                        }`}
                    >
                      {item.dropdown.map((subitem) => (
                        <li key={subitem.name}>
                          <Link
                            href={subitem.url}
                            className="block p-2 rounded-md hover:bg-[#E8D0CB] text-[#8B3A32]"
                            onClick={closeSidebar}
                          >
                            {subitem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                    onClick={closeSidebar}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* for small screen */}
      <div className="md:hidden w-fit h-fit z-50 flex items-center justify-between px-4">
        <nav className="p-2 overflow-y-auto h-fit md:h-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.name}
                      </span>
                      {openSubmenu === item.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    <ul
                      className={`ml-6 mt-1 space-y-2 overflow-hidden transition-all duration-200 ${openSubmenu === item.name
                        ? "max-h-40 overflow-y-auto"
                        : "max-h-0"
                        }`}
                    >
                      {item.dropdown.map((subitem) => (
                        <li key={subitem.name}>
                          <Link
                            href={subitem.url}
                            className="block p-2 rounded-md hover:bg-[#E8D0CB] text-[#8B3A32]"
                            onClick={handleLinkClick}
                          >
                            {subitem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                    onClick={handleLinkClick}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
