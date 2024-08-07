import Head from "next/head";

export default function Home() {
  const places = [
    {
      subheading:"(A flagship program of Ministry of Education, GoI)",
      subheading2:"Regional Coordinating Institute-NIT Patna",
    },
    {
      subheading: "Vision",
      text: " Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.",
    },
    {
      subheading: "Mission",
      text: " The Mission of Unnat Bharat Abhiyan is to enable higher educational institutions to work with the people of rural India in identifying development challenges and evolving appropriate solutions for accelerating sustainable growth. It also aims to create a virtuous cycle between society and an inclusive academic system by providing knowledge and practices for emerging professions and to upgrade the capabilities of both the public and the private sectors in responding to the development needs of rural India.",
    },
    {
      subheading: "Goals",
      text: [
        "To build an understanding of the development agenda within institutes of Higher Education and an institutional capacity and training relevant to national needs, especially those of rural India.",
        "To re-emphasize the need for field work, stake-holder interactions and design for societal objectives as the basis of higher education.",
        "To stress on rigorous reporting and useful outputs as central to developing new professions.",
        "To provide rural India and regional agencies with access to the professional resources of the institutes of higher education, especially those that have acquired academic credentials in the field of science, engineering and technology, and management.",
        "To improve development outcomes as a consequence of this research. To develop new professions and practices which are beneficial to the country.",
      ]
    },
    {
      subheading: "As Regional Coordinating Institute",
      text: "The Regional Coordinating Institutions (RCIs) are identified on the basis of their earlier experience and infrastructural competence etc. Our institute is also identified as Regional Coordinating Institute in Bihar and we have 42 Participating Institutes (PIs) under our region. NIT Patna acts as a nodal center for promoting and facilitating the UBA network in the region. We are responsible for grooming the other participating institutions in their region in addition to carrying out our own village cluster activities. As RCI, we have our own login credentials to view and review the work of PIs in our region. Additionally, the RCIs have a strategic role to play, they have to identify a challenge relevant in their region / states in collaboration with PIs and the State government."
    },
    {
      subheading: "As Participating Institute",
      text: "As per the guidelines of Unnat Bharat Abhiyan (UBA), each participating institute (PI) must adopt five rural villages in their region. The role of the participating institute is to use simple and people-friendly technology to uplift their socio-economic status with the use of available human resources and natural resources in the adopted villages. Our institute has also adopted five rural villages and is giving its best for their well-being. The details of these adopted villages are given below."
    },
  ];

  const adoptedVillages = [
    { slNo: 1, village: "Sabalpur", district: "Patna" },
    { slNo: 2, village: "Juthli", district: "Patna" },
    { slNo: 3, village: "Panapur", district: "Patna" },
    { slNo: 4, village: "Nakta Diara", district: "Patna" },
    { slNo: 5, village: "Nadauri", district: "Patna" },
  ];

  return (
    <div className=" mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-6 bg-white bg-opacity-50 text-black">
      <Head>
        <title>Students</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">
        Unnat Bharat Abhiyaan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 items-center">
            <div className={index % 2 === 0 ? "md:pl-4" : "md:pr-4"}>
              <h2 className="text-xl font-bold mb-2 text-neutral-800">{place.subheading}</h2>
              {place.subheading2 && (
                <h2 className="text-xl font-medium mb-2 text-neutral-800">{place.subheading2}</h2>
              )}
              {Array.isArray(place.text) ? (
                <ul className="list-disc pl-6 text-gray-600">
                  {place.text.map((goal, goalIndex) => (
                    <li key={goalIndex}>{goal}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{place.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-800">Adopted Villages</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-red-950">SL No.</th>
            <th className="py-2 px-4 border-b text-red-950">Adopted Village</th>
            <th className="py-2 px-4 border-b text-red-950">District</th>
          </tr>
        </thead>
        <tbody>
          {adoptedVillages.map((village) => (
            <tr key={village.slNo} >
              <td className="py-2 px-4 border-b text-center text-black">{village.slNo}</td>
              <td className="py-2 px-4 border-b text-center text-black">{village.village}</td>
              <td className="py-2 px-4 border-b text-center text-black">{village.district}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: ' Student | NIT Patna',
  };
}
