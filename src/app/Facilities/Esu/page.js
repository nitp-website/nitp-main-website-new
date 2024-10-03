import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "https://i.postimg.cc/pdKKtLRL/Fr-Bw-Oz-Ma-MAAz-Ujt.jpg",

      subheading: "Estate Service Unit (ESU)",
      text: `Complaint Form:
      <a href="https://drive.google.com/file/d/1ieNmS6_xYi8Azm2HAU9tikhDcQQXGTCT/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-black  hover:text-red-800">Click here to download ESU Maintenance Complaint form, kindly fill the form and submit</a>
      .`,
    },
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Estate Service Unit (ESU) | NIT Patna</title>
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
                  <p
                    className="text-gray-600 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: place.text }}
                  />
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
                  <p
                    className="text-gray-600 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: place.text }}
                  />
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
    title: "Estate Service Unit (ESU) | NIT Patna",
  };
}