import React from "react";
import {Comp} from "../../../../utils/comp"

function page() {
  return (
    <div className="flex flex-col p-5 text-black">
      <div className="mt-10">
        <p className="text-red-900 font-semibold lg:text-2xl text-xl">
          PEO (Programme Educational Objectives)
        </p>
        <p>
          Within a few years of graduating from the B.Tech.+M.Tech Dual Degree
          program in Chemical Technology, graduates will be able to:
        </p>
        <Comp
          content={[
            "PEO1: Apply foundational knowledge and experimental expertise in basic sciences, mathematics, and core chemical engineering to solve real-world challenges in chemical and related industries.",
            "PEO2: Plan and execute chemical engineering projects aimed at enhancing quality of life.",
            "PEO3: Critically analyze and address issues concerning safety, energy efficiency, and environmental sustainability.",
            "PEO4: Exhibit strong communication, project management, and leadership capabilities in professional settings.",
            "PEO5: Perform comprehensive life cycle analysis (cradle-to-grave) of chemical processes to promote sustainable engineering practices.",
          ]}
        />
      </div>
    </div>
  );
}

export default page;
