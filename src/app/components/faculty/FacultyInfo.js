"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
const FacultyHeader = dynamic(() => import("./FacultyHeader"), {
  loading: () => (
    <div className="w-full h-full p-3 text-black m-3 bg-red-200">loading</div>
  ),
});
const Sidebar = dynamic(() => import("./Sidebar"), {
  loading: () => (
    <div className="w-full h-full p-3 text-black m-3 bg-red-200">loading</div>
  ),
});
const FacultyInfo = () => {
  const [facultyData, setFacultyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profile, setProfile] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);

  const res = useParams();
  // console.log(res.facultyid);

  const apiEndpoint = `${process.env.NEXT_PUBLIC_NEW_BACKED_API}/api/faculty?type=${res.facultyid}`;

  useEffect(() => {
    fetch(`${apiEndpoint}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setFacultyData(data);
        setProfile(data.profile);
        setAboutMe(data.about_me);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-black">Loading...</p>;
  if (error) return <p className="text-black">Error: {error.message}</p>;

  // console.log(facultyData);
  // console.log(profile);

  return (
    <div className="md:w-[90%] mx-auto flex flex-col md:flex-row gap-2">
      <div className="w-full md:w-[35%]">
        <Sidebar profileData={profile} aboutMe={aboutMe} />
      </div>
      <div className="w-full md:w-[65%]">
        {facultyData ? (
          <div className="flex flex-col md:flex-row">
            <FacultyHeader Data={facultyData} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default FacultyInfo;
