
import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "https://i.postimg.cc/9FB0Sf2G/library.jpg",
      subheading: "Library ",
      text: `The Central library of the institute owns a vast stock of over 75,000 books catering to the needs of all the relevant fields of engineering. It has a resourceful stock of over 10,000 computer related books and clearly demarcated section for every engineering branch and architecture. In addition to the engineering pertinent books, the central library is self-sufficient in a vivid category of other business and current affairs related magazines, pamphlets and journals which includes TIME and NEWSWEEK.The Central Library is fully automated and all operations are performed with the help of Libsys - Library Automation Software.The students can issue a sufficient no.of books for use throughout the semester and an additional no.of books for special reference.`,
    },
    {
      image: "",
      subheading: "E-RESOURCE SECTION",
      text: `It also maintains an E-Resource Section which subscribes and maintains a wide collection of highly acclaimed e-journals published by some big names like:
- AMERICAN SOCIETY OF CIVIL ENGINEERS(ASCE)
- AMERICAN SOCIETY OF MECHANICAL ENGINEERS(ASME)
- IEL
- IEEE
- NATURE
- ACM
- INDIAN STANDARD
- SPRINGER
...and many more. The total collection of e-journals in the E-Resource Section numbers to more than 2700 of diverse categories. This section is mainly used for vital information access and research.`,
    },
    {
      image: "",
      subheading: "Special Features of Central Library ",
      text: `Separate zones for every department.
Separate section for SC/ST under the name of B.R. Ambedkar section.
Separate section for e-journals called the E-Resource Section.
Calm milieu and spacious studying facility within the library.
Centrally air-conditioned.
Library is the member of INDEST and DELNET.`,
    },
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Library</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
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
                  <p className="text-gray-600 whitespace-pre-line ">
                    {place.text}{" "}
                  </p>
                </div>
                <img
                  src={place.image}
                  alt=""
                  className="w-3/4 md:w-2/5 rounded-md"
                />
              </>
            ) : (
              <>
                <img
                  src={place.image}
                  alt=""
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
    title: "Library | NIT Patna",
  };
}
