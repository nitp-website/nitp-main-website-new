"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const dept = "CE";

const aboutContent = (
    <div className="space-y-4 text-justify text-black">
        <p>
            The Department of Civil Engineering is the oldest and vibrant department of the institute, which was established along with the inception of the Institute in the year 1924. The Institute was formerly known as the Bihar College of Engineering Patna, a constituent engineering college under Patna University, until 27thJan 2004. It was rechristened to National Institute of Technology Patna on 28th Jan 2004 as an Autonomous Institute under MHRD, Govt. of India.
        </p>
        <p>
            The Department of Civil Engineering is committed to provide quality teaching and research opportunities toits undergraduate, postgraduate and doctoral students. Apart from UG programme, the department also offers M. Tech and Doctoralprogrammes in the areas of Structural Engineering, Transportation Engineering, Water Resource Engineering,Environmental Engineering and Geotechnical Engineering. The intake strength of the Civil Engineering Department is 92 for undergraduate (BTech)and 112forpostgraduate (MTech). Presently, 25 PhD scholars are enrolled with the department for pursuing their doctoral researchprogram.The teaching and education is directed towards their successful career in International and National Industries/ Institutions, Public and Private sectors,and enable them to qualify various competitive examinations such as IES, IAS, GATE examinations etc.
        </p>
        <p>
            The Department is actively involved in international and national research projects, and high valued consultancy works for the Government, Private Sector and Industries.The department also offers its expertise in various consultancy works and research projects fordifferent industries and organisations in the locale. The Department supports in upbringing of society and other educational institutes by providing training, workshops, technology transfer, capacity building, and awareness programs.
        </p>
    </div>
);

const Aboutpage = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=ce`);
                // console.log("Counts Response:", countsResponse.data);
                setData(countsResponse.data);
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
                        data && (
                            <DepartmentCounter data={data} dept={dept} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;
