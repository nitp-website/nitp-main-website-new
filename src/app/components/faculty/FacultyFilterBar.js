// import React from "react";

// const FacultyFilterBar = ({
//   searchTerm,
//   setSearchTerm,
//   departmentOptions = [],
//   selectedDepartment,
//   setSelectedDepartment,
//   positionOptions = [],
//   selectedPosition,
//   setSelectedPosition
// }) => {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8 w-full">
//       <input
//         type="text"
//         placeholder="Search by name, email or position..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//         className="border-2 black rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:border-red-500 shadow-sm transition duration-150"
//       />
//       <select
//         value={selectedDepartment}
//         onChange={e => setSelectedDepartment(e.target.value)}
//         className="border-2 black rounded-lg px-4 py-2 w-full md:w-56 focus:outline-none focus:border-red-500 shadow-sm transition duration-150 bg-white"
//       >
//         <option value="">All Departments</option>
//         {departmentOptions.map(dep => (
//           <option key={dep} value={dep}>{dep}</option>
//         ))}
//       </select>
//       <select
//         value={selectedPosition}
//         onChange={e => setSelectedPosition(e.target.value)}
//         className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full md:w-56 focus:outline-none focus:border-red-500 shadow-sm transition duration-150 bg-white"
//       >
//         <option value="">All Positions</option>
//         {positionOptions.map(pos => (
//           <option key={pos} value={pos}>{pos}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default FacultyFilterBar;
import React from "react";

const FacultyFilterBar = ({
  searchTerm,
  setSearchTerm,
  departmentOptions = [],
  selectedDepartment,
  setSelectedDepartment,
  positionOptions = [],
  selectedPosition,
  setSelectedPosition
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-10 w-full">
      {/* Search Box */}
     <input
  type="text"
  placeholder="🔍 Search by name, email or position..."
  value={searchTerm}
  onChange={e => setSearchTerm(e.target.value)}
  className="border border-gray-300 rounded-full px-5 py-2 w-full md:w-80 
             focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 
             shadow-md transition duration-200 ease-in-out 
             placeholder-gray-500 text-gray-700"
/>

      {/* Department Dropdown */}
      <select
        value={selectedDepartment}
        onChange={e => setSelectedDepartment(e.target.value)}
        className="border-2 border-gray-300 rounded-xl px-4 py-2 w-full md:w-60 
                   focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 
                   shadow-sm transition duration-200 ease-in-out bg-white text-gray-700"
      >
        <option value="">🏫 All Departments</option>
        {departmentOptions.map(dep => (
          <option key={dep} value={dep}>{dep}</option>
        ))}
      </select>

      {/* Position Dropdown */}
      <select
        value={selectedPosition}
        onChange={e => setSelectedPosition(e.target.value)}
        className="border-2 border-gray-300 rounded-xl px-4 py-2 w-full md:w-60 
                   focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 
                   shadow-sm transition duration-200 ease-in-out bg-white text-gray-700"
      >
        <option value="">👨‍🏫 All Positions</option>
        {positionOptions.map(pos => (
          <option key={pos} value={pos}>{pos}</option>
        ))}
      </select>
    </div>
  );
};

export default FacultyFilterBar;
