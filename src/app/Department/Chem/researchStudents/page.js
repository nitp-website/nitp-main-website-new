// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PhdCandidate from "../../../components/faculty/PhdCandidate";

// const cheReserchStudentspage = () => {
//   const [loading, setLoading] = useState(true);
//   const [phdInfo, setPhdInfo] = useState([]);

//   const [selectedCompletedYear, setSelectedCompletedYear] = useState("");
//   const [selectedCompletedFaculty, setSelectedCompletedFaculty] = useState("");
//   const [selectedOngoingYear, setSelectedOngoingYear] = useState("");
//   const [selectedOngoingFaculty, setSelectedOngoingFaculty] = useState("");


//   const fetchPhd = async () => {
//     try {
//       setLoading(true);
//       const api = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=che`;
//       const { data } = await axios.get(api);

//       const phdCandidates = await Promise.all(
//         data.map(async (faculty) => {
//           const email = faculty.email;
//           const facultyApi = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=${email}`;
//           const facultyData = await axios.get(facultyApi);

//           return (
//             facultyData.data.phd_candidates?.map((phd) => ({
//               ...phd,
//               supervisor: facultyData.data.profile.name,
//             })) || []
//           );
//         })
//       );

//       setPhdInfo(phdCandidates.flat());
//     } catch (error) {
//       console.error("Error fetching PhD data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPhd();
//     // console.log(phd);
//   }, []);

//   const completedStatuses = ["Awarded", "Completed"];

//   const extractYear = (dateString) => {
//     if (!dateString) return null;
//     return parseInt(dateString.split("-")[0]);
//   };

//   const completedScholars = phdInfo.filter((c) =>
//     completedStatuses.includes(c.current_status)
//   );

//   const ongoingScholars = phdInfo.filter(
//     (c) => !completedStatuses.includes(c.current_status)
//   );

//   const facultyNames = [
//     ...new Set(completedScholars.map((c) => c.supervisor).filter(Boolean)),
//     ...new Set(ongoingScholars.map((c) => c.supervisor).filter(Boolean)),
//   ];

//   const completedFacultyNames = [
//     ...new Set(
//       completedScholars
//         .filter((c) => c.supervisor)
//         .map((c) => c.supervisor)
//     ),
//   ];

//   // sort the faculty names alphabetically
//   completedFacultyNames.sort((a, b) => a.localeCompare(b));

//   const ongoingFacultyNames = [
//     ...new Set(
//       ongoingScholars
//         .filter((c) => c.supervisor)
//         .map((c) => c.supervisor)
//     ),
//   ];

//   // sort the faculty names alphabetically
//   ongoingFacultyNames.sort((a, b) => a.localeCompare(b));


//   const completionYears = [
//     ...new Set(
//       completedScholars
//         .filter((c) => c.completion_year)
//         .map((c) => extractYear(c.completion_year))
//     ),
//   ];

//   // sort the completion years in descending order
//   completionYears.sort((a, b) => b - a);

//   const ongoingYears = [
//     ...new Set(
//       ongoingScholars
//         .filter((c) => c.registration_year)
//         .map((c) => c.registration_year)
//     ),
//   ];

//   // sort the ongoing years in descending order
//   ongoingYears.sort((a, b) => b - a);

//   const filteredCompletedScholars = completedScholars.filter(
//     (c) =>
//       (!selectedCompletedFaculty || c.supervisor === selectedCompletedFaculty) &&
//       (!selectedCompletedYear ||
//         extractYear(c.completion_year) === parseInt(selectedCompletedYear))
//   );


//   const filteredOngoingScholars = ongoingScholars.filter(
//     (c) =>
//       (!selectedOngoingFaculty || c.supervisor === selectedOngoingFaculty) &&
//       (!selectedOngoingYear ||
//         (c.registration_year) === parseInt(selectedOngoingYear))
//   );


//   const hasFaculty = true;
//   const hasPhd = phdInfo.length > 0;

//   return (
//     <div>
//       <div className="mt-4">
//         <p className="text-red-900 text-xl lg:text-3xl font-bold text-center mb-2">
//           RESEARCH SCHOLARS
//         </p>
//         {loading ? (
//           <div className="text-center mt-5">Loading...</div>
//         ) : (
//           <div className="flex flex-col">
//             <>
//               {ongoingScholars.length > 0 && (
//                 <>
//                   <p className="text-red-900 text-xl lg:text-2xl font-bold text-center mt-2">
//                     Ongoing Research Scholars
//                   </p>

//                   {/* 🔽 Filters for ongoing scholars */}
//                   <div className="items-center flex flex-col sm:flex-row gap-5 justify-center px-2 my-4">
//                     <select
//                       onChange={(e) => setSelectedOngoingYear(e.target.value)}
//                       value={selectedOngoingYear}
//                       className="border p-2 rounded text-black"
//                     >
//                       <option value="">Select Registration Year</option>
//                       {ongoingYears.map((year) => (
//                         <option key={year} value={year}>
//                           {year}
//                         </option>
//                       ))}
//                     </select>

