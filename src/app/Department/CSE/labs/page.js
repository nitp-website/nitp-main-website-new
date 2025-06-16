import Image from "next/image";
import React from "react";

const labsData = [
  {
    name: "Computing Lab-1",
    description:
      "Operating System lab uses the Linux OS (Fedora 16.0) to implement the operating system management process, memory function, UNIX and shell programming related to OS system call functions. This lab also deals with courses like Object-Oriented Programming (OOP), Web Technology, Database Management (DBMS), Artificial Intelligence (AI), and Software Engineering.",
    image: "/Cselab1.jpg",
  },
  {
    name: "Computing Lab-2",
    description:
      "Simulation lab uses the IBM Rational Rose software and other software to design software modules. This lab also deals with some courses like Object-Oriented Programming (OOP), Web Technology, Database Management (DBMS), Artificial Intelligence (AI), and Software Engineering.",
    image: "/Cselab2.jpg",
  },
  {
    name: "Network System Lab",
    description:
      "The lab has well-equipped systems for research, which include the Network Training Kit. The lab deals with Cyber Security courses.",
    image: "/Cselab3.jpg",
  },
  {
    name: "Soft Computing Lab",
    description:
      "Soft Computing lab uses Statistica software for supervised learning analysis and data mining and also uses the LAN Trainer kit for network topology. The lab is focusing on IoT-related specific courses.",
    image: "/Cselab4.jpg",
  },
  {
    name: "Research Scholar Lab",
    description:
      "The lab uses Statistica for supervised learning analysis and data mining work and Qualnet simulator for network simulation work.",
    image: "",
  },
  {
    name: "Image Processing Lab",
    description:
      "Hardware: Image Capture Camera, Image Grabber Card along with PCs. The analysis and manipulation of a digital image, in order to get an enhanced image or to extract some useful information from it with the help of ‘Image Processing Software’.",
    image: "",
  },
  {
    name: "Computing Lab-3",
    description:
      "This lab facilitates training, research, experiments in the domain of software testing, mobile application development, cloud computing, network security, Big Data analysis, and Industrial Automation. This also deals with some courses like Data Structure and Algorithms, Operating System, Compiler Design, and Computer Graphics.",
    image: "",
  },
  {
    name: "Computing Lab-4",
    description:
      "This deals with some courses like Data Structure and Algorithms, Operating System, Compiler Design, and Computer Graphics.",
    image: "",
  },
];

const CSELabPage = () => {
  return (
    <div>
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">LABS</h2>
          </div>
          <div className="w-full mt-4">
            {labsData.map((lab, index) => (
              <div
                key={index}
                className="mb-12 flex flex-col lg:flex-row items-center lg:items-start mx-auto text-center lg:text-left max-w-6xl"
              >
                <div className="lg:w-2/3">
                  <p className="text-red-900 font-bold text-2xl mb-4">
                    {lab.name}:
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed px-6 lg:px-0">
                    {lab.description}
                  </p>
                </div>

                {lab.image && (
                  <div className="mt-6 lg:mt-0 lg:ml-8 flex justify-center">
                    <Image
                      src={lab.image}
                      alt={lab.name}
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg border border-gray-300 bg-rose-100 p-2"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSELabPage;
