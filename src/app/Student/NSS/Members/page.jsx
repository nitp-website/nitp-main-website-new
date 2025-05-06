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

// Faculty Card Component
const FacultyCard = ({ facultyProfile, isLoading, error }) => {
  if (isLoading)
    return (
      <div className="w-[300px] h-[325px] mx-4 my-4 flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="w-[300px] h-[325px] mx-4 my-4 flex items-center justify-center">
        Error: {error}
      </div>
    );
  if (!facultyProfile) return null;

  // console.log(facultyProfile);

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

// Core Member Card
const CoreMemberCard = ({ member }) => {
  return (
    <div className="w-[280px] mx-2 my-3">
      <div className="py-6 px-4 bg-[#f7f5ec] text-center overflow-hidden relative rounded-[20px] shadow-md hover:shadow-lg transition-all duration-300 h-full">
        <div className="inline-block h-[125px] w-[125px] mb-4 relative">
          <div className="absolute w-full h-full rounded-full bg-[rgb(153,27,27)] top-0 left-0 -z-[1]"></div>
          <Image
            src={member.img || "/placeholder.jpeg"}
            alt={member.name}
            width={125}
            height={125}
            className="w-[125px] h-[125px] object-cover rounded-full border-4 border-white"
          />
        </div>

        <div>
          <h3 className="text-md text-black font-bold">{member.name}</h3>
          <h4 className="block text-sm text-[#4e5052]">
            {member.position || member.rollNO}
          </h4>
        </div>
      </div>
    </div>
  );
};

// Teaching Team Member Card
const TeachingTeamMember = ({ member }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="border border-gray-300 px-4 py-2">{member.name}</td>
      <td className="border border-gray-300 px-4 py-2">
        {member.rollNO || "N/A"}
      </td>
    </tr>
  );
};

// Moved outside of the component render and made into a separate wrapper component
const FacultyProfileWrapper = ({ email }) => {
  const [facultyProfile, setFacultyProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=${email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch faculty data");
        }
        const data = await response.json();
        // console.log(data.profile);
        setFacultyProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchFacultyData();
    }
  }, [email]);

  return (
    <FacultyCard
      facultyProfile={facultyProfile}
      isLoading={loading}
      error={error}
    />
  );
};

