"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Error({ error, reset }) {
  const [seconds, setSeconds] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-red-900 mb-4">
          Under Maintenance...
        </h1>
        
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. This page is currently under maintenance. Our team is working to resolve the issue.
        </p>

        <p className="text-sm text-gray-500 mb-8">
          You will be redirected to the homepage in {seconds} seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:webteam@nitp.ac.in"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-800 transition-colors"
          >
            Contact Web Team
          </a>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-900 bg-red-50 hover:bg-red-100 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>

        <button
          onClick={reset}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 