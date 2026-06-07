"use client";

import { useClub } from "./ClubProvider";
import ClubHero from "./ClubHero";


export default function ClubPage(){
  const club = useClub();

  if (!club) {
    return (
      <div className="p-6 text-center">
        Club data unavailable
      </div>
    );
  }

  return <ClubHero club={club} />
};
