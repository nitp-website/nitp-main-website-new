import Image from "next/image";
import React from "react";

export const CounterCard = ({ item }) => {
  return (
    <div
      className={`bg-white w-48 h-48 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105`}
    >
      <div className="w-16 h-16 text-[#8B3A32] rounded-full overflow-hidden shrink-0 flex items-center justify-center">
        {item.icon}
      </div>
      <div className="text-4xl font-bold text-red-700">{item.count}</div>
      <h2 className="text-[#8B3A32] mt-1 text-xl">{item.name}</h2>
    </div>
  );
};

const DepartmentCounter = ({ counts }) => {
  return (
    <div className="text-lg text-black px-5 justify-evenly items-start text-justify py-5 flex gap-5 flex-wrap">
      {counts.map((item, index) => {
        return <CounterCard key={index} item={item} />;
      })}
    </div>
  );
};

export default DepartmentCounter;
