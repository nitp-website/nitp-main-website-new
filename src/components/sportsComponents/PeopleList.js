"use-client";
import PeopleCard from './PeopleCard'

export default function PeopleList() {
    const Deanery = [
      {
        id: 1,
        name: "Dr. John Doe",
        image: "",
        designation: "Professor",
        email: "johndoe@example.com",
        ext_no: "1234",
      },
      {
        id: 2,
        name: "Dr. Jane Smith",
        image: "",
        designation: "Assistant Professor ",
        email: "janesmith@example.com",
        ext_no: "5678",
      },
    ];

    const administration = [
      {
        id: 1,
        name: "Dr. John Doe",
        image: "",
        designation: "Professor ",
        email: "johndoe@example.com",
        ext_no: "1234",
      },
      {
        id: 2,
        name: "Dr. Jane Smith",
        image: "",
        designation: "Assistant Professor ",
        email: "janesmith@example.com",
        ext_no: "5678",
      },
      {
        id: 3,
        name: "Dr. Emily Johnson",
        image: "",
        designation: "Lecturer ",
        email: "emilyjohnson@example.com",
        ext_no: "9101",
      },
      {
        id: 4,
        name: "Dr. Michael Brown",
        image: "",
        designation: "Senior Lecturer ",
        email: "michaelbrown@example.com",
        ext_no: "1123",
      }
    ]
  
    return (
      <div className="flex flex-col p-4 m-4">
      <div key="People">
        <h6 className="font-bold text-black">Deanery</h6>
        <div className="grid md:grid-cols-2 gap-1">
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
        <div className="grid md:grid-cols-2 gap-1">
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
  