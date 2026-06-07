"use client";

import { Info } from "lucide-react";

export default function ClubAbout({ club }) {

  const AboutText = 
    club?.about ||
    `Welcome to ${club?.name || "our club"}. We are dedicated to excellence, fostering deep passions, skill development, and building a highly collaborative community among our members. Our organization provides an inclusive environment where individuals of all backgrounds can safely connect, share ideas, and grow together. Through scheduled events, hands-on workshops, peer mentoring, structured training programs, competitions, and community initiatives, we continuously strive to deliver meaningful experiences and create lasting impact for every member.`;

  return (
    <section className="overflow-hidden min-h-screen rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-t-4 border-red-600 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
            <Info className="h-5 w-5 text-red-700" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              About {club?.name}
            </h2>
            <p className="text-sm text-gray-500">
              Learn more about our mission and community.
            </p>
          </div>
        </div>
        <div className="my-5 h-px bg-gray-200" />
        <div className="transition-all duration-300">
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-800">
            {AboutText}
          </p>
        </div>
      </div>
    </section>
  );
}