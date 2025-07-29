'use client';






export default function Home() {
  const places = [
    {
      image:
        "https://timesofindia.indiatimes.com/photo/59385226.cms",
      subheading: "Bank",
      text: `There is a functional extension branch of Allahabad Bank within the institute premises. It provides all modern banking facilities to cater to the needs of students and the employees in the campus. The fees transactions are also carried out here. Also, an ATM of Allahabad Bank is situated near the gate of the college campus to enable hassle free money withdrawal at any time.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-10 px-2 md:px-20">
      <h1 className="text-4xl font-extrabold text-red-800 mb-10 text-center tracking-tight drop-shadow">
        Bank Facility at NIT Patna
      </h1>
      <div className="max-w-4xl mx-auto">
        {places.map((place, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg p-6 md:p-10 gap-8"
          >
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-700">
                {place.subheading}
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {place.text}
              </p>
            </div>
            <img
              src={place.image}
              alt={place.subheading}
              className="w-full md:w-2/5 rounded-xl shadow-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
