
import Image from "next/image";
import React from "react";

const labsData = [
  {
    name: "Elements of Electrical Engineering Lab",
    description:
      "This lab introduces students to the basic concepts and experiments in electrical engineering, including circuit analysis, measurements, and fundamental laws.",
    image: "/eelab1.jpg",
  },
  {
    name: "Electrical Machines Lab",
    description:
      "The lab provides hands-on experience with various electrical machines such as transformers, DC machines, and induction motors, focusing on their operation and characteristics.",
    image: "/eelab2.jpg",
  },
  {
    name: "Power System Protection Lab",
    description:
      "This lab is equipped with modern relays and protection devices to study the protection of power systems against faults and abnormal conditions.",
    image: "/eelab3.jpg",
  },
  {
    name: "Power Electronics Lab",
    description:
      "Students perform experiments on power electronic converters, inverters, and drives, learning about their applications in industry and renewable energy.",
    image: "/eelab4.jpg",
  },
  {
    name: "Computer Lab",
    description:
      "The lab is equipped with computers and software for simulation, analysis, and design of electrical systems, including MATLAB, LABView, and MPLAB.",
    image: "",
  },
  {
    name: "Microprocessor and Microcontroller Lab",
    description:
      "This lab focuses on programming and interfacing microprocessors and microcontrollers for various control and automation applications.",
    image: "",
  },
  {
    name: "Network Theory Lab",
    description:
      "Experiments in this lab help students understand the behavior of electrical networks and the application of network theorems.",
    image: "",
  },
  {
    name: "Control System Lab",
    description:
      "Students design and analyze control systems using hardware and simulation tools, with applications in automation and robotics.",
    image: "",
  },
  {
    name: "Measurement Lab",
    description:
      "This lab covers the principles and applications of electrical measurements, including the use of various instruments and transducers.",
    image: "",
  },
  {
    name: "High Voltage Lab",
    description:
      "Experiments in this lab involve testing and analysis of high voltage equipment and insulation systems.",
    image: "",
  },
  {
    name: "SCADA Lab",
    description:
      "The SCADA lab provides facilities for supervisory control and data acquisition, focusing on power system monitoring and automation.",
    image: "",
  },
  {
    name: "Industrial Drives and Control Lab",
    description:
      "This lab is dedicated to the study and control of industrial electrical drives, including hardware simulators and advanced controllers.",
    image: "",
  },
  {
    name: "Advanced Instrumentation Lab",
    description:
      "Research and development of advanced instrumentation systems for quality analysis and automation, including electronic tongue and NIR spectroscopy.",
    image: "",
  },
  {
    name: "Power System Lab (Upcoming)",
    description:
      "A new lab focusing on advanced power system analysis, smart grid, and renewable integration is under development.",
    image: "",
  },
];

const EELabPage = () => {
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

export default EELabPage;