import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://nitsri.ac.in/SliderPhoto/2044.jpg",
      subheading: "TEQUIP",
      text: `TEQIP Coordinator : Dr. M. P. Singh, Associate Professor, C.S.E.
NIT Patna has been selected for Technical Education Quality Improvement (TEQIP II) Program under subcomponent 1.1 that aims at strengthening institution to improve learning outcomes and employability of graduates. Memorandum of Understanding (MOU) between the institute and the MHRD has already been signed.

TEQIP has been instrumental in various R&D consultancy activities, infrastructure related activities and teaching learning enhancement activities. Several academically weak students have been given extra coaching to make up their deficiencies and stand up in academics. Along with that, TEQIP has sponsored several short-term courses and has given assistance to several postgraduate students to participate and present their paper in conferences. The expenditure from TEQIP fund for different activities are as follows:

EAP(Dec 2020 to March 2021)

EAP(Jan 2020 to Sept 2020)

NIT PATNA GOVERNANCE GUIDELINES DOCUMENT

INSTITUTIONAL DEVELOPMENT PROPOSAL`,
    },
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>TEQUIP</title>
      </Head>

      <div className="grid grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:pl-4">
                  <h2 className="text-3xl font-bold mb-2 text-red-800">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-600 whitespace-pre-line">
                    {place.text}
                  </p>
                </div>
                <img
                  src={place.image}
                  alt={place.subheading}
                  className="w-3/4 md:w-2/5 rounded-md"
                />
              </>
            ) : (
              <>
                <img
                  src={place.image}
                  alt={place.subheading}
                  className="w-full md:w-1/2 rounded-md"
                />
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
    title: "TEQUIP | NIT Patna",
  };
}
