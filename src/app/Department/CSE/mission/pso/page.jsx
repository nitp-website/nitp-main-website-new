import React from "react";
import { Comp } from "../../../../../utils/comp";

function page() {
  return (
    <div className="flex flex-col p-5 text-black">
      <div className="mt-10">
        <p className="text-red-900 text-xl lg:text-2xl font-semibold">
          Program Specific Outcome
        </p>
        <Comp
          content={[
            "PSO1: Analyze, design, model, develop, test, and manage complex software and information management systems.",
            "PSO2: Develop sustainable, intelligent, and secure computing solutions for real time challenges.",
          ]}
        />
      </div>
    </div>
  );
}

export default page;
