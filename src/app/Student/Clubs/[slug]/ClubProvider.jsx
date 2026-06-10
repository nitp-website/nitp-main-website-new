"use client";

import { createContext, useContext } from "react";
const ClubContext = createContext(null);

export function useClub() {
  const ctx = useContext(ClubContext);
  if (ctx === null) throw new Error("useClub must be used within ClubProvider");
  return ctx;
}

export default function ClubProvider({ club, children }) {
  return (
    <ClubContext.Provider value={club}>
      {children}
    </ClubContext.Provider>
  );
}