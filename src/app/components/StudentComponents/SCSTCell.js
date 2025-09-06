"use client"
import { useState } from "react";
import { FaHome, FaUsers } from "react-icons/fa";

const SCSTCell = () => {
  const [state, setState] = useState("Home");
  const tags = ["Home", "People"];

  return (
    <div>
      <div className="block md:hidden">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-center items-center">
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
              <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold text-black leading-relaxed">
                The Institute is committed to maintaining a work environment
                where faculty members, staff, and students from different
                communities can work in a coherent environment. It is the
                Institute's endeavor to ensure that no discrimination takes place
                at the workplace or inside the Institute campus.
                <br />
                <br />
                The Institute has appointed a Liaison Officer who can be
                contacted in the event of any incident of discrimination.
                Particulars of Liaison Officer are as under:{" "}
                <span className="font-bold text-red-800">
                  Prof. Fulena Rajak
                </span>
                .
                <div className="mt-4">
                  For reporting any grievance related to SC/ST community of NIT
                  Patna, kindly use this email ID:{" "}
                  <span className="font-bold text-red-800">
                    sc.st.cell@nitp.ac.in
                  </span>
                </div>
              </div>
            )}

            {state === "People" && (
              <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold text-black">
                <div className="border shadow-2xl p-5 text-black flex flex-col">
                  <span className="text-lg font-semibold">Liaison Officer</span>
                  <span className="text-2xl font-bold text-red-800">
                    Prof. Fulena Rajak
                  </span>
                  <span>Professor, Department of Architecture & Planning</span>
                  <span>Email: sc.st.cell@nitp.ac.in</span>
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
                  People
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="ml-8 flex flex-col flex-1">
          {state === "Home" && (
            <div className="border shadow-xl w-full flex flex-col md:flex-row gap-6 h-[60vh] p-3 text-md font-semibold leading-relaxed text-black">
              <div className="flex-1">
                The Institute is committed to maintaining a work environment
                where faculty members, staff, and students from different
                communities can work in a coherent environment. It is the
                Institute's endeavor to ensure that no discrimination takes place
                at the workplace or inside the Institute campus.
                The Institute has appointed a Liaison Officer who can be
                contacted in the event of any incident of discrimination.
                Particulars of Liaison Officer are as under:{" "}
                <span className="font-bold text-red-800">
                  Prof. Fulena Rajak
                </span>
                .
                <div className="mt-4">
                  For reporting any grievance related to SC/ST community of NIT
                  Patna, kindly use this email ID:{" "}
                  <span className="font-bold text-red-800">
                    sc.st.cell@nitp.ac.in
                  </span>
                </div>
              </div>
            </div>
          )}

          {state === "People" && (
            <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold text-black">
              <div className="border shadow-2xl p-5 text-black flex flex-col">
                <span className="text-lg font-semibold">Liaison Officer</span>
                <span className="text-2xl font-bold text-red-800">
                  Prof. Fulena Rajak
                </span>
                <span>Professor, Department of Architecture & Planning</span>
                <span>Email: sc.st.cell@nitp.ac.in</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SCSTCell;
