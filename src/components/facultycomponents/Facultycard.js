import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Globe, FileText, BookOpen, Award } from "lucide-react";

// Department Faculty Page

function FacultyCard({
  name,
  designation,
  // qualification,
  department,
  image,
  researchInterests,
  email,
  phone,
  profileLink,
  researchLink, // Assuming you have a link for the full research interests
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (researchInterests == null) researchInterests = "";

  const interestsArray = researchInterests.split(", ");
  const displayedInterests = interestsArray.slice(0, 3);
  const remainingInterests = interestsArray.length > 3;

  interestsArray.sort();

  return (
    <div className="w-[575px] md:h-[300px] rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="md:w-1/2 h-[300px] bg-[#F8F0EE] p-4 flex flex-col items-center justify-center">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-md"
          />
          <h3 className="font-bold text-[#5D1A14] mt-3 text-center">{name}</h3>
          <p className="text-[#8B3A32] text-sm text-center">{designation}</p>
        </div>

        {/* Right Panel */}
        <div className="md:w-2/3 w-full h-full md:h-[300px] p-6">
          {/* Contact Information */}
          <div className="mb-4">
            <h4 className="font-semibold text-[#5D1A14] mb-2">Contact Information</h4>
            <div className="space-y-1 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-[#8B3A32]" />
                <span>{email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#8B3A32]" />
                {phone && !isNaN(phone) ? (
                  <span>{phone}</span>
                ) : (
                  <></>)
                }
              </p>
              <p className="flex items-center gap-2">
                <Globe size={16} className="text-[#8B3A32]" />
                <a
                  href={profileLink}
                  className="text-blue-600 hover:underline"
                  rel="noopener noreferrer"
                >
                  Personal Webpage
                </a>
              </p>
            </div>
          </div>

          {/* Specialization */}
          {
            researchInterests && (
              <div className="mb-4 max-h-[96px] min-h-[96px] overflow-y-auto rounded-md scrollbar-thin">
                <h4 className="font-semibold text-[#5D1A14] mb-2">Specialization</h4>
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-wrap gap-2">
                    {researchInterests
                      .split(",")
                      .map((spec, index) => (
                        <span
                          key={index}
                          className="bg-[#F8F0EE] text-[#8B3A32] px-2 py-1 rounded-md text-xs"
                        >
                          {spec.trim()}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            )
          }

          {/* Stats */}
          {/* <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-1">
              <FileText size={16} className="text-[#8B3A32]" />
              <span className="text-sm">{faculty.publications} Publications</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen size={16} className="text-[#8B3A32]" />
              <span className="text-sm">{faculty.projects} Projects</span>
            </div>
            <div className="flex items-center gap-1">
              <Award size={16} className="text-[#8B3A32]" />
              <span className="text-sm">{faculty.awards} Awards</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );

}

export default FacultyCard;