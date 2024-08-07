import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "https://i.postimg.cc/VLw5DCxf/labimg.jpg",
      subheading: "Laboratories",
      text: `Technical knowledge is of no worth without practical approach.Every department has laboratories which provide practical experience related to the subjects studied. The students are expected to take the lab courses for better learning. Various instruments, machines and computers are provided in the labs to facilitate the lab work. Lab assistants and Professor in-charge effectively guide the students through their practical work. Every department has an operational computer lab of its own to sharpen programming skills and to get hands - on experience with the use of the softwares required in their respective fields of concern. The labs are equipped with the latest technology and are periodically updated.`,
    },
    {
      image: "",
      subheading: "Workshops",
      text: `A huge workshop with all required equipments, machines and tools is spread over a large area in the college.Work related to carpentry, blacksmithy, foundry, fitting etc.is carried out.All the activities are carried out under the vigilance and guidance of experienced instructors.`,
    },
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Laboratories</title>
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
                  alt={place.subheading}
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
    title: "Laboratories | NIT Patna",
  };
}
