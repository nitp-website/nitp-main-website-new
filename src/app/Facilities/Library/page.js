

import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://i.postimg.cc/9FB0Sf2G/library.jpg",
      subheading: "Library",
      text: `The Central library of the institute owns a vast stock of over 75,000 books catering to the needs of all the relevant fields of engineering. It has a resourceful stock of over 10,000 computer related books and clearly demarcated section for every engineering branch and architecture. In addition to the engineering pertinent books, the central library is self-sufficient in a vivid category of other business and current affairs related magazines, pamphlets and journals which includes TIME and NEWSWEEK. The Central Library is fully automated and all operations are performed with the help of Libsys - Library Automation Software. The students can issue a sufficient no. of books for use throughout the semester and an additional no. of books for special reference.`,
    },
    {
      image: "https://i.postimg.cc/nhWY4C65/Chat-GPT-Image-May-22-2025-03-35-11-PM.png",
      subheading: "E-RESOURCE SECTION",
      text: `It also maintains an E-Resource Section which subscribes and maintains a wide collection of highly acclaimed e-journals published by some big names like:
- AMERICAN SOCIETY OF CIVIL ENGINEERS (ASCE)
- AMERICAN SOCIETY OF MECHANICAL ENGINEERS (ASME)
- IEL
- IEEE
- NATURE
- ACM
- INDIAN STANDARD
- SPRINGER
...and many more. The total collection of e-journals in the E-Resource Section numbers to more than 2700 of diverse categories. This section is mainly used for vital information access and research.`,
    },
    {
      image: "https://i.postimg.cc/YqGS40zj/Chat-GPT-Image-May-22-2025-03-46-32-PM.png",
      subheading: "Special Features of Central Library",
      text: `• Separate zones for every department.
• Separate section for SC/ST under the name of B.R. Ambedkar section.
• Separate section for e-journals called the E-Resource Section.
• Calm milieu and spacious studying facility within the library.
• Centrally air-conditioned.
• Library is the member of INDEST and DELNET.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-10 px-2 md:px-20">
      <Head>
        <title>Library</title>
      </Head>
      <h1 className="text-4xl font-extrabold text-red-800 mb-10 text-center tracking-tight drop-shadow">
        Central Library, NIT Patna
      </h1>
      <div className="space-y-12 max-w-5xl mx-auto">
        {places.map((place, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg p-6 md:p-10 gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {place.image ? (
              <img
                src={place.image}
                alt={place.subheading}
                className="w-full md:w-2/5 rounded-xl shadow-md object-cover"
              />
            ) : (
              <div className="hidden md:block md:w-2/5"></div>
            )}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-700">
                {place.subheading}
              </h2>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-justify">
                {place.text}
              </p>
            </div>
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
