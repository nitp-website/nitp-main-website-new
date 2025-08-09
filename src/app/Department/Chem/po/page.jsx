import React from "react";
import { Comp } from "../mission/page";

function page() {
  return (
    <div className="flex flex-col p-5 text-black">  
    <div className="mt-10">
      <p className="text-red-900 font-semibold lg:text-2xl text-xl">
        PO (Program Outcomes)
      </p>
      <Comp
        content={[
          "Engineering Knowledge: Apply principles of mathematics, science, and core engineering to effectively solve complex engineering challenges.",
          "Problem Analysis: Identify and define complex engineering problems, analyze them using research literature and foundational concepts from mathematics, natural sciences, and engineering, and draw well-supported conclusions.",
          "Design and Development of Solutions: Develop solutions for intricate chemical engineering problems and design systems, components, or processes that meet defined requirements, considering public health, safety, cultural, societal, and environmental factors.",
          "Investigation of Complex Problems: Employ research-based knowledge and methodologies, including experimental design, data analysis, and information synthesis to investigate and draw valid conclusions about complex problems.",
          "Modern Tool Usage: Select, develop, and apply appropriate modern engineering tools, techniques, and modeling and simulation, while understanding their limitations, to solve complex chemical engineering tasks.",
          "The Engineer and Society: Use contextual knowledge to assess and address societal, health, safety, legal, and cultural aspects and responsibilities associated with chemical engineering practice.",
          "Environment and Sustainability: Evaluate the environmental and societal impact of chemical engineering solutions and demonstrate an understanding of the need for sustainable development.",
          "Ethics: Uphold ethical standards, professional responsibilities, and norms within the practice of engineering.",
          "Individual and Team Work: Work efficiently both independently and as part of diverse and multidisciplinary teams, including in leadership roles.",
          "Communication: Communicate effectively on complex engineering matters with peers, stakeholders, and the broader community through well-prepared reports, documentation, presentations, and clear verbal or written instructions",
          "Project Management and Finance: Apply engineering and management principles to effectively plan, manage, and lead projects in multidisciplinary settings.",
          "Life-long Learning: Acknowledge the importance of continual learning and demonstrate the ability and readiness to engage in independent, life-long learning amid evolving technological landscapes.",
        ]}
      />
    </div>
    </div>
  );
}

export default page;
