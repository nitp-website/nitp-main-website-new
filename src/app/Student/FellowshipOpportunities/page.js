import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "",
      subheading: "",
      text: "",
    },
    
    
  ];

  return (
    <div className=" mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">

      <Head>
        <title>Fellowship Opportunities
        </title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-14 text-red-800">
      Fellowship Opportunities

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
      title: 'Fellowship Opportunities | NIT Patna',
    }
  }