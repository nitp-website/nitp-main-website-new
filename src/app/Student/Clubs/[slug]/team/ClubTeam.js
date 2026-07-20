"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { History, Inbox, ChevronDown, User } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ClubTeam = ({ club }) => {
  const [isLegacyOpen, setIsLegacyOpen] = useState(false);

  const sessionKeys = useMemo(() => {
    const memberSessions = club?.members && typeof club.members === "object" ? club.members : {};
    return Object.keys(memberSessions).sort((a, b) => b.localeCompare(a));
  }, [club?.members]);

  const currentSessionKey = sessionKeys[0] || null;
  const legacySessionKeys = sessionKeys.slice(1);
  const [selectedLegacyYear, setSelectedLegacyYear] = useState(legacySessionKeys[0] || "");

  const extractMembersFromSession = (sessionKey) => {
    if (!club?.members || !sessionKey || !club.members[sessionKey]) return [];
    const targetSession = club.members[sessionKey];

    const ROLE_MAP = {
      pi: "Professor-In-Charge",
      president: "President",
      vice_president: "Vice President",
      secretary: "Secretary",
      joint_secretary_1: "Joint Secretary 1",
      joint_secretary_2: "Joint Secretary 2",
      coordinator_1: "Coordinator 1",
      coordinator_2: "Coordinator 2"
    };

    const membersList = [];

    const getCampusMembers = (campusKey, campusLabel) => {
      const campusData = targetSession[campusKey];
      if (campusData && typeof campusData === "object") {
        Object.keys(ROLE_MAP).forEach((roleKey) => {
          const m = campusData[roleKey];
          if (m && m.name && m.name.trim() !== "") {
            membersList.push({
              role: ROLE_MAP[roleKey],
              name: m.name,
              email: m.email,
              department: m.department,
              image: m.avatar,
              contact: m.contact,
              campus: campusLabel,
            });
          }
        });
      }
    };

    getCampusMembers("bihta", "Bihta Campus");
    getCampusMembers("patna", "Patna Campus");

    return membersList;
  };

  const currentMembers = extractMembersFromSession(currentSessionKey);
  const legacyMembers = extractMembersFromSession(selectedLegacyYear);

  const patnaCurrent = currentMembers.filter(m => m.campus === "Patna Campus");
  const bihtaCurrent = currentMembers.filter(m => m.campus === "Bihta Campus");
  const patnaLegacy = legacyMembers.filter(m => m.campus === "Patna Campus");
  const bihtaLegacy = legacyMembers.filter(m => m.campus === "Bihta Campus");

  const renderCampusSection = (campusLabel, membersList) => {
    if (membersList.length === 0) return null;
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold uppercase tracking-widest text-red-800 border-b border-red-100 pb-2">
          {campusLabel}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center w-full">
          {membersList.map((member, index) => MemberCard(member, index))}
        </div>
      </div>
    );
  };

  const MemberCard = (member, index) => {
    const isPI =
      member.role?.toLowerCase().includes("pi") ||
      member.role?.toLowerCase().includes("program officer") ||
      member.role?.toLowerCase().includes("professor");

    return (
      <div
        key={`${member.role}-${index}-${member.name}`}
        className="w-full max-w-[280px] min-h-[340px] bg-[#f7f5ec] rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 border border-red-100/40 flex flex-col justify-between relative p-5 items-center group"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-6 bg-red-800 rounded-b-lg flex items-center justify-center z-10 px-2 shadow-sm">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white truncate">
            {member.role}
          </span>
        </div>

        <div className="pt-5 pb-2 relative mt-2">
          <div className="w-[120px] h-[120px] mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-white p-0.5 shadow-sm border border-red-100">
              <div className="w-full h-full rounded-full bg-red-50 flex items-center justify-center overflow-hidden">
                <img
                  src={member.image || "/faculty.jpeg"}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/faculty.jpeg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-black text-center flex-1 flex flex-col justify-between min-w-0 w-full">
          <div className="min-w-0 px-2 mt-2">
            <h3
              className="text-sm sm:text-base font-extrabold text-red-950 truncate"
              title={member.name}
            >
              {member.name}
            </h3>
            {member.department && (
              <p
                className="text-xs font-semibold text-red-800 tracking-tight mt-0.5 truncate"
                title={member.department}
              >
                {member.department}
              </p>
            )}
          </div>

          <div className="w-full px-2 mt-auto pt-2.5 border-t border-red-100/40 space-y-1.5 min-w-0">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center gap-2 text-xs text-gray-700 hover:text-red-900 transition-all duration-300 w-full"
                title={member.email}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-3.5 h-3.5 text-red-700 shrink-0"
                />
                <span className="truncate block max-w-full font-medium">
                  {member.email}
                </span>
              </a>
            )}
            {member.contact && (
              <a
                href={`tel:${member.contact}`}
                className="inline-flex items-center justify-center gap-2 text-xs text-gray-700 hover:text-red-900 transition-all duration-300 w-full"
                title={member.contact}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-3 h-3 text-red-700 shrink-0"
                />
                <span className="truncate block max-w-full font-medium">
                  {member.contact}
                </span>
              </a>
            )}
            {member.email && isPI && (
              <Link
                href={`/profile/${member.email}`}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-red-800 hover:text-white bg-red-50 hover:bg-red-800 border border-red-200 rounded-lg py-1.5 px-3 w-full transition-all duration-200 mt-1 shadow-xs"
              >
                <User className="w-3.5 h-3.5" />
                View Profile
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-2xl border border-red-100 bg-white p-5 sm:p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-2 pb-4 border-b border-red-100/60 w-full text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="inline-block w-1.5 h-5 bg-red-700 rounded-full"></span>
            <h1 className="text-xl font-extrabold text-red-950">
              Members of {club?.name || "Club"}
            </h1>
          </div>
          <p className="text-xs text-gray-500">
            Faculty mentors and student leaders driving our club forward.
          </p>
        </div>
        <div className="mt-8 space-y-8">
          {currentMembers.length === 0 ? (
            <div className="flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-dashed border-red-200 p-6 text-center">
              <h3 className="text-xs font-bold text-red-950">
                Nothing to Show
              </h3>
              <p className="text-[11px] text-gray-500 max-w-xs mt-0.5">
                No member details available at this moment.
              </p>
            </div>
          ) : (
            <>
              {renderCampusSection("Bihta Campus", bihtaCurrent)}
              {renderCampusSection("Patna Campus", patnaCurrent)}
            </>
          )}
        </div>
        {legacySessionKeys.length > 0 && (
          <div className="mt-10 pt-6 border-t border-red-100 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIsLegacyOpen((prev) => !prev)}
                className="flex items-center gap-2.5 text-slate-400 hover:text-red-900 transition-colors text-left"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-red-800 border border-red-200 shadow-sm">
                  <History size={13} />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wide text-red-950">
                    Legacy Team
                  </h2>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setIsLegacyOpen((prev) => !prev)}
                className={`flex h-7 w-7 items-center justify-center rounded-lg border border-red-200 bg-white text-red-800 hover:bg-red-50 hover:text-red-900 transition-transform duration-300 ${isLegacyOpen ? "rotate-180" : ""
                  }`}
              >
                <ChevronDown size={14} />
              </button>
            </div>

            {isLegacyOpen && (
              <div className="animate-fadeIn space-y-6">
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-800">
                    Select Session
                  </p>

                  <div className="relative w-full max-w-xs">
                    <select
                      id="legacy-year-select"
                      value={selectedLegacyYear}
                      onChange={(e) => setSelectedLegacyYear(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-red-200 bg-white py-2.5 pl-4 pr-10 text-sm font-semibold text-red-950 shadow-sm transition-all duration-200 hover:border-red-300 focus:border-red-500 focus:outline-none focus:ring-4 focus:ring-red-50"
                    >
                      {legacySessionKeys.map((year) => (
                        <option key={year} value={year}>
                          Session {year}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-red-800" />
                  </div>
                </div>

                {legacyMembers.length > 0 ? (
                  <div className="space-y-8">
                    {renderCampusSection("Bihta Campus", bihtaLegacy)}
                    {renderCampusSection("Patna Campus", patnaLegacy)}
                  </div>
                ) : (
                  <div className="flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-dashed border-red-200 p-6 text-center">
                    <Inbox className="h-5 w-5 text-red-700" />
                    <p className="text-[11px] text-red-800/60 mt-1">
                      No records found for selected Session.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClubTeam;
