import React from "react";

const DepartmentActivities = ({ data }) => {
  // console.log(data);

  return (
    <div className="p-6 border border-teal-600 rounded-lg text-black bg-teal-100 shadow-lg">
      <h2 className="text-xl font-bold text-teal-800 border-b-2 border-teal-500 pb-2 mb-4">
        Department Activities
      </h2>
      <ul className="space-y-4">
        {data.map((activity, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-black">
              <span className="text-lg font-semibold text-blue-700">
                {activity.activity_description}
              </span>{" "}
              <span className="text-lg font-semibold text-gray-700">
                in {activity.institute_name}
              </span>
              <span>
                from- {new Date(activity.start_date).toLocaleDateString()} to{" "}
                {activity.end_date === "Continue"
                  ? "Ongoing"
                  : new Date(activity.end_date).toLocaleDateString()}
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentActivities;
