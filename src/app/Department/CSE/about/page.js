"use client";
import React, { useState, useEffect } from "react";
import DepartmentCounter from "../../../components/department/DepartmentCounter.js";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2, ShieldCheck, UserSquare } from "lucide-react";

import axios from "axios";

const aboutContent = (
  <div className="space-y-4 text-justify text-black">
    <p>
      The Department of Computer Science and Engineering offers a wide spectrum of academic programs to prepare students for the rapidly evolving digital era. At the undergraduate level, the department offers a four-year B. Tech program in Computer Science and Engineering, and Artificial Intelligence and Data Science. It also provides two five-year Dual Degree programs: B.Tech + M.Tech in Computer Science and Engineering with specialization in Cyber Security, and B.Tech + M.Tech in Computer Science and Engineering with specialization in Data Science. At the postgraduate level, students can opt for a three-year MCA program with specializations in Artificial Intelligence and Internet of Things, and Data Science and Informatics, and a two-year M.Tech program with specializations in Data Science and Engineering, and Cyber Security. The department further offers a Ph.D. program fostering advanced research.
    </p>
    <p>
      Currently, the department has{' '}
      <span className="text-[#e30f0f]">28 regular faculty</span> <strong>members</strong> and over{' '}
      <strong>1500+ students</strong>. Its strong research and innovation culture is
      reflected in more than{' '}
      <strong>800+ publications in reputed International and National Journals with high impact factors, 60+ patents</strong>, and{' '}
      <strong>20+ sponsored projects</strong>{" "}
      <span className="text-[#e30f0f]">
        to enhance our academic activities. Our department features well-equipped teaching and research laboratories, providing substantial support, fellowships (such as Visvesvaraya fellowship) and sponsorship for doctoral candidates.</span>{" "}
      The curriculum is continuously updated, blending strong theoretical foundations with practical skills in state-of-the-art technologies. {" "}
      <span className="text-[#e30f0f]">Members of the faculty
        of the institute have won many prestigious awards and recognitions, including the word ranking of top 2% scientist
        given by Stanford University, USA, Royal Society fellowships, United Kingdom and awards, AD Scientific Index etc.
        Currently, some of our faculty members are serving as Deputy Editor-in-Chief, Associate Editor and Area Editor of top
        rated journals of IEEE and Elsevier.
      </span>
    </p>
    <p>
      <span className="text-[#e30f0f]">
        The department has a thriving research environment with active research groups in the areas of
      </span>{" "} Artificial
      Intelligence, Machine Learning, Deep Learning, Pattern Recognition, Recommender Systems, Big Data, Data Mining,
      Network and Information Security, Multimedia Security, Threat Modelling, Biometric Systems, Social Networks,
      Computational Geometry, Data Networks, Wireless Sensor Networks, Internet of Things, Bioinformatics, Semantic Web,
      Natural Language Processing, Cloud Computing, Knowledge Engineering, Software Engineering, Blockchain Technology,
      Cyber Security, Distributed Systems, Fog and Edge Computing, IoT Security, Access Control, Privacy Models in Cloud,
      Optimization Algorithms, Evolutionary Algorithms, Differential Privacy, Game Theory, Federated Learning, Human–AI
      Interaction, Graph Neural Networks, and Computational Biology.
    </p>
    <p>
      <span className="text-[#e30f0f]">
        Graduates from the department at all levels secure excellent placements. A large number of our Alumni have made
        their mark in different careers. Many of them occupy key positions in both academia and industry all over the world,
        and quite a number of them have founded successful enterprises.
      </span>
    </p>
    <p>
      The department is committed to fostering{' '}
      <strong>interdisciplinary and multidisciplinary research</strong>, while
      imparting high-quality knowledge, professional ethics, and social responsibility. Its vision is to nurture innovative
      minds, develop research-oriented professionals, and contribute meaningfully to academia, industry, and society.
    </p>
  </div>
);

const Aboutpage = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const countsResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/count?type=cse`);
        // console.log("Counts Response:", countsResponse.data);
        setCounts([
          { label: "Faculty", value: countsResponse.data?.user, icon: <UserSquare size={40} /> },
          { label: "Research Scholars", value: countsResponse.data?.phd_candidates || 0, icon: <Users size={40} /> },
          { label: "Journal Papers", value: countsResponse.data?.journal_papers || 0, icon: <FileText size={40} /> },
          { label: "Conference Papers", value: countsResponse.data?.conference_papers || 0, icon: <Award size={40} /> },
          { label: "Patents", value: countsResponse.data?.ipr || 0, icon: <ShieldCheck size={40} /> },
          { label: "Projects", value: countsResponse.data?.sponsored_projects || 0, icon: <Briefcase size={40} /> },
        ]);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {/* About the department section */}
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-[#e30f0f] mt-2">
              About The Department
            </h2>

            <div className="w-full mx-auto px-2 py-5 text-justify text-black">
              {aboutContent}
            </div>
          </div>

          {
            counts.length && (
              <DepartmentCounter counts={counts} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
