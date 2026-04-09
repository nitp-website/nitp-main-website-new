"use-client";
import PeopleCard from "./PeopleCard";
// import dean_img from "./Dean.png";
import img1 from "./prabhat-kumar.png";

export default function PeopleList() {
  const Head = [
    {
      id: 1,
      name: "Prof. Prabhat Kumar",
      image: img1,
      designation: "Professor & Head (CCIS)",
      email: "prabhat@nitp.ac.in",
      profileLink: "/profile/prabhat@nitp.ac.in",
    },
  ];

  const officer = [
    {
      id: 1,
      name: "Dr. Santosh Kumar",
      image: "",
      designation: "Senior Scientific Officer",
      email: "",
      profileLink: "", // No profile if no email
    },
  ];

  const other = [
    {
      id: 3,
      name: "Mr.  Coomar Kislay",
      image: "/other3.jpg",
      designation: "Technical Assistant",
      Expertise: "Full Stack Developer in .NET Platform",
      email: "kislay.mis@nitp.ac.in",
      phone: "",
      profileLink: "/profile/kislay.mis@nitp.ac.in",
    },
    {
      id: 4,
      name: "Mr. Purushottam Kumar",
      image: "/other4.jpg",
      designation: "Technical Assistant",
      Expertise: "Server and Network Configuration",
      email: "purushottam.ccis@nitp.ac.in",
      phone: "",
      profileLink: "/profile/purushottam.ccis@nitp.ac.in",
    },
    {
      id: 5,
      name: "Mr. Aakash Kumar",
      image: "/other5.png",
      designation: "Technical Assistant",
      Expertise: "Full Stack Developer in .NET Platform",
      email: "aakash.ta@nitp.ac.in",
      phone: "",
      profileLink: "/profile/aakash.ta@nitp.ac.in",
    },
  ];

  const CCIS_IT_Services = [
    {
      id: 1,
      name: "Mr. Ritesh Kumar",
      image:
        "https://lh3.googleusercontent.com/d/1jY6hwN0RJF9kG8sk__jeBrKdcQtCnw_z=w320?authuser=0",
      designation: "Technical Assistant",
      email: "ritesh.its@nitp.ac.in",
      phone: "",
    },
    {
      id: 2,
      name: "Mr. Paritosh Bhushan",
      image:
        "https://lh3.googleusercontent.com/d/1VWQV18z_qWp_7oeH4LX_S-GlU0w_m88p=w320?authuser=0",
      designation: "Technical Assistant",
      email: "paritosh.its@nitp.ac.in",
      phone: "",
    },
  ];
  return (
    <div className="flex flex-col p-4 m-4">
      <div key="People">
        <h6 className="font-bold text-black">Head</h6>
        <div className="grid md:grid-cols-1 gap-1">
          {Head.map((faculty) => (
            <PeopleCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
              designation={faculty.designation}
              email={faculty.email}
              phone={faculty.phone}
              Expertise={faculty.Expertise}
              profileLink={faculty.profileLink}
            />
          ))}
        </div>
        <div key="Administration">
          <h6 className="font-bold text-black">Officers</h6>
          <div className="grid md:grid-cols-1 gap-1">
            {officer.map((faculty) => (
              <PeopleCard
                key={faculty.id}
                name={faculty.name}
                image={faculty.image}
                designation={faculty.designation}
                email={faculty.email}
                phone={faculty.phone}
                Expertise={faculty.Expertise}
                profileLink={faculty.profileLink}
              />
            ))}
          </div>
        </div>
      </div>
      <div key="Others">
        <h6 className="font-bold text-black">Others</h6>
        <div className="grid md:grid-cols-1 gap-1">
          {other.map((faculty) => (
            <PeopleCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
              designation={faculty.designation}
              email={faculty.email}
              phone={faculty.phone}
              Expertise={faculty.Expertise}
              profileLink={faculty.profileLink}
            />
          ))}
        </div>
      </div>

      <div key="CCIS IT Services">
        <h6 className="font-bold text-black">CCIS/IT Services</h6>
        <div className="grid md:grid-cols-1 gap-1">
          {CCIS_IT_Services.map((faculty) => (
            <PeopleCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
              designation={faculty.designation}
              email={faculty.email}
              phone={faculty.phone}
              Expertise={faculty.Expertise}
              profileLink={faculty.profileLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
