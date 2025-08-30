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

const Sidebar = ({ onLinkClick, isMenuOpen, dept, navItems }) => {
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
                  // Dropdown menu
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
                      className={`ml-6 mt-1 space-y-2 overflow-hidden transition-all duration-200 ${openSubmenu === item.name ? "max-h-40 overflow-y-auto" : "max-h-0"
                        }`}
                    >
                      {item.dropdown.map((subitem) => (
                        <li key={subitem.name}>
                          {!!subitem.url ? (
                            <Link
                              href={subitem.url}
                              className="block p-2 rounded-md hover:bg-[#E8D0CB] text-[#8B3A32]"
                              onClick={closeSidebar}
                            >
                              {subitem.name}
                            </Link>
                          ) : (
                            <span className="block p-2 text-[#8B3A32] font-medium">
                              {subitem.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : !!item.url ? (
                  // Normal item with url
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                    onClick={closeSidebar}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ) : (
                  // No url → render as plain text (e.g., department title)
                  <span className="flex items-center gap-2 p-2 text-red-700 font-bold">
                    {item.icon}
                    {item.name}
                  </span>
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
                          {!!subitem.url ? (
                            <Link
                              href={subitem.url}
                              className="block p-2 rounded-md hover:bg-[#E8D0CB] text-[#8B3A32]"
                              onClick={closeSidebar}
                            >
                              {subitem.name}
                            </Link>
                          ) : (
                            <span className="block p-2 text-[#8B3A32] font-medium">
                              {subitem.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  !!item.url ? (
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                      onClick={handleLinkClick}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 p-2 text-red-700 font-bold">
                      {item.icon}
                      {item.name}
                    </span>
                  )
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
