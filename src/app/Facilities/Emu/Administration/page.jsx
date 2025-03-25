"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faGraduationCap,
  faEnvelope,
  faPhone,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

// Department Faculty Page

const FacultyCard = ({ facultyProfile }) => {
  if (!facultyProfile) return null;

  const {
    name,
    designation,
    department,
    image,
    researchInterests,
    email,
    phone,
  } = facultyProfile.profile || {};

  const profileLink = `/profile/${email}`;
  // const [isHovered, setIsHovered] = useState(false);

  const interestsArray = (researchInterests || "").split(", ");
  const displayedInterests = interestsArray.slice(0, 3);
  const remainingInterests = interestsArray.length > 3;

  return (
    <div className="w-[300px] h-[325px] mx-4 my-4">
      <div className="py-8 pb-10 mb-8 bg-[#f7f5ec] text-center overflow-hidden relative rounded-[20px] group h-full">
        <div className="inline-block h-[130px] w-[130px] mb-8 z-[1] relative">
          <div className="absolute w-full h-0 rounded-full bg-[rgb(153,27,27)] bottom-[135%] right-0 left-0 opacity-90 scale-[3] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute w-full h-full rounded-full bg-[rgb(153,27,27)] top-0 left-0 -z-[1]"></div>
          <Image
            src={image || "/faculty.jpeg"}
            alt={name}
            width={130}
            height={130}
            className="w-[130px] h-[130px] object-cover rounded-full transform scale-100 transition-all duration-900 ease-in-out group-hover:shadow-[0_0_0_14px_#f7f5ec] group-hover:scale-[0.7]"
          />
        </div>

        <div className="px-4">
          <h3 className="text-md text-black font-bold">{name}</h3>
          <h4 className="block text-[15px] text-[#4e5052] capitalize">
            {designation}
          </h4>
          <h4 className="block text-sm text-black capitalize">{department}</h4>
        </div>

        <ul className="w-full flex justify-between p-0 m-0 bg-[rgb(153,27,27)] absolute -bottom-[100px] left-0 transition-all duration-500 ease-in-out group-hover:bottom-0">
          {phone && (
            <li className="inline-block">
              <a
                href={`tel:${phone}`}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="w-8" />
              </a>
            </li>
          )}
          {email && (
            <li className="inline-block">
              <a
                href={`mailto:${email}`}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-8" />
              </a>
            </li>
          )}
          {profileLink && (
            <li className="inline-block">
              <a
                href={profileLink}
                className="block px-5 py-2 text-[17px] text-white hover:text-[rgb(153,27,27)] hover:bg-[#f7f5ec] transition-all duration-300"
              >
                View Profile
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const positions = [
  { title: "PI (EMU)", color: "bg-red-900" },
  { title: "Co-PI (EMU)", color: "bg-red-800" },
  { title: "ME (Electrical)", color: "bg-yellow-700" },
  { title: "JE (Electrical)", color: "bg-green-700" },
  { title: "Electricians", color: "bg-blue-600" },
  { title: "Helpers", color: "bg-gray-500" },
];

const Piapi = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=vimlesh.verma@nitp.ac.in`;
const CoPiapi1 = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=amitesh.ee@nitp.ac.in`;
const CoPiapi2 = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=gagandeep.ee@nitp.ac.in`;

export default function EmuAdministrationPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [piData, setPiData] = useState([]); // Initialize as an empty array
  const [coPiData, setCoPiData] = useState([]);

  console.log("Selected Category:", selectedCategory);
  console.log("Members Array:", selectedCategory?.members);

  const normalizeData = (data) => (Array.isArray(data) ? data : [data]);

  useEffect(() => {
    async function fetchData() {
      try {
        const piResponse = await fetch(Piapi);
        const piResult = await piResponse.json();

        const coPiResponse1 = await fetch(CoPiapi1);
        const coPiResult1 = await coPiResponse1.json();

        const coPiResponse2 = await fetch(CoPiapi2);
        const coPiResult2 = await coPiResponse2.json();

        setPiData([normalizeData(piResult)[0]]); // Ensures it's always an array with one element
        setCoPiData([
          normalizeData(coPiResult1)[0],
          normalizeData(coPiResult2)[0],
        ]);

        selectedCategory || setSelectedCategory({ title: "PI" });
      } catch (error) {
        console.error("Error fetching faculty data:", error);
      }
    }
    fetchData();
  }, []);

  const memberCategories = [
    { title: "PI", members: piData ? piData : [] },
    { title: "Co-PI", members: coPiData.length ? coPiData : [] },
    {
      title: "Other Members",
      members: [
        { name: "Er Nitesh Kumar", designation: "ME (Electrical)" },
        { name: "Er Pramod Kumar Mahto", designation: "JE (Electrical)" },
        { name: "Mr Ramnath Rout", designation: "Sr. Technician" },
        { name: "Mr Shankar Kumar", designation: "Technician" },
        { name: "Mr Nageshwar Mandal", designation: "Office Attendant" },
        { name: "Mr Vikash Kumar", designation: "Electrician" },
        { name: "Mr Sujeet Kumar", designation: "Electrician" },
        { name: "Mr Vikram Kumar", designation: "Electrician" },
        { name: "Mr Harishankar Pal", designation: "Substation/Pump/STP/Street Light Operator" },
        { name: "Mr Deepak Kumar", designation: "Substation/Pump/STP/Street Light Operator" },
        { name: "Mr Krishna Kumar Nayan", designation: "Store Management" },
        { name: "Md. Wasim Akram", designation: "AC Technician" },
        { name: "Mr Rakesh Kumar", designation: "AC Technician" },
        { name: "Mr Ajay Kumar", designation: "AC Helper" },
        { name: "Mr Amit Kumar", designation: "Helper" },
        { name: "Mr Rahul Kumar", designation: "Helper" },
      ],
    },
  ];

  useEffect(() => {
    setSelectedCategory(memberCategories[0]);
  }, []);

  return (
    <div className="w-full min-h-screen p-4 bg-white bg-opacity-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-6">
        Administration
      </h2>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Flowchart Section (Mobile) */}
        <div className="md:hidden w-full flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg">
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
        <div className="flex flex-col w-full lg:w-3/4 p-4 bg-gray-200 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {memberCategories.map((category) => (
              <button
                key={category.title}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all w-full sm:w-auto text-center ${
                  selectedCategory?.title === category.title
                    ? "bg-gray-900 text-white"
                    : "bg-gray-400 hover:bg-gray-400"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {selectedCategory?.title === "PI" ||
          selectedCategory?.title === "Co-PI" ? (
            <>
              <h3 className="text-lg font-semibold text-red-800 mb-2 text-center">
                {selectedCategory?.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {(selectedCategory.title === "PI" ? piData : coPiData)?.map(
                  (faculty, index) => (
                    <FacultyCard key={index} facultyProfile={faculty} />
                  )
                )}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-red-800 mb-2 text-center">
                {selectedCategory?.title}
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-black border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-red-900 text-white">
                      <th className="border border-gray-300 px-4 py-2">Name</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Designation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCategory?.members?.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">
                          {member.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {member.designation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* Flowchart Section */}
        <div className="hidden md:flex w-full lg:w-1/3 flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg">
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
