
import React from 'react';
import Sidebar from '../Sidebar.js';

const scheduleData = [
  {
    day: 'Monday',
    sessions: [
      {
        doctor: 'Dr. Santosh Kumar Sudhakar, Medical Officer',
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
      },
      {
        doctor: 'Dr. A. K. Arya, Medical Officer',
        time: '10:00 AM to 01:30 PM',
        time1: '02:00 PM to 06:30 PM',
      },
      {
        doctor: 'Dr. Kanchan Priya, Medical Officer',
        time: '12:30 PM to 02:30 PM',
        time1: '03:00 PM to 09:00 PM',
      },
    ],
  },
  {
    day: 'Tuesday',
    sessions: [
      {
        doctor: 'Dr. Santosh Kumar Sudhakar, Medical Officer',
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
      },
      {
        doctor: 'Dr. A. K. Arya, Medical Officer',
        time: '10:00 AM to 01:30 PM',
        time1: '02:00 PM to 06:30 PM',
      },
      {
        doctor: 'Dr. Kanchan Priya, Medical Officer',
        time: '12:30 PM to 02:30 PM',
        time1: '03:00 PM to 09:00 PM',
      },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [
      {
        doctor: 'Dr. Santosh Kumar Sudhakar, Medical Officer',
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
      },
      {
        doctor: 'Dr. A. K. Arya, Medical Officer',
        time: '10:00 AM to 01:30 PM',
        time1: '02:00 PM to 06:30 PM',
      },
      {
        doctor: 'Dr. Kanchan Priya, Medical Officer',
        time: '12:30 PM to 02:30 PM',
        time1: '03:00 PM to 09:00 PM',
      },
    ],
  },
  {
    day: 'Thursday',
    sessions: [
      {
        doctor: 'Dr. Santosh Kumar Sudhakar, Medical Officer',
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
      },
      {
        doctor: 'Dr. A. K. Arya, Medical Officer',
        time: '10:00 AM to 01:30 PM',
        time1: '02:00 PM to 06:30 PM',
      },
      {
        doctor: 'Dr. Kanchan Priya, Medical Officer',
        time: '12:30 PM to 02:30 PM',
        time1: '03:00 PM to 09:00 PM',
      },
    ],
  },
  {
    day: 'Friday',
    sessions: [
      {
        doctor: 'Dr. Santosh Kumar Sudhakar, Medical Officer',
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
      },
      {
        doctor: 'Dr. A. K. Arya, Medical Officer',
        time: '10:00 AM to 01:30 PM',
        time1: '02:00 PM to 06:30 PM',
      },
      {
        doctor: 'Dr. Kanchan Priya, Medical Officer',
        time: '12:30 PM to 02:30 PM',
        time1: '03:00 PM to 09:00 PM',
      },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      {
        doctor: 'Dr. Santosh Kumar Sudhakar, Medical Officer',
        time: '09:00 AM to 01:00 PM',
      },
      {
        doctor: 'Dr. Kanchan Priya, Medical Officer',
        time: '01:00 PM to 05:00 PM',
      },
    ],
  },
  {
    day: 'Sunday',
    sessions: [
      {
        doctor: 'Dr. A. K. Arya, Medical Officer',
        time: '09:30 AM to 01:30 PM',
      },
    ],
  },
];




const DoctorSchedule = () => {
  return (
    <div className="bg-gray-100 py-10 flex flex-col md:flex-row min-h-screen">
      <div className="mt-10 mb-6 md:mt-10 md:ml-8">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col items-center px-2">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h1 className="text-3xl font-extrabold text-red-700 text-center mb-8 tracking-tight">
            Doctor's Weekly Schedule (Patna Campus)
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="py-3 px-4 rounded-tl-2xl">Day</th>
                  <th className="py-3 px-4">Name of the Doctor</th>
                  <th className="py-3 px-4 rounded-tr-2xl">Time</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((dayData, index) => (
                  <React.Fragment key={index}>
                    {dayData.sessions.map((session, sessionIndex) => (
                      <tr
                        key={sessionIndex}
                        className={
                          sessionIndex % 2 === 0
                            ? "bg-gray-50"
                            : "bg-white"
                        }
                      >
                        {sessionIndex === 0 && (
                          <td
                            className="py-3 px-4 font-semibold text-center align-middle border-t border-l border-gray-200 text-black"
                            rowSpan={dayData.sessions.length}
                          >
                            {dayData.day}
                          </td>
                        )}
                        <td className="py-3 px-4 border-t border-gray-200 text-center text-black" >{session.doctor}</td>
                        <td className="py-3 px-4 border-t border-r border-gray-200 text-center text-black">
                          {session.time}
                          {session.time1 && (
                            <>
                              <br />
                              {session.time1}
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-8 bg-red-50 rounded-xl p-5 text-gray-800 text-base shadow-inner">
            <li className="mb-2">
              <span className="font-semibold text-red-700">Counsellor (Ms. Saroj Verma):</span> Monday to Friday from <b>02:30 PM to 05:30 PM</b>.
            </li>
            <li className="mb-2">
              <span className="font-semibold text-red-700">Physiotherapist (Dr. Niranjan Kumar):</span> Monday to Saturday from <b>12:00 Noon to 04:00 PM</b>.
            </li>
            <li className="mt-2 text-sm text-gray-600">
              <b>Note:</b> All the above mentioned Medical Officer, Counsellor, and Physiotherapist will ensure that they should be available 24x7 through electronic mode.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};





export default DoctorSchedule;