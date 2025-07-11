
import Sidebar from "./components/Sidebar";





export default function Home() {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-24 mt-10 w-full mb-10">
      {/* Sidebar Section */}
      <div className="mt-6 md:mt-0 md:w-1/4">
        <Sidebar />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:w-3/4">
        {/* Title */}
        <div>
          <span className="text-2xl font-semibold border-b-4 border-red-700 pb-2 text-red-700">
            Medical Facilities
          </span>
        </div>

        {/* Description */}
        <div className="mt-8 text-lg text-gray-700 leading-relaxed space-y-6">
          {/* Introduction */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Introduction:</h2>
            <p className="text-justify">
              The National Institute of Technology Patna (hereinafter referred to as 
              <span className="font-semibold text-gray-900"> NIT Patna </span> 
              or Institute) is fully committed to provide all types of basic healthcare facilities 24x7 to its students through Health Centre of NIT Patna (hereinafter referred to as 
              <span className="font-semibold text-gray-900"> health center</span>). 
              To serve the students of NIT Patna in a better and organized way, following Standard Operating Procedure (SoP) is hereby proposed to be followed:
            </p>
          </div>

          {/* Facilities of Health Center */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Facilities of Health Center</h2>
            <ol className="list-decimal ml-6 space-y-4">
              <li className="text-justify">
                Primary and basic healthcare treatments will be provided by health center. Accordingly, in case of any medical emergency, the affected students will be transported to nearby hospitals immediately through the fastest possible means.
              </li>
              <li className="text-justify">
                In case of non-emergency cases such as minor injury while playing sports, seasonal illnesses and old history of diseases etc, the students should visit the health center along with the medical health book provided by the Institute. The students will invariably carry their medical health book as and when they visit the health center.
              </li>
              <li className="text-justify">
                Further emergency cases such as unconscious patient, myocardial infarction (Heart Attack), stroke attack, seizures attack, electric shock patient, suspected fracture injured patient etc would be immediately transported to nearby hospitals in an ambulance or any available vehicle. Depending upon assessment by Medical Officer/ Paramedical staff of respective hospital, the patient may be referred to higher or district hospital as deemed necessary. It should be noted that the list of empanelled hospitals with the Institute is available on Institute’s website. The same may be referred to in case of emergency.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

// Metadata for SEO
export async function generateMetadata({ params }) {
  return {
    title: "Medical Facilities | NIT Patna",
  };
}
