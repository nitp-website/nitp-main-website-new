"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import axios from 'axios';

const StaffCard = dynamic(() => import("./Staffcard"), {
    loading: () => (
        <div className="w-[100%] h-[100%] m-4 p-4 bg-[grey]">Loading</div>
    ),
});
const AllOfficers = () => {
    const [officers, setofficers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setloading] = useState(false);
    const api = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=all`;
    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                setloading(true)
                const { data } = await axios.get(api);
                const filteredFaculty = data.filter(
                    (item) => item.department === "Officers"
                );
                console.log(filteredFaculty)
                setofficers(filteredFaculty);
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
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-black">
            {loading ? <>Loading ...</> : <></>}
            {officers?.map((faculty) =>
                <StaffCard
                    key={faculty.id}
                    name={faculty.name}
                    image={faculty.image}
                    designation={faculty.designation}
                    email={faculty.email}
                />)
            }
        </div>
    )
}

export default AllOfficers
