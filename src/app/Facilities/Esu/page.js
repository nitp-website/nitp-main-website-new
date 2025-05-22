        import Head from "next/head";
    
    export default function Home() {
      const places = [
        {
          image: "https://i.postimg.cc/pdKKtLRL/Fr-Bw-Oz-Ma-MAAz-Ujt.jpg",
          subheading: "Estate Service Unit (ESU)",
          text: `Complaint Form:`,
          formLink: "https://drive.google.com/file/d/1ieNmS6_xYi8Azm2HAU9tikhDcQQXGTCT/view?usp=drive_link",
        },
      ];
    
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-10 px-2 md:px-20">
          <Head>
            <title>Estate Service Unit (ESU) | NIT Patna</title>
          </Head>
          <h1 className="text-4xl font-extrabold text-red-800 mb-10 text-center tracking-tight drop-shadow">
            Estate Service Unit (ESU)
          </h1>
          <div className="max-w-4xl mx-auto">
            {places.map((place, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg p-6 md:p-10 gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <img
                  src={place.image}
                  alt={place.subheading}
                  className="w-full md:w-2/5 rounded-xl shadow-md object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-700">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-700 mb-4">{place.text}</p>
                  <a
                    href={place.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                  >
                    Download ESU Maintenance Complaint Form
                  </a>
                </div>
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

