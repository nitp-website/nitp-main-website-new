import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Scroll,
  GraduationCap,
} from "lucide-react";

const deptToBranch = {
  CSE: "cse",
  ECE: "ece",
  EE: "ee",
  ME: "me",
  CE: "ce",
  Archi: "arch",
  Chem: "che",
  Humanities: "hss",
  Math: "maths",
  Mechatronics: "mae",
  Phy: "phy",
  Material: "mse",
};

// Module-level caches & in-flight promises to prevent duplicate fetches across
// simultaneous desktop + mobile Sidebar mounts and repeated tab navigations.
const retiredFacultyCache = new Map();
const studentsCheckCache = new Map();
const retiredFacultyPromises = new Map();
const studentsCheckPromises = new Map();

const Sidebar = ({ onLinkClick, isMenuOpen, dept, navItems }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasRetiredFaculty, setHasRetiredFaculty] = useState(() => {
    if (!dept) return false;
    const branch = deptToBranch[dept] || dept.toLowerCase();
    return retiredFacultyCache.get(branch) ?? false;
  });
  const [hasStudents, setHasStudents] = useState(() => {
    if (!dept) return false;
    const branch = deptToBranch[dept] || dept.toLowerCase();
    return studentsCheckCache.get(branch) ?? false;
  });

  useEffect(() => {
    if (!dept) return;
    let isMounted = true;
    const branch = deptToBranch[dept] || dept.toLowerCase();
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";

    // 1. Check retired faculty (deduplicated)
    if (retiredFacultyCache.has(branch)) {
      setHasRetiredFaculty(retiredFacultyCache.get(branch));
    } else {
      if (!retiredFacultyPromises.has(branch)) {
        const facultyApiEndpoint = `${backendUrl}/api/v2/faculty?type=${branch}`;
        const p = fetch(facultyApiEndpoint)
          .then((res) => res.json())
          .then((data) => {
            let hasRetired = false;
            if (Array.isArray(data)) {
              hasRetired = data.some(
                (f) => String(f.is_retired) === "1" || f.is_retired === 1 || f.is_retired === true
              );
            }
            retiredFacultyCache.set(branch, hasRetired);
            return hasRetired;
          })
          .catch((err) => {
            console.error("Error checking retired faculty:", err);
            return false;
          })
          .finally(() => {
            retiredFacultyPromises.delete(branch);
          });
        retiredFacultyPromises.set(branch, p);
      }

      retiredFacultyPromises.get(branch)?.then((hasRetired) => {
        if (isMounted) setHasRetiredFaculty(hasRetired);
      });
    }

    // 2. Check if students exist for this department (deduplicated)
    if (studentsCheckCache.has(branch)) {
      setHasStudents(studentsCheckCache.get(branch));
    } else {
      if (!studentsCheckPromises.has(branch)) {
        const studentsApiEndpoint = `${backendUrl}/api/v2/students?department=${branch}&limit=1`;
        const p = fetch(studentsApiEndpoint)
          .then((res) => res.json())
          .then((data) => {
            const exists =
              (data && data.success && Array.isArray(data.data) && data.data.length > 0) ||
              (data && data.meta && Number(data.meta.totalStudents) > 0);
            studentsCheckCache.set(branch, Boolean(exists));
            return Boolean(exists);
          })
          .catch((err) => {
            console.error("Error checking students:", err);
            return false;
          })
          .finally(() => {
            studentsCheckPromises.delete(branch);
          });
        studentsCheckPromises.set(branch, p);
      }

      studentsCheckPromises.get(branch)?.then((exists) => {
        if (isMounted) setHasStudents(exists);
      });
    }

    return () => {
      isMounted = false;
    };
  }, [dept]);

  const itemsToRender = (navItems || []).map((item) => {
    if (item.name === "People" && item.dropdown) {
      let updatedDropdown = [...item.dropdown];

      if (hasStudents) {
        const studentExists = updatedDropdown.some(
          (sub) => sub.name === "Students" || sub.name === "Student List"
        );
        if (!studentExists) {
          const researchIdx = updatedDropdown.findIndex(
            (sub) => sub.name === "Research Students"
          );
          const studentItem = {
            name: "Students",
            url: `/Department/${dept}/students`,
            icon: <GraduationCap size={18} />,
          };
          if (researchIdx !== -1) {
            updatedDropdown.splice(researchIdx, 0, studentItem);
          } else {
            updatedDropdown.push(studentItem);
          }
        }
      }

      if (hasRetiredFaculty) {
        const exists = updatedDropdown.some(
          (sub) => sub.name === "Retired Faculties" || sub.name === "Retired Faculty"
        );
        if (!exists) {
          updatedDropdown.push({
            name: "Retired Faculties",
            url: `/Department/${dept}/retiredFaculty`,
            icon: item.dropdown[0]?.icon || <Scroll size={18} />,
          });
        }
      }

      return {
        ...item,
        dropdown: updatedDropdown,
      };
    }
    return item;
  });

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
            {itemsToRender.map((item, index) => (
              <li key={item.name + index}>
                {item.dropdown ? (
                  <div>
                    <button
                      suppressHydrationWarning
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
          suppressHydrationWarning
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
              {itemsToRender.map((item, index) => (
                <li key={item.name + index}>
                  {item.dropdown ? (
                    <div className="border-b border-gray-100 pb-2 mb-2">
                      <button
                        suppressHydrationWarning
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
