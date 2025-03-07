import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://i.postimg.cc/9FB0Sf2G/library.jpg",
      subheading: "Library",
      text: `The Central library of the institute owns a vast stock of over 75,000 books catering to the needs of all the relevant fields of engineering. It has a resourceful stock of over 10,000 computer related books and clearly demarcated section for every engineering branch and architecture. In addition to the engineering pertinent books, the central library is self-sufficient in a vivid category of other business and current affairs related magazines, pamphlets and journals which includes TIME and NEWSWEEK.The Central Library is fully automated and all operations are performed with the help of Libsys - Library Automation Software.The students can issue a sufficient no.of books for use throughout the semester and an additional no.of books for special reference.`,
    },
    {
      image: "https://i.postimg.cc/9FB0Sf2G/library.jpg",
      subheading: "E-RESOURCE SECTION",
      text: `It also maintains an E-Resource Section which subscribes and maintains a wide collection of highly acclaimed e-journals published by some big names like:

• AMERICAN SOCIETY OF CIVIL ENGINEERS(ASCE)
• AMERICAN SOCIETY OF MECHANICAL ENGINEERS(ASME)
• IEL
• IEEE
• NATURE
• ACM
• INDIAN STANDARD
• SPRINGER

...and many more. The total collection of e-journals in the E-Resource Section numbers to more than 2700 of diverse categories. This section is mainly used for vital information access and research.`,
    },
    {
      image: "https://i.postimg.cc/9FB0Sf2G/library.jpg",
      subheading: "Special Features of Central Library",
      text: `• Separate zones for every department
• Separate section for SC/ST under the name of B.R. Ambedkar section
• Separate section for e-journals called the E-Resource Section
• Calm milieu and spacious studying facility within the library
• Centrally air-conditioned
• Library is the member of INDEST and DELNET`,
    },
  ];

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Head>
          <title>Library | NIT Patna</title>
        </Head>

        <h1 className="text-4xl font-bold text-center text-red-900 mb-12">
          Central Library
        </h1>

        <div className="space-y-16">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {place.image && (
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={place.image}
                        alt={place.subheading}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className={`lg:w-${place.image ? '1/2' : 'full'} p-8`}>
                  <h2 className="text-2xl font-bold text-red-900 mb-6">
                    {place.subheading}
                  </h2>
                  <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                    {place.text.split('•').map((point, i) => (
                      point.trim() && (
                        <div key={i} className="flex items-start mb-3">
                          {i > 0 && (
                            <>
                              <span className="text-red-900 mt-1 mr-2">•</span>
                              <p className="text-gray-600">{point.trim()}</p>
                            </>
                          )}
                          {i === 0 && <p className="text-gray-600">{point.trim()}</p>}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Library | NIT Patna",
  };
}
