import React from "react";
import DepartmentCounter from "../DeptCounter";
import {
  Users,
  BookOpen,
  FileText,
  Award,
  Briefcase,
  BarChart2,
} from "lucide-react";

const about = `The Department of Computer Science and Engineering offers courses leading to Bachelor of Technology in Computer Science and Engineering. The department has a very good infrastructure and faculty to provide excellent education. The curriculum is updated regularly to keep up with the growing demands and the changing trends of the software industry and research laboratories. The department provides a wide range of courses. The prominent among them includes Data Structures, Design and Analysis of Algorithms, System Programming, Computer Networks, Data Mining and Warehousing, Distributed and Parallel Computing, Mobile and Wireless Computing, Real-time Systems, Cryptography, Genetic Algorithm, Quantum Algorithms and Artificial Intelligence. Apart from these, students are also offered a wide variety of electives.`;

const counts = [
  { name: "Undergraduate Students", icon: <Users size={40} />, count: "456+" },
  { name: "Postgraduate Students", icon: <Users size={40} />, count: "123+" },
  { name: "Ph.D. Students", icon: <Users size={40} />, count: "49+" },
  { name: "Faculty", icon: <BookOpen size={40} />, count: "25+" },
  { name: "Journal", icon: <FileText size={40} />, count: "25+" },
  { name: "Conferences", icon: <Award size={40} />, count: "78+" },
  { name: "Projects", icon: <Briefcase size={40} />, count: "49+" },
  { name: "Book", icon: <BookOpen size={40} />, count: "123+" },
  { name: "Patents", icon: <BarChart2 size={40} />, count: "123+" },
];

const Aboutpage = () => {
  return (
    <div>
      {/* About the department section */}
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              About The Department
            </h2>

            <div className="w-full mx-auto px-2 py-5 text-justify text-black">
              {about.split("\n").map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Counters */}
          {/* <DepartmentCounter counts={counts} /> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
