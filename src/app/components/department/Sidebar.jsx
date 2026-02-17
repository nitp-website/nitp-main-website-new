import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Menu,
} from "lucide-react";

const Sidebar = ({ onLinkClick, isMenuOpen, dept, navItems }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
    if (onLinkClick) onLinkClick();
  };

  return (
    <>
      {/* Desktop Sidebar - Always visible on md+ screens */}
      <div className="hidden md:block sticky top-20">
        <nav className="bg-white rounded-lg shadow-md p-4">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.name + index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full p-3 rounded-md hover:bg-red-50 text-red-800 font-medium transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-sm">{item.name}</span>
                      </span>
                      {openSubmenu === item.name ? (
                        <ChevronDown size={18} className="text-red-600" />
                      ) : (
                        <ChevronRight size={18} className="text-red-600" />
                      )}
                    </button>
                    <ul
                      className={`ml-8 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                        openSubmenu === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.dropdown.map((subitem, subIndex) => (
                        <li key={subitem.name + subIndex}>
                          {!!subitem.url ? (
                            <Link
                              href={subitem.url}
                              className="block p-2 pl-4 rounded-md hover:bg-red-50 text-gray-700 text-sm transition-colors border-l-2 border-transparent hover:border-red-600"
                              onClick={handleLinkClick}
                            >
                              {subitem.name}
                            </Link>
                          ) : (
                            <span className="block p-2 pl-4 text-gray-600 font-medium text-sm">
                              {subitem.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : !!item.url ? (
                  <Link
                    href={item.url}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-red-50 text-red-800 font-medium transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item.icon}
                    <span className="text-sm">{item.name}</span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 p-3 text-red-900 font-bold text-base border-b-2 border-red-100 mb-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile: Dropdown Menu */}
      <div className="md:hidden w-full px-4 mb-6">
        {/* Dropdown Button */}
        <button
          onClick={toggleMobileMenu}
          className="w-[80%] mx-auto flex items-center justify-between p-4 bg-white border-2 border-red-200 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-800 rounded-md flex items-center justify-center">
              <Menu size={20} className="text-white" />
            </div>
            <span className="text-red-900 font-semibold text-base">Department Menu</span>
          </div>
          <ChevronDown
            size={22}
            className={`text-red-800 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Content */}
        <div
          className={`w-[80%] mx-auto mt-2 bg-white border-2 border-red-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="overflow-y-auto max-h-[70vh] p-3">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.name + index}>
                  {item.dropdown ? (
                    <div className="border-b border-gray-100 pb-2 mb-2">
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-red-50 text-red-800 font-semibold transition-all"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-red-600">{item.icon}</span>
                          <span className="text-sm">{item.name}</span>
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-red-600 transition-transform duration-200 ${
                            openSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <ul
                        className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                          openSubmenu === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.dropdown.map((subitem, subIndex) => (
                          <li key={subitem.name + subIndex}>
                            {!!subitem.url ? (
                              <Link
                                href={subitem.url}
                                className="block p-2 pl-4 rounded-lg hover:bg-red-50 text-gray-700 text-sm transition-all border-l-2 border-transparent hover:border-red-500"
                                onClick={handleLinkClick}
                              >
                                {subitem.name}
                              </Link>
                            ) : (
                              <span className="block p-2 pl-4 text-gray-600 font-medium text-sm">
                                {subitem.name}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : !!item.url ? (
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 text-red-800 font-semibold transition-all"
                      onClick={handleLinkClick}
                    >
                      <span className="text-red-600">{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 p-3 text-red-900 font-bold text-base bg-gradient-to-r from-red-50 to-white rounded-lg mb-2">
                      <span className="text-red-700">{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
