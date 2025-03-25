"use client";
import React, { useState } from "react";

const positions = [
  { title: "PI (EMU)", color: "bg-red-900" },
  { title: "Co-PI (EMU)", color: "bg-red-800" },
  { title: "ME (Electrical)", color: "bg-yellow-700" },
  { title: "JE (Electrical)", color: "bg-green-700" },
  { title: "Electricians", color: "bg-blue-600" },
  { title: "Helpers", color: "bg-gray-500" },
];

const memberCategories = [
  { title: "PI", members: ["Dr. Vimlesh Verma"] },
  { title: "Co-PI", members: ["Dr. Amitesh Kumar", "Dr. Gagan Deep Meena"] },
  {
    title: "Other Members",
    members: [
      "Er Nitesh Kumar - ME (Electrical)",
      "Er Pramod Kumar Mahto - JE (Electrical)",
      "Mr Ramnath Rout - Electrician",
      "Mr Shankar Kumar - Electrician",
      "Mr Nageshwar Mandal - Electrician",
      "Mr Vikash Kumar - Electrician",
      "Mr Sujeet Kumar - Electrician",
      "Mr Vikram Kumar - Electrician",
      "Mr Harishankar Pal - Electrician",
      "Mr Deepak Kumar - Electrician",
      "Mr Krishna Kumar Nayan - Electrician",
      "Md. Wasim Akram - Electrician",
      "Mr Rakesh Kumar - Helper",
      "Mr Ajay Kumar - Helper",
      "Mr Amit Kumar - Helper",
      "Mr Rahul Kumar - Helper",
    ],
  },
];

export default function EmuAdministrationPage() {
  const [selectedCategory, setSelectedCategory] = useState(memberCategories[0]);

  return (
    <div className="w-full min-h-screen p-4 bg-white bg-opacity-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-6">
        Administration
      </h2>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="md:hidden w-full lg:w-1/2 flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-red-800 mb-4">
            Administration Hierarchy
          </h2>
          <div className="flex flex-col items-center w-full max-w-xs">
            {positions.map((position, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-full"
              >
                <div
                  className={`${position.color} text-white px-6 py-3 rounded-lg shadow-lg font-bold text-sm text-center w-full`}
                >
                  {position.title}
                </div>
                {index < positions.length - 1 && (
                  <div className="h-6 w-1 bg-gray-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Member Section */}
        <div className="flex flex-col w-full lg:w-1/2 p-4 bg-gray-100 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {memberCategories.map((category) => (
              <button
                key={category.title}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all w-full sm:w-auto text-center ${
                  selectedCategory.title === category.title
                    ? "bg-gray-800 text-white"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.title}
              </button>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2 text-center">
            {selectedCategory.title} Members
          </h3>
          <ul className="space-y-2 text-center">
            {selectedCategory.members.map((member, index) => (
              <li
                key={index}
                className="text-black p-2 bg-gray-300 rounded-lg text-sm"
              >
                {member}
              </li>
            ))}
          </ul>
        </div>

        {/* Flowchart Section */}
        <div className="hidden md:flex w-full lg:w-1/2 flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl text-center font-bold text-red-800 mb-4">
            Administration Hierarchy
          </h2>
          <div className="flex flex-col items-center w-full max-w-xs">
            {positions.map((position, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-full"
              >
                <div
                  className={`${position.color} text-white px-6 py-3 rounded-lg shadow-lg font-bold text-sm text-center w-full`}
                >
                  {position.title}
                </div>
                {index < positions.length - 1 && (
                  <div className="h-6 w-1 bg-gray-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
