"use-client";
import PeopleCard from './PeopleCard'
import dean_img from './Dean.png'

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
        image: "",
        designation: "Student Activity & Sports Officer",
        email: "arijit.saso@nitp.ac.in",
      },
      
    ]
  
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
          ))
          }
        </div>
      </div>
      </div>
      </div>
    );
  }
  