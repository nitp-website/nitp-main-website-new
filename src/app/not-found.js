"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import "./notfound.css";

const NotFound = () => {
  const [seconds, setSeconds] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
        router.push('/')
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2 className="pt-10">404 - Page not found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <p>You will be redirected to the homepage in {seconds} seconds.</p>
        <a href="/">Go To Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
