"use client";
import { useState, useEffect } from "react";

const Allhostels = [
  {
    name: "Ganga Hostel",
    seater: "",
    gender: "Female",
    capacity: "500",
    images: [
      "https://lh3.googleusercontent.com/d/1iQNbzZNZlK0ers42tTvL5kn7hGFhkdR4",
      "https://lh3.googleusercontent.com/d/1g-ui6ih8j8cJVGbMPVwtF7g79r3b6yy1",
      "https://lh3.googleusercontent.com/d/1iEcDjtZz2RAbDWgbmxIUh_8il--QdFnV",
      "https://lh3.googleusercontent.com/d/1EiYMsqcs0TSFd7X5OUmgXQWaZQAuq4Qf",
    ],
    description: `Ganga Hostel is one of the two hostels which is abode to the female students of NIT Patna. The hostel consists of around 180 rooms with spacious corridors. Hostel constitutes single rooms, twin rooms, and dormitories, accommodating around 500 boarders. The Ganga Hostel mess is fairly large and spacious as it caters to a rather huge population. it can house a total of 320 boarders at a time.`,
    contacts: [
      {
        name: "Dr. Lini Dev K",
        designation: "Warden",
        mobile: "9677142079",
        email: "linisubheesh@nitp.ac.in",
      },
      {
        name: "Dr. Supriya Kumari",
        designation: "Asst. Warden",
        mobile: "7488501191",
        email: "supriya.km24@nitp.ac.in",
      },
      {
        name: "Anupma Kumari",
        designation: "Assistant",
        mobile: "6287099311",
        email: "",
      },
      {
        name: "Shazia Perween",
        designation: "Office Assistant",
        mobile: "6201565956",
        email: "",
      },
      {
        name: "Pramila Devi",
        designation: "Office Attendant",
        mobile: "9199804108",
        email: "",
      },
    ],
  },
  {
    name: "Sone Hostel",
    seater: "Single-Seater",
    gender: "Male",
    capacity: "410+",
    images: [
      "https://lh3.googleusercontent.com/d/1RyMmyJ4RHCZIoxQiFyAIV_OI1fNLueBW",
      "https://lh3.googleusercontent.com/d/1v1aGtkCHyuJ7P2I6mdUtSA2k8hNNCKad",
      "https://lh3.googleusercontent.com/d/1H-ScU0XPeRxrkYjOptxfW8Zvk2H2gG1u",
      "https://lh3.googleusercontent.com/d/191X9U9DAkJGPtYDABQ0B7Sh7ZsLNq9PR",
      "https://lh3.googleusercontent.com/d/1w69gGhnqezPH6YMMpmziMCAhpQFj2m8u",
      "https://lh3.googleusercontent.com/d/1RmWozOyRc4fasM8snz6bpvwSqe5pBB8r",
    ],
    description: `Sone Hostel is an abode to 410+ residents exclusively only for first year students. It has always been a popular choice among the students owing to its spacious rooms distributed in 2 blocks A and B. The hall has a reading room on the ground floor with a fitness room adjacent to it and a Television Room. The Hostel constitute spacious mess and an indoor playground for sports and other activities.`,
    contacts: [
      {
        name: "Dr. Chetan Kumar Hirwani",
        designation: "Warden",
        mobile: "9691406125",
        email: "chetank.me@nitp.ac.in",
      },
      {
        name: "Dr. Satyajit Mondal",
        designation: "Asst. Warden",
        mobile: "9804874257",
        email: "satyajit.ce@nitp.ac.in",
      },
      {
        name: "Gopal Chandra Vishwakarma",
        designation: "Office Attendant",
        mobile: "9795355541",
        email: "",
      },
    ],
  },
  {
    name: "Kosi Hostel",
    seater: "Single-Seater",
    gender: "Male",
    capacity: "322",
    images: [
      "https://lh3.googleusercontent.com/d/1tc3VWjvN0CsUjAlbxvnoULeIetFSHFNA",
      "https://lh3.googleusercontent.com/d/1YGctsCG3uN1fG8lN5GcBf6vFVUheNGoH",
      "https://lh3.googleusercontent.com/d/1QoGMGBYUMsSV_sx9YLlfUblXXhTPCYcj",
      "https://lh3.googleusercontent.com/d/15t_j40M-N9wkAZSpqrRqS79S3YOL_TuR",
    ],
    description: `The Kosi Hostel accommodates PhD Scholars along with MCA Students with bigger rooms. The Kosi Hostel for long has been the preferred choice for students. This hostel has an approximate count of over 90 rooms.`,
    contacts: [
      {
        name: "Dr. Ambrish Maurya",
        designation: "Warden",
        mobile: "9410474827",
        email: "amaurya.me@nitp.ac.in",
      },
      {
        name: "Dr. Sandeep Kumar",
        designation: "Asstt. Warden",
        mobile: "",
        email: "Sandeep.ar@nitp.ac.in",
      },
      {
        name: "Amar Kumar",
        designation: "Office Assistant",
        mobile: "8210266954",
        email: "",
      },
    ],
  },
  {
    name: "Kosi Extension Hostel",
    gender: "Male",
    capacity: "100+",
    images: [
      "https://lh3.googleusercontent.com/d/1DRqGh7XYuDlQuwfJrh2Neg01Yuxwjx-p",
    ],
    description: `The most beautiful of all the halls of residences, situated in the easternmost part of the institute. The atmosphere of this hostel is peaceful and it offers accommodation to freshers. It has inhouse facility of the playground and other lush green environments. The Hostel has a well-maintained garden in the vast open space at the front, which has benches and pathways for boarders.`,
    contacts: [
      {
        name: "Dr. Amitesh Kumar",
        designation: "Warden",
        mobile: "7840809129",
        email: "Amitesh.ee@nitp.ac.in",
      },
      {
        name: "Dr. Anil Kumar Sharma",
        designation: "Asstt. Warden",
        mobile: "",
        email: "aks.ce@nitp.ac.in",
      },
      {
        name: "Jitendra Kumar",
        designation: "Office Assistant",
        mobile: "8651677253",
        email: "",
      },
    ],
  },
  {
    name: "Brahmaputra Hostel",
    gender: "Male",
    seater: "Single & Multi-Seater",
    capacity: "1200+",
    images: [
      "https://lh3.googleusercontent.com/d/1quMxIYw9WULx_a2fG-jTNcpWlJKUcJ1O",
      "https://lh3.googleusercontent.com/d/16n1mQLlBm2iRidpkTN3nKdB7D360Wr4P",
      "https://lh3.googleusercontent.com/d/169jwIsifASgskIKFRbX9ahbZb03Sd6ut",
      "https://lh3.googleusercontent.com/d/1dyhaJOO1spj-KVs-5rW1budN2CGu5kcu",
      "https://lh3.googleusercontent.com/d/15lkjI2SQAGKtd4Wc4k6ela06B6ao02vU",
      "https://lh3.googleusercontent.com/d/1NG7bQaO_wGyRs-Y8TEgagncR6ai8WG4i",
    ],
    description: `Situated far away from the bustling academic and hostel areas, Brahmaputra Hostel is one of the largest boarding abodes comprising over 1200+ residents of the Institute. Ranging over 5 blocks. It has inhouse facility of Kiosk, playground and other lush green environment. Hostel is equipped with lifts and consists 02 spacious Mess area that can cater around 600+ Students at a time.`,
    contacts: [
      {
        name: "Dr. Yogesh Kumar",
        designation: "Warden",
        mobile: "9410478242",
        email: "yogesh.me@nitp.ac.in",
      },
      {
        name: "Dr. Bhabani Shankar Das",
        designation: "Warden",
        mobile: "7978848747",
        email: "bsd.ce@nitp.ac.in",
      },
      {
        name: "Dr. Rajan Agrahari",
        designation: "Asstt. Warden",
        mobile: "9506096868",
        email: "rajan.ec@nitp.ac.in",
      },
      {
        name: "Dr. Shubham Meena",
        designation: "Asstt. Warden",
        mobile: "7587520851",
        email: "ar.shubham@nitp.ac.in",
      },
      {
        name: "Shahid Jamal",
        designation: "Office Assistant",
        mobile: "8090913021",
        email: "jamalshadid195@gmail.com",
      },
      {
        name: "Sudhir Kumar",
        designation: "Peon",
        mobile: "9334069811",
        email: "",
      },
    ],
  },
  {
    name: "Kadambini Hostel (Bihta Campus)",
    gender: "Female",
    seater: "Single & Multi-Seater",
    capacity: "700+",
    images: [
      "https://lh3.googleusercontent.com/d/1G1NTAB6sUgL_8FC3ktFvX7kCUIIIxICc",
      "https://lh3.googleusercontent.com/d/1aRPKSiFxf6GQPFUsZuakRPBapcI3e2ox",
      "https://lh3.googleusercontent.com/d/19VA-McwAxw5TUjKFBFNaqt5Fvvl-1jEv",
      "https://lh3.googleusercontent.com/d/1eDfG_0z5avoWCBy0J51dgcUokOdC9exD",
      "https://lh3.googleusercontent.com/d/1YcK5la6qqLeDzaFYHSFjQ5D_CAr6snMU",
      "https://lh3.googleusercontent.com/d/1O5bnQ4utjHP3hr9LNcZ_GK3SrXh_3KSY",
      "https://lh3.googleusercontent.com/d/1kEPiqM2-4d5YUaxSosNOLSTelbCIDwjD",
    ],
    description: `Kadambini Hostel is one of the two hostels  which is abode to the female students of NIT Patna. It is situated in NIT Patna Bihta Camppus The hostel constitutes single rooms, twin rooms and dormitories, laundry facilities and accommodating around 700+ boarders. The Kadambini Hostel mess is fairly large and spacious as it caters to a rather huge population. It can house a total of 320 boarders at a time.`,
    contacts: [
      {
        name: "Dr. Kakali Chatterjee",
        designation: "Warden",
        mobile: "8544401016",
        email: "",
      },
      {
        name: "Dr. Meena Panchore",
        designation: "Asstt. Warden",
        mobile: "6265308787",
        email: "",
      },
      {
        name: "Dr. Richa Aggarwal",
        designation: "Asstt. Assistant",
        mobile: "9559090527",
        email: "",
      },
      {
        name: "Sunita Kumari",
        designation: "Office Attendant",
        mobile: "7783821389",
        email: "",
      },
      {
        name: "Preety Bharti",
        designation: "Office Assistant",
        mobile: "8252321881",
        email: "",
      },
    ],
  },
  {
    name: "Aryabhatta Hostel (Bihta Campus)",
    gender: "Male",
    seater: "Single & Multi-Seater",
    capacity: "700+",
    images: [
      "https://lh3.googleusercontent.com/d/1De0Opr3y0Y-qmzT-Gg154S7zoAMulDa-",
      "https://lh3.googleusercontent.com/d/1j-Dt4yXG3V3V_LifV_hd8Dnmp5byookd",
      "https://lh3.googleusercontent.com/d/1wqoqphjcH0duyD3lNlNOi4dMlnp_11tI",
      "https://lh3.googleusercontent.com/d/1G9UCSGl8Iy2aTYpYC4FE_G3_jZ_8Q0gV",
      "https://lh3.googleusercontent.com/d/1XGAOvYrLThYAbyqEuGt7DkrxSeSSJcRq",
    ],
    description: `This Hostel is situated in the Bihta campus of NIT Patna, and is one of the largest Hostel comprising more than 1200+ Students. It has facilities like elevators, vending machines, 24x7 CCTV monitoring of the entrance and exit of the borders. Security guard is available 24x7 for the security of the boarders.`,
    contacts: [
      {
        name: "Dr. Subodh Srivastava",
        designation: "Warden",
        mobile: "7565036892",
        email: "subosh@nitp.ac.in",
      },
      {
        name: "Dr. Mukesh Kumar",
        designation: "Asst. Warden",
        mobile: "8984142557",
        email: "mukesh.kumar@nitp.ac.in",
      },
      {
        name: "Dr. Ajay Kumar Maurya",
        designation: "Asstt. Warden",
        mobile: "9455262876",
        email: "ajay.ec@nitp.ac.in",
      },
      {
        name: "Nitish Gupta",
        designation: "Office Assistant",
        mobile: "9506400448",
        email: "",
      },
    ],
  },
  {
    name: "Bagmati Hostel",
    gender: "Male",
    seater: "Single & Multi-Seater",
    capacity: "100+",
    images: [
      "https://lh3.googleusercontent.com/d/1sOciGsvbN-JnHj9vH9mNziD7wpzXNzoB",
      "https://lh3.googleusercontent.com/d/1s6AOsEZvh_XJzYybQ4PJ0ARKgd8xX0na",
    ],
    description: `This Hostel is closest to the campus. Total Capacity of this beautiful Hostel is around 100+. This hostel has a well-decorated reading room. The Hostel has a well-maintained garden in the vast open space at the front, which has benches and pathways for boarders.`,
    contacts: [],
  },
];

const HostelImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return <p className="text-black">No images available</p>;
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Image */}
      <div className="w-full max-h-[500px] overflow-hidden rounded-lg shadow-md flex justify-center items-center">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="max-w-full max-h-full object-contain transition-all duration-500"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HostelCard = ({ hostel }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-300 mb-6 text-sm md:text-base">
      <h2 className="text-2xl font-bold text-red-950 mb-2">{hostel.name}</h2>

      {hostel.images.length > 0 && <HostelImageSlider images={hostel.images} />}
      <p className="text-gray-700 mb-2">
        {hostel.gender && (
          <>
            <strong>Gender:</strong> {hostel.gender} |{" "}
          </>
        )}
        {hostel.seater && (
          <>
            <strong>Seater:</strong> {hostel.seater} |{" "}
          </>
        )}
        {hostel.capacity && (
          <>
            <strong>Capacity:</strong> {hostel.capacity}{" "}
          </>
        )}
      </p>
      <p className="text-gray-800 mb-4">{hostel.description}</p>

      {hostel.contacts.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-red-950 mb-2">Contacts:</h3>
          <div className="overflow-x-auto rounded-lg shadow-md border border-gray-100">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#421010] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Name</th>
                  <th className="text-center px-6 py-4 font-semibold w-48">
                    Designation
                  </th>
                  <th className="text-center px-6 py-4 font-semibold w-48">
                    Mobile
                  </th>
                  <th className="text-center px-6 py-4 font-semibold w-48">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {hostel.contacts.length > 0 ? (
                  hostel.contacts.map((contact, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="text-left px-6 py-4 text-gray-800">
                        {contact.name}
                      </td>
                      <td className="text-center px-6 py-4 text-gray-800">
                        {contact.designation}
                      </td>
                      <td className="text-center px-6 py-4 text-gray-800">
                        {contact.mobile}
                      </td>
                      <td className="text-center px-6 py-4 text-gray-800">
                        {contact.email}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center px-6 py-4 text-gray-500"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const AllHostelsTab = () => {
  return (
    <div className="text-black mt-2 w-full text-sm md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-red-950 text-center">
        NIT Patna Hostels
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {Allhostels.map((hostel, index) => (
          <HostelCard key={index} hostel={hostel} />
        ))}
      </div>
    </div>
  );
};

export default AllHostelsTab;
