import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg",
      subheading: "",
      text: "The Student Activity Centre (SAC) was built with the vision to provide support for multiple kinds of student activities. It was initiated by the honorable Director of NIT Patna, Prof. Asok De to encourage participation in extra-curricular activities to promote overall grooming of personality of the students. Various cultural activities and indoor games are conducted in the SAC. This enormous building has numerous rooms each of which is dedicated to activities related to sports and extra-curricular activities. Student offices for the same are also hosted in the SAC. Also, many open spaces have been specifically designed in the SAC to promote community interaction. A huge stadium adjoins the SAC in which football and cricket matches are held. The administration believes that these activities will help the students to provide a dynamic edge to their performances in the professional world and build a truly multi-faceted personality.",
    },
    
    
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">

      <Head>
        <title>SAC</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-14 text-red-800">
      Student Activity Center
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div key={index} className="flex flex-col md:flex-row  gap-10 items-center">
            {index % 2 === 0 ? (
              <>
              <div className="md:pl-4 ">
                  <h2 className="text-xl font-bold mb-2 text-neutral-800 items-start" >{place.subheading}</h2>
                  <p className="text-gray-600 ">{place.text}</p>
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
      title: 'SAC | NIT Patna',
    }
  }