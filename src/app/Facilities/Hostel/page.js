import Head from "next/head";

const hostels = [
  {
    name: "Ganga Hostel",
    seater: "",
    gender: "Female",
    capacity: "500",
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
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
    images: [],
    description: `This Hostel is closest to the campus. Total Capacity of this beautiful Hostel is around 100+. This hostel has a well-decorated reading room. The Hostel has a well-maintained garden in the vast open space at the front, which has benches and pathways for boarders.`,
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
];

export default function Home() {
  const places = [
    {
      image:
        "https://i.postimg.cc/NGm564PC/hostel.jpg",
      subheading: "Hostel & Mess",
      text: `Residential facilities are provided to students in three boys’ hostels and two girls’ hostel. Presently, all the girls and many of the boys are accommodated in these hostels. The hostels are guarded round the clock by able private security staffs.Patrolling is also done by state security personnel during night. There are also separate wardens for each and every hostel in order to maintain discipline. Each hostel provides a central mess facility for breakfast, lunch and dinner. Uninterrupted water and electricity supply are also provided. Hostels have got separate wi fi connections for providing internet facilities to students 24x7. Newspapers and magazines are put up in the common rooms. Cleanliness and hygiene are taken care of and maintained in every aspect.`,
    },
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Hostel & Mess</title>
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
    title: "Hostel & Mess | NIT Patna",
  };
}
