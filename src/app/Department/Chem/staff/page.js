// "use client";
// import React, { useEffect, useState } from "react";
// import StaffcardDept from "../../../components/faculty/StaffcardDept";
// import staffData from "../../staffche";

// const cheStaffpage = () => {
//   const [staff, setStaff] = useState("staff");
//   const hasStaff =
//     staffData.find((dept) => dept.department === "che")?.staff.length > 0;

//     return (
//     <div>
//       <div className="mt-5">
//         {staff && hasStaff && (
//           <div className="flex flex-col">
//             <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">
//               STAFFS
//             </p>
//             <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
//               {staffData
//                 .find((dept) => dept.department === "che")
//                 ?.staff.map((staffMember, index) => (
//                   <StaffcardDept key={index} {...staffMember} />
//                 ))}
//             </div>
//               </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default cheStaffpage;

"use client";
import React, { useEffect, useState } from "react";
import StaffcardDept from "../../../components/faculty/StaffcardDept";
import staffData from "../staffche.js";

const ChemStaffPage = () => {
  const [staff, setStaff] = useState("staff");
  const hasStaff =
    staffData.find((dept) => dept.department === "Chemical Science and Technology")?.staff.length > 0;

  return (
    <div>
      <div className="mt-5">
        {staff && hasStaff && (
          <div className="flex flex-col">
            <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">
              STAFFS
            </p>
            <div className="flex flex-wrap justify-center gap-10 p-5 my-2 text-black">
              {staffData
                .find((dept) => dept.department === "Chemical Science and Technology")
                ?.staff.map((staffMember, index) => (
                  <StaffcardDept key={index} {...staffMember} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChemStaffPage;