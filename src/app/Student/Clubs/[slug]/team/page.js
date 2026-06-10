"use client";

import { useClub } from "../ClubProvider";
import ClubTeam from './ClubTeam';

export default function TeamPage(){
  const club = useClub();
 
  if (!club) {
    return (
      <div className="p-6 text-center">
        Club data unavailable
      </div>
    );
  }

  return <ClubTeam club={club} />;
}