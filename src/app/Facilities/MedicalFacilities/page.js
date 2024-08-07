import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "https://i.postimg.cc/Jz40WW7S/medical.jpg",
      subheading: "Medical Facilities",
      text: `Two permanent doctor has a fixed chamber within the institute premises. He can be consulted by the students and employees for any health related problems on every working day free of cost.

Profile of the health consultants:
Dr.Vikas Kumar Raj
Senior Medical Officer
MBBS, MD, MBA(HCA)
PGD in DP & R and Family Medicine
PGC in Hospital Management Dr.V K Raj

Dr.Santosh Kumar Sudhakar
Medical Officer
MBBS
Ex - Resident of DR.RML Hospital
New Delhi Dr.S K Sudhakar

The institute also maintains a 24x7 ambulance which is used for transferring patients from the institute to Patna Medical College and Hospital(PMCH) in case of any emergency.

`,
    },
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Medical Facilities</title>
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
                  alt={places.subheading}
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
    title: "Medical Facilities | NIT Patna",
  };
}
