"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const aboutContent = (
    <div className="space-y-4 text-justify text-black">
        <p>
            The Department of Architecture was established at the Bihar College of Engineering (BCE) Patna in 1979 under Patna University. It was the first time that architectural education had commenced in Bihar. When BCE Patna was rechristened as the National Institute of Technology Patna on 28th January 2004, it came under the control of the Ministry of Human Resource Development (MHRD), Government of India. The Department of Architecture and Planning offers programmes in Bachelor of Architecture (B.Arch.), Master of Urban and Regional Planning (MURP), and Ph.D. in Architecture and Planning.
        </p>
        <p>
            The B.Arch. course, apart from fulfilling the functional requirements, leads towards creativity, innovation and aesthetics in the design of buildings and their environments. The postgraduate course in Master of Urban and Regional Planning, which commenced in 2012-13, imparts knowledge of urban and regional planning, green infrastructure, environment planning, sustainability and energy efficient aspects in urban and regional planning. It emphasizes creating new ideas and innovative physical/spatial planning concepts in the present scenario. The nomenclature of the Department of Architecture was changed to the Department of Architecture and Planning in the year 2020. This course is affiliated with the Institute of Town Planners, India.
        </p>
        <p>
            The PhD programme started in 2009 with research areas in architecture, urban planning, regional planning, environmental planning, transport planning, architectural conservation, landscape, housing, healthcare architecture, and construction planning management.
        </p>
    </div>
);

const Aboutpage = () => {
    const [counts, setCounts] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=arch`);
                // console.log("Counts Response:", countsResponse.data);
                setCounts([
                    { label: "Faculty", value: countsResponse.data?.user, icon: <UserSquare size={40} /> },
                    { label: "Research Scholars", value: countsResponse.data?.phd_candidates || 0, icon: <Users size={40} /> },
                    { label: "Journal Papers", value: countsResponse.data?.journal_papers || 0, icon: <FileText size={40} /> },
                    { label: "Conference Papers", value: countsResponse.data?.conference_papers || 0, icon: <Award size={40} /> },
                    { label: "Patents", value: countsResponse.data?.ipr || 0, icon: <ShieldCheck size={40} /> },
                    { label: "Projects", value: countsResponse.data?.sponsored_projects || 0, icon: <Briefcase size={40} /> },
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
                            <DepartmentCounter counts={counts} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;
