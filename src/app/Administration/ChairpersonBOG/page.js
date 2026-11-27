import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin, Landmark, Users } from "lucide-react";

export const metadata = {
  title: "Chairperson, Board of Governors | NIT Patna",
  description:
    "Profile of Shri Ashok Kumar Modi, Chairperson of the Board of Governors and Presiding Officer at National Institute of Technology Patna.",
};

const HIGHLIGHTS = [
  {
    title: "Governance at NIT Patna",
    description:
      "Serves as Chairperson of the Board of Governors and Presiding Officer at National Institute of Technology Patna.",
  },
  {
    title: "Eden Group (Est. 1987)",
    description:
      "Founded Eden Group, a Kolkata-based real estate developer, in 1987 in the face of several adversities.",
  },
  {
    title: "Tea & Industrial Ventures",
    description:
      "Involved in high-quality tea manufacturing in upper Assam for several decades, alongside prior businesses in textile and fan manufacturing.",
  },
  {
    title: "Social Work & Nation Building",
    description:
      "Mentored scores of social sector organizations and is a founding member of Friends of Tribals Society (FTS), running about 80,000+ Ekal Vidyalaya in the interiors of Bharat.",
  },
];

const ChairpersonBOGPage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-12 md:pb-20 text-black">
      {/* Page Header */}
      <header className="text-center mb-8 md:mb-12 relative">
        <div
          className="absolute inset-0 bg-red-50 opacity-10 rounded-lg pointer-events-none a11y-overlay"
          aria-hidden="true"
        ></div>
        <div className="py-8 px-4 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-3">
            Chairperson, Board of Governors
          </h1>
          <div
            className="w-24 h-1 bg-gradient-to-r from-red-800 to-red-500 mx-auto rounded-full mb-3"
            aria-hidden="true"
          ></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Presiding Officer and Guiding Leadership of NIT Patna&apos;s Board of Governors
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8 md:gap-12">
        {/* Profile Sidebar */}
        <aside
          aria-label="Chairperson profile summary"
          className="lg:sticky lg:top-32 lg:self-start flex flex-col items-center gap-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-fit hover:shadow-xl transition-shadow duration-300"
        >
          {/* Profile Image */}
          <div className="relative">
            <div className="w-44 h-44 md:w-48 md:h-48 aspect-square rounded-full overflow-hidden border-4 border-red-100 shadow-lg relative bg-white">
              <div
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-800/20 z-0 pointer-events-none a11y-overlay"
                aria-hidden="true"
              ></div>
              <Image
                src="/ashok-modi.png"
                width={149}
                height={188}
                preload
                fetchPriority="high"
                alt="Shri Ashok Kumar Modi, Chairperson, Board of Governors, NIT Patna"
                className="relative z-10 object-cover object-top w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-20 bg-gradient-to-r from-red-700 to-red-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              Chairperson, BOG
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Shri Ashok Kumar Modi
            </h2>
            <p className="text-red-700 font-medium text-lg">
              Chairperson, Board of Governors
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Presiding Officer, NIT Patna
            </p>
            <div
              className="flex items-center justify-center mt-3 gap-1"
              aria-hidden="true"
            >
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full"></span>
              <span className="inline-block w-2 h-2 bg-red-200 rounded-full"></span>
            </div>
          </div>

          {/* Affiliations */}
          <ul className="w-full space-y-3 border-t border-b border-gray-100 py-4 text-sm">
            <li className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Building2 className="w-5 h-5 text-red-700" />
              </div>
              <span className="text-gray-700 font-medium">
                Chief Managing Director, Eden Group, Kolkata
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Landmark className="w-5 h-5 text-red-700" />
              </div>
              <span className="text-gray-700 font-medium">
                NIT Patna &amp; Eden Group
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <MapPin className="w-5 h-5 text-red-700" />
              </div>
              <span className="text-gray-700 font-medium">
                National Institute of Technology Patna
              </span>
            </li>
          </ul>

          {/* Link to Board of Governors Roster */}
          <Link
            href="/Administration/BOG"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 w-full text-center"
          >
            <Users className="w-5 h-5" aria-hidden="true" />
            View Board of Governors
          </Link>
        </aside>

        {/* Main Bio Content */}
        <div className="space-y-8 min-w-0">
          <article className="space-y-4 border border-gray-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-red-800 border-b border-red-100 pb-2">
              About
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Shri Ashok Kumar Modi is a prolific entrepreneur and passionate
              social worker. In the face of several adversities, he founded Eden
              Group, a Real Estate developer of Kolkata in the year 1987. He is
              also into the business of High quality Tea Manufacturing in upper
              Assam for several decades. In the past, he has had valuable
              experience running many businesses like textile manufacturing and
              fan manufacturing.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify mt-3">
              More passionate about social work and nation building than even
              his businesses, he has mentored scores of social sector
              organizations and been a founding member of prominent NGO&rsquo;s
              like Friends of Tribals Society (FTS) running about 80,000+ Ekal
              Vidyalaya in the interiors of Bharat.
            </p>
          </article>

          <section
            aria-labelledby="leadership-highlights-heading"
            className="space-y-4 border border-gray-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2
              id="leadership-highlights-heading"
              className="text-2xl font-bold text-red-800 border-b border-red-100 pb-2"
            >
              Leadership &amp; Social Initiatives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {HIGHLIGHTS.map((item) => (
                <article
                  key={item.title}
                  className="p-4 rounded-lg border border-red-100 bg-red-50/40 min-w-0"
                >
                  <h3 className="text-base font-semibold text-red-800 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ChairpersonBOGPage;
