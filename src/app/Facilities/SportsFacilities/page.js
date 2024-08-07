import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "https://scontent.fpat1-1.fna.fbcdn.net/v/t31.18172-8/12377572_1138079519557257_6285733642021494490_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0327a3&_nc_ohc=NNbhblsWeSEQ7kNvgEcYGEV&_nc_ht=scontent.fpat1-1.fna&oh=00_AYCyLXIJ1EMGI6fUWZmI378uswJjdOrq91hliGAW8NE45Q&oe=66AF14F1",
      subheading: "Sports Facilities",
      text: `A healthy mind resides in a healthy body. The students are encouraged to take up sports actively. A huge ground is maintained meticulously for playing cricket and football. A Tennis court, Basketball court and Badminton court are also present. Several other sports such as Table Tennis, Athletics, Volleyball and others are also conducted. Students of the institute have taken part in various Inter-College tournaments and matches and have shown exemplary performance. They are trained by an experienced coach. An intramural Sports meet allows them to show their mettle and broaden their horizons. The institute believes that playing sports helps the students to build a spirit of teamwork and sportsmanship which will help them to lead better lives.`,
    },
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Sports Facilities</title>
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
    title: "Sports Facilities | NIT Patna",
  };
}
