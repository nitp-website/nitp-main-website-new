export default function Home() {


  const visionPoints = [
    {
      title: "Nurture Entrepreneurship",
      text:
        "To nurture entrepreneurship in those people who have a passion for creating something of their own which can benefit the society.",
    },
    {
      title: "Creating an Ecosystem",
      text:
        "Creating an ecosystem in which people can get out of their comfort zone and work on new ideas, technology to solve existing problems.",
    },
    {
      title: "Help Bihar",
      text: "Make Bihar a hub of entrepreneurship and entrepreneurs.",
    },
  ];

  const support = [
    {
      title: "Mentorship",
      subtitle: "Guiding your vision to reality.",
      text:
        "Provides expert advice and guidance to entrepreneurs, helping them refine their business models and strategies.",
    },
    {
      title: "Funding",
      subtitle: "Explore",
      text:
        "Access to funding avenues through cohorts, grants and investor connects to accelerate growth.",
    },
    {
      title: "Networking",
      subtitle: "Explore",
      text:
        "Connect with mentors, industry professionals and alumni to open doors for partnerships.",
    },
    {
      title: "Workspace",
      subtitle: "Explore",
      text: "Affordable shared workspaces and maker facilities to prototype and build.",
    },
  ];

  const leaders = [
    {
      name: "Prof. Pradip K. Jain",
      role: "Director, NIT Patna",
      note:
        "Renowned for high-power microwave research with extensive publications, patents and international collaborations.",
    },
    {
      name: "Dr. Bharat Gupta",
      role: "Professor in Charge, Incubation Center",
      note:
        "Leads initiatives in cutting-edge technologies and guides the Incubation Center's programs.",
    },
  ];


  return (
    <div className="mx-auto pl-5 pr-5 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      {/* Hero */}
      <section className="mb-10">
        <div className="rounded-xl bg-white border border-gray-100 p-6 md:p-10 shadow-sm">
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <p className="uppercase tracking-wide text-xs text-gray-500">Welcome to,</p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-red-800">Incubation Center</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">of NIT Patna.</h2>
            </div>
            <p className="text-gray-700 max-w-3xl">
              Empowering startups and entrepreneurs with mentorship, workspace, and funding to foster innovation and
              accelerate growth. Join us to turn your ideas into successful ventures.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://incubationcenter.nitp.ac.in/#idea" className="px-4 py-2 rounded-md bg-red-800 text-white hover:bg-red-900 transition">Incubate u'r Idea</a>
              <a href="https://incubationcenter.nitp.ac.in/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-red-800 text-red-800 hover:bg-red-50 transition">View Incubation Center Website</a>
            </div>
          </div>
        </div>
      </section>


      {/* About */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-red-800 mb-4">About Us</h3>
        <div className="rounded-lg bg-white border border-gray-100 p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            The Incubation Centre at the National Institute of Technology Patna is a vital hub for nurturing startups
            from inception to success. Equipped with tailored resources like office spaces, mentorship programs, and
            networking opportunities, we foster an environment conducive to growth and innovation. Our primary aim is to
            support early-stage startups by providing essential resources and guidance to accelerate their growth
            trajectory and minimize failure rates. We actively promote economic development, entrepreneurship, and the
            commercialization of research and innovation within the region by facilitating access to funding, mentorship,
            and networks.
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>
              Provide aspiring entrepreneurs with essential resources and networking opportunities through mentorship,
              funding avenues, and events to help startups overcome challenges and thrive.
            </li>
            <li>
              Highlight notable successes like Shekhar Telesystems, Busy Mechanic, and Vendospot to inspire future
              entrepreneurs.
            </li>
            <li>
              Foster innovation and resilience within the NIT Patna community, creating a supportive ecosystem where
              startups can flourish.
            </li>
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-red-800 mb-4">Our Vision</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {visionPoints.map((v, i) => (
            <div key={i} className="rounded-lg bg-white border border-gray-100 p-4 shadow-sm">
              <p className="text-lg font-semibold text-gray-800">{v.title}</p>
              <p className="text-gray-700 mt-2">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we support */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-red-800 mb-4">How we support</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {support.map((s, i) => (
            <div key={i} className="rounded-lg bg-white border border-gray-100 p-5 shadow-sm">
              <p className="text-lg font-semibold text-gray-800">{s.title}</p>
              <p className="text-sm text-gray-500">{s.subtitle}</p>
              <p className="text-gray-700 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-red-800 mb-4">Director Desk</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {leaders.map((p, i) => (
            <div key={i} className="rounded-lg bg-white border border-gray-100 p-5 shadow-sm">
              <p className="text-lg font-semibold text-gray-800">{p.name}</p>
              <p className="text-sm text-gray-500">{p.role}</p>
              <p className="text-gray-700 mt-2">{p.note}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
export async function generateMetadata({ params }) {
  return {
    title: "Incubation Center | NIT Patna",
  };
}
