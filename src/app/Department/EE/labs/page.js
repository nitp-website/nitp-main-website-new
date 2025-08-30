import Image from "next/image";
import React from "react";

const labsData = [
  {
    name: "Elements of Electrical Engineering Lab",
    description:
      "This lab provides hands-on experience with basic electrical components, circuits, and measurement techniques, helping students understand the fundamentals of electrical engineering.",
    image: "/eelab1.jpg",
  },
  {
    name: "Electrical Machines Lab",
    description:
      "Students learn about different types of electrical machines, their construction, operation, and performance characteristics through experiments and demonstrations.",
    image: "/eelab2.jpg",
  },
  {
    name: "Power System Protection Lab",
    description:
      "This lab focuses on the study and testing of protective relays, circuit breakers, and other equipment used for safeguarding power systems.",
    image: "/eelab3.jpg",
  },
  {
    name: "Power Electronics Lab",
    description:
      "Experiments in this lab cover the operation and application of power electronic devices such as rectifiers, inverters, choppers, and converters.",
    image: "/eelab4.jpg",
  },
  {
    name: "Computer Lab",
    description:
      "The computer lab is equipped for simulation, analysis, and design of electrical systems using specialized software tools.",
    image: "",
  },
  {
    name: "Microprocessor and Microcontroller Lab",
    description:
      "Students gain practical knowledge of microprocessor and microcontroller programming, interfacing, and applications.",
    image: "",
  },
  {
    name: "Network Theory Lab",
    description:
      "This lab helps students understand network theorems, circuit analysis, and synthesis through practical experiments.",
    image: "",
  },
  {
    name: "Control System Lab",
    description:
      "Experiments in this lab involve modeling, analysis, and design of control systems using hardware and simulation tools.",
    image: "",
  },
  {
    name: "Measurement Lab",
    description:
      "Students learn about various electrical measurement techniques and instruments, including calibration and error analysis.",
    image: "",
  },
  {
    name: "High Voltage Lab",
    description:
      "This lab provides facilities for testing and studying high voltage phenomena, insulation, and breakdown mechanisms.",
    image: "",
  },
  {
    name: "SCADA Lab",
    description:
      "Supervisory Control and Data Acquisition (SCADA) systems are studied and implemented for monitoring and controlling electrical networks.",
    image: "",
  },
  {
    name: "Industrial Drives and Control Lab",
    description:
      "Focuses on the study and control of industrial electrical drives, including motors and their control systems.",
    image: "",
  },
  {
    name: "Advanced Instrumentation Lab",
    description:
      "Research-oriented lab for developing and testing advanced instrumentation systems for electrical and electronic applications.",
    image: "",
  },
  {
    name: "Power System Lab (upcoming)",
    description:
      "A new lab being developed for advanced studies and experiments in power systems engineering.",
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