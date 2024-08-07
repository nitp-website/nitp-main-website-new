import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "https://www.nitp.ac.in/static/bank-ef1a8678b3e61a7d440dd338d0e74a3d.svg",
      subheading: "Bank",
      text: `There is a functional extension branch of Allahabad Bank within the institute premises.It provides all modern banking facilities to cater to the needs of students and the employees in the campus.The fees transactions are also carried out here.Also, an ATM of Allahabad Bank is situated near the gate of the college campus to enable hassle free money withdrawal at any time.`,
    },
  ];

  return (
    <div className=" mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Bank</title>
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
    title: "Bank | NIT Patna",
  };
}
