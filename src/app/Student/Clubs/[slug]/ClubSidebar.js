"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { useClub } from "./ClubProvider";
import Clubs from "@/app/assets/images/clubs.svg"

const MobileClubSidebar = ({ navLinks, club }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden w-full mb-6">
      <button
        onClick={toggleMobileMenu}
        className="w-full flex items-center justify-between p-4 bg-white border-2 border-red-200 rounded-xl shadow-md"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-700 rounded-lg">
            <Menu size={18} className="text-white" />
          </div>

          <div className="text-left">
            <h3 className="font-bold text-red-800">
              {club.name}
            </h3>
            <p className="text-xs text-red-500">
              {club.category}
            </p>
          </div>
        </div>

        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isMobileMenuOpen
          ? "max-h-[500px] opacity-100 mt-2"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white rounded-xl shadow-lg border border-red-100 p-3">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg mb-1 transition-all ${active
                  ? "bg-gradient-to-r from-red-600 to-red-400 text-white"
                  : "hover:bg-red-50 text-red-900"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

const DesktopClubSidebar = ({ navLinks, club }) => {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex md:w-56 lg:w-64 xl:w-72 min-h-screen bg-gradient-to-b from-white via-red-50 to-red-100 shadow-xl rounded-xl flex-col overflow-hidden">      {/* Club Header */}
      <div className="p-6 border-b border-red-200">
        <div className="flex flex-col items-center text-center">
          <img
            src={ club?.logo || Clubs?.src}
            alt={club?.name || "Club Logo"}
            className="h-20 w-20 rounded-full object-cover"
          />

          <h2 className="mt-4 text-xl font-extrabold text-red-800 tracking-tight">
            {club.name}
          </h2>

          <p className="mt-1 text-sm font-medium text-red-600">
            {club?.category}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${active
                    ? "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg"
                    : "text-red-900 hover:bg-red-100"
                    }`}
                >
                  {link.icon && (
                    <span className="text-lg">
                      <link.icon />
                    </span>
                  )}

                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  )
}

const ClubSidebar = () => {
  const club = useClub();
  if(!club?.slug) return null;
  const slug = club.slug;

  const links = [
    {
      name: "Overview",
      href: `/Student/Clubs/${slug}`,
    },
    {
      name: "About",
      href: `/Student/Clubs/${slug}/about`,
    },
    {
      name: "Team",
      href: `/Student/Clubs/${slug}/team`,
    },
    {
      name: "Gallery",
      href: `/Student/Clubs/${slug}/gallery`,
    },
    {
      name: "Contact",
      href: `/Student/Clubs/${slug}/contact`,
    },
  ];

  return (
    <>
      <MobileClubSidebar navLinks={links} club={club} />
      <DesktopClubSidebar navLinks={links} club={club} />
    </>
  )
}

export default ClubSidebar;