"use client";
import React, { useState } from "react";
import { FaUserGraduate, FaLaptopCode, FaBook, FaGlobeAsia, FaFlask } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { ChevronRight, GraduationCap, Menu, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const admissionItems = [
  {
    title: "B.Tech",
    subtitle: "Undergraduate",
    link: "/Academic/Admission?type=btech",
    icon: FaUserGraduate,
    accent: "from-blue-500 to-blue-600",
    type: "btech",
  },
  {
    title: "M.Tech",
    subtitle: "Postgraduate",
    link: "/Academic/Admission?type=mtech",
    icon: FaLaptopCode,
    accent: "from-emerald-500 to-emerald-600",
    type: "mtech",
  },
  {
    title: "MCA",
    subtitle: "Postgraduate",
    link: "/Academic/Admission?type=mca",
    icon: FaBook,
    accent: "from-violet-500 to-violet-600",
    type: "mca",
  },
  {
    title: "Study in India",
    subtitle: "International",
    link: "/Academic/Admission?type=study_in_india",
    icon: FaGlobeAsia,
    accent: "from-amber-500 to-orange-500",
    type: "study_in_india",
  },
  {
    title: "QIP",
    subtitle: "Faculty Programme",
    link: "/Academic/Admission?type=qip",
    icon: PiStudentBold,
    accent: "from-fuchsia-500 to-purple-600",
    type: "qip",
  },
  {
    title: "PhD",
    subtitle: "Doctoral",
    link: "/Academic/Admission?type=phd",
    icon: FaFlask,
    accent: "from-rose-500 to-red-600",
    type: "phd",
  },
];

export const SidebarItem = ({ item, isActive, onClick }) => {
  const Icon = item.icon;

  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 ${
          isActive
            ? "bg-gradient-to-r from-[#811919] to-[#a32222] text-white shadow-lg shadow-red-900/20"
            : "text-slate-700 hover:bg-red-50 hover:text-[#811919]"
        }`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
            isActive
              ? "bg-white/15 text-white"
              : `bg-gradient-to-br ${item.accent} text-white shadow-sm`
          }`}
        >
          <Icon size={18} />
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block text-sm font-bold leading-tight ${isActive ? "text-white" : "text-slate-800"}`}>
            {item.title}
          </span>
          <span className={`block text-[11px] font-medium ${isActive ? "text-red-100" : "text-slate-500"}`}>
            {item.subtitle}
          </span>
        </span>
        <ChevronRight
          size={16}
          className={`shrink-0 transition-transform ${
            isActive ? "text-white/80" : "text-slate-400 group-hover:translate-x-0.5 group-hover:text-[#811919]"
          }`}
        />
      </button>
    </li>
  );
};

function NavList({ currentType, onNavigate }) {
  const pathname = usePathname();

  return (
    <ul className="space-y-1.5">
      {admissionItems.map((item) => (
        <SidebarItem
          key={item.type}
          item={item}
          isActive={pathname === "/Academic/Admission" && currentType === item.type}
          onClick={() => onNavigate(item.link)}
        />
      ))}
    </ul>
  );
}

const Sidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentType = searchParams.get("type") || "btech";
  const activeItem = admissionItems.find((item) => item.type === currentType) || admissionItems[0];
  const ActiveIcon = activeItem.icon;

  const handleNavigation = (path) => {
    router.push(path);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile menu toggle — sticks below site navbar while scrolling */}
      <div className="xl:hidden sticky top-16 md:top-[8.5rem] z-40 -mx-3 mb-3 px-3 py-2.5 sm:-mx-5 sm:px-5 bg-[#faf8f8]/95 backdrop-blur-md border-b border-red-100/70 shadow-sm">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex w-full items-center justify-between gap-3 rounded-2xl border border-red-100 bg-white px-4 py-3.5 shadow-sm transition-all hover:border-red-200 hover:shadow-md"
          aria-label="Open admissions menu"
        >
          <span className="flex items-center gap-3 min-w-0">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${activeItem.accent} text-white shadow-sm`}>
              <ActiveIcon size={18} />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-sm font-bold text-slate-800 truncate">{activeItem.title} Admissions</span>
              <span className="block text-xs text-slate-500">Tap to switch programme</span>
            </span>
          </span>
          <Menu className="h-5 w-5 shrink-0 text-[#811919]" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 z-[100]">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            aria-label="Close admissions menu"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-[min(22rem,90vw)] flex-col bg-white shadow-2xl">
            <div className="bg-gradient-to-br from-[#811919] via-[#9b1f1f] to-[#6d1212] px-5 py-6 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold tracking-tight">Admissions Portal</h2>
                  <p className="mt-1 text-sm text-red-100">Select a programme to view details</p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-white/90 hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              <NavList currentType={currentType} onNavigate={handleNavigation} />
            </nav>
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden xl:flex xl:w-72 shrink-0 sticky top-20 md:top-[8.75rem] self-start z-10 flex-col overflow-hidden rounded-2xl border border-red-100/80 bg-white shadow-lg shadow-red-900/5">
        <div className="border-b border-red-50 bg-gradient-to-br from-[#811919] to-[#a32222] px-5 py-5 text-white">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold tracking-tight">Admissions</h2>
          <p className="mt-1 text-xs text-red-100">NIT Patna — Academic Year 2026–27</p>
        </div>
        <nav className="p-3">
          <NavList currentType={currentType} onNavigate={handleNavigation} />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
