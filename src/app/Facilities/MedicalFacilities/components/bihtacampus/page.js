import React from 'react';
import Sidebar from '../Sidebar.js';

const scheduleData = [
  {
    day: 'Monday',
    sessions: [
      {
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
        doctor: 'Dr. Anubhuti Sharma , Medical Officer',
      },
      {
        time: '09:30 AM to 01:30 PM',
        time1:'02:00 PM to 6:00 PM',
        doctor: 'Dr. Vikas Kumar Raj, Sr. Medical Officer',
      },
      
      {
        time: '01:00 PM to 04:00 PM',
        time1: '04:30 PM to 09:30 PM',
        doctor: 'Dr. Manoj Kumar, Medical Officer',
      },
    ],
  },
  {
    day: 'Tuesday',
    sessions: [
      {
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
        doctor: 'Dr. Anubhuti Sharma , Medical Officer',
      },
      {
        time: '09:30 AM to 01:30 PM',
        time1:'02:00 PM to 6:00 PM',
        doctor: 'Dr. Vikas Kumar Raj,Sr. Medical Officer',
      },
      
      {
        time: '01:00 PM to 04:00 PM',
        time1: '04:30 PM to 09:30 PM',
        doctor: 'Dr. Manoj Kumar, Medical Officer',
      },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [
      {
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
        doctor: 'Dr. Anubhuti Sharma , Medical Officer',
      },
      {
        time: '09:30 AM to 01:30 PM',
        time1:'02:00 PM to 6:00 PM',
        doctor: 'Dr. Vikas Kumar Raj,Sr. Medical Officer',
      },
      
      {
        time: '01:00 PM to 04:00 PM',
        time1: '04:30 PM to 09:30 PM',
        doctor: 'Dr. Manoj Kumar, Medical Officer',
      },
    ],
  },
  {
    day: 'Thursday',
    sessions: [
      {
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
        doctor: 'Dr. Anubhuti Sharma , Medical Officer',
      },
      {
        time: '09:30 AM to 01:30 PM',
        time1:'02:00 PM to 6:00 PM',
        doctor: 'Dr. Vikas Kumar Raj,Sr. Medical Officer',
      },
      
      {
        time: '01:00 PM to 04:00 PM',
        time1: '04:30 PM to 09:30 PM',
        doctor: 'Dr. Manoj Kumar, Medical Officer',
      },
    ],
  },
  {
    day: 'Friday',
    sessions: [
      {
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
        doctor: 'Dr. Anubhuti Sharma , Medical Officer',
      },
      {
        time: '09:30 AM to 01:30 PM',
        time1:'02:00 PM to 6:00 PM',
        doctor: 'Dr. Vikas Kumar Raj,Sr. Medical Officer',
      },
      
      {
        time: '01:00 PM to 04:00 PM',
        time1: '04:30 PM to 09:30 PM',
        doctor: 'Dr. Manoj Kumar, Medical Officer',
      },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      {
        time: '09:00 AM to 01:00 PM',
        time1: '01:30 PM to 05:30 PM',
        doctor: 'Dr. Anubhuti Sharma , Medical Officer',
      },
      {
        time: '09:30 AM to 01:30 PM',
        time1:'02:00 PM to 6:00 PM',
        doctor: 'Dr. Vikas Kumar Raj,Sr. Medical Officer',
      },
      
      {
        time: '01:00 PM to 04:00 PM',
        time1: '04:30 PM to 09:30 PM',
        doctor: 'Dr. Manoj Kumar, Medical Officer',
      },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      {
        time: '09:30 AM to 01:30 PM',
        doctor: 'Dr. Anubhuti Sharma , Medical Officer',
      },
     
    ],
  },
  
     
   
  
];

const DoctorSchedule = () => {
  return (
    <div className="bg-gray-100 py-10 flex flex-col md:flex-row">
    
      <div className="mt-10 mb-6 md:mt-10 md:ml-8">
        <Sidebar />
      </div>

      <div className="container min-w-40 px-4">
        <h1 className="text-2xl font-bold text-center mb-8">Doctor's Weekly Schedule</h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-center">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-2 py-2">Day</th>
                <th className="border border-gray-300 px-2 py-2">Name of the Doctor</th>
                <th className="border border-gray-300 px-2 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((dayData, index) => (
                <React.Fragment key={index}>
                  {dayData.sessions.map((session, sessionIndex) => (
                    <tr
                      key={sessionIndex}
                      className={sessionIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    >
                      {sessionIndex === 0 && (
                        <td
                          className="border border-gray-300 px-2 py-2 font-medium text-center align-middle"
                          rowSpan={dayData.sessions.length}
                        >
                          {dayData.day}
                        </td>
                      )}
                      <td className="border border-gray-300 py-2 text-center">{session.doctor}</td>
                      <td className="border border-gray-300 py-2">
                        {session.time}
                        <br />
                        {session.time1}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorSchedule;