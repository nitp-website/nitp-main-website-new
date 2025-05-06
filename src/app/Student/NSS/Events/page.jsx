import React from "react";

const Event = [
  {
    title: "Swachhta Hi Seva",
    description: `The Swachhta hi seva campaign is an integral part of today's time, which aims to engage citizens in promoting cleanliness and sanitation. This is organized by NSS NIT Patna during 17 september - 2nd october.
    This event is organized in NIT Patna by NSS Organisation on a very special day Mahatma gandhi jayanti. The aim of this event is to create awareness among people toward cleanliness and sanitation.
    In This event cleanliness drive was organized within NIT Patna campus, involving faculty members,students, and some staff etc. Teams were assigned areas of the campus to clean the playground and some areas. And be aware of the people who throw the waste in the dustbin not outside it.`,
  },
  {
    title: "Independence Day Celebration",
    description: `Sankalp celebrated Independence Day with great enthusiasm, bringing together children for a memorable event. The day was filled with patriotism as the young participants showcased their talents through various activities. The celebration began with an inspiring speech, reflecting on the significance of India's independence. This was followed by vibrant dance performances, where children dressed in colorful attire moved to the tunes of patriotic songs. Their enthusiasm and spirit made the event lively and engaging. The event not only celebrated India's freedom but also encouraged the children to understand the importance of unity and pride in their nation's history.`,
  },
];

const NSSEventPage = () => {
  return (
    <div className="w-full min-h-screen p-4 bg-white bg-opacity-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-6">
        Events
      </h2>
      <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
        {Event.map((event, index) => (
          <div key={index} className="border shadow-lg p-4 rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-red-800 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NSSEventPage;
