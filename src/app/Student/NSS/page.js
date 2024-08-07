import Head from "next/head";

export default function Home() {
  const places = [
    {
      subheading: "National Service Scheme",
      text: "The National Service Scheme (NSS) was launched in 1969 and is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of the Government of India aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community linkage. The NSS chapter at NIT Patna follows the cardinal principle of the NSS programme which is aimed at organising events by the students themselves such that both students and teachers get a sense of involvement in the tasks of nation building through their combined participation in community service. The programme aims to inculcate social welfare in students, and to provide service to society without bias. NSS volunteers work to ensure that everyone who is needy gets help to enhance their standard of living and lead a life of dignity.",
    },
    
    
  ];

  return (
    <div className=" mx-auto pl-4 pr-4 md:pl-20 md:pr-20 pt-6 bg-white bg-opacity-50">

      <Head>
        <title>Students</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">
      National Service Scheme
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