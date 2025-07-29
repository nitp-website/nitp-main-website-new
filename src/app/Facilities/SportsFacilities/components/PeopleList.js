"use-client";
import PeopleCard from "./PeopleCard";
import dean_img from "./Dean.png";
import img1 from "./1.webp";
import faculty from "./faculty.jpeg";

export default function PeopleList() {
  const Deanery = [
    {
      id: 1,
      name: "Samrat Mukherjee",
      image: dean_img,
      designation: "Dean, Student Welfare",
      email: "dean.sw@nitp.ac.in",
    },
  ];

  const administration = [
    {
      id: 1,
      name: "Dr. Arijit Putatunda",
      image: img1,
      designation: "Student Activity & Sports Officer",
      email: "arijit.saso@nitp.ac.in",
    },
    {
      id: 2,
      name: "Abhishek Baisya",
      image: faculty,
      designation: "SAS Assistant",
      email: "ab@nitp.ac.in",
    },
  ];

  const staff = [
    
      {
        id: 1,
        name: "Bablu Choudhary",
        image: faculty,
        designation: "SAC care taker",
        email: "",
      },{
      id: 2,
      name: "Avinash Kumar",
      image: faculty,
      designation: "Mali",
      email: "",
    },
    
  ];

  return (
    <div className="flex flex-col p-4 m-4">
      <div key="People">
        <h6 className="font-bold text-black">Deanery</h6>
        <div className="grid md:grid-cols-1 gap-1">
          {Deanery.map((faculty) => (
            <PeopleCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
              designation={faculty.designation}
              email={faculty.email}
              phone={faculty.ext_no}
            />
          ))}
        </div>
        <div key="Administration">
          <h6 className="font-bold text-black">Administration</h6>
          <div className="grid md:grid-cols-1 gap-1">
            {administration.map((faculty) => (
              <PeopleCard
                key={faculty.id}
                name={faculty.name}
                image={faculty.image}
                designation={faculty.designation}
                email={faculty.email}
                phone={faculty.ext_no}
              />
            ))}
          </div>
        </div>
      </div>
        <div key="Others">
          <h6 className="font-bold text-black">Others</h6>
          <div className="grid md:grid-cols-1 gap-1">
            {staff.map((faculty) => (
              <PeopleCard
                key={faculty.id}
                name={faculty.name}
                image={faculty.image}
                designation={faculty.designation}
                email={faculty.email}
                phone={faculty.ext_no}
              />
            ))}
          </div>
        </div>
      </div>
  );
}
