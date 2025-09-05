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
  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(""); // ADDED: State for the dropdown

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

        // Sorting the faculty data based on the order of designations, academic_responsibility, and then by name
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
          const designationComparison = order.indexOf(a.designation) - order.indexOf(b.designation);
          
          // If designations are the same, sort by name alphabetically
          if (designationComparison === 0) {
            return a.name.localeCompare(b.name);
          }
          
          return designationComparison;
        });

        setFacultyData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [branch]);

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

  // build ordered list used in o
riginal render
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

  // list of unique positions for the dropdown
  const uniquePositions = useMemo(() => {
    const positions = new Set(facultyData.map(f => f.designation));
    return Array.from(positions);
  }, [facultyData]);

  //The filteredList now handles both search and the position dropdown
  const filteredList = useMemo(() => {
    let result = combinedList;

    // Apply position filter
    if (selectedPosition) {
      result = result.filter(f => f.designation === selectedPosition);
    }
    
    const normalizedSearch = searchTerm.trim().toLowerCase();
    // Apply search term filter
    if (normalizedSearch) {
      const tokens = normalizedSearch.split(/\s+/).filter(Boolean);
      result = result.filter((f) => {
        const name = (f.name || "").toLowerCase();
        const email = (f.email || "").toLowerCase();
        const designation = (f.designation || "").toLowerCase();
        const academic = (f.academic_responsibility || "").toLowerCase();
        const nameParts = name.split(/\s+/).filter(Boolean);

        return tokens.every((token) => {
          if (email.includes(token) || designation.includes(token) || academic.includes(token) || name.includes(token)) {
            return true;
          }
          if (nameParts.some((p) => p.includes(token))) return true;
          if (token.length === 1) {
            return nameParts.some((p) => p[0] === token);
          }
          return false;
        });
      });
    }

    return result;
  }, [combinedList, searchTerm, selectedPosition]);


  if (loading) {
    return (
      <div className="text-center mt-10 text-lg text-gray-600 animate-pulse">
        Loading Faculties...
      </div>
    );
  }

  // Sort "others" by name alphabetically
  const sortedOthers = others.sort((a, b) => a.name.localeCompare(b.name));


  return (
    <div className="flex flex-col p-2">
      {/*  Added a wrapper and the position dropdown */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input
          aria-label="Search faculty by name, email or position"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email or position"
          className="w-full max-w-lg px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <select
          aria-label="Filter by position"
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
          className="w-full max-w-xs px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">All Positions</option>
          {uniquePositions.map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>

      {/* Simplified rendering logic to show filteredList directly */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {filteredList.length > 0 ? (
          filteredList.map((faculty) => (
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
        ) : (
          <div className="text-center text-gray-600">No results found.</div>

          ))}

        {/* Render other faculties not in the order list */}
        {sortedOthers.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
            <h6 className="font-bold">Others</h6>
            {sortedOthers.map((faculty) => (
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
              />
            ))}
          </div>

        )}
      </div>
    </div>
  );
};

export default FacultyList;
