"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import {
  Search,
  Mail,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  X,
  RotateCcw,
  AlertCircle,
  Users,
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

const deptFullNames = {
  cse: "Computer Science and Engineering",
  ece: "Electronics and Communication Engineering",
  ee: "Electrical Engineering",
  me: "Mechanical Engineering",
  ce: "Civil Engineering",
  arch: "Architecture and Planning",
  che: "Chemical Science and Technology",
  hss: "Humanities and Social Sciences",
  maths: "Mathematics and Computing Technology",
  mae: "Mechatronics and Automation Engineering",
  phy: "Physics",
  mse: "Materials Science and Engineering",
};

const PAGE_LIMIT = 50;

const isValueless = (val) => {
  if (!val) return true;
  const cleaned = String(val).trim().toUpperCase();
  return (
    cleaned === "" ||
    cleaned === "N/A" ||
    cleaned === "NA" ||
    cleaned === "N / A" ||
    cleaned === "NOT APPLICABLE" ||
    cleaned === "NOT AVAILABLE" ||
    cleaned === "-" ||
    cleaned === "--" ||
    cleaned === "NONE" ||
    cleaned === "NULL" ||
    cleaned === "UNDEFINED"
  );
};

const DepartmentStudents = ({ dept, branch: explicitBranch }) => {
  const branch = useMemo(() => {
    if (explicitBranch) return explicitBranch.toLowerCase();
    if (dept && deptToBranch[dept]) return deptToBranch[dept];
    return (dept || "").toLowerCase();
  }, [dept, explicitBranch]);

  const [students, setStudents] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & Search states
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Copy-to-clipboard state (stores copied roll_no)
  const [copiedRoll, setCopiedRoll] = useState(null);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchInput.trim());
      setCurrentPage(1); // reset to page 1 on new search
    }, 350);

    return () => clearTimeout(handler);
  }, [searchInput]);

  // Fetch students from API
  const fetchStudents = useCallback(async () => {
    if (!branch) return;

    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      params.set("department", branch);
      params.set("page", String(currentPage));
      params.set("limit", String(PAGE_LIMIT));

      if (selectedCourse && selectedCourse !== "All") {
        params.set("course", selectedCourse);
      }

      if (debouncedSearch) {
        params.set("search", debouncedSearch);
      }

      const baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";
      const response = await axios.get(
        `${baseUrl}/api/v2/students?${params.toString()}`
      );

      if (response.data && response.data.success) {
        setStudents(Array.isArray(response.data.data) ? response.data.data : []);
        setMeta(response.data.meta || null);
      } else {
        setStudents([]);
        setMeta(null);
      }
    } catch (err) {
      console.error("Error fetching students:", err);
      setError(
        err.response?.data?.message ||
        "Failed to load students. Please try again later."
      );
      setStudents([]);
    } finally {
      setLoading(false);
    }
  }, [branch, currentPage, selectedCourse, debouncedSearch]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  // Handle email copy
  const handleCopyEmail = (email, rollNo) => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopiedRoll(rollNo);
    setTimeout(() => {
      setCopiedRoll(null);
    }, 2000);
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchInput("");
    setDebouncedSearch("");
    setSelectedCourse("All");
    setCurrentPage(1);
  };

  const departmentTitle =
    meta?.department || deptFullNames[branch] || (dept ? `Department of ${dept}` : "Department");

  const totalPages = meta?.totalPages || 1;
  const totalStudents = meta?.totalStudents ?? students.length;
  const availableCourses = meta?.availableCourses || [];

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-black">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-900 tracking-tight">
          STUDENTS
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Official student directory for the Department of {departmentTitle}.
        </p>
      </div>

      {/* Controls / Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by Name, Roll No, or Email..."
              className="w-full pl-10 pr-9 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all"
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                title="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Course Dropdown */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center">
            <div className="w-full sm:w-auto min-w-[200px]">
              <select
                value={selectedCourse}
                onChange={(e) => {
                  setSelectedCourse(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-red-700 focus:bg-white transition-all cursor-pointer"
              >
                <option value="All">All Courses</option>
                {availableCourses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button (visible when filters are applied) */}
            {(debouncedSearch || selectedCourse !== "All") && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-semibold text-red-800 hover:bg-red-50 border border-red-200 rounded-lg transition-colors whitespace-nowrap"
                title="Reset filters"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Count / Status Info Bar */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-600 gap-2">
          <div>
            {loading ? (
              <span>Loading student records...</span>
            ) : (
              <span>
                Total: <strong className="text-gray-900">{totalStudents}</strong> student
                {totalStudents === 1 ? "" : "s"} found
                {selectedCourse !== "All" && (
                  <span className="ml-1 text-red-800 font-medium">
                    in &quot;{selectedCourse}&quot;
                  </span>
                )}
                {debouncedSearch && (
                  <span className="ml-1 text-gray-700">
                    matching &quot;{debouncedSearch}&quot;
                  </span>
                )}
              </span>
            )}
          </div>
          {totalPages > 1 && (
            <div className="text-gray-500">
              Page {currentPage} of {totalPages}
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-red-700 border-t-transparent mb-4"></div>
          <p className="text-gray-600 text-sm font-medium">Fetching students data...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
          <AlertCircle size={36} className="mx-auto text-red-600 mb-3" />
          <h3 className="text-lg font-bold text-red-900 mb-1">Failed to load student list</h3>
          <p className="text-sm text-red-700 mb-4">{error}</p>
          <button
            onClick={fetchStudents}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-800 hover:bg-red-900 text-white text-sm font-semibold rounded-lg shadow transition-colors"
          >
            <RotateCcw size={15} />
            <span>Try Again</span>
          </button>
        </div>
      ) : students.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Users size={44} className="mx-auto text-gray-300 mb-3" />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
            No students found
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-4">
            {debouncedSearch || selectedCourse !== "All"
              ? "No students match your selected search criteria. Try modifying your search or resetting filters."
              : "No student records are currently registered for this department."}
          </p>
          {(debouncedSearch || selectedCourse !== "All") && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-800 text-xs sm:text-sm font-semibold rounded-lg border border-red-200 transition-colors"
            >
              <RotateCcw size={14} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Desktop & Tablet: Clean Table View */}
          <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-red-900 to-red-800 text-white text-xs uppercase tracking-wider font-semibold">
                    <th className="py-3.5 px-4 w-14 text-center">#</th>
                    <th className="py-3.5 px-4 w-36">Roll No</th>
                    <th className="py-3.5 px-6">Student Name</th>
                    <th className="py-3.5 px-6">Institute Email</th>
                    <th className="py-3.5 px-6">Course / Program</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {students.map((student, idx) => {
                    const serialNumber =
                      (currentPage - 1) * PAGE_LIMIT + idx + 1;
                    const isCopied = copiedRoll === student.roll_no;

                    return (
                      <tr
                        key={student.id || student.roll_no || idx}
                        className="hover:bg-red-50/50 transition-colors"
                      >
                        {/* S.No */}
                        <td className="py-3.5 px-4 text-center text-xs font-semibold text-gray-400">
                          {serialNumber}
                        </td>

                        {/* Roll Number */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-900 font-mono font-bold text-xs rounded border border-gray-200">
                            {student.roll_no || "-"}
                          </span>
                        </td>

                        {/* Student Name */}
                        <td className="py-3.5 px-6 font-semibold text-gray-900">
                          <div className="flex flex-col">
                            <span>{student.name || "-"}</span>
                          </div>
                        </td>

                        {/* Institute Email */}
                        <td className="py-3.5 px-6 whitespace-nowrap">
                          {student.email ? (
                            <div className="inline-flex items-center gap-2 group">
                              <a
                                href={`mailto:${student.email}`}
                                className="inline-flex items-center gap-1.5 text-xs text-red-800 hover:text-red-950 hover:underline font-medium"
                                title={`Send email to ${student.name}`}
                              >
                                <Mail size={14} className="text-red-700 shrink-0" />
                                <span>{student.email}</span>
                              </a>
                              <button
                                onClick={() =>
                                  handleCopyEmail(student.email, student.roll_no)
                                }
                                className="p-1 text-gray-400 hover:text-gray-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                                title={isCopied ? "Copied!" : "Copy email"}
                              >
                                {isCopied ? (
                                  <Check size={13} className="text-green-600" />
                                ) : (
                                  <Copy size={13} />
                                )}
                              </button>
                            </div>
                          ) : (
                            <span className="text-gray-400 italic text-xs">-</span>
                          )}
                        </td>

                        {/* Course / Program */}
                        <td className="py-3.5 px-6">
                          <div className="flex flex-col gap-1 items-start">
                            {!isValueless(student.course) && (
                              <span className="inline-block px-2.5 py-0.5 bg-red-50 text-red-900 text-xs font-medium rounded-full border border-red-200">
                                {student.course}
                              </span>
                            )}
                            {!isValueless(student.specialization) && (
                              <span className="text-[11px] text-gray-500 italic">
                                {student.specialization}
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile: Responsive Card List */}
          <div className="sm:hidden space-y-3">
            {students.map((student, idx) => {
              const serialNumber =
                (currentPage - 1) * PAGE_LIMIT + idx + 1;
              const isCopied = copiedRoll === student.roll_no;

              return (
                <div
                  key={student.id || student.roll_no || idx}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-400">
                        #{serialNumber}
                      </span>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-900 font-mono font-bold text-xs rounded border border-gray-200">
                        {student.roll_no || "-"}
                      </span>
                    </div>
                    {!isValueless(student.course) && (
                      <span className="px-2 py-0.5 bg-red-50 text-red-900 text-[11px] font-medium rounded border border-red-200 max-w-[160px] truncate">
                        {student.course}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {student.name || "-"}
                  </h3>

                  {!isValueless(student.specialization) && (
                    <p className="text-xs text-gray-500 italic mb-2">
                      {student.specialization}
                    </p>
                  )}

                  {student.email && (
                    <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
                      <a
                        href={`mailto:${student.email}`}
                        className="inline-flex items-center gap-1.5 text-xs text-red-800 hover:underline font-medium truncate max-w-[85%]"
                      >
                        <Mail size={13} className="text-red-700 shrink-0" />
                        <span className="truncate">{student.email}</span>
                      </a>
                      <button
                        onClick={() =>
                          handleCopyEmail(student.email, student.roll_no)
                        }
                        className="p-1.5 text-gray-500 hover:text-gray-800 bg-gray-50 rounded"
                        title={isCopied ? "Copied!" : "Copy email"}
                      >
                        {isCopied ? (
                          <Check size={14} className="text-green-600" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="text-xs sm:text-sm text-gray-600">
                Showing{" "}
                <strong>{(currentPage - 1) * PAGE_LIMIT + 1}</strong> to{" "}
                <strong>
                  {Math.min(currentPage * PAGE_LIMIT, totalStudents)}
                </strong>{" "}
                of <strong>{totalStudents}</strong> students
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={currentPage <= 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} />
                  <span>Prev</span>
                </button>

                {/* Page Number Chips */}
                <div className="flex items-center gap-1 px-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => {
                      // show first, last, current, and neighbours
                      return (
                        p === 1 ||
                        p === totalPages ||
                        Math.abs(p - currentPage) <= 1
                      );
                    })
                    .map((page, idx, arr) => {
                      const showEllipsisBefore =
                        idx > 0 && page - arr[idx - 1] > 1;

                      return (
                        <React.Fragment key={page}>
                          {showEllipsisBefore && (
                            <span className="px-1 text-gray-400 text-xs">...</span>
                          )}
                          <button
                            onClick={() => {
                              setCurrentPage(page);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className={`min-w-[32px] h-8 text-xs font-semibold rounded-lg transition-colors ${page === currentPage
                              ? "bg-red-800 text-white shadow-sm"
                              : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                              }`}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      );
                    })}
                </div>

                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={currentPage >= totalPages}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DepartmentStudents;

