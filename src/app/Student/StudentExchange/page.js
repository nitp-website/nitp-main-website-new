import Head from "next/head";

export default function Home() {
  const places = [
    {
      subheading: "Student Exchange Program",
      text: "National Institute of Technology (NIT), Patna has recently signed a memorandum of understanding (MoU) with the Handong Global University, Pohang, South Korea for exchange of students, faculty and research. The first six-month exchange programme will be funded by UNICEF. The research areas in focus are urban planning, urban development, infrastructure development and electrical engineering, all of which relate most directly to Bihar’s immediate needs. South Korea is known the world over for its highly advanced monorail system which also has a low impact on traffic flow on roads under construction. Automated driverless trains are another feature of the monorail; an Indian student may want to study. Apart from the concrete advantages, exchange of students and faculty and exposure to the teaching practices in South Korea is likely to have enormous impact on engineering education as being imparted at NIT Patna in the coming days.",
    },
    
    
  ];

  return (
    <div className=" mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-6 bg-white bg-opacity-50">

      <Head>
        <title>Students</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">
      Student Exchange Program
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div key={index} className="flex flex-col md:flex-row  gap-4 items-center">
            {index % 2 === 0 ? (
              <>
              <div className="md:pl-4 ">
                  <h2 className="text-xl font-bold mb-2 text-neutral-800 items-start" >{place.subheading}</h2>
                  <p className="text-gray-600 ">{place.text}</p>
                </div>
             
                
              </>
            ) : (
              <>
                
               
                <div className="md:pr-4">
                  <h2 className="text-xl font-bold mb-2 text-neutral-800">{place.subheading}</h2>
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
      title: ' Student | NIT Patna',
    }
  }