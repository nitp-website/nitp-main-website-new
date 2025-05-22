
import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://i.postimg.cc/VLw5DCxf/labimg.jpg",
      subheading: "Laboratories",
      text: `Technical knowledge is of no worth without practical approach. Every department has laboratories which provide practical experience related to the subjects studied. The students are expected to take the lab courses for better learning. Various instruments, machines and computers are provided in the labs to facilitate the lab work. Lab assistants and Professor in-charge effectively guide the students through their practical work. Every department has an operational computer lab of its own to sharpen programming skills and to get hands-on experience with the use of the softwares required in their respective fields of concern. The labs are equipped with the latest technology and are periodically updated.`,
    },
    {
      image: "",
      subheading: "Workshops",
      text: `A huge workshop with all required equipments, machines and tools is spread over a large area in the college. Work related to carpentry, blacksmithy, foundry, fitting etc. is carried out. All the activities are carried out under the vigilance and guidance of experienced instructors.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-10 px-2 md:px-20">
      <Head>
        <title>Laboratories</title>
      </Head>
      <h1 className="text-4xl font-extrabold text-red-800 mb-10 text-center tracking-tight drop-shadow">
        Laboratories & Workshops
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
    title: "Laboratories | NIT Patna",
  };
}