"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useNavigationEvent = (onPathnameChange: () => void) => {
  const pathname = usePathname();

  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
   
    if (savedPathNameRef.current !== pathname) {
      onPathnameChange();
      
      savedPathNameRef.current = pathname;
    }
  }, [pathname, onPathnameChange]);
};

export default useNavigationEvent