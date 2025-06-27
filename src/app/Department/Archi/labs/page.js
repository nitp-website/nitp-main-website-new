import Image from "next/image";
import React from "react";

const labsData = [
  {
    name: "Building Material Lab",
    description: "This laboratory is well-equipped with modern testing equipment for analyzing various building materials including concrete, steel, timber, and other construction materials. Students learn to test material properties, strength characteristics, and quality control procedures essential for architectural practice.",
    image: "/alab1.jpg",
  },
  {
    name: "Climatology Lab",
    description: "The Climatology Laboratory focuses on understanding climate data, weather patterns, and environmental factors that influence architectural design. Students learn to analyze climate conditions, solar radiation, wind patterns, and their impact on building performance and energy efficiency.",
    image: "/alab2.jpg",
  },
  {
    name: "Computer Lab",
    description: "A state-of-the-art computer laboratory equipped with latest software for architectural design including AutoCAD, Revit, SketchUp, 3ds Max, and other BIM tools. Students develop digital design skills, 3D modeling, rendering, and visualization techniques essential for modern architectural practice.",
    image: "/alab3.jpg",
  },
  {
    name: "Design Studio",
    description: "The Design Studio provides spacious workspace for architectural design projects, model making, and creative exploration. Students work on various design assignments, develop drawing skills, and create physical models to understand spatial relationships and design concepts.",
    image: "/alab4.jpg",
  },
  {
    name: "Workshop Lab",
    description: "The Workshop Laboratory provides hands-on experience with construction techniques, material handling, and basic building processes. Students learn practical skills in carpentry, masonry, and other construction trades to understand the physical aspects of building construction.",
    image: "/alab5.jpg",
  },
];

const ArchiLabPage = () => {
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

export default ArchiLabPage;
