"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./intranetRedirect.css";

const IntranetRedirect = () => {
  const [seconds, setSeconds] = useState(6); // Countdown starts from 6 seconds
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      window.location.href = "http://192.168.1.16:3333"; // Redirect to your intranet site
    }, 6000); // 6 seconds redirect

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div id="intranet-redirect">
      <div className="intranet text-neutral-700">
        <div className="intranet-info">
          <h1>Welcome to NIT Intranet</h1>
        </div>
        <h2 className="pt-10 text-red-700">
          Connect to NIT Network (WiFi or Ethernet)
        </h2>
        <p>
          If connected, You
          will be redirected in {seconds} seconds and you will be able to access the Intranet.
        </p>
        <p>If the redirection does not work, click below:</p>
        <a href="http://192.168.1.16:3333" className="intranet-link">
          Go To NIT Intranet
        </a>
      </div>
    </div>
  );
};

export default IntranetRedirect;
