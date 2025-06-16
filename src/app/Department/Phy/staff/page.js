"use client";
import React, { useEffect, useState } from "react";
import StaffcardDept from "../../../components/faculty/StaffcardDept";
import staffData from "../../staffPhy";

const PhyStaffpage = () => {
  const [staff, setStaff] = useState("staff");
  const hasStaff =
    staffData.find((dept) => dept.department === "phy")?.staff.length > 0;

  return (
    <div>
      <div className="mt-5">
        {staff && hasStaff ? (
          <div className="flex flex-col">
            <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">
              STAFFS
            </p>
            <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
              {staffData
                .find((dept) => dept.department === "Phy")
                ?.staff.map((staffMember, index) => (
                  <StaffcardDept key={index} {...staffMember} />
                ))}
            </div>
          </div>
        ):(
          <div className="text-center text-gray-600 text-lg py-10">
            Data not available
          </div>
        )}
      </div>
    </div>
  );
};

export default PhyStaffpage;
