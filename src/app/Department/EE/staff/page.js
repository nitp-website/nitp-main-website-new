"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewStaffcardDept from "../../../components/faculty/NewStaffcardDept";
import {sortByDesignation } from "../../../../lib/designationOrder";

const ElectricalStaffpage = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchElectricalStaff = async () => {
      try {
        setLoading(true);
        setError(false);

        let allStaff = [];
        let page = 1;
        let totalPages = 1;

        do {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/staff2?type=all&department=ee&page=${page}&limit=50`
          );

          allStaff.push(...data.data);
          totalPages = data.totalPages;
          page++;
        } while (page <= totalPages);

        setStaffList(sortByDesignation(allStaff));
        console.log("Fetched Electrical staff:", allStaff);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchElectricalStaff();
  }, []);

  return (
    <div>
      <div className="mt-5">
        <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">
          STAFFS
        </p>

        {loading ? (
          <p className="text-center text-gray-500 mt-6">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-6">
            Sorry, failed to fetch the Electrical Engineering staff data.
          </p>
        ) : staffList.length === 0 ? (
          <p className="text-center text-gray-400 italic mt-6">
            No staff found.
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
            {staffList.map((staff) => (
              <NewStaffcardDept key={staff.id ?? staff.user_id} staff={staff} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectricalStaffpage;
