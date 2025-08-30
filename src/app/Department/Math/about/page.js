"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "Math";

const aboutContent = (
    <div className="space-y-4 text-justify text-black">
        <p>
            The Department of Mathematics was established in 1924 and department offer several courses that support other engineering departments. Recently a new program Integrated M. Sc. in Mathematics is started and running successfully from the academic year 2015-2016. Current faculty strength of the department is nine and they are experienced in teaching and research in several branches of Mathematics. Department of Mathematics is one of the backbone of the Institution as it is an essential department for engineering courses up to Ph.D level.
        </p>
    </div>
);

const Aboutpage = () => {
    const [counts, setCounts] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=maths`);
                // console.log("Counts Response:", countsResponse.data);
                setCounts([
                    { label: "Faculty", value: countsResponse.data?.user, icon: <UserSquare size={40} />, link: '/faculty' },
                    { label: "Research Scholars", value: countsResponse.data?.phd_candidates || 0, icon: <Users size={40} />, link: '/researchStudents' },
                    { label: "Journal Papers", value: countsResponse.data?.journal_papers || 0, icon: <FileText size={40} />, link: '/journal' },
                    { label: "Conference Papers", value: countsResponse.data?.conference_papers || 0, icon: <Award size={40} />, link: '/conference' },
                    { label: "Patents", value: countsResponse.data?.ipr || 0, icon: <ShieldCheck size={40} />, link: '/patents' },
                    { label: "Projects", value: countsResponse.data?.sponsored_projects || 0, icon: <Briefcase size={40} />, link: '/projects' },
                ]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, []);

    return (
        <div>
            {/* About the department section */}
            <div className="py-1 mt-2">
                <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
                    <div className="w-full">
                        <h2 className="text-center text-4xl text-[#e30f0f] mt-2">
                            About The Department
                        </h2>

                        <div className="w-full mx-auto px-2 py-5 text-justify text-black">
                            {aboutContent}
                        </div>
                    </div>

                    {
                        counts.length && (
                            <DepartmentCounter counts={counts} dept={dept} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;
