import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://i.postimg.cc/gJ7F1PGs/prabhat-kumar.png",
      subheading: "",
      text: `Prof. Prabhat Kumar : Professor & Head (CCIS)
Dr. Santosh Kumar : Scientific Officer
Ritesh Kumar : Technical Assistant
Paritosh Bhushan : Technical Assistant
Coomar Kislay : Technical Assistant

The institute IT Service Unit is equipped with most modern and advanced infrastructure to provide services to cater to the computing and networking needs of the of the institute. In addition to providing IT Solution, this units taking care of existing entire campus network (offices as well residential flats), Institute Servers, Web Server and other IT services like Mail, Webserver to meet the academic requirements and research purpose. High speed and uninterrupted Internet access is provide across the campus through 1-Gbps internet connectivity by POWERGRID & 1-Gbps through NKN.

Facilities : 
1 .	High Speed Wi-Fi & Wired Internet Connectivity
2 . CCTV surveillance system
3	. Bio Matric Authentication Devices
4 . IP Phones through ready Network
5 . EPBAX
`,
    },
  ];

  return (
    <div className="mx-auto pl-5 pr-5 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>IT Services Unit</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-14 text-red-800">
        It Services Unit
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  gap-10 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:pl-4 ">
                  <h2 className="text-xl font-bold mb-2 text-neutral-800 items-start">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-600 "> {place.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}</p>
                </div>
                <img
                  src={place.image}
                  alt={place.subheading}
                  className="w-3/4 md:w-1/4 rounded-md"
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
                  <h2 className="text-xl font-bold mb-2 text-neutral-800">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-600">{place.text}</p>
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
    title: "IT Services Unit | NIT Patna",
  };
}
