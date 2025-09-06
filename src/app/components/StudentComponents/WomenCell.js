"use client"
import { useState } from "react";
import { FaHome, FaUsers, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";

const MemberCard = ({ name, position, department, memberType, email, profileUrl }) => {
  const handleClick = () => {
    if (profileUrl && profileUrl !== "#") {
      window.open(profileUrl, '_blank');
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
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            memberType === "Chairperson" 
              ? "bg-red-200 text-red-800" 
              : memberType === "External Member"
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          }`}>
            {memberType}
          </span>
          {profileUrl && profileUrl !== "#" && (
            <HiChevronRight className="text-red-500" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

const WomenCell = () => {
  const [state, setState] = useState("Home");
  const tags = ["Home", "People"];
  
  // Women Cell Committee Members
  const committeeMembers = [
    { 
      name: "Dr. Kamini Sinha", 
      position: "Associate Professor",
      department: "Architecture", 
      memberType: "Chairperson",
      email: "kamini@nitp.ac.in",
      profileUrl: "https://www.nitp.ac.in/profile/kamini@nitp.ac.in"
    },
    { 
      name: "Dr. Kakali Chatterjee", 
      position: "Assistant Professor",
      department: "Computer Science & Engineering", 
      memberType: "Member",
      email: "kakali@nitp.ac.in",
      profileUrl: "https://www.nitp.ac.in/profile/kakali@nitp.ac.in"
    },
    { 
      name: "Dr. A. R. Quaff", 
      position: "Associate Professor",
      department: "Civil Engineering", 
      memberType: "Member",
      email: "arq@nitp.ac.in",
      profileUrl: "https://www.nitp.ac.in/profile/arquaff@nitp.ac.in"
    },
    { 
      name: "Mrs. Sunita Kumari", 
      position: "Grade-D, Girls Hostel",
      department: "Administration", 
      memberType: "Member",
      email: "",
      profileUrl: "#"
    },
    { 
      name: "Mrs. Nisha Jha", 
      position: "Social Activist",
      department: "External", 
      memberType: "External Member",
      email: "",
      profileUrl: "#"
    },
    { 
      name: "Sri S. K. Giri", 
      position: "Advocate, Patna High Court",
      department: "External", 
      memberType: "External Member",
      email: "",
      profileUrl: "#"
    },
  ];

  return (
    <div>
      <div className="block md:hidden">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-center items-center ">
            {tags.map((item, i) => (
              <span
                key={i}
                className={`m-2 p-2 cursor-pointer rounded-lg ${
                  state === item
                    ? "bg-red-300 text-black"
                    : "bg-red-700 text-white"
                }`}
                onClick={() => setState(item)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col">
            {state === "Home" && (
                <div className="border shadow-xl w-full h-auto p-4 text-md font-semibold text-black overflow-y-auto">
                  <h2 className="text-xl font-bold mb-4 text-red-700">About Women's Cell</h2>
                  <p className="mb-4">
                    The Women's Cell at NIT Patna was established to foster a pleasant and supportive environment at the Institute, enabling women to pursue their work with dignity and confidence. The Cell is committed to promoting awareness of gender equality, women's safety, health, and related issues through seminars, workshops, and regular interactions.
                  </p>
                  <p className="mb-4">
                    These initiatives aim to address challenges faced by female students and employees, ensuring their concerns are heard and resolved in a timely manner.
                  </p>
                  <p className="text-gray-600">
                    As per the approval of the competent authority, the Institute Women's Cell-cum-Sexual Harassment Committee has been constituted to ensure a safe and inclusive environment for all.
                  </p>
                </div>
            )}

            {state === "People" && (
              <div className="border shadow-xl w-full h-[70vh] p-4 overflow-y-auto">
                <h3 className="text-xl font-bold mb-4 text-red-700">Committee Members</h3>
                <div className="grid grid-cols-1 gap-4">
                  {committeeMembers.map((member, index) => (
                    <MemberCard
                      key={index}
                      name={member.name}
                      position={member.position}
                      department={member.department}
                      memberType={member.memberType}
                      email={member.email}
                      profileUrl={member.profileUrl}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:flex">
        <aside className="md:w-64 min-h-screen bg-gradient-to-b from-white via-red-50 to-red-100 shadow-xl rounded-xl p-4 md:p-6 flex flex-col">
          <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
            Women Cell
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

        <div className="ml-8 flex flex-col flex-1">
          {state === "Home" && (
              <div className="border shadow-xl w-full flex flex-col md:flex-row gap-6 h-auto p-6 text-md font-semibold leading-relaxed text-black overflow-y-auto">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-red-700">About Women's Cell</h2>
                  <p className="mb-4">
                    The Women's Cell at NIT Patna was established to foster a pleasant and supportive environment at the Institute, enabling women to pursue their work with dignity and confidence. The Cell is committed to promoting awareness of gender equality, women's safety, health, and related issues through seminars, workshops, and regular interactions.
                  </p>
                  <p className="mb-4">
                    These initiatives aim to address challenges faced by female students and employees, ensuring their concerns are heard and resolved in a timely manner.
                  </p>
                  <p className="text-gray-600">
                    As per the approval of the competent authority, the Institute Women's Cell-cum-Sexual Harassment Committee has been constituted to ensure a safe and inclusive environment for all.
                  </p>
                </div>

                <div className="flex-shrink-0 flex justify-center items-center">
                  {/* <img
                    src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MTAiIGhlaWdodD0iNDA0IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNDEwIDQwNCI+PHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTI5NS4yMjYgNTEuNjY4NEMzMTkuMTY5IDczLjc0MDcgMzM0LjgzOSAxMDQuNTM3IDM1OS45OTUgMTQ4LjgwMkMzODUuMjY4IDE5My4wNjcgNDIwLjExOCAyNTAuNzk0IDQwNi45MDIgMjg1LjIxQzM5My42ODUgMzE5LjYyNiAzMzIuMTY4IDMzMC43MiAyNzQuMDgyIDM1My4yODlDMjE1Ljk5NyAzNzUuODU4IDE2MS4zMTEgNDA5Ljc3MiAxMTEuMDA0IDQwMy4xNkM2MC42OTcyIDM5Ni41NDkgMTQuNzY5MyAzNDkuNDI0IDMuMjE4MTYgMjk3LjMwM0MtOC40NTAwNCAyNDUuMDU2IDE0LjE1MjEgMTg3LjgyNiAzMC40MzMzIDEzNS43MDVDNDYuNTk3NSA4My41ODk1IDU2LjQ0MDcgMzYuNTYyMyA4NC43NTE5IDE1LjI3MDZDMTEzLjA2MyAtNi4wMjA5OSAxNTkuODUzIC0xLjQ0NjAyIDE5OS40NzEgNy40MDM2NkMyMzkuMDgzIDE2LjM2MjUgMjcxLjI4MyAyOS42MDE1IDI5NS4yMjYgNTEuNjY4NFoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMTQxLjExIDEzNC40OTlMMTIyLjU5NSAyMDAuMThDMTE4LjYyOCAyMTQuNTM4IDEzNS42MzEgMjIwLjE0MyAxMzkuNzg3IDIwNi42NjZMMTU2LjM0OSAxNDYuMDg2SDE2MS4wMDlMMTMyLjU0NSAyNTIuNTExSDE1OS4xMlYzMzIuNDg3QzE1OS4xMiAzNDYuOTcxIDE3OS4yNzIgMzQ2Ljk3MSAxNzkuMjcyIDMzMi40ODdWMjUyLjUxMUgxODUuNTY5VjMzMi40ODdDMTg1LjU2OSAzNDYuOTcxIDIwNS4wOTEgMzQ2Ljk3MSAyMDUuMDkxIDMzMi40ODdWMjUyLjUxMUgyMzIuNDIxTDIwMy4zMjggMTQ2LjA4NkgyMDguNjE3TDIyNS4xNzkgMjA2LjY2NkMyMjkuMjczIDIyMC40NTggMjQ2LjE1IDIxNC41MzggMjQyLjM3MSAyMDAuMjQzTDIyMy44NTcgMTM0LjQ5OUMyMjEuMzM4IDEyNy4wNjggMjEyLjM5NiAxMTMuOTcgMTk3LjQwOCAxMTMuMzRIMTY3LjYyMkMxNTIuMTMgMTEzLjk3IDE0My4yNTEgMTI2Ljk0MiAxNDEuMTEgMTM0LjQ5OVoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMjA1LjQ3NiA4NC40ODkxQzIwNS40NzYgNzEuNTE2NiAxOTUuMTQ5IDYxIDE4Mi40MjggNjFDMTY5LjcwOCA2MSAxNTkuMzggNzEuNTE2NiAxNTkuMzggODQuNDg5MUMxNTkuMzggOTcuNDYxNiAxNjkuNzA4IDEwNy45NzggMTgyLjQyOCAxMDcuOTc4QzE5NS4xNDkgMTA3Ljk3OCAyMDUuNDc2IDk3LjQ2MTYgMjA1LjQ3NiA4NC40ODkxWiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik0yNDYuMDQ4IDE2NS44ODRMMjMxLjQ2OSAyMTcuNjA2QzIyOC4zNDUgMjI4LjkxMyAyNDEuNzM0IDIzMy4zMjYgMjQ1LjAwNyAyMjIuNzE0TDI1OC4wNDkgMTc1LjAwOEgyNjEuNzE5TDIzOS4zMDQgMjU4LjgxNkgyNjAuMjMxVjMyMS43OTZDMjYwLjIzMSAzMzMuMjAxIDI3Ni4xIDMzMy4yMDEgMjc2LjEgMzIxLjc5NlYyNTguODE2SDI4MS4wNTlWMzIxLjc5NkMyODEuMDU5IDMzMy4yMDEgMjk2LjQzMiAzMzMuMjAxIDI5Ni40MzIgMzIxLjc5NlYyNTguODE2SDMxNy45NTVMMjk1LjA0NCAxNzUuMDA4SDI5OS4yMDlMMzEyLjI1MiAyMjIuNzE0QzMxNS40NzUgMjMzLjU3NCAzMjguNzY1IDIyOC45MTMgMzI1Ljc5IDIxNy42NTZMMzExLjIxIDE2NS44ODRDMzA5LjIyNyAxNjAuMDMyIDMwMi4xODUgMTQ5LjcxNyAyOTAuMzgyIDE0OS4yMjFIMjY2LjkyNkMyNTQuNzI3IDE0OS43MTcgMjQ3LjczNSAxNTkuOTMzIDI0Ni4wNDggMTY1Ljg4NFoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMjk2Ljc0MSAxMjYuNDk3QzI5Ni43NDEgMTE2LjI4MiAyODguNjA4IDEwOCAyNzguNTkxIDEwOEMyNjguNTczIDEwOCAyNjAuNDQgMTE2LjI4MiAyNjAuNDQgMTI2LjQ5N0MyNjAuNDQgMTM2LjcxMyAyNjguNTczIDE0NC45OTQgMjc4LjU5MSAxNDQuOTk0QzI4OC42MDggMTQ0Ljk5NCAyOTYuNzQxIDEzNi43MTMgMjk2Ljc0MSAxMjYuNDk3WiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik01NC4wNDg1IDE2NS44ODRMMzkuNDY4OSAyMTcuNjA2QzM2LjM0NDcgMjI4LjkxMyA0OS43MzQxIDIzMy4zMjYgNTMuMDA3MSAyMjIuNzE0TDY2LjA0OTQgMTc1LjAwOEg2OS43MTkxTDQ3LjMwNDIgMjU4LjgxNkg2OC4yMzE0VjMyMS43OTZDNjguMjMxNCAzMzMuMjAxIDg0LjEwMDMgMzMzLjIwMSA4NC4xMDAzIDMyMS43OTZWMjU4LjgxNkg4OS4wNTk0VjMyMS43OTZDODkuMDU5NCAzMzMuMjAxIDEwNC40MzIgMzMzLjIwMSAxMDQuNDMyIDMyMS43OTZWMjU4LjgxNkgxMjUuOTU1TDEwMy4wNDQgMTc1LjAwOEgxMDcuMjA5TDEyMC4yNTIgMjIyLjcxNEMxMjMuNDc1IDIzMy41NzQgMTM2Ljc2NSAyMjguOTEzIDEzMy43OSAyMTcuNjU2TDExOS4yMSAxNjUuODg0QzExNy4yMjcgMTYwLjAzMiAxMTAuMTg1IDE0OS43MTcgOTguMzgyNCAxNDkuMjIxSDc0LjkyNjFDNjIuNzI2OCAxNDkuNzE3IDU1LjczNDYgMTU5LjkzMyA1NC4wNDg1IDE2NS44ODRaIi8+PHBhdGggZmlsbD0iI0ZGOTgxMSIgZD0iTTEwNC43NDEgMTI2LjQ5N0MxMDQuNzQxIDExNi4yODIgOTYuNjA3OCAxMDggODYuNTkwNSAxMDhDNzYuNTczMyAxMDggNjguNDQwNCAxMTYuMjgyIDY4LjQ0MDQgMTI2LjQ5N0M2OC40NDA0IDEzNi43MTMgNzYuNTczMyAxNDQuOTk0IDg2LjU5MDUgMTQ0Ljk5NEM5Ni42MDc4IDE0NC45OTQgMTA0Ljc0MSAxMzYuNzEzIDEwNC43NDEgMTI2LjQ5N1oiLz48L3N2Zz4="}
                    height={200}
                    width={200}
                    alt="Women's Cell Logo"
                    loading="lazy"
                  /> */}
                </div>
              </div>
          )}

          {state === "People" && (
            <div className="border shadow-xl w-full h-auto p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6 text-red-700">Committee Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {committeeMembers.map((member, index) => (
                  <MemberCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    department={member.department}
                    memberType={member.memberType}
                    email={member.email}
                    profileUrl={member.profileUrl}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WomenCell;