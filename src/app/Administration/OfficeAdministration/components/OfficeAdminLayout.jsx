"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Building2, Users, ChevronRight, ChevronDown, RefreshCw, AlertCircle } from "lucide-react";
import NewStaffcardDept from "@/app/components/faculty/NewStaffcardDept";
import { sortByDesignation } from "@/lib/designationOrder";
import { OFFICE_SECTIONS } from "../officeSections";

// In-memory module cache for active department codes fetched dynamically from backend
let cachedActiveDepts = null;
let fetchDeptsPromise = null;

const fetchActiveDeptSet = async () => {
  if (cachedActiveDepts) return cachedActiveDepts;
  if (!fetchDeptsPromise) {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
    fetchDeptsPromise = axios
      .get(`${baseUrl}/api/staff2?type=all&limit=50`)
      .then(({ data }) => {
        const staffArr = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
        const set = new Set(staffArr.map((s) => s.department?.toLowerCase().trim()).filter(Boolean));
        cachedActiveDepts = set;
        return set;
      })
      .catch((err) => {
        console.error("Failed to fetch staff department codes:", err);
        fetchDeptsPromise = null;
        return new Set();
      });
  }
  return fetchDeptsPromise;
};

export default function OfficeAdminLayout({ currentSection }) {
  const router = useRouter();
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeSections, setActiveSections] = useState(() => {
    if (cachedActiveDepts) {
      const filtered = OFFICE_SECTIONS.filter((sec) => cachedActiveDepts.has(sec.deptCode.toLowerCase()));
      return filtered.length > 0 ? filtered : OFFICE_SECTIONS;
    }
    return OFFICE_SECTIONS;
  });

  // Dynamically fetch and update active sections from backend
  useEffect(() => {
    let isSubscribed = true;
    fetchActiveDeptSet().then((deptsSet) => {
      if (!isSubscribed) return;
      if (deptsSet && deptsSet.size > 0) {
        const filtered = OFFICE_SECTIONS.filter((sec) => deptsSet.has(sec.deptCode.toLowerCase()));
        if (filtered.length > 0) {
          setActiveSections(filtered);
        }
      }
    });
    return () => {
      isSubscribed = false;
    };
  }, []);

  // Use currentSection if it is in activeSections; otherwise default to first section with data
  const isValidCurrent = currentSection && activeSections.some((s) => s.id === currentSection.id);
  const activeSection = isValidCurrent ? currentSection : activeSections[0];

  useEffect(() => {
    let isSubscribed = true;

    const fetchStaff = async () => {
      try {
        setLoading(true);
        setError(false);
        setStaffList([]);

        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
        let allStaff = [];
        let page = 1;
        let totalPages = 1;

        do {
          const { data } = await axios.get(
            `${baseUrl}/api/staff2?type=all&department=${activeSection.deptCode}&page=${page}&limit=50`
          );

          if (data && Array.isArray(data.data)) {
            allStaff.push(...data.data);
            totalPages = data.totalPages || 1;
          } else if (Array.isArray(data)) {
            allStaff.push(...data);
            totalPages = 1;
          } else {
            totalPages = 1;
          }
          page++;
        } while (page <= totalPages);

        if (isSubscribed) {
          setStaffList(sortByDesignation(allStaff));
        }
      } catch (err) {
        console.error(`Error fetching staff for ${activeSection.title}:`, err);
        if (isSubscribed) {
          setError(true);
        }
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    };

    fetchStaff();

    return () => {
      isSubscribed = false;
    };
  }, [activeSection.deptCode]);

  const handleMobileSelect = (e) => {
    const selected = OFFICE_SECTIONS.find((sec) => sec.id === e.target.value);
    if (selected) {
      router.push(`/Administration/OfficeAdministration/${selected.path}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">

        {/* Page Header */}
        <div className="bg-gradient-to-r from-red-900 via-red-850 to-red-950 rounded-2xl p-5 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 -mr-12 -mt-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2 text-red-200 text-xs sm:text-sm font-medium tracking-wide uppercase flex-wrap">
              <Building2 className="w-4 h-4 text-red-300 shrink-0" />
              <span>Office Administration</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-white font-semibold truncate">{activeSection.shortTitle}</span>
            </div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              {activeSection.title}
            </h1>
            <p className="text-red-100/90 text-xs sm:text-base max-w-3xl leading-relaxed">
              {activeSection.description}
            </p>
          </div>
        </div>

        {/* Mobile Section Selection Dropdown (Only visible on small screens < lg) */}
        <div className="block lg:hidden bg-white rounded-xl p-4 shadow-sm border border-gray-200/80">
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-red-800" />
            <span>Select Administrative Section:</span>
          </label>
          <div className="relative">
            <select
              value={activeSection.id}
              onChange={handleMobileSelect}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 pl-3.5 pr-10 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800 appearance-none cursor-pointer"
            >
              {activeSections.map((sec) => (
                <option key={sec.id} value={sec.id}>
                  {sec.shortTitle} ({sec.deptCode})
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Desktop Sidebar Navigation (Only visible on lg screens and above) */}
          <aside className="hidden lg:block lg:w-72 shrink-0 bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80 lg:sticky lg:top-24 z-10">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-gray-100">
              <Building2 className="w-5 h-5 text-red-800" />
              <h2 className="font-bold text-gray-900 text-base">Administrative Sections</h2>
            </div>
            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
              {activeSections.map((sec) => {
                const isActive = activeSection.id === sec.id;
                const linkHref = `/Administration/OfficeAdministration/${sec.path}`;
                return (
                  <Link
                    key={sec.id}
                    href={linkHref}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${isActive
                        ? "bg-red-800 text-white font-semibold shadow-md shadow-red-900/20"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-900"
                      }`}
                  >
                    <span className="truncate">{sec.shortTitle}</span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "text-white translate-x-0.5" : "text-gray-400"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Section Staff Directory Content */}
          <main className="flex-1 w-full bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-200/80 min-h-[450px]">

            {/* Header / Counter */}
            <div className="flex flex-wrap items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-gray-100 gap-3">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-800" />
                  <span>Section Staff Directory</span>
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                  Official administrative and technical staff members
                </p>
              </div>

              {!loading && !error && (
                <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-800 font-semibold px-3 py-1 rounded-full text-xs sm:text-sm border border-red-200">
                  <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                  {staffList.length} {staffList.length === 1 ? "Member" : "Members"}
                </span>
              )}
            </div>

            {/* State Handling */}
            {loading ? (
              <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
                <RefreshCw className="w-9 h-9 text-red-800 animate-spin" />
                <p className="text-gray-600 font-medium text-sm">
                  Loading staff directory for {activeSection.shortTitle}...
                </p>
              </div>
            ) : error ? (
              <div className="py-16 text-center flex flex-col items-center justify-center space-y-3">
                <AlertCircle className="w-11 h-11 text-red-500" />
                <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                  Unable to load staff data
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm max-w-md">
                  There was an issue fetching details for {activeSection.shortTitle}. Please check your connection or try refreshing.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-red-800 text-white rounded-lg text-sm font-medium hover:bg-red-900 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Retry</span>
                </button>
              </div>
            ) : staffList.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                  No staff members listed
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto">
                  No staff entries are currently available under {activeSection.shortTitle}.
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-2 text-black">
                {staffList.map((staff) => (
                  <NewStaffcardDept key={staff.id ?? staff.user_id ?? staff.email} staff={staff} />
                ))}
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
