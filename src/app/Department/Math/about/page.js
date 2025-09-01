"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "Math";

const aboutContent = (
    <div className="space-y-4 text-justify text-black">
        <p>
            The Department of Mathematics came into existence in 1924 as one of the primary departments of Bihar College of Engineering, and later became part of NIT Patna in 2004 to cater to undergraduate teaching. In 2024, it was renamed as the Department of Mathematics and Computing Technology. Over the years, the department has been evolving steadily and making significant contributions in producing well-trained mathematicians. At present, it is served by a team of seven dynamic and dedicated faculty members who, apart from offering a wide range of undergraduate and postgraduate courses, are actively engaged in interdisciplinary and core research across various domains of mathematics. Since the academic year 2022–2023, the department has been offering a Dual Degree program (B.Tech. + M.Tech.) in Mathematics and Computing Technology. In addition, it runs both core and advanced mathematics courses at the undergraduate and postgraduate levels, serving students from multiple engineering and science disciplines. The department also has its own Ph.D. program, aimed at fostering young minds in research across diverse areas of mathematics, thereby contributing to the nation’s academic and technological growth.
        </p>
        <p>
            The Department of Mathematics and Computing Technology offers a 5-year integrated B.Tech.–M.Tech. Dual Degree program in Mathematics and Computing Technology. Admission to this program is through the prestigious JEE (Main) examination. The program is designed in accordance with the National Education Policy (NEP 2020) of India, incorporating a balanced blend of coursework and research. The curriculum consists of a strong foundation of core courses along with a wide range of electives, enabling students to tailor their academic journey according to their research interests and career goals. The detailed course structure and syllabus are designed to provide both breadth and depth in the field of mathematics and computing technology.
        </p>
        <p>
            Admission to the Ph.D. program is based on an entrance examination and interview conducted by NIT Patna, with eligibility determined by a valid GATE score. Candidates holding a Junior Research Fellowship (JRF) from national funding agencies such as CSIR, NBHM, UGC, or INSPIRE are also eligible for admission through a personal interview. The program is research-intensive, allowing students to carry out independent and advanced research in specialized areas of mathematics under the guidance and mentorship of faculty members.
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
