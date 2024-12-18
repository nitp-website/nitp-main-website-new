import Head from "next/head";
import Sidebar from "./components/Sidebar";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-0 w-full mb-8">
      <div className="mt-6 mb-12 md:mt-0 ">
        <Sidebar />
      </div>
      <div className="flex flex-col md:w-3/4 ">
        <div>
          <span className="text-xl  font-semibold border-b-2 pb-2 border-red-800">
            Security
          </span>
        </div>

        <div className="mt-8 text-base text-gray-500 mx-4">
          <p className="text-justify">
            The institute administration gives utmost attention to the security of the lives of the students and employees. Ex-servicemen security personnel provides 24x7 security cover all over the campus which includes the hostels and the staff quarters. State security personals carry out regular patrolling outside the campus during night time. The girls’ hostels are specially taken care of and are carefully guarded. Entry inside the campus is restricted for outsiders to prevent security breaches.The security of the institute, hostels and its inmates is headed by the Asst.Registrar, Mr.J P Sharma who was a defence officer.He served the Indian Air Force for more than 18 years.At present, 72 ex - serviceman were recruited by the institute on contract basis for additional security.
          </p>
        </div>

      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Security Facilities | NIT Patna",
  };
}
