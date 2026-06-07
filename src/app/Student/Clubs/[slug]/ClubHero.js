"use client";

import Link from "next/link";
import { Mail, User, GraduationCap, Award, ArrowRight } from "lucide-react";
import Clubs from "@/app/assets/images/clubs.svg"

const ClubHero = ({ club }) => {
  const name = club?.name || "Club";

  const AboutText = 
    club?.about ||
    `Welcome to ${club?.name || "our club"}. We are dedicated to excellence, fostering deep passions, skill development, and building a highly collaborative community among our members. Our organization provides an inclusive environment where individuals of all backgrounds can safely connect, share ideas, and grow together. Through scheduled events, hands-on workshops, peer mentoring, structured training programs, competitions, and community initiatives, we continuously strive to deliver meaningful experiences and create lasting impact for every member.`;

  const aboutPreview = AboutText.split(" ").slice(0, 60).join(" ") + (AboutText.split(" ").length > 60 ? "..." : "");

  const leaders = [
    {
      title: "Patna Campus PI",
      name: club?.patnaPiName,
      email: club?.patnaPiEmail,
      department: club?.patnaPiDepartment,
      icon: GraduationCap,
    },
    {
      title: "Bihta Campus PI",
      name: club?.bihtaPiName,
      email: club?.bihtaPiEmail,
      department: club?.bihtaPiDepartment,
      icon: GraduationCap,
    },
    {
      title: "President",
      name: club?.president,
      email: club?.presidentEmail,
      department: club?.presidentDeptartment,
      icon: User,
    },
    {
      title: "Secretary",
      name: club?.secretary,
      email: club?.secretaryEmail,
      department: club?.secretaryDeptartment,
      icon: User,
    },
  ];

  const stats = [
    { label: "Members", value: club?.members },
    { label: "Events", value: club?.events },
    { label: "Awards", value: club?.awards },
  ].filter((stat) => stat.value != null && stat.value > 0);

  return (
    <section className="relative overflow-hidden min-h-[85vh] rounded-3xl border border-stone-200 bg-gradient-to-br from-white via-stone-50 to-red-50/30 shadow-xl">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-700/5 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red-800/5 blur-2xl" />
      <div className="relative flex flex-col p-6 min-h-full md:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="shrink-0">
              {club?.logo ? (
                <img
                  src={ club?.logo || Clubs?.src}
                  alt={name}
                  className="h-20 w-20 rounded-2xl object-cover md:h-24 md:w-24"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-700 to-red-900 text-2xl font-extrabold text-white shadow-lg shadow-red-900/20 md:h-24 md:w-24 md:text-3xl">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">

              <h1 className="mt-2 break-words text-2xl font-extrabold tracking-tight text-stone-900 md:text-3xl lg:text-4xl">
                {name}
              </h1>
              <div className="mt-3 max-w-full">
                <p className="break-words text-xs leading-relaxed text-stone-600 md:text-sm">
                  {club?.description ||
                    "A student-led club fostering innovation, collaboration, leadership, and professional growth."}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Badge */}
          {stats.length > 0 && (
            <div className="flex gap-3 lg:flex-col">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm"
                >
                  <span className="text-xl font-black text-red-700 md:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-stone-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* About Club Section */}
        {club?.about && (
          <div className="mt-8 rounded-2xl border border-stone-200 bg-white/60 p-5 backdrop-blur-sm md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-base font-bold text-stone-900">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-red-700 text-white">
                  <Award className="h-3.5 w-3.5" />
                </span>
                About Club
              </h2>
              <Link
                href={`/Student/Clubs/${club?.slug}/about`}
                className="group inline-flex items-center gap-1 text-xs font-semibold text-red-700 transition-colors hover:text-red-800"
              >
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* About Description */}
            <p className="mt-3 break-words text-sm leading-relaxed text-stone-600">
              {aboutPreview}
            </p>
          </div>
        )}

        {/* Leadership Section */}
        <div className="mt-10 md:mt-12">
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <div className="flex items-center gap-2 rounded-lg bg-red-700 px-3 py-1.5">
              <User className="h-4 w-4 text-white" />
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                LeaderShip
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-stone-300 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {leaders.map((leader, index) => {
              const Icon = leader.icon;

              return (
                <div
                  key={leader.title}
                  className="group relative overflow-hidden rounded-2xl border border-stone-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/10 md:p-6 min-w-[180px]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-2xl bg-gradient-to-br from-red-50 to-stone-50 p-3 border border-red-100 md:p-4">
                      <Icon className="h-5 w-5 text-red-700 md:h-6 md:w-6" />
                    </div>

                    <div className="mt-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 md:text-xs">
                        {leader.title}
                      </p>

                      <p className="mt-2 break-words text-base font-bold text-stone-900 md:text-lg">
                        {leader.name || "TBA"}
                      </p>

                      {leader.department && (
                        <p className="mt-1 text-xs font-medium text-stone-500 md:text-sm">
                          {leader.department}
                        </p>
                      )}

                      {leader.email && (
                        <a
                          href={`mailto:${leader.email}`}
                          className="mt-2 inline-block text-xs font-medium text-red-600 hover:text-red-800 hover:underline underline-offset-2"
                        >
                          {leader.email}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-grow" />
        <div className="mt-8 flex flex-col gap-4 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-10">
          {club?.email && (
            <a
              href={`mailto:${club.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-stone-900/20 transition-all hover:bg-red-700 hover:shadow-red-700/30"
            >
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>{club.email}</span>
            </a>
          )}
          <div className="flex items-center gap-2 text-sm font-medium text-stone-500">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            <span>NITP Student Club</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubHero;
