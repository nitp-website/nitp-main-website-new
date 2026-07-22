"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import axios from 'axios';

const StaffCard = dynamic(() => import("./Staffcard"), {
    loading: () => (
        <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">Loading</div>
    ),
});

const sortByName = (list) =>
    [...list].sort((a, b) => (a.name || "").localeCompare(b.name || ""));

const fetchAllPages = async (deptCode) => {
    let allStaff = [];
    let page = 1;
    let totalPages = 1;

    do {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/staff2?type=all&department=${deptCode}&page=${page}&limit=50`
        );

        allStaff.push(...data.data);
        totalPages = data.totalPages;
        page++;
    } while (page <= totalPages);

    return allStaff;
};

const AllStaffs = () => {
    const [ministerialStaff, setMinisterialStaff] = useState([]);
    const [supportingStaff, setSupportingStaff] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                setLoading(true);
                setError(false);

                const [ministerial, supporting] = await Promise.all([
                    fetchAllPages("min"),
                    fetchAllPages("sup"),
                ]);
                

                setMinisterialStaff(sortByName(ministerial));
                setSupportingStaff(sortByName(supporting));
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchFaculty();
    }, []);

    if (error) {
        return (
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <p className="text-red-500">Sorry, failed to fetch the staff data.</p>
                </div>
            </div>
        );
    }

    if (loading) {
        return <p className="text-center text-gray-500 mt-6">Loading...</p>;
    }

    return (
        <div>
            {ministerialStaff.length > 0 && (
                <div className="mt-5">
                    <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">
                        MINISTERIAL STAFF
                    </p>
                    <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
                        {ministerialStaff.map((faculty) => (
                            <StaffCard
                                key={faculty.id}
                                name={faculty.name}
                                image={faculty.image}
                                designation={faculty.designation}
                                email={faculty.email}
                            />
                        ))}
                    </div>
                </div>
            )}

            {supportingStaff.length > 0 && (
                <div className="mt-5">
                    <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">
                        SUPPORTING STAFF
                    </p>
                    <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
                        {supportingStaff.map((faculty) => (
                            <StaffCard
                                key={faculty.id}
                                name={faculty.name}
                                image={faculty.image}
                                designation={faculty.designation}
                                email={faculty.email}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AllStaffs