import Image from "next/image";
import React from "react";

export const CounterCard = ({ item }) => {
  return (
    <div
      className={`bg-white w-40 h-40 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105`}
    >
      <div className="text-[#8B3A32] overflow-hidden shrink-0 flex items-center justify-center">
        {item.icon}
      </div>
      <div className="text-3xl font-bold text-red-700">{item.value}</div>
      <h2 className="text-[#8B3A32] mt-1 text-sm">{item.label}</h2>
    </div>
  );
};

const DepartmentCounter = ({ counts }) => {
  // console.log("DepartmentCounter counts:", counts);
  return (
    <div className="text-lg text-black justify-evenly items-start text-justify py-5 flex gap-5 lg:gap-3 flex-wrap">
      {
        counts && counts.map((item, index) => (
          <CounterCard key={index} item={item} />
        ))
      }
    </div>
  );
};

export default DepartmentCounter;