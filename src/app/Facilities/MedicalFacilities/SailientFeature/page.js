import React from "react";
import Sidebar from "../components/Sidebar";





export default function SalientFeaturesPage() {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-24 mt-10 w-full mb-8">
      {/* Sidebar Section */}
      <div className="mt-6 mb-12 md:mt-10 md:w-1/4">
        <Sidebar />
      </div>

      {/* Content Section */}
      <div className="mt-8 text-base text-gray-700 md:w-3/4">
        {/* Title */}
        <h3 className="font-bold text-red-700 text-xl md:text-2xl mb-4">
          Salient Features
        </h3>

        {/* Description */}
        <p className="text-justify text-lg mb-6">
          In order to achieve the desired goal of facilitating best medical services to
          the students of NIT Patna, all concerned of the Institute are required to follow
          the guidelines as appended below:
        </p>

        {/* Features List */}
        <ol className="list-decimal ml-6 space-y-4 text-lg text-justify">
          <li>
            If any student requires any non-emergency health care facility during office hours,
            he/she should visit the health center with his/her medical diary. The doctor/paramedical
            staff of health center will do the primary check-up of the student and will provide the
            general medication and the student may be kept under observation, if required to do so.
          </li>

          <li>
            In case of emergency, ambulance must be called on priority. Contact details for the same
            are mentioned at para 9.
          </li>

          <li>
            In case any student falls sick or requires any health care facility outside the office hours,
            they can directly call the medical officers of the Institute or warden of the hostel. Contact
            details are mentioned at Para 9.
          </li>

          <li>
            In case of any emergency situation, the affected student or his/her friend/hostel inmates will
            promptly contact the warden of the respective hostel or the deployed security personnel (contact
            details are mentioned at para 9) and inform them about the situation. Consequent upon receiving
            the information, the concerned authority will immediately arrange to shift the student either in
            medical center or any nearby hospital through ambulance or any available vehicle. Information and
            update of the situation should be communicated by the concerned officials to the higher authorities
            of the Institute on regular basis.
          </li>

          <li>
            Similarly, if any student needs to avail ambulance service outside the office hours, the same should
            be provided either through hostel warden/security posted at hostel or by any other authorized officials.
            (Contact details are mentioned at Para 9).
          </li>

          <li>
            If any student is struggling with any psychological issues, he/she should visit to the counsellor of
            health center and counsellor will attend the students and provide first level counselling and supportive
            session on regular basis. Further, any student of the Institute can also communicate directly to the
            counsellor, if he/she feels that his/her classmate/roommate is struggling with any psychological issues.
            Confidentiality regarding the details of a student suffering from any psychological issue must be kept
            secret by all officials.
          </li>

          <li>
            If a student needs any specialized medical treatment, the same will be facilitated by the doctor/paramedical
            staff of health center.
          </li>

          <li>
            It is mandatory to keep the First Aid Box in every hostel, department and places where the student footfall
            is high. This will be arranged by the Chairman (HMC)/Head of the Department/Centre with the help of administration.
          </li>

          <li>
            In order to facilitate the students in their medical services, the list of officials and their contact number,
            for Patna and Bihta Campus, is provided as under:
          </li>
        </ol>
      </div>
    </div>
  );
}