//                     <select
//                       onChange={(e) => setSelectedOngoingFaculty(e.target.value)}
//                       value={selectedOngoingFaculty}
//                       className="border p-2 rounded text-black"
//                     >
//                       <option value="">Select Faculty Supervisor</option>
//                       {ongoingFacultyNames.map((name) => (
//                         <option key={name} value={name}>
//                           {name}
//                         </option>
//                       ))}
//                     </select>

//                   </div>


//                   {/* 🔁 Filtered list for ongoing scholars */}
//                   <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
//                     {filteredOngoingScholars.map((item) => (
//                       <PhdCandidate key={item.id} data={item} />
//                     ))}
//                   </div>
//                 </>
//               )}


//               {completedScholars.length > 0 && (
//                 <>
//                   <p className="text-red-900 text-xl lg:text-2xl font-bold text-center">
//                     Completed Research Scholars
//                   </p>
//                   <div className="items-center flex flex-col sm:flex-row gap-5 justify-center px-2 my-4">
//                     <select
//                       onChange={(e) => setSelectedCompletedYear(e.target.value)}
//                       value={selectedCompletedYear}
//                       className="border p-2 rounded text-black"
//                     >
//                       <option value="">Select Completion Year</option>
//                       {completionYears.map((year) => (
//                         <option key={year} value={year}>
//                           {year}
//                         </option>
//                       ))}
//                     </select>

//                     <select
//                       onChange={(e) => setSelectedCompletedFaculty(e.target.value)}
//                       value={selectedCompletedFaculty}
//                       className="border p-2 rounded text-black"
//                     >
//                       <option value="">Select Faculty Supervisor</option>
//                       {completedFacultyNames.map((name) => (
//                         <option key={name} value={name}>
//                           {name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>


//                   <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
//                     {filteredCompletedScholars.map((item) => (
//                       <PhdCandidate key={item.id} data={item} />
//                     ))}
//                   </div>
//                 </>
//               )}
//             </>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default cheReserchStudentspage;


"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PhdCandidate from "../../../components/faculty/PhdCandidate";

const CheResearchStudentsPage = () => {
  const [loading, setLoading] = useState(true);
  const [phdInfo, setPhdInfo] = useState([]);

  const [selectedCompletedYear, setSelectedCompletedYear] = useState("");
  const [selectedCompletedFaculty, setSelectedCompletedFaculty] = useState("");
  const [selectedOngoingYear, setSelectedOngoingYear] = useState("");
  const [selectedOngoingFaculty, setSelectedOngoingFaculty] = useState("");


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
    // console.log(phd);
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
    ...new Set(ongoingScholars.map((c) => c.supervisor).filter(Boolean)),
  ];

  const completedFacultyNames = [
    ...new Set(
      completedScholars
        .filter((c) => c.supervisor)
        .map((c) => c.supervisor)
    ),
  ];

  // sort the faculty names alphabetically
  completedFacultyNames.sort((a, b) => a.localeCompare(b));

  const ongoingFacultyNames = [
    ...new Set(
      ongoingScholars
        .filter((c) => c.supervisor)
        .map((c) => c.supervisor)
    ),
  ];

  // sort the faculty names alphabetically
  ongoingFacultyNames.sort((a, b) => a.localeCompare(b));


  const completionYears = [
    ...new Set(
      completedScholars
        .filter((c) => c.completion_year)
        .map((c) => extractYear(c.completion_year))
    ),
  ];

  // sort the completion years in descending order
  completionYears.sort((a, b) => b - a);

  const ongoingYears = [
    ...new Set(
      ongoingScholars
        .filter((c) => c.registration_year)
        .map((c) => c.registration_year)
    ),
  ];

  // sort the ongoing years in descending order
  ongoingYears.sort((a, b) => b - a);

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
        (c.registration_year) === parseInt(selectedOngoingYear))
  );


  const hasFaculty = true;
  const hasPhd = phdInfo.length > 0;

  return (
    <div>
      <div className="mt-4">
        <p className="text-red-900 text-xl lg:text-3xl font-bold text-center mb-2">
          RESEARCH SCHOLARS
        </p>
        {loading ? (
          <div className="text-center mt-5">Loading...</div>
        ) : (
          <div className="flex flex-col">
            <>
              {ongoingScholars.length > 0 && (
                <>
                  <p className="text-red-900 text-xl lg:text-2xl font-bold text-center mt-2">
                    Ongoing Research Scholars
                  </p>

                  {/* 🔽 Filters for ongoing scholars */}
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


                  {/* 🔁 Filtered list for ongoing scholars */}
                  <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
                    {filteredOngoingScholars.map((item) => (
                      <PhdCandidate key={item.id} data={item} />
                    ))}
                  </div>
                </>
              )}


              {completedScholars.length > 0 && (
                <>
                  <p className="text-red-900 text-xl lg:text-2xl font-bold text-center">
                    Completed Research Scholars
                  </p>
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
                    {filteredCompletedScholars.map((item) => (
                      <PhdCandidate key={item.id} data={item} />
                    ))}
                  </div>
                </>
              )}
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheResearchStudentsPage;