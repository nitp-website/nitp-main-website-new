"use client";

import { Info } from "lucide-react";

export default function ClubAbout({ club }) {
  const hasAbout = Boolean(club?.about?.trim());

  return (
    <section className="overflow-hidden min-h-screen rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-t-4 border-red-600 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
            <Info className="h-5 w-5 text-red-700" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              About {club?.name || "Club"}
            </h2>
            <p className="text-sm text-gray-500">
              Learn more about our mission and community.
            </p>
          </div>
        </div>

        <div className="my-5 h-px bg-gray-200" />

        <div className="transition-all duration-300">
          {hasAbout ? (
            <p className="whitespace-pre-line text-sm leading-relaxed text-slate-800">
              {club.about}
            </p>
          ) : (
            <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
              <div className="rounded-full bg-red-50 p-3">
                <Info className="h-6 w-6 text-red-700" />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                About Information Unavailable
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Details about this club will be updated soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}