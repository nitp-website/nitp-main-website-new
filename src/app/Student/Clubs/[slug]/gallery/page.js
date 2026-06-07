"use client";

import { useClub } from "../ClubProvider";
import ClubGallery from './ClubGallery';

export default function GalleryPage(){
  const club = useClub();
 
  if (!club) {
    return (
      <div className="p-6 text-center">
        Club data unavailable
      </div>
    );
  }

  return <ClubGallery club={club} />;
}