// Main Component
export default function AdministrationPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Define positions array directly in the component
  const positions = [
    {
      title: "Professor Incharge",
      label: "PI",
      members: ["gagandeep.ee@nitp.ac.in"],
    },
    {
      title: "Program Officers",
      label: "PO",
      members: {
        "UNIT-1 Incharge": ["anmesh.me@nitp.ac.in", "aasim.ee@nitp.ac.in"],
        "UNIT-2 Incharge": ["anuragsahay@nitp.ac.in"],
        "UNIT-3 Incharge": ["bsd.ce@nitp.ac.in"],
        "UNIT-4 Incharge": ["devarani.cs@nitp.ac.in"],
      },
    },
    {
      title: "Student Core Members",
      team: {
        "NSS NIT Patna": [
          {
            name: "Shivam Jaiswal",
            position: "President",
            img: "https://lh3.googleusercontent.com/d/1uA6MSmurb7goZL5mYJcBUcZuTE1Pmias=w1000",
          },
          {
            name: "Vivek Roushan",
            position: "Vice President",
            img: "https://lh3.googleusercontent.com/d/1yXCoxoyuzM3_DUHhABuGbbhu5yc_swU0=w1000",
          },
          {
            name: "Anusha Tank",
            position: "Secretary",
            img: "https://lh3.googleusercontent.com/d/1NStft0c2WhmFKqHX2JTq1X4nexvtZkdq=w1000",
          },
          {
            name: "Raj Vashishta",
            position: "Joint Secretary",
            img: "https://lh3.googleusercontent.com/d/1Ql_nJ644rq6DrcZzi6os0k_wfqoFHSmf=w1000",
          },
          {
            name: "Satyam Bansal",
            position: "Content Lead & Operations at Bihta Campus",
            img: "https://lh3.googleusercontent.com/d/1d46xvlM67TvHr674nT5vaX8-uwXHLhMS=w1000",
          },
          {
            name: "Saurabh Kumar",
            position: "PR Lead",
            img: "https://lh3.googleusercontent.com/d/1-HrJH-1TFKHiMJt6wcaokRLDxbkgZrEq=w1000",
          },
          {
            name: "Smita Kumari",
            position: "PR Lead & Operations at Bihta Campus",
            img: "https://lh3.googleusercontent.com/d/16PD0RIn9YC7b_krOSsAd1zHr4c9s_OAQ=w1000",
          },
          {
            name: "Priyanshu Goswami",
            position: "Operations Lead",
            img: "https://lh3.googleusercontent.com/d/1CKI_ux0igkuLuOtLxre-TpNbrOABdzP9=w1000",
          },
          {
            name: "Shubhanshu Shekhar",
            position: "Operations Lead",
            img: "https://lh3.googleusercontent.com/d/1zAPd0t4-Gs7PQjWaeWyuZRhApqe0v4YM=w1000",
          },
          {
            name: "Shubhanshu Kumar",
            position: "Operations Lead",
            img: "https://lh3.googleusercontent.com/d/1DwsymjRLG5ktd1zOgttCk8UdU7z8-jJU=w1000",
          },
          {
            name: "Anand",
            position: "Event Coordinator",
            img: "https://lh3.googleusercontent.com/d/1MZvhriSQqyHpw6bMX438Dl3kOclKWRaE=w1000",
          },
          {
            name: "Shriya Sharma",
            position: "Design Lead and Operations at Bihta Campus",
            img: "https://lh3.googleusercontent.com/d/12i4X-yU4D5S-GSdbR5iCfLhtL6OvSoNA=w1000",
          },
          {
            name: "Sheetal",
            position: "Content Lead",
            img: "https://lh3.googleusercontent.com/d/1Mnr2qzDvooApzQizsc5WbEHFdZ7308il=w1000",
          },
        ],
        "Sankalp, NSS NIT Patna": [
          {
            name: "Aditya Kumar",
            position: "Senior Core Member",
            img: "https://lh3.googleusercontent.com/d/1Anms3uQ6R6c2xk6TEX30l4iKzq5bpo_0=w1000",
          },
          {
            name: "Keshav Kumar Jha",
            position: "Senior Core Member",
            img: "https://lh3.googleusercontent.com/d/1kWlZyaDw61A_Fr6uDkAAktMoN_-VBQr3=w1000",
          },
          {
            name: "Neha Kumari",
            position: "Senior Core Member",
            img: "https://lh3.googleusercontent.com/d/1vq3PO9E34R3ya8TFo5sONi80uyUDuxzT=w1000",
          },
          {
            name: "Niharika Rathod",
            position: "Senior Core Member",
            img: "https://lh3.googleusercontent.com/d/1Kwo0qG3h-oc3w-XLR3Rb7n1L1XMHYV2A=w1000",
          },
          {
            name: "Ratan Kumar Singh",
            position: "Senior Core Member",
            img: "https://lh3.googleusercontent.com/d/1w8jHo-6EWANVSzeCaRwWIMHtc16pwQAc=w1000",
          },
          {
            name: "Prachi Yadav",
            position: "Senior Core Member",
            img: "https://lh3.googleusercontent.com/d/1zjTmXMBhGxXkKVZN7bGwuERsk8sdwjIL=w1000",
          },
          {
            name: "Ravi Pratap Verma",
            position: "Senior Core Member",
            img: "https://lh3.googleusercontent.com/d/1JIehK5qqHLlRKynt3UXNYQ4Y7yA_PgSg=w1000",
          },
          {
            name: "Sneh Prabha Raj",
            position: "Senior Core Member",
            img: "https://lh3.googleusercontent.com/d/1VdhaNlFPElW1XxhPP9_pgFU8fYn9mB4-=w1000",
          },
          {
            name: "Rajnandini Roy",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/1hDD5UnbL-c2zjdSpqdt3EZG7hb2aqBOK=w1000",
          },
          {
            name: "Ravikant Kumar",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/1H-eMbN9Ml36hKfyqJEMDkUpx5rseUH8z=w1000",
          },
          {
            name: "Ritik Paswan",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/1OXnkSuHBjkogOdvYXdW87EcYPIPuiUTa=w1000",
          },
          {
            name: "Riya Rani",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/1qRuWjtRPXswSYG6AAF6UyJ--_dhVrolT=w1000",
          },
          {
            name: "Rohit Kumar Bharti",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/15VKW1horL3x3j8IvCDlyaSryNoAzmVxQ=w1000",
          },
          {
            name: "Satyam Kumar",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/1wbZqSvtrZDbnLGRg_zSQFvd9iIc-Qy0_=w1000",
          },
          {
            name: "Abhishek Singh",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/1v81k_8Icndw7wYEnextfUxIh09Br1hS6=w1000",
          },
          {
            name: "Archana Kumari",
            position: "Core Member (Bihta)",
            img: "https://lh3.googleusercontent.com/d/1hZUjB0sIYW9WBF2uXxjzwdvFGBV_kJXV=w1000",
          },
          {
            name: "Fulwati",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/1yWEcpf1__NB7gxfJsIIscEkElI5Soc-0=w1000",
          },
          {
            name: "Shreyansh Kumar Singh",
            position: "Core Member",
            img: "https://lh3.googleusercontent.com/d/1Qrsh6XYXimluxxQn8gYHknfS9yp2WrWM=w1000",
          },
          {
            name: "Nikhil",
            position: "Core Member (Bihta)",
            img: "https://lh3.googleusercontent.com/d/1nPUUFrDXC5fWbLJErTrW1Az5jlpQBSjp=w1000",
          },
        ],
        "Teaching Team": [
          { name: "SHREERAM KUMAR", rollNO: "2302052" },
          { name: "DAKSH AGARWAL", rollNO: "2303012" },
          { name: "PRATHAM RAJ", rollNO: "2302026" },
          { name: "ASHUTOSH PANDEY", rollNO: "2303032" },
          { name: "PUNEET BHASKAR", rollNO: "2303060" },
          { name: "PRASANT KUMAR", rollNO: "2303102" },
          { name: "GAURAV KUMAR", rollNO: "2340160" },
          { name: "MANISH KUMAR", rollNO: "2356005" },
          { name: "PRIYANSHU GOSHWAMI", rollNO: "" },
          { name: "AKASH KUMAR", rollNO: "" },
          { name: "Rohit Nandan Singh", rollNO: "2301041" },
          { name: "Ankita Kumari", rollNO: "2301128" },
          { name: "Shreya Mishra", rollNO: "2252008" },
          { name: "Ankita", rollNO: "2302123" },
          { name: "Varri Vandhana", rollNO: "2202145" },
          { name: "Roshini Kumari", rollNO: "2305009" },
          { name: "Vikas Kumar Singh", rollNO: "2202063" },
          { name: "Priyanshi Gupta", rollNO: "2302125" },
          { name: "Sheetal", rollNO: "2303113" },
          { name: "Sanchita Jha", rollNO: "2303015" },
          { name: "Aarushi", rollNO: "2301022" },
          { name: "Ayushi Singh", rollNO: "2303047" },
          { name: "Yogita Singh", rollNO: "2202008" },
          { name: "Bhavya Sinha", rollNO: "2305001" },
          { name: "Binita Roy", rollNO: "2302105" },
          { name: "Richa Mishra", rollNO: "2302047" },
          { name: "Sakshi Kashyap", rollNO: "2304028" },
          { name: "Gungun Singh", rollNO: "2302046" },
          { name: "Rishika Shrivastava", rollNO: "2303021" },
          { name: "Anshu Kumari", rollNO: "2303124" },
          { name: "Vijeta Kumari", rollNO: "2301020" },
          { name: "Komal Deep", rollNO: "2303091" },
          { name: "ALOK KUMAR", rollNO: "2353011" },
          { name: "RAJ VERMA", rollNO: "" },
          { name: "ANSH KUMAR SINGH", rollNO: "2303034" },
          { name: "DHRUVRAJ CHAUDHARY", rollNO: "2350018" },
          { name: "ARYAN RAJ", rollNO: "2302035" },
          { name: "AJEET DHAKAD", rollNO: "2302066" },
          { name: "ADITYA RAJ", rollNO: "2301075" },
          { name: "SACHIN GUPTA", rollNO: "2301039" },
          { name: "RUDRA NARAYAN JAISWAL", rollNO: "2301055" },
          { name: "ASHWINEE KUMAR", rollNO: "2350012" },
          { name: "SUDHANSHU KUMAR", rollNO: "2302001" },
          { name: "DEV KUMAR", rollNO: "2303053" },
          { name: "DHRUVRAJ CHAUDHARY", rollNO: "2350015" },
          { name: "VIKESH KUMAR", rollNO: "2356007" },
        ],
      },
    },
  ];

  // Set initial category
  useEffect(() => {
    if (positions.length > 0 && !selectedCategory) {
      setSelectedCategory(positions[0]);
    }
  }, []);

  // Set initial subcategory when category changes
  useEffect(() => {
    if (!selectedCategory) return;

    if (
      selectedCategory.team &&
      Object.keys(selectedCategory.team).length > 0
    ) {
      const firstTeamKey = Object.keys(selectedCategory.team)[0];
      setSelectedSubcategory(firstTeamKey);
    } else if (
      selectedCategory.members &&
      typeof selectedCategory.members === "object" &&
      Object.keys(selectedCategory.members).length > 0
    ) {
      const firstMemberKey = Object.keys(selectedCategory.members)[0];
      setSelectedSubcategory(firstMemberKey);
    } else {
      setSelectedSubcategory(null);
    }
  }, [selectedCategory]);

  // Render content based on selected category
  const renderContent = () => {
    if (!selectedCategory) return null;

    // For Professor Incharge (PI)
    if (selectedCategory.label === "PI") {
      return (
        <div className="flex flex-wrap justify-center gap-4">
          {selectedCategory.members.map((email, index) => (
            <FacultyProfileWrapper key={index} email={email} />
          ))}
        </div>
      );
    }

    // For Program Officers (PO)
    if (selectedCategory.label === "PO") {
      return (
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.keys(selectedCategory.members).map((unitTitle) => (
              <button
                key={unitTitle}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                  selectedSubcategory === unitTitle
                    ? "bg-red-900 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setSelectedSubcategory(unitTitle)}
              >
                {unitTitle}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {selectedSubcategory &&
              selectedCategory.members &&
              selectedCategory.members[selectedSubcategory] &&
              Array.isArray(selectedCategory.members[selectedSubcategory]) &&
              selectedCategory.members[selectedSubcategory].map(
                (email, index) => (
                  <FacultyProfileWrapper key={index} email={email} />
                )
              )}
          </div>
        </div>
      );
    }

    // For Student Core Members
    if (selectedCategory.title === "Student Core Members") {
      return (
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.keys(selectedCategory.team).map((teamName) => (
              <button
                key={teamName}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                  selectedSubcategory === teamName
                    ? "bg-red-900 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setSelectedSubcategory(teamName)}
              >
                {teamName}
              </button>
            ))}
          </div>

          {selectedSubcategory === "Teaching Team" &&
          selectedCategory.team &&
          selectedCategory.team[selectedSubcategory] ? (
            <div className="overflow-x-auto">
              <table className="w-full text-black border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-900 text-white">
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Roll Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCategory.team[selectedSubcategory].map(
                    (member, index) => (
                      <TeachingTeamMember key={index} member={member} />
                    )
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center">
              {selectedSubcategory &&
                selectedCategory.team &&
                selectedCategory.team[selectedSubcategory] &&
                selectedCategory.team[selectedSubcategory].map(
                  (member, index) => (
                    <CoreMemberCard key={index} member={member} />
                  )
                )}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full min-h-screen p-4 bg-white bg-opacity-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-6">
        Administration
      </h2>

      <div className="w-full max-w-6xl flex flex-col gap-8 items-stretch">
        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {positions.map((category) => (
            <button
              key={category.title}
              className={`px-4 py-2 text-md font-semibold rounded-md transition-all w-full sm:w-auto text-center ${
                selectedCategory?.title === category.title
                  ? "bg-gray-900 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col mx-auto w-full p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-red-800 mb-6 text-center">
            {selectedCategory?.title}
          </h3>

          {renderContent()}
        </div>
      </div>
    </div>
  );
}
