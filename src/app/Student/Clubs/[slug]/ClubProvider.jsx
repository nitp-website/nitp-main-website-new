"use client";

import { createContext, useContext } from "react";
const ClubContext = createContext(null);

export function useClub() {
  return useContext(ClubContext);
}

export default function ClubProvider({ club, children }) {
  return (
    <ClubContext.Provider value={club}>
      {children}
    </ClubContext.Provider>
  );
}