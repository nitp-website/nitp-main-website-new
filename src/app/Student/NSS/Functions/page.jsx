import Head from "next/head";

export default function NSSFunctions() {
  const data = [
    {
      title: "Functionalities of NSS",
      listItems: [
        {
          label: "Community Understanding",
          description:
            "NSS volunteers understand the community they work in and their role in it.",
        },
        {
          label: "Problem Solving",
          description:
            "NSS volunteers identify community needs and problems and help solve them.",
        },
        {
          label: "Social Responsibility",
          description:
            "NSS volunteers develop a sense of civic and social responsibility.",
        },
        {
          label: "Leadership",
          description:
            "NSS volunteers develop leadership qualities and democratic attitudes.",
        },
        {
          label: "Emergency Preparedness",
          description:
            "NSS volunteers develop the ability to respond to emergencies and natural disasters.",
        },
        {
          label: "National Integration",
          description:
            "NSS volunteers practice national integration and social harmony.",
        },
        {
          label: "Community Participation",
          description:
            "NSS volunteers learn how to mobilize community participation.",
        },
        {
          label: "Group Living",
          description: "NSS volunteers develop competence for group living.",
        },
      ],
    },
    {
      title: "Functionalities of Sankalp",
      listItems: [
        {
          label: "After-School Tutoring",
          description:
            "Provide extra support to children who are already enrolled in school but need additional help.",
        },
        {
          label: "Basic Literacy and Numeracy Programs",
          description:
            "Focus on foundational education in reading, writing, and arithmetic.",
        },
        {
          label: "Scholarship Programs",
          description:
            "Offer financial assistance to children for school fees, books, and other educational materials.",
        },
        {
          label: "Parent Awareness and Engagement",
          description:
            "Educate parents on the importance of education and engage them in their children's learning.",
        },
        {
          label: "Stationery Distribution Program",
          description:
            "Ensure that underprivileged children have access to essential stationery for their education, reducing financial barriers to learning.",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-8 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>NSS</title>
      </Head>

      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col gap-10 items-center">
          {data.map((section, index) => (
            <div key={index} className="w-full p-4">
              <h2 className="text-2xl font-bold mb-4 text-red-800 text-center">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {section.listItems.map((item, i) => (
                  <li key={i} className="text-gray-600">
                    <strong>{item.label}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
