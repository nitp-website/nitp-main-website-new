"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

const FacultyHeader = dynamic(() => import("./FacultyHeader"), {
  loading: () => <div className="w-full h-32 animate-pulse bg-red-100 rounded-md" />,
});
const Sidebar = dynamic(() => import("./Sidebar"), {
  loading: () => <div className="w-full h-64 animate-pulse bg-red-100 rounded-md" />,
});

const FacultyInfo = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { facultyid } = useParams();
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  useEffect(() => {
    if (!facultyid) return;
    fetch(`${baseUrl}/api/v2/faculty/profile?email=${facultyid}&section=summary`)
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        setSummary(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [facultyid]);

  if (loading) return <p className="text-black p-4">Loading...</p>;
  if (error) return <p className="text-black p-4">Error: {error.message}</p>;

  return (
    <div className="md:w-[90%] mx-auto flex flex-col md:flex-row gap-2">
      <div className="w-full md:w-[35%]">
        <Sidebar summary={summary} />
      </div>
      <div className="w-full md:w-[65%]">
        <FacultyHeader summary={summary} email={facultyid} />
      </div>
    </div>
  );
};

export default FacultyInfo;
