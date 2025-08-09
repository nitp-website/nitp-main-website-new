import React from "react";
import { Comp } from "../../../../../utils/comp";
function page() {
  return (
    <div className="flex flex-col p-5 text-black">
      <div className="mt-10">
        <p className="text-red-900 text-xl lg:text-2xl font-semibold">
          Program Educational Objectives
        </p>
        <Comp
          content={[
            "PEO1: engage in requirement analysis, designing, implementation, testing, deployment, and/or maintaining of software systems in the domain of computer science & engineering and allied fields.",
            "PEO2: solve socially relevant challenges using computer science and engineering expertise, and/or pursue higher education and research",
            "PEO3: work productively in a team and as an individual in interdisciplinary projects in industry/academia setup",
            "PEO4: To participate in lifelong learning and career advancement, as well as adapting to changing professional and social requirements .",
            "PO5. Modern tool usage: Create, select and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
            "PO6. The engineer and society:  Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
            "PO7. Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
            "PO8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
            "PO9. Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
            "PO10. Communications: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
            "PO11. Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one�s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments",
            "PO12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
          ]}
        />
      </div>
    </div>
  );
}

export default page;
