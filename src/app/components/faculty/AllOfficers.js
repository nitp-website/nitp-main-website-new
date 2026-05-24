"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import axios from 'axios';

const StaffCard = dynamic(() => import("./Staffcard"), {
    loading: () => (
        <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">Loading</div>
    ),
});

const getSectionFromDesignation = (designation) => {
    if (!designation) return "General Administration";
    
    const sectionMap = {
        "Registrar": "General Administration",
        "Joint Registrar": "General Administration",
        "Deputy Registrar": "General Administration",
        "Assistant Registrar": "General Administration",
        "Sr. Medical Officer": "Health Centre",
        "Medical Officer": "Health Centre",
        "Sr. Scientific & Technical Officer": "CCIS",
        "Assistant Librarian": "Central Library",
        "SAS Officer": "Student Activity Centre",
        "Maintenance Engineer": "Maintenance Unit",
    };

    for (const [key, value] of Object.entries(sectionMap)) {
        if (designation.includes(key)) {
            return value;
        }
    }
    return "General Administration";
};

const AllOfficers = () => {
    const [groupedOfficers, setGroupedOfficers] = useState({});
    const [error, setError] = useState(false);
    const [loading, setloading] = useState(false);
    const api = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/staff?type=officers`;

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                setloading(true)
                const { data } = await axios.get(api);
                const filteredFaculty = data.filter(
                    (item) => item.department === "Officers"
                );
                
                const grouped = filteredFaculty.reduce((acc, officer) => {
                    const section = getSectionFromDesignation(officer.designation);
                    if (!acc[section]) {
                        acc[section] = [];
                    }
                    acc[section].push(officer);
                    return acc;
                }, {});
                
                setGroupedOfficers(grouped);
                setloading(false)
            } catch (err) {
                console.log(err);
                setError(true);
            }
        };
        fetchFaculty();
    }, []);

    if (error) {
        return (
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <p className="text-red-500">Sorry, failed to fetch the officers data.</p>
                </div>
            </div>
        );
    }

    if (loading) {
        return <div className="text-center p-5">Loading ...</div>;
    }

    return (
        <div className="w-full p-5 text-black">
            {Object.keys(groupedOfficers).length === 0 ? (
                <div className="text-center">No officers found</div>
            ) : (
                Object.entries(groupedOfficers).map(([section, officers]) => (
                    <div key={section} className="mb-12">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                {section}
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-10">
                            {officers.map((faculty) =>
                                <StaffCard
                                    key={faculty.id}
                                    name={faculty.name}
                                    image={faculty.image}
                                    designation={faculty.designation}
                                    email={faculty.email}
                                />)
                            }
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default AllOfficers;
