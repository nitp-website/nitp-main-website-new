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
          <span className="text-xl ml-3  font-semibold border-b-2 pb-2 border-red-800">
            Medical Facilities
          </span>
        </div>
       
        <div className="mt-8 text-base text-gray-500 mx-4">
          <p className="text-justify">
            The National Institute of Technology Patna (hereinafter referred to as NIT
            Patna or Institute) is fully committed to provide all types of basic healthcare
            facilities 24x7 to its students through Health Centre of NIT Patna (hereinafter
            referred to as health centre). To serve the students of NIT Patna in a better
            and organized way, following Standard Operating Procedure (SoP) is hereby
            proposed to be followed:
          </p>
          <li className='text-justify'>
            <span className='font-semibold text-gray'>
              Primary and basic healthcare treatments will be provided by health centre.
              Accordingly, in case of any medical emergency, the affected students will
              be transported to nearby hospitals immediately through the fastest
              possible means.
            </span>
          </li>
          <li className='text-justify'>
            <span className='font-semibold text-gray'>
              In case of non-emergency cases such as minor injury while playing sports,
              seasonal illnesses and old history of diseases etc, the students should visit
              the health centre along with the medical health book provided by the
              Institute. The students will invariably carry their medical health book as
              and when they visit the health centre.
            </span>
          </li>
          <li className='text-justify'>
            <span className='font-semibold text-gray'>
              Further emergency cases such as unconscious patient, myocardial
              infarction (Heart Attack), stroke attack, seizures attack, electric shock
              patient, suspected fracture injured patient etc would be immediately
              transported to nearby hospitals in an ambulance or any available vehicle.
              Depending upon assessment by Medical Officer/ Paramedical staff of
              respective hospital, the patient may be referred to higher or district
              hospital as deemed necessary. It should be noted that the list of
              empanelled hospitals with the Institute is available on Institute’s website.
              The same may be referred to in case of emergency.
            </span>
          </li>

        </div>

      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Sports Facilities | NIT Patna",
  };
}