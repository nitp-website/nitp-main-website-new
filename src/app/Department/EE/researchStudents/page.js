"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PhdCandidate from "../../../components/faculty/PhdCandidate.js";

const EEResearchStudentsPage = () => {
  const [loading, setLoading] = useState(true);
  const [phdInfo, setPhdInfo] = useState([]);
  const [error, setError] = useState(null);

  const [selectedCompletedYear, setSelectedCompletedYear] = useState("");
  const [selectedCompletedFaculty, setSelectedCompletedFaculty] = useState("");
  const [selectedOngoingYear, setSelectedOngoingYear] = useState("");
  const [selectedOngoingFaculty, setSelectedOngoingFaculty] = useState("");

  const fetchPhd = async () => {
    try {
      setLoading(true);
      setError(null);

  const api = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=ee`;
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
    } catch (err) {
      console.error("Error fetching PhD data:", err);
      setError("Failed to load research scholars. Please try again later.");
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

  const completedFacultyNames = [
    ...new Set(
      completedScholars
        .filter((c) => c.supervisor)
        .map((c) => c.supervisor)
    ),
  ].sort((a, b) => a.localeCompare(b));

  const ongoingFacultyNames = [
    ...new Set(
      ongoingScholars
        .filter((c) => c.supervisor)
        .map((c) => c.supervisor)
    ),
  ].sort((a, b) => a.localeCompare(b));

  const completionYears = [
    ...new Set(
      completedScholars
        .filter((c) => c.completion_year)
        .map((c) => extractYear(c.completion_year))
    ),
  ].sort((a, b) => b - a);

  const ongoingYears = [
    ...new Set(
      ongoingScholars
        .filter((c) => c.registration_year)
        .map((c) => c.registration_year)
    ),
  ].sort((a, b) => b - a);

  const filteredCompletedScholars = completedScholars.filter(
    (c) =>
      (!selectedCompletedFaculty || c.supervisor === selectedCompletedFaculty) &&
      (!selectedCompletedYear ||
        extractYear(c.completion_year) === parseInt(selectedCompletedYear))
  );

  const filteredOngoingScholars = ongoingScholars.filter(
    (c) =>
      (!selectedOngoingFaculty || c.supervisor === selectedOngoingFaculty) &&
      (!selectedOngoingYear ||
        c.registration_year === parseInt(selectedOngoingYear))
  );

  return (
    <div className="mt-4">
      <p className="text-red-900 text-xl lg:text-3xl font-bold text-center mb-2">
        RESEARCH SCHOLARS
      </p>

      {loading ? (
        <div className="text-center mt-10 text-lg text-gray-600 animate-pulse">
          Loading Research Scholars...
        </div>
      ) : error ? (
        <div className="text-center mt-10 text-red-600 font-semibold">
          {error}
        </div>
      ) : phdInfo.length === 0 ? (
        <div className="text-center mt-10 text-gray-600">
          No research scholars available.
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Ongoing Scholars */}
          {ongoingScholars.length > 0 && (
            <>
              <p className="text-red-900 text-xl lg:text-2xl font-bold text-center mt-2">
                Ongoing Research Scholars
              </p>

              {/* Filters */}
              <div className="items-center flex flex-col sm:flex-row gap-5 justify-center px-2 my-4">
                <select
                  onChange={(e) => setSelectedOngoingYear(e.target.value)}
                  value={selectedOngoingYear}
                  className="border p-2 rounded text-black"
                >
                  <option value="">Select Registration Year</option>
                  {ongoingYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  onChange={(e) => setSelectedOngoingFaculty(e.target.value)}
                  value={selectedOngoingFaculty}
                  className="border p-2 rounded text-black"
                >
                  <option value="">Select Faculty Supervisor</option>
                  {ongoingFacultyNames.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
                {
                  filteredOngoingScholars.length > 0 ? (
                    filteredOngoingScholars.map((item) => (
                      <PhdCandidate key={item.id} data={item} />
                    ))
                  ) : (
                    <div className="text-center w-full text-gray-600">
                      No Ongoing Research Scholars match the selected filters.
                    </div>
                  )
                }
              </div>
            </>
          )}

          {/* Completed Scholars */}
          {completedScholars.length > 0 && (
            <>
              <p className="text-red-900 text-xl lg:text-2xl font-bold text-center">
                Completed Research Scholars
              </p>

              {/* Filters */}
              <div className="items-center flex flex-col sm:flex-row gap-5 justify-center px-2 my-4">
                <select
                  onChange={(e) => setSelectedCompletedYear(e.target.value)}
                  value={selectedCompletedYear}
                  className="border p-2 rounded text-black"
                >
                  <option value="">Select Completion Year</option>
                  {completionYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  onChange={(e) => setSelectedCompletedFaculty(e.target.value)}
                  value={selectedCompletedFaculty}
                  className="border p-2 rounded text-black"
                >
                  <option value="">Select Faculty Supervisor</option>
                  {completedFacultyNames.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
                {
                  filteredCompletedScholars.length > 0 ? (
                    filteredCompletedScholars.map((item) => (
                      <PhdCandidate key={item.id} data={item} />
                    ))
                  ) : (
                    <div className="text-center w-full text-gray-600">
                      No Completed Research Scholars match the selected filters.
                    </div>
                  )
                }
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default EEResearchStudentsPage;
