"use client";

import { useClub } from '../ClubProvider';
import ClubAbout from './ClubAbout';

export default function AboutPage(){
  const club = useClub();
 
  if (!club) {
    return (
      <div className="p-6 text-center">
        Club data unavailable
      </div>
    );
  };

  return <ClubAbout club={club} />
}