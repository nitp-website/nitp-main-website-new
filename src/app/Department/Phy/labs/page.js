import Image from "next/image";
import React from "react";

const labsData = [
  {
    name: "",
    description: "",
    image: "",
  },
  // Add more lab items as needed
];

const PhyLabPage = () => {
  return (
    <div>
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">LABS</h2>
          </div>
          <div className="w-full mt-4">
            {labsData.map((lab, index) => {
              const hasAnyData =
                lab.name?.trim() || lab.description?.trim() || lab.image?.trim();

              if (!hasAnyData) {
                return (
                  <div
                    key={index}
                    className="text-center text-gray-600 text-lg py-8"
                  >
                    Data not available
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="mb-12 flex flex-col lg:flex-row items-center lg:items-start mx-auto text-center lg:text-left max-w-6xl"
                >
                  <div className="lg:w-2/3">
                    {lab.name && (
                      <p className="text-red-900 font-bold text-2xl mb-4">
                        {lab.name}
                      </p>
                    )}
                    {lab.description && (
                      <p className="text-gray-700 text-sm leading-relaxed px-6 lg:px-0">
                        {lab.description}
                      </p>
                    )}
                  </div>

                  {lab.image && (
                    <div className="mt-6 lg:mt-0 lg:ml-8 flex justify-center">
                      <Image
                        src={lab.image}
                        alt={lab.name || "Lab image"}
                        width={300}
                        height={300}
                        className="rounded-lg shadow-lg border border-gray-300 bg-rose-100 p-2"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhyLabPage;
