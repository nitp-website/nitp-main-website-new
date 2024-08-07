import Head from "next/head";

export default function Home() {
  const places = [
    {
      subheading: "Entrepreneurship Cell, NIT Patna",
      subheading2:"(Making Dreamers into Entrepreneurs)",
      subheading3:"Prof.-In-Charge: Dr. Om Ji Shukla",
      text: "Entrepreneurship Cell, NIT Patna is a non-profit college club run by students of NIT Patna, founded in 2013 with the objective of increasing the spirit of Entrepreneurship among students of National Institute of Technology Patna. Entrepreneurship Cell NIT Patna helps the aspiring entrepreneurs to start and grow their businesses by creating a pathway of various opportunities like interactive sessions with professionals and founders, business competitions, business quizzes and financial awareness programs. This helps foster entrepreneurial thinking, promote business knowledge and increase confidence in students. Our vision is to help students who have an idea, product and burning desire by providing convincing skills, market exposure and investors for their start-up. This cell helps students to understand the business world by actually working in a start-up.",
    },
    
    
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-6 bg-white bg-opacity-50">

      <Head>
        <title>Students</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">
      Entrepreneurship Cell, NIT Patna
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div key={index} className="flex flex-col md:flex-row  gap-4 items-center">
            {index % 2 === 0 ? (
              <>
              <div className="md:pl-4 ">
                  <h2 className="text-2xl font-bold mb-2 text-red-800 items-start" >{place.subheading}</h2>
                    <h2 className="text-xl font-medium mb-2 text-red-800 items-start" >{place.subheading2}</h2>
                    <h2 className="text-xl font-bold mb-2 text-red-800 items-start" >{place.subheading3}</h2>
                  <p className="text-gray-600 ">{place.text}</p>
                </div>
             
                
              </>
            ) : (
              <>
                
               
                <div className="md:pr-4">
                  <h2 className="text-2xl font-bold mb-2 text-red-800">{place.subheading}</h2>
                    <h2 className="text-xl font-medium mb-2 text-red-800">{place.subheading2}</h2>
                    <h2 className="text-xl font-bold mb-2 text-red-800">{place.subheading3}</h2>
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