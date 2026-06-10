"use client";

import { useClub } from "../ClubProvider";
import ClubContact from './ClubContact';

export default function ContactPage(){
  const club = useClub();
 
  if (!club) {
    return (
      <div className="p-6 text-center">
        Club data unavailable
      </div>
    );
  }

  return <ClubContact club={club} />;
}
