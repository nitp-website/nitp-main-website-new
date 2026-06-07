"use client";

import { Users, GraduationCap, User, Mail } from "lucide-react";

const ClubTeam = ({ club }) => {
  const members = [
    {
      role: "Patna Campus PI",
      name: club?.patnaPiName,
      email: club?.patnaPiEmail,
      department: club?.patnaPiDepartment,
      icon: GraduationCap,
      description: "Provides academic guidance at the Patna campus.",
    },
    {
      role: "Bihta Campus PI",
      name: club?.bihtaPiName,
      email: club?.bihtaPiEmail,
      department: club?.bihtaPiDepartment,
      icon: GraduationCap,
      description: "Coordinates activities at the Bihta campus.",
    },
    {
      role: "Faculty Coordinator",
      name: club?.facultyCoordinator,
      email: club?.facultyCoordinatorEmail,
      icon: GraduationCap,
      description: "Faculty advisor guiding club goals.",
    },
    {
      role: "President",
      name: club?.president,
      email: club?.presidentEmail,
      icon: User,
      description: "Leads the club and oversees events.",
    },
    {
      role: "Secretary",
      name: club?.secretary,
      email: club?.secretaryEmail,
      icon: User,
      description: "Manages communication and documentation.",
    },
  ].filter((member) => member.name);

  const clubHighlights = [
    "Student-Led",
    "Faculty Guided",
    "Collaborative",
    "Innovation Focused",
    "Leadership Development",
    "Community Driven",
  ];
  
  const isEmpty = members.length === 0;

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-t-4 border-red-600 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
            <Users className="h-5 w-5 text-red-700" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Meet Our Team
            </h1>
            <p className="text-sm text-gray-500">
              Faculty coordinators, campus PIs and student leaders.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">
              Leadership
            </h2>
            <div className="hidden h-px flex-1 bg-gray-200 sm:block sm:ml-4" />
          </div>

          {isEmpty ? (
            <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
              <div className="rounded-full bg-red-50 p-3">
                <User className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Team Details Unavailable
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Information will be updated soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => {
                const Icon = member.icon;

                return (
                  <div
                    key={member.role}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:bg-white hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-100/40 blur-2xl" />
                      <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-red-100/40 blur-2xl" />
                    </div>

                    <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-[10px] font-bold text-gray-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                      {index + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 transition-colors group-hover:bg-red-600">
                          <Icon className="h-4 w-4 text-red-600 transition-colors group-hover:text-white" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                          {member.role}
                        </span>
                      </div>

                      <div className="mt-4 text-center">
                        <h3 className="text-base font-bold text-gray-900">
                          {member.name}
                        </h3>
                        {member.department && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {member.department}
                          </p>
                        )}
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-gray-500">
                        {member.description}
                      </p>

                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white px-2 py-1.5 text-xs font-medium text-gray-600 shadow-sm transition-all hover:bg-red-600 hover:text-white"
                        >
                          <Mail size={12} />
                          <span className="truncate">Email</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {!isEmpty && (
          <div className="mt-20 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-white p-5">
            <div className="flex flex-wrap gap-3">
              {clubHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClubTeam;