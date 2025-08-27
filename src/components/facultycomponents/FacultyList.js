"use client";
import React, { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";

const FacultyCard = dynamic(() => import("./Facultycard"), {
  loading: () => (
    <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">Loading</div>
  ),
});

const FacultyList = ({ url, branch }) => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  // search & pagination state
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 20;

  useEffect(() => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=${branch}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        const order = [
          "HoD & Professor",
          "HoD & Associate Professor",
          "HoD and Professor",
          "Professor",
          "Associate Professor",
          "Assistant Professor",
          "Registrar",
          "Temporary Faculty"
        ];

        // Sorting the faculty data based on the order of designations and academic_responsibility
        const sortedData = data.sort((a, b) => {
          const aIsHoD = a.designation.includes("HoD");
          const bIsHoD = b.designation.includes("HoD");

          // HoD always comes first, regardless of academic responsibility
          if (aIsHoD && !bIsHoD) {
            return -1; // a (HoD) comes before b
          }
          if (!aIsHoD && bIsHoD) {
            return 1; // b (HoD) comes before a
          }

          // If neither is HoD or both are HoD, then check for Dean
          const aIsDean = a.academic_responsibility?.startsWith("Dean");
          const bIsDean = b.academic_responsibility?.startsWith("Dean");

          // If one is Dean and the other isn't, prioritize the Dean
          if (aIsDean && !bIsDean) {
            return -1; // Dean comes before non-Dean
          }
          if (!aIsDean && bIsDean) {
            return 1; // Dean comes before non-Dean
          }

          // If both are Deans or neither is Dean, use the regular designation order
          return order.indexOf(a.designation) - order.indexOf(b.designation);
        });

        setFacultyData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter faculties that are not in the specified order
  const others = facultyData.filter(
    (faculty) => ![
      "HoD & Professor",
      "HoD & Associate Professor",
      "HoD and Professor",
      "Professor",
      "Associate Professor",
      "Assistant Professor",
      "Registrar",
      "Temporary Faculty"
    ].includes(faculty.designation)
  );

  // build ordered list used in original render
  const prioritizedDesignations = [
    "HoD & Professor",
    "HoD & Associate Professor",
    "HoD and Professor",
    "Professor",
    "Associate Professor",
    "Assistant Professor",
    "Registrar",
    "Temporary Faculty",
  ];

  const orderedList = facultyData.filter((faculty) =>
    prioritizedDesignations.includes(faculty.designation)
  );

  // combined list preserves original grouping order: orderedList then others
  const combinedList = useMemo(() => [...orderedList, ...others], [orderedList, others]);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredList = useMemo(() => {
    if (!normalizedSearch) return combinedList;

    const tokens = normalizedSearch.split(/\s+/).filter(Boolean);

    return combinedList.filter((f) => {
      const name = (f.name || "").toLowerCase();
      const email = (f.email || "").toLowerCase();
      const designation = (f.designation || "").toLowerCase();
      const academic = (f.academic_responsibility || "").toLowerCase();

      // split name into parts to match first/middle/last and check initials
      const nameParts = name.split(/\s+/).filter(Boolean);

      return tokens.every((token) => {
        // direct substring matches first
        if (email.includes(token) || designation.includes(token) || academic.includes(token) || name.includes(token)) {
          return true;
        }

        // match token against any name part (partial match)
        if (nameParts.some((p) => p.includes(token))) return true;

        // if token is a single letter, match against initials of name parts
        if (token.length === 1) {
          return nameParts.some((p) => p[0] === token);
        }

        return false;
      });
    });
  }, [combinedList, normalizedSearch]);

  const totalPages = Math.max(1, Math.ceil(filteredList.length / PAGE_SIZE));

  // Ensure current page is within bounds
  if (currentPage > totalPages) setCurrentPage(totalPages);

  const paginatedIds = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return new Set(filteredList.slice(start, start + PAGE_SIZE).map((f) => f.id || f.email));
  }, [filteredList, currentPage]);

  const paginatedList = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredList.slice(start, start + PAGE_SIZE);
  }, [filteredList, currentPage]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg text-gray-600 animate-pulse">
        Loading Faculties...
      </div>
    );
  }

  return (
    <div className="flex flex-col p-2">
      {/* Search bar (added) */}
      <div className="w-full flex justify-center mb-4">
        <input
          aria-label="Search faculty by name, email or position"
          type="search"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          placeholder="Search by name, email or position"
          className="w-full max-w-2xl px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* If searching, render a flat paginated list of matches */}
        {searchTerm ? (
          paginatedList.length === 0 ? (
            <div className="text-center text-gray-600">No results found.</div>
          ) : (
            paginatedList.map((faculty) => (
              <FacultyCard
                key={faculty.id || faculty.email}
                name={faculty.name}
                image={faculty.image}
                designation={faculty.designation}
                department={faculty.department}
                researchInterests={faculty.research_interest}
                academic_responsibility={faculty.academic_responsibility}
                email={faculty.email}
                phone={faculty.ext_no}
                journalPublications={faculty.journal_papers_count}
                conferencePublications={faculty.conference_papers_count}
                patents={faculty.ipr_count}
                projects={faculty.sponsored_projects_count}
                research_students={faculty.phd_candidates_count}
                profileLink={`${url}/${faculty.email}`}
              />
            ))
          )
        ) : (
          // original grouped rendering but only show items that belong to current page
          <>
            {facultyData
              .filter((faculty) =>
                [
                  "HoD & Professor",
                  "HoD & Associate Professor",
                  "HoD and Professor",
                  "Professor",
                  "Associate Professor",
                  "Assistant Professor",
                  "Registrar",
                  "Temporary Faculty"
                ].includes(faculty.designation)
              )
              .map((faculty) => (
                (paginatedIds.has(faculty.id || faculty.email)) && (
                <FacultyCard
                  key={faculty.id}
                  name={faculty.name}
                  image={faculty.image}
                  designation={faculty.designation}
                  department={faculty.department}
                  researchInterests={faculty.research_interest}
                  academic_responsibility={faculty.academic_responsibility}
                  email={faculty.email}
                  phone={faculty.ext_no}
                  journalPublications={faculty.journal_papers_count}
                  conferencePublications={faculty.conference_papers_count}
                  patents={faculty.ipr_count}
                  projects={faculty.sponsored_projects_count}
                  research_students={faculty.phd_candidates_count}
                  profileLink={`/profile/${faculty.email}`}
                />)
              ))}

            {others.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
                <h6 className="font-bold">Others</h6>
                {others.map((faculty) => (
                  (paginatedIds.has(faculty.id || faculty.email)) && (
                  <FacultyCard
                    key={faculty.id}
                    name={faculty.name}
                    image={faculty.image}
                    designation={faculty.designation}
                    department={faculty.department}
                    researchInterests={faculty.research_interest}
                    academic_responsibility={faculty.academic_responsibility}
                    email={faculty.email}
                    phone={faculty.ext_no}
                    profileLink={`${url}/${faculty.email}`}
                  />)
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Pagination controls (added) */}
      <div className="w-full flex items-center justify-center gap-4 py-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
        >
          Previous
        </button>

        <div className="text-sm text-gray-700">
          Page {currentPage} of {totalPages} — {filteredList.length} result{filteredList.length !== 1 ? "s" : ""}
        </div>

        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FacultyList;
