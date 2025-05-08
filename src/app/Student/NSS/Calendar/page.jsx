import React from "react";

const Event = [
  {
    organisingBody: "NSS",
    events: [
      "Swachhata hi Seva",
      "Orientation",
      "Blood Donation Camp",
      "Yuva Manthan Model United Nation",
    ],
  },
  {
    organisingBody: "Sankalp",
    events: [
      "Independence Day Celebration",
      "Cleanliness Drive",
      "Stationery Distribution",
      "Drawing Competition",
      "Children’s Day",
    ],
  },
];

const NSSCalendarPage = () => {
  return (
    <div className="w-full min-h-screen p-4 bg-white bg-opacity-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-6">
        Schedule for Annual Year 24-25
      </h2>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Event.map((event, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-red-800 mb-2">
                {event.organisingBody}
              </h4>
              <ul className="list-disc list-inside space-y-2">
                {event.events.map((e, i) => (
                  <li key={i} className="text-gray-600">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NSSCalendarPage;
