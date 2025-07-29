"use client";

const HostelFacilities = {
  about: `The hostel facilities at NIT Patna are designed to ensure a comfortable and secure living environment for students. Each hostel provides uninterrupted access to essential utilities, including water, electricity, and 24/7 internet connectivity. To enhance the overall experience, hostels are equipped with additional amenities such as a TV room, washing machines, centralized water heaters powered by solar panels, and night canteens. For the convenience of residents, all hostels are fitted with lifts to facilitate easy movement.`,

  sections: [
    {
      heading: "Security",
      content:
        "The safety and well-being of hostel residents are of utmost priority. All hostels are under continuous surveillance with CCTV cameras, and security personnel are stationed 24/7 to ensure a secure environment. Additionally, every hostel is equipped with comprehensive fire safety systems.",
    },
    {
      heading: "Medical Facilities",
      content:
        "Basic medical provisions, including first-aid kits, are available round the clock in all hostels. A dedicated health center within the institute caters to the medical needs of students. Moreover, a 24/7 ambulance service is accessible to all hostels to address any emergencies promptly.",
    },
    {
      heading: "Recreational and Convenience Facilities",
      items: [
        {
          subheading: "Indoor Sports Room",
          description:
            "Each hostel includes an indoor sports area where students can enjoy games like carrom and table tennis at their convenience.",
        },
        {
          subheading: "Vending and Coffee Machines",
          description:
            "Vending machines are installed in the hostels, allowing students to purchase snacks, coffee, and beverages anytime.",
        },
      ],
    },
    {
      heading: "Special Facilities for Students with Disabilities",
      items: [
        "Ramps in all Hostels.",
        "Easy access toilets for boarders with disabilities.",
        "In some hostels few rooms are reserved for physically challenged boarders. These rooms are attached to the toilet and bathroom. These rooms are kept near the main entrance of the hall for easy access by the physically challenged boarders.",
        "24 x 7 support is being provided to the physically challenged boarders.",
      ],
    },
  ],
};

const FacilitiesTab = () => {
  return (
    <div className="text-black mt-2 w-full">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-red-950 text-center">
        Hostel Facilities
      </h1>
      <p className="text-red-950 text-base text-justify mb-6">{HostelFacilities.about}</p>

      {HostelFacilities.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold text-red-950 mb-2">{section.heading}</h2>
          {section.content && <p className="text-gray-700 text-base">{section.content}</p>}

          {section.items && Array.isArray(section.items) && (
            <ul className="list-disc pl-6 space-y-2 mt-2">
              {section.items.map((item, idx) =>
                typeof item === "string" ? (
                  <li key={idx} className="text-gray-700 text-base">{item}</li>
                ) : (
                  <li key={idx}>
                    <strong className="text-red-950 text-lg">{item.subheading}: </strong>
                    <span className="text-gray-700 text-base">{item.description}</span>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};





export default FacilitiesTab;