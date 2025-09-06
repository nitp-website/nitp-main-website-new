"use client"
import { useState } from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

// Reusable card component
const MemberCard = ({ name, position, department, memberType, email, profileUrl }) => {
  const handleClick = () => {
    if (profileUrl && profileUrl !== "#") {
      window.open(profileUrl, "_blank");
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-100 w-full max-w-sm cursor-pointer transform hover:-translate-y-1 ${
        profileUrl && profileUrl !== "#" ? "hover:border-red-300" : "cursor-default"
      }`}
      onClick={handleClick}
    >
      <div className="bg-gradient-to-r from-red-700 to-red-500 p-4 text-white">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 font-medium mb-2">{position}</p>
        {department && <p className="text-gray-600 text-sm mb-3">{department}</p>}
        <div className="flex items-center justify-between mt-4">
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
            {memberType}
          </span>
          {profileUrl && profileUrl !== "#" && (
            <HiChevronRight className="text-red-500" size={20} />
          )}
        </div>
        {/* {email && <p className="mt-3 text-sm text-gray-600">Email: {email}</p>} */}
      </div>
    </div>
  );
};

const SCSTCell = () => {
  const [state, setState] = useState("Home");
  const tags = ["Home", "People"];

  const committeeMembers = [
    {
      name: "Prof. Fulena Rajak",
      position: "Professor",
      department: "Department of Architecture & Planning",
      memberType: "Liaison Officer",
      email: "sc.st.cell@nitp.ac.in",
      profileUrl: "https://www.nitp.ac.in/profile/fulenarajak@nitp.ac.in",
    },
  ];

  return (
    <div>
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center items-center">
            {tags.map((item, i) => (
              <span
                key={i}
                className={`m-2 p-2 cursor-pointer rounded-lg ${
                  state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"
                }`}
                onClick={() => setState(item)}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col">
            {state === "Home" && (
              <div className="border shadow-xl w-full p-3 text-md font-semibold text-black leading-relaxed">
                The Institute is committed to maintaining a work environment where faculty members,
                staff, and students from different communities can work in a coherent environment.
                It is the Institute&apos;s endeavor to ensure that no discrimination takes place at the
                workplace or inside the Institute campus.
                <br />
                <br />
                The Institute has appointed a Liaison Officer who can be contacted in the event of
                any incident of discrimination. Particulars of Liaison Officer are as under:{" "}
                <span className="font-bold text-red-800">Prof. Fulena Rajak</span>.
                <div className="mt-4">
                  For reporting any grievance related to SC/ST community of NIT Patna, kindly use
                  this email ID:{" "}
                  <span className="font-bold text-red-800">sc.st.cell@nitp.ac.in</span>
                </div>
              </div>
            )}

            {state === "People" && (
              <div className="border shadow-xl w-full p-4 text-md font-semibold text-black">
                <h3 className="text-xl font-bold mb-4 text-red-700">Committee Member</h3>
                <div className="flex justify-center">
                  {committeeMembers.map((member, index) => (
                    <MemberCard key={index} {...member} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex">
        {/* Sidebar */}
        <aside className="md:w-64 min-h-screen bg-gradient-to-b from-white via-red-50 to-red-100 shadow-xl rounded-xl p-4 md:p-6 flex flex-col">
          <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
            SC/ST Cell
          </h2>
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                    state === "Home"
                      ? "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg"
                      : "hover:bg-red-100 text-red-900"
                  }`}
                  onClick={() => setState("Home")}
                >
                  <FaHome className="text-lg" />
                  Home
                </button>
              </li>
              <li>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                    state === "People"
                      ? "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg"
                      : "hover:bg-red-100 text-red-900"
                  }`}
                  onClick={() => setState("People")}
                >
                  <FaUsers className="text-lg" />
                  Committee
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div className="ml-8 flex flex-col flex-1">
          {state === "Home" && (
            <div className="border shadow-xl w-full flex flex-col gap-6 p-6 text-md font-semibold leading-relaxed text-black">
              <div className="flex-1">
                The Institute is committed to maintaining a work environment where faculty members,
                staff, and students from different communities can work in a coherent environment.
                It is the Institute&apos;s endeavor to ensure that no discrimination takes place at
                the workplace or inside the Institute campus. The Institute has appointed a Liaison
                Officer who can be contacted in the event of any incident of discrimination.
                Particulars of Liaison Officer are as under:{" "}
                <span className="font-bold text-red-800">Prof. Fulena Rajak</span>.
                <div className="mt-4">
                  For reporting any grievance related to SC/ST community of NIT Patna, kindly use
                  this email ID:{" "}
                  <span className="font-bold text-red-800">sc.st.cell@nitp.ac.in</span>
                </div>
              </div>
            </div>
          )}

          {state === "People" && (
            <div className="border shadow-xl w-full p-6 text-md font-semibold text-black">
              <h2 className="text-2xl font-bold mb-6 text-red-700">Committee Member</h2>
              <div className="flex justify-start">
                {committeeMembers.map((member, index) => (
                  <MemberCard key={index} {...member} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SCSTCell;
