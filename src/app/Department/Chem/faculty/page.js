"use client";
import BackDepartment from "../../../components/department/BackDepartment";
import FacultyList from "../../../../components/facultycomponents/FacultyList";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeptStaffcard from "../../../components/faculty/DeptStaff";
import PhdCandidate from "../../../components/faculty/PhdCandidate";
import staffData from "../../staffChemical";
import StaffcardDept from "../../../components/faculty/StaffcardDept";

const Home = () => {
  const [faculty, setFaculty] = useState(true);
  const [staff, setStaff] = useState(false);
  const [phd, setPhd] = useState(false);
  const [loading, setLoading] = useState(true);
  const [phdInfo, setPhdInfo] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");

  const fetchPhd = async () => {
    try {
      setLoading(true);
      const api = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=che`;
      const { data } = await axios.get(api);

      const phdCandidates = await Promise.all(
        data.map(async (faculty) => {
          const email = faculty.email;
          const facultyApi = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=${email}`;
          const facultyData = await axios.get(facultyApi);

          return (
            facultyData.data.phd_candidates?.map((phd) => ({
              ...phd,
              supervisor: facultyData.data.profile.name,
            })) || []
          );
        })
      );

      setPhdInfo(phdCandidates.flat());
    } catch (error) {
      console.error("Error fetching PhD data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhd();
  }, []);

  const completedStatuses = ["Awarded", "Completed"];

  const extractYear = (dateString) => {
    if (!dateString) return null;
    return parseInt(dateString.split("-")[0]);
  };

  const completedScholars = phdInfo.filter((c) =>
    completedStatuses.includes(c.current_status)
  );

  const ongoingScholars = phdInfo.filter(
    (c) => !completedStatuses.includes(c.current_status)
  );

  const facultyNames = [
    ...new Set(completedScholars.map((c) => c.supervisor).filter(Boolean)),
  ];

  const completionYears = [
    ...new Set(
      completedScholars
        .filter((c) => c.completion_year)
        .map((c) => extractYear(c.completion_year))
    ),
  ];

  const filteredCompletedScholars = completedScholars.filter(
    (c) =>
      (!selectedFaculty || c.supervisor === selectedFaculty) &&
      (!selectedYear ||
        extractYear(c.completion_year) === parseInt(selectedYear))
  );

  // Check if data is available for each section
  const hasFaculty = true; // Faculty is always present
  const hasStaff =
    staffData.find((dept) => dept.department === "Chemical")?.staff.length > 0;
  const hasPhd = phdInfo.length > 0;

  // Dynamically create tab options based on available data
  const tabOptions = [
    hasFaculty && { label: "Faculties", key: "faculty" },
    hasStaff && { label: "Staffs", key: "staff" },
    hasPhd && { label: "Research Scholars", key: "phd" },
  ].filter(Boolean);

  return (
    <div className="flex flex-col px-3 py-10 max-sm:p-4 text-black">
      <div className="flex flex-col mb-4">
        <div className="mt-2 w-full justify-center flex">
          <p className="text-gray-500 text-sm lg:text-xl font-semibold">
            Chemical Science and Technology
          </p>
        </div>
        <BackDepartment navigate={"/Department/Chem"} />
      </div>

      {/* Render only available tabs */}
      <div className="mt-2 mb-10 flex space-x-1 w-full justify-center">
        {tabOptions.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setFaculty(tab.key === "faculty");
              setStaff(tab.key === "staff");
              setPhd(tab.key === "phd");
            }}
            className={`border border-black rounded px-2 ${
              (faculty && tab.key === "faculty") ||
              (staff && tab.key === "staff") ||
              (phd && tab.key === "phd")
                ? "text-white bg-red-900"
                : "text-red-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {faculty && hasFaculty && (
        <div className="flex flex-col">
          <p className="text-red-900 text-xl lg:text-2xl font-bold">FACULTY</p>
          <FacultyList url={"/Department/Chem/faculty"} branch={"che"} />
        </div>
      )}

      {staff && hasStaff && (
        <div className="flex flex-col">
          <p className="text-red-900 text-xl lg:text-2xl font-bold">STAFFS</p>
          <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
            {staffData
              .find((dept) => dept.department === "Chemical")
              ?.staff.map((staffMember, index) => (
                <StaffcardDept key={index} {...staffMember} />
              ))}
          </div>
        </div>
      )}

      {phd && hasPhd && (
        <div className="flex flex-col">
          <p className="text-red-900 text-xl lg:text-2xl font-bold mb-5">
            RESEARCH SCHOLARS
          </p>

          {loading ? (
            <div className="text-center mt-5">Loading...</div>
          ) : (
            <>
              {/* Ongoing Research Scholars Section (No Filters) */}
              {ongoingScholars.length > 0 && (
                <>
                  <p className="text-red-900 text-xl lg:text-2xl font-bold text-center mt-6">
                    Ongoing Research Scholars
                  </p>

                  <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
                    {ongoingScholars.map((item) => (
                      <PhdCandidate key={item.id} data={item} />
                    ))}
                  </div>
                </>
              )}

              {/* Completed Research Scholars Section */}
              {completedScholars.length > 0 && (
                <>
                  <p className="text-red-900 text-xl lg:text-2xl font-bold text-center">
                    Completed Research Scholars
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5 justify-center px-2 my-4">
                    {/* Completion Year Dropdown */}
                    <select
                      onChange={(e) => setSelectedYear(e.target.value)}
                      value={selectedYear}
                      className="w-full border p-2 rounded"
                    >
                      <option value="">Select Completion Year</option>
                      {completionYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    {/* Faculty Name Dropdown */}
                    <select
                      onChange={(e) => setSelectedFaculty(e.target.value)}
                      value={selectedFaculty}
                      className="w-full border p-2 rounded"
                    >
                      <option value="">Select Faculty Supervisor</option>
                      {facultyNames.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
                    {filteredCompletedScholars.map((item) => (
                      <PhdCandidate key={item.id} data={item} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
