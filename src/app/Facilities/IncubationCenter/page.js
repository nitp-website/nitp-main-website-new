import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "",
      subheading: "Incubation Center",
      text: `NIT Patna established the Incubation Center in order to collaborate with the government of bihar to nurture entrepreneurship. The Incubation Center facilitates networking with professional resources, including mentors, experts, investors, industry professionals, consultants and advisors. [ View Incubation Center Website ]
      `,
    },
  ];

  return (
    <div className="mx-auto pl-5 pr-5 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      

      <div className="grid grid-cols-1 md:grid-cols-1">
        {places.map((place, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  gap-10 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:pl-4 ">
                  <h2 className="text-3xl font-bold mb-2 text-red-800 items-start">
                    {place.subheading}
                  </h2>
                  <a href="https://web.nitp.ac.in/incubation_center/index.html" className="text-gray-600" target="_blank">
                  <p className="text-gray-600 whitespace-pre-line ">
                    {place.text}{" "}
                  </p>
                  </a>
                </div>
                <img
                  src={place.image}
                  alt={places.subheading}
                  className="w-3/4 md:w-2/5 rounded-md"
                />
                
              </>
            ) : (
              <>
                
                <div className="md:pr-4">
                  <h2 className="text-3xl font-bold mb-2 text-red-800">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-600 whitespace-pre-line">
                    {place.text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export async function generateMetadata({ params }) {
  return {
    title: "Incubation Center | NIT Patna",
  };
}
